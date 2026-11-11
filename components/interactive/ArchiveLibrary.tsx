import { WORKS } from "@/lib/data";
import { getReadingAvailability } from "@/lib/documents";
import { ArchiveExplorer, type ArchiveReading } from "./ArchiveExplorer";

export function ArchiveLibrary({ lang }: { lang: "ta" | "en" }) {
  const readings: Record<string, ArchiveReading> = {};
  for (const work of WORKS) {
    readings[work.slug] = getReadingAvailability(work.slug, lang);
  }
  return <ArchiveExplorer lang={lang} readings={readings} />;
}
