export function Citation({ ids = [], lang = "ta" }) {
  if (!ids.length) return null;
  const prefix = lang === "en" ? "/en" : "";
  const first = ids[0];
  const href = `${prefix}/sources/#source-${first}`;
  const label = lang === "en" ? "Source" : "மூலச்சான்று";
  const ariaLabel =
    lang === "en"
      ? `View source ${ids.join(", ")} in the bibliography`
      : `மூலங்கள் ${ids.join(", ")} ஐ நூற்பட்டியலில் காண்க`;

  return (
    <a className="citation" href={href} aria-label={ariaLabel}>
      <span>{label}</span>
      {ids.length > 1 ? (
        <span className="citation-ids" aria-hidden="true">
          {" "}
          {ids.join(", ")}
        </span>
      ) : (
        <span className="citation-ids" aria-hidden="true">
          {" "}
          {first}
        </span>
      )}
    </a>
  );
}

export function ExternalLink({ href, children, className, lang = "en" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="visually-hidden">
        {lang === "ta" ? " (புதிய தாவலில் திறக்கும்)" : " (opens in a new tab)"}
      </span>
      <span className="external-mark" aria-hidden="true">
        &nbsp;↗
      </span>
    </a>
  );
}
