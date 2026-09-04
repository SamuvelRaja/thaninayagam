# Rev. Dr. Xavier S. Thani Nayagam Adigal — Digital Archive
### தனிநாயக அடிகள் எண்மிய ஆவணகம்

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Output](https://img.shields.io/badge/Output-Static%20Export%20(SSG)-blue?style=flat-square)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%20AAA%20Target-green?style=flat-square)](#accessibility--design-philosophy)
[![Bilingual](https://img.shields.io/badge/Language-Tamil%20%7C%20English-orange?style=flat-square)](#bilingual-parity)

A comprehensive, accessibility-first bilingual digital archive dedicated to the life, scholarship, global travels, and enduring legacy of **Rev. Dr. Xavier S. Thani Nayagam Adigal (1913–1980)** — reverently known as ***“Tamilttuthuvar”* (தமிழ்த் தூதுவர் / The Roving Ambassador of Tamil)**.

The archive is statically rendered with Next.js, engineered for elder decision-makers and international scholars, featuring high-contrast typography, zero cognitive clutter, restrained archival motifs (*Olaichuvadi*, *Kolam*), and full-text digitized books, monographs, and research articles.

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
* **Key Achievements**:
  * **Founder & Editor** of the premier quarterly journal ***Tamil Culture*** (1952–1966), the first global peer-reviewed bridge for classical Tamil studies.
  * **Co-founder of the IATR** (International Association for Tamil Research) in 1964 with Jean Filliozat, Kamil Zvelebil, V. I. Subramaniam, and T. Burrow.
  * **Chief Organizer** of the historic **1st International Conference Seminar of Tamil Studies (1966)** in Kuala Lumpur.
  * **Rediscoverer of 16th-Century Tamil Incunabula**:
    * *Cartilha* (Lisbon, 1554) — earliest printed work containing an Indian language.
    * *Thambiran Vanakkam* (Quilon, 1578) — first book printed in an Indian script using movable type.
    * *Antão de Proença’s Tamil-Portuguese Dictionary* (Ambalakad, 1679) — discovered in the Vatican Library.
  * **Global Academic Ambassador**: Delivered 200+ lectures across Europe, the Americas, Africa, and Asia establishing Tamil as an egalitarian classical world language.

---

## Key Features

- **🌐 Dual-Language Parity (Tamil & English)**: Complete native experience across both languages with dedicated localized metadata, typography, and content.
- **📖 Full-Text Document Reader**: In-browser reading interface for 30+ digitized books, collected papers, monographs, and essays with chapter navigation, reading progress, and anchor links.
- **🎋 Palm-Leaf (*Olaichuvadi*) Aesthetics**: Tactile parchment textures, manuscript cards, and Sangam-inspired design accents.
- **👁️ Elder & Scholar Accessible (WCAG AAA)**: Large readable type (minimum ~20px body measure), 7:1+ contrast ratios, visible persistent navigation (no hidden desktop hamburger menus), and zero motion gimmicks.
- **🗺️ Interactive Chronology**: Biographical timeline and itinerary tracing his academic journey from Jaffna to the world.
- **📚 Primary Source Ledger**: Direct bibliographic citations, verified catalog links to the Internet Archive, Open Library, and Tamil Digital Library.
- **🛠️ Maintainer Digitization Workbench**: Built-in tracking and automated conversion toolchain for OCR processing, markdown generation, and catalog curation.

---

## Site Architecture & Routes

| Section | Tamil Route (Default) | English Route | Description |
| :--- | :--- | :--- | :--- |
| **Home** | `/` | `/en/` | Hero overview, key achievements, collections & featured works |
| **Biography** | `/about/` | `/en/about/` | Full biographical dossier, academic pedigree & global mission |
| **Contributions** | `/contributions/` | `/en/contributions/` | Scholarly pillars, chronology, thematic analyses & publications |
| **Archive Explorer** | `/archive/` | `/en/archive/` | Searchable & filterable holdings catalog across 5 pillars |
| **Document Reader** | `/archive/documents/[slug]/` | `/en/archive/documents/[slug]/` | Full-text reader with dynamic TOC and archival metadata |
| **Timeline** | `/timeline/` | `/en/timeline/` | Chronological life journey and historical milestones |
| **Sponsors & Support** | `/sponsors/` | `/en/sponsors/` | Patron registry (உதவி), conservation support & contribution guidelines |
| **Sources Ledger** | `/sources/` | `/en/sources/` | Primary & secondary bibliography ledger with source badges |
| **Workbench** | `/workbench/` | `/workbench/` | Internal catalog digitisation progress monitor |

---

## Design Philosophy

The site keeps decoration in service of the archive itself — restrained accents drawn from Tamil archival tradition:

```
┌────────────────────┐    ┌────────────────────┐    ┌────────────────────┐
│   Pulli Kolam      │    │    Olaichuvadi     │    │     Thamizhi       │
│ Geometric Lattices │    │ Manuscript Cards & │    │ Epigraphic Glyphs  │
│ & Threshold Art    │    │ Parchment Surfaces │    │ & Bronze Seals     │
└────────────────────┘    └────────────────────┘    └────────────────────┘
```

* **Kolam (கோலம்)**: Symmetrical threshold art used as modular grid markers and framing motifs.
* **Olaichuvadi (ஓலைச்சுவடி)**: Rounded cards, bookmark ribbons, and warm parchment reader surfaces.
* **Thamizhi (தமிழி)**: Inscriptional glyphs reflecting 3rd-century BCE epigraphic heritage.
* **Cheppedu (செப்பேடு)**: Bronze-accented archival seals for primary sources and verifiable holdings.

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
