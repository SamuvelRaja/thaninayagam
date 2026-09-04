import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArchiveExplorer } from "@/components/interactive/ArchiveExplorer";

export default function ArchivePage() {
  return (
    <>
      <Header lang="ta" current="archive" />
      <main id="main">
        <PageHeader
          slug="archive"
          title="முழு ஆவணக் களஞ்சியம்"
          lead="தனிநாயக அடிகளாரின் அரிய நூல்கள், ஆய்விதழ்கள், சர்வதேச மாநாட்டு நடவடிக்கைகள் மற்றும் வரலாற்றுப் பதிவுகள்."
        />
        <Suspense fallback={<div className="container" style={{ padding: "40px 0" }}>ஏற்றப்படுகிறது...</div>}>
          <ArchiveExplorer lang="ta" />
        </Suspense>
      </main>
      <Footer lang="ta" />
    </>
  );
}
