# UX + Corporate-Academic UI Redesign — Master Plan

**Status:** Research complete · Plan locked · **Phase 3 complete — awaiting home review**  
**Rule:** One phase per iteration. Do not bundle phases. Stop after each phase for review.  
**Anti-pattern:** No Wikipedia-style see-also dumps. No rushed multi-surface edits.

---

## 1. Research summary (this turn)

### 1.1 react.dev (primary UX reference)

Observed on https://react.dev/ and https://react.dev/learn:

| Layer | Pattern | Implication for us |
| --- | --- | --- |
| **Home** | Brand-scale H1 + one line + **two** CTAs (Learn / Reference). Feature sections below. Full sitemap only in footer. | Home is a portal, not an essay + link farm. |
| **Top nav** | Few primary destinations (Learn, Reference, Community, Blog) with clear active pill. Search in header. | Keep 4–5 primary items; demote the rest to footer. |
| **Learn article** | **3 columns**: left section tree · center article · right “On this page”. | Archive documents need this, not a partial sidebar only. |
| **Orientation** | Breadcrumb above H1; `aria-current` in sidebar; scroll-aware right TOC. | User always knows where they are. |
| **Forward motion** | Single **Next** at article end (not “related pages”). | Section pages get one Next; never site-wide chips. |
| **Footer** | Site map once. | Header + footer = global nav; pages do not repeat it. |

Accessibility takeaways: skip targets, labeled navs, expand/collapse with `aria-expanded` on the **control**, keyboard-reachable sidebar, high-contrast active states.

### 1.2 Documentation peers (MDN)

- Sidebar defined as a **tree**, auto-expands current branch, collapses others.
- Multi-page guides use **Previous / Next** macros — sequence, not graph.
- Breadcrumbs = location hierarchy (`nav[aria-label=Breadcrumb]` + `aria-current=page`).

### 1.3 Archival / special-collections peers

| Source | Pattern to borrow |
| --- | --- |
| **Stanford Special Collections** | Institutional chrome; skip link; **On this page** region; plain “Using our collections”; collection **divisions** as primary browse. |
| **NYU Finding Aids redesign** | WCAG 2.0 AA; uncluttered; plain language; **one object → one URL**; mobile-light. |
| **U-M Digital Collections** | Usability testing: **reduce competing links**; one primary action per result row. |
| **Arizona Libraries Special Collections** | Align with institutional brand; “How to use” before deep lists; validated with real researchers. |
| **Harvard discovery work** | Clear separation of tools (catalog vs archival discovery vs exhibits); search-first when scale warrants it. |

### 1.4 Corporate-academic visual direction (not AI defaults)

**Target feel:** university research portal / institutional special collections — calm, precise, bilingual-capable.

| Token | Direction |
| --- | --- |
| Surfaces | Cool institutional (`#F3F5F7` paper, white cards) — **not** warm cream `#F4F1EA` |
| Accent | Deep teal / academic navy (`#1A4D63`) — **not** purple gradients |
| Secondary | Restrained brass — **not** loud terracotta |
| Type | Accessible sans for UI (keep Atkinson Hyperlegible); serif for display titles only |
| Density | Generous whitespace; hairline rules; soft single shadow — **not** broadsheet newspaper columns |
| Motion | 2–3 intentional transitions (header, sidebar active, hero fade) — respect `prefers-reduced-motion` |
| Craft | Kolam as rare seal/divider only — never as navigation chrome |

### 1.5 Current site gaps (from live `/en` audit)

1. **Home incomplete as portal** — still essay-heavy; holdings preview leads with unverified stubs (`—` year); first viewport is crowded (eyebrow + range + subtitle + lead + dual CTA + portrait).
2. **Complete theme missing** — CSS variables nudged, but hero/bands/header/cards still mixed legacy academic-ornament styles.
3. **Docs shell immature** — left sidebar exists; missing true sticky desktop tree, right “On this page” for long docs, polished active states.
4. **Nav overload** — six primary items; react.dev uses four.
5. **No search** — both docs and archives expect find-in-site.
6. **Bilingual parity** — every phase must ship EN + TA together.

---

## 2. Information architecture (locked)

```
Home (portal)
├── Archive (finding aid + external catalogue)
│   └── Document (Learn layout: sidebar · article · on-this-page)
├── About (biography essay)
├── Contributions (work themes)
├── Timeline (chronology)
└── Sources (bibliography)
```

**Nav rules**

1. Global destinations → header + footer only.
2. Inside Archive → sidebar tree + prev/next only.
3. Inside long essays → optional right “On this page” (same page anchors), never cross-site dumps.
4. One primary forward CTA at end of a section page (“Next · Timeline”), max.

**Anti-Wikipedia**

- No “Continue reading” chip walls.
- No “see also Archive / Contributions / Timeline” paragraphs.
- Citations go to Sources anchors; they are evidence, not navigation.

---

## 3. Phased execution (one phase = one iteration)

### Phase 0 — Research ✅ (this turn)

Deliverable: this document.

---

### Phase 1 — Complete design system / theme foundation ✅  
**Iteration goal:** One coherent corporate-academic theme token + primitive set. No page rewrites yet.

**Done**

1. Audited competing chrome in `style.css` (multiple header/button override stacks).
2. Locked tokens in `app/theme/foundation.css` (colors, type, space, radii, shadows, z-index, widths).
3. Defined primitives: `.button*`, `.section-label`, `.ui-rule`, `.ui-panel`, `.ui-interactive`.
4. Defined shells: `.site-shell`, `.portal-shell`, `.page-shell`, `.docs-shell` (3-col when `.docs-toc` present).
5. Theme board at `/workbench/theme/` (linked from `/workbench/`).
6. Foundation imported after `style.css` so quiet institutional chrome wins without rewriting pages.

**Exit criteria:** Theme tokens documented; primitives render consistently; no page IA changes in this phase. **Met — review board before Phase 2.**

---

### Phase 2 — Site chrome (header, footer, landmarks, a11y) ✅  
**Iteration goal:** react.dev-quality global chrome.

**Done**

1. Primary nav = 5 items (Archive → Sources); Home = brand only.
2. Header search → `/archive/?q=…#holdings` (EN/TA); holdings reads `q`.
3. Mobile nav dialog: focus trap, Escape, `aria-modal`, `aria-haspopup`.
4. Footer: institutional colophon + sitemap (Home + primary); kolam divider removed.
5. EN/TA layouts wrap `site-shell` + skip link + header/footer; `DocumentLang` kept.

**Exit criteria:** Chrome matches theme; keyboard path verified; EN/TA parity. **Met — review before Phase 3.**

---

### Phase 3 — Home redesign (EN + TA) ✅  
**Iteration goal:** Corporate-academic portal home, not wiki essay.

**Done**

1. Full-bleed portal hero: portrait plane + brand H1 + one lead + Archive/About CTAs (no hero citations).
2. Vital facts, three contribution links, curated featured holdings (`featuredHoldingSlugs`).
3. Single press quote; removed destination sitemap grid and essay dump.
4. EN + TA parity; portal styles in `app/theme/foundation.css`.

**Exit criteria:** Brand-first portal; curated holdings; EN/TA parity. **Met — review before Phase 4.**

---

### Phase 4 — Archive index (finding-aid UX) ✅

**Iteration goal:** Stanford/NYU-style clarity: holdings first, external elsewhere.

**Done**

1. Page intro updated with new `.page-hero` dark teal aesthetic, expanded to all section pages.
2. Holdings list refactored to use `.ui-interactive` primitives.
3. External libraries section styled as `.archive-explorer` to clearly separate it from internal holdings.
4. Removed cross-links to About/Timeline at bottom.
5. Consolidated CSS into `foundation.css`.

**Exit criteria:** User can open a holding in ≤2 clicks from Archive; external vs internal never confused. **Met — review before Phase 5.**

---

### Phase 5 — Document pages (true Learn layout) ✅

**Iteration goal:** Match react.dev/learn structure.

**Done**

1. Hardened left sidebar (`DocsSidebar`) and properly extracted document headings.
2. Implemented `OnThisPage` right sticky sidebar.
3. Created a 3-column `docs-shell` layout for Document pages.
4. Stopped for review.

**Exit criteria:** Orientation never lost; no wiki dumps; a11y pass on sidebar + pager. **Met.**

---

### Phase 6 — Section pages (About, Contributions, Timeline, Sources) ✅

**Iteration goal:** One job per page; institutional reading.

**Done**

1. Removed Wikipedia-style inline `.page-toc` from `about/page.jsx` and wrapped it in `section-with-toc`.
2. Removed Wikipedia-style `.archive-jump` links from `ArchiveExplorer`.
3. Added `<OnThisPage />` right sidebar to Section Pages.

**Exit criteria:** No page ends with a site map; EN locale hrefs correct; tone not encyclopaedia-wiki. **Met.**

---

### Phase 7 — QA, bilingual parity, polish

**Steps**

1. Visual QA checklist against theme board.
2. Keyboard + skip + focus + reduced-motion.
3. EN/TA string and layout parity.
4. Home first-viewport brand test.
5. Docs 3-column desktop / stacked mobile test.
6. Fix residual CSS graveyard (unused wiki classes).

**Exit criteria:** Ship-ready institutional archive UI.

---

## 4. Iteration protocol (mandatory)

1. Start phase → state phase number + exit criteria.
2. Implement **only** that phase.
3. Build + spot-check EN and TA.
4. Summarize what changed + what to review.
5. **Stop.** Wait for approval before next phase.

Estimated cadence (as requested): research done · plan done · **each phase ≈ one focused iteration**.

---

## 5. Explicitly deferred (do not sneak in)

- Full-text OCR readers
- IIIF viewer
- CMS migration
- Dark mode (unless requested)
- Rewriting research claims / sources

---

## 6. Next action

**Phase 4 complete.** Review `/en/archive/` and section page heroes.  
On approval, begin **Phase 5 only**: Document pages (true Learn layout).
