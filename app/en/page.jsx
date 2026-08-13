import { Citation } from "@/app/components/Links";
import { archiveTaxonomy, taxonomyFor, taxonomyLabel } from "@/app/lib/archiveMeta";
import {
  featuredHoldingSlugs,
  homeArchivePaths,
  homeFacts,
  homeMilestones,
} from "@/app/lib/data";
import { getDocuments } from "@/app/lib/documents";

export const metadata = {
  title: {
    absolute: "Thani Nayagam Digital Archive",
  },
  description:
    "A research archive for Rev. Dr. Xavier S. Thani Nayagam Adigal (1913–1980): writings, documents, and sourced biography.",
};

export default function HomePage() {
  const documents = getDocuments("en");
  const bySlug = new Map(documents.map((doc) => [doc.slug, doc]));
  const featured = featuredHoldingSlugs
    .map((slug) => bySlug.get(slug))
    .filter(Boolean);
  const readableCount = documents.filter((doc) => doc.status === "readable").length;

  const collections = archiveTaxonomy.map((category) => {
    const count = documents.filter(
      (doc) => taxonomyFor(doc).categoryId === category.id,
    ).length;
    return {
      id: category.id,
      label: category.en.label,
      hint: category.en.hint,
      count,
    };
  });

  const startPaths = homeArchivePaths
    .map((path) => {
      const doc = bySlug.get(path.slug);
      if (!doc) return null;
      return { ...path, doc };
    })
    .filter(Boolean);

  return (
    <main id="main" className="portal-home">
      <section className="portal-hero" aria-labelledby="hero-title">
        <div className="portal-hero-media" aria-hidden="true">
          <img src="/tna.webp" alt="" width="1024" height="1295" />
        </div>
        <div className="portal-hero-panel">
          <p className="section-label">Digital archive</p>
          <h1 id="hero-title">Thani Nayagam Adigal</h1>
          <p className="portal-hero-meta">1913–1980</p>
          <p className="portal-hero-lead">
            Priest, linguist, and editor who carried Tamil studies into an
            international academic conversation through <cite>Tamil Culture</cite>,
            the International Association for Tamil Research, and the 1966
            Kuala Lumpur conference.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/en/archive/">
              Browse the archive
            </a>
            <a className="button button-secondary" href="/en/about/">
              Biography
            </a>
          </div>
        </div>
      </section>

      <section className="portal-section" aria-labelledby="vital-facts-title">
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">Vital record</p>
            <h2 id="vital-facts-title">Key facts</h2>
          </header>
          <dl className="portal-facts">
            {homeFacts.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="portal-section portal-section-alt"
        aria-labelledby="archive-collections-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">Archive</p>
            <h2 id="archive-collections-title">Browse by collection</h2>
            <p>
              Currently {documents.length} works on this site
              {readableCount ? `, ${readableCount} ready to read` : ""}. Open a
              collection, or go straight to the full register.
            </p>
            <p className="archive-growing-note">
              This is not a final count or a complete list of Thani Nayagam
              Adigal’s work. We are continuously searching, verifying, and adding
              texts as we find them.
            </p>
          </header>
          <ul className="portal-collections">
            {collections.map((collection) => (
              <li key={collection.id}>
                <a
                  href={`/en/archive/?category=${collection.id}#holdings`}
                >
                  <span className="portal-collections-count">
                    {collection.count}
                  </span>
                  <strong>{collection.label}</strong>
                  <span>{collection.hint}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="section-action">
            <a className="button button-primary" href="/en/archive/#holdings">
              Open all holdings
            </a>
            <a className="button button-secondary" href="/en/archive/#catalogue-title">
              External libraries
            </a>
          </p>
        </div>
      </section>

      <section
        className="portal-section"
        aria-labelledby="start-reading-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">Start reading</p>
            <h2 id="start-reading-title">Three ways into the archive</h2>
            <p>
              Begin with a classical monograph, a short cleaned journal essay, or
              the English collected papers—each ready to read on this site.
            </p>
          </header>
          <ul className="portal-paths">
            {startPaths.map((path) => (
              <li key={path.slug}>
                <a href={`/en/archive/documents/${path.slug}/`}>
                  <span className="section-label">{path.labelEn}</span>
                  <strong>{path.titleEn}</strong>
                  <span>{path.blurbEn}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="portal-section portal-section-alt"
        aria-labelledby="holdings-preview-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">Featured holdings</p>
            <h2 id="holdings-preview-title">Documents to open first</h2>
            <p>
              Readable holdings first: classical study, journal essays, Tamil
              collections, and the 1995 collected papers.
            </p>
          </header>
          <ol className="portal-holdings">
            {featured.map((doc) => (
              <li key={doc.slug}>
                <a href={`/en/archive/documents/${doc.slug}/`}>
                  <span className="portal-holdings-kind">
                    {taxonomyLabel(doc, "en", { compact: true })}
                  </span>
                  <span className="portal-holdings-copy">
                    <strong>{doc.title}</strong>
                    <span>{doc.summary}</span>
                  </span>
                  <span className="portal-holdings-open">Read</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="section-action">
            <a className="button button-primary" href="/en/archive/#holdings">
              Browse the full archive
            </a>
          </p>
        </div>
      </section>

      <section
        className="portal-section"
        aria-labelledby="known-for-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">Work</p>
            <h2 id="known-for-title">Three lasting contributions</h2>
            <p>Open the contributions page for the full account.</p>
          </header>
          <ul className="portal-contrib">
            <li>
              <a href="/en/contributions/">
                <strong>Scholarship and publishing</strong>
                <span>
                  Classical Tamil research and the English quarterly{" "}
                  <cite>Tamil Culture</cite>.
                </span>
              </a>
            </li>
            <li>
              <a href="/en/contributions/">
                <strong>Global collaboration</strong>
                <span>
                  Co-founding IATR (1964) and organising the first world
                  conference of Tamil studies (1966).
                </span>
              </a>
            </li>
            <li>
              <a href="/en/contributions/">
                <strong>Reference scholarship</strong>
                <span>
                  <cite>A Reference Guide to Tamil Studies</cite> and related
                  bibliographic work.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="portal-section portal-section-alt"
        aria-labelledby="milestones-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">Chronology</p>
            <h2 id="milestones-title">Milestones</h2>
            <p>Five anchors from birth to the institutions he left behind.</p>
          </header>
          <ol className="portal-milestones">
            {homeMilestones.map((item) => (
              <li key={item.year}>
                <a href="/en/contributions/#timeline">
                  <time>{item.year}</time>
                  <span>{item.titleEn}</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="section-action">
            <a
              className="button button-secondary"
              href="/en/contributions/#timeline"
            >
              Full timeline
            </a>
            <a className="button button-secondary" href="/en/about/">
              Biography
            </a>
          </p>
        </div>
      </section>

      <section
        className="portal-section"
        aria-labelledby="quote-title"
      >
        <div className="portal-shell">
          <h2 id="quote-title" className="visually-hidden">
            In the press
          </h2>
          <blockquote className="portal-quote">
            <p>
              “He who convinced the world that Tamil is a classical language”
            </p>
            <footer>
              — <cite>The Hindu</cite>, remembering his centenary, 2013
              <Citation ids={[2]} lang="en" />
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
