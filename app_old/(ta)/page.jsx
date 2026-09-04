import { Citation } from "@/app/components/Links";
import { Thoranam, KolamDivider } from "@/app/components/Ornaments";
import OlaichuvadiCard from "@/app/components/OlaichuvadiCard";
import { archiveTaxonomy, taxonomyFor, taxonomyLabel } from "@/app/lib/archiveMeta";
import {
  featuredHoldingSlugs,
  homeArchivePaths,
  homeFacts,
  homeItinerary,
  homeMilestones,
  homePillars,
} from "@/app/lib/data";
import { getDocuments } from "@/app/lib/documents";

export const metadata = {
  title: {
    absolute: "தனிநாயகம் அடிகளார் ஆவணகம்",
  },
  description:
    "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் (1913–1980) வாழ்வு, எழுத்துகள் மற்றும் ஆவணங்களுக்கான ஆய்வு ஆவணகம்.",
};

export default function HomePage() {
  const documents = getDocuments("ta");
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
      label: category.ta.label,
      hint: category.ta.hint,
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

      {/* ═══ AUSPICIOUS ENTRANCE CANOPY ═══ */}
      <div className="portal-thoranam" aria-hidden="true">
        <Thoranam />
      </div>

      {/* ═══ LEVEL 1: IDENTITY HERO ═══ */}
      <section className="portal-hero" aria-labelledby="hero-title">
        <div className="portal-hero-media" aria-hidden="true">
          <img src="/tna.webp" alt="" width="1024" height="1295" />
        </div>
        <div className="portal-hero-panel">
          <div className="portal-hero-brahmi" aria-hidden="true">
            𑀢𑀫𑀺𑀴
          </div>
          <p className="section-label">டிஜிட்டல் ஆவணகம் · 1913–1980</p>
          <h1 id="hero-title">தனிநாயகம் அடிகளார்</h1>
          <p className="portal-hero-badge">
            தமிழ்த் தூதுவர்
          </p>
          <p className="portal-hero-lead">
            குரு, மொழியியலாளர், இதழாசிரியர் — <cite>Tamil Culture</cite>,
            உலகத் தமிழாராய்ச்சி மன்றம், 1966 கோலாலம்பூர் மாநாடு வழியாகத் தமிழாய்வை
            சர்வதேசக் கல்வி உரையாடலாக எடுத்தவர்.
          </p>
          <blockquote className="portal-hero-quote">
            <p>
              "யாதும் ஊரே யாவரும் கேளிர்"
            </p>
            <footer>
              — எல்லா ஊர்களும் எங்கள் சொந்த ஊரே; எல்லா மக்களும் எங்கள் உறவினரே.
              <br />
              <small>புறநானூறு 192, கணியன் பூங்குன்றனார்</small>
            </footer>
          </blockquote>
          <div className="hero-actions">
            <a className="button button-primary" href="/archive/">
              ஆவணகத்தைப் பார்வையிட
            </a>
            <a className="button button-secondary" href="/about/">
              வாழ்க்கை வரலாறு
            </a>
          </div>
        </div>
      </section>

      {/* ═══ LEVEL 2: THE 4 PROVEN PILLARS ═══ */}
      <section
        className="portal-section portal-pillars-section"
        aria-labelledby="pillars-title"
      >
        <h2 id="pillars-title" className="visually-hidden">
          நான்கு முக்கிய சாதனைகள்
        </h2>
        <div className="portal-shell">
          <ul className="portal-pillars">
            {homePillars.map((pillar) => (
              <li key={pillar.metric}>
                <span className="portal-pillars-metric">{pillar.metric}</span>
                <strong className="portal-pillars-title">{pillar.titleTa}</strong>
                <span className="portal-pillars-desc">{pillar.detailTa}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ Kolam divider ═══ */}
      <div className="portal-divider-wrap" aria-hidden="true">
        <KolamDivider />
      </div>

      {/* ═══ LEVEL 3: BROWSE BY COLLECTION ═══ */}
      <section
        className="portal-section portal-section-alt"
        aria-labelledby="archive-collections-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">ஆவணகம்</p>
            <h2 id="archive-collections-title">தொகுப்பு வாரியாக உலாவுக</h2>
            <p>
              தற்போது இத்தளத்தில் {documents.length} ஆவணங்கள்
              {readableCount ? `, ${readableCount} வாசிக்கத் தயார்` : ""}. ஒரு
              தொகுப்பைத் திறக்கவும், அல்லது முழுப் பட்டியலுக்குச் செல்லவும்.
            </p>
            <p className="archive-growing-note">
              இது இறுதி எண்ணிக்கையோ அடிகளாரின் முழுப் படைப்புப் பட்டியலோ அல்ல. அவரது
              இலக்கியப் படைப்புகளைத் தேடி உறுதிப்படுத்தித் தொடர்ந்து சேர்த்துக்
              கொண்டிருக்கிறோம்.
            </p>
          </header>
          <ul className="portal-collections">
            {collections.map((collection) => (
              <li key={collection.id}>
                <a href={`/archive/?category=${collection.id}#holdings`}>
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
            <a className="button button-primary" href="/archive/#holdings">
              முழுப் பட்டியலையும் திறக்க
            </a>
            <a className="button button-secondary" href="/archive/#catalogue-title">
              வெளி நூலகங்கள்
            </a>
          </p>
        </div>
      </section>

      {/* ═══ LEVEL 4: START READING ═══ */}
      <section
        className="portal-section"
        aria-labelledby="start-reading-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">வாசிக்கத் தொடங்குக</p>
            <h2 id="start-reading-title">ஆவணகத்திற்கு மூன்று நுழைவுகள்</h2>
            <p>
              செவ்வியல் நூல், சுத்தம் செய்யப்பட்ட இதழ்க் கட்டுரை, அல்லது ஆங்கிலத்
              தொகுப்புக் கட்டுரைகள்—மூன்றும் இத்தளத்தில் வாசிக்கத் தயார்.
            </p>
          </header>
          <ul className="portal-paths">
            {startPaths.map((path) => (
              <li key={path.slug}>
                <a href={`/archive/documents/${path.slug}/`}>
                  <span className="section-label">{path.labelTa}</span>
                  <strong>{path.titleTa}</strong>
                  <span>{path.blurbTa}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ FEATURED HOLDINGS ═══ */}
      <section
        className="portal-section portal-section-alt"
        aria-labelledby="holdings-preview-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">தேர்ந்தெடுத்த ஆவணங்கள்</p>
            <h2 id="holdings-preview-title">முதலில் திறக்க வேண்டியவை</h2>
            <p>
              முதலில் வாசிக்கத் தகுந்தவை: செவ்வியல் ஆய்வு, இதழ்க் கட்டுரைகள்,
              தமிழ்த் தொகுப்புகள், 1995 ஆங்கிலத் தொகுப்புக் கட்டுரைகள்.
            </p>
          </header>
          <OlaichuvadiCard lang="ta" />
          <ol className="portal-holdings">
            {featured.map((doc) => (
              <li key={doc.slug}>
                <a href={`/archive/documents/${doc.slug}/`}>
                  <span className="portal-holdings-kind">
                    {taxonomyLabel(doc, "ta", { compact: true })}
                  </span>
                  <span className="portal-holdings-copy">
                    <strong>{doc.title}</strong>
                    <span>{doc.summary}</span>
                  </span>
                  <span className="portal-holdings-open">வாசிக்க</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="section-action">
            <a className="button button-primary" href="/archive/#holdings">
              முழு ஆவணகத்தை உலாவுக
            </a>
          </p>
        </div>
      </section>

      {/* ═══ Kolam divider ═══ */}
      <div className="portal-divider-wrap" aria-hidden="true">
        <KolamDivider />
      </div>

      {/* ═══ LEVEL 5: CONTRIBUTIONS ═══ */}
      <section
        className="portal-section"
        aria-labelledby="known-for-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">பணி</p>
            <h2 id="known-for-title">மூன்று முக்கிய பங்களிப்புகள்</h2>
            <p>முழு விவரத்திற்குப் பங்களிப்புகள் பக்கத்தைத் திறக்கவும்.</p>
          </header>
          <ul className="portal-contrib">
            <li>
              <a href="/contributions/">
                <strong>ஆய்வும் வெளியீடும்</strong>
                <span>
                  செவ்வியல் தமிழாய்வும் ஆங்கிலக் காலாண்டிதழ் <cite>Tamil Culture</cite> உம்.
                </span>
              </a>
            </li>
            <li>
              <a href="/contributions/">
                <strong>உலக ஒத்துழைப்பு</strong>
                <span>
                  1964 இல் IATR நிறுவலும் 1966 முதல் உலகத் தமிழாய்வு மாநாடும்.
                </span>
              </a>
            </li>
            <li>
              <a href="/contributions/">
                <strong>குறிப்பு ஆய்வு</strong>
                <span>
                  <cite>A Reference Guide to Tamil Studies</cite> மற்றும் தொடர்புடைய
                  நூலியல் பணி.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ═══ MILESTONES ═══ */}
      <section
        className="portal-section portal-section-alt"
        aria-labelledby="milestones-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">காலவரிசை</p>
            <h2 id="milestones-title">மைல்கற்கள்</h2>
            <p>பிறப்பு முதல் அவர் விட்டுச் சென்ற நிறுவனங்கள் வரை ஐந்து அடையாளங்கள்.</p>
          </header>
          <ol className="portal-milestones">
            {homeMilestones.map((item) => (
              <li key={item.year}>
                <a href="/timeline/">
                  <time>{item.year}</time>
                  <span>{item.titleTa}</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="section-action">
            <a className="button button-secondary" href="/timeline/">
              முழுக் காலக்கோடு
            </a>
            <a className="button button-secondary" href="/about/">
              வாழ்க்கை வரலாறு
            </a>
          </p>

          {/* ═══ GLOBAL ITINERARY ═══ */}
          <div className="portal-itinerary">
            <h3>ஒரு வாழ்வின் பயணம்</h3>
            <ol>
              {homeItinerary.map((stop) => (
                <li key={stop.ta}>
                  <time>{stop.year}</time>
                  <strong>{stop.ta}</strong>
                  <span>{stop.noteTa}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══ VERIFIED FACTS ═══ */}
      <section
        className="portal-section"
        aria-labelledby="vital-facts-title"
      >
        <div className="portal-shell">
          <header className="portal-section-head">
            <p className="section-label">சான்றுகளும் நம்பகத்தன்மையும்</p>
            <h2 id="vital-facts-title">உறுதிப்படுத்தப்பட்ட முக்கியத் தகவல்கள்</h2>
            <p>
              அரசு நூலகப் பதிவுகள் மற்றும் சமகால ஆவணங்களுடன் சரிபார்க்கப்பட்ட தகவல்கள்.
            </p>
          </header>
          <dl className="portal-facts">
            {homeFacts.map((fact) => (
              <div key={fact.termTa}>
                <dt>{fact.termTa}</dt>
                <dd>{fact.detailTa}</dd>
              </div>
            ))}
          </dl>
          <p className="section-action">
            <a className="button button-secondary" href="/sources/">
              ஆய்வு சான்றாதாரப் பதிவேடு
            </a>
            <a className="button button-secondary" href="/about/">
              முழு வாழ்க்கை வரலாறு
            </a>
          </p>
        </div>
      </section>

      {/* ═══ CLOSING QUOTE ═══ */}
      <section
        className="portal-section portal-section-alt"
        aria-labelledby="quote-title"
      >
        <div className="portal-shell">
          <h2 id="quote-title" className="visually-hidden">
            பத்திரிகையில்
          </h2>
          <blockquote className="portal-quote">
            <p>
              "தமிழ் ஒரு செவ்வியல் மொழி என்று உலகத்தை நம்பவைத்தவர்"
            </p>
            <footer>
              — <cite>The Hindu</cite>, நூற்றாண்டு நினைவு, 2013
              <Citation ids={[2]} lang="ta" />
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
