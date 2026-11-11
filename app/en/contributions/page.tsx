import { BrushText } from "@/components/ui/BrushText";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageContents } from "@/components/layout/PageContents";
import { SectionHead } from "@/components/layout/SectionHead";
import { CiteChip } from "@/components/ui/CiteChip";
import { ContributionsRegister } from "@/components/interactive/ContributionsRegister";
import { CONTRIBUTORS_PILLARS, STRINGS } from "@/lib/data";

export const metadata: Metadata = {
  title: STRINGS.en.title,
  description: STRINGS.en.desc,
};

export default function EnglishContributionsPage() {
  const romans = ["I", "II", "III", "IV", "V", "VI"];
  const plates = [
    { file: "catechism-1554", cap: "1554 Cartilha bilingual title leaf", src: "S8" },
    { file: "thambiran-vanakkam-1578", cap: "1578 Thambiran Vanakkam", src: "S14" },
    { file: "tamil-culture-1952", cap: "1952 Tamil Culture Vol. 1 title leaf", src: "S4" },
    { file: "conference-1966-proceedings", cap: "1966 Kuala Lumpur conference proceedings · published 1968", src: "S15" },
  ];

  return (
    <>
      <Header lang="en" current="contributions" />
      <main id="main" className="brush-page">
        <PageHeader
          lang="en"
          slug="contributions"
          title="Historical Contributions"
          lead="Sixteenth-century print recovery, Tamil Culture quarterly, IATR founding, and international conferences."
        />
        <PageContents lang="en" page="contributions" />

        {/* 6 Contribution Pillars */}
        <section className="section section-pillars" id="contributions">
          <div className="container">
            <div className="pillars">
              {CONTRIBUTORS_PILLARS.map((p, i) => (
                <div className="pillar" key={p.enTitle}>
                  <span className="roman">{romans[i]}</span>
                  <h3><BrushText>{p.enTitle}</BrushText></h3>
                  <p className="p-alt-title">{p.taTitle}</p>
                  <p>{p.enDesc}</p>
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
              title="Archival plates"
              scope="Books and journals"
            />
            <h2 className="section-subhead" style={{ textAlign: "center", marginBottom: "48px" }}><BrushText>
              Pages from his scholarly work
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
        <ContributionsRegister lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
