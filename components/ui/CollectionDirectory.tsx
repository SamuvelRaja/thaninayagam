import { BrushText } from "@/components/ui/BrushText";
import Link from "next/link";
import { WORKS } from "@/lib/data";
import { archiveNavigation } from "@/lib/navigation";
import { ArchiveArrow } from "./LivingHero";

export function CollectionDirectory({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  const prefix = ta ? "" : "/en";
  const fields = archiveNavigation(lang);
  const labels = ta ? ["இலக்கியம்", "பண்பாடு", "தமிழாய்வு", "மெய்யியல்", "தொகுப்புகள்"] : ["Literature", "Culture", "Research", "Philosophy", "Collections"];
  return <section className="section collection-directory living-fields" id="collections" aria-labelledby="living-fields-title">
    <div className="container directory-layout">
      <div className="directory-heading">
        <div><p className="living-kicker">{ta ? "அறிவுப் புலங்கள்" : "Fields of scholarship"}</p><h2 id="living-fields-title"><BrushText>{ta ? "அடிகளாரின் ஆய்வுலகப் பயணம்." : "A guided journey through his work."}</BrushText></h2></div>
        <Link className="directory-all" href={`${prefix}/archive/`}>{fields.length} {ta ? "துறைகள்" : "fields"} · {WORKS.length} {ta ? "ஆவணங்கள்" : "documents"}</Link>
      </div>
      <div className="collection-grid">{fields.map((field, index) => <Link className="collection-entry" href={field.href} key={field.key} data-field={field.key}>
        <span className="living-field-number">{String(index + 1).padStart(2, "0")}</span><ArchiveArrow />
        <div className="collection-title"><h3><BrushText>{labels[index]}</BrushText></h3></div>
        <p>{field.description}</p>
        <span className="collection-count">{field.key === "life" ? "1913 — 1980" : `${WORKS.filter(work => work.cat === field.key).length} ${ta ? "படைப்புகள்" : "works"}`}</span>
      </Link>)}</div>
    </div>
  </section>;
}
