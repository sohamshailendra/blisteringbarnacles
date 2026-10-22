# Mera Bhavishya – Mera Nirnay • Career Guidance Portal

Bilingual (English / हिन्दी) career guidance for Class 10 and 12 students.

- `public/index.html`: the complete site (works offline on its own)
- `server/server.js`: zero-dependency Node backend that switches the site to **online mode**
- `public/manifest.webmanifest`, `public/sw.js`, `public/icon*.png|svg`: install-as-app and offline support (works on any static host; after one visit the site opens without internet)

```bash
npm start      # → http://localhost:8080
npm test
```

See [BACKEND-GUIDE.md](BACKEND-GUIDE.md) for configuration, data import and uploads.
