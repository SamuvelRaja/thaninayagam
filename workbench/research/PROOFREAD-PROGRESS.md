# Archive text proofread progress

Internal tracker for OCR / PDF-transfer cleanup of on-site reading texts (`content/books/*.md`).  
Method when marked **re-OCR**: fresh Tesseract from IA page images, hyphenation rejoined, obvious character errors fixed against the scan. Footnotes and Tamil verse may still need spot-checks — prefer the scan view when unsure.

Last updated: 2026-08-11 (late evening)

## Status key

| Status | Meaning |
| --- | --- |
| `done` | Re-OCR’d from page images + light edit; readable for public hosting |
| `filled` | Body filled from IA PDF/txt layer with light cleanup (not fresh page re-OCR) |
| `aid` | Finding aid only — full OCR too noisy; prefer scan |
| `stub` | Holding / bibliographic only (little or no body OCR) |
| `lending` | External / not hosted as full text here |

## Progress log

| # | Holding / bookMd | IA leaves (approx.) | Status | Notes |
| --- | --- | --- | --- | --- |
| 1 | `ethical-interpretation-nature` | 94–104 | **done** | Synced into civilization anthology. |
| 2 | `tamil-humanism` / `aspects-tamil-humanism` | 2099–2111 | **done** | Shared *Ancient Tamil Poet-Educators*. |
| 3 | `indian-thought-roman-stoicism` | 3717–3752 | **done** | Synced into anthology + collected-papers. |
| 4 | `educational-thoughts-ancient-tamil` | 1417–1431; 1523–1537; 2099–2111 | **done** | Synced into collected-papers. |
| 5 | Nature / Landscape line | IA `tdl.27397…` 5, 9–207 | **done** | Synced across three bookMds. |
| 6 | `research-in-tamil-studies` | 1007–1017; 2481–2505; 865–874 | **done** | Plate OCR soup stripped from First Books. |
| 7 | `collected-papers` | — | **done** | Readable English essay set cleaned/synced. |
| 7a | `language-rights-ceylon` | 1637–1650 | **done** | p. 228 from djvu. |
| 7b | `earliest-jain-buddhist-teaching` | 2989–3001 | **done** | |
| 7c | `doctor-r-p-sethu-pillai` | 3250–3262 | **done** | |
| 7d | `antao-de-proenca-dictionary` | 4091–4137 | **done** | Intro + Knowlton/Thani preface + Knowlton Indo-Portuguese elements (4109–4137). |
| 7e | `survival-tamil-culture` | 3–9 | **done** | |
| 8 | `tamil-culture-and-civilization` | — | **done** | |
| 8a | `tamil-culture-past-present-future` | 1374–1397 | **done** | Also in `tamilar-panpatu`. |
| 9 | `tamilttutu` | — | **filled** | Structured essay headings. |
| 9a | `tiruvalluvar` | — | **filled** | Three lecture headings. |
| 9b | `ulaga-ozhakkaviyalil-tirukkural` | — | stub/proxy | Links to Tiruvalluvar. |
| 9c | `tamilaram` | — | **aid** | Memorial volume. |
| 10 | `ore-ulakam` / `collected-speeches` | — | **aid** | |
| 11 | `conference-1966` | — | **aid** | |
| 12 | `tamil-culture` (vols 1–12) | — | **aid** | |
| 13 | Lending (`carthaginian-clergy`, `reference-guide…`, `tamil-studies-abroad`) | — | lending | Context notes only. |

## Session notes

### 2026-08-11 (late, cont.)

- Knowlton *Vocabulario Tamulico Lusitano: Indo-Portuguese Elements* re-OCR’d (IA 4109–4137) and appended to `antao-de-proenca-dictionary`. Wired as archive document (EN/TA); taxonomy under reference guides. Cross-note in collected-papers (article not part of CP volume).
- Ethical essay Tamil quotations restored from page images (Nar. 10; Agam 122; Kali 41; Agam 71) and synced into collected-papers + civilization anthology.
- Survival: restored closing Tirukkural couplet + full Eliot satellite-culture footnote; synced to collected-papers.
- Poet-Educators: restored note 17 (Puram interventions list; was mis-marked as Tamil); renumbered body markers 15–19; synced to aspects / educational-thoughts / collected-papers.

### 2026-08-11 (late)

- Tamil document stubs cleaned (Tamil rights; no English “How to read”).
- TOC runtime fix: heading IDs no longer start with digits; sidebar uses `getElementById`.
- Proença preface translation (Knowlton + Thani Nayagam) re-OCR’d and synced.
- Carthaginian stub clarified as lending-only context.

## Queue (optional)

1. Spot-pass footnotes / Tamil verse on remaining cleaned Culture essays (ethical, survival, poet-educators done; past-present-future still has placeholders)
2. Fresh page re-OCR for `tamilttutu` / `tiruvalluvar` when time allows
3. Spot-check Tamil headwords in Knowlton glossary against scan (IA 4109–4137)
