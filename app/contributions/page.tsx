import { BrushText } from "@/components/ui/BrushText";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageContents } from "@/components/layout/PageContents";
import { SectionHead } from "@/components/layout/SectionHead";
import { CiteChip } from "@/components/ui/CiteChip";
import { ContributionsRegister } from "@/components/interactive/ContributionsRegister";
import { CONTRIBUTORS_PILLARS } from "@/lib/data";

export default function ContributionsPage() {
  const romans = ["I", "II", "III", "IV", "V", "VI"];
  const plates = [
    { file: "catechism-1554", cap: "1554 கார்த்தீலா தலைப்பு ஏடு · Cartilha", src: "S8" },
    { file: "thambiran-vanakkam-1578", cap: "1578 தம்பிரான் வணக்கம் · Thambiran Vanakkam", src: "S14" },
    { file: "tamil-culture-1952", cap: "1952 Tamil Culture முதல் தொகுதி தலைப்பு ஏடு", src: "S4" },
    { file: "conference-1966-proceedings", cap: "1966 கோலாலம்பூர் மாநாட்டு நடவடிக்கைகள் · 1968 வெளியீடு", src: "S15" },
  ];

  return (
    <>
      <Header lang="ta" current="contributions" />
      <main id="main" className="brush-page">
        <PageHeader
          lang="ta"
          slug="contributions"
          title="வரலாற்றுப் பங்களிப்புகள்"
          lead="16-ஆம் நூற்றாண்டு அச்சு மீட்டெடுப்பு, ‘Tamil Culture’ இதழியல், IATR மற்றும் உலக மாநாடுகள்."
        />
        <PageContents lang="ta" page="contributions" />

        {/* 6 Contribution Pillars */}
        <section className="section section-pillars" id="contributions">
          <div className="container">
            <div className="pillars">
              {CONTRIBUTORS_PILLARS.map((p, i) => (
                <div className="pillar" key={p.enTitle}>
                  <span className="roman">{romans[i]}</span>
                  <h3><BrushText>{p.taTitle}</BrushText></h3>
                  <p className="p-alt-title">{p.enTitle}</p>
                  <p>{p.taDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incunabula Plate Strip */}
        <section className="section section-plates" id="plates">
          <div className="container">
            <SectionHead
              num="02"
              title="ஆவணப் படங்கள்"
              scope="நூல்களும் இதழ்களும்"
            />
            <h2 className="section-subhead" style={{ textAlign: "center", marginBottom: "48px" }}><BrushText>
              தமிழ்ப்பணியைப் பதிவு செய்த ஏடுகள்
            </BrushText></h2>
            <div className="plate-strip">
              {plates.map((pl) => (
                <figure className="plate plate--strip" key={pl.file}>
                  <div className="plate-mat">
                    <img src={`/images/${pl.file}.jpg`} alt={pl.cap} loading="lazy" />
                  </div>
                  <figcaption>
                    {pl.cap} <CiteChip id={pl.src} />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Chronological Register */}
        <ContributionsRegister lang="ta" />
      </main>
      <Footer lang="ta" />
    </>
  );
}
