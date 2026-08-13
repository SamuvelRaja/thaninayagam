import PageIntro from "@/app/components/PageIntro";
import { ExternalLink } from "@/app/components/Links";
import Figure from "@/app/components/Figure";
import SectionNext from "@/app/components/SectionNext";
import { sources, images } from "@/app/lib/data";

export const metadata = {
  title: "Sources",
  description:
    "The documentary sources used to verify claims throughout the Thani Nayagam Digital Archive.",
};

export default function SourcesPage() {
  return (
    <main id="main">
      <PageIntro
        label="Sources and further reading"
        title="How this account was established"
        titleId="sources-title"
        summary="Source links throughout the site lead back to this bibliography. Government-library and bibliographic records are preferred when encyclopaedia articles disagree."
      />
      <div className="content-section page-shell section-page">
        <Figure image={images.portrait} className="section-figure" />

        <ul className="source-list">
          {sources.map((source) => (
            <li id={`source-${source.id}`} key={source.id}>
              <div>
                <ExternalLink href={source.url}>{source.title}</ExternalLink>
                <p>{source.type}</p>
              </div>
            </li>
          ))}
        </ul>

        <aside className="research-note ui-panel" aria-labelledby="research-note-title">
          <h2 id="research-note-title">Research note</h2>
          <p>
            Some sources differ on the inaugural year of <cite>Tamil Culture</cite>,
            the exact end dates of university appointments, and the full list of
            early Tamil books recovered during his European library visits. This
            archive uses careful wording where the documentary record remains
            incomplete. English Wikipedia sometimes says “Tamil Studies” for the
            journal; surviving library issues and Tamil Wikipedia support the
            title <cite>Tamil Culture</cite>. Tamil Wikipedia separately records
            that he edited the <cite>Journal of Tamil Studies</cite> from
            Malaysia after the 1966 conference, which may explain the
            confusion.
          </p>
          <p>
            Images reproduced on this site are either public-domain documents or
            photographs shared under a Creative Commons licence; each caption
            names the creator and licence and links to the file record.
          </p>
        </aside>

        <SectionNext
          lang="en"
          href="/en/"
          label="Home"
          title="Return to the archive portal"
        />
      </div>
    </main>
  );
}
