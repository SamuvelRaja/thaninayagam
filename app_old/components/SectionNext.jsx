/** Single forward CTA at end of a section page — not a site-wide see-also list. */
export default function SectionNext({ href, label, title, lang = "en" }) {
  const dir = lang === "ta" ? "அடுத்து" : "Next";

  return (
    <nav
      className="section-next"
      aria-label={lang === "ta" ? "அடுத்த பகுதி" : "Next section"}
    >
      <a className="docs-pager-link docs-pager-next" href={href} rel="next">
        <span className="docs-pager-dir">
          {dir}
          {label ? ` · ${label}` : ""}
        </span>
        <span className="docs-pager-title">{title}</span>
      </a>
    </nav>
  );
}
