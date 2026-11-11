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
  title: "வாழ்க்கை வரலாறு | தனிநாயக அடிகள் ஆவணகம்",
  description: "தனிநாயக அடிகளாரின் வாழ்வை அமுதன் அடிகளாரின் 1993 வாழ்க்கை வரலாற்று நூலின் வழியே அறியுங்கள்: கற்பித்தல், தமிழாய்வு, இதழியல், உலக அறிஞர் உறவுகள்.",
};

export default function AboutPage() {
  const glance = [
    ["வாழ்நாள்", "1913 ஆகஸ்ட் 2 – 1980 செப்டம்பர் 1 (அகவை 67)"],
    ["பிறந்த இடம்", "காரம்பொன், யாழ்ப்பாணம்"],
    ["இயற்பெயர்", "சேவியர்; பின்னர் சேவியர் ஸ்தனிஸ்லாஸ் என வழங்கினார்"],
    ["முனைவர் பட்டங்கள்", "இறையியல் (D.D., ரோம், 1939); கல்வியியல் (Ph.D., லண்டன், 1957)"],
    ["1952", "Tamil Culture ஆங்கிலக் காலாண்டு ஆய்விதழ் தொடக்கம்"],
    ["1964", "பிற அறிஞர்களுடன் உலகத் தமிழாராய்ச்சி மன்றம் (IATR) உருவாக்கம்"],
    ["1966", "முதலாவது உலகத் தமிழாராய்ச்சி மாநாட்டின் ஏற்பாடு, கோலாலம்பூர்"],
  ];

  const langs = ["தமிழ்", "English", "Latin", "Italian", "French", "German", "Spanish", "Portuguese", "Greek", "Hebrew"];

  return (
    <>
      <Header lang="ta" current="about" />
      <main id="main" className="brush-page">
        <PageHeader
          lang="ta"
          slug="about"
          title="அடிகளாரின் பெருவாழ்வும் பணிகளும்"
          lead="காரம்பொன் தீவுக் கிராமம் முதல் ரோம், லண்டன், பாரிஸ், கோலாலம்பூர் வரை தமிழியல் ஆய்வை உலகமயப்படுத்திய வரலாறு."
        />
        <PageContents lang="ta" page="about" />

        <section className="section section-about" id="biography">
          <div className="container about-grid">
            <div className="about-main">
              {BIO_SECTIONS.map((b, i) => (
                <article className="bio-section" key={b.en}>
                  <span className="bio-num">{String(i + 1).padStart(2, "0")}</span>
                  <h2><BrushText>{b.ta}</BrushText></h2>
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
                  <dt>நூலில் குறிப்பிடப்படும் மொழிகள்</dt>
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

        <LifeTimeline lang="ta" />

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
