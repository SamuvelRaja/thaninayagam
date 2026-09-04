import PageIntro from "@/app/components/PageIntro";
import Figure from "@/app/components/Figure";
import SectionNext from "@/app/components/SectionNext";
import OnThisPage from "@/app/components/OnThisPage";
import { images } from "@/app/lib/data";

export const metadata = {
  title: "Biography",
  description:
    "A verified biography of Rev. Dr. Xavier S. Thani Nayagam Adigal drawn from government-library, bibliographic, and encyclopaedic sources.",
};

const onThisPage = [
  { href: "#early-life-title", label: "Early life and family" },
  { href: "#education-title", label: "Education across languages" },
  { href: "#tamil-vocation-title", label: "Tamil becomes a vocation" },
  { href: "#academic-career-title", label: "An international academic career" },
  { href: "#legacy-work-title", label: "Publishing, archives, and institutions" },
  { href: "#final-years-title", label: "Final years and honours" },
];

export default function BiographyPage() {
  return (
    <main id="main">
      <PageIntro
        label="About"
        title="A scholar who worked across languages and borders"
        titleId="about-title"
        summary="A sourced biographical essay drawn from government-library records, contemporary journalism, and bibliographic sources. Primary records are preferred when accounts disagree."
      />
      <div className="content-section page-shell biography-page">
        <aside className="at-a-glance" aria-labelledby="glance-title">
          <h2 id="glance-title">At a glance</h2>
          <dl>
            <div>
              <dt>Lifespan</dt>
              <dd>2 August 1913 – 1 September 1980</dd>
            </div>
            <div>
              <dt>Birthplace</dt>
              <dd>Karampon, near Kayts, Jaffna</dd>
            </div>
            <div>
              <dt>Name</dt>
              <dd>
                Born Xavier Nicholas Stanislaus; “Thani Nayagam” means “lone
                hero”
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>
                Tamil, English, Latin, and several other European and classical
                languages
              </dd>
            </div>
            <div>
              <dt>Two doctorates</dt>
              <dd>Theology in Rome and education in London</dd>
            </div>
            <div>
              <dt>1952</dt>
              <dd>
                <cite>Tamil Culture</cite> quarterly founded
              </dd>
            </div>
            <div>
              <dt>1964</dt>
              <dd>International Association for Tamil Research established</dd>
            </div>
            <div>
              <dt>1966</dt>
              <dd>First international conference-seminar in Kuala Lumpur</dd>
            </div>
          </dl>
        </aside>

        <div className="section-with-toc">
          <div className="biography-sections">
            <section aria-labelledby="early-life-title">
              <h2 id="early-life-title">Early life and family</h2>
              <div className="reading-copy">
                <p className="lead">
                  Born Xavier Nicholas Stanislaus on 2 August 1913 in Karampon,
                  a village near Kayts (Ūr kāvaṟtuṟai) in the Jaffna district,
                  he later took the name Xavier S. Thani Nayagam after becoming
                  a Roman Catholic priest. “Thani Nayagam” is often explained
                  as “lone hero.”
                </p>
                <p>
                  His parents were Naganathan Stanislaus and Cecilia
                  Bastiampillai, and his paternal grandfather, Thaninayaga
                  Mudali, came from the island of Neduntheevu (Delft), off the
                  Jaffna coast. He studied at St. Anthony’s College, Kayts, and
                  then at St. Patrick’s College, Jaffna (1920–1922), receiving
                  an English-medium education.
                </p>
              </div>
            </section>

            <section aria-labelledby="education-title">
              <h2 id="education-title">Education across languages</h2>
              <div className="reading-copy">
                <p>
                  From 1931 to 1934 he trained at St. Bernard’s Seminary in
                  Colombo, completing a B.A. in Philosophy. From 1934 to 1939,
                  while attached to the Trivandrum diocese, he studied in Rome
                  at the Pontifical Urban University and completed a Doctor of
                  Divinity on the Carthaginian clergy; the dissertation was
                  published as a book in 1960.
                </p>
                <p>
                  During these years he became fluent in English, Latin,
                  Italian, French, German, Spanish, and Portuguese, and later
                  added Russian, Greek, Hebrew, Sinhala, and formal Tamil—a
                  polyglot formation that let him lecture and pursue archival
                  work across many countries. His Roman years also gave him
                  lasting contacts among international scholars.
                </p>
              </div>
            </section>

            <section aria-labelledby="tamil-vocation-title">
              <h2 id="tamil-vocation-title">Tamil becomes a vocation</h2>
              <div className="reading-copy">
                <p>
                  Though Tamil by birth, he undertook sustained formal study of
                  the language later in life. As assistant headmaster of St.
                  Theresa’s convent school in Vadakkankulam, Tirunelveli
                  District, between 1940 and 1945, he began learning Tamil
                  systematically under Pandit Gurusamy Subramaniya Iyer.
                </p>
                <p>
                  In 1945 he entered Annamalai University to study Tamil
                  literature. Tamil Wikipedia records that Vice-Chancellor
                  Ratnasamy and Professor T. P. Meenakshisundaran, recognising
                  his maturity in the subject, allowed him to proceed directly
                  to postgraduate work. From 1947 to 1949 he completed M.Litt.
                  research on nature in Sangam poetry—the first Tamil research
                  he undertook, and the path he followed for the rest of his
                  life.
                </p>
              </div>

              <Figure
                image={images.portrait}
                className="section-figure"
              />
            </section>

            <section aria-labelledby="academic-career-title">
              <h2 id="academic-career-title">An international academic career</h2>
              <div className="reading-copy">
                <p>
                  From 1952 to 1961 he taught at the University of Ceylon as a
                  lecturer in education. During that period he completed a
                  second doctorate at the University of London (1955–1957), on
                  education through Tamil literature.
                </p>
                <p>
                  In 1961 he moved to the University of Malaya, where he led
                  Indian Studies and held the chair of Tamil—Tamil Wikipedia
                  places the appointment through 1968—and helped make Kuala
                  Lumpur an important meeting point for Tamil scholarship. He
                  left Malaysia in 1969 and later taught at the universities of
                  Paris and Naples before returning to Sri Lanka.
                </p>
                <p>
                  Lecture tours took him to Japan and to several countries in
                  the Americas, including Chile, Brazil, Peru, Mexico, Ecuador,
                  and the United States. Both the Anna Centenary Library and
                  Tamil Wikipedia record that he delivered more than 200
                  lectures during one year of travel.
                </p>
              </div>

              <div
                className="photographic-record"
                aria-labelledby="photographic-record-title"
              >
                <header className="photographic-record-head">
                  <p className="section-label">Photographic record</p>
                  <h3 id="photographic-record-title">
                    The scholar in public life
                  </h3>
                  <p>
                    Period portraits and documentary photographs place the
                    formal likeness in a wider record of travel, collaboration,
                    and international gathering.
                  </p>
                </header>
                <div className="photographic-record-grid">
                  <Figure image={images.withColleague} />
                  <Figure image={images.outdoorPortrait} />
                  <Figure image={images.conferenceSecond} />
                  <Figure image={images.archivalPortrait} />
                </div>
              </div>
            </section>

            <section aria-labelledby="legacy-work-title">
              <h2 id="legacy-work-title">
                Publishing, archives, and institutions
              </h2>
              <div className="reading-copy">
                <p>
                  He established <cite>Tamil Culture</cite>, an English-language
                  quarterly that connected scholars across universities and
                  disciplines, and in 1961 founded the Academy of Tamil Culture
                  in Madras. Surviving early issues provide primary evidence of
                  the journal’s international ambition.
                </p>
                <p>
                  European library research brought early Tamil print and
                  manuscripts back into scholarly view, including the 1554
                  Luso-Tamil Catechism, identified in Lisbon in 1950. Early
                  issues of <cite>Tamil Culture</cite> and related holdings are
                  catalogued in this archive.
                </p>
                <p>
                  In January 1964, working with Kamil Zvelebil and V. I.
                  Subramaniam, he helped establish the International Association
                  for Tamil Research. Two years later he organised its first
                  international conference-seminar in Kuala Lumpur—an
                  institutional legacy that continued beyond his death.
                </p>
              </div>
            </section>

            <section aria-labelledby="final-years-title">
              <h2 id="final-years-title">Final years and honours</h2>
              <div className="reading-copy">
                <p>
                  In April 1980 he delivered the Thanthai Chelva Memorial
                  Lecture in Colombo, and in May he attended the release of
                  Pandit K. P. Ratnam’s book <cite>Tamilmarai Virundhu</cite>{" "}
                  at Velanai. His health failing, he died in Jaffna on the
                  evening of 1 September 1980.
                </p>
                <p>
                  In 1981 the fifth International Conference-Seminar of Tamil
                  Studies in Madurai recorded its condolence and unveiled a
                  statue in his honour, and the University of Jaffna conferred
                  a posthumous doctorate—recognition of a life spent making
                  Tamil studies a sustained global conversation.
                </p>
              </div>
            </section>
          </div>

          <OnThisPage items={onThisPage} lang="en" />
        </div>

        <SectionNext
          lang="en"
          href="/en/contributions/#timeline"
          label="Contributions"
          title="Work themes and seventeen milestones"
        />
      </div>
    </main>
  );
}
