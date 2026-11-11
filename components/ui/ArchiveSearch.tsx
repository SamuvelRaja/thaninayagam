import Link from "next/link";

export function ArchiveSearch({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  const archive = `${ta ? "" : "/en"}/archive/`;
  return (
    <div className="home-archive-search">
      <form action={archive} role="search" className="home-search-form">
        <label htmlFor="home-search">{ta ? "ஆவணகத்தில் தேடுக" : "Search the archive"}</label>
        <div className="home-search-control">
          <svg className="home-search-icon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
          <input id="home-search" name="q" type="search" placeholder={ta ? "நூல், ஆய்வுக் கட்டுரை, ஆண்டு…" : "Title, research essay, year…"} />
          <button type="submit" aria-label={ta ? "ஆவணகத்தில் தேடுக" : "Search the archive"}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg></button>
        </div>
      </form>
      <p className="search-suggestions">{ta ? "தொடங்குவதற்கு:" : "Try:"}{["Tamil Culture", "1966", "Tirukkural"].map((term) => <Link key={term} href={`${archive}?q=${encodeURIComponent(term)}`}>{term}</Link>)}</p>
    </div>
  );
}
