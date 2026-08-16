import PageIntro from "@/app/components/PageIntro";
import Figure from "@/app/components/Figure";
import { Citation, ExternalLink } from "@/app/components/Links";
import SectionNext from "@/app/components/SectionNext";
import {
  imagesTa,
  sourcesTa,
  sponsorSupportTa,
  sponsorsTa,
} from "@/app/lib/data.ta";

const bookRecord = sourcesTa.find((item) => item.id === 3);

export const metadata = {
  title: "உதவி",
  description:
    "தனிநாயகம் அடிகளார் டிஜிட்டல் ஆவணகம்—அமுதன் அடிகளாரின் வாழ்க்கை வரலாற்று நூலும் நினைவுப் பணியும் அடிப்படையான முதன்மை முயற்சி; உதவும் வழிகள்.",
};

export default function SponsorsPage() {
  return (
    <main id="main">
      <PageIntro
        label="ஆதரவு"
        title="உதவி"
        titleId="sponsors-title"
        summary="இந்த இலவச ஆவணகம் அமுதன் அடிகளார் தனிநாயகம் அடிகளாரின் வாழ்வையும் எழுத்துகளையும் பொதுவெளியில் வைத்த பணியின் தொடர்ச்சி. உங்கள் உதவி எண்ணிமமாக்கத்தையும் புதிய ஆவணங்களையும் வளர்க்கும்."
      >
        <nav className="page-hero-jump" aria-label="இப்பக்கத்தில்">
          <a href="#initiative">அமுதன் அடிகள்</a>
          <a href="#book">அவரது நூல்</a>
          <a href="#support">உதவும் வழி</a>
          <a href="#sponsors-list">உதவியாளர்கள்</a>
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
              image={imagesTa.amudhanAdigal}
              className="section-figure sponsors-portrait"
              citeIds={[42, 41]}
              lang="ta"
            />
            <Figure
              image={imagesTa.amudhanThaniBook}
              className="section-figure sponsors-book"
              citeIds={[43, 3]}
              lang="ta"
            />
          </div>

          <div className="sponsors-mission-copy">
            <p className="section-label">முதன்மை முயற்சி</p>
            <h2 id="initiative-title">அமுதன் அடிகள்</h2>
            <p>
              <strong>அமுதன் அடிகள்</strong> (பிறப்பு: 18 ஏப்ரல் 1943,
              புன்னைக்காயல்) கத்தோலிக்க குரு, எழுத்தாளர், இதழாசிரியர்.
              தனிநாயகம் அடிகள் இதழியல் கல்லூரியில் முதல்வராகவும், தனிநாயகம்
              அடிகளார் நூற்றாண்டு விழாக் குழுவின் பொதுச் செயலாளராகவும்
              பணியாற்றி அவரது ஆய்வு மரபைப் பொதுவெளியில் வைத்தார்.
              <Citation ids={[41]} />
            </p>
            <p>
              தனிநாயகம் அடிகளுடனான தொடர்பு நிறுவனப் பணியோடு ஆவணமாகவும் உள்ளது.
              அவர் எழுதிய{" "}
              <cite>தனிநாயகம் அடிகளார்</cite> வாழ்க்கை வரலாறு (தமிழ் டிஜிட்டல்
              நூலகப் பதிவு, 1993) மற்றும்{" "}
              <cite>
                உலகெல்லாம் தமிழ் முழக்கம் தனிநாயகம் எனும் தமிழ் நாயகம்
              </cite>{" "}
              ஆகியவை முதன்மை நூல்கள்; ஆங்கிலத்தில் “The roving Ambassador of
              Tamil” சுயவிவரமும் வெளியானது.
              <Citation ids={[3, 12, 41]} />
            </p>
            <p>
              இந்த டிஜிட்டல் ஆவணகம் அந்தப் பாதையை{" "}
              <strong>முதன்மை முயற்சியாக</strong> கொள்கிறது: தனிநாயகம்
              அடிகளாரின் எழுத்துகளை ஒன்றிணைத்து இலவசமாக வாசிக்க வழிவகுப்பது.{" "}
              <ExternalLink
                href="https://tamil.wiki/wiki/%E0%AE%85%E0%AE%AE%E0%AF%81%E0%AE%A4%E0%AE%A9%E0%AF%8D_%E0%AE%85%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D"
                lang="ta"
              >
                தமிழ் விக்கியில் அமுதன் அடிகள் பக்கம்
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
          <p className="section-label">அச்சுத் தொடர்பு</p>
          <h2 id="book-title">தனிநாயகம் அடிகளார் பற்றிய அவரது நூல்</h2>
          <p>
            அமுதன் அடிகளாரின் வாழ்க்கை வரலாறு தனிநாயகம் அடிகளாரின் வாழ்வைப் பற்றிய
            முதன்மை நவீன தமிழ் நூல் ஆகும். இங்கு காட்டப்படும் அட்டை தமிழ் விக்கி
            புகைப்படப் பதிவிலிருந்து; நூல்பதிவு தமிழ் டிஜிட்டல் நூலகத்தில் உள்ளது.
            <Citation ids={[3, 43]} />
          </p>
          {bookRecord ? (
            <p>
              <ExternalLink href={bookRecord.url} lang="ta">
                TDL பதிவைத் திறக்க: {bookRecord.title}
              </ExternalLink>
            </p>
          ) : null}
          <p>
            இத்தள ஆவணங்கள் உறுதிசெய்யப்படும்தோறும் வளரும்—எண்ணிக்கைகள்
            இறுதியானவை அல்ல. கீழே உள்ள உதவி, அமுதன் அடிகளாரின் நினைவு ஆய்வு
            உணர்வில் அந்தப் பணியைத் தொடர உதவும்.
          </p>
        </aside>

        <section
          className="sponsors-support ui-panel"
          id="support"
          aria-labelledby="support-title"
        >
          <p className="section-label">உதவி</p>
          <h2 id="support-title">எப்படி உதவலாம்</h2>
          <p>
            காசோலை அல்லது வரைவோலையை{" "}
            <strong>{sponsorSupportTa.chequeName}</strong> என்ற பெயரில்
            வழங்கலாம்; அல்லது கீழே உள்ள வங்கி விவரங்களால் பணம் அனுப்பலாம்.
            பொது நன்கொடை அழைப்பிற்கு முன் வங்கிப் புலங்களை நிரப்பவும்.
          </p>
          <p>{sponsorSupportTa.note}</p>

          <h3 id="bank-title">வங்கிக் கணக்கு விவரம்</h3>
          <dl className="sponsors-bank" aria-labelledby="bank-title">
            <div>
              <dt>கணக்குப் பெயர்</dt>
              <dd>{sponsorSupportTa.accountName}</dd>
            </div>
            <div>
              <dt>கணக்கு எண்</dt>
              <dd>{sponsorSupportTa.accountNumber}</dd>
            </div>
            <div>
              <dt>வங்கி</dt>
              <dd>{sponsorSupportTa.bank}</dd>
            </div>
            <div>
              <dt>கிளை</dt>
              <dd>{sponsorSupportTa.branch}</dd>
            </div>
            <div>
              <dt>IFSC</dt>
              <dd>
                <code>{sponsorSupportTa.ifsc}</code>
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
            <p className="section-label">பட்டியல்</p>
            <h2 id="sponsors-list-title">இதுவரை உதவியவர்கள்</h2>
            <p>
              எண்ணிடப்பட்ட பட்டியல்—ஆவணகப் பதிவுகள் போன்ற அதே தெளிவான அட்டவணை
              அமைப்பு.
            </p>
          </header>

          {sponsorsTa.length === 0 ? (
            <p className="archive-empty" role="status">
              இன்னும் உதவியாளர்கள் பட்டியலிடப்படவில்லை. பதிவு
              செய்யப்பட்டதும் பெயர், இடம், தொகை இங்கு எண்ணிட்டுத் தோன்றும்.
            </p>
          ) : (
            <div className="archive-register-wrap">
              <table className="archive-register sponsors-table">
                <caption className="visually-hidden">
                  உதவியாளர் பட்டியல்: {sponsorsTa.length} பேர்
                </caption>
                <thead>
                  <tr>
                    <th scope="col">எண்</th>
                    <th scope="col">பெயர்</th>
                    <th scope="col">இடம்</th>
                    <th scope="col">தொகை</th>
                  </tr>
                </thead>
                <tbody>
                  {sponsorsTa.map((sponsor, index) => (
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
          lang="ta"
          href="/archive/#holdings"
          label="ஆவணகம்"
          title="இத்தள எழுத்துகளை உலாவுக"
        />
      </div>
    </main>
  );
}
