import { Citation } from "@/app/components/Links";
import Figure from "@/app/components/Figure";
import {
  KolamCorners,
  KolamField,
  KolamMedallion,
  Thoranam,
} from "@/app/components/Ornaments";
import {
  explorePagesTa,
  homeFactsTa,
  imagesTa,
  timelineTa,
} from "@/app/lib/data.ta";

export const metadata = {
  title: {
    absolute: "தனிநாயகம் அடிகளார் ஆவணகம்",
  },
  description:
    "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளார் (1913–1980) பற்றிய ஓர் அறிமுகம்.",
};

const timelinePreview = timelineTa.filter((item) =>
  ["1913", "1945–1949", "1951–1952", "1964", "1966"].includes(item.year),
);

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <Thoranam />
        <div className="masthead">
          <KolamField />
          <p className="masthead-tamil" lang="ta">
            அருள்திரு. முனைவர் சேவியர் எஸ். தனிநாயகம்
          </p>
          <h1 id="hero-title">தனிநாயகம் அடிகள்</h1>
          <p className="masthead-sub">தமிழின் உலகத் தூதர்</p>
          <p className="masthead-dates">
            <KolamMedallion className="masthead-seal" />
            <span>பிறப்பு 2 ஆகஸ்ட் 1913, கரம்பொன், யாழ்ப்பாணம்</span>
            <span className="masthead-dot" aria-hidden="true" />
            <span>இறப்பு 1 செப்டம்பர் 1980, யாழ்ப்பாணம்</span>
          </p>
        </div>

        <div className="lead-story">
          <div className="lead-copy">
            <p className="lead-kicker">
              தமிழாய்வை உலகளாவிய உரையாடலாக மாற்றிய அறிஞர்
            </p>
            <p className="lead">
              ஒரு கத்தோலிக்க குரு, மொழியியலாளர், மற்றும் இதழாசிரியர். இவர் தமிழ் ஆய்வுகளை உலகப் பல்கலைக்கழகங்களுக்குக் கொண்டு சென்றார்—உலக அறிஞர்களைத் தமிழுக்கும் கொண்டு வந்தார்.
              <Citation ids={[1, 2, 10, 11]} />
            </p>
            <p>
              அவர் <cite>Tamil Culture</cite> என்ற ஆங்கில காலாண்டிதழைத் தொடங்கினார், உலகத் தமிழாராய்ச்சி மன்றத்தை (IATR) இணைந்து நிறுவினார், மேலும் 1966 இல் முதல் உலகத் தமிழ் மாநாட்டை ஒருங்கிணைத்தார். அவரது நூலக ஆய்வுகள் சில பழமையான அச்சுத் தமிழ் நூல்களை அறிஞர்களின் கவனத்திற்குக் கொண்டுவந்தன.
              <Citation ids={[1, 4, 5, 8, 11]} />
            </p>
            <div className="hero-actions" aria-label="வாசிப்பைத் தொடங்க">
              <a className="button button-primary" href="/about/">
                அவரைப் பற்றி வாசிக்க
              </a>
              <a className="button button-secondary" href="/timeline/">
                காலக்கோட்டைக் காண
              </a>
            </div>
          </div>

          <Figure
            image={imagesTa.portrait}
            className="lead-figure lead-portrait"
            priority
            lang="ta"
            hideCaption
          />
        </div>
      </section>

      <nav className="contents-strip" aria-label="ஆவணக உள்ளடக்கங்கள்">
        <p className="contents-title">இந்த ஆவணகத்தில்</p>
        <ol>
          {explorePagesTa.map((page, index) => (
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

      <section
        className="fact-strip"
        aria-label="தனிநாயகம் அடிகளார் பற்றிய முக்கிய தகவல்கள்"
      >
        <dl className="fact-strip-list">
          {homeFactsTa.map((fact) => (
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
            <p className="section-label">சுருக்கமாக</p>
            <h2 id="known-for-title">மூன்று முக்கிய பங்களிப்புகள்</h2>
            <p>
              கீழே உள்ள மேலோட்டத்தைப் பார்த்துவிட்டு, இணைக்கப்பட்ட பக்கங்களில் முழுமையான விவரங்களை வாசிக்கவும்.
            </p>
          </div>

          <ul className="known-for-list">
            <li>
              <h3>
                <a href="/contributions/">ஆய்வு மற்றும் வெளியீடு</a>
              </h3>
              <p>
                செவ்வியல் தமிழ் ஆய்வுகள் மற்றும் சர்வதேச கல்வியாளர்களுக்காக எழுதப்பட்ட <cite>Tamil Culture</cite> ஆங்கில காலாண்டிதழ்.
              </p>
            </li>
            <li>
              <h3>
                <a href="/contributions/">உலகளாவிய ஒருங்கிணைப்பு</a>
              </h3>
              <p>
                1964 இல் உலகத் தமிழாராய்ச்சி மன்றத்தை (IATR) இணைந்து நிறுவியது மற்றும் 1966 இல் கோலாலம்பூரில் அதன் முதல் மாநாட்டை ஒருங்கிணைத்தது.
              </p>
            </li>
            <li>
              <h3>
                <a href="/archive/">ஆவண மீட்பு</a>
              </h3>
              <p>
                1554 ஆம் ஆண்டின் லூசோ-தமிழ் கார்த்திலா உட்பட, ஆரம்பகால அச்சுத் தமிழ் நூல்களை அறிஞர்களின் கவனத்திற்குக் கொண்டுவந்த நூலக ஆய்வுகள்.
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
            <p className="section-label">வாழ்க்கைச் சுருக்கம்</p>
            <h2 id="life-brief-title">எல்லைகளைக் கடந்து பணியாற்றிய ஒரு அறிஞர்</h2>
          </div>
          <div className="split-body">
            <div className="reading-copy">
              <p>
                1913 இல் யாழ்ப்பாணம் ஊர்காவற்றுறை அருகே கரம்பொனில் சேவியர் நிக்கோலஸ் ஸ்ரனிஸ்லாஸ் ஆகப் பிறந்த அவர், கொழும்பு மற்றும் ரோமில் குருத்துவப் பயிற்சி பெற்றார். பல ஐரோப்பிய மொழிகளைக் கற்றறிந்த அவர், தனது முப்பதுகளில் தமிழை முறையாகக் கற்கத் தொடங்கினார்.
                <Citation ids={[1, 10, 11]} />
              </p>
              <p>
                அந்தத் தாமதமான அழைப்பு அவரது வாழ்நாள் பணியாக மாறியது: ஒரு ஆங்கில காலாண்டிதழ், ஒரு சர்வதேச ஆராய்ச்சி மன்றம், முதல் உலகத் தமிழ் மாநாடு மற்றும் சில பழமையான அச்சுத் தமிழ் நூல்களை மீட்டெடுத்தல். தமிழ் ஆய்வுகள் நடைபெறும் ஒவ்வொரு கண்டத்திலும் அவர் உரையாற்றினார்—ஒரே ஆண்டில் 200க்கும் மேற்பட்ட உரைகளை நிகழ்த்தினார்.
                <Citation ids={[1, 2, 10, 11]} />
              </p>
              <p className="section-action">
                <a className="button button-secondary" href="/about/">
                  முழுமையான வாழ்க்கை வரலாற்றைத் தொடர
                </a>
              </p>
            </div>
            <aside
              className="quote-card kolam-frame"
              aria-label="ஊடகங்கள் அவரை எப்படி விவரித்தன"
            >
              <KolamCorners />
              <span className="quote-trace" lang="ta" aria-hidden="true">
                தமிழ்
              </span>
              <KolamMedallion className="quote-ornament" />
              <blockquote>
                <p>
                  “தமிழ் ஒரு செம்மொழி என்பதை உலகிற்கு உணர்த்தியவர்”
                </p>
                <footer>
                  — <cite>தி இந்து</cite>, அவரது நூற்றாண்டு விழாவை நினைவுகூர்ந்து, 2013
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
            <p className="section-label">அவர் தொடங்கிய பணிகள்</p>
            <h2 id="events-title">ஒரு இதழ் மற்றும் ஒரு உலக மாநாடு</h2>
            <p>
              அவர் நிறுவி வழிநடத்திய இரண்டு முயற்சிகளின் ஆவணப் பக்கங்கள்: <cite>Tamil Culture</cite> என்ற ஆங்கில காலாண்டிதழ் மற்றும் முதல் உலகத் தமிழ் ஆராய்ச்சி மாநாடு. <a href="/contributions/">பங்களிப்புகள்</a> பக்கம் மற்றும் <a href="/archive/">ஆவணகம்</a> ஆகியவற்றில் முழுமையான விவரங்கள் உள்ளன.
            </p>
          </div>

          <div className="figure-grid figure-grid-documents">
            <Figure
              image={imagesTa.tamilCulture}
              citeIds={[4, 6, 11]}
              lang="ta"
            />
            <Figure
              image={imagesTa.conference1966}
              citeIds={[5, 10, 11]}
              lang="ta"
            />
          </div>
        </section>
      </div>

      <div className="band band-ruled">
        <section
          className="content-section split-section"
          aria-labelledby="timeline-preview-title"
        >
          <div className="section-heading">
            <p className="section-label">வாழ்க்கைப் பயணம்</p>
            <h2 id="timeline-preview-title">தொடங்க ஐந்து தருணங்கள்</h2>
            <p>
              முழுமையான <a href="/timeline/">காலக்கோடு</a> 1913 முதல் 1981 வரையிலான பதினேழு மைல்கற்களை ஆவணப்படுத்துகிறது.
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
              முழுமையான காலக்கோட்டைத் திறக்க
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
            <p className="section-label">ஆவணகத்திலிருந்து</p>
            <h2 id="archive-teaser-title">அவர் மீட்டெடுத்த ஆவணங்கள்</h2>
            <p>
              <a href="/archive/">ஆவணகம் பக்கம்</a> பொது உரிமைப் பரப்பில் உள்ள ஸ்கேன்களை வழங்குகிறது மற்றும் அவரது இதழ், மாநாட்டு நடவடிக்கைகள் மற்றும் தொகுக்கப்பட்ட உரைகளுக்கான நூலக பதிவுகளுடன் இணைக்கிறது.
            </p>
          </div>

          <div className="archive-teaser archive-teaser-home">
            <div className="archive-teaser-copy">
              <h3>ஆவணகத்தில் உள்ளவை</h3>
              <ul className="check-list">
                <li>
                  1554 கார்த்திலா மற்றும் <cite>தம்பிரான் வணக்கம்</cite> (1578) உட்பட பொது உரிமைப் பரப்பில் உள்ள ஆரம்பகால அச்சுத் தமிழ் நூல்கள்
                </li>
                <li>
                  அவர் நிறுவி தொகுத்த <cite>Tamil Culture</cite> காலாண்டிதழின் டிஜிட்டல் தொகுதிகள்
                </li>
                <li>
                  1966 கோலாலம்பூர் மாநாட்டின் வெளியிடப்பட்ட நடவடிக்கைகள்
                </li>
                <li>1999 இல் வெளியிடப்பட்ட அவரது தொகுக்கப்பட்ட உரைகள்</li>
              </ul>
              <p className="section-action">
                <a className="button button-secondary" href="/archive/">
                  ஆவணகத்தைப் பார்வையிட
                </a>
              </p>
            </div>
            <div className="figure-grid figure-grid-documents">
              <Figure
                image={imagesTa.catechism}
                citeIds={[1, 8, 10]}
                lang="ta"
              />
              <Figure
                image={imagesTa.thambiran}
                citeIds={[10, 11, 14]}
                lang="ta"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="band band-ruled">
        <section className="content-section" aria-labelledby="explore-title">
          <div className="section-heading">
            <p className="section-label">இந்த ஆவணகத்தில் உள்ள அனைத்து பக்கங்களும்</p>
            <h2 id="explore-title">ஒவ்வொரு பகுதியும் இங்கிருந்து இணைக்கப்பட்டுள்ளது</h2>
            <p>
              இந்த ஐந்து பக்கங்களும் முழுமையான விவரங்களைக் கொண்டுள்ளன. ஒவ்வொன்றும் மற்றவற்றுடன் இணைக்கப்பட்டுள்ளதால், அடுத்து எங்கு செல்வது என்று நீங்கள் யோசிக்கத் தேவையில்லை.
            </p>
          </div>

          <nav
            className="explore-grid explore-grid-full"
            aria-label="தளத்தின் அனைத்துப் பக்கங்களும்"
          >
            {explorePagesTa.map((page, index) => (
              <a className="explore-card" href={page.href} key={page.href}>
                <span className="explore-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="explore-label">{page.label}</span>
                <strong>{page.title}</strong>
                <span>{page.summary}</span>
                <span className="explore-cta" aria-hidden="true">
                  பக்கத்தைத் திறக்க →
                </span>
              </a>
            ))}
          </nav>
        </section>
      </div>
    </main>
  );
}
