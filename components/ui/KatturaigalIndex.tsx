import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { KatturaiCard } from "@/components/ui/KatturaiCard";
import { getAllKatturaigal } from "@/lib/katturaigal";

export function KatturaigalIndex({ lang }: { lang: "ta" | "en" }) {
  const ta = lang === "ta";
  const essays = getAllKatturaigal();

  return (
    <>
      <Header lang={lang} current="katturaigal" />
      <main id="main" className="brush-page katturaigal-index-page">
        <div className="container">
          <div className="katturaigal-index-content">
            <header className="katturaigal-index-heading">
              <h1>{ta ? "கட்டுரைகள்" : "Essays"}</h1>
              <p>
                {ta
                  ? "தனிநாயக அடிகளாரின் வாழ்வும் உலகளாவிய தமிழ்ப்பணியும் குறித்து ஆய்வாளர்கள் எழுதிய கட்டுரைகள்."
                  : "Studies of Father Xavier S. Thani Nayagam’s life and his work to bring Tamil studies to the world."}
              </p>
            </header>
            <div className="katturaigal-list">
              {essays.map((essay) => (
                <KatturaiCard essay={essay} lang={lang} key={essay.slug} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
