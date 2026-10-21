# Prompt: enhance the career pages from the Karnal 2026 Patrika

Attach `Mera_Bhavishya_Mera_Nirnay_Karnal_2026.pdf`, then paste everything below the line.

---

You are working in the repository `sohamshailendra/blisteringbarnacles`, a bilingual (English / हिन्दी)
career guidance portal for Class 10 and 12 students in Haryana. The whole site is one file,
`public/index.html`. Start from the latest `master` and make sure the certificate change from pull request #3
("one descriptive career list") is already merged.

The attached PDF, *Mera Bhavishya – Mera Nirnay* (Career Counselling Patrika, District Administration Karnal,
2026), is the source the site was built from. Right now each career page has only a 100–210 character
description. **Your job: use the Patrika to make every career page far more complete and useful to a
student and their parents, without inventing anything.**

## 1. How to read the PDF

- The Patrika is mostly Hindi with English headings. **Its text cannot be extracted reliably** (copied text
  comes out garbled because of the Devanagari font). Read the pages **as images** (e.g. the Read tool with
  `pages`), 5–10 pages at a time. Never work from `pdftotext` output.
- Page map (from the index, p. 6; page numbers are approximate):

| Pages | Content |
|---|---|
| 7 | Route map after Class 10 (5 roads) |
| 8 | Choosing a stream after 10th: Science, Commerce, Arts |
| 9 | Polytechnic diploma (branches, new-age diplomas, what after, Karnal-area colleges) |
| 10 | ITI trades, old & new |
| 11 | Paramedical & short-term courses |
| 12 | Government jobs after 10th/12th (SSC, HSSC-CET, Railways, Police) |
| 13 | Agniveer / Agnipath |
| 14 | Route map after Class 12 |
| 15–16 | Science PCM: engineering, architecture, JEE & other entrance exams |
| 17–18 | Science PCB: doctor, nursing, paramedical / allied health, NEET |
| 19 | Agriculture, dairy & horticulture (incl. NDRI Karnal) |
| 20 | Commerce: B.Com, CA, CS, CMA, fintech |
| 21 | Arts / humanities: BA to UPSC |
| 22 | CUET |
| 23–24 | Law, management, hotel management |
| 25 | Mass communication, economics, social work |
| 26 | Design, fine arts, performing arts, sports |
| 27 | Uniformed careers: NDA (girls too), CDS, police |
| 28–29 | Centre poster: the whole map |
| 30 | Emerging 2026: AI & data science |
| 31 | Cyber security & drone technology |
| 32 | EV, green energy & space sector |
| 33 | AVGC: animation, gaming, digital creator |
| 34 | Free digital learning: SWAYAM, Skill India |
| 35 | Civil services: UPSC & HCS |
| 36 | Special provisions for girls & students with disabilities |
| 37 | Scholarships & education loans |
| 38–39 | Timeline (Class 9–12) & exam calendar |
| 40–44 | Institutions of Haryana: universities, medical, engineering, polytechnics, ITIs, Karnal colleges |
| 45–50 | Institutions across India |
| 51–52 | FAQs |

## 2. The data you are editing

`window.CAREERS` in `public/index.html` (search `window.CAREERS = [`) holds 33 careers. Each entry has:

```js
{ id, ico, lv:['10'|'12'], st:[stream], rs, ri:'RIASEC code', ap:[aptitudes], cost:1-3, earn:years, reloc:0|1,
  name:{en,hi}, dur:{en,hi}, about:{en,hi}, elig:{en,hi}, exams:{en,hi},
  path:{en:[steps], hi:[steps]}, links:[[label, url]] }
```

The career detail page is `V.career` (search `V.career = function`). It shows an Overview card (`about`),
a Roadmap (`path`), a Quick-facts grid (`elig`, `dur`, `exams`, cost, years to earn, relocation), and in the
sidebar the student's fit, Holland code, official links, branches and "explore" buttons.

Careers and the Patrika pages most likely to cover them (check neighbouring pages too):

| id | Pages | id | Pages |
|---|---|---|---|
| polytechnic | 9, 43 | nda | 27 |
| iti | 10, 44 | science-research | 15–17, 46 |
| paramedical | 11, 18, 41 | medicine | 17, 41, 47 |
| shortterm | 11, 34 | nursing | 17–18, 41 |
| govjobs | 12 | pharma | 18 |
| agniveer | 13 | agri-dairy | 19, 50 |
| drone | 31 | ca-cs | 20 |
| ev-green | 32 | commerce-fin | 20, 48 |
| avgc | 33 | management | 24, 49 |
| sports | 26, 50 | hotel | 24, 50 |
| entrepreneur | 7, 34 (search) | civil-services | 21, 35 |
| engineering | 15–16, 42, 45–46 | law | 23, 49 |
| cs-ai | 30 | teaching | search (21, 25?) |
| cyber | 31 | media | 25, 49 |
| space | 32 | psych-social | 25 |
| architecture | 15 | design-arts | 26, 50 |
| police | 12, 27 | | |

## 3. What to add

Keep all existing fields. Add these **new optional bilingual fields** to each career, filling them only with
what the Patrika supports:

| Field | Shape | Content |
|---|---|---|
| `detail` | `{en:[para,…], hi:[para,…]}` | 2–4 short paragraphs: what this career is, who it suits, why it matters now, Haryana/Karnal context |
| `courses` | `{en:[[name, duration/note],…], hi:[…]}` | Courses, branches or specialisations with duration (e.g. the polytechnic branch table) |
| `work` | `{en:[…], hi:[…]}` | Job roles / where people work (govt, private, self-employment) |
| `after` | `{en:[…], hi:[…]}` | What next: higher study, lateral entry, government exams, growth |
| `skills` | `{en:[…], hi:[…]}` | Subjects, aptitudes and habits that help |
| `near` | `{en:[…], hi:[…]}` | Named institutions in Karnal / nearby Haryana from the Patrika (district in brackets) |
| `tips` | `{en:[…], hi:[…]}` | The Patrika's advice and cautions (fees, scholarships, girls' quotas, fake-agent warnings, free courses) |
| `src` | `[pages]` | Patrika page numbers you used, e.g. `[9, 43]` |

Also, where the Patrika has more:
- add missing official sites to `links` (only URLs printed in the Patrika);
- make `exams`, `elig` and `path` more precise if the Patrika gives clearer information.

Then **update `V.career`** to show the new fields, each only when present:
- an "In detail" card under Overview (`detail` paragraphs);
- "Courses & branches" as a two-column table (`courses`), styled like the existing `.tbl`;
- "What you can become" (`work`) and "What next" (`after`) as tick lists, side by side on desktop (`.grid.g2`);
- "Skills that help" (`skills`) as chips;
- in the sidebar: "Near you in Haryana" (`near`) and "Tips from the Patrika" (`tips`);
- a small source line at the bottom: "Source: Career Counselling Patrika 2026, District Administration Karnal, p. 9, 43".

Add every new heading to **both** UI dictionaries (`window.UI` → `en` and `hi`), following the existing keys
and style. Reuse existing CSS classes (`card`, `ticks`, `mini`/`minis`, `tbl`, `grid g2`) before adding new
ones, and put any new CSS next to the related section (`/* 11 ── tables, detail pages, timeline ── */`).

## 4. Rules

1. **Only the Patrika.** Every added fact must come from the PDF. Do not add fees, salaries, seat counts,
   cut-offs or dates the Patrika does not state. Don't fill gaps from general knowledge: if the Patrika says
   nothing about a career (`entrepreneur` and `teaching` may be thin), add only what it does say and list
   that career in your report.
2. **Both languages, equally complete.** The Hindi should follow the Patrika's own wording and simple
   language. The English is a faithful, plain translation (Class-10 reading level, short sentences).
   Never leave one language empty or shorter.
3. **Keep `about` short (≤ 210 characters per language).** The printed certificate shows `about` for up to
   8 careers and is tuned to fit exactly one A4 sheet. Longer text goes in `detail`. You may improve the
   wording of `about`, but not lengthen it.
4. **Don't touch the scoring fields** (`lv, st, rs, ri, ap, cost, earn, reloc`) or `id`. If the Patrika
   clearly contradicts one (e.g. a different duration or eligibility), list it in your report instead.
5. **Escape and match the code.** All strings go through `esc()` in templates as now. Match the file's
   existing style: one career per block, `{en:…, hi:…}` objects, single quotes, ES5 (`var`, `function`).
   For apostrophes inside strings, use the curly ’ as the file already does, so the quotes never break.
6. **Be careful with figures.** Copy every number, exam name, institution name and URL exactly as printed;
   re-check each against the page image.

## 5. Check your work

- `npm test` passes.
- Open the site (`npm start` → http://localhost:8080) with a headless browser and visit **every**
  `#/career/<id>` page in **both** languages: no script errors, every new section renders, nothing overflows
  on a 390 px phone width.
- Complete the assessment once for Class 10 and once for Class 12, open `#/certificate`, and check that
  `.back .inner` has `scrollHeight <= clientHeight` in English and Hindi, i.e. the certificate back page
  still fits.
- Print-to-PDF the certificate on A4: still exactly 2 pages.

## 6. Deliver

- Commit on a new branch with a clear message and open a pull request. In its description, include a table:
  career id → fields added → Patrika pages used.
- In your final report, list: careers the Patrika barely covers, any contradictions you found between
  the Patrika and existing data (rule 4), and anything you could not read clearly in the PDF.
