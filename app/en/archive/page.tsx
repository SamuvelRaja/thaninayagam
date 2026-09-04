import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArchiveExplorer } from "@/components/interactive/ArchiveExplorer";
import { STRINGS } from "@/lib/data";

export const metadata: Metadata = {
  title: STRINGS.en.title,
  description: STRINGS.en.desc,
};

export default function EnglishArchivePage() {
  return (
    <>
      <Header lang="en" current="archive" />
      <main id="main">
        <PageHeader
          slug="archive"
          title="Complete Archive Catalog"
          lead="Searchable primary monographs, journal volumes, conference proceedings, and historical records."
        />
        <Suspense fallback={<div className="container" style={{ padding: "40px 0" }}>Loading library...</div>}>
          <ArchiveExplorer lang="en" />
        </Suspense>
      </main>
      <Footer lang="en" />
    </>
  );
}
