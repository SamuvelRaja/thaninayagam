import { BrushText } from "@/components/ui/BrushText";
import Link from "next/link";
import { JOURNEY_STOPS } from "@/lib/data";
import { ArchiveArrow } from "./LivingHero";
import { TimelineProgress } from "@/components/interactive/TimelineProgress";

export function JourneyGrid({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  return <section className="living-life" id="journey" aria-labelledby="living-life-title">
    <div className="container">
      <div className="living-life-intro"><div><p className="living-kicker">{ta ? "வாழ்வும் மரபும்" : "Life & legacy"}</p><h2 id="living-life-title"><BrushText>{ta ? "காரம்பொன்னில் தொடங்கி, உலகெங்கும்." : "From Karampon to the wider world."}</BrushText></h2></div><p>{ta ? "மொழிகளுக்கும் நாடுகளுக்கும் இடையே உரையாடலை உருவாக்கிய ஒரு தமிழறிஞர். அவரது வாழ்வின் முக்கிய இடங்கள் வழியே அந்தப் பயணத்தை அறிந்துகொள்ளுங்கள்." : "A scholar who opened conversations between languages and countries. Follow a lifetime of curiosity through the places that shaped his work."}</p></div>
      <TimelineProgress layout="rows">
        <nav aria-label={ta ? "வாழ்க்கை வரலாற்றை ஆராய்க" : "Explore his life timeline"}>
          <ol className="living-journey">
            {JOURNEY_STOPS.map((stop, index) => {
              const row = Math.floor(index / 3);
              const column = row % 2 === 0 ? index % 3 + 1 : 3 - index % 3;
              return <li className="living-journey-event" key={`${stop.year}-${index}`} style={{ gridRow: row + 1, gridColumn: column }}>
                <span className="living-journey-marker" aria-hidden="true" />
                <Link className="living-journey-stop" href={`${ta ? "" : "/en"}/about/#life-era-${[1, 1, 2, 3, 3, 3, 4, 4, 5][index]}`}>
                  <span className="living-journey-meta"><span className="living-journey-index">{String(index + 1).padStart(2, "0")}</span><ArchiveArrow /></span>
                  <span className="living-journey-year">{stop.year}</span>
                  <span className="living-journey-place">{ta ? stop.placeTa : stop.placeEn}</span>
                  <span className="living-journey-note">{ta ? stop.noteTa : stop.noteEn}</span>
                </Link>
              </li>;
            })}
          </ol>
        </nav>
      </TimelineProgress>
      <Link className="living-text-link" href={`${ta ? "" : "/en"}/about/#timeline`}>{ta ? "முழு வாழ்க்கைப் பயணம்" : "Follow his life"}<ArchiveArrow /></Link>
    </div>
  </section>;
}
