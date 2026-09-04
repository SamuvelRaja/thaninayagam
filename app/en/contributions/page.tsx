import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
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
    { file: "conference-1966-proceedings", cap: "1966 Kuala Lumpur Proceedings title page", src: "S15" },
  ];

  return (
    <>
      <Header lang="en" current="contributions" />
      <main id="main">
        <PageHeader
          slug="contributions"
          title="Historical Contributions"
          lead="Sixteenth-century print recovery, Tamil Culture quarterly, IATR founding, and international conferences."
        />

        {/* 6 Contribution Pillars */}
        <section className="section section-pillars">
          <div className="container">
            <div className="pillars">
              {CONTRIBUTORS_PILLARS.map((p, i) => (
                <div className="pillar" key={p.enTitle}>
                  <span className="roman">{romans[i]}</span>
                  <h3>{p.enTitle}</h3>
                  <p className="p-alt-title">{p.taTitle}</p>
                  <p>{p.enDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incunabula Plate Strip */}
        <section className="section section-plates">
          <div className="container">
            <SectionHead
              num="02"
              title="Early Tamil print"
              scope="Incunabula Strip"
            />
            <h2 className="display-2" style={{ textAlign: "center", marginBottom: "48px" }}>
              The early-print plate strip
            </h2>
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
