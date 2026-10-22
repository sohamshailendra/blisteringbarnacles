---
name: Mera Bhavishya – Mera Nirnay
description: The Government of Haryana's free, bilingual career guidance portal for Class 10 and 12 students, painted like the wall of a government school.
colors:
  geru: "#9b3a24"
  geru-deep: "#7c2d1b"
  leaf-green: "#1e6a3b"
  leaf-green-deep: "#155230"
  leaf-green-tint: "#dfeadf"
  ochre: "#e3a21a"
  limewash: "#f3e7c6"
  limewash-deep: "#ecdcb2"
  limewash-tint: "#efe4c4"
  bar-track: "#e6dcc0"
  notice-white: "#ffffff"
  wash-line: "#e2d6b6"
  wash-line-strong: "#87774f"
  blackboard: "#1d2a24"
  chalk: "#f4f1e6"
  chalk-dim: "#c9c4b2"
  wood: "#6d4c2f"
  ink: "#1a1a1a"
  muted: "#5c5240"
  soft: "#7a705c"
  link: "#8a3320"
  print-ink: "#111111"
  interest-r: "#9b3a24"
  interest-i: "#1e6a3b"
  interest-a: "#8a5a00"
  interest-s: "#1d2a24"
  interest-e: "#6d4c2f"
  interest-c: "#4a4f45"
  status-ok: "#137333"
  status-ok-tint: "#e6f4ea"
  status-warn: "#8a5a00"
  status-warn-tint: "#f7e2a8"
  status-err: "#c5221f"
  status-err-tint: "#fce8e6"
typography:
  display:
    fontFamily: "Khand, 'Anek Devanagari', 'Noto Sans Devanagari', 'Noto Sans', system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 1.2rem + 5.6vw, 6.75rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "0"
  headline:
    fontFamily: "Khand, 'Anek Devanagari', 'Noto Sans Devanagari', 'Noto Sans', system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 1.4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "0"
  section:
    fontFamily: "Khand, 'Anek Devanagari', 'Noto Sans Devanagari', 'Noto Sans', system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "0"
  sign:
    fontFamily: "Khand, 'Anek Devanagari', 'Noto Sans Devanagari', 'Noto Sans', system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0"
  title:
    fontFamily: "'Anek Devanagari', 'Noto Sans Devanagari', 'Noto Sans', system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.12
  lead:
    fontFamily: "'Anek Devanagari', 'Noto Sans Devanagari', 'Noto Sans', system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "'Anek Devanagari', 'Noto Sans Devanagari', 'Noto Sans', system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "'Anek Devanagari', 'Noto Sans Devanagari', 'Noto Sans', system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0"
  paint: "3px"
  stop: "50%"
spacing:
  gutter-phone: "16px"
  gutter-desktop: "24px"
  container: "1180px"
  container-app: "1120px"
  sidebar: "248px"
  appbar: "56px"
  section: "2.5rem"
  wall-section: "clamp(2.75rem, 6vh, 4rem)"
  panel: "1.25rem 1.4rem"
  grid-gap: "1rem"
  dado: "1.25rem 0 1.35rem"
components:
  button-primary:
    backgroundColor: "{colors.geru}"
    textColor: "{colors.notice-white}"
    rounded: "{rounded.paint}"
    padding: "0.5rem 1.25rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.geru-deep}"
    textColor: "{colors.notice-white}"
  button-primary-large:
    backgroundColor: "{colors.geru}"
    textColor: "{colors.notice-white}"
    rounded: "{rounded.paint}"
    padding: "0.7rem 1.6rem"
    height: "52px"
  button-ghost:
    backgroundColor: "{colors.notice-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paint}"
    padding: "0.5rem 1.25rem"
    height: "44px"
  button-ghost-hover:
    backgroundColor: "{colors.limewash-deep}"
    textColor: "{colors.ink}"
  button-on-green:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paint}"
    padding: "0.5rem 1.25rem"
    height: "44px"
  painted-sign:
    backgroundColor: "{colors.notice-white}"
    textColor: "{colors.ink}"
    typography: "{typography.sign}"
    rounded: "{rounded.paint}"
    padding: "0.55rem 1.1rem 0.6rem"
    height: "56px"
  painted-sign-hover:
    backgroundColor: "{colors.limewash}"
    textColor: "{colors.ink}"
  dado-band:
    backgroundColor: "{colors.geru}"
    textColor: "{colors.notice-white}"
    padding: "{spacing.dado}"
  number-stop:
    backgroundColor: "{colors.geru}"
    textColor: "{colors.notice-white}"
    rounded: "{rounded.stop}"
    size: "2.6rem"
  number-stop-list:
    backgroundColor: "{colors.geru}"
    textColor: "{colors.notice-white}"
    rounded: "{rounded.stop}"
    size: "2rem"
  progress-track:
    backgroundColor: "{colors.wash-line-strong}"
    rounded: "{rounded.none}"
    height: "6px"
  progress-fill:
    backgroundColor: "{colors.geru}"
    rounded: "{rounded.none}"
  data-bar:
    backgroundColor: "{colors.leaf-green}"
    rounded: "{rounded.none}"
    height: "8px"
  data-bar-track:
    backgroundColor: "{colors.bar-track}"
    rounded: "{rounded.none}"
  notice-panel:
    backgroundColor: "{colors.notice-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paint}"
    padding: "{spacing.panel}"
  notice-strip:
    backgroundColor: "{colors.limewash-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paint}"
    padding: "0.9rem 1.1rem"
  notice-warning:
    backgroundColor: "{colors.status-warn-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paint}"
    padding: "0.9rem 1.1rem"
  answer-option:
    backgroundColor: "{colors.notice-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paint}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  answer-option-selected:
    backgroundColor: "{colors.leaf-green-tint}"
    textColor: "{colors.ink}"
  scale-face-selected:
    backgroundColor: "{colors.leaf-green}"
    textColor: "{colors.notice-white}"
  chip:
    backgroundColor: "{colors.notice-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paint}"
    padding: "0.35rem 0.9rem"
    height: "38px"
  chip-selected:
    backgroundColor: "{colors.leaf-green}"
    textColor: "{colors.notice-white}"
  text-input:
    backgroundColor: "{colors.notice-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paint}"
    padding: "0.55rem 0.85rem"
    height: "44px"
  sidebar:
    backgroundColor: "{colors.leaf-green}"
    textColor: "{colors.notice-white}"
    width: "{spacing.sidebar}"
  sidebar-item:
    textColor: "{colors.notice-white}"
    rounded: "{rounded.paint}"
    padding: "0 0.75rem"
    height: "30px"
  sidebar-item-active:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
  phone-bar:
    backgroundColor: "{colors.leaf-green}"
    textColor: "{colors.notice-white}"
    height: "{spacing.appbar}"
  menu-sheet:
    backgroundColor: "{colors.limewash}"
    textColor: "{colors.ink}"
  wall-chart-heading:
    backgroundColor: "{colors.geru}"
    textColor: "{colors.notice-white}"
  wall-chart-number:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stop}"
    size: "1.8rem"
  blackboard:
    backgroundColor: "{colors.blackboard}"
    textColor: "{colors.chalk}"
    padding: "clamp(1.5rem, 3vw, 2.5rem)"
  green-wall:
    backgroundColor: "{colors.leaf-green}"
    textColor: "{colors.notice-white}"
  class-bar:
    backgroundColor: "{colors.blackboard}"
    textColor: "{colors.chalk}"
  toast:
    backgroundColor: "{colors.blackboard}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.paint}"
---

# Design System: Mera Bhavishya – Mera Nirnay

## Overview

**Creative North Star: "The Painted School Wall"**

The portal is painted like the wall of the student's own Haryana government school: a yellow limewash upper wall, a brick-red geru dado along the bottom with an ink stripe painted along its top edge, signboard lettering, a painted number line, a blackboard in a wooden frame, green painted woodwork. Every view, the chrome included, sits on that wall. Content goes on white notice panels pinned to the limewash. The student should recognise it as the wall they walk past every day, not as a website template.

This world was chosen by the user. It refuses two things by name: the gov-design-system template look (blue headers, grey cards), and the colourless "ink on white, one blue" studio page this portal shipped before. The paint is flat and matte. Corners are square, there are no shadows, and nothing is glass or a gradient. Depth comes from paint layers: a white panel on limewash, a geru band under the wall, a green frame around the app. Density is a school notice board: plain, legible, large type in Hindi first, every action a painted sign big enough for a thumb.

Product truth keeps the world honest. The Haryana Government emblem stays, on a limewash plate where the chrome is green. Pictures are illustrations made with Figma AI, and the footer says so. They never pretend to show real students or schools. The printed report card has to survive an ordinary black-and-white school printer.

**Key Characteristics:**
- Limewash ground everywhere, with white notice panels and a 1px wash-line border.
- Geru marks the one thing to do (the primary button) and the steps of a sequence (number-line stops). Leaf green paints the chrome, the data and the student's own choices. Ochre marks where you are.
- Khand signboard lettering for headings and numbers in both scripts, Anek Devanagari for everything read.
- Square painted corners (3px), flat paint, no shadows at rest.
- The painted number line is the signature. Any numbered sequence or progress runs along it.
- Wall devices: the geru dado with its ink stripe, the framed blackboard, the green wall, the six-roads wall chart.

## Colors

A school-wall palette of earth pigments and painted woodwork: limewash, geru, ochre, leaf green, blackboard and wood, written in ink. No blue anywhere.

### Primary
- **Geru Brick Red** (`geru`): the dado bands (the hero band, the 12px foot of every app page header, the footer's top band), every primary button, number-line stops, the assessment progress fill, the wall-chart heading strip and the radar outline on results. It means "do this" or "this step". **Geru Deep** (`geru-deep`) is its hover and pressed paint.

### Secondary
- **Leaf Green** (`leaf-green`): painted chrome (the 248px desktop sidebar, the 56px phone bar, the browser theme colour), the counsellor "green wall" on home, the bars in results data, selected chips and scale faces, the completed steps of the journey and badges. **Leaf Green Deep** (`leaf-green-deep`) is used for text on its tint. **Leaf Green Tint** (`leaf-green-tint`) is the ground of a selected answer option and of the "good fit" chip.

### Tertiary
- **Ochre** (`ochre`): "you are here" and "look here". It paints the active sidebar or menu item, the numbered discs on the wall chart, the root node of the career tree, primary buttons on the green wall and the text-selection highlight. It is always a field with ink on it, never text.

### Neutral
- **Limewash** (`limewash`): the page and app ground, the full-screen menu, and the plate behind the emblem on green.
- **Limewash Deep** (`limewash-deep`): the second coat. Used for notice strips, the footer wall, hover on white controls, the open tree node, and picture placeholders.
- **Limewash Tint** (`limewash-tint`) and **Bar Track** (`bar-track`): quiet fields for context boxes, fact tiles and count pills, and the unfilled track of data bars.
- **Notice White** (`notice-white`): notice panels, answer options, inputs, painted signs, ghost buttons, the wall chart.
- **Wash Line** (`wash-line`): the 1px border of every panel, and table rules. **Wash Line Strong** (`wash-line-strong`): the borders of chips, options and inputs, dashed rules in the wall chart, and the progress track.
- **Ink** (`ink`): text, the number line itself, the dado stripe, the frame of the wall chart, ghost-button borders and the focus ring. **Muted** (`muted`) is used for secondary text. **Soft** (`soft`) is only for placeholders and breadcrumb separators.
- **Link Red** (`link`): inline links, a darker geru so it reads as paint and not as a web-blue link.
- **Blackboard** (`blackboard`) with **Chalk** (`chalk`) and **Chalk Dim** (`chalk-dim`): the exam-dates board, the class-session bar and the toast. **Wood** (`wood`) is only the frame of the blackboard.
- **Print Ink** (`print-ink`): the frame, rules and text of the printed sheets.

### Interest colours (RIASEC)
The six interest types are painted from the wall palette, never from a chart library: Realistic `interest-r` (geru), Investigative `interest-i` (leaf green), Artistic `interest-a` (dark ochre), Social `interest-s` (blackboard), Enterprising `interest-e` (wood), Conventional `interest-c` (slate). They fill the letter tiles of a student's code, on screen and on the printed career profile. White text is used on all six.

### Status
Status colours are a separate set and never stand in for the palette: `status-ok`, `status-warn` and `status-err`, each with a tint. Warnings in a notice use `status-warn-tint` with ink text.

### Named Rules
**The No Blue Rule.** No blue is used anywhere: not in links, focus, charts, chrome or the theme colour. The world has no blue pigment. Blue is what the refused template and the previous direction were made of.

**The Three Pigments Rule.** Each pigment has one job. Geru: act, or a step in a sequence. Green: the frame and the student's own data and choices. Ochre: where you are. Do not swap them for variety.

## Typography

**Display Font:** Khand (with Anek Devanagari, then Noto Sans Devanagari, then system sans)
**Body Font:** Anek Devanagari (with Noto Sans Devanagari, Noto Sans, system sans)

**Character:** Khand is condensed painted-signboard lettering with true Devanagari, so headings read like the name painted over a school gate in both scripts. "Stencil-like" was requested, but no stencil-cut face with Devanagari can be loaded, so condensed sign lettering stands in for it. Anek Devanagari is a sturdy, open text face for long Hindi and English reading on cheap screens.

### Hierarchy
- **Display** (Khand 600, `clamp(3.1rem, 1.2rem + 5.6vw, 6.75rem)`, line-height 0.98; on phones `clamp(2.9rem, 14vw, 4.2rem)`): the programme name painted on the home wall, with the hero picture (two students) set inline in the line.
- **Headline** (Khand 600, `clamp(2rem, 1.5rem + 1.4vw, 2.75rem)`, 1.02): the h1 of each app page, and home section titles (up to 3rem).
- **Section** (Khand 600, `clamp(1.4rem, 1.2rem + 0.8vw, 1.75rem)`, 1.02): the h2 inside app pages.
- **Sign** (Khand 600, 1.5rem, 1): words on painted signs and number-line steps (up to 1.85rem), road names on home (1.6rem), and the numerals in stops (1.15–1.5rem).
- **Title** (Anek Devanagari 600, 1.1875rem): h3/h4 in app content, card and option titles.
- **Lead** (Anek Devanagari 400, `clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)`, 1.35, max 52ch): the one sentence under a page name. In app page headers it is 1.125rem/1.45.
- **Body** (Anek Devanagari 400, `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)`, 1.5): all running text, at width 100.
- **Label** (Anek Devanagari 500, `clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)`): hints, table heads, breadcrumbs and meta lines. Sidebar group names are set in Khand at 1.0625rem in limewash.

### Named Rules
**The Painted Letters Rule.** Khand is used only for things painted on the wall: h1 and h2, the programme name, signs, step names and numerals. Running text, h3/h4, buttons and form text stay in Anek Devanagari.

**The Zero Tracking Rule.** Painted headings keep letter-spacing at 0 in both languages. Tightened tracking belonged to the previous direction and breaks Devanagari matras.

## Layout

There are two kinds of wall. **Home** is a short public page on full-bleed limewash. It runs: a top line (emblem wordmark, five links that thin to three at 1100px and disappear at 760px, a language toggle and the menu); a hero that pairs the painted name with the six-roads wall chart in a 1.45 : 1 grid; a full-bleed geru dado holding the two class signs; the four-step number line; four roads in a four-column grid (two on phones) with the "also" pills; the blackboard of exam dates; and the full-bleed green wall for counsellors. Then the footer wall. **App screens** sit inside green chrome: a fixed 248px sidebar from 1024px, below that a sticky 56px green bar with a full-screen limewash menu. Every app page opens with a limewash header that ends in the dado stripe.

Content width is `min(1180px, 100% - 3rem)`, or `min(1120px, 100% - 4rem)` beside the sidebar. On phones (≤640px) it is `100% - 2rem`: a 16px gutter and no horizontal scroll. Sections breathe at 2.5rem, and home wall sections at `clamp(2.75rem, 6vh, 4rem)`. Panels are padded 1.25rem × 1.4rem, and grids gap at 1rem. Grids step down from 4 to 2 to 1 column at 960px and 640px. Tap targets are at least 44px (52px for the hero action and 56px for the class signs).

## Elevation & Depth

The system is flat. Depth is shown only by layers of paint: white notice panels on limewash, the deeper wash for strips and the footer, green chrome framing the limewash. Panels carry a 1px wash-line border instead of a shadow. Hover darkens the border to ink or deepens the paint. Nothing lifts. Two box-shadow values exist, and both are paint, not elevation. One is a solid ring in the ground colour (`0 0 0 4px` limewash, or 3px on white) that knocks a number stop out of the ink line behind it. The other is the footer's inset 4px ink stripe under its geru band.

### Named Rules
**The Flat Paint Rule.** No drop shadows, blurs, glass or gradients at rest or on hover. If something needs to stand forward, give it a different paint (white on wash, ochre on green, ink border on white).

## Shapes

Corners are square painted corners (`rounded.paint`, 3px) on every control and surface: buttons, chips, signs, panels, inputs, options, the toggle, nav items and badges. Only the number-line stops and the wall-chart numerals are true circles (`rounded.stop`). Bars, progress tracks and their fills are cut square (`rounded.none`), like paint along a ruler. Edges are drawn as painted lines: the 1px wash line around panels, the 2px ink border on ghost buttons and the menu button, the 3px ink frame of the wall chart, the 12px wood frame of the blackboard (8px on phones), and the dado's ink stripe (4–5px). Dashed 1px rules divide the lists on the wall chart and the blackboard, like chalk lines.

### Named Rules
**The No Pill Rule.** Nothing is pill-shaped. Square paint is used everywhere, and circles are kept for numbered stops.

## Components

### Buttons
Signwriter's paint, solid and plain.
- **Shape:** square painted corners (3px).
- **Primary:** geru with white text, 600 weight, 44px minimum height (52px large for the hero "Start the free assessment"). Hover moves to geru-deep. Pressed scales to 0.97 over 120ms.
- **Ghost:** white with ink text and a 2px ink border. Hover moves to limewash-deep.
- **On the green wall:** the primary becomes ochre with ink text, and the ghost becomes transparent with a white border and white text.
- **Focus:** a 3px ink outline offset 2px. On green, geru and blackboard grounds the outline turns white.
- **Disabled:** 40% opacity, no press.

### Painted signs (the dado)
White painted boards on the geru dado: "I am in **Class 10** / **Class 12**", with the class in Khand at 1.5rem and a muted line under it. They are 56px high and at least 250px wide (full width stacked on phones). Hover paints them limewash. The dado is a full-bleed geru band with a 5px ink stripe painted along its top edge, and its label is set in Khand.

### Cards / Containers (notice panels)
- **Corner Style:** 3px.
- **Background:** white on the limewash wall.
- **Shadow Strategy:** none (see Elevation). There is a 1px wash-line border, and on hover over a link card the border turns ink.
- **Internal Padding:** 1.25rem × 1.4rem.
- **Notice strips** sit on limewash-deep (privacy notes, tips). A warning notice uses the warn tint with ink text.

### Inputs / Fields
- **Style:** white field, 3px corners, an inset 1px wash-line-strong edge, 44px tall, and text at least 16px so phones don't zoom.
- **Focus:** the edge thickens to a 2px ink inset.
- **Answer options and scale faces:** white with a 1.5px wash-line-strong border, which turns ink on hover. A selected option fills leaf-green-tint with a green-filled letter disc. A selected scale face or chip fills solid leaf green with white text.

### Navigation
- **Home top line:** sits on limewash with no rule. Links are ink text at 1rem/500 and turn geru on hover. The language toggle is a white segmented control with the active language filled ink. The menu button is white with a 2px ink border.
- **App sidebar (≥1024px):** 248px of leaf-green paint. The emblem sits on a limewash circle plate. Group names are in Khand in limewash, items are white 30px rows, hover is a 12% white wash, and the **active item is painted ochre with ink text**.
- **Phones:** a sticky 56px green bar with the emblem plate and a limewash menu button, which opens a full-screen limewash menu with the same groups. The active item there is ochre too.
- **Page header:** limewash with the h1 in Khand, ending in a 12px geru band with a 4px ink stripe at its foot: the dado stripe.

### The Painted Number Line (signature)
A thick ink line (4px) with a 3px tick dropping to each numbered geru stop (2.6rem circle, numeral in Khand, knocked out of the line with a limewash ring). On home it carries the "four steps" across four columns. It turns into a vertical line on phones, and on tablets the stops stand alone. It draws once when it scrolls into view: the line scales out from the left over 0.9s, then the stops pop in at a stagger of 250ms + 180ms each and the ticks fade in. With reduced motion, or without script, it is simply drawn. The same device carries:
- **Assessment progress:** a square 6px wash-line-strong track with a geru fill and an ink tick at every section.
- **Results next steps, the class how-to and the plan:** 2rem geru stops on a vertical 3px ink line.
- **Career roadmap:** geru stops joined by a 3px ink line.
- **Journey:** done steps in green, the next step in geru with a 2px geru border.

### Wall chart (home hero)
A white board with a 3px ink frame, a geru heading strip ("After Class 10: six roads") and six rows, each with an ochre numbered disc in Khand, the road name and a geru arrow, divided by dashed rules. It is hidden on phones, where the dado signs do the job.

### Blackboard and green wall
- **Blackboard:** blackboard paint with chalk text in a 12px wood frame. Exam dates run in two columns, with the months in Khand in chalk-dim and dashed chalk rules between rows.
- **Green wall:** a full-bleed leaf-green section for counsellors, with white Khand headings, limewash text, an ochre primary button and an illustration.
- **Class-session bar and toast:** blackboard paint with chalk text.

### Data
Results bars and meters are leaf green on the bar-track colour, cut square. The radar is drawn in geru with a 16% geru fill. A student's interest code is shown as letter tiles in the six RIASEC colours.

### Pictures
These are Figma-AI illustrations: a road through mustard fields, a cycle, nursing, an ITI workshop, a classroom and a computer lab, at 640 and 1280 widths in WebP. Each has a provenance sidecar (`*.webp.json`) and is credited in the footer as an illustration. They are cropped square-cornered (3px) on a limewash-deep placeholder. In the hero, the road opens inside the painted name like a shutter (a clip-path wipe over 1.1s). With reduced motion it is simply shown.

### Report card sheets (print)
Two A4 sheets printed as a set: the participation certificate and the career profile. They use the portal's own look, translated to paper. The certificate has an ink double frame (a 1.2mm border with a 0.35mm inner line), the emblem watermark at 5%, headings in Khand in print ink, and geru for the certificate's subtitle and the school name. The interest letter tiles are near-square (1.2mm corners). The profile has a 1.2mm ink rule at the head, white boxes with hairline borders, and career fit figures in geru. The sheets print exactly two pages: each sheet scales down to fit the printable area. Everything must stay legible in black and white.

## Do's and Don'ts

### Do:
- **Do** paint every surface on limewash (`limewash`), and put readable content on white notice panels with a 1px wash-line border.
- **Do** use geru for the primary action and for numbered stops; leaf green for the chrome, data bars and the student's selections; and ochre for "you are here" (the active nav item, wall-chart numerals), always with ink on it.
- **Do** end every app page header with the dado stripe: a 12px geru band with a 4px ink stripe.
- **Do** put any numbered sequence or progress on the painted number line: an ink line with geru stops.
- **Do** keep corners at 3px everywhere, and circles only for number stops.
- **Do** set h1/h2, signs and numerals in Khand with letter-spacing 0, and everything read in Anek Devanagari.
- **Do** switch the focus outline to white on green, geru and blackboard grounds, and keep it a 3px ink outline elsewhere.
- **Do** keep the Haryana emblem on a limewash plate wherever the chrome is green.
- **Do** label every picture as a Figma-AI illustration and ship its provenance sidecar.
- **Do** make printed sheets in print ink with geru accents, legible in black and white.
- **Do** give every motion a reduced-motion state that shows the finished picture (line drawn, shutter open).

### Don't:
- **Don't** use blue anywhere: links, focus, charts, chrome or the theme colour.
- **Don't** use drop shadows, blur, backdrop-filter glass or gradients; the wall is flat paint.
- **Don't** use pill or rounded shapes for buttons, chips, toggles or panels.
- **Don't** set ochre as text, or put text in white on ochre; ochre is a field for ink.
- **Don't** set running text, buttons or form text in Khand.
- **Don't** apply negative letter-spacing to headings in either script.
- **Don't** colour the RIASEC types or data from outside the wall palette.
- **Don't** present illustrations as photographs of real students, schools or colleges.
