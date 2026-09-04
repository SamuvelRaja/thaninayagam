/** Previous / Next within one section — same pattern as react.dev learn pages. */
export default function DocsPager({ prev, next, lang = "en" }) {
  if (!prev && !next) return null;

  const copy =
    lang === "ta"
      ? { previous: "முந்தையது", next: "அடுத்தது" }
      : { previous: "Previous", next: "Next" };

  return (
    <nav
      className="docs-pager"
      aria-label={lang === "ta" ? "ஆவண வரிசை" : "Document sequence"}
    >
      {prev ? (
        <a className="docs-pager-link docs-pager-prev" href={prev.href} rel="prev">
          <span className="docs-pager-dir">{copy.previous}</span>
          <span className="docs-pager-title">{prev.title}</span>
        </a>
      ) : (
        <span className="docs-pager-link is-empty" aria-hidden="true" />
      )}
      {next ? (
        <a className="docs-pager-link docs-pager-next" href={next.href} rel="next">
          <span className="docs-pager-dir">{copy.next}</span>
          <span className="docs-pager-title">{next.title}</span>
        </a>
      ) : (
        <span className="docs-pager-link is-empty" aria-hidden="true" />
      )}
    </nav>
  );
}
