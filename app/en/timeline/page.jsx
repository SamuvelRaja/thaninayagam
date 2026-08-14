import PageIntro from "@/app/components/PageIntro";
import PageLinks from "@/app/components/PageLinks";
import { Citation } from "@/app/components/Links";
import Figure from "@/app/components/Figure";
import { timeline, images } from "@/app/lib/data";

export const metadata = {
  title: "Timeline",
  description:
    "A chronological register of documented milestones in the life of Thani Nayagam Adigal, 1913 to 1981.",
};

export default function TimelinePage() {
  return (
    <main id="main">
      <PageIntro
        label="Documented chronology"
        title="A life of research and public service"
        titleId="timeline-title"
        summary="Seventeen milestones from birth to posthumous honours, each linked to the sources used to establish it. A simple vertical register—nothing to drag or swipe."
      />

      <div className="content-section page-shell section-page">
        <Figure
          image={images.portraitSecondary}
          className="section-figure timeline-figure"
          lang="en"
        />

        <ol className="timeline-list">
          {timeline.map((item) => (
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
                    <Citation ids={item.sources} lang="en" />
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <PageLinks current="/timeline/" lang="en" />
      </div>
    </main>
  );
}
