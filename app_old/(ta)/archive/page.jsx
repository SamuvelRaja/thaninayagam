import { Suspense } from "react";
import PageIntro from "@/app/components/PageIntro";
import ArchiveClient from "@/app/components/ArchiveClient";
import { archiveIndexTa, archiveRecordsTa, sourcesTa } from "@/app/lib/data.ta";
import { getDocumentsInNavOrder } from "@/app/lib/documents";

export const metadata = {
  title: "ஆவணகம்",
  description:
    "தனிநாயகம் அடிகளாரின் கட்டுரைகள், நூல்கள், தொகுப்புகள் — இத்தளத்தில் வாசிக்கக்கூடிய எண்ணிம ஆவணங்கள்.",
};

export default function ArchivePage() {
  const documents = getDocumentsInNavOrder("ta");

  return (
    <main id="main">
      <PageIntro
        label="ஆவணகம்"
        title="இங்கு வாசிக்கக்கூடிய எழுத்துகள்"
        titleId="archive-title"
        summary="தனிநாயகம் அடிகளாரின் கட்டுரைகள், நூல்கள், தொகுப்புகள் — இத்தளத்தில் வளரும் பட்டியல். எண்ணிக்கைகள் இறுதியானவை அல்ல; அவரது படைப்புகளைத் தேடி உறுதிப்படுத்தித் தொடர்ந்து சேர்த்துக் கொண்டிருக்கிறோம். ஒரு தொகுப்பைத் தேர்ந்தெடுக்கவும், அல்லது முழுப் பட்டியலைத் திறக்கவும்."
      />
      <Suspense fallback={<div className="content-section page-shell archive-shell"><p>ஏற்றப்படுகிறது...</p></div>}>
        <ArchiveClient
          documents={documents}
          indexGroups={archiveIndexTa}
          records={archiveRecordsTa}
          sources={sourcesTa}
          lang="ta"
        />
      </Suspense>
    </main>
  );
}
