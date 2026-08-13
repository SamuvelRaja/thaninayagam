import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import { KolamCorners } from "@/app/components/Ornaments";
import { archiveRecordsTa, imagesTa, sourcesTa } from "@/app/lib/data.ta";
import ArchiveDocuments from "@/app/components/ArchiveDocuments";
import { getDocumentsInNavOrder } from "@/app/lib/documents";

export const metadata = {
  title: "ஆவணகம்",
  description:
    "தனிநாயகம் அடிகளுடன் தொடர்புடைய பொது உரிமைப் பரப்பு ஆவணங்களும் உயிர்வாழும் நூலகப் பதிவு இணைப்புகளும்.",
};

export default function ArchivePage() {
  const documents = getDocumentsInNavOrder("ta");
  return (
    <main id="main">
      <div className="content-section page-shell" style={{ paddingTop: "2rem" }}>
        <ArchiveDocuments documents={documents} lang="ta" />
      </div>
    </main>
  );
}
