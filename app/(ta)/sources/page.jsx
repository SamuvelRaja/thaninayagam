import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import { ExternalLink } from "@/app/components/Links";
import Figure from "@/app/components/Figure";
import { KolamCorners } from "@/app/components/Ornaments";
import { sourcesTa, imagesTa } from "@/app/lib/data.ta";

export const metadata = {
  title: "மூலங்கள்",
  description:
    "தனிநாயகம் அடிகளார் ஆவணகம் முழுவதும் கூற்றுகளைச் சரிபார்க்கப் பயன்படுத்தப்பட்ட ஆவண மூலங்கள்.",
};

export default function SourcesPage() {
  return (
    <main id="main">
      <div className="content-section page-shell">
        <PageIntro
          label="மூலங்களும் மேலும் வாசிப்பும்"
          title="இந்தக் கணக்கு எப்படி நிறுவப்பட்டது"
          titleId="sources-title"
          summary="தளம் முழுவதும் உள்ள மூல எண்கள் இந்தப் பட்டியலுக்கு இட்டுச் செல்கின்றன. வெளிப்புறப் பதிவுகள் புதிய தாவலில் திறக்கும். கலைக்களஞ்சியக் கட்டுரைகள் முரண்படும் போது அரசு நூலகம் மற்றும் நூல்பதிவு மூலங்களுக்கு முன்னுரிமை அளிக்கப்படுகிறது."
        />

        <Figure image={imagesTa.portrait} className="section-figure" lang="ta" />

        <ol className="source-list">
          {sourcesTa.map((source) => (
            <li id={`source-${source.id}`} key={source.id}>
              <span className="source-number" aria-hidden="true">
                {source.id}
              </span>
              <div>
                <ExternalLink href={source.url} lang="ta">
                  {source.title}
                </ExternalLink>
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
          <h2 id="research-note-title">ஆய்வுக் குறிப்பு</h2>
          <p>
            சில மூலங்கள் <cite>Tamil Culture</cite>-இன் தொடக்க ஆண்டு, பல்கலைக்கழக
            நியமனங்களின் சரியான முடிவுத் தேதிகள், அவரது ஐரோப்பிய நூலக வருகைகளின்
            போது மீட்கப்பட்ட ஆரம்பகால தமிழ் நூல்களின் முழுப் பட்டியல் ஆகியவற்றில்
            வேறுபடுகின்றன. ஆவணப் பதிவு முழுமையடையாத இடங்களில் இந்த ஆவணகம்
            கவனமாகச் சொற்களைப் பயன்படுத்துகிறது. ஆங்கில விக்கிப்பீடியா சில
            நேரங்களில் இதழுக்கு “Tamil Studies” என்கிறது; உயிர்வாழும் நூலக
            இதழ்களும் தமிழ் விக்கிப்பீடியாவும் <cite>Tamil Culture</cite>{" "}
            எனும் தலைப்பை ஆதரிக்கின்றன. 1966 மாநாட்டிற்குப் பின் மலேசியாவிலிருந்து{" "}
            <cite>Journal of Tamil Studies</cite>-ஐத் தொகுத்ததாகத் தமிழ்
            விக்கிப்பீடியா தனியாகப் பதிவு செய்கிறது—இது குழப்பத்தை விளக்கலாம்.
          </p>
          <p>
            இந்தத் தளத்தில் மறுபதிப்பு செய்யப்பட்ட படங்கள் பொது உரிமைப் பரப்பு
            ஆவணங்கள் அல்லது கிரியேட்டிவ் காமன்ஸ் உரிமத்தின்கீழ் பகிரப்பட்ட
            புகைப்படங்கள்; ஒவ்வொரு விளக்கவுரையும் உருவாக்கியவரை மற்றும் உரிமத்தைப்
            பெயரிட்டு கோப்புப் பதிவுடன் இணைக்கிறது.
          </p>
        </aside>

        <PageLinks current="/sources/" lang="ta" />
      </div>
    </main>
  );
}
