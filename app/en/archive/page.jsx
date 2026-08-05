import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import { KolamCorners } from "@/app/components/Ornaments";
import { archiveRecords, images, sources } from "@/app/lib/data";

export const metadata = {
  title: "Archive",
  description:
    "Public-domain documents and links to surviving library records connected with Thani Nayagam Adigal.",
};

export default function ArchivePage() {
  return (
    <main id="main">
      <div className="content-section page-shell">
        <PageIntro
          label="Archival Records"
          title="Preserved Archival Documents"
          titleId="archive-title"
          summary="This section presents preserved historical documents connected to his work. External records are linked directly to their respective library or encyclopaedia pages."
        />

        <section aria-labelledby="documents-title" className="archive-layout">
          <h2 id="documents-title" className="section-subhead">
            Early Tamil Print
          </h2>
          <p className="archive-note">
            The following documents represent significant sixteenth-century Tamil publications recovered through his European archival research. The Luso-Tamil Catechism was discovered in Lisbon in 1950, while <cite>Thambiran Vanakkam</cite> is another major recovery attributed to his efforts.
            <Citation ids={[1, 8, 10, 11, 14]} />
          </p>
          <div className="figure-grid figure-grid-documents">
            <Figure image={images.catechism} citeIds={[1, 8, 10]} />
            <Figure image={images.thambiran} citeIds={[10, 11, 14]} />
          </div>
        </section>

        <section aria-labelledby="initiated-title" className="archive-layout">
          <h2 id="initiated-title" className="section-subhead">
            Initiated Publications
          </h2>
          <p className="archive-note">
            Title pages from the <cite>Tamil Culture</cite> quarterly he founded and the published proceedings of the 1966 conference he organized. The corresponding library records are listed below.
            <Citation ids={[4, 5, 6]} />
          </p>
          <div className="figure-grid figure-grid-documents">
            <Figure image={images.tamilCulture} citeIds={[4, 6, 11]} />
            <Figure image={images.conference1966} citeIds={[5, 10, 11]} />
          </div>
        </section>

        <div className="archive-records">
          <h2>Online Records and Citations</h2>
          <p className="archive-note">
            Below is a list of accessible online records, biographies, and publications related to Thani Nayagam Adigal.
          </p>
          <ul>
            {archiveRecords.map((record) => (
              <li key={record.title}>
                <div>
                  <strong>
                    {record.cite ? (
                      <cite>{record.title}</cite>
                    ) : (
                      record.title
                    )}
                  </strong>
                  <span>{record.detail}</span>
                </div>
                <ExternalLink href={sources[record.urlIndex].url}>
                  View source
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        <section
          className="related-finds kolam-frame"
          aria-labelledby="related-finds-title"
        >
          <KolamCorners />
          <h2 id="related-finds-title">Related Discoveries in Early Tamil Print</h2>
          <p>
            In addition to the documents above, his archival research is associated with several other significant historical texts. These include early Tamil Christian publications, lexicographical works, and the first Tamil grammar authored by a foreign scholar:
          </p>
          <ul>
            <li>
              <cite>Kiristiani Vanakkam</cite> (1579)
            </li>
            <li>
              The Tamil–Portuguese dictionary of Antão de Proença, which he
              reprinted and released at the 1966 Kuala Lumpur conference
            </li>
            <li>
              <cite>Arte da Lingua Malabar</cite> (1549), Henrique Henriques’s
              grammar manuscript, published in English translation by Jeanne
              Hein in 2013
            </li>
          </ul>
          <p>
            <Citation ids={[10, 11]} />
            See also the <a href="/contributions/">contributions page</a> for
            how these finds fit his wider archival work, and the{" "}
            <a href="/sources/">sources page</a> for full citations.
          </p>
        </section>

        <PageLinks current="/archive/" />
      </div>
    </main>
  );
}
