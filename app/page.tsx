import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHead } from "@/components/layout/SectionHead";
import { FactGrid } from "@/components/ui/FactGrid";
import { JourneyGrid } from "@/components/ui/JourneyGrid";
import { CiteChip } from "@/components/ui/CiteChip";
import { CATS, WORKS } from "@/lib/data";

export default function HomePage() {
  const catCounts: Record<string, number> = {};
  WORKS.forEach((w) => {
    catCounts[w.cat] = (catCounts[w.cat] || 0) + 1;
  });

  const paths = [
    {
      eyebrow: "Classical Study / செவ்வியல் ஆய்வு",
      title: "Landscape and Poetry",
      blurb: "சங்க இலக்கியத்தில் இயற்கைப் பின்னணி மற்றும் கவிதையியல் நெறிகள் குறித்த அடிகளாரின் தலைசிறந்த செவ்வியல் ஆய்வு நூல்.",
      slug: "landscape-and-poetry",
    },
    {
      eyebrow: "Journal Essay / இதழ்க் கட்டுரை",
      title: "The Ethical Interpretation of Nature",
      blurb: "1952 'Tamil Culture' இதழில் வெளியான அடிகளாரின் புகழ்பெற்ற ஆய்வுக்கட்டுரை — செப்பனிடப்பட்ட எளிய வாசிப்புப் பிரதி.",
      slug: "ethical-interpretation-nature",
    },
    {
      eyebrow: "Collected Essays / தொகுப்புக் கட்டுரைகள்",
      title: "Collected Papers of Thani Nayagam Adigalar (1995)",
      blurb: "உலகப் பல்கலைக்கழகங்களில் தமிழியல் ஆய்வை நிலைநிறுத்திய ஆங்கில ஆய்வுக் கட்டுரைகளின் 500+ பக்க முழுத் தொகுப்பு.",
      slug: "collected-papers",
    },
  ];

  return (
    <>
      <Header lang="ta" current="home" />
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
              <p className="eyebrow">1913 — 1980 · பன்மொழிப் பேரறிஞர்</p>
              <h1 className="display-1">
                அருள்திரு. முனைவர் சேவியர் <br className="hero-title-break" />
                தனிநாயகம் அடிகள்
              </h1>
              <p className="hero-quote">“தமிழ்த்தூதுவர்”</p>
              <p className="lede">
                கத்தோலிக்க குரு, பன்மொழிப் புலவர், இதழாசிரியர் — &apos;Tamil Culture&apos; சர்வதேச ஆய்விதழ், உலகத் தமிழாராய்ச்சி மன்றம் (IATR), 1966 கோலாலம்பூர் மாநாடு ஆகியவற்றின் வழியே தமிழ் மொழியின் செவ்வியல் சிறப்பையும் தொன்மையையும் உலகப் பல்கலைக்கழகங்களின் ஆய்வுக்களத்திற்கு எடுத்துச் சென்ற பெருமகனார்.
              </p>
              <div className="btn-row">
                <Link className="btn btn-primary" href="/archive/">
                  ஆவணகத்தை ஆராய்க
                </Link>
                <Link className="btn btn-ghost" href="/about/">
                  முழு வாழ்க்கை வரலாறு
                </Link>
              </div>
            </div>
            <figure className="plate plate--hero hero-plate">
              <div className="plate-mat">
                <img
                  src="/tna.webp"
                  alt="அருள்திரு. தனிநாயக அடிகளாரின் வரலாற்று ஆவணப் படம் (1913–1980)"
                  width={640}
                  height={809}
                />
              </div>
              <figcaption>அருள்திரு. தனிநாயக அடிகளாரின் வரலாற்று ஆவணப் படம் (1913–1980)</figcaption>
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

        {/* Key Metrics Stats */}
        <section className="stat-band section-stats" aria-label="வரலாற்றுப் பெருவெற்றிகள்">
          <div className="container">
            <div className="stat-cell">
              <div className="stat-num">200+</div>
              <div className="stat-badge">ஓராண்டில் 200+ உலக விரிவுரைகள்</div>
              <div className="stat-title">உலகளாவிய கல்வித் தூதுப்பணி (1954–55)</div>
              <div className="stat-detail">
                ஐரோப்பா, அமெரிக்கா, ஆசிய நாடுகள் எங்கும் ஓராண்டில் 200-க்கும் மேற்பட்ட பல்கலைக்கழக விரிவுரைகளை ஆற்றித் தமிழின் செவ்வியல் சிறப்பை உலகிற்கு உணர்த்திய வரலாற்றுப் பயணம்.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">12+</div>
              <div className="stat-badge">பன்மொழிப் புலமை</div>
              <div className="stat-title">சர்வதேச மொழியியல் தேர்ச்சி</div>
              <div className="stat-detail">
                தமிழ், ஆங்கிலம், இலத்தீன், கிரேக்கம், பிரெஞ்சு, ஜெர்மன், இத்தாலியன், ஸ்பானிஷ், போர்த்துக்கீசியம் உள்ளிட்ட 12-க்கும் மேற்பட்ட செம்மொழிகள் மற்றும் உலக மொழிகளில் ஆழ்ந்த புலமை.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">4</div>
              <div className="stat-badge">உலகத் தமிழ் மாநாடுகள்</div>
              <div className="stat-title">வரலாற்று மாநாடுகளின் நாயகர்</div>
              <div className="stat-detail">
                கோலாலம்பூர் (1966), சென்னை (1968), பாரிஸ் (1970), யாழ்ப்பாணம் (1974) ஆகிய முதல் நான்கு உலகத் தமிழாராய்ச்சி மாநாடுகளை முன்னின்று ஒருங்கிணைத்துத் தமிழியலை உலக அரங்கில் நிலைநிறுத்தினார்.
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">14</div>
              <div className="stat-badge">14 ஆண்டுகள் தொடர் ஆய்வு இதழியல்</div>
              <div className="stat-title">‘Tamil Culture’ சர்வதேச ஆய்விதழின் நிறுவனர்</div>
              <div className="stat-detail">
                தமிழாய்வை உலகப் பல்கலைக்கழகங்களின் கல்வி உரையாடலாக உயர்த்திய புகழ்பெற்ற ஆங்கிலக் காலாண்டு ஆய்விதழின் நிறுவனர் மற்றும் முதன்மை ஆசிரியர்.
              </div>
            </div>
          </div>
        </section>

        {/* 5 Collections Register */}
        <section className="section section-collections">
          <div className="container">
            <SectionHead
              num="01"
              title="5 பெரும் துறைகள் · 25 முதன்மைப் படைப்புகள்"
              scope="ஆவணப் பகுப்புகள்"
            />
            <div className="index-list">
              {CATS.map((c, i) => (
                <Link
                  className="index-row"
                  href={`/archive/?cat=${c.slug}`}
                  key={c.slug}
                >
                  <span className="ordinal">{String(i + 1).padStart(2, "0")}</span>
                  <span className="row-titles">
                    <span className="row-title">{c.ta}</span>
                    <span className="row-alt">{c.en}</span>
                  </span>
                  <span className="chip-count">
                    {catCounts[c.slug] || 0} படைப்புகள்
                  </span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Selected Reading Vectors */}
        <section className="section section-pathways">
          <div className="container">
            <SectionHead
              num="02"
              title="3 முதன்மை வாசிப்புப் பாதைகள்"
              scope="வாசிப்புப் பரிந்துரைகள்"
            />
            <div className="pathway-grid">
              {paths.map((p) => (
                <Link
                  className="pathway-card"
                  href={`/archive/documents/${p.slug}/`}
                  key={p.slug}
                >
                  <span className="p-eyebrow">{p.eyebrow}</span>
                  <span className="p-title">{p.title}</span>
                  <span className="p-blurb">{p.blurb}</span>
                  <span className="text-link-arrow">வாசிக்க →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03 Key Facts */}
        <FactGrid lang="ta" />

        {/* Section 04 9-City Journey */}
        <JourneyGrid lang="ta" />

        {/* Section Quote */}
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
      <Footer lang="ta" />
    </>
  );
}
