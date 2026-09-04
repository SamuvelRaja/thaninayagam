// Anna Archive Metadata & Taxonomy
import allEssaysData from './annavin_katturaigal_data.json';

export const annaQuote = {
  quote: "நான் நெஞ்சில் உள்ளதைக் கூறுகிறேன்: கள்ளங் கபடமின்றிக் கூறுகிறேன்...",
  author: "பேரறிஞர் அண்ணா",
  motto: "ஓங்குக அண்ணாவின் புகழ்!",
  title: "பேரறிஞர் அண்ணாவின் படைப்புகள்",
  subtitle: "பேரறிஞர் சி. என். அண்ணாதுரை அவர்களின் வரலாற்று ஆவணங்கள், எழுத்துகள், உரைகள் மற்றும் புகைப்படங்களின் எண்ணிம ஆவணகம்",
};

// 6 Top Navigation Pillars matching original structure
export const annaTopPillars = [
  { id: 'home', label: 'முகப்பு', href: '/home.htm', description: 'ஆவணக முகப்பு மற்றும் அறிமுகம்' },
  { id: 'writings', label: 'எழுத்து', href: '/annavin_katturaigal', description: 'கட்டுரைகள், கடிதங்கள், சிறுகதைகள், நாவல்கள்' },
  { id: 'speech', label: 'பேச்சு', href: '/speech.htm', description: 'மேடை, சட்டமன்றம், நாடாளுமன்ற உரைகள்' },
  { id: 'photos', label: 'புகைப்படம்', href: '/photos.htm', description: '1909 முதல் 1969 வரையிலான வரலாற்று நிழற்படங்கள்' },
  { id: 'paintings', label: 'ஓவியம்', href: '/oaviyam.htm', description: 'கருத்துப்படங்கள், அட்டைப்படங்கள், சுவரொட்டிகள்' },
  { id: 'contact', label: 'தொடர்பு', href: '/contact.htm', description: 'அண்ணா அறக்கட்டளை மற்றும் பங்களிப்பாளர்கள்' },
];

// 6 Sub-Navigation tabs under எழுத்து (Writings)
export const annaWritingsSubNav = [
  { id: 'letters', label: 'கடிதங்கள்', href: '/annavin_kadithangal.htm', count: '120+' },
  { id: 'essays', label: 'கட்டுரைகள்', href: '/annavin_katturaigal', count: `${allEssaysData.length}`, active: true },
  { id: 'short_stories', label: 'சிறுகதைகள்', href: '/annavin_sirukathaigal.htm', count: '80+' },
  { id: 'novels', label: 'நாவல்கள்', href: '/annavin_navalgal.htm', count: '15+' },
  { id: 'short_novels', label: 'குறுநாவல்கள் / கவிதைகள்', href: '/annavin_kavithaigal.htm', count: '45+' },
  { id: 'dramas', label: 'நாடகங்கள்', href: '/annavin_nadagangal.htm', count: '25+' },
];

// 4 Primary Collection Showcase Panels on Home
export const annaCollectionsShowcase = [
  {
    id: 'writings',
    title: 'எழுத்து',
    englishTitle: 'Writings & Literature',
    icon: 'feather',
    badge: '1500+ படைப்புகள்',
    description: 'அண்ணாவின் சமூகம், அரசியல், தத்துவம் மற்றும் இலக்கியம் சார்ந்த விரிவான எழுத்துப் படைப்புகள்.',
    targetHref: '/annavin_katturaigal',
    items: [
      { title: 'கடிதம்', href: '/annavin_kadithangal.htm', note: 'தம்பிக்கு எழுதிய வரலாற்று மடல் தொகுப்புகள்' },
      { title: 'கட்டுரை', href: '/annavin_katturaigal', note: '15 பகுதிகள் கொண்ட 1,443 ஆய்வுக் கட்டுரைகள்' },
      { title: 'சிறுகதை', href: '/annavin_sirukathaigal.htm', note: 'சமூக விழிப்புணர்வூட்டும் சிறுகதைக் களஞ்சியம்' },
      { title: 'நாவல்', href: '/annavin_navalgal.htm', note: 'ரங்கோன் ராதா, பார்வதி பி.ஏ. உள்ளிட்ட நாவல்கள்' },
      { title: 'நாடகம்', href: '/annavin_nadagangal.htm', note: 'ஓர் இரவு, வேலைக்காரி, நீதிதேவன் மயக்கம்' },
      { title: 'கவிதை', href: '/annavin_kavithaigal.htm', note: 'கொள்கைப் பிரகடனம் மற்றும் உணர்ச்சிப் பாக்கள்' }
    ]
  },
  {
    id: 'speech',
    title: 'பேச்சு',
    englishTitle: 'Speeches & Oratory',
    icon: 'mic',
    badge: '1000+ உரைகள்',
    description: 'தமிழர்களின் உள்ளங்களைக் கவர்ந்த அண்ணாவின் அடுக்குமொழி மேடைப் பேச்சுகள் மற்றும் சட்டமன்ற வரலாற்று விவாதங்கள்.',
    targetHref: '/speech.htm',
    items: [
      { title: 'மேடைப் பேச்சுகள்', href: '/speech.htm#medai', note: 'மாநாட்டு உரைகள் மற்றும் கொள்கைப் பேருரைகள்' },
      { title: 'சட்டமன்ற உரைகள்', href: '/speech.htm#sattamandram', note: 'தமிழ்நாடு சட்டமன்ற அவைக் குறிப்புகள் மற்றும் உரைகள்' },
      { title: 'பாராளுமன்ற விவாதங்கள்', href: '/speech.htm#parliament', note: 'மாநிலங்களவையில் ஆற்றிய வரலாற்றுப் புகழ் உரைகள்' },
      { title: 'பள்ளி, கல்லூரி கூட்டங்கள்', href: '/speech.htm#colleges', note: 'இளைஞர்கள் மற்றும் மாணவர் அரங்குப் பேருரைகள்' },
      { title: 'மன்றம் & கழக நிகழ்வுகள்', href: '/speech.htm#forums', note: 'அறிவொளி மன்றக் கூட்டங்கள்' },
      { title: 'நேர்காணல் & பேட்டிகள்', href: '/speech.htm#interviews', note: 'இதழாளர்கள் மற்றும் வெளிநாட்டு ஆய்வாளர் பேட்டிகள்' },
      { title: 'வானொலி உரைகள்', href: '/speech.htm#radio', note: 'அகில இந்திய வானொலி அண்ணா உரைகள்' }
    ]
  },
  {
    id: 'photos',
    title: 'புகைப்படம்',
    englishTitle: 'Historical Photographs',
    icon: 'camera',
    badge: '6 சகாப்தங்கள்',
    description: 'அண்ணாவின் பிறப்பு முதல் இறுதிப் பயணம் வரையிலான 6 தசாப்த கால அரிய புகைப்பட ஆவணத் தொகுப்பு.',
    targetHref: '/photos.htm',
    items: [
      { title: '1909–1919', href: '/photos.htm#1909-19', note: 'காஞ்சிபுரம் இளமைப் பருவம் மற்றும் பள்ளி நாட்கள்' },
      { title: '1920–1929', href: '/photos.htm#1920-29', note: 'பச்சையப்பன் கல்லூரி மாணவர் பருவம்' },
      { title: '1930–1939', href: '/photos.htm#1930-39', note: 'பொதுவாழ்வு தொடக்கம், பெரியார் உடனான தொடர்புகள்' },
      { title: '1940–1949', href: '/photos.htm#1940-49', note: 'திராவிடர் கழகம் மற்றும் திமுக தொடக்கக் காலம்' },
      { title: '1950–1959', href: '/photos.htm#1950-59', note: 'தேர்தல் களம் மற்றும் மக்கள் இயக்கப் போராட்டங்கள்' },
      { title: '1960–1969', href: '/photos.htm#1960-69', note: 'முதலமைச்சர் பொறுப்பு மற்றும் உலகப் பயணங்கள்' }
    ]
  },
  {
    id: 'paintings',
    title: 'ஓவியம் & ஆவணங்கள்',
    englishTitle: 'Visual Artifacts & Media',
    icon: 'palette',
    badge: 'காட்சி ஆவணங்கள்',
    description: 'அண்ணாவின் இதழ்களில் வெளிவந்த கருத்துப் படங்கள், அட்டைப் படங்கள் மற்றும் கையெழுத்துப் பிரதிகள்.',
    targetHref: '/oaviyam.htm',
    items: [
      { title: 'கருத்துப் படங்கள் (Cartoons)', href: '/oaviyam.htm#cartoons', note: 'திராவிட நாடு மற்றும் மாலைமணி இதழ் கேலிச்சித்திரங்கள்' },
      { title: 'அட்டைப் படங்கள் (Book Covers)', href: '/oaviyam.htm#covers', note: 'நூல்கள் மற்றும் சிறப்பு மலர்களின் அட்டை வடிவமைப்பு' },
      { title: 'கையெழுத்துப் பிரதிகள் (Manuscripts)', href: '/oaviyam.htm#manuscripts', note: 'அண்ணாவின் திருக்கரங்களால் எழுதப்பட்ட மூலக் குறிப்புகள்' },
      { title: 'விளம்பரங்கள் (Historic Ads)', href: '/oaviyam.htm#ads', note: 'மாநாட்டு மற்றும் நாடக வரலாற்று விளம்பரங்கள்' },
      { title: 'சுவரொட்டிகள் (Vintage Posters)', href: '/oaviyam.htm#posters', note: 'கழக மாநாட்டுச் சுவரொட்டிகள்' },
      { title: 'பத்திரிகைகள் (Periodicals)', href: '/oaviyam.htm#periodicals', note: 'அண்ணா ஆசிரியராக இருந்த இதழ்களின் முகப்புகள்' }
    ]
  }
];

export const annaTribute = {
  name: "டாக்டர். அண்ணா பரிமளம்",
  title: "அண்ணா அறக்கட்டளை & ஆவணப் பாதுகாவலர்",
  role: "நிறுவனர் மற்றும் ஒருங்கிணைப்பாளர்",
  summary: "பேரறிஞர் அண்ணாவின் வாழ்நாள் எழுத்துகள், இதழ்கள், கடிதங்கள் மற்றும் ஒளிப்படங்களை உலகத் தமிழர்கள் எக்காலத்திலும் அணுகும் வண்ணம் எண்ணிமப் படுத்தித் தந்த ஆவணப் பெருமுயற்சி.",
  trustNote: "அறிஞர் அண்ணா அறக்கட்டளை (Arignar Anna Trust) மூலமாக இவ்வாவணங்கள் பொது ஆய்விற்காகப் பேணப்பட்டு வருகின்றன.",
  href: "/nandrigal.htm"
};

export { allEssaysData };
