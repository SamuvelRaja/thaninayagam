export default function PageIntro({
  label,
  title,
  titleId,
  summary,
  children,
}) {
  const variant = titleId?.replace(/-title$/, "") || "default";

  return (
    <header className={`page-hero page-hero-${variant}`}>
      <div className="page-hero-inner">
        <p className="section-label">{label}</p>
        <h1 id={titleId}>{title}</h1>
        {summary ? <p className="page-hero-lead">{summary}</p> : null}
        {children}
      </div>
    </header>
  );
}
