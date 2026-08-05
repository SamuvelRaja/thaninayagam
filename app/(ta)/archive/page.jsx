import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import { KolamCorners } from "@/app/components/Ornaments";
import { archiveRecordsTa, imagesTa, sourcesTa } from "@/app/lib/data.ta";

export const metadata = {
  title: "ஆவணகம்",
  description:
    "தனிநாயகம் அடிகளுடன் தொடர்புடைய பொது உரிமைப் பரப்பு ஆவணங்களும் உயிர்வாழும் நூலகப் பதிவு இணைப்புகளும்.",
};

export default function ArchivePage() {
  return (
    <main id="main">
      <div className="content-section page-shell">
        <PageIntro
          label="ஆவணப் பதிவுகள்"
          title="ஆவணக் காப்பகம்"
          titleId="archive-title"
          summary="அவரது ஆய்வுப் பணிகளுடன் தொடர்புடைய பொது உரிமைப் பரப்பு ஆவணங்கள் மற்றும் நூலகப் பதிவுகளின் இணைப்புகள் இங்கு தொகுக்கப்பட்டுள்ளன."
        />

        <section aria-labelledby="documents-title" className="archive-layout">
          <h2 id="documents-title" className="section-subhead">
            ஆரம்பகால அச்சுத் தமிழ் ஆவணங்கள்
          </h2>
          <p className="archive-note">
            கீழ்க்காணும் ஆவணங்கள் அவரது ஐரோப்பிய நூலக ஆய்வுகளின் மூலம் மீட்டெடுக்கப்பட்ட பதினாறாம் நூற்றாண்டுத் தமிழ் அச்சுப் பிரதிகளைச் சேர்ந்தவை. 1950-ஆம் ஆண்டு லிஸ்பனில் அவரால் கார்த்திலா கண்டறியப்பட்டது; <cite>தம்பிரான் வணக்கம்</cite> அவரது ஆய்வுகளால் மீட்கப்பட்ட மற்றொரு முக்கிய ஆவணமாகும்.
            <Citation ids={[1, 8, 10, 11, 14]} />
          </p>
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
        </section>

        <section aria-labelledby="initiated-title" className="archive-layout">
          <h2 id="initiated-title" className="section-subhead">
            அவரது முன்னெடுப்பிலான வெளியீடுகள்
          </h2>
          <p className="archive-note">
            அவர் நிறுவிய <cite>Tamil Culture</cite> காலாண்டிதழின் தலைப்புப் பக்கமும், அவர் ஒருங்கிணைத்த 1966-ஆம் ஆண்டு மாநாட்டின் வெளியீடுகளும்.
            <Citation ids={[4, 5, 6]} />
          </p>
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

        <div className="archive-records">
          <h2>இணையப் பதிவுகள் மற்றும் தரவுகள்</h2>
          <p className="archive-note">
            இணையத்தில் கிடைக்கப்பெறும் ஆவணங்கள், வாழ்க்கை வரலாறுகள் மற்றும் வெளியீடுகளின் பட்டியல் கீழே தரப்பட்டுள்ளது.
          </p>
          <ul>
            {archiveRecordsTa.map((record) => (
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
                <ExternalLink
                  href={sourcesTa[record.urlIndex].url}
                  lang="ta"
                >
                  மூலத்தைக் காண்க
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
          <h2 id="related-finds-title">தொடர்புடைய பிற ஆரம்பகால அச்சுத் தமிழ் நூல்கள்</h2>
          <p>
            மேற்கண்ட ஆவணங்களைத் தவிர்த்து, அவரது நூலக ஆய்வுகள் பின்வரும் பிற முக்கிய வரலாற்று நூல்களுடனும் தொடர்புடையவை. அவற்றுள் ஆரம்பகால தமிழ் கிறித்தவ அச்சு நூல்கள், அகராதிகள் மற்றும் வெளிநாட்டு அறிஞர் ஒருவரால் எழுதப்பட்ட முதல் தமிழ் இலக்கண நூல் ஆகியவை அடங்கும்:
          </p>
          <ul>
            <li>
              <cite>கிறிஸ்தியானி வணக்கம்</cite> (1579)
            </li>
            <li>
              அன்டாவோ டெ புரோயென்சாவின் தமிழ்–போர்த்துகீசிய அகராதி—அவர்
              மறுபதிப்பு செய்து 1966 கோலாலம்பூர் மாநாட்டில் வெளியிட்டது
            </li>
            <li>
              <cite>Arte da Lingua Malabar</cite> (1549), ஹென்ரிக் ஹென்ரிக்ஸின்
              இலக்கணக் கையெழுத்துப் பிரதி—2013 இல் ஜீன் ஹைன் ஆங்கில
              மொழிபெயர்ப்பில் வெளியிட்டது
            </li>
          </ul>
          <p>
            <Citation ids={[10, 11]} />
            இந்த மீட்புகள் அவரது விரிவான ஆவணப் பணியில் எவ்வாறு பொருந்துகின்றன
            என்பதற்கு <a href="/contributions/">பங்களிப்புகள் பக்கத்தையும்</a>,
            முழுமையான மேற்கோள்களுக்கு{" "}
            <a href="/sources/">மூலங்கள் பக்கத்தையும்</a> காண்க.
          </p>
        </section>

        <PageLinks current="/archive/" lang="ta" />
      </div>
    </main>
  );
}
