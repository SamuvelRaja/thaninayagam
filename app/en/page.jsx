import { Citation } from "@/app/components/Links";
import Figure from "@/app/components/Figure";
import {
  KolamCorners,
  KolamField,
  KolamMedallion,
  Thoranam,
} from "@/app/components/Ornaments";
import { explorePages, homeFacts, images, timeline } from "@/app/lib/data";

export const metadata = {
  title: {
    absolute: "Thani Nayagam Digital Archive",
  },
  description:
    "Meet Rev. Dr. Xavier S. Thani Nayagam Adigal (1913–1980), priest, linguist, editor, and international Tamil scholar.",
};

const timelinePreview = timeline.filter((item) =>
  ["1913", "1945–1949", "1951–1952", "1964", "1966"].includes(item.year),
);

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <Thoranam />
        <div className="masthead">
          <KolamField />
          <p className="masthead-tamil">
            Rev. Dr. Xavier S. Thani Nayagam
          </p>
          <h1 id="hero-title">Thaninayagam Adigal</h1>
          <p className="masthead-sub">World Ambassador of Tamil</p>
          <p className="masthead-dates">
            <KolamMedallion className="masthead-seal" />
            <span>Born 2 August 1913, Karampon, Jaffna</span>
            <span className="masthead-dot" aria-hidden="true" />
            <span>Died 1 September 1980, Jaffna</span>
          </p>
        </div>

        <div className="lead-story">
          <div className="lead-copy">
            <p className="lead-kicker">
              The scholar who made Tamil studies a global conversation
            </p>
            <p className="lead">
              A Catholic priest, linguist, and editor who carried Tamil
              scholarship to universities around the world—and brought the
              world’s scholars to Tamil.
              <Citation ids={[1, 2, 10, 11]} />
            </p>
            <p>
              He founded the English-language quarterly <cite>Tamil Culture</cite>,
              co-founded the International Association for Tamil Research, and
              organised the first world conference of Tamil studies in 1966.
              His library research returned some of the earliest printed Tamil
              books to scholarly attention.
              <Citation ids={[1, 4, 5, 8, 11]} />
            </p>
            <div className="hero-actions" aria-label="Start reading">
              <a className="button button-primary" href="/about/">
                Read about him
              </a>
              <a className="button button-secondary" href="/timeline/">
                View the timeline
              </a>
            </div>
          </div>

          <Figure
            image={images.portrait}
            className="lead-figure lead-portrait"
            priority
            hideCaption
          />
        </div>
      </section>

      <nav className="contents-strip" aria-label="Archive contents">
        <p className="contents-title">In this archive</p>
        <ol>
          {explorePages.map((page, index) => (
            <li key={page.href}>
              <a href={page.href}>
                <span className="contents-no" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{page.label}</strong>
                <span>{page.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section className="fact-strip" aria-label="Key facts about Thani Nayagam">
        <dl className="fact-strip-list">
          {homeFacts.map((fact) => (
            <div key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="band">
        <section className="content-section" aria-labelledby="known-for-title">
          <div className="section-heading">
            <p className="section-label">At a glance</p>
            <h2 id="known-for-title">Known for three lasting contributions</h2>
            <p>
              Start with the overview below, then open the full account on the
              linked pages.
            </p>
          </div>

          <ul className="known-for-list">
            <li>
              <h3>
                <a href="/contributions/">Scholarship and publishing</a>
              </h3>
              <p>
                Classical Tamil research and the English-language quarterly{" "}
                <cite>Tamil Culture</cite>, written for an international
                academic audience.
              </p>
            </li>
            <li>
              <h3>
                <a href="/contributions/">Global collaboration</a>
              </h3>
              <p>
                Co-founding the International Association for Tamil Research in
                1964 and organising its first conference in Kuala Lumpur in
                1966.
              </p>
            </li>
            <li>
              <h3>
                <a href="/archive/">Archival recovery</a>
              </h3>
              <p>
                Library research that returned early Tamil print—including the
                1554 Luso-Tamil Catechism—to scholarly attention.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <div className="band band-ruled">
        <section
          className="content-section split-section"
          aria-labelledby="life-brief-title"
        >
          <div className="section-heading">
            <p className="section-label">His life in brief</p>
            <h2 id="life-brief-title">A scholar who worked across borders</h2>
          </div>
          <div className="split-body">
            <div className="reading-copy">
              <p>
                Born Xavier Nicholas Stanislaus in 1913 in Karampon, near
                Kayts in Jaffna, he trained for the priesthood in Colombo and
                Rome, mastering several European languages before turning to
                sustained formal study of Tamil in his thirties.
                <Citation ids={[1, 10, 11]} />
              </p>
              <p>
                That late vocation became a life’s work: an English-language
                quarterly, an international research association, the first
                world conference of Tamil studies, and the recovery of some of
                the earliest printed Tamil books. He lectured on every
                continent where Tamil scholarship had a foothold—more than 200
                lectures in a single year of travel.
                <Citation ids={[1, 2, 10, 11]} />
              </p>
              <p className="section-action">
                <a className="button button-secondary" href="/about/">
                  Continue to the full about page
                </a>
              </p>
            </div>
            <aside
              className="quote-card kolam-frame"
              aria-label="How the press described him"
            >
              <KolamCorners />
              <span className="quote-trace" lang="ta" aria-hidden="true">
                தமிழ்
              </span>
              <KolamMedallion className="quote-ornament" />
              <blockquote>
                <p>
                  “He who convinced the world that Tamil is a classical
                  language”
                </p>
                <footer>
                  — <cite>The Hindu</cite>, remembering his centenary, 2013
                  <Citation ids={[2]} />
                </footer>
              </blockquote>
            </aside>
          </div>
        </section>
      </div>

      <div className="band band-ruled">
        <section className="content-section" aria-labelledby="events-title">
          <div className="section-heading">
            <p className="section-label">Work he initiated</p>
            <h2 id="events-title">A journal and a world conference</h2>
            <p>
              Documentary pages from two undertakings he founded and led: the
              English-language quarterly <cite>Tamil Culture</cite>, and the
              first International Conference-Seminar of Tamil Studies. The{" "}
              <a href="/contributions/">contributions</a> page and the{" "}
              <a href="/archive/">archive</a> carry the fuller record.
            </p>
          </div>

          <div className="figure-grid figure-grid-documents">
            <Figure image={images.tamilCulture} citeIds={[4, 6, 11]} />
            <Figure image={images.conference1966} citeIds={[5, 10, 11]} />
          </div>
        </section>
      </div>

      <div className="band band-ruled">
        <section
          className="content-section split-section"
          aria-labelledby="timeline-preview-title"
        >
          <div className="section-heading">
            <p className="section-label">The shape of a life</p>
            <h2 id="timeline-preview-title">Five moments to begin with</h2>
            <p>
              The full <a href="/timeline/">timeline</a> documents seventeen
              milestones from 1913 to 1981.
            </p>
          </div>

          <ol className="timeline-preview-list">
            {timelinePreview.map((item) => (
              <li key={item.year}>
                <time
                  dateTime={
                    /^\d{4}/.test(item.year) ? item.year.slice(0, 4) : undefined
                  }
                >
                  {item.year}
                </time>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.location}</span>
                </div>
              </li>
            ))}
          </ol>

          <p className="section-action">
            <a className="button button-secondary" href="/timeline/">
              Open the full timeline
            </a>
          </p>
        </section>
      </div>

      <div className="band band-ruled">
        <section
          className="content-section split-section"
          aria-labelledby="archive-teaser-title"
        >
          <div className="section-heading">
            <p className="section-label">From the archive</p>
            <h2 id="archive-teaser-title">Documents he returned to light</h2>
            <p>
              The <a href="/archive/">archive page</a> reproduces public-domain
              scans and links to the library records for his journal,
              conference proceedings, and collected speeches.
            </p>
          </div>

          <div className="archive-teaser archive-teaser-home">
            <div className="archive-teaser-copy">
              <h3>What the archive holds</h3>
              <ul className="check-list">
                <li>
                  Early Tamil printed books in the public domain, including the
                  1554 Catechism and <cite>Thambiran Vanakkam</cite> (1578)
                </li>
                <li>
                  Digitised volumes of <cite>Tamil Culture</cite>, the quarterly
                  he founded and edited
                </li>
                <li>
                  The published proceedings of the 1966 Kuala Lumpur conference
                </li>
                <li>His collected speeches, published in 1999</li>
              </ul>
              <p className="section-action">
                <a className="button button-secondary" href="/archive/">
                  Browse the archive
                </a>
              </p>
            </div>
            <div className="figure-grid figure-grid-documents">
              <Figure image={images.catechism} citeIds={[1, 8, 10]} />
              <Figure image={images.thambiran} citeIds={[10, 11, 14]} />
            </div>
          </div>
        </section>
      </div>

      <div className="band band-ruled">
        <section className="content-section" aria-labelledby="explore-title">
          <div className="section-heading">
            <p className="section-label">All pages in this archive</p>
            <h2 id="explore-title">Every section, linked from here</h2>
            <p>
              These five pages hold the full account. Each one links onward to
              the others, so you never have to guess where to go next.
            </p>
          </div>

          <nav className="explore-grid explore-grid-full" aria-label="All site pages">
            {explorePages.map((page, index) => (
              <a className="explore-card" href={page.href} key={page.href}>
                <span className="explore-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="explore-label">{page.label}</span>
                <strong>{page.title}</strong>
                <span>{page.summary}</span>
                <span className="explore-cta" aria-hidden="true">
                  Open page →
                </span>
              </a>
            ))}
          </nav>
        </section>
      </div>
    </main>
  );
}
