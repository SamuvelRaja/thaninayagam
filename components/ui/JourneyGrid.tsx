import React from "react";
import { SectionHead } from "@/components/layout/SectionHead";
import { JOURNEY_STOPS, STRINGS } from "@/lib/data";

interface JourneyGridProps {
  lang: "ta" | "en";
}

export const JourneyGrid: React.FC<JourneyGridProps> = ({ lang }) => {
  const isTa = lang === "ta";
  const S = STRINGS[lang];

  return (
    <section className="section section-route">
      <div className="container">
        <SectionHead
          num="04"
          title={S.route}
          scope={isTa ? "9 உலக நகரங்கள்" : "9 Cities"}
        />
        <div className="journey-grid">
          {JOURNEY_STOPS.map((s, i) => {
            const solid = i === 0 || i === JOURNEY_STOPS.length - 1 ? " solid" : "";
            return (
              <div className={`journey-card${solid}`} key={s.year + i}>
                <div className="journey-header">
                  <span className="journey-year">{s.year}</span>
                  <span className="journey-badge">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="journey-place">{isTa ? s.placeTa : s.placeEn}</h3>
                <p className="journey-note">{isTa ? s.noteTa : s.noteEn}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
