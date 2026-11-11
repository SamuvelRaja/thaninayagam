import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArchiveLibrary } from "@/components/interactive/ArchiveLibrary";

export default function ArchivePage() {
  return (
    <>
      <Header lang="ta" current="archive" />
      <main id="main" className="brush-page">
        <Suspense
          fallback={
            <section className="section section-archive" aria-busy="true">
              <div className="container">
                <header className="archive-heading"><h1>ஆவணகம்</h1></header>
                <p role="status">ஏற்றப்படுகிறது...</p>
              </div>
            </section>
          }
        >
          <ArchiveLibrary lang="ta" />
        </Suspense>
      </main>
      <Footer lang="ta" />
    </>
  );
}
