#!/usr/bin/env node
/* =====================================================================
   Data import for the portal backend. Writes server/data/*.json.
     node scripts/import.js seed-colleges                 featured colleges bundled in public/index.html
     node scripts/import.js schools  <file.csv> [as-of]   UDISE+ school list (CSV)
     node scripts/import.js colleges <file.csv> [as-of]   AISHE college list (CSV), merged with the featured ones
   Column names are matched loosely (see ALIASES) so exports from the India Data Portal,
   UDISE+ or AISHE can be used without editing headers. Restart the server (or `kill -HUP`) afterwards.
   ===================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const DATA = process.env.DATA_DIR || path.join(ROOT, 'server', 'data');
const today = () => new Date().toISOString().slice(0, 10);
const HARYANA_DISTRICTS = ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal',
  'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'];

/* ---------------- CSV ---------------- */
function parseCSV(text) {
  text = text.replace(/^﻿/, '');
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) {
      if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += ch;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const head = (rows.shift() || []).map((h) => h.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, ''));
  return rows.filter((r) => r.some((c) => c.trim())).map((r) => Object.fromEntries(head.map((h, i) => [h, (r[i] || '').trim()])));
}

const ALIASES = {
  udise: ['udise', 'udise_code', 'udise_sch_code', 'school_code', 'pseudocode'],
  name: ['name', 'school_name', 'sch_name', 'college_name', 'name_en', 'institution_name'],
  name_hi: ['name_hi', 'hindi_name'],
  district: ['district', 'district_name', 'dist_name'],
  block: ['block', 'block_name'],
  village: ['village', 'village_name', 'cluster', 'cluster_name', 'locality'],
  pincode: ['pincode', 'pin_code', 'pin'],
  mgmt: ['mgmt', 'management', 'management_name', 'sch_mgmt', 'school_management'],
  board: ['board', 'board_sec', 'board_hsec', 'affiliation_board', 'affiliated_board'],
  location: ['location', 'rural_urban', 'area', 'sch_location'],
  class_from: ['class_from', 'lowest_class', 'low_class', 'from_class'],
  class_to: ['class_to', 'highest_class', 'high_class', 'to_class'],
  school_type: ['school_type', 'school_category', 'sch_category', 'category'],
  est: ['est', 'year_of_establishment', 'estd_year', 'established'],
  teachers: ['teachers', 'total_teachers', 'tch_total'],
  students_x: ['students_x', 'class_10_students', 'enrolment_x', 'students_class_10'],
  students_xii: ['students_xii', 'class_12_students', 'enrolment_xii', 'students_class_12'],
  lat: ['lat', 'latitude'], lon: ['lon', 'lng', 'longitude'],
  city: ['city', 'town', 'city_name'],
  state: ['state', 'state_name'],
  type: ['type', 'portal_type'],
  kind: ['kind', 'college_type', 'institution_type'],
  university: ['university', 'university_name', 'affiliating_university'],
  exam: ['exam', 'admission', 'entrance'],
  aishe_code: ['aishe_code', 'aishe', 'college_code'],
  phone: ['phone', 'contact', 'telephone', 'mobile'],
  address: ['address', 'full_address'],
  url: ['url', 'website', 'web_site'],
};
function pick(r, key) { for (const a of ALIASES[key]) if (r[a] != null && r[a] !== '') return r[a]; return ''; }
const num = (v) => (v === '' || isNaN(+v) ? '' : +v);
const title = (s) => String(s).toLowerCase().replace(/\b[a-z]/g, (c) => c.toUpperCase());
const fixDistrict = (d) => { const t = title(d).trim(); return HARYANA_DISTRICTS.find((h) => h.toLowerCase() === t.toLowerCase()) || (t === 'Gurgaon' ? 'Gurugram' : t === 'Mewat' ? 'Nuh' : t); };
const fixLocation = (v) => (/^r/i.test(v) || v === '1' ? 'Rural' : /^u/i.test(v) || v === '2' ? 'Urban' : '');

function write(file, obj) {
  fs.mkdirSync(DATA, { recursive: true });
  fs.writeFileSync(path.join(DATA, file), JSON.stringify(obj, null, 1) + '\n');
  console.log(`wrote ${path.relative(ROOT, path.join(DATA, file))} (${obj.items.length} rows)`);
}

/* ---------------- featured colleges from the page itself ---------------- */
function featuredColleges() {
  const html = fs.readFileSync(path.join(ROOT, 'public', 'index.html'), 'utf8');
  const block = (html.match(/<script>([\s\S]*?)<\/script>/g) || []).find((s) => s.indexOf('window.COLLEGES') > -1);
  if (!block) throw new Error('window.COLLEGES not found in public/index.html');
  const win = {};
  vm.runInNewContext(block.replace(/^<script>|<\/script>$/g, ''), { window: win });
  return win.COLLEGES.map((c) => {
    const hry = c.region === 'hry', d = HARYANA_DISTRICTS.includes(c.city.en) ? c.city.en : '';
    return { name_en: c.n.en, name_hi: c.n.hi, city_en: c.city.en, city_hi: c.city.hi, district: hry ? d : '', state: hry ? 'Haryana' : '',
      type: c.type, exam: c.exam, url: c.url, featured: true, source: 'Portal featured list', updated: today() };
  });
}

function schoolsFrom(rows, asOf) {
  const seen = new Set(), items = [];
  rows.forEach((r) => {
    const udise = pick(r, 'udise').replace(/\D/g, '');
    if (udise.length !== 11 || seen.has(udise)) return;
    seen.add(udise);
    items.push({ udise, name: pick(r, 'name'), district: fixDistrict(pick(r, 'district')), block: title(pick(r, 'block')), village: title(pick(r, 'village')),
      pincode: pick(r, 'pincode'), mgmt: pick(r, 'mgmt'), board: pick(r, 'board'), location: fixLocation(pick(r, 'location')),
      class_from: num(pick(r, 'class_from')), class_to: num(pick(r, 'class_to')), school_type: pick(r, 'school_type'), est: pick(r, 'est'),
      teachers: num(pick(r, 'teachers')), students_x: num(pick(r, 'students_x')), students_xii: num(pick(r, 'students_xii')),
      lat: num(pick(r, 'lat')), lon: num(pick(r, 'lon')), source: 'UDISE+', updated: asOf });
  });
  return items;
}

function collegesFrom(rows, asOf) {
  return rows.map((r) => {
    const state = title(pick(r, 'state')) || 'Haryana';
    return { name_en: pick(r, 'name'), name_hi: pick(r, 'name_hi'), city_en: title(pick(r, 'city')), city_hi: '',
      district: state === 'Haryana' ? fixDistrict(pick(r, 'district')) : title(pick(r, 'district')), state,
      type: pick(r, 'type') || 'uni', kind: pick(r, 'kind'), university: pick(r, 'university'), exam: pick(r, 'exam'), aishe_code: pick(r, 'aishe_code'),
      phone: pick(r, 'phone'), address: pick(r, 'address'), url: pick(r, 'url'), featured: false, source: 'AISHE', updated: asOf };
  }).filter((c) => c.name_en);
}

/* ---------------- main ---------------- */
const [cmd, file, asOfArg] = process.argv.slice(2);
const asOf = asOfArg || today();
if (cmd === 'seed-colleges') {
  const old = (() => { try { return JSON.parse(fs.readFileSync(path.join(DATA, 'colleges.json'), 'utf8')); } catch (e) { return { items: [] }; } })();
  write('colleges.json', { asOf: old.asOf || asOf, items: featuredColleges().concat(old.items.filter((c) => !c.featured)) });
} else if (cmd === 'schools' && file) {
  write('schools.json', { asOf, items: schoolsFrom(parseCSV(fs.readFileSync(file, 'utf8')), asOf) });
} else if (cmd === 'colleges' && file) {
  const featured = featuredColleges(), names = new Set(featured.map((c) => c.name_en.toLowerCase()));
  write('colleges.json', { asOf, items: featured.concat(collegesFrom(parseCSV(fs.readFileSync(file, 'utf8')), asOf).filter((c) => !names.has(c.name_en.toLowerCase()))) });
} else {
  console.log('usage:\n  node scripts/import.js seed-colleges\n  node scripts/import.js schools <file.csv> [as-of YYYY-MM-DD]\n  node scripts/import.js colleges <file.csv> [as-of YYYY-MM-DD]');
  process.exit(1);
}
