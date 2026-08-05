import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import { KolamCorners } from "@/app/components/Ornaments";
import {
  contributionsTa,
  furtherTitlesTa,
  imagesTa,
  publicationsTa,
} from "@/app/lib/data.ta";

export const metadata = {
  title: "பங்களிப்புகள்",
  description:
    "தனிநாயகம் அடிகளாரின் வெளியீடு, நிறுவனங்கள், மாநாடுகள், ஆவண ஆய்வு, குறிப்பு நூல்கள், உரைச் சுற்றுகள் மற்றும் தேர்ந்தெடுத்த எழுத்துகள்.",
};

export default function ContributionsPage() {
  return (
    <main id="main">
      <div className="content-section page-shell">
        <PageIntro
          label="பங்களிப்புகள்"
          title="மக்களை இணைக்க வடிவமைக்கப்பட்ட பணி"
          titleId="contributions-title"
          summary="அவரது பங்களிப்பு எழுத்தாக்கத்தைத் தாண்டி வெளியீடு, ஆவண ஆய்வு, நிறுவனங்கள், சர்வதேசக் கூட்டங்கள், குறிப்பு நூல்கள், நீடித்த உரைச் சுற்று ஆகியவற்றையும் உள்ளடக்கியது. தமிழ் விக்கிப்பீடியா தமிழிலும் ஆங்கிலத்திலும் 137 நூல்கள் மற்றும் சிறு நூல்களை அவருக்குச் சேர்க்கிறது."
        />

        <div className="contribution-list">
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
              தமிழாராய்ச்சி மாநாட்டை ஒருங்கிணைத்தார்—மலேசியப் பிரதமரால்
              திறக்கப்பட்டது, தமிழ்நாடு முதல்வர் கலந்துகொண்டார், இரண்டு தொகுதி
              நடவடிக்கைகளாக வெளியிடப்பட்டது; அவை இன்றும் அந்த நிகழ்வின் முதன்மை
              ஆவணமாக உள்ளன.
              <Citation ids={[1, 2, 5, 10, 11]} />
            </p>
            <p>
              <a href="/timeline/">காலக்கோடு</a> மாநாட்டை வரிசையில் வைக்கிறது;{" "}
              <a href="/archive/">ஆவணகம்</a> வெளியிடப்பட்ட நடவடிக்கைகளுடன்
              இணைக்கிறது.
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

        <section className="publications" aria-labelledby="publications-title">
          <div>
            <p className="section-label">தேர்ந்தெடுத்த எழுத்துகள்</p>
            <h2 id="publications-title">ஆவணப்படுத்தப்பட்ட வாசிப்புப் பட்டியல்</h2>
            <p className="publication-note">
              கீழே உள்ள தலைப்புகள் Open Library நூல்பதிவுகளையும் ஆங்கில மற்றும்
              தமிழ் விக்கிப்பீடியாவில் பெயரிடப்பட்ட படைப்புகளையும் இணைக்கின்றன.
              குறிப்பிட்ட பதிப்பைச் சரிபார்க்கும் போது நூலகப் பதிவுகளுக்கு
              முன்னுரிமை அளியுங்கள்.
              <Citation ids={[7, 10, 11]} />
            </p>
          </div>
          <ol>
            {publicationsTa.map((publication) => (
              <li key={`${publication.year}-${publication.title}`}>
                <span>{publication.year}</span>
                <div>
                  <strong>
                    <cite>{publication.title}</cite>
                  </strong>
                  <p>{publication.detail}</p>
                  <ExternalLink href={publication.url} lang="ta">
                    நூல்பதிவு அல்லது கலைக்களஞ்சியப் பதிவைக் காண
                  </ExternalLink>
                </div>
              </li>
            ))}
          </ol>

          <div className="further-titles kolam-frame">
            <KolamCorners />
            <h3>தமிழ் விக்கிப்பீடியாவில் பெயரிடப்பட்ட மேலும் தலைப்புகள்</h3>
            <ul>
              {furtherTitlesTa.map((title) => (
                <li key={title}>
                  <cite>{title}</cite>
                </li>
              ))}
            </ul>
            <p>
              தமிழ் விக்கிப்பீடியா அவரது சுமார் முப்பது ஆய்வுக் கட்டுரைகள்{" "}
              <cite>Tamil Culture</cite>-இலும் மேலும் சுமார் எழுபது கட்டுரைகள்
              பிற இதழ்களிலும் மாநாட்டுத் தொகுதிகளிலும் வெளிவந்ததாகவும் பதிவு
              செய்கிறது.
              <Citation ids={[11]} />
            </p>
          </div>
        </section>

        <PageLinks current="/contributions/" lang="ta" />
      </div>
    </main>
  );
}
