import { Suspense } from "react";
import PageIntro from "@/app/components/PageIntro";
import ArchiveClient from "@/app/components/ArchiveClient";
import { archiveIndex, archiveRecords, sources } from "@/app/lib/data";
import { getDocumentsInNavOrder } from "@/app/lib/documents";

export const metadata = {
  title: "Archive",
  description:
    "A growing register of Thani Nayagam Adigal’s writings on this site—essays, books, and compiled volumes.",
};

export default function ArchivePage() {
  const documents = getDocumentsInNavOrder("en");

  return (
    <main id="main">
      <PageIntro
        label="Archive"
        title="Writings you can open here"
        titleId="archive-title"
        summary="A growing register of Thani Nayagam Adigal’s writings on this site—essays, books, and compiled volumes. Counts are not final: we are still searching, verifying, and adding his work. Pick a subject path, or open the full list."
      />
      <Suspense fallback={<div className="content-section page-shell archive-shell"><p>Loading archive...</p></div>}>
        <ArchiveClient
          documents={documents}
          indexGroups={archiveIndex}
          records={archiveRecords}
          sources={sources}
          lang="en"
        />
      </Suspense>
    </main>
  );
}
