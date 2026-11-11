import { BrushText } from "@/components/ui/BrushText";
import { MILESTONES, MILESTONE_ERAS } from "@/lib/data";
import { CiteChip } from "./CiteChip";
import { TimelineProgress } from "@/components/interactive/TimelineProgress";

export function LifeTimeline({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  return <section className="section life-timeline" id="timeline" aria-labelledby="timeline-title">
    <div className="container">
      <header className="life-timeline-heading">
        <div><p className="living-kicker">{ta ? "வாழ்வின் காலக்கோடு" : "A lifetime of discovery"}</p><h2 id="timeline-title"><BrushText>{ta ? "ஒரு வாழ்வு. அழியாத சுவடுகள்." : "One life. Lasting connections."}</BrushText></h2></div>
        <p className="life-timeline-summary"><strong>1913 — 1981</strong><span>{ta ? "17 மைல்கற்கள் · 5 அத்தியாயங்கள்" : "17 milestones · 5 chapters"}</span></p>
      </header>
      <nav className="life-era-nav" aria-label={ta ? "காலக்கோட்டு அத்தியாயங்கள்" : "Timeline chapters"}>
        {MILESTONE_ERAS.map((era, index) => <a href={`#life-era-${index + 1}`} key={era.en}><span>{String(index + 1).padStart(2, "0")}</span>{ta ? era.ta : era.en}</a>)}
      </nav>
      <TimelineProgress>
        {MILESTONE_ERAS.map((era, index) => <section className="life-era" id={`life-era-${index + 1}`} key={era.en} aria-labelledby={`life-era-title-${index + 1}`}>
          <header className="life-era-heading"><span className="life-era-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p>{ta ? "அத்தியாயம்" : "Chapter"} {String(index + 1).padStart(2, "0")}</p><h3 id={`life-era-title-${index + 1}`}><BrushText>{ta ? era.ta : era.en}</BrushText></h3></header>
          <ol className="life-events">
            {era.items.map((itemIndex) => {
              const event = MILESTONES[itemIndex];
              return <li className={`life-event${itemIndex % 2 === 1 ? " life-event-right" : ""}`} id={`milestone-${event.year}`} key={`${event.year}-${itemIndex}`}>
                <span className="life-event-marker" aria-hidden="true" />
                <article className="life-event-card"><span className={`life-event-year${event.year.includes("–") ? " life-event-year-range" : ""}`}>{event.year}</span><h4>{ta ? event.taTitle : event.enTitle}</h4><p>{ta ? event.taDetail : event.enDetail}</p><div className="life-event-sources"><span>{ta ? "ஆதாரங்கள்" : "Sources"}</span>{event.sources.map(source => <CiteChip id={source} key={source} />)}</div></article>
              </li>;
            })}
          </ol>
        </section>)}
      </TimelineProgress>
    </div>
  </section>;
}
