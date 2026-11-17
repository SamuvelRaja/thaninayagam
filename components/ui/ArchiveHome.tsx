import { ArchivalTreasures } from "./ArchivalTreasures";
import { BrushText } from "@/components/ui/BrushText";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CollectionDirectory } from "./CollectionDirectory";
import { JourneyGrid } from "./JourneyGrid";
import { LivingHero, ArchiveArrow } from "./LivingHero";
import { HomeCatalogue } from "./HomeCatalogue";
import { HomeKatturaigal } from "./HomeKatturaigal";
import { LivingMetrics } from "./LivingMetrics";
import { getReadingAvailability } from "@/lib/documents";
import { WORKS } from "@/lib/data";

export function ArchiveHome({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  const prefix = ta ? "" : "/en";
  const readings = Object.fromEntries(WORKS.map(work => [work.slug, getReadingAvailability(work.slug, lang)]));
  return <>
    <Header lang={lang} current="home" />
    <main id="main" className="archive-home living-home brush-page">
      <LivingHero lang={lang} />
      <ArchivalTreasures lang={lang} />
      <CollectionDirectory lang={lang} />
      <HomeCatalogue lang={lang} readings={readings} />
      <HomeKatturaigal lang={lang} />
      <LivingMetrics lang={lang} />
      <JourneyGrid lang={lang} />
      <section className="living-closing"><div className="container"><div><p className="living-kicker">{ta ? "அறிவின் பயணம் தொடர்கிறது" : "A legacy that keeps growing"}</p><h2><BrushText>{ta ? "ஒரு நல்ல வாசிப்பிலிருந்து தொடங்குங்கள்." : "His curiosity remains open. So does this archive."}</BrushText></h2></div><Link className="living-button" href={`${prefix}/archive/`}>{ta ? "ஆவணகத்தை ஆராய்க" : "Explore the archive"}<ArchiveArrow /></Link></div></section>
    </main>
    <Footer lang={lang} />
  </>;
}
