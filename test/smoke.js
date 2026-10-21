/* Smoke test: starts the server on a spare port with throw-away storage and checks every endpoint the page uses. */
'use strict';
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('assert');

const PORT = 18000 + Math.floor(Math.random() * 1000);
const STORAGE = fs.mkdtempSync(path.join(os.tmpdir(), 'portal-'));
const base = `http://127.0.0.1:${PORT}/`;
const JPEG = Buffer.from('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAABAAEBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAD8AKp//2Q==', 'base64');

const srv = spawn(process.execPath, [path.join(__dirname, '..', 'server', 'server.js')], { env: Object.assign({}, process.env, { PORT, HOST: '127.0.0.1', STORAGE_DIR: STORAGE, ADMIN_TOKEN: 'test-token' }), stdio: ['ignore', 'pipe', 'inherit'] });
const ready = new Promise((r) => srv.stdout.on('data', (d) => { if (/online at/.test(d)) r(); }));
const get = (p) => fetch(base + p).then(async (r) => ({ status: r.status, type: r.headers.get('content-type'), body: /json/.test(r.headers.get('content-type')) ? await r.json() : await r.text() }));

function form(over) {
  const fd = new FormData();
  const v = Object.assign({ udise: '06070100101', school_name: 'Test School', district: 'Karnal', block: 'Gharaunda', cls: '10', students: '40', coordinator: 'A Teacher', mobile: '9876543210', remarks: '', pin: '', website: '', session_date: '2026-10-20', consent: 'yes' }, over || {});
  for (const k in v) fd.append(k, v[k]);
  fd.append('photos', new Blob([JPEG], { type: 'image/jpeg' }), 'photo1.jpg');
  return fd;
}

(async () => {
  await ready;
  const page = await get('');
  assert.strictEqual(page.status, 200); assert.ok(/Mera Bhavishya/.test(page.body), 'index.html served');

  const meta = await get('api/meta');
  assert.strictEqual(meta.status, 200); assert.ok(/json/.test(meta.type));
  assert.ok(meta.body.counts.colleges > 0 && meta.body.districts.includes('Karnal') && meta.body.maxPhotos === 5);

  assert.deepStrictEqual((await get('api/public/scholarships')).body, []);
  assert.deepStrictEqual((await get('api/public/links')).body, []);

  const all = (await get('api/colleges?page=1')).body;
  assert.ok(all.total > 0 && all.items.length > 0 && all.pages >= 1);
  const hry = (await get('api/colleges?region=hry&type=eng')).body;
  assert.ok(hry.items.every((c) => c.state === 'Haryana' && c.type === 'eng') && hry.total > 0);
  assert.strictEqual((await get('api/colleges?q=kurukshetra%20nit')).body.items[0].name_en, 'NIT Kurukshetra');

  const sch = (await get('api/schools?q=x&limit=6')).body;
  assert.ok(Array.isArray(sch.items) && typeof sch.total === 'number');
  const miss = await get('api/schools/00000000000');
  assert.strictEqual(miss.status, 404); assert.ok(/json/.test(miss.type));

  const bad = await fetch(base + 'api/submissions', { method: 'POST', body: form({ udise: '123' }) }).then((r) => r.json());
  assert.strictEqual(bad.ok, false);
  const ok = await fetch(base + 'api/submissions', { method: 'POST', body: form() }).then((r) => r.json());
  assert.ok(ok.ok && /^MBN-[A-Z0-9]{6}$/.test(ok.id), JSON.stringify(ok));
  assert.ok(fs.existsSync(path.join(STORAGE, 'submissions', ok.id, 'photo1.jpg')));

  assert.strictEqual((await get('api/admin/submissions.csv')).status, 401);
  const csv = await get('api/admin/submissions.csv?token=test-token');
  assert.ok(csv.body.indexOf(ok.id) > -1);
  assert.strictEqual((await get('..%2f..%2fpackage.json')).status, 404);

  console.log('smoke test passed');
})().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => { srv.kill(); fs.rmSync(STORAGE, { recursive: true, force: true }); });
