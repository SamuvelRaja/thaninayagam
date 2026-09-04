import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHead } from "@/components/layout/SectionHead";
import { CiteChip } from "@/components/ui/CiteChip";
import { BIO_SECTIONS, MILESTONES, MILESTONE_ERAS } from "@/lib/data";

export default function AboutPage() {
  const glance = [
    ["Lifespan / வாழ்நாள்", "1913 ஆகஸ்ட் 2 – 1980 செப்டம்பர் 1 (அகவை 67)"],
    ["Birthplace / பிறந்த இடம்", "காரம்பொன், ஊர்காவற்றுறை, யாழ்ப்பாணம்"],
    ["Birth Name / இயற்பெயர்", "சேவியர் நிக்கோலஸ் ஸ்ரனிஸ்லாஸ் (பின் ‘தனிநாயக அடிகள்’)"],
    ["Two Doctorates / இரு முனைவர் பட்டங்கள்", "இறையியல் (D.D., ரோம், 1939) & கல்வியியல் (Ph.D., லண்டன், 1957)"],
    ["1952", "‘Tamil Culture’ சர்வதேச ஆய்விதழ் தொடக்கம்"],
    ["1964", "உலகத் தமிழாராய்ச்சி மன்றம் (IATR) உருவாக்கம்"],
    ["1966", "முதலாவது உலகத் தமிழாராய்ச்சி மாநாடு, கோலாலம்பூர்"],
  ];

  const langs = ["தமிழ்", "English", "Latin", "Italian", "French", "German", "Spanish", "Portuguese", "சிங்களம்", "Russian", "Greek", "Hebrew"];

  return (
    <>
      <Header lang="ta" current="about" />
      <main id="main">
        <PageHeader
          slug="about"
          title="அடிகளாரின் பெருவாழ்வும் பணிகளும்"
          lead="காரம்பொன் தீவுக் கிராமம் முதல் ரோம், லண்டன், பாரிஸ், கோலாலம்பூர் வரை தமிழியல் ஆய்வை உலகமயப்படுத்திய வரலாறு."
        />

        <section className="section section-about">
          <div className="container about-grid">
            <div className="about-main">
              {BIO_SECTIONS.map((b, i) => (
                <article className="bio-section" key={b.en}>
                  <span className="bio-num">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{b.ta}</h2>
                  <p className="b-alt-title">{b.en}</p>
                  <div className="measure">
                    <p>{b.taBody}</p>
                  </div>
                  {b.fig && (
                    <figure className="plate plate--inline">
                      <div className="plate-mat">
                        <img src={`/images/${b.fig}`} alt={b.figCap || ""} loading="lazy" />
                      </div>
                      <figcaption>
                        {b.figCap} {b.src && <CiteChip id={b.src} />}
                      </figcaption>
                    </figure>
                  )}
                </article>
              ))}
            </div>

            <aside className="about-aside">
              <div className="aside-card">
                <h3>சுருக்கக் குறிப்பு</h3>
                <dl className="fact-table">
                  {glance.map(([k, v]) => (
                    <div className="fact-row" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="fact-row">
                  <dt>Languages / பன்மொழிகள்</dt>
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

        {/* 17 Milestones Timeline */}
        <section className="section timeline-field section-timeline" id="timeline">
          <div className="container">
            <SectionHead
              num="01"
              title="வரலாற்றுக் காலக்கோடு"
              scope="முக்கிய மைல்கற்கள்"
            />
            <h2 className="display-2" style={{ textAlign: "center", marginBottom: "48px" }}>
              பெருவாழ்வின் 17 வரலாற்று மைல்கற்கள் (1913–1981)
            </h2>
            <div className="timeline">
              {MILESTONE_ERAS.map((era, eidx) => (
                <div className={`era era-${eidx + 1}`} key={era.en}>
                  <p className="era-label">{era.ta}</p>
                  {era.items.map((ei) => {
                    const e = MILESTONES[ei];
                    const first = ei === 0, last = ei === MILESTONES.length - 1;
                    const solid = first || last ? " solid" : "";

                    return (
                      <div className={`tl-item${solid}`} key={e.year + ei}>
                        <div className="tl-year">{e.year}</div>
                        <div>
                          <div className="tl-title">{e.taTitle}</div>
                        </div>
                        <div className="tl-detail">{e.taDetail}</div>
                        <div className="tl-sources">
                          {e.sources.map((s) => (
                            <CiteChip id={s} key={s} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-closing">
          <div className="container">
            <Link className="closing-band" href="/contributions/">
              <span className="btn btn-ghost">வரலாற்றுப் பங்களிப்புகளைப் பார்க்க →</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="ta" />
    </>
  );
}
