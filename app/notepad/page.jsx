import { KolamCorners } from "@/app/components/Ornaments";

export const metadata = {
  title: "Kolam Border Lab",
  robots: { index: false, follow: false },
};

function DummyCard({ eyebrow, title, children, className = "" }) {
  return (
    <article className={`notepad-dummy-card kolam-frame ${className}`.trim()}>
      <KolamCorners />
      <p className="notepad-card-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <div className="notepad-card-copy">{children}</div>
    </article>
  );
}

export default function NotepadPage() {
  return (
    <main id="main" className="notepad-page">
      <div className="notepad-container">
        <header className="notepad-header">
          <p className="section-label">Private visual test bench</p>
          <h1>Continuous-line kolam border</h1>
          <p className="notepad-subtitle">
            The supplied SVG is the only geometry source. The production frame
            extracts one corner from that path and rotates it without adding
            dots, diamonds, petals, or alternative curls.
          </p>
        </header>

        <section className="notepad-section" aria-labelledby="source-title">
          <div className="notepad-section-heading">
            <p>01</p>
            <h2 id="source-title">Supplied source</h2>
          </div>
          <div className="notepad-source-comparison">
            <figure className="notepad-source-figure">
              <img
                src="/kolam-border.svg"
                alt="Supplied continuous-line kolam with four outward rounded loops"
                width="360"
                height="400"
              />
              <figcaption>Original SVG, unchanged</figcaption>
            </figure>
            <div>
              <p className="notepad-card-eyebrow">Production extraction</p>
              <h3>One source-derived corner outside the panel</h3>
              <p className="notepad-source-note">
                The horizontal stroke enters a rounded loop, crosses its
                returning vertical stroke, and continues beyond the panel
                edge. The content box stays completely inside the kolam.
              </p>
              <div className="notepad-source-stage kolam-frame">
                <KolamCorners />
              </div>
            </div>
          </div>
        </section>

        <section className="notepad-section" aria-labelledby="cards-title">
          <div className="notepad-section-heading">
            <p>02</p>
            <h2 id="cards-title">Production-scale card studies</h2>
          </div>
          <div className="notepad-card-grid notepad-card-grid-source">
            <DummyCard eyebrow="Navigation surface" title="Short text card">
              <p>
                The straight rule clears the panel edge and every loop opens
                into the surrounding paper.
              </p>
            </DummyCard>

            <DummyCard
              eyebrow="Document surface"
              title="Image card"
              className="notepad-dummy-card-tall"
            >
              <div className="notepad-image-placeholder" aria-hidden="true">
                <span>archival image</span>
              </div>
            </DummyCard>

            <DummyCard eyebrow="Reference surface" title="Quotation card">
              <blockquote>
                “One continuous path is enough; its rhythm comes from the four
                outward loops.”
              </blockquote>
            </DummyCard>
          </div>
        </section>

        <section className="notepad-section" aria-labelledby="wide-title">
          <div className="notepad-section-heading">
            <p>03</p>
            <h2 id="wide-title">Wide proportion</h2>
          </div>
          <DummyCard
            eyebrow="Wide archive index"
            title="The same border on a horizontal surface"
            className="notepad-dummy-card-wide"
          >
            <p>
              Only the exterior straight runs become longer; the supplied loop
              geometry and its distance from the content remain unchanged.
            </p>
          </DummyCard>
        </section>
      </div>
    </main>
  );
}
