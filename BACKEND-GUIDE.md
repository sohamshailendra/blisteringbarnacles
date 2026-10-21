# Backend guide — running the portal in online mode

`public/index.html` is the whole site. Opened on its own (file://, plain static hosting) it runs in
**offline mode**: the assessment, career tree, courses, scholarships, links and certificate all work, but
the school directory and School Corner show "needs the portal server".

`server/server.js` is that server. When the page finds `GET api/meta` it switches to **online mode**:

| Feature | Offline | Online |
|---|---|---|
| Colleges | 39 bundled colleges | Bundled + any imported AISHE list, district filter, paging |
| Schools directory | — | Search / filter the imported UDISE+ list |
| School Corner (photo upload) | — | Coordinators submit school details + up to 5 photos, get a reference ID |
| Certificate | Manual school name | School name suggestions |
| Scholarships / links | Bundled | Bundled, or overridden from `server/data/*.json` |

No dependencies — needs only Node 18 or newer.

## Run it

```bash
npm start                      # http://localhost:8080
PORT=80 npm start              # another port
docker build -t portal . && docker run -p 8080:8080 -v portal-data:/data portal
```

| Variable | Default | Meaning |
|---|---|---|
| `PORT` / `HOST` | `8080` / `0.0.0.0` | Where to listen |
| `STORAGE_DIR` | `server/storage` | Where uploads are saved (back this folder up) |
| `DATA_DIR` | `server/data` | Directory and list data |
| `UPLOAD_PIN` | *(none)* | If set, School Corner asks for this PIN before uploading |
| `MAX_PHOTOS` | `5` | Photos per submission |
| `MAX_UPLOAD_MB` | `30` | Max size of one submission |
| `ADMIN_TOKEN` | *(none)* | Turns on the admin downloads below |

Put it behind HTTPS (nginx / Apache / the NIC load balancer) for public use; the camera upload on
phones needs HTTPS anyway. Keep it running with `pm2`, `systemd` or similar.

## Data

```bash
npm run import:schools  -- path/to/udise_haryana.csv 2025-09-30   # UDISE+ secondary/senior-secondary schools
npm run import:colleges -- path/to/aishe_haryana.csv 2025-09-30   # AISHE colleges (featured ones stay on top)
npm run seed                                                       # refresh featured colleges from index.html
```

Column names are matched loosely (`udise_code`, `school_name`, `district_name`, `management`,
`rural_urban`, `lowest_class`, `highest_class`, `latitude` …; see `ALIASES` in `scripts/import.js`).
Restart the server, or send it `kill -HUP <pid>`, to load new data.

The repository ships with the 39 featured colleges and **an empty school list**. Import the UDISE+
CSV (India Data Portal → UDISE+ school directory, Haryana) to fill the schools directory and the UDISE
lookup. Until then School Corner still works with manually typed school details.

`server/data/scholarships.json` and `links.json` may hold flat rows that replace the bundled lists
(`[]` = keep the bundled ones):

```json
[{ "id": "nsp", "from": 9, "tags": "all,income", "url": "https://scholarships.gov.in", "site": "scholarships.gov.in",
   "name_en": "National Scholarship Portal", "name_hi": "राष्ट्रीय छात्रवृत्ति पोर्टल", "who_en": "…", "who_hi": "…" }]
[{ "group": "exam", "ico": "📝", "name_en": "NTA", "name_hi": "NTA", "url": "https://nta.ac.in" }]
```

## School Corner uploads

Each submission is saved as `STORAGE_DIR/submissions/<ID>/photo1.jpg …` plus `submission.json`, and one
row is appended to `STORAGE_DIR/submissions.csv` (opens in Excel). Nothing about students is received.
Uploads are limited to 20 per hour per connection; photos must be JPEG (the page converts them).

With `ADMIN_TOKEN` set:

```
GET  /api/admin/submissions.csv?token=…              all submissions as CSV
GET  /api/admin/photo/<ID>/photo1.jpg?token=…        one photo
POST /api/admin/reload   (Authorization: Bearer …)   reload data files
```

## API (used by the page)

```
GET  api/meta                     counts, filter lists, maxPhotos, uploadPin
GET  api/public/scholarships      []  → page keeps its bundled list
GET  api/public/links             []
GET  api/schools?q&district&mgmt&board&location&cls&page&limit   { total, page, pages, items }
GET  api/schools/<udise>          one school, 404 if unknown
GET  api/colleges?q&district&type&region&page
POST api/submissions              multipart form → { ok, id } or { ok:false, error }
GET  api/health
```

`npm test` starts the server on a spare port and exercises every endpoint.
