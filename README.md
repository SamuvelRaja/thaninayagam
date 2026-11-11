# Rev. Dr. Xavier S. Thani Nayagam Adigal — Digital Archive
### தனிநாயக அடிகள் ஆவணகம்

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Output](https://img.shields.io/badge/Output-Static%20Export%20(SSG)-blue?style=flat-square)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%20AAA%20Target-green?style=flat-square)](#accessibility--design-philosophy)
[![Bilingual](https://img.shields.io/badge/Language-Tamil%20%7C%20English-orange?style=flat-square)](#bilingual-parity)

A comprehensive, accessibility-first bilingual digital archive dedicated to the life, scholarship, global travels, and enduring legacy of **Rev. Dr. Xavier S. Thani Nayagam Adigal (1913–1980)** — reverently known as ***“Tamilttuthuvar”* (தமிழ்த் தூதுவர் / The Roving Ambassador of Tamil)**.

The archive is statically rendered with Next.js and uses **Living Archive 02**, selected from `codexgpt6.1soldesign/design-02/`: an ivory canvas, oxblood subject navigation, spacious sans-serif typography, and an offset portrait frame. Both languages share the design, with a searchable homepage collection and document readers. The earlier design was restored at the owner’s request on 8 October 2026; biography-based factual corrections and edition qualifications remain in place.

The catalogue and reader distinguish **reading texts, related reading, and catalogue guides**, and show the hosted text’s language separately from the interface language. An English interface does not imply an English translation. See [the research audit](workbench/research/BIOGRAPHY-FACT-CHECK.md) and [the design plan](workbench/BIOGRAPHY-WEBSITE-PLAN.md).

---

## Table of Contents

- [About Thani Nayagam Adigal](#about-thani-nayagam-adigal)
- [Key Features](#key-features)
- [Site Architecture & Routes](#site-architecture--routes)
- [Cultural DNA & Design Philosophy](#cultural-dna--design-philosophy)
- [Technology Stack](#technology-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Archive Tooling & Digitization Scripts](#archive-tooling--digitization-scripts)
- [Accessibility Guidelines](#accessibility-guidelines)
- [License & Sourcing](#license--sourcing)

---

## About Thani Nayagam Adigal

* **Life**: 2 August 1913 (Kayts, Jaffna, Sri Lanka) – 1 September 1980 (Jaffna)
* **Title**: *Tamilttuthuvar* (தமிழ்த் தூதுவர்) — The Roving Ambassador of Tamil
* **Selected work**:
  * Founded and edited *Tamil Culture* from 1952; the biography records publication gaps within its 1952–1966 span.
  * Helped establish the International Association for Tamil Research in January 1964.
  * Served as Deputy Chairman of the organizing committee for the first international Tamil research conference in Kuala Lumpur in 1966; its proceedings appeared in 1968.
  * Studied early Tamil printed books, grammars and dictionaries, including the 1679 Tamil–Portuguese dictionary of Antão de Proença.
  * Compared Tamil literature and ethics with other classical traditions and carried Tamil scholarship to readers abroad.

Edition dates and source conflicts are qualified in individual catalogue records; the source ledger records the evidence.

---

## Key Features

- **🌐 Dual-Language Parity (Tamil & English)**: Complete native experience across both languages with dedicated localized metadata, typography, and content.
- **📖 Full-Text Document Reader**: In-browser reading interface for the collection’s available texts, related essays, and catalogue guides with chapter navigation, reading progress, and anchor links.
- **Living Archive 02 design**: Five subject links, searchable document cards, a scholarly achievements band, and a life timeline in a consistent ivory and oxblood palette.
- **Accessible Navigation & Reading Controls**: Keyboard-operated navigation, a mobile menu, visible focus states, reduced-motion support, and adjustable reader text size and themes.
- **🗺️ Interactive Chronology**: Biographical timeline and itinerary tracing his academic journey from Jaffna to the world.
- **📚 Primary Source Ledger**: Direct bibliographic citations, verified catalog links to the Internet Archive, Open Library, and Tamil Digital Library.
- **🛠️ Maintainer Digitization Workbench**: Built-in tracking and automated conversion toolchain for OCR processing, markdown generation, and catalog curation.

---

## Site Architecture & Routes

| Section | Tamil Route (Default) | English Route | Description |
| :--- | :--- | :--- | :--- |
| **Home** | `/` | `/en/` | Hero overview, collections, searchable featured works and life journey |
| **Biography** | `/about/` | `/en/about/` | Biographical sections, reference facts and the life timeline |
| **Contributions** | `/contributions/` | `/en/contributions/` | Scholarly pillars, archival plates and publication register |
| **Archive Explorer** | `/archive/` | `/en/archive/` | Searchable & filterable holdings catalog across 5 pillars |
| **Document Reader** | `/archive/documents/[slug]/` | `/en/archive/documents/[slug]/` | Full-text reader with dynamic TOC and archival metadata |
| **Timeline** | `/timeline/` | `/en/timeline/` | Chronological life journey and historical milestones |
| **Sponsors & Support** | `/sponsors/` | `/en/sponsors/` | Patron registry (உதவி), conservation support & contribution guidelines |
| **Sources Ledger** | `/sources/` | `/en/sources/` | Primary & secondary bibliography ledger with source badges |
| **Workbench** | `/workbench/` | `/workbench/` | Internal catalog digitisation progress monitor |

---

## Design Philosophy

Living Archive 02 keeps the archive open and easy to explore. Its shared palette uses ivory (`#F8F7F3`), oxblood (`#902C35`), charcoal (`#252522`), and white document surfaces. Noto Sans Tamil supplies the bilingual interface typography; the document reader retains serif text, size controls, and light, sepia, and dark preferences.

The active styles are `assets/css/living-archive.css` for the homepage and tokens, `living-layout.css` for shared navigation and page headers, and `living-pages.css` for interior pages. The original HTML design gallery remains available in `codexgpt6.1soldesign/`.

---

## Technology Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Static HTML Export `output: 'export'`)
* **UI & Components**: [React 19](https://react.dev/)
* **Styling**: Handcrafted Vanilla CSS Design System with responsive CSS custom properties, zero bloated utility frameworks
* **Content Engine**: [Gray-Matter](https://github.com/jonschlinkert/gray-matter) (Frontmatter) & [Marked](https://github.com/markedjs/marked) (Markdown to HTML parser)
* **Fonts**: Google Fonts (*Noto Serif Tamil*, *Anek Tamil*, *EB Garamond*, *Playfair Display*, *Inter*)
* **Serving**: Statically served via Nginx, GitHub Pages, Cloudflare Pages, or `serve`

---

## Repository Structure

```text
thaninayagam/
├── app/
│   ├── (ta)/                 # Tamil locale routes (Home, About, Contributions, Archive, Sources, Sponsors)
│   │   └── archive/documents/ [slug]/page.jsx  # Tamil Document Reader
│   ├── en/                   # English locale routes
│   │   └── archive/documents/ [slug]/page.jsx  # English Document Reader
│   ├── components/           # Reusable UI widgets (Header, Footer, DocumentReader, Breadcrumbs, etc.)
│   ├── lib/                  # Data stores, document parser, taxonomy & bibliographic metadata
│   │   ├── data.js           # English archival dataset & timeline events
│   │   ├── data.ta.js        # Tamil archival dataset & localized timeline
│   │   ├── documents.js      # Markdown document loader & HTML renderer
│   │   └── archiveMeta.js    # Categorization taxonomy & pillar definitions
│   ├── theme/                # Global CSS tokens & theme styling
│   ├── layout.jsx            # Root HTML layout with Google Font links
│   └── workbench/            # Maintainer conversion status dashboard
├── content/
│   ├── books/                # Full OCR-processed markdown volumes and monographs (30+ books)
│   └── documents/
│       ├── en/               # English document frontmatter wrappers
│       └── ta/               # Tamil document frontmatter wrappers
├── public/                   # Static assets, portraits, documentary photographs & icons
├── scripts/                  # Automated OCR processing and archive maintenance pipeline
├── next.config.mjs           # Next.js static export configuration
├── style.css                 # Master design system stylesheet
├── package.json              # Project dependencies and script runner
└── README.md                 # Project documentation
```

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
* `npm` or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/thaninayagam.git
cd thaninayagam

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for Tamil (default) or [http://localhost:3000/en/](http://localhost:3000/en/) for English.  
The maintainer workbench is available at [http://localhost:3000/workbench/](http://localhost:3000/workbench/).

### Building for Production (Static Export)

```bash
# Build the static site into the out/ directory
npm run build

# Preview the static build locally
npm run preview
```

The output in `out/` is ready for direct deployment to GitHub Pages, Netlify, Vercel, Cloudflare Pages, AWS S3, or any static web server.

---

## Archive Tooling & Digitization Scripts

The repository includes a suite of Node.js scripts in `scripts/` for processing archival texts from Internet Archive (IA) and PDF sources into clean markdown:

| Command | Script | Purpose |
| :--- | :--- | :--- |
| `npm run archive:scaffold` | `convert-holding.mjs` | Scaffolds document frontmatter templates for holdings |
| `npm run archive:import` | `import-ia-books.mjs` | Imports and caches text dumps from Internet Archive items |
| `npm run archive:books` | `ocr-to-markdown-books.mjs` | Cleans raw OCR and structures books into readable Markdown |
| `npm run archive:pdf` | `pdf-to-markdown.mjs` | Converts PDF source scans to structured Markdown |
| `npm run archive:repair` | `repair-conversion.mjs` | Repairs formatting anomalies, footnotes, and heading levels |
| `npm run archive:classical` | `slice-classical-articles.mjs` | Slices multi-volume compilations into distinct articles |
| `npm run archive:clean-culture` | `clean-culture-articles.mjs` | Normalizes *Tamil Culture* journal article transcriptions |
| `npm run archive:ensure-md` | `ensure-missing-book-md.mjs` | Audits catalog consistency and creates placeholder manifests |
| `npm run archive:ocr-pdf` | `ocr-pdf-eng.mjs` | Tesseract English OCR pipeline for PDF documents |
| `npm run archive:fill` | `fill-available-texts.mjs` | Fills partial texts with high-confidence transcriptions |
| `npm run archive:collected-papers` | `rebuild-collected-papers.mjs` | Reconstructs bound conference proceedings & collected works |
| `npm run archive:cleanup-toc` | `cleanup-book-toc.mjs` | Harmonizes Table of Contents headings and anchor IDs |

---

## Accessibility Guidelines

This project strictly adheres to accessibility-first design principles for senior scholars and readers:

1. **Semantic Hierarchy**: Single `<h1>` per page, followed by strict heading nesting (`<h2>` → `<h3>`).
2. **Accessible Contrast**: High contrast colors exceeding WCAG AAA standards (7:1+ ratio for primary text).
3. **No Cognitive Distractions**: No auto-playing media, no parallax scrolling, no animated overlays, and no 3D canvas rendering.
4. **Permanent Navigation**: Always-visible navigation bar with active state markers (`aria-current="page"`).
5. **Legibility**: Reading font scale set to ~20px with generous line spacing (`1.7`) and comfortable reading line length (`65–75ch`).
6. **Focus & Motion**: Visible focus rings on all interactive elements and complete compliance with `prefers-reduced-motion`.

---

## License & Sourcing

* **Original Scholarship**: The writings, speeches, and editorial works of Rev. Dr. Xavier S. Thani Nayagam Adigal are archived here for historical research, academic study, and preservation.
* **Digitized Texts**: Sourced from the public domain, University of Malaya Library, Vatican Library, Tamil Digital Library, Internet Archive, and institutional repositories.
* **Code & Design**: Open-source and curated for the global Tamil community and academic researchers worldwide.
