# Mera Bhavishya – Mera Nirnay • Career Guidance Portal

Bilingual (English / हिन्दी) career guidance for Class 10 and 12 students.

- `public/index.html`: the complete site (works offline on its own)
- `server/server.js`: zero-dependency Node backend that switches the site to **online mode**
- `public/manifest.webmanifest`, `public/sw.js`, `public/icon*.png|svg`: install-as-app and offline support (works on any static host; after one visit the site opens without internet)
- `public/img/*.webp`: home-page pictures (640 and 1280 px wide). They are illustrations generated with Figma AI, labelled as such in the footer; each has a `.json` sidecar with its prompt. Replace them with the department's own photographs when available (same names and sizes). Without this folder the site still works; the pictures are simply missing.
- Class session (`#/class`): a counsellor runs the assessment for a whole class on one device and prints every report card (certificate + career profile, one A4 sheet double-sided per student). Names and answers stay in that browser.
- Fonts: Anek Devanagari from Google Fonts; offline or on a NIC server without internet the site falls back to Noto Sans / the system font.

```bash
npm start      # → http://localhost:8080
npm test
```

See [BACKEND-GUIDE.md](BACKEND-GUIDE.md) for configuration, data import and uploads.
