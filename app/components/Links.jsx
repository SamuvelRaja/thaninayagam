export function Citation() {
  return null;
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
