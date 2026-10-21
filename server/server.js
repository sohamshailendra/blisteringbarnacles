/* =====================================================================
   Mera Bhavishya – Mera Nirnay  •  portal backend
   Serves public/index.html and the JSON API the page looks for. When the page finds
   GET api/meta it switches to "online mode": school directory, full college list,
   school lookup and School Corner photo uploads.
   Zero dependencies — plain Node 18+.  Start with:  npm start
   ===================================================================== */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const DATA = process.env.DATA_DIR || path.join(__dirname, 'data');
const STORAGE = process.env.STORAGE_DIR || path.join(__dirname, 'storage');
const PORT = +process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const MAX_PHOTOS = +process.env.MAX_PHOTOS || 5;
const MAX_UPLOAD = (+process.env.MAX_UPLOAD_MB || 30) * 1024 * 1024;
const UPLOAD_PIN = process.env.UPLOAD_PIN || '';           // optional shared PIN for School Corner
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';         // enables /api/admin/* when set
const PAGE_SIZE = 24;

const HARYANA_DISTRICTS = ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal',
  'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'];

/* ---------------- data ---------------- */
function readJSON(file, def) {
  try { return JSON.parse(fs.readFileSync(path.join(DATA, file), 'utf8')); } catch (e) { return def; }
}
const uniq = (a) => [...new Set(a.filter(Boolean))].sort((x, y) => x.localeCompare(y));
const norm = (s) => String(s == null ? '' : s).toLowerCase();

let DB;
function load() {
  const schools = readJSON('schools.json', { asOf: '', items: [] });
  const colleges = readJSON('colleges.json', { asOf: '', items: [] });
  const schoolItems = schools.items || [];
  const collegeItems = colleges.items || [];
  schoolItems.forEach((s) => { s._q = norm([s.name, s.udise, s.village, s.block, s.district, s.pincode].join(' ')); });
  collegeItems.forEach((c) => { c._q = norm([c.name_en, c.name_hi, c.city_en, c.city_hi, c.district, c.state, c.university, c.exam, c.aishe_code].join(' ')); });
  // featured institutions first, then alphabetical
  collegeItems.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || String(a.name_en).localeCompare(String(b.name_en)));
  DB = {
    schools: schoolItems,
    byUdise: new Map(schoolItems.map((s) => [String(s.udise), s])),
    colleges: collegeItems,
    scholarships: readJSON('scholarships.json', []),
    links: readJSON('links.json', []),
    meta: {
      ok: true,
      counts: { schools: schoolItems.length, colleges: collegeItems.length },
      districts: uniq(HARYANA_DISTRICTS.concat(schoolItems.map((s) => s.district))),
      mgmts: uniq(schoolItems.map((s) => s.mgmt)),
      boards: uniq(schoolItems.map((s) => s.board)),
      collegeDistricts: uniq(collegeItems.filter((c) => c.state === 'Haryana').map((c) => c.district)),
      schoolsAsOf: schools.asOf || '',
      collegesAsOf: colleges.asOf || '',
      maxPhotos: MAX_PHOTOS,
      uploadPin: !!UPLOAD_PIN,
    },
  };
  console.log(`[data] ${schoolItems.length} schools, ${collegeItems.length} colleges loaded from ${DATA}`);
}

const strip = (o) => { const r = {}; for (const k in o) if (k[0] !== '_') r[k] = o[k]; return r; };
function paginate(list, page, limit) {
  const size = Math.min(Math.max(+limit || PAGE_SIZE, 1), 100);
  const pages = Math.max(1, Math.ceil(list.length / size));
  const p = Math.min(Math.max(+page || 1, 1), pages);
  return { total: list.length, page: p, pages, items: list.slice((p - 1) * size, p * size).map(strip) };
}
function matchWords(hay, q) { return norm(q).split(/\s+/).filter(Boolean).every((w) => hay.indexOf(w) > -1); }

function searchSchools(q) {
  return DB.schools.filter((s) =>
    (!q.district || s.district === q.district) && (!q.mgmt || s.mgmt === q.mgmt) && (!q.board || s.board === q.board) &&
    (!q.location || s.location === q.location) && (q.cls !== '12' || +s.class_to >= 12) && (!q.q || matchWords(s._q, q.q)));
}
function searchColleges(q) {
  return DB.colleges.filter((c) =>
    (!q.region || (q.region === 'hry' ? c.state === 'Haryana' : c.state !== 'Haryana')) && (!q.type || c.type === q.type) &&
    (!q.district || c.district === q.district) && (!q.q || matchWords(c._q, q.q)));
}

/* ---------------- http helpers ---------------- */
const SEC_HEADERS = { 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin', 'X-Frame-Options': 'SAMEORIGIN' };
function send(res, code, body, type, extra) {
  res.writeHead(code, Object.assign({ 'Content-Type': type || 'application/json; charset=utf-8' }, SEC_HEADERS, extra || {}));
  res.end(body);
}
const json = (res, code, obj, extra) => send(res, code, JSON.stringify(obj), null, Object.assign({ 'Cache-Control': 'no-store' }, extra || {}));

const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.pdf': 'application/pdf', '.txt': 'text/plain; charset=utf-8' };
function serveStatic(req, res, pathname) {
  let rel;
  try { rel = decodeURIComponent(pathname); } catch (e) { return send(res, 400, 'Bad request', 'text/plain'); }
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.join(PUBLIC, path.normalize(rel));
  if (!file.startsWith(PUBLIC + path.sep)) return send(res, 403, 'Forbidden', 'text/plain');
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) return send(res, 404, 'Not found', 'text/plain; charset=utf-8');
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, Object.assign({ 'Content-Type': MIME[ext] || 'application/octet-stream', 'Content-Length': st.size,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400' }, SEC_HEADERS));
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(file).pipe(res);
  });
}

/* ---------------- submissions (School Corner) ---------------- */
const hits = new Map();                                   // ip → [timestamps]  (20 uploads / hour / IP)
function limited(ip) {
  const now = Date.now(), list = (hits.get(ip) || []).filter((t) => now - t < 3600e3);
  list.push(now); hits.set(ip, list);
  return list.length > 20;
}
function newId() {                                        // e.g. MBN-7K3QX9 — easy to read out over the phone
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', b = crypto.randomBytes(6);
  let s = ''; for (let i = 0; i < 6; i++) s += A[b[i] % A.length];
  return 'MBN-' + s;
}
const csvCell = (v) => { const s = String(v == null ? '' : v).replace(/^[=+\-@]/, "'$&"); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
const CSV_COLS = ['id', 'received', 'udise', 'school_name', 'district', 'block', 'cls', 'students', 'session_date', 'coordinator', 'mobile', 'remarks', 'photos'];

async function submit(req, res) {
  const ip = req.socket.remoteAddress || '';
  if (limited(ip)) return json(res, 429, { ok: false, error: 'Too many uploads from this connection. Please try again in an hour.' });
  const len = +req.headers['content-length'] || 0;
  if (!len) return json(res, 411, { ok: false, error: 'Missing upload size.' });
  if (len > MAX_UPLOAD) return json(res, 413, { ok: false, error: `Upload is too large (max ${MAX_UPLOAD / 1048576} MB).` });
  if (!/^multipart\/form-data/i.test(req.headers['content-type'] || '')) return json(res, 415, { ok: false, error: 'Expected a form upload.' });

  let form;
  try {
    form = await new Request('http://local/', { method: 'POST', headers: { 'content-type': req.headers['content-type'] }, body: req, duplex: 'half' }).formData();
  } catch (e) { return json(res, 400, { ok: false, error: 'Could not read the upload.' }); }

  const f = (k, max) => String(form.get(k) || '').trim().slice(0, max || 200);
  const s = {
    udise: f('udise', 11), school_name: f('school_name', 150), district: f('district', 60), block: f('block', 60), cls: f('cls', 5),
    students: f('students', 5), session_date: f('session_date', 10), coordinator: f('coordinator', 80), mobile: f('mobile', 10), remarks: f('remarks', 300),
  };
  const id = newId();
  if (f('website')) return json(res, 200, { ok: true, id });             // honeypot filled → bot; pretend success
  if (UPLOAD_PIN && f('pin', 50) !== UPLOAD_PIN) return json(res, 403, { ok: false, error: 'The upload PIN is not correct.' });
  if (!/^\d{11}$/.test(s.udise)) return json(res, 400, { ok: false, error: 'UDISE code must be 11 digits.' });
  if (!s.school_name || !s.district) return json(res, 400, { ok: false, error: 'School name and district are required.' });
  if (!['10', '12', '10,12'].includes(s.cls)) return json(res, 400, { ok: false, error: 'Please choose the class.' });
  if (!(+s.students >= 1 && +s.students <= 3000)) return json(res, 400, { ok: false, error: 'Number of students must be 1–3000.' });
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s.session_date)) return json(res, 400, { ok: false, error: 'Please give the session date.' });
  if (!s.coordinator) return json(res, 400, { ok: false, error: 'Coordinator name is required.' });
  if (s.mobile && !/^\d{10}$/.test(s.mobile)) return json(res, 400, { ok: false, error: 'Mobile number must be 10 digits.' });
  if (form.get('consent') !== 'yes') return json(res, 400, { ok: false, error: 'Consent is required.' });

  const photos = form.getAll('photos').filter((p) => p && typeof p.arrayBuffer === 'function');
  if (!photos.length) return json(res, 400, { ok: false, error: 'Please add at least one photo.' });
  if (photos.length > MAX_PHOTOS) return json(res, 400, { ok: false, error: `At most ${MAX_PHOTOS} photos.` });
  const bufs = [];
  for (const p of photos) {
    const b = Buffer.from(await p.arrayBuffer());
    if (!(b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff)) return json(res, 400, { ok: false, error: 'Photos must be JPEG images.' });
    bufs.push(b);
  }

  const dir = path.join(STORAGE, 'submissions', id);
  await fs.promises.mkdir(dir, { recursive: true });
  const names = [];
  for (let i = 0; i < bufs.length; i++) { const n = `photo${i + 1}.jpg`; await fs.promises.writeFile(path.join(dir, n), bufs[i]); names.push(n); }
  const rec = Object.assign({ id, received: new Date().toISOString() }, s, { photos: names.join(' ') });
  await fs.promises.writeFile(path.join(dir, 'submission.json'), JSON.stringify(rec, null, 2));
  const csv = path.join(STORAGE, 'submissions.csv');
  if (!fs.existsSync(csv)) await fs.promises.writeFile(csv, '﻿' + CSV_COLS.join(',') + '\n');
  await fs.promises.appendFile(csv, CSV_COLS.map((k) => csvCell(rec[k])).join(',') + '\n');
  console.log(`[upload] ${id} ${s.udise} ${s.school_name} (${names.length} photos)`);
  json(res, 200, { ok: true, id });
}

/* ---------------- admin (optional, needs ADMIN_TOKEN) ---------------- */
function adminOk(req, url) {
  if (!ADMIN_TOKEN) return false;
  const given = (req.headers.authorization || '').replace(/^Bearer\s+/i, '') || url.searchParams.get('token') || '';
  const a = Buffer.from(given), b = Buffer.from(ADMIN_TOKEN);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
function admin(req, res, url, parts) {
  if (!adminOk(req, url)) return json(res, 401, { ok: false, error: 'Not authorised.' });
  const csv = path.join(STORAGE, 'submissions.csv');
  if (parts[0] === 'submissions.csv') {
    if (!fs.existsSync(csv)) return send(res, 200, '﻿' + CSV_COLS.join(',') + '\n', 'text/csv; charset=utf-8');
    return send(res, 200, fs.readFileSync(csv), 'text/csv; charset=utf-8', { 'Content-Disposition': 'attachment; filename="submissions.csv"', 'Cache-Control': 'no-store' });
  }
  if (parts[0] === 'photo' && /^MBN-[A-Z0-9]{6}$/.test(parts[1] || '') && /^photo\d{1,2}\.jpg$/.test(parts[2] || '')) {
    const file = path.join(STORAGE, 'submissions', parts[1], parts[2]);
    if (!fs.existsSync(file)) return json(res, 404, { ok: false, error: 'Not found.' });
    return send(res, 200, fs.readFileSync(file), 'image/jpeg', { 'Cache-Control': 'no-store' });
  }
  if (parts[0] === 'reload' && req.method === 'POST') { load(); return json(res, 200, DB.meta); }
  json(res, 404, { ok: false, error: 'Not found.' });
}

/* ---------------- router ---------------- */
function api(req, res, url) {
  const parts = url.pathname.replace(/^\/api\/?/, '').split('/').filter(Boolean);
  const q = Object.fromEntries(url.searchParams);
  if (parts[0] === 'submissions' && parts.length === 1) {
    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'Use POST.' });
    return submit(req, res).catch((e) => { console.error(e); if (!res.headersSent) json(res, 500, { ok: false, error: 'Server error. Please try again.' }); });
  }
  if (parts[0] === 'admin') return admin(req, res, url, parts.slice(1));
  if (req.method !== 'GET' && req.method !== 'HEAD') return json(res, 405, { ok: false, error: 'Method not allowed.' });

  switch (parts[0]) {
    case 'meta': return json(res, 200, DB.meta);
    case 'health': return json(res, 200, { ok: true, uptime: Math.round(process.uptime()) });
    case 'public':
      if (parts[1] === 'scholarships') return json(res, 200, DB.scholarships);
      if (parts[1] === 'links') return json(res, 200, DB.links);
      break;
    case 'schools':
      if (parts[1]) {
        const s = DB.byUdise.get(parts[1]);
        return s ? json(res, 200, strip(s)) : json(res, 404, { ok: false, error: 'School not found.' });
      }
      return json(res, 200, paginate(searchSchools(q), q.page, q.limit));
    case 'colleges':
      return json(res, 200, paginate(searchColleges(q), q.page, q.limit));
  }
  json(res, 404, { ok: false, error: 'Not found.' });
}

load();
const server = http.createServer((req, res) => {
  let url;
  try { url = new URL(req.url, 'http://local'); } catch (e) { return send(res, 400, 'Bad request', 'text/plain'); }
  if (url.pathname === '/api' || url.pathname.startsWith('/api/')) return api(req, res, url);
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'Method not allowed', 'text/plain');
  serveStatic(req, res, url.pathname);
});
server.requestTimeout = 5 * 60e3;
server.listen(PORT, HOST, () => console.log(`Portal online at http://localhost:${PORT}  (uploads → ${STORAGE})`));
process.on('SIGHUP', load);                               // `kill -HUP <pid>` reloads the data files
