import { BrushText } from "@/components/ui/BrushText";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageContents } from "@/components/layout/PageContents";
import { LifeTimeline } from "@/components/ui/LifeTimeline";
import { CiteChip } from "@/components/ui/CiteChip";
import { BIO_SECTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "His Life | Father Thani Nayagam — Digital Archive",
  description: "The life behind Father Thani Nayagam’s books and journals, drawn from Amudhan Adigal’s 1993 biography: teaching, Tamil research, publishing and international scholarship.",
};

export default function EnglishAboutPage() {
  const glance = [
    ["Lifespan", "2 August 1913 – 1 September 1980 (aged 67)"],
    ["Birthplace", "Karampon, Jaffna"],
    ["Given name", "Xavier; later used Xavier Stanislaus"],
    ["Doctorates", "D.D., Rome (1939); Ph.D. in education, London (1957)"],
    ["1952", "Launched the English-language quarterly Tamil Culture"],
    ["1964", "Co-founded the International Association of Tamil Research (IATR)"],
    ["1966", "Helped organise the first international Tamil research conference, Kuala Lumpur"],
  ];

  const langs = ["தமிழ்", "English", "Latin", "Italian", "French", "German", "Spanish", "Portuguese", "Greek", "Hebrew"];

  return (
    <>
      <Header lang="en" current="about" />
      <main id="main" className="brush-page">
        <PageHeader
          lang="en"
          slug="about"
          title="Life, Scholarship, and Missions"
          lead="From Kayts to Rome, London, Paris, and Kuala Lumpur: the global intellectual trajectory of Father Thani Nayagam."
        />
        <PageContents lang="en" page="about" />

        <section className="section section-about" id="biography">
          <div className="container about-grid">
            <div className="about-main">
              {BIO_SECTIONS.map((b, i) => (
                <article className="bio-section" key={b.en}>
                  <span className="bio-num">{String(i + 1).padStart(2, "0")}</span>
                  <h2><BrushText>{b.en}</BrushText></h2>
                  <p className="b-alt-title">{b.ta}</p>
                  <div className="measure">
                    <p>{b.enBody}</p>
                  </div>
                  {b.fig && (
                    <figure className="plate plate--inline">
                      <div className="plate-mat">
                        <img src={`/images/${b.fig}`} alt={b.figCapEn || b.figCap || ""} loading="lazy" />
                      </div>
                      <figcaption>
                        {b.figCapEn || b.figCap} {b.src && <CiteChip id={b.src} />}
                      </figcaption>
                    </figure>
                  )}
                </article>
              ))}
            </div>

            <aside className="about-aside">
              <div className="aside-card">
                <h3>At a Glance</h3>
                <dl className="fact-table">
                  {glance.map(([k, v]) => (
                    <div className="fact-row" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="fact-row">
                  <dt>Languages mentioned in the biography</dt>
                  <dd>
                    <span className="fact-langs">
                      {langs.map((l) => (
                        <span className="chip" key={l}>
                          {l}
                        </span>
                      ))}
                    </span>
                  </dd>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <LifeTimeline lang="en" />

        <section className="section section-closing">
          <div className="container">
            <Link className="closing-band" href="/en/contributions/">
              <span className="btn btn-ghost">Explore his historical contributions →</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
