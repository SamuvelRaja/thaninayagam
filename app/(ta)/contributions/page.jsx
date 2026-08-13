import PageIntro from "@/app/components/PageIntro";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import SectionNext from "@/app/components/SectionNext";
import {
  contributionsTa,
  imagesTa,
  publicationsTa,
  timelineTa,
} from "@/app/lib/data.ta";

export const metadata = {
  title: "பங்களிப்புகள்",
  description:
    "தனிநாயகம் அடிகளாரின் வெளியீடு, நிறுவனங்கள், மாநாடுகள் மற்றும் ஆவணப்படுத்தப்பட்ட வாழ்க்கைக் காலவரிசை.",
};

export default function ContributionsPage() {
  return (
    <main id="main">
      <PageIntro
        label="பங்களிப்புகள்"
        title="பணியும் காலவரிசையும்"
        titleId="contributions-title"
        summary="வெளியீடு, நிறுவனங்கள், மாநாடுகள், ஆவண ஆய்வு — மற்றும் அவரது வாழ்க்கையின் மைல்கற்கள். நூலக மற்றும் நூல்பதிவு மூலங்களில் ஆவணப்படுத்தப்பட்டவை."
      >
        <nav className="page-hero-jump" aria-label="இப்பக்கத்தில்">
          <a href="#work-themes">பணித் தலைப்புகள்</a>
          <a href="#timeline">காலவரிசை</a>
          <a href="#publications-title">தேர்ந்தெடுத்த எழுத்துகள்</a>
        </nav>
      </PageIntro>
      <div className="content-section page-shell section-page">
        <div className="contribution-list" id="work-themes">
          {contributionsTa.map((item, index) => (
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
            <p className="section-label">அவர் ஒருங்கிணைத்த கூட்டம்</p>
            <h2 id="institutional-base-title">கோலாலம்பூர், ஏப்ரல் 1966</h2>
            <p>
              உலகத் தமிழாராய்ச்சி மன்றத்தின் பொதுச் செயலாளராக முதல் உலகத்
              தமிழாராய்ச்சி மாநாட்டை ஒருங்கிணைத்தார்—மலேசியப் பிரதமர்
              திறந்துவைத்தார், தமிழ்நாட்டு முதலமைச்சர் கலந்துகொண்டார்; இரு
              தொகுதி நடவடிக்கைகள் நிகழ்வின் முதன்மை ஆவணமாக உள்ளன.
              <Citation ids={[1, 2, 5, 10, 11]} />
            </p>
            <p>
              வெளியிடப்பட்ட நடவடிக்கைகளே அந்தக் கூட்டத்தின் முதன்மை
              நிறுவனப் பதிவாக உள்ளன.
            </p>
          </div>
          <Figure
            image={imagesTa.conference1966}
            citeIds={[5, 10, 11]}
            lang="ta"
          />
        </section>

        <section
          className="feature-section feature-section-reverse"
          aria-labelledby="journal-title"
        >
          <div className="feature-copy">
            <p className="section-label">அவர் நிறுவிய இதழ்</p>
            <h2 id="journal-title">
              <cite>Tamil Culture</cite>, 1952 முதல்
            </h2>
            <p>
              அவர் நிறுவி தொகுத்த ஆங்கில காலாண்டிதழ், ஏற்கனவே தமிழில்
              பணியாற்றாத பல்கலைக்கழகங்களுக்கும் தமிழாய்வை வாசிக்கக் கூடியதாக
              மாற்றியது. உயிர்வாழும் ஆரம்ப இதழ்களும் பின்னர் டிஜிட்டலாக்கப்பட்ட
              தொகுதிகளும் அந்தச் சர்வதேச நோக்கத்திற்கு முதன்மைச் சான்றாக உள்ளன.
              <Citation ids={[1, 4, 6, 11]} />
            </p>
          </div>
          <Figure
            image={imagesTa.tamilCulture}
            citeIds={[4, 6, 11]}
            lang="ta"
          />
        </section>

        <section
          className="timeline-section"
          id="timeline"
          aria-labelledby="timeline-heading"
        >
          <header className="timeline-section-head">
            <p className="section-label">ஆவணப்படுத்தப்பட்ட காலவரிசை</p>
            <h2 id="timeline-heading">ஆய்வும் சேவையும் நிறைந்த வாழ்க்கை</h2>
            <p>
              பிறப்பு முதல் பின்மரபுச் சிறப்புகள் வரை பதினேழு மைல்கற்கள்.
              ஒவ்வொரு பதிவும் அதை நிறுவப் பயன்படுத்தப்பட்ட மூலங்களுடன்
              இணைக்கப்பட்டுள்ளது.
            </p>
          </header>

          <Figure
            image={imagesTa.outdoorPortrait}
            className="section-figure timeline-figure"
            lang="ta"
          />

          <ol className="timeline-list">
            {timelineTa.map((item) => (
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
                      <Citation ids={item.sources} />
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="publications" aria-labelledby="publications-title">
          <div>
            <p className="section-label">தேர்ந்தெடுத்த எழுத்துகள்</p>
            <h2 id="publications-title">ஆவணப்படுத்தப்பட்ட வாசிப்புப் பட்டியல்</h2>
            <p className="publication-note">
              கீழே உள்ள தலைப்புகள் Open Library மற்றும் பிற நூல்பதிவுகளுக்கு
              முன்னுரிமை அளிக்கின்றன. கலைக்களஞ்சியப் பட்டியல்களைப் பதிப்பு
              உறுதிப்படுத்தும் வரை வழிகாட்டிகளாகவே கருதுங்கள்.
              <Citation ids={[7, 10, 11]} />
            </p>
          </div>
          <ol>
            {publicationsTa.map((publication) => (
              <li key={`${publication.year}-${publication.title}`}>
                <span>{publication.year || "—"}</span>
                <div>
                  <strong>
                    <cite>{publication.title}</cite>
                  </strong>
                  <p>{publication.detail}</p>
                  {publication.slug ? (
                    <a href={`/archive/documents/${publication.slug}/`}>
                      ஆவணகத்தில் திற
                    </a>
                  ) : (
                    <ExternalLink href={publication.url} lang="ta">
                      நூல்பதிவு அல்லது கலைக்களஞ்சியப் பதிவைக் காண
                    </ExternalLink>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <SectionNext
          lang="ta"
          href="/archive/#holdings"
          label="ஆவணகம்"
          title="எழுத்துகளையும் ஆவணங்களையும் உலாவுக"
        />
      </div>
    </main>
  );
}
