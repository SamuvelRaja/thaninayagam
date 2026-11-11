import type { Metadata } from "next";
import { ArchiveHome } from "@/components/ui/ArchiveHome";
import { STRINGS } from "@/lib/data";

export const metadata: Metadata = {
  title: STRINGS.en.title,
  description: STRINGS.en.desc,
};

export default function EnglishHomePage() {
  return <ArchiveHome lang="en" />;
}
