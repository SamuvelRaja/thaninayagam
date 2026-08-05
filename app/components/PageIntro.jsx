import { KolamDivider } from "./Ornaments";

export default function PageIntro({
  label,
  title,
  titleId,
  summary,
  children,
}) {
  return (
    <header className="page-intro">
      <span className="page-intro-script" lang="ta" aria-hidden="true">
        தமிழ்
      </span>
      <p className="section-label">{label}</p>
      <h1 id={titleId}>{title}</h1>
      {summary ? <p className="page-summary">{summary}</p> : null}
      {children}
      <KolamDivider className="page-intro-divider" />
    </header>
  );
}
