import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import { KolamCorners } from "@/app/components/Ornaments";
import { contributions, furtherTitles, images, publications } from "@/app/lib/data";

export const metadata = {
  title: "Contributions",
  description:
    "Publishing, institutions, conferences, archival research, reference works, lecture tours, and selected writings of Thani Nayagam Adigal.",
};

export default function ContributionsPage() {
  return (
    <main id="main">
      <div className="content-section page-shell">
        <PageIntro
          label="Contributions"
          title="Work designed to connect people"
          titleId="contributions-title"
          summary="His contribution extended beyond authorship to publishing, archival research, institutions, international gatherings, reference works, and a sustained lecture circuit. Tamil Wikipedia credits him with 137 books and booklets in Tamil and English."
        />

        <div className="contribution-list">
          {contributions.map((item, index) => (
            <article key={item.title}>
              <p className="item-number">
                {String(index + 1).padStart(2, "0")} · {item.type}
              </p>
              <h2>{item.title}</h2>
              {item.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  {paragraph}
                  {paragraphIndex === item.paragraphs.length - 1 ? (
                    <Citation ids={item.sources} />
                  ) : null}
                </p>
              ))}
            </article>
          ))}
        </div>

        <section
          className="feature-section"
          aria-labelledby="institutional-base-title"
        >
          <div className="feature-copy">
            <p className="section-label">The gathering he organised</p>
            <h2 id="institutional-base-title">
              Kuala Lumpur, April 1966
            </h2>
            <p>
              As general secretary of the International Association for Tamil
              Research he organised the First International Conference-Seminar
              of Tamil Studies—opened by Malaysia’s prime minister, attended by
              Tamil Nadu’s chief minister, and published in two volumes of
              proceedings that remain a primary record of the event.
              <Citation ids={[1, 2, 5, 10, 11]} />
            </p>
            <p>
              The <a href="/timeline/">timeline</a> places the conference in
              sequence, and the <a href="/archive/">archive</a> links to the
              published proceedings themselves.
            </p>
          </div>
          <Figure image={images.conference1966} citeIds={[5, 10, 11]} />
        </section>

        <section
          className="feature-section feature-section-reverse"
          aria-labelledby="journal-title"
        >
          <div className="feature-copy">
            <p className="section-label">The journal he founded</p>
            <h2 id="journal-title">
              <cite>Tamil Culture</cite>, from 1952
            </h2>
            <p>
              The English-language quarterly he founded and edited made Tamil
              scholarship readable to universities that did not already work in
              Tamil. Surviving early issues—and the collected volumes digitised
              since—are primary evidence of that international ambition.
              <Citation ids={[1, 4, 6, 11]} />
            </p>
          </div>
          <Figure image={images.tamilCulture} citeIds={[4, 6, 11]} />
        </section>

        <section className="publications" aria-labelledby="publications-title">
          <div>
            <p className="section-label">Selected writings</p>
            <h2 id="publications-title">A documented reading list</h2>
            <p className="publication-note">
              Titles below combine Open Library bibliographic records with works
              named in English and Tamil Wikipedia. Prefer library records when
              checking a specific edition.
              <Citation ids={[7, 10, 11]} />
            </p>
          </div>
          <ol>
            {publications.map((publication) => (
              <li key={`${publication.year}-${publication.title}`}>
                <span>{publication.year}</span>
                <div>
                  <strong>
                    <cite>{publication.title}</cite>
                  </strong>
                  <p>{publication.detail}</p>
                  <ExternalLink href={publication.url}>
                    View bibliographic or encyclopaedic record
                  </ExternalLink>
                </div>
              </li>
            ))}
          </ol>

          <div className="further-titles kolam-frame">
            <KolamCorners />
            <h3>Further titles named in Tamil Wikipedia</h3>
            <ul>
              {furtherTitles.map((title) => (
                <li key={title}>
                  <cite>{title}</cite>
                </li>
              ))}
            </ul>
            <p>
              Tamil Wikipedia also records that some thirty of his research
              articles appeared in <cite>Tamil Culture</cite> and around
              seventy more in other journals and conference volumes.
              <Citation ids={[11]} />
            </p>
          </div>
        </section>

        <PageLinks current="/contributions/" />
      </div>
    </main>
  );
}
