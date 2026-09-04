import React from "react";
import { SectionHead } from "@/components/layout/SectionHead";
import { KEY_FACTS, STRINGS } from "@/lib/data";

interface FactGridProps {
  lang: "ta" | "en";
}

export const FactGrid: React.FC<FactGridProps> = ({ lang }) => {
  const isTa = lang === "ta";
  const S = STRINGS[lang];

  return (
    <section className="section section-facts">
      <div className="container">
        <SectionHead num="03" title={S.keyFacts} scope="1913 → 1980" />
        <div className="fact-grid">
          {KEY_FACTS.map((f) => (
            <div className="fact-card" key={f.num}>
              <div className="fact-card-head">
                <span className="fact-icon">{f.icon}</span>
                <span className="fact-label">{f.label}</span>
                <span className="fact-num">{f.num}</span>
              </div>
              <div className="fact-val">{isTa ? f.ta : f.en}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
