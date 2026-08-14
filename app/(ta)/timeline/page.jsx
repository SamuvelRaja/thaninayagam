import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import { Citation } from "@/app/components/Links";
import Figure from "@/app/components/Figure";
import { timelineTa, imagesTa } from "@/app/lib/data.ta";

export const metadata = {
  title: "காலக்கோடு",
  description:
    "தனிநாயகம் அடிகளாரின் வாழ்க்கையில் ஆவணப்படுத்தப்பட்ட மைல்கற்களின் காலவரிசைப் பட்டியல், 1913 முதல் 1981 வரை.",
};

export default function TimelinePage() {
  return (
    <main id="main">
      <PageIntro
        label="ஆவணப்படுத்தப்பட்ட காலவரிசை"
        title="ஆய்வும் சேவையும் நிறைந்த வாழ்க்கை"
        titleId="timeline-title"
        summary="பிறப்பு முதல் பின்மரபுச் சிறப்புகள் வரை பதினேழு மைல்கற்கள். ஒவ்வொரு பதிவும் அதை நிறுவப் பயன்படுத்தப்பட்ட மூலங்களுடன் இணைக்கப்பட்டுள்ளது. இது எளிய செங்குத்துப் பட்டியல்—இழுக்கவோ அசைக்கவோ ஒன்றுமில்லை."
      />

      <div className="content-section page-shell section-page">
        <Figure
          image={imagesTa.portraitSecondary}
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
                      /^\d{4}/.test(item.year) ? item.year.slice(0, 4) : undefined
                    }
                  >
                    {item.year}
                  </time>
                  <span>{item.location}</span>
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>
                    {item.description}
                    <Citation ids={item.sources} lang="ta" />
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <PageLinks current="/timeline/" lang="ta" />
      </div>
    </main>
  );
}
