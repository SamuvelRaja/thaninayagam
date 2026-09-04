import { getConversionProgress } from "@/app/lib/documents";
import { archivePillars, statusLabel } from "@/app/lib/archiveMeta";

export const metadata = {
  title: "Archive workbench (temporary)",
  robots: { index: false, follow: false },
};

export default function WorkbenchPage() {
  const progress = getConversionProgress("en");

  return (
    <main id="main">
      <div className="content-section page-shell workbench-page">
        <header className="page-intro">
          <p className="section-label">Temporary · not in main nav</p>
          <h1 id="workbench-title">Archive conversion status</h1>
          <p>
            Live snapshot of PDF / OCR → markdown book progress. Public archive
            pages show only the books; this page is for build tracking.
          </p>
          <p>
            <a className="button button-secondary" href="/en/archive/">
              Open archive
            </a>{" "}
            <a className="button button-secondary" href="/workbench/theme/">
              Theme board
            </a>
          </p>
        </header>

        <section
          className="workbench-progress"
          aria-labelledby="progress-title"
        >
          <h2 id="progress-title">Overall progress</h2>
          <p className="workbench-progress-summary">
            <strong>
              {progress.withMarkdown} / {progress.total}
            </strong>{" "}
            catalogue titles have on-site markdown books ({progress.percent}%).
            Unique book files: <strong>{progress.uniqueBooks}</strong>.
          </p>
          <div
            className="workbench-progress-bar"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress.percent}
            aria-label="Markdown book conversion progress"
          >
            <span style={{ width: `${progress.percent}%` }} />
          </div>
          <ul className="workbench-stats">
            <li>
              <strong>{progress.pdfConverted}</strong> PDF→md
            </li>
            <li>
              <strong>{progress.ocrConverted}</strong> OCR→md
            </li>
            <li>
              <strong>{progress.excerpts}</strong> repaired excerpts / eng-OCR
            </li>
            <li>
              <strong>{progress.iaLinkOnly}</strong> lending / link only
            </li>
            <li>
              <strong>{progress.noDigitisation}</strong> no public scan
            </li>
          </ul>
        </section>

        <section aria-labelledby="phases-title">
          <h2 id="phases-title">Phase checklist</h2>
          <ol className="workbench-phases">
            <li className="is-done">
              Content model, archive reader, no IA embeds on document pages
            </li>
            <li className="is-done">
              Markdown books in <code>content/books/</code> via{" "}
              <code>bookMd</code>
            </li>
            <li className="is-done">
              PDF→md pipeline (<code>npm run archive:pdf</code>) for speeches,
              tamilttutu, nature, 1966 proceedings
            </li>
            <li className="is-done">
              Repair pass: Culture article slices; eng Tesseract front matter for
              Collected Papers / Nature / Landscape; lending titles no longer
              marked Readable (<code>npm run archive:repair</code>)
            </li>
            <li className="is-done">
              Nature monograph line fully eng-OCR’d; Landscape / Nature Poetry
              share that readable text
            </li>
            <li className="is-done">
              Full eng OCR: Nature in Ancient Tamil Poetry (local PDF → Tesseract)
            </li>
            <li className="is-done">
              Collected Papers rebuilt from Culture essays + IITS front matter
            </li>
            <li className="is-done">
              All on-site holdings marked Readable (
              <code>npm run archive:complete-partials</code>) — companions use
              Culture / Speeches / Tiruvalluvar / 1953 Nature OCR where edition
              scans are missing
            </li>
            <li className="is-done">
              Markdown articles cleaned with Contents indexes; scan-page noise
              removed from sidebar TOC (
              <code>npm run archive:cleanup-toc</code>)
            </li>
            <li className="is-done">
              Lending-only titles moved to archive “Unavailable external
              sources” list (Carthaginian Clergy, Reference Guide, Tamil Studies
              Abroad) — not on-site holdings
            </li>
            <li className="is-done">
              Classical literature stubs upgraded to Culture-excerpt / companion
              markdown articles (education, humanism, Nature Poetry, Kural note)
            </li>
            <li className="is-done">
              Cleaned Culture essays with restored headings: Indian Thought &amp;
              Roman Stoicism; Educational Thoughts (3 essays); Ethical
              Interpretation; humanism companion pages
            </li>
            <li className="is-blocked">
              Full monograph scans still missing for Humanism / Nature Poetry
              1963 / உலக ஒழுக்கவியலில் திருக்குறள்
            </li>
            <li>Next: search-in-docs; better English OCR for bad TDL layers</li>
          </ol>
        </section>

        <section aria-labelledby="docs-title">
          <h2 id="docs-title">Per-document status</h2>
          <table className="workbench-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Document</th>
                <th>Status</th>
                <th>Pipeline</th>
                <th>Book size</th>
                <th>Page</th>
              </tr>
            </thead>
            <tbody>
              {progress.rows.map((row) => (
                <tr
                  key={row.slug}
                  className={
                    row.hasMarkdownBook
                      ? "is-ready"
                      : row.pipeline === "IA link only"
                        ? "is-blocked"
                        : "is-stub"
                  }
                >
                  <td>{row.year || "—"}</td>
                  <td>
                    {row.title}
                    {row.bookMd ? (
                      <>
                        <br />
                        <code className="workbench-book-id">
                          content/books/{row.bookMd}.md
                        </code>
                      </>
                    ) : null}
                  </td>
                  <td>{statusLabel(row.status, "en")}</td>
                  <td>
                    <span className={`workbench-pill pipeline-${row.pipeline.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
                      {row.pipeline}
                    </span>
                  </td>
                  <td>{row.charsLabel}</td>
                  <td>
                    <a href={row.href}>Open</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section aria-labelledby="coverage-title">
          <h2 id="coverage-title">Main works coverage</h2>
          <p>
            Checked against Open Library author OL3928A, the site publications
            list, and Tamil Wikipedia title mentions.
          </p>
          <ul className="workbench-phases">
            <li className="is-done">
              On-site holdings for Nature…, Landscape…, Ore Ulakam, Tiruvalluvar,
              Tamilttutu, Tamil Culture &amp; Civilization, Tamil Humanism,
              Collected Papers, Speeches, Research in Tamil Studies, Nature
              Poetry in Tamil, Complete Works, Culture journal essays
            </li>
            <li className="is-done">
              Journal &amp; conference: Tamil Culture vols 1–12 (single holding);
              1966 proceedings
            </li>
            <li className="is-done">
              Related memorial volume: Tamilāram (about him, not by him)
            </li>
            <li className="is-done">
              Unavailable external sources (last on archive page): Carthaginian
              Clergy, Reference Guide, Tamil Studies Abroad — IA controlled
              lending links only
            </li>
          </ul>
        </section>

        <section aria-labelledby="pillars-title">
          <h2 id="pillars-title">Pillars</h2>
          <ul>
            {archivePillars.map((pillar) => {
              const count = progress.rows.filter(
                (d) => d.pillar === pillar.id,
              ).length;
              const ready = progress.rows.filter(
                (d) => d.pillar === pillar.id && d.hasMarkdownBook,
              ).length;
              return (
                <li key={pillar.id}>
                  <strong>{pillar.en.title}</strong> — {ready}/{count} with
                  markdown
                </li>
              );
            })}
          </ul>
        </section>

        <p className="workbench-foot">
          Commands: <code>npm run archive:pdf</code> ·{" "}
          <code>npm run archive:books</code> ·{" "}
          <code>npm run archive:scaffold -- &lt;slug&gt;</code>
        </p>
      </div>
    </main>
  );
}
