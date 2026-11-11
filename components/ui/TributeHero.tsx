import { BrushText } from "@/components/ui/BrushText";
import React from "react";

interface TributeHeroProps {
  lang: "ta" | "en";
}

export const TributeHero: React.FC<TributeHeroProps> = ({ lang }) => {
  const isTa = lang === "ta";

  return (
    <section className="section section-origin" id="tribute" data-lang={lang}>
      <div className="container">
        <article className="folio">
          <div className="folio-grid">
            <div className="folio-content">
              <header className="folio-masthead">
                <h2 className="folio-headline"><BrushText>
                  {isTa ? (
                    <>
                      அருள்திரு. முனைவர் அமுதன் அடிகள் காட்டிய வழியில்
                    </>
                  ) : (
                    <>
                      Guided by the lifelong scholarship of{" "}
                      <em>Rev. Dr.&nbsp;Amudhan Adigal</em>
                    </>
                  )}
                </BrushText></h2>
                <p className="folio-deck">
                  {isTa
                    ? "‘தனிநாயக அடிகள்’ வரலாற்று நூலாசிரியர் (1993) · திருச்சி தமிழ் இலக்கியக் கழகச் செயலாளர்"
                    : "Author of the landmark 1993 biography ‘Thani Nayagam Adigal’ · Secretary, Tamil Literature Society (Tiruchirappalli)"}
                </p>
              </header>

              <div className="folio-narrative">
                <p className="folio-lede">
                  {isTa ? (
                    <>
                      <strong>அருள்திரு. முனைவர் அமுதன் அடிகள்</strong> (பி. 1943), கத்தோலிக்க அருட்பணியாளர், எழுத்தாளர், இதழாசிரியர் மற்றும் திருச்சி தமிழ் இலக்கியக் கழகத்தின் செயலாளர் ஆவார். தனிநாயகம் அடிகளாரின் வரலாற்றுப் பெருவாழ்வையும் ஆவணங்களையும் 30 ஆண்டுகள் தேடித்தொகுத்து, 1993-இல் உலகத் தமிழாராய்ச்சி நிறுவனம் மூலம் முதன்முதலாக <em>‘தனிநாயக அடிகள்’</em> வாழ்க்கை வரலாற்று ஆய்வு நூலை ஆக்கிய முன்னோடி ஆவார்.
                    </>
                  ) : (
                    <>
                      Born in Punnaikayal, Tamil scholar, Catholic priest, and author <strong>Rev. Dr. Amudhan Adigal</strong> (b. 1943) is the Secretary of the Tamil Literature Society in Tiruchirappalli and the pioneer archivist who dedicated over three decades to collecting Father Thani Nayagam’s global papers to author the landmark 1993 biography published by the International Institute of Tamil Studies (IITS, Chennai).
                    </>
                  )}
                </p>

                <div className="folio-pullquote">
                  <p>
                    {isTa
                      ? "அமுதன் அடிகள் காட்டிய வழியிலும் வழிகாட்டலுடனும், தனிநாயகம் அடிகளாரின் அரிய படைப்புகளையும் அவர் தமிழுக்கு ஆற்றிய தொண்டையும் உலகறியச் செய்யும் நோக்கோடு இந்த ஆவணக முயற்சி முன்னெடுக்கப்படுகிறது."
                      : "Guided by the path shown by Rev. Dr. Amudhan Adigal and his guidance, this digital archive is dedicated to preserving and disseminating Father Thani Nayagam’s scholarship to the entire world."}
                  </p>
                </div>
              </div>
            </div>

            <aside className="folio-figures" aria-label={isTa ? "ஆவணப் படங்கள்" : "Archival plates"}>
              <figure className="folio-plate">
                <div className="folio-plate-frame">
                  <img
                    src="/images/amudhan-adigal.jpg"
                    alt={isTa ? "அருள்திரு. முனைவர் அமுதன் அடிகள்" : "Rev. Dr. Amudhan Adigal"}
                    width={240}
                    height={300}
                    loading="lazy"
                  />
                </div>
              </figure>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
};
