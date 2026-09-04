import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHead } from "@/components/layout/SectionHead";
import { FactGrid } from "@/components/ui/FactGrid";
import { JourneyGrid } from "@/components/ui/JourneyGrid";
import { CiteChip } from "@/components/ui/CiteChip";
import { CATS, WORKS, STRINGS } from "@/lib/data";

export const metadata: Metadata = {
  title: STRINGS.en.title,
  description: STRINGS.en.desc,
};

export default function EnglishHomePage() {
  const catCounts: Record<string, number> = {};
  WORKS.forEach((w) => {
    catCounts[w.cat] = (catCounts[w.cat] || 0) + 1;
  });

  const paths = [
    {
      eyebrow: "Classical Study / செவ்வியல் ஆய்வு",
      title: "Landscape and Poetry",
      blurb: "Nature in classical Tamil poetry — his lasting scholarly monograph.",
      slug: "landscape-and-poetry",
    },
    {
      eyebrow: "Journal Essay / இதழ்க் கட்டுரை",
      title: "The Ethical Interpretation of Nature",
      blurb: "A cleaned 1952 Tamil Culture essay — concise and ready to read.",
      slug: "ethical-interpretation-nature",
    },
    {
      eyebrow: "Collected Essays / தொகுப்புக் கட்டுரைகள்",
      title: "Collected Papers of Thani Nayagam Adigalar (1995)",
      blurb: "Over 500 pages of English research papers from Tamil Culture, gathered in one volume.",
      slug: "collected-papers",
    },
  ];

  return (
    <>
      <Header lang="en" current="home" />
      <main id="main">
        {/* Hero Section */}
        <section className="hero section-hero">
          <div className="hero-landmark" aria-hidden="true">
            <svg
              className="hero-geom-svg"
              viewBox="0 0 500 500"
              width="500"
              height="500"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="250" cy="250" r="230" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
              <circle cx="250" cy="250" r="180" strokeWidth="1" opacity="0.5" />
              <circle cx="250" cy="250" r="130" strokeWidth="1" strokeDasharray="2 8" opacity="0.4" />
              <circle cx="250" cy="250" r="80" strokeWidth="1" opacity="0.6" />
              <line x1="10" y1="250" x2="490" y2="250" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <line x1="250" y1="10" x2="250" y2="490" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <circle cx="250" cy="250" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="250" cy="70" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="250" cy="430" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="70" cy="250" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="430" cy="250" r="3" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">1913 — 1980 · Polyglot Scholar-Priest</p>
              <h1 className="display-1">Rev. Dr. Xavier S. Thani Nayagam</h1>
              <p className="hero-quote">“Global Ambassador of Tamil Studies”</p>
              <p className="lede">
                Catholic priest, polyglot scholar, and founding editor who placed classical Tamil scholarship on the global academic map through the Tamil Culture quarterly, the International Association for Tamil Research (IATR), and landmark world conferences.
              </p>
              <div className="btn-row">
                <Link className="btn btn-primary" href="/en/archive/">
                  Explore the Archive
                </Link>
                <Link className="btn btn-ghost" href="/en/about/">
                  Read Biography
                </Link>
              </div>
            </div>
            <figure className="plate plate--hero hero-plate">
              <div className="plate-mat">
                <img
                  src="/tna.webp"
                  alt="Rev. Dr. Xavier S. Thani Nayagam archival photograph"
                  width={640}
                  height={809}
                />
              </div>
              <figcaption>Rev. Dr. Xavier S. Thani Nayagam Archival Portrait (1913–1980)</figcaption>
            </figure>
          </div>
        </section>

        {/* Epigraph */}
        <section className="epigraph section-epigraph">
          <div className="container">
            <blockquote>
              <p className="ta">“யாதும் ஊரே யாவரும் கேளிர்”</p>
              <p className="en">Every town is our hometown; every person is our kin.</p>
              <p className="meta">— புறநானூறு 192, கணியன் பூங்குன்றனார்</p>
            </blockquote>
          </div>
        </section>

        {/* Metrics Stats */}
        <section className="stat-band section-stats" aria-label="Key Archival Metrics">
          <div className="container">
            <div className="stat-cell">
              <div className="stat-num">200+</div>
              <div className="stat-badge">200+ Global Lectures in 1 Year</div>
              <div className="stat-title">Global Academic Diplomacy (1954–55)</div>
              <div className="stat-detail">
                Delivered over 200 lectures across Europe, the Americas, and Asia to awaken international scholars to classical Tamil.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">12+</div>
              <div className="stat-badge">12+ Languages Mastered</div>
              <div className="stat-title">Polyglot Linguistic Scholarship</div>
              <div className="stat-detail">
                Profound mastery of Tamil, English, Latin, Greek, French, German, Italian, Spanish, Portuguese, and other classical and modern world languages.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">4</div>
              <div className="stat-badge">4 World Tamil Conferences</div>
              <div className="stat-title">Architect of Global Tamil Summits</div>
              <div className="stat-detail">
                Convened and guided the first four landmark International Conferences of Tamil Studies: Kuala Lumpur (1966), Madras (1968), Paris (1970), and Jaffna (1974).
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">14</div>
              <div className="stat-badge">14-Year Scholarly Journal</div>
              <div className="stat-title">Founder-Editor of &apos;Tamil Culture&apos;</div>
              <div className="stat-detail">
                Founded and edited the premier peer-reviewed research quarterly (1952–1966), carrying Tamil into world universities.
              </div>
            </div>
          </div>
        </section>

        {/* Five Fields Collections */}
        <section className="section section-collections">
          <div className="container">
            <SectionHead
              num="01"
              title="Five Fields · 25 Landmark Works"
              scope="Archival Register"
            />
            <div className="index-list">
              {CATS.map((c, i) => (
                <Link
                  className="index-row"
                  href={`/en/archive/?cat=${c.slug}`}
                  key={c.slug}
                >
                  <span className="ordinal">{String(i + 1).padStart(2, "0")}</span>
                  <span className="row-titles">
                    <span className="row-title">{c.en}</span>
                    <span className="row-alt">{c.ta}</span>
                  </span>
                  <span className="chip-count">
                    {catCounts[c.slug] || 0} records
                  </span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Reading Pathways */}
        <section className="section section-pathways">
          <div className="container">
            <SectionHead
              num="02"
              title="Three Selected Reading Vectors"
              scope="Recommended Entries"
            />
            <div className="pathway-grid">
              {paths.map((p) => (
                <Link
                  className="pathway-card"
                  href={`/en/archive/documents/${p.slug}/`}
                  key={p.slug}
                >
                  <span className="p-eyebrow">{p.eyebrow}</span>
                  <span className="p-title">{p.title}</span>
                  <span className="p-blurb">{p.blurb}</span>
                  <span className="text-link-arrow">Read →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03 Key Facts */}
        <FactGrid lang="en" />

        {/* Section 04 9-City Journey */}
        <JourneyGrid lang="en" />

        {/* Pull Quote */}
        <section className="section section-quote">
          <div className="container">
            <div className="pull-quote">
              <p>“He who convinced the world that Tamil is a classical language.”</p>
              <p className="meta">
                — The Hindu, Centenary Commemoration, 24 November 2013 <CiteChip id="S2" />
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
