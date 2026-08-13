'use client';

import { useState } from 'react';
import Link from 'next/link';

const essaysData = [
  { no: 1, title: "மாணவர் தந்தை", url: "katturaigal/manavar_thanthai.htm", date: "2-Jun-30", journal: "&nbsp;" },
  { no: 2, title: "பார்ப்பனர்களும் - யூதர்களும்", url: "katturaigal/parpanargalum.htm", date: "29-Aug-37", journal: "&nbsp;" },
  { no: 3, title: "கார்ப்பரேஷன் அலங்கோலம்", url: "katturaigal/corp_alangolam.htm", date: "10-Nov-37", journal: "&nbsp;" },
  { no: 4, title: "எது பெரிது? மானமா? பதவியா?", url: "katturaigal/ethu.htm", date: "21-Nov-37", journal: "&nbsp;" },
  { no: 5, title: "ஆச்சாரியார் அடைந்த படுதோல்விகள்", url: "katturaigal/aachariyar_adaintha.htm", date: "26-Dec-37", journal: "&nbsp;" },
  { no: 6, title: "ஊர் சிரிக்கும் ஊடல்", url: "katturaigal/oorsirikkum.htm", date: "5-Feb-38", journal: "&nbsp;" },
  { no: 7, title: "பித்தம் தெளிய மருந்தொன்றிருக்குது", url: "katturaigal/pitham_theliya.htm", date: "13-Feb-38", journal: "&nbsp;" },
  { no: 8, title: "எல்லாம் ஈசன் செயல்", url: "katturaigal/ellam_eesan.htm", date: "20-Feb-38", journal: "&nbsp;" },
  { no: 9, title: "குற்றால நீர்வீழ்ச்சி", url: "katturaigal/kutrala_neer.htm", date: "27-Feb-38", journal: "&nbsp;" },
  { no: 10, title: "இருண்ட இந்தியாவில் இன்று நடப்பது", url: "katturaigal/irunda_indiavil.htm", date: "3-Apr-38", journal: "&nbsp;" },
  { no: 11, title: "குப்பை மேட்டு நாயும் குச்சுக்காரி வீட்டுக் கிளியும்", url: "katturaigal/kuppai_maettu.htm", date: "3-Apr-38", journal: "&nbsp;" },
  { no: 12, title: "அபேதவாதமும் சீர்திருத்தமும்", url: "katturaigal/abethavetham.htm", date: "1-Oct-38", journal: "&nbsp;" },
  { no: 13, title: "கல்கத்தா காய்ச்சல்", url: "katturaigal/culcutta_kaichal.htm", date: "4-May-39", journal: "&nbsp;" },
  { no: 14, title: "பரதன் எழுதிய பகிரங்கக் கடிதங்கள் - 1", url: "katturaigal/bharathan_ezhuthiya.htm", date: "10-May-39", journal: "&nbsp;" },
  { no: 15, title: "பரதன் எழுதிய பகிரங்கக் கடிதங்கள் - 2", url: "katturaigal/bharathan_ezhuthiya2.htm", date: "13-May-39", journal: "&nbsp;" },
  { no: 16, title: "சேரவாரும் தமிழர்களே", url: "katturaigal/saeravaarum.htm", date: "14-May-39", journal: "&nbsp;" },
  { no: 17, title: "கத்கத்தா சரகுல்லா!", url: "katturaigal/culcutta_rasagulla.htm", date: "14-May-39", journal: "&nbsp;" },
  { no: 18, title: "ரிப்பன் மண்டபத்து மகான்கள்", url: "katturaigal/ribbon_mandapathu.htm", date: "10-Jun-39", journal: "&nbsp;" },
  { no: 19, title: "தமிழ்நாடு தமிழருக்கே!", url: "katturaigal/tn_tamilarukkae_1.html", date: "23-Nov-39", journal: "&nbsp;" },
  { no: 20, title: "சமய விளக்கம்", url: "katturaigal/samaya_vila.htm", date: "24-Nov-39", journal: "&nbsp;" },
  { no: 21, title: "ஆரிய சமயம்", url: "katturaigal/aariyar_samayam.htm", date: "25-Nov-39", journal: "&nbsp;" },
  { no: 22, title: "பெரியாரும் பிறரும்", url: "katturaigal/periyarum_pirarum.htm", date: "24-Dec-39", journal: "&nbsp;" },
  { no: 23, title: "பரிவாரத்தின் பதட்டம்", url: "katturaigal/parivarathin.htm", date: "24-Dec-39", journal: "&nbsp;" },
  { no: 24, title: "பொங்குக புதுமை!", url: "katturaigal/ponguga_puthumai.htm", date: "13-Jan-40", journal: "விடுதலை" },
  { no: 25, title: "நமது செல்வம்", url: "katturaigal/namadhu_selvam.htm", date: "20-Jan-40", journal: "விடுதலை" },
  { no: 26, title: "மறைந்தாயோ செல்வமே!", url: "katturaigal/marainthayo.htm", date: "17-Mar-40", journal: "&nbsp;" },
  { no: 27, title: "அவரும் தமிழர்தானாம்!", url: "katturaigal/avarum_thamizhar.htm", date: "29-Jun-40", journal: "&nbsp;" },
  { no: 28, title: "அல்லாடுகிறார்", url: "katturaigal/alladugirar.htm", date: "18-Jul-40", journal: "&nbsp;" },
  { no: 29, title: "வெற்றியில் வீழ்ச்சி - பூனா போர்ப் படலம்", url: "katturaigal/vetriyil_veezhchi_pune.htm", date: "30-Jul-40", journal: "&nbsp;" },
  { no: 30, title: "டிவேலரா திணறல்", url: "katturaigal/thivelara_thinaral.htm", date: "31-Jul-40", journal: "&nbsp;" },
  { no: 31, title: "வெற்றியின் வீழ்ச்சி - அடித்த லாபம் ஆரியருக்கே", url: "katturaigal/vetriyil_veezhchi2_aditha.htm", date: "3-Aug-40", journal: "&nbsp;" },
  { no: 32, title: "மது விலக்கு நாடகம் ஒழியுமா?", url: "katturaigal/mathuvilakku_naadag.htm", date: "2-Aug-40", journal: "&nbsp;" },
  { no: 33, title: "நமது போர்ப் பாதை 1", url: "katturaigal/namathu_poar_paathai_1.htm", date: "09-Aug-40", journal: "&nbsp;" },
  { no: 34, title: "நமது போர்ப் பாதை 2", url: "katturaigal/namathu_poar_paathai_2.htm", date: "10-Aug-40", journal: "&nbsp;" },
  { no: 35, title: "நமது போர்ப் பாதை 3", url: "katturaigal/namathu_poar_paathai_3.htm", date: "12-Aug-40", journal: "&nbsp;" },
  { no: 38, title: "நாட்டின் நாயகர்கள்", url: "katturaigal/naatin_nayagargal.htm", date: "1942", journal: "&nbsp;" },
  { no: 39, title: "ரோமாபுரி ராணிகள்", url: "katturaigal/romapuri_ranigal_1.htm", date: "1942", journal: "&nbsp;" },
  { no: 40, title: "வரட்டுமே வள்ளலார்!", url: "katturaigal/varattumae_vallalar.htm", date: "6-Feb-42", journal: "&nbsp;" },
  { no: 41, title: "அவசரமாகத் தேவை", url: "katturaigal/avasaramaga_thaevai.htm", date: "&nbsp;", journal: "&nbsp;" },
  { no: 42, title: "இலட்சார்ச்சனை", url: "katturaigal/latcharchanai.htm", date: "15-Mar-42", journal: "திராவிடநாடு" },
  { no: 43, title: "புத்தர் புன்னகை", url: "katturaigal/budhar_punnagai.htm", date: "15-Mar-42", journal: "திராவிடநாடு" },
  { no: 44, title: "கிட்கிந்தையில் கிரிப்ஸ்", url: "katturaigal/kitkinthayil_grips.htm", date: "22-Mar-42", journal: "திராவிடநாடு" },
  { no: 45, title: "ஹிந்துஸ்தான் ஹமாரா", url: "katturaigal/hindustan_hamara.htm", date: "22-Mar-42", journal: "திராவிடநாடு" },
  { no: 46, title: "இந்து இட்லரிசம்", url: "katturaigal/indhu_hitlarism.htm", date: "29-Mar-42", journal: "திராவிடநாடு" },
  { no: 47, title: "ஆளுக்கொரு துப்பாக்கி", url: "katturaigal/aalukkoru_thuppakki.htm", date: "29-Mar-42", journal: "திராவிடநாடு" },
  { no: 48, title: "அந்தோ நெஞ்சுவேகிறது!", url: "katturaigal/antho_nenchu_vegirathu.htm", date: "29-Mar-42", journal: "திராவிடநாடு" },
  { no: 49, title: "புன்சிரிப்பு", url: "katturaigal/punsirippu.htm", date: "29-Mar-42", journal: "திராவிடநாடு" },
  { no: 51, title: "மறைந்த மறத்தமிழர்", url: "katturaigal/maraintha_marath.htm", date: "29-Mar-42", journal: "&nbsp;" },
  { no: 52, title: "வந்தேனே நானே", url: "katturaigal/vanthaene_nanae.htm", date: "5-Apr-42", journal: "திராவிடநாடு" },
  { no: 53, title: "கனவில் கண்ட கன்னிகை!", url: "katturaigal/kanavil_kanda_kannigai.htm", date: "5-Apr-42", journal: "திராவிடநாடு" },
  { no: 54, title: "எனது ஆசிரியரை இழந்தேன்", url: "katturaigal/enathu_aasiriyarai.htm", date: "12-Apr-42", journal: "திராவிடநாடு" },
  { no: 56, title: "சங்கராச்சாரி பதவி தற்கொலை!", url: "katturaigal/sankarachari_pathavi_tharkolai.htm", date: "19-Apr-42", journal: "திராவிடநாடு" },
  { no: 57, title: "தீட்சிதர் வீட்டில்", url: "katturaigal/theetchithar_veetil.htm", date: "19-Apr-42", journal: "திராவிடநாடு" },
  { no: 58, title: "தேன் சுரக்கப் பேசி", url: "katturaigal/thaensurakka_paesi.htm", date: "26-Apr-42", journal: "திராவிடநாடு" },
  { no: 59, title: "காந்திஸ்தான் மர்கயா!", url: "katturaigal/gandhistan_margaya.htm", date: "26-Apr-42", journal: "திராவிடநாடு" },
  { no: 60, title: "நச்சுப் பொய்கை", url: "katturaigal/nachuppoygai.htm", date: "3-May-42", journal: "திராவிடநாடு" },
  { no: 61, title: "அவர் அவ்வளவு முட்டாளல்ல!", url: "katturaigal/avar_avvalavu_muttalalla.htm", date: "17-May-42", journal: "திராவிடநாடு" },
  { no: 62, title: "பெரியார் - ஆச்சாரியார் சந்திப்பு", url: "katturaigal/periyar_achariyar_santhippu.htm", date: "24-May-42", journal: "திராவிடநாடு" },
  { no: 63, title: "ஆண்டவனை அழைக்கிறார்!", url: "katturaigal/aandavanai_alikkirar.htm", date: "24-May-42", journal: "திராவிடநாடு" },
  { no: 64, title: "ஐயன் சிங்காரங்களைப் பாரும்!", url: "katturaigal/ayyan_singarangalai_paarum.htm", date: "24-May-42", journal: "திராவிடநாடு" },
  { no: 65, title: "எதிரொலி", url: "katturaigal/ethiroli.htm", date: "24-May-42", journal: "திராவிடநாடு" },
  { no: 66, title: "லண்டனில் லெனின்", url: "katturaigal/londonil_lenin.htm", date: "31-May-42", journal: "திராவிடநாடு" },
  { no: 67, title: "தூக்குவீர் கத்தியை!", url: "katturaigal/thookuveer_katthiyai.htm", date: "31-May-42", journal: "திராவிடநாடு" },
  { no: 68, title: "இஃதன்றோ தோழமை!", url: "katturaigal/ithandro_tholamai.htm", date: "31-May-42", journal: "திராவிடநாடு" },
  { no: 69, title: "மணி மறைந்தார்", url: "katturaigal/mani_marainthar.htm", date: "31-May-42", journal: "திராவிடநாடு" },
  { no: 70, title: "பாகிஸ்தான்! 24 ஆண்டுகளுக்கு முன்பு", url: "katturaigal/pakistan_24_years_munbu.htm", date: "7-Jun-42", journal: "திராவிடநாடு" },
  { no: 71, title: "தேனுடன் வேம்பு!", url: "katturaigal/thaenudan_vaembu.htm", date: "7-Jun-42", journal: "திராவிடநாடு" },
  { no: 72, title: "இந்துமதமும் தமிழரும்!", url: "katturaigal/indhumathamum.htm", date: "7-Jun-42", journal: "&nbsp;" },
  { no: 73, title: "எந்த ‘ஜீ’யும் நமக்கு வேண்டாம்", url: "katturaigal/entha_jeeyum_namakku_vaendam.htm", date: "14-Jun-42", journal: "திராவிடநாடு" },
  { no: 74, title: "கடல் கடக்கும் கண்கள்", url: "katturaigal/kadal_kadakkum_kangal.htm", date: "14-Jun-42", journal: "திராவிடநாடு" },
  { no: 75, title: "இரண்டு மூளைகள்", url: "katturaigal/irandu_moolaigal.htm", date: "21-Jun-42", journal: "திராவிடநாடு" },
  { no: 76, title: "சீறும் சில்லறைகள்", url: "katturaigal/seerum_sillaraigal.htm", date: "28-Jun-42", journal: "திராவிடநாடு" },
  { no: 77, title: "கேய்ரோவில் கழுகு!", url: "katturaigal/keirovil_kazhugu.htm", date: "28-Jun-42", journal: "திராவிடநாடு" },
  { no: 78, title: "பிராயச்சித்தம்", url: "katturaigal/prayachittham.htm", date: "28-Jun-42", journal: "திராவிடநாடு" },
  { no: 79, title: "ஆடுராட்டே! ஆனால் இங்கு!", url: "katturaigal/aaduraattey.htm", date: "28-Jun-42", journal: "திராவிடநாடு" },
  { no: 81, title: "ஆறுமுகமும் அழுகுரலும்", url: "katturaigal/arumugamum_azhukuralum.htm", date: "12-Jul-42", journal: "திராவிடநாடு" },
  { no: 82, title: "பலி பீடம்", url: "katturaigal/bali_peedam.htm", date: "12-Jul-42", journal: "திராவிடநாடு" },
  { no: 83, title: "ஆசிரியர் கடிதம்", url: "katturaigal/aasiriyar_kaditham.htm", date: "12-Jul-42", journal: "திராவிடநாடு" },
  { no: 84, title: "கூண்டிலிருந்து வெளியேவாருங்கள்!", url: "katturaigal/koondilirunthu_veliyae.htm", date: "19-Jul-42", journal: "திராவிடநாடு" },
  { no: 86, title: "அந்தராத்மாவே அவருக்குக்கூறு!", url: "katturaigal/antharathmavae_avarukku.htm", date: "19-Jul-42", journal: "திராவிடநாடு" },
  { no: 87, title: "ஆங்கிலேயர் மீது பாயுமுன்", url: "katturaigal/aangilar_meethu_paayumun.htm", date: "26-Jul-42", journal: "திராவிடநாடு" },
  { no: 88, title: "கண்ணன் காட்டிய வழி!", url: "katturaigal/kannan_kaatiya_vazhi.htm", date: "26-Jul-42", journal: "திராவிடநாடு" },
  { no: 89, title: "இருவீரர் - ஒருதாசர்!", url: "katturaigal/iruveerar_oruthasar.htm", date: "26-Jul-42", journal: "திராவிடநாடு" },
  { no: 90, title: "முத்தமிழ் கற்றோரே!", url: "katturaigal/muthamizh_katrorae.htm", date: "2-Aug-42", journal: "திராவிடநாடு" },
  { no: 91, title: "அச்சு முறிந்த வண்டி", url: "katturaigal/achi_murintha_vandi.htm", date: "2-Aug-42", journal: "திராவிடநாடு" },
  { no: 92, title: "வார்த்தா முனிவர் யாகம் செய்தால்!", url: "katturaigal/vaartha_munivar.htm", date: "9-Aug-42", journal: "திராவிடநாடு" },
  { no: 93, title: "மானங்கெட்டது!", url: "katturaigal/manankettathu.htm", date: "9-Aug-42", journal: "திராவிடநாடு" },
  { no: 94, title: "ஊரார் உரையாடல் - காகசஸ்", url: "katturaigal/oorar_urayadal_kagasas.htm", date: "9-Aug-42", journal: "திராவிடநாடு" },
  { no: 95, title: "புலியூர் புகுவதா!", url: "katturaigal/puliyur_puguvatha.htm", date: "16-Aug-42", journal: "திராவிடநாடு" },
  { no: 96, title: "இஞ்சிபத்தனே மேல்!", url: "katturaigal/injipatthanae_mael.htm", date: "16-Aug-42", journal: "திராவிடநாடு" },
  { no: 97, title: "24 மணி நேரத்தில் சுயராச்யம்!", url: "katturaigal/24_maninerathil_suyarajyam.htm", date: "23-Aug-42", journal: "திராவிடநாடு" },
  { no: 98, title: "1942-ல் மாஸ்கோ!", url: "katturaigal/1942_masco.htm", date: "23-Aug-42", journal: "திராவிடநாடு" },
  { no: 99, title: "குளிர்ந்த காற்று", url: "katturaigal/kulirntha_kaatru.htm", date: "30-Aug-42", journal: "திராவிடநாடு" },
  { no: 100, title: "ஐந்து அரசுகள்", url: "katturaigal/ainthu_arasugal.htm", date: "30-Aug-42", journal: "திராவிடநாடு" }
];

export default function AnnavinKatturaigalPage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;
  const maxPages = 15; // Hardcoded to 15 to match the original pagination
  
  const paginatedEssays = essaysData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const topNavItems = [
    { id: 'home', label: 'முகப்பு', href: '/home.htm' },
    { id: 'writings', label: 'எழுத்து', href: '/writings.htm' },
    { id: 'speech', label: 'பேச்சு', href: '/speech.htm' },
    { id: 'photos', label: 'புகைப்படம்', href: '/photos.htm' },
    { id: 'paintings', label: 'ஓவியம்', href: '/oaviyam.htm' },
    { id: 'contact', label: 'தொடர்பு', href: '/contact.htm' },
  ];

  const subNavItems = [
    { id: 'letters', label: 'கடிதங்கள்', href: '/annavin_kadithangal.htm' },
    { id: 'essays', label: 'கட்டுரைகள்', href: '/annavin_katturaigal' },
    { id: 'short_stories', label: 'சிறுகதைகள்', href: '/annavin_sirukathaigal.htm' },
    { id: 'novels', label: 'நாவல்கள்', href: '/annavin_navalgal.htm' },
    { id: 'short_novels', label: 'குறுநாவல்கள்', href: '/annavin_kavithaigal.htm' },
    { id: 'dramas', label: 'நாடகங்கள்', href: '/annavin_nadagangal.htm' },
  ];

  return (
    <main id="main" className="anna-archive-page">
      <div className="content-section page-shell">
        
        {/* Modern 6-Item Top Visual Grid Navigation */}
        <nav className="anna-top-nav" aria-label="Main Categories">
          <ul className="anna-top-grid">
            {topNavItems.map((item) => {
              const isActive = item.id === 'writings';
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`anna-top-card ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Horizontal Sub-Navigation */}
        <nav className="anna-sub-nav" aria-label="Sub Categories">
          <ul className="anna-sub-bar">
            {subNavItems.map((item) => {
              const isActive = item.id === 'essays';
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={isActive ? "is-active" : undefined}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="anna-table-container">
          {/* Title and Part No */}
          <div className="anna-table-header">
            <h1 className="anna-table-title">அறிஞர் அண்ணாவின் கட்டுரைகள்</h1>
            <p className="anna-table-part">
              <strong>பகுதி</strong> {page}
            </p>
          </div>

          {/* Structural Copy 3: Top Pagination */}
          <nav className="anna-pagination" aria-label="Pagination Top">
            <ul>
              {Array.from({ length: maxPages }, (_, i) => i + 1).map((p) => (
                <li key={p}>
                  <button
                    type="button"
                    className={page === p ? "is-active" : undefined}
                    aria-current={page === p ? "page" : undefined}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Structural Copy 4: 4-Column Table */}
          <table className="anna-archive-register">
            <thead>
              <tr>
                <th scope="col" className="col-no">எண்</th>
                <th scope="col" className="col-title">பொருள்</th>
                <th scope="col" className="col-year">காலம்</th>
                <th scope="col" className="col-source">இதழ்</th>
              </tr>
            </thead>
            <tbody>
              {paginatedEssays.length > 0 ? (
                paginatedEssays.map((essay) => (
                  <tr key={essay.no}>
                    <td className="col-no">{essay.no}</td>
                    <td className="col-title">
                      <Link href={`/${essay.url}`} className="anna-table-link">
                        {essay.title.replace(/\s+/g, ' ')}
                      </Link>
                    </td>
                    <td className="col-year">{essay.date.replace('&nbsp;', '—')}</td>
                    <td className="col-source">{essay.journal.replace('&nbsp;', '—')}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="anna-empty">No essays found for this page.</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Bottom Pagination */}
          <nav className="anna-pagination" aria-label="Pagination Bottom">
            <ul>
              {Array.from({ length: maxPages }, (_, i) => i + 1).map((p) => (
                <li key={p}>
                  <button
                    type="button"
                    className={page === p ? "is-active" : undefined}
                    aria-current={page === p ? "page" : undefined}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </main>
  );
}
