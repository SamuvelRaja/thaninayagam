import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import { KolamCorners } from "@/app/components/Ornaments";
import { archiveRecords, images, sources } from "@/app/lib/data";
import ArchiveDocuments from "@/app/components/ArchiveDocuments";
import { getDocumentsInNavOrder } from "@/app/lib/documents";

export const metadata = {
  title: "Archive",
  description:
    "Public-domain documents and links to surviving library records connected with Thani Nayagam Adigal.",
};

export default function ArchivePage() {
  const documents = getDocumentsInNavOrder("en");
  return (
    <main id="main">
      <div className="content-section page-shell" style={{ paddingTop: "2rem" }}>
        <ArchiveDocuments documents={documents} lang="en" />
      </div>
    </main>
  );
}
