import PageIntro from "@/app/components/PageIntro";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import SectionNext from "@/app/components/SectionNext";
import { contributions, images, publications, timeline } from "@/app/lib/data";

export const metadata = {
  title: "Contributions",
  description:
    "Publishing, institutions, conferences, and a documented chronology of Thani Nayagam Adigal’s life and work.",
};

export default function ContributionsPage() {
  return (
    <main id="main">
      <PageIntro
        label="Contributions"
        title="Work and chronology"
        titleId="contributions-title"
        summary="Publishing, institutions, conferences, archival research, and the milestones of his life—documented from library and bibliographic records."
      >
        <nav className="page-hero-jump" aria-label="On this page">
          <a href="#work-themes">Work themes</a>
          <a href="#timeline">Timeline</a>
          <a href="#publications-title">Selected writings</a>
        </nav>
      </PageIntro>
      <div className="content-section page-shell section-page">
        <div className="contribution-list" id="work-themes">
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
                    <Citation ids={item.sources} lang="en" />
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
            <h2 id="institutional-base-title">Kuala Lumpur, April 1966</h2>
            <p>
              As general secretary of the International Association for Tamil
              Research he organised the First International Conference-Seminar
              of Tamil Studies—opened by Malaysia’s prime minister, attended by
              Tamil Nadu’s chief minister, and published in two volumes of
              proceedings that remain a primary record of the event.
              <Citation ids={[1, 2, 5, 10, 11]} lang="en" />
            </p>
            <p>
              The published proceedings remain the primary institutional record
              of the gathering.
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
              <Citation ids={[1, 4, 6, 11]} lang="en" />
            </p>
          </div>
          <Figure image={images.tamilCulture} citeIds={[4, 6, 11]} />
        </section>

        <section
          className="timeline-section"
          id="timeline"
          aria-labelledby="timeline-heading"
        >
          <header className="timeline-section-head">
            <p className="section-label">Documented chronology</p>
            <h2 id="timeline-heading">A life of scholarship and service</h2>
            <p>
              Seventeen milestones from birth to posthumous honours. Each entry
              links to the sources used to establish it.
            </p>
          </header>

          <Figure
            image={images.outdoorPortrait}
            className="section-figure timeline-figure"
          />

          <ol className="timeline-list">
            {timeline.map((item) => (
              <li key={`${item.year}-${item.title}`}>
                <article>
                  <div className="timeline-meta">
                    <time
                      dateTime={
                        /^\d{4}/.test(item.year)
                          ? item.year.slice(0, 4)
                          : undefined
                      }
                    >
                      {item.year}
                    </time>
                    <span>{item.location}</span>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      {item.description}
                      <Citation ids={item.sources} lang="en" />
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="publications" aria-labelledby="publications-title">
          <div>
            <p className="section-label">Selected writings</p>
            <h2 id="publications-title">A documented reading list</h2>
            <p className="publication-note">
              Titles below prefer Open Library and other bibliographic records.
              Treat encyclopaedic lists as leads until an edition is verified.
              <Citation ids={[7, 10, 11]} lang="en" />
            </p>
          </div>
          <ol>
            {publications.map((publication) => (
              <li key={`${publication.year}-${publication.title}`}>
                <span>{publication.year || "—"}</span>
                <div>
                  <strong>
                    <cite>{publication.title}</cite>
                  </strong>
                  <p>{publication.detail}</p>
                  {publication.slug ? (
                    <a href={`/en/archive/documents/${publication.slug}/`}>
                      Open in archive
                    </a>
                  ) : (
                    <ExternalLink href={publication.url}>
                      View bibliographic or encyclopaedic record
                    </ExternalLink>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <SectionNext
          lang="en"
          href="/en/archive/#holdings"
          label="Archive"
          title="Browse writings and documents"
        />
      </div>
    </main>
  );
}
