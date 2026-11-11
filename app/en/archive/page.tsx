import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArchiveLibrary } from "@/components/interactive/ArchiveLibrary";
import { STRINGS } from "@/lib/data";

export const metadata: Metadata = {
  title: STRINGS.en.title,
  description: STRINGS.en.desc,
};

export default function EnglishArchivePage() {
  return (
    <>
      <Header lang="en" current="archive" />
      <main id="main" className="brush-page">
        <Suspense
          fallback={
            <section className="section section-archive" aria-busy="true">
              <div className="container">
                <header className="archive-heading"><h1>Explore his writings</h1></header>
                <p role="status">Loading library...</p>
              </div>
            </section>
          }
        >
          <ArchiveLibrary lang="en" />
        </Suspense>
      </main>
      <Footer lang="en" />
    </>
  );
}
