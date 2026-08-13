export const metadata = {
  title: "Theme board (Phase 1)",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "Paper", token: "--paper", value: "#f3f5f7" },
  { name: "Surface", token: "--surface", value: "#ffffff" },
  { name: "Ink", token: "--ink", value: "#15202b" },
  { name: "Muted", token: "--muted", value: "#4a5966" },
  { name: "Accent", token: "--accent", value: "#1a4d63" },
  { name: "Accent dark", token: "--accent-dark", value: "#0f3344" },
  { name: "Accent soft", token: "--accent-soft", value: "#e4eef2" },
  { name: "Brass", token: "--gold", value: "#8a6a2f" },
  { name: "Border", token: "--border", value: "#c5ced6" },
  { name: "Focus", token: "--focus", value: "#15607f" },
];

export default function ThemeBoardPage() {
  return (
    <main id="main">
      <div className="content-section page-shell">
        <header className="page-intro">
          <p className="section-label">Workbench · Phase 1</p>
          <h1 id="theme-board-title">Theme board</h1>
          <p className="page-summary">
            Corporate-academic foundation only. Approve this board before Phase
            2 (chrome) or Phase 3 (home redesign).
          </p>
        </header>

        <div className="theme-board">
          <section aria-labelledby="colors-title">
            <h2 id="colors-title">Color tokens</h2>
            <ul className="theme-swatches">
              {swatches.map((swatch) => (
                <li key={swatch.token} className="theme-swatch">
                  <span
                    className="theme-swatch-chip"
                    style={{ background: swatch.value }}
                    aria-hidden="true"
                  />
                  <strong>{swatch.name}</strong>
                  <code>{swatch.token}</code>
                  <code>{swatch.value}</code>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="type-title">
            <h2 id="type-title">Typography</h2>
            <div className="theme-type-sample ui-panel">
              <p className="section-label">Section label</p>
              <p className="display">Display / page title</p>
              <h3 style={{ margin: 0 }}>Section heading</h3>
              <p className="ui">
                Body UI uses Atkinson Hyperlegible at 1.25rem for older readers.
                Display titles use Fraunces. Tamil uses Noto Serif Tamil.
              </p>
              <p className="ui" lang="ta">
                தனிநாயகம் அடிகளார் ஆவணகம் — தமிழ் அடுக்கு மாதிரி.
              </p>
            </div>
          </section>

          <section aria-labelledby="buttons-title">
            <h2 id="buttons-title">Buttons</h2>
            <div className="theme-row">
              <a className="button button-primary" href="#theme-board-title">
                Primary action
              </a>
              <a className="button button-secondary" href="#theme-board-title">
                Secondary action
              </a>
            </div>
          </section>

          <section aria-labelledby="interactive-title">
            <h2 id="interactive-title">Interactive surface</h2>
            <p>
              Cards only when the whole block is a control — not for static
              biography prose.
            </p>
            <a className="ui-interactive" href="#theme-board-title">
              <span className="section-label">Archive</span>
              <strong style={{ display: "block", fontFamily: "var(--serif)" }}>
                Writings and documents
              </strong>
              <span style={{ color: "var(--muted)" }}>
                Example destination tile for later home/portal use.
              </span>
            </a>
          </section>

          <section aria-labelledby="shells-title">
            <h2 id="shells-title">Layout shells</h2>
            <p>
              Docs shell is three columns when a right TOC is present (Learn
              pattern). Without TOC it collapses to sidebar + article.
            </p>
            <div
              className="theme-shell-demo"
              aria-label="Docs shell diagram"
            >
              <span>Sidebar</span>
              <span>Article</span>
              <span>On this page</span>
            </div>
            <hr className="ui-rule" />
            <p className="ui" style={{ color: "var(--muted)", margin: 0 }}>
              Also defined: <code>.site-shell</code>,{" "}
              <code>.portal-shell</code>, <code>.page-shell</code>,{" "}
              <code>.content-section</code>.
            </p>
          </section>

          <section aria-labelledby="notes-title">
            <h2 id="notes-title">Phase 1 notes</h2>
            <ul>
              <li>No home or archive page redesign in this phase.</li>
              <li>
                Foundation CSS loads after legacy <code>style.css</code> so
                quiet institutional chrome wins.
              </li>
              <li>
                Next iteration is Phase 2: header / footer / landmarks only.
              </li>
            </ul>
            <p>
              <a href="/workbench/">← Back to workbench</a>
              {" · "}
              <a href="/en/">Open public English home</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
