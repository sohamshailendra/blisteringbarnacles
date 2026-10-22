# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: a Class 10 or Class 12 student in Haryana, on their own phone.** Often a low-end Android
  phone with patchy data, often in a village or small town, often reading in Hindi, sometimes with a
  parent beside them. They take the assessment alone and want to know which stream, course or road
  suits them and what to do next. When needs conflict, this user wins.
- **Secondary: a school teacher or career counsellor.** Plans counselling periods for a whole class,
  runs the assessment for each student on a school device (computer lab or shared phone/tablet), and
  prints every student's report card for the class.
- Parents read results and the printed report card with the student.

## Product Purpose

*Mera Bhavishya – Mera Nirnay* ("My future – my decision") is the Government of Haryana's free career
guidance portal for Class 10 and 12 students. It helps a student discover their interests, aptitude and
work style, see every realistic road (streams, ITI, polytechnic, courses, colleges, exams, scholarships,
government jobs), and go straight to the official websites. Success: a student leaves with a short,
believable list of options that fit both their nature and their family's situation, a next step, and a
printed report they can discuss with parents and teachers.

## Positioning

An official, free, bilingual (Hindi first) state portal that works offline, ranks careers by both fit
("dream") and family situation ("practical": cost, time to earning, distance, internet), and is built
from the District Administration Karnal *Career Counselling Patrika 2026*. It sends no student data to any
server.

## Operating Context

- Students: one person, one phone, often offline after the first visit (installable PWA, service
  worker). Hindi is the default language; English is one tap away. Text size controls and Hindi
  read-aloud are in the top bar.
- Schools: counselling periods in a computer lab or classroom; teacher-led; printing on ordinary A4
  printers, often black-and-white.
- Printed outputs: the per-student **report card = career profile (A4) + participation certificate**,
  printed as a set. The certificate is self-generated, carries the Haryana emblem, and is valid only
  with the school seal and signatures.

## Capabilities and Constraints

- Whole site is one file, `public/index.html` (hash-routed views rendered from JS strings, inline CSS,
  bundled data). Must keep working opened straight from disk and on plain static hosting.
- Optional zero-dependency Node server (`server/server.js`) switches on online mode: school directory
  (UDISE+), larger college list (AISHE), School Corner photo uploads, school-name suggestions.
- Features: 54-question assessment (interests/RIASEC, aptitude, work style, values, subjects, situation),
  results with dream and practical career lists, career tree after Class 10/12, ~careers library,
  colleges, scholarships, exam calendar, stream guide, compare, plan, wellbeing, links, School Corner,
  certificate, about.
- **New (requested): class workflow for counsellors.** Run the assessment for many students on one
  device, keep each result on that device only, and print all report cards (profile + certificate) in
  one go. No student data leaves the device.
- No accounts, no analytics on students.

## Brand Commitments

- Government of Haryana identity. **The Haryana Government emblem stays** (header and printed
  documents). The look is a neutral, official government look.
- Name: *Mera Bhavishya – Mera Nirnay* / *मेरा भविष्य – मेरा निर्णय*, subtitle "Career Guidance Portal".
- Voice: plain, warm, direct, protective (warns against agents, fake scholarships, "dunki" routes).

## Evidence on Hand

- Content: the Karnal Patrika 2026 (source, not in repo), bundled careers, 39 featured colleges,
  scholarships, links (`server/data/*.json`).
- Emblem: inline PNG `window.EMBLEM` in `public/index.html`; app icons in `public/`.
- No photographs of students, schools or colleges. No testimonials, usage numbers or endorsements;
  none may be invented.

## Product Principles

1. The student on a cheap phone, in Hindi, offline, is the design target; everything else adapts.
2. Official and trustworthy before expressive: verified sources, plain words, links to official sites.
3. Show every road, including non-college ones, and rank honestly by fit and by situation.
4. Printed output is a first-class product, not an afterthought.
5. Nothing about a student leaves their device.

## Accessibility & Inclusion

Government site: WCAG 2.1 AA and India's GIGW guidelines. Hindi and English throughout (correct `lang`
on mixed text), text-size controls, read-aloud, keyboard access, visible focus, works on small screens
and slow networks, prints legibly in black and white.
