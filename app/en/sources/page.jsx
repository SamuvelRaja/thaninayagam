import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import { ExternalLink } from "@/app/components/Links";
import Figure from "@/app/components/Figure";
import { KolamCorners } from "@/app/components/Ornaments";
import { sources, images } from "@/app/lib/data";

export const metadata = {
  title: "Sources",
  description:
    "The documentary sources used to verify claims throughout the Thani Nayagam Digital Archive.",
};

export default function SourcesPage() {
  return (
    <main id="main">
      <div className="content-section page-shell">
        <PageIntro
          label="Sources and further reading"
          title="How this account was established"
          titleId="sources-title"
          summary="Source numbers throughout the site lead back to this list. External records open in a new tab. Government-library and bibliographic sources are preferred when encyclopaedia articles disagree."
        />

        <Figure image={images.portrait} className="section-figure" />

        <ol className="source-list">
          {sources.map((source) => (
            <li id={`source-${source.id}`} key={source.id}>
              <span className="source-number" aria-hidden="true">
                {source.id}
              </span>
              <div>
                <ExternalLink href={source.url}>{source.title}</ExternalLink>
                <p>{source.type}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside
          className="research-note kolam-frame"
          aria-labelledby="research-note-title"
        >
          <KolamCorners />
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

        <PageLinks current="/sources/" />
      </div>
    </main>
  );
}
