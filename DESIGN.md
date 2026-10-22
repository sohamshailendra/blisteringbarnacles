---
name: Mera Bhavishya – Mera Nirnay
description: The Government of Haryana's free, bilingual career guidance portal for Class 10 and 12 students; ink on white, one blue, the road inside the name.
colors:
  road-blue: "#1a4be0"
  road-blue-deep: "#1239b3"
  road-blue-tint: "#e8eefd"
  ink: "#111111"
  ink-hover: "#2b2b2b"
  muted: "#5f6368"
  soft: "#8a8f98"
  line: "#e3e5e8"
  line-strong: "#c9ccd1"
  paper: "#ffffff"
  ground: "#f2f4f7"
  ground-deep: "#e8ebef"
  pill: "#e6e7e9"
  pill-hover: "#dadcdf"
  active: "#e6e8ec"
  ok: "#137333"
  ok-tint: "#e6f4ea"
  warn: "#8a5a00"
  warn-tint: "#fdf3dc"
  err: "#c5221f"
  err-tint: "#fce8e6"
typography:
  display:
    fontFamily: "Anek Devanagari, Noto Sans Devanagari, Noto Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(3.4rem, 1rem + 7.6vw, 8.75rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.045em"
    fontVariation: "'wdth' 100"
  headline:
    fontFamily: "Anek Devanagari, Noto Sans Devanagari, Noto Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 3.2vw, 4rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 100"
  title:
    fontFamily: "Anek Devanagari, Noto Sans Devanagari, Noto Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.6rem, 1.3rem + 0.9vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 100"
  lead:
    fontFamily: "Anek Devanagari, Noto Sans Devanagari, Noto Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.35
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Anek Devanagari, Noto Sans Devanagari, Noto Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Anek Devanagari, Noto Sans Devanagari, Noto Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)"
    fontWeight: 500
    lineHeight: 1.4
    fontVariation: "'wdth' 100"
rounded:
  picture: "4px"
  control: "6px"
  card: "8px"
  pill: "999px"
spacing:
  tight: "0.4rem"
  gap: "1rem"
  card-pad: "1.25rem 1.4rem"
  gutter-phone: "1rem"
  gutter: "1.5rem"
  section: "2.5rem"
  section-home: "clamp(4rem, 9vh, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.25rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.pill}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.25rem"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.pill-hover}"
  button-home-action:
    backgroundColor: "{colors.road-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.6rem"
    height: "52px"
  button-home-action-hover:
    backgroundColor: "{colors.road-blue-deep}"
  button-on-ink:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "56px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.9rem"
    height: "38px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  tag:
    backgroundColor: "{colors.pill}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.1rem 0.6rem"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.55rem 0.85rem"
    height: "44px"
  answer-option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  answer-option-selected:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
  nav-item:
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0 0.75rem"
    height: "34px"
  nav-item-active:
    backgroundColor: "{colors.active}"
    textColor: "{colors.ink}"
  sidebar:
    backgroundColor: "{colors.ground}"
    width: "248px"
  app-bar:
    backgroundColor: "{colors.ground}"
    height: "56px"
  progress-meter:
    backgroundColor: "{colors.ground-deep}"
    rounded: "{rounded.pill}"
    height: "6px"
  progress-meter-fill:
    backgroundColor: "{colors.road-blue}"
---

# Design System: Mera Bhavishya – Mera Nirnay

## Overview

**Creative North Star: "The Road Inside the Name"**

The programme's own name is the composition. On the home page "मेरा भविष्य / मेरा निर्णय" is set at poster scale on two lines, and a picture of a country road through mustard fields sits inside the second line where a letter would be. The rest of the home page repeats that grammar at smaller scale: a short sentence on the left, its evidence (a picture, a list of dates, a row of facts) beside it. Every app screen (assessment, results, career tree, directories, class session) drops the poster scale and becomes an achromatic ledger: ink figures on white cards over a pale blue-grey ground, with the one blue kept for the number or bar that matters most on that screen.

The look is neutral and official without borrowing the government-portal template. There is no utility bar, no row of blue buttons on white, no ruled link lists, no icon-card grids and no edtech gradient. Authority comes from the Haryana emblem, plain bilingual words and an even, quiet surface. Density is sparse on the home page (very large type, long vertical breaks) and moderate in the app (44px controls, 1rem gaps, white cards).

The system is built for a student on a low-end Android phone, reading Hindi first, often offline, and for a teacher printing a whole class's report cards on an ordinary black-and-white A4 printer. Everything has to read in Hindi and English with the same face, survive missing web fonts, and print legibly without colour.

**Key Characteristics:**
- One face, Anek Devanagari, for Hindi and English alike.
- Ink and greys everywhere; one blue, used on the home action and on each screen's main data element.
- Near-black pill buttons for primary actions, grey pills for secondary ones.
- White cards (8px corners) and controls (6px corners) defined by a hairline ring, not by shadow.
- Home is a white page with a top line of links; app screens sit on a pale ground with a sidebar.
- One signature motion: the road picture opens inside the name like a shutter.
- The printed report card is a first-class product: two A4 sheets in the same ink look.

## Colors

An achromatic palette of ink and cool greys with exactly one saturated blue and three quiet status colours.

### Primary
- **Road Blue** (#1a4be0): the only brand hue. Used on the home page's "Start the free assessment" pill and on the main data element of an app screen: the assessment progress bar, career fit meters, result bars, the radar outline, the journey bar. Also the keyboard focus ring and text selection.
- **Road Blue Deep** (#1239b3): hover state of the blue action; text on Road Blue Tint.
- **Road Blue Tint** (#e8eefd): the faint wash behind a "good fit" pill, a "new" tag and the current row of the exam calendar.

### Neutral
- **Ink** (#111111): all text, headings, primary buttons, selected chips and answers, step numbers, the home footer and the closing "Class 10 or 12?" band.
- **Ink Hover** (#2b2b2b): hover state of the near-black button.
- **Slate Grey** (#5f6368): secondary text: leads in the app, hints, captions, table headers, inactive language option.
- **Soft Grey** (#8a8f98): placeholders, breadcrumb separators, picture credits.
- **Hairline** (#e3e5e8): table rules and the ring around cards on the white home page.
- **Strong Hairline** (#c9ccd1): borders of chips and answer options, tree connectors, card hover ring, input outline.
- **Paper** (#ffffff): the home page background, cards, inputs, the full-screen menu.
- **Ledger Ground** (#f2f4f7): the background of every app screen, the sidebar, the phone app bar, notices and quiet panels.
- **Ledger Ground Deep** (#e8ebef): empty track of progress bars and meters; hover of journey steps.
- **Pill Grey** (#e6e7e9) and **Pill Grey Hover** (#dadcdf): secondary buttons, tags, the language switch, the Menu button.
- **Active Grey** (#e6e8ec): the current page in the sidebar.

### Status
- **Done Green** (#137333) on **Done Tint** (#e6f4ea): completed, strong subject band, success.
- **Caution Amber** (#8a5a00) on **Caution Tint** (#fdf3dc): weaker subject band, cautions.
- **Error Red** (#c5221f) on **Error Tint** (#fce8e6): validation errors, destructive actions, warnings against agents and fake schemes.

### Named Rules
**The One Blue Rule.** Road Blue appears on the home page's main action and on the single main data element of a screen. Nothing else in the chrome is coloured: navigation, headers, cards and secondary buttons stay ink and grey.

**The Black-and-White Print Rule.** Anything that prints (results, plan, class list, report card) must still read when printed in greyscale; colour may reinforce meaning but never carry it alone.

## Typography

**Display Font:** Anek Devanagari (with Noto Sans Devanagari, Noto Sans, system-ui)
**Body Font:** Anek Devanagari (same stack)

**Character:** One variable face with real Devanagari and Latin, so a Hindi sentence and its English twin share weight, height and rhythm. Anek Devanagari stands in for the dealt Switzer, which has no Devanagari; it loads from Google Fonts at the normal width axis ('wdth' 100, weights 400 to 700) and the page stays usable on the Noto and system fallbacks when offline.

### Hierarchy
- **Display** (600, clamp(3.4rem → 8.75rem), line-height 0.95): the programme name on the home hero only. On phones it drops to clamp(3rem, 15vw, 5rem) and the road picture moves to its own line. The closing "Class 10" (up to 10.5rem) and the footer name (up to 7.5rem) use the same treatment.
- **Headline** (600, clamp(2rem → 4rem), line-height 1): home section statements ("Every road, one place.", the exam-dates title) and the four staircase steps (up to 4.6rem).
- **Title** (600, clamp(1.6rem → 2rem), line-height 1.12): the h1 of each app screen. h2 runs clamp(1.4rem → 1.75rem), h3 1.1875rem, h4 1.0625rem.
- **Lead** (400, clamp(1.25rem → 1.625rem), line-height 1.35, max 52ch): one supporting sentence under a heading. Slate Grey in the app, Ink on the home hero.
- **Body** (400, clamp(1.0625rem → 1.1875rem), line-height 1.5): running text; paragraphs held to 36 to 52ch. Never below 1rem; inputs never below 16px so phones do not zoom.
- **Label** (500, clamp(0.875rem → 0.9375rem)): hints, table headers, captions, nav group names, tags (0.8125rem, 600).

### Named Rules
**The Same Voice Rule.** Hindi and English are set in the same face at the same size and weight. Negative tracking (−0.02em to −0.045em) is applied to large English headings only (`html[lang=en]`); Devanagari is never tracked, because tightening breaks its headline bar.

**The Plain Weight Rule.** Headings are 600; emphasis inside text is 600; body is 400. No 800/900 weights, no italics for emphasis, no all-caps interface labels. The one exception is the printed certificate's spaced-caps "CERTIFICATE OF PARTICIPATION" line, a convention of the document form.

**The Tabular Figures Rule.** Counts, percentages, dates and roll numbers use tabular figures so columns of numbers line up.

## Layout

**Home (the page).** A white page with a top line: emblem and wordmark on the left, five text links, the हिं/EN pill and a Menu pill on the right. The content column is min(1180px, 100% − 3rem). The hero fills the first viewport: the name with the road inside it, one supporting sentence, and along the bottom "I am in [Class 10] [Class 12]" on the left and the blue start pill on the right. Below it the sections follow the same grammar on a 12-column grid with 1rem gutters and section padding of clamp(4rem, 9vh, 7rem): a four-step staircase of sentences (each step indented further), four road rows with a statement on the left and a picture on the right at differing sizes and ratios, an exam-date table pushed to the right columns beside a tall picture, a large paragraph with a small picture dropped in like a drop cap, and a full-height ink band asking "Class 10 or 12?" with two white pills. The footer is ink, at least 80svh tall, ending in the programme name at display scale.

**App screens (the ledger).** The ground is Ledger Ground. At 1024px and wider a fixed 248px sidebar holds the emblem wordmark, the language pill, grouped navigation and tools; content shifts right of it in a column of min(1120px, 100% − 4rem). Below 1024px the sidebar becomes a 56px sticky bar (translucent ground with blur) with the wordmark and a Menu pill; Menu opens one full-screen sheet with the navigation groups. Grids are 2, 3 or 4 columns with 1rem gaps and collapse to 2 at 960px and to 1 at 640px. Detail pages use a main column plus a 320px side column. Tables become stacked label/value rows on phones.

**Responsive steps:** 1100px (top-line links reduce to three), 1024px (sidebar on/off), 960px (grids to two columns, detail to one), 760px (top-line links hidden), 640px (phone: 16px side gutter, single column, hero picture on its own line).

**Pictures.** Six illustrations made with Figma AI (a road through mustard fields, a cycle, nursing, an ITI workshop, a classroom, computers), each in 640 and 1280px WebP with a provenance JSON beside it. They appear only on the home page and are labelled in the footer as illustrations, not real students or schools. No photographs of real students, schools or colleges are used.

### Named Rules
**The Statement and Proof Rule.** Each home section is a short sentence on the left with its evidence beside it. A section that needs an icon grid to explain itself is rewritten as a sentence instead.

## Elevation & Depth

The system is flat. Cards are separated from the ground by tone (white on #f2f4f7) and a hairline ring drawn with box-shadow (`0 0 0 1px rgba(17,17,17,.06)` in the app, a 1px Hairline ring on the white home page), not by drop shadows. Hover darkens the ring to Strong Hairline. Only two things lift: a career or recommendation card on hover (a 14px soft shadow under the ring) and the toast, which floats above the page.

### Shadow Vocabulary
- **Hairline ring** (`box-shadow: 0 0 0 1px rgba(17,17,17,.06)`): every app card, tree node, timeline cell, roster and compare table.
- **Hover ring** (`box-shadow: 0 0 0 1px #c9ccd1`): hover on clickable cards and leaves.
- **Hover lift** (`box-shadow: 0 0 0 1px #c9ccd1, 0 4px 14px rgba(17,17,17,.06)`): career and recommendation cards on hover only.
- **Toast** (`box-shadow: 0 8px 28px rgba(0,0,0,.25)`): the ink toast at the bottom of the screen.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest; depth comes from white on pale ground and a hairline. A shadow appears only on hover of a card that opens something, or on a transient toast.

## Shapes

Small, consistent corners. Cards, answer options, tree nodes and quiet panels use 8px; inputs, inner panels, fact boxes and number badges use 6px; buttons, chips, tags, the language switch and progress bars are full pills. Pictures use 4px so they read as prints rather than UI. Selection is shown by filling a shape with Ink, never by a coloured outline. Circles mark step numbers, answer letters and the current journey step. The hero picture slot is an em-sized rounded rectangle that sits on the type baseline and scales with the name.

## Components

### Buttons
Confident, quiet and round.
- **Shape:** full pill (999px), minimum 44px tall; large 52px, small 36px.
- **Primary:** near-black Ink with white 600 text, padding 0.5rem 1.25rem. Hover goes to #2b2b2b.
- **Secondary:** Pill Grey with Ink text; hover Pill Grey Hover.
- **Home action:** the single blue pill (Road Blue, 52px) on the home hero, hover Road Blue Deep. It is the only blue button in the product.
- **On ink:** white pills (56px, min 200px wide) on the closing ink band and the class-session bar.
- **Press:** scale(0.97) on press, 120ms; disabled at 40% opacity.
- **Focus:** a 2px Road Blue outline offset by 2px, on every focusable element.

### Chips
- **Style:** white with a 1px Strong Hairline border, Ink text, pill shape, 38px tall.
- **State:** hover darkens the border to Ink; selected fills with Ink and white 600 text. Tags are Pill Grey; badges are Ink with white text.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** Paper on the Ledger Ground; quiet panels (notices, resume box, consent) are Ledger Ground on Paper.
- **Shadow Strategy:** hairline ring only (see Elevation & Depth).
- **Border:** none; the ring does the work.
- **Internal Padding:** 1.25rem 1.4rem; the question card 2rem 1.8rem.

### Inputs / Fields
- **Style:** white, 6px corners, 44px tall, an inset 1px Strong Hairline ring, 16px minimum text.
- **Focus:** the ring thickens to an inset 2px Ink ring.
- **Error:** an inset 2px Error Red ring and a 600 red message.

### Assessment answers
- **Agree scale:** five equal faces in a row, 1.5px Strong Hairline border, 8px corners; selected fills Ink with white text.
- **Options:** full-width rows with a lettered circle; selected takes a Ledger Ground fill, an Ink border, 600 text and an Ink-filled letter.
- **Progress:** a 6px pill track in Ledger Ground Deep with a Road Blue fill.

### Navigation
- **Home:** a single top line of text links (Ink, 500, hover Road Blue), the language pill and a grey Menu pill.
- **App, desktop:** a 248px sidebar on the ground; grouped links 34px tall with 8px corners, hover a 5% ink wash, current page Active Grey and 600.
- **App, phone:** a 56px sticky bar with a translucent ground and blur, the wordmark and the Menu pill; Menu opens a full-screen white sheet with the groups in an auto-fit grid and 44px links.
- **Language switch:** a Pill Grey track; the chosen language sits in a white pill.

### The road in the name (signature)
The hero picture sits inside the programme name in an em-sized slot (2.1em × 0.72em). On load it starts clipped shut from the right and scaled to 1.12, then the clip opens over 1.1s on an in-out curve while the picture settles to scale 1 over 1.4s. Home sections then rise in once (16px, 0.5s, 70ms stagger) as they scroll into view. Classes are added by script, so the page is complete without it; under `prefers-reduced-motion` the picture is shown open and nothing moves, and print always shows everything.

### Report card (printed)
Two A4 sheets per student, printed as a set: a participation certificate (front) and a one-page career profile (back). The front has an ink double frame, the Haryana emblem with "हरियाणा सरकार / Government of Haryana", a 5% emblem watermark, the student's name over an ink rule, and signature lines with a dashed seal circle. The back has a 4mm ink top band, the emblem header, white boxes with light grey borders and 1.2mm corners, and the career list. Every line is bilingual. Each sheet shrinks to fit the printable area so a report card is always exactly two pages.

## Do's and Don'ts

### Do:
- **Do** keep the chrome ink and grey: Ink (#111111) text, Pill Grey (#e6e7e9) secondaries, Ledger Ground (#f2f4f7) behind app screens.
- **Do** give each screen at most one blue element: its main data (progress, fit meter, result bar) or, on home, the start pill.
- **Do** set Hindi and English in Anek Devanagari at the same size and weight, with the Noto and system fallbacks in place.
- **Do** use near-black pills for primary actions and grey pills for secondary ones, at least 44px tall.
- **Do** use 8px corners for cards and 6px for controls and inner panels.
- **Do** keep the Haryana emblem in the header and on both printed sheets.
- **Do** label generated pictures as illustrations and keep their provenance file beside them.
- **Do** provide a still state for every motion under `prefers-reduced-motion`.

### Don't:
- **Don't** add a utility bar, rows of blue buttons on white, ruled link lists or grids of icon cards.
- **Don't** use gradients, tinted panels with coloured borders, or decorative shadows.
- **Don't** colour navigation, headers, cards or secondary buttons.
- **Don't** track Devanagari or set interface labels in all caps.
- **Don't** use photographs of real students, schools or colleges, or invent testimonials or usage numbers.
- **Don't** let colour alone carry meaning on anything that prints.
