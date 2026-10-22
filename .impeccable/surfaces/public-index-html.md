---
version: 1
slug: "public-index-html"
primary_target: "public/index.html"
related_targets: []
---

# Surface: Mera Bhavishya portal (whole site, public/index.html)

Scope: every view of the single-file portal, the counsellor class session and the printed report card set.
Mode: home is a short service start page; everything else is Operate/Read. One painted world covers both, chrome included.
Audience and job: a Class 10/12 student on a low-end Android phone, Hindi first, often offline, finding a stream and next step; secondary, a school counsellor running a class on one shared device and printing every report card.
Constraints: user-pinned world "school wall paint" (Haryana government school walls, BaLA), chosen in the direction round and confirmed as a full redo; home must be compact (key actions in the first screen, about 4,000px on desktop). Haryana emblem kept; bilingual; offline; WCAG 2.1 AA; certificate prints in black and white.
Imagery: six Figma-AI illustrations (labelled), provenance in public/img/*.json.

## Direction contract

THESIS: The portal is painted like the walls of the student's own government school: limewashed upper wall, geru dado, stencilled lettering, a painted number line. Refuses both the gov-design-system template and the colourless studio page the previous round shipped.

OWN-WORLD: Yellow limewash #f3e7c6 walls with white notice panels, geru (brick red) #9b3a24 dado bands and primary buttons, ochre #e3a21a fields, leaf green #1e6a3b painted chrome (sidebar, data bars), blackboard #1d2a24 with chalk-white text, ink #1a1a1a. Khand (condensed painted-sign lettering; no stencil-cut face with Devanagari exists on the font services the site can load, so "stencil-like" is carried by condensed sign lettering) for headings in both scripts, Anek Devanagari for text. Square painted corners (3px), flat, no shadows.

STORY: The student sees the programme name painted on the wall, picks Class 10 or 12 on the dado or starts the assessment, reads the four steps on a painted number line, opens one of the four roads, checks exam dates on the blackboard, and counsellors find the class session on the green wall.

FIRST VIEWPORT: Top line on limewash: emblem wordmark, five links, language, menu. The name in Khand at about 6vw with the road photo inline; one supporting sentence; the blue-free geru "Start the free assessment" button; the hero ends in a geru dado band (with its painted ink stripe) holding "I am in [Class 10] [Class 12]" as painted white signs. All of it inside 900px.

FORM: User-pinned world from the direction round ("School wall paint", Impeccable's pick card); seed reference from that roll: seed:af3f76231c6ce404. Signature move: the painted number line, a thick ink line with tick marks and numbered geru stops, drawn once as it scrolls in; it also carries assessment progress and the journey.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
