import PageIntro from "@/app/components/PageIntro";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import SectionNext from "@/app/components/SectionNext";
import {
  images,
  sources,
  sponsorSupport,
  sponsors,
} from "@/app/lib/data";

const bookRecord = sources.find((item) => item.id === 3);

export const metadata = {
  title: "Support",
  description:
    "How to support the Thani Nayagam Digital Archive—an initiative rooted in Rev. Dr. Amudhan Adigal’s biography and memorial work for Thani Nayagam Adigal.",
};

export default function SponsorsPage() {
  return (
    <main id="main">
      <PageIntro
        label="Support"
        title="Support this archive"
        titleId="sponsors-title"
        summary="This free archive continues Rev. Dr. Amudhan Adigal’s work to keep Thani Nayagam Adigal’s life and writings before the public. Your help grows digitisation and new holdings."
      >
        <nav className="page-hero-jump" aria-label="On this page">
          <a href="#initiative">Amudhan Adigal</a>
          <a href="#book">His book</a>
          <a href="#support">How to help</a>
          <a href="#sponsors-list">Helpers</a>
        </nav>
      </PageIntro>

      <div className="content-section page-shell section-page sponsors-page">
        <section
          className="sponsors-initiative"
          id="initiative"
          aria-labelledby="initiative-title"
        >
          <div className="sponsors-media">
            <Figure
              image={images.amudhanAdigal}
              className="section-figure sponsors-portrait"
              citeIds={[42, 41]}
            />
            <Figure
              image={images.amudhanThaniBook}
              className="section-figure sponsors-book"
              citeIds={[43, 3]}
            />
          </div>

          <div className="sponsors-mission-copy">
            <p className="section-label">Primary initiative</p>
            <h2 id="initiative-title">Rev. Dr. Amudhan Adigal</h2>
            <p>
              <strong>Amudhan Adigal</strong> (b. 18 April 1943, Punnaikayal) is
              a Catholic priest, writer, and editor. He served as principal of
              the Thani Nayagam Adigal College of Journalism and as general
              secretary of the Thani Nayagam Adigal centenary committee—work
              that kept Adigal’s scholarly legacy in public view.
              <Citation ids={[41]} lang="en" />
            </p>
            <p>
              His connection to Thani Nayagam Adigal is documentary as well as
              institutional. He wrote the Tamil biography{" "}
              <cite>Thani Nayagam Adigal</cite> (Tamil Digital Library record,
              1993) and the longer memorial title{" "}
              <cite>
                உலகெல்லாம் தமிழ் முழக்கம் தனிநாயகம் எனும் தமிழ் நாயகம்
              </cite>
              , and published the English profile “The roving Ambassador of
              Tamil.”
              <Citation ids={[3, 12, 41]} lang="en" />
            </p>
            <p>
              This digital archive takes that line as its{" "}
              <strong>primary initiative</strong>: to gather Thani Nayagam
              Adigal’s writings so students, scholars, and the public can read
              them freely. See the{" "}
              <ExternalLink
                href="https://tamil.wiki/wiki/%E0%AE%85%E0%AE%AE%E0%AF%81%E0%AE%A4%E0%AE%A9%E0%AF%8D_%E0%AE%85%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D"
                lang="en"
              >
                Tamil Wiki article on Amudhan Adigal
              </ExternalLink>
              .
            </p>
          </div>
        </section>

        <aside
          className="sponsors-book-note ui-panel"
          id="book"
          aria-labelledby="book-title"
        >
          <p className="section-label">Connection in print</p>
          <h2 id="book-title">His book on Thani Nayagam Adigal</h2>
          <p>
            Amudhan Adigal’s biography is the main modern Tamil book-length
            account of Thani Nayagam Adigal’s life. The cover shown here is from
            the Tamil Wiki photographic record; the bibliographic entry is held
            at the Tamil Digital Library.
            <Citation ids={[3, 43]} lang="en" />
          </p>
          {bookRecord ? (
            <p>
              <ExternalLink href={bookRecord.url} lang="en">
                Open the TDL record: {bookRecord.title}
              </ExternalLink>
            </p>
          ) : null}
          <p>
            Holdings on this site grow as texts are verified and added—counts
            are not final. Support below helps continue that work in the spirit
            of Amudhan Adigal’s memorial scholarship.
          </p>
        </aside>

        <section
          className="sponsors-support ui-panel"
          id="support"
          aria-labelledby="support-title"
        >
          <p className="section-label">Help</p>
          <h2 id="support-title">How to help</h2>
          <p>
            Gifts may be sent by cheque or demand draft in the name{" "}
            <strong>{sponsorSupport.chequeName}</strong>, or by bank transfer
            using the details below. Replace placeholder bank fields before
            inviting public donations.
          </p>
          <p>{sponsorSupport.note}</p>

          <h3 id="bank-title">Bank account detail</h3>
          <dl className="sponsors-bank" aria-labelledby="bank-title">
            <div>
              <dt>A/C Name</dt>
              <dd>{sponsorSupport.accountName}</dd>
            </div>
            <div>
              <dt>A/C No</dt>
              <dd>{sponsorSupport.accountNumber}</dd>
            </div>
            <div>
              <dt>Bank</dt>
              <dd>{sponsorSupport.bank}</dd>
            </div>
            <div>
              <dt>Branch</dt>
              <dd>{sponsorSupport.branch}</dd>
            </div>
            <div>
              <dt>IFSC</dt>
              <dd>
                <code>{sponsorSupport.ifsc}</code>
              </dd>
            </div>
          </dl>
        </section>

        <section
          className="sponsors-register"
          id="sponsors-list"
          aria-labelledby="sponsors-list-title"
        >
          <header className="sponsors-register-head">
            <p className="section-label">Register</p>
            <h2 id="sponsors-list-title">Those who have helped</h2>
            <p>
              Numbered list of helpers—same clear table pattern used for archive
              holdings.
            </p>
          </header>

          {sponsors.length === 0 ? (
            <p className="archive-empty" role="status">
              No helpers are listed yet. When gifts are recorded, names, places,
              and amounts will appear here in numbered order.
            </p>
          ) : (
            <div className="archive-register-wrap">
              <table className="archive-register sponsors-table">
                <caption className="visually-hidden">
                  Support register: {sponsors.length} helpers
                </caption>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Place</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {sponsors.map((sponsor, index) => (
                    <tr key={`${sponsor.name}-${index}`}>
                      <td className="archive-register-no">{index + 1}</td>
                      <td>
                        <strong>{sponsor.name}</strong>
                      </td>
                      <td>{sponsor.place || "—"}</td>
                      <td>{sponsor.amount || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <SectionNext
          lang="en"
          href="/en/archive/#holdings"
          label="Archive"
          title="Browse writings on this site"
        />
      </div>
    </main>
  );
}
