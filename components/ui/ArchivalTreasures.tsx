import Link from "next/link";
import { ArchiveArrow } from "./LivingHero";
import { BrushText } from "./BrushText";

const treasures = [
  { year: "1554", image: "catechism-1554", ta: "கார்த்தீலா", en: "Cartilha", detailTa: "தலைப்பு ஏடு", detailEn: "Title page", landscape: true },
  { year: "1578", image: "thambiran-vanakkam-1578", ta: "தம்பிரான் வணக்கம்", en: "Thambiran Vanakkam", detailTa: "அச்சுப் பதிப்பின் தலைப்பு ஏடு", detailEn: "Printed edition · Title page", landscape: false },
  { year: "1952", image: "tamil-culture-1952", ta: "Tamil Culture", en: "Tamil Culture", detailTa: "இதழின் முதல் தொகுதி", detailEn: "Journal · Volume one", landscape: false },
  { year: "1966", image: "conference-1966-proceedings", ta: "உலகத் தமிழாராய்ச்சி மாநாடு", en: "World Tamil Conference", detailTa: "கோலாலம்பூர் · 1968 வெளியீடு", detailEn: "Kuala Lumpur · Published 1968", landscape: false },
];

export function ArchivalTreasures({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  return <section className="section archival-treasures" id="archival-treasures" aria-labelledby="treasures-title">
    <div className="container">
      <div className="living-section-heading treasures-heading">
        <div>
          <p className="living-kicker">{ta ? "வரலாற்றுப் பொக்கிஷங்கள்" : "Archival treasures"}</p>
          <h2 id="treasures-title"><BrushText>{ta ? "முக்கிய ஆவணப் பதிவுகள்." : "Landmark historical editions."}</BrushText></h2>
        </div>
        <Link className="living-text-link treasures-link" href={`${ta ? "" : "/en"}/contributions/#plates`}>
          {ta ? "அனைத்து ஆவணப் படங்கள்" : "View all plates"}<ArchiveArrow />
        </Link>
      </div>
      <div className="treasures-grid">
        {treasures.map((item) => <figure className={`treasure${item.landscape ? " treasure--landscape" : ""}`} key={item.image}>
          <div className="treasure-art">
            <img src={`/images/${item.image}.jpg`} alt={`${item.year} ${ta ? item.ta : item.en} — ${ta ? item.detailTa : item.detailEn}`} loading="lazy" />
          </div>
          <figcaption>
            <span className="treasure-year">{item.year}</span>
            <h3>{ta ? item.ta : item.en}</h3>
            <p>{ta ? item.detailTa : item.detailEn}</p>
          </figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}
