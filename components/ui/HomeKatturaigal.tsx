import Link from "next/link";
import { BrushText } from "@/components/ui/BrushText";
import { KatturaiCard } from "@/components/ui/KatturaiCard";
import { ArchiveArrow } from "@/components/ui/LivingHero";
import { getAllKatturaigal } from "@/lib/katturaigal";

export function HomeKatturaigal({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  const prefix = ta ? "" : "/en";
  const katturaigal = getAllKatturaigal();
  const featured = katturaigal[0];

  if (!featured) return null;

  return (
    <section
      className="section living-katturaigal-section"
      id="katturaigal"
      aria-labelledby="home-katturaigal-title"
    >
      <div className="container">
        <div className="living-section-heading katturaigal-section-heading">
          <h2 id="home-katturaigal-title">
            <BrushText>{ta ? "கட்டுரைகள்" : "Essays"}</BrushText>
          </h2>
          <Link className="living-text-link" href={`${prefix}/katturaigal/`}>
            {ta ? "அனைத்துக் கட்டுரைகள்" : "View all essays"}
            <ArchiveArrow />
          </Link>
        </div>

        <KatturaiCard essay={featured} lang={lang} featured />
      </div>
    </section>
  );
}
