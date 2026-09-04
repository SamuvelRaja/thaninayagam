# Digital Archive: Product Context & Information Architecture

---

## 1. Project Context

### 1.1 Subject & Historical Background
* **Subject**: Rev. Dr. Xavier S. Thani Nayagam Adigal (1913–1980)
* **Identity**: Priest, scholar, linguist, and global academic ambassador for classical Tamil studies.
* **Key Historical Facts**:
  * **1913–1980**: Born in Karampon, Jaffna; passed away in Jaffna.
  * **Academic Background**: D.D. from Urban University, Rome (1939); M.Litt. from Annamalai University (1947); faculty at University of Ceylon (1952–1961); Professor & Head of Indian Studies at University of Malaya (1961–1969); visiting professor at Sorbonne, Naples, and universities across the Americas and Asia.
  * **Major Contributions**:
    * Founded and edited the quarterly academic journal *Tamil Culture* (1952–1966).
    * Co-founded the International Association for Tamil Research (IATR) in New Delhi (1964).
    * Organized the 1st International Conference-Seminar of Tamil Studies in Kuala Lumpur (1966).
    * Rediscovered 16th-century early print works: *Cartilha* (Lisbon, 1554), *Thambiran Vanakkam* (Quilon, 1578), and *Antão de Proença’s Dictionary* (Ambalakad, 1679).
    * Delivered 200+ lectures across 25+ countries establishing Tamil as a classical world language.

### 1.2 Product Purpose & User Personas
* **Product**: A comprehensive, bilingual (English & Tamil) digital archive and full-text document reader.
* **Target Users**:
  1. **Academic Researchers & Historians**: Need structured metadata, primary source citations, chapter navigation, and facsimile access.
  2. **Students & General Readers**: Need clear biographical context, readable long-form texts, search, and intuitive navigation.
  3. **Bilingual Users**: Require full language parity across Tamil and English interfaces.

---

## 2. Information Architecture & Route Map

| Route (English) | Route (Tamil) | Page Type | Core Function |
| :--- | :--- | :--- | :--- |
| `/en/` | `/` | Home | Overview, key metrics, featured works, travel summary |
| `/en/about/` | `/about/` | Biography | Chronological life narrative, academic career, photos |
| `/en/contributions/` | `/contributions/` | Contributions | 5 scholarly pillars, selected publications |
| `/en/archive/` | `/archive/` | Catalog Explorer | Searchable & filterable directory of 30+ holdings |
| `/en/archive/documents/[slug]/` | `/archive/documents/[slug]/` | Document Reader | Full-text reading view with sidebar TOC & metadata |
| `/en/timeline/` | `/timeline/` | Timeline | Chronological milestone tracker (1913–1980) |
| `/en/sources/` | `/sources/` | Sources Ledger | Primary bibliographic citations table (S1–S40) |
| `/en/sponsors/` | `/sponsors/` | Sponsors | Support registry, preservation guidelines |

---

## 3. Structural Page Specifications

---

### 3.1 Global Header & Navigation
* **Brand Block**: Site Title ("Thani Nayagam Digital Archive") + Subtitle ("Digital Library & Research Archive").
* **Navigation Links**:
  * Home
  * Biography
  * Contributions
  * Archive Catalog
  * Timeline
  * Sources
  * Sponsors
* **Utility Controls**:
  * Global Search (`⌘K` shortcut trigger)
  * Language Switcher (`English` / `தமிழ்`)
  * Theme Toggle (`Light` / `Dark`)

---

### 3.2 Home Page
1. **Hero Section**:
   * Subject name, life dates (1913–1980), and primary title ("The Roving Ambassador of Tamil").
   * 2-sentence executive summary of historical significance.
   * Archival portrait image with caption (place and date).
   * Primary CTAs: `[ Browse Archive ]` and `[ Read Biography ]`.
2. **Impact Metrics Strip (4 Columns)**:
   * `200+` Global Lectures (Advocacy in 25+ countries)
   * `1964` IATR Co-Founder (International Association for Tamil Research)
   * `1578` Early Print Discoveries (*Thambiran Vanakkam* & 1554 *Cartilha*)
   * `14 Years` *Tamil Culture* Journal (1952–1966 quarterly editor)
3. **Categorized Holdings Overview**:
   * Display of core subject categories with quick links to browse relevant books.
4. **Featured Document Spotlight**:
   * Callout card for a seminal work (e.g., *Landscape and Poetry*) with cover, metadata, and direct `[ Read Full Text ]` link.
5. **Global Itinerary Summary**:
   * Visual route overview tracing major hubs: Karampon ➔ Rome ➔ Annamalai ➔ Ceylon ➔ Lisbon ➔ Malaya ➔ Paris ➔ Jaffna.

---

### 3.3 Biography Page (`/about/`)
1. **Sticky Chapter Navigation**:
   * Quick-jump sidebar linking to biographical phases:
     1. Early Life & Karampon (1913–1934)
     2. Rome & Divinity Studies (1934–1939)
     3. Annamalai & Tamil Awakening (1940–1947)
     4. University of Ceylon & *Tamil Culture* (1952–1961)
     5. University of Malaya & 1966 Conference (1961–1969)
     6. Global Lectures & Later Years (1969–1980)
2. **Content Area**:
   * Narrative text with section headings.
   * Fact callouts highlighting verified historical claims with source tags (e.g., `[S1]`, `[S8]`).
   * Documentary photograph plates with formal captions and archival citations.

---

### 3.4 Contributions Page (`/contributions/`)
1. **The 5 Scholarly Pillars**:
   * **Publishing**: *Tamil Culture* quarterly journal (12 volumes).
   * **Institution**: Co-founding the IATR in New Delhi (1964).
   * **Conferences**: Organizing the 1st International Conference of Tamil Studies (1966, KL).
   * **Reference & Bibliography**: *Reference Guide to Tamil Studies* (1966) and print heritage.
   * **Teaching & Lectures**: University chairs and worldwide lecture tours.
2. **Selected Bibliography**:
   * Formatted list of key monographs, essays, and published conference proceedings.

---

### 3.5 Archive Catalog Explorer (`/archive/`)
1. **Search & Filter Controls**:
   * Full-text search input (filters by title, author, topic, year).
   * **Category Filter (5 Domains)**:
     1. Tamil Literary Essays
     2. Tamil Culture & Heritage
     3. Tamil Research & Studies
     4. Philosophy & Thought
     5. Collected Works & Speeches
   * **Status Filter**: `All`, `Complete Text`, `Readable Scan`, `Controlled Lending`.
   * **View Switcher**: Grid View (Cards) / List View (Table).
2. **Document Card Structure**:
   * Category badge + Publication Year + Language.
   * Document Title (Large serif/sans heading).
   * Brief Abstract / Summary (2–3 lines).
   * Metadata chips: Format (Monograph / Journal Article / Proceedings), Page count, Source repository.
   * Actions: `[ Read Full Text ]` and `[ External Archive Link ↗ ]`.

---

### 3.6 Full-Text Document Reader (`/archive/documents/[slug]/`)
1. **Top Sticky Control Bar**:
   * Document Title & Current Chapter label.
   * Reading Progress Bar (0% to 100%).
   * Text Controls: Zoom `[ A- | 100% | A+ ]`, Line width toggle, Theme toggle `[ Light | Dark | Sepia ]`.
2. **Two-Column Reading Layout**:
   * **Left Sidebar (280px, Collapsible)**:
     * Bibliographic metadata card: Year, Publisher, Rights, Source ID.
     * Table of Contents (TOC) with active section highlight and click-to-scroll anchor links.
     * Download action: `[ Download Markdown / PDF ]`.
   * **Main Reading Canvas (Measure: 65–75 characters per line)**:
     * Chapter title and subtitle.
     * Formatted text: Paragraphs, blockquotes, verse extracts, drop caps.
     * Footnotes and citations: Clickable references opening inline popover cards.
     * Optional split-pane toggle: Side-by-side view with original high-resolution page scan.
3. **Bottom Navigation**:
   * Previous Chapter and Next Chapter pager buttons.

---

### 3.7 Timeline Page (`/timeline/`)
1. **Chronological Milestone Feed**:
   * Ordered sequence of historical events from 1913 to 1980.
   * Each event card contains:
     * Year and specific date (e.g., *16–23 April 1966*).
     * Location (e.g., *Kuala Lumpur, Malaysia*).
     * Event Title and Detailed Description.
     * Verified Source ID tag (e.g., `[S5]`).
     * Associated image or linked document.

---

### 3.8 Sources Ledger Page (`/sources/`)
1. **Bibliographic Reference Table**:
   * Columns:
     * `Source ID` (S1 to S40)
     * `Source Title & Institution` (with external URL)
     * `Type` (Primary proceedings, Government digital record, Journal scan, Newspaper)
     * `Confidence Level` (High / Medium-High / Single-source)
     * `Verified Claims` (Summary of facts validated by this source)

---

### 3.9 Sponsors & Support Page (`/sponsors/`)
1. **Preservation Overview**: Purpose of open-access digital archiving and perpetual hosting.
2. **Support Categories**: Institutional patrons, individual contributors, OCR volunteers.
3. **Transparent Contributor Registry**: Ledger of supporters and completed digitization projects.

---

### 3.10 Global Footer
* **Column 1**: Archive Overview & Mission Statement.
* **Column 2**: Navigation Sitemap.
* **Column 3**: External Archival Partners (*Internet Archive*, *Tamil Virtual Academy*, *Open Library*, *Anna Centenary Library*).
* **Column 4**: Accessibility Standards (WCAG Compliance), Copyright & Sourcing Disclaimer.

---

## 4. Responsive Layout Requirements

* **Desktop (1440px)**:
  * 12-column grid, 1280px max-width container, 24px gutters.
  * Multi-column bento grids, sticky sidebars on reading and bio pages.
* **Tablet (768px)**:
  * 8-column grid, collapsible sidebars into off-canvas drawers.
* **Mobile (375px)**:
  * 4-column single-stack layout.
  * Sticky bottom bar on Document Reader with quick access to Table of Contents drawer and text size controls.
  * Horizontal swipeable chips for category filters.
