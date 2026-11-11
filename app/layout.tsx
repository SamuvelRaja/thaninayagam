import type { Metadata } from "next";
import "./globals.css";
import { FontLoader } from "@/components/FontLoader";

export const metadata: Metadata = {
  title: "தனிநாயகம் அடிகள் — ஆவணகம்",
  description: "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் (1913–1980) வாழ்வு, எழுத்துகள் மற்றும் உலகளாவிய தமிழியல் பணிகளின் திறந்தவெளி ஆவணகம்.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var p=window.location.pathname;document.documentElement.lang=(p==='\\/en'||p.indexOf('\\/en\\/')===0)?'en':'ta'}catch(e){}`,
          }}
        />
        {/* Google Fonts fallback */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/assets/fonts/noto-sans-tamil-normal-400-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/noto-sans-tamil-normal-600-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/noto-sans-tamil-normal-400-tamil.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Preload critical local fonts for instant, zero-FOUT rendering */}
        <link
          rel="preload"
          href="/assets/fonts/spectral-normal-400-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/spectral-normal-700-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/tamil-sangam-mn-normal-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/tamil-sangam-mn-normal-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/noto-serif-tamil-normal-400-tamil.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/noto-serif-tamil-normal-700-tamil.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/ibm-plex-mono-normal-400-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/brush-display-0.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/brush-display-3.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload hero portrait and blue sun for instant LCP rendering on mobile & desktop */}
        <link
          rel="preload"
          href="/images/brush/blue-sun.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/brush/thani-nayagam-cutout.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body>
        <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }} aria-hidden="true">
          <defs>
            <filter id="accent-sun-blue" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="0.08235294117647059 0 0 0 0 0.34509803921568627 0 0 0 0 0.9098039215686274 0 0 0 0 0 0 0 1 0" />
            </filter>
            <filter id="tamil-dry-brush" x="-10%" y="-20%" width="120%" height="140%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.035 0.22" numOctaves="2" seed="31" result="edge" />
              <feDisplacementMap in="SourceGraphic" in2="edge" scale="2.4" xChannelSelector="R" yChannelSelector="G" result="letter" />
              <feTurbulence type="fractalNoise" baseFrequency="0.045 0.34" numOctaves="3" seed="9" result="grain" />
              <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 8 0 0 0 -4.7" result="bristles" />
              <feComponentTransfer in="bristles" result="drygrain"><feFuncA type="table" tableValues="0 0.28" /></feComponentTransfer>
              <feComposite in="letter" in2="drygrain" operator="out" />
            </filter>
            <filter id="tamil-dry-brush-small" x="-10%" y="-20%" width="120%" height="140%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.045 0.26" numOctaves="2" seed="31" result="edge" />
              <feDisplacementMap in="SourceGraphic" in2="edge" scale="1.1" xChannelSelector="R" yChannelSelector="G" result="letter" />
              <feTurbulence type="fractalNoise" baseFrequency="0.06 0.38" numOctaves="3" seed="9" result="grain" />
              <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 7 0 0 0 -4.1" result="bristles" />
              <feComponentTransfer in="bristles" result="drygrain"><feFuncA type="table" tableValues="0 0.28" /></feComponentTransfer>
              <feComposite in="letter" in2="drygrain" operator="out" />
            </filter>
            {/* Master Brush Typography Engine for Headings */}
            <filter id="tamil-brush-engine" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.04 0.16" numOctaves="4" result="noise" seed="42" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="5.5" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feMorphology in="displaced" operator="dilate" radius="0.4" result="thickened" />
              <feMerge>
                <feMergeNode in="thickened" opacity="0.4" />
                <feMergeNode in="displaced" />
              </feMerge>
            </filter>

            {/* Subtle Brush Filter for Section Subheads and H2 */}
            <filter id="tamil-brush-subtle" x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.05 0.15" numOctaves="3" result="noise" seed="14" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feMorphology in="displaced" operator="dilate" radius="0.2" result="thickened" />
              <feMerge>
                <feMergeNode in="thickened" opacity="0.3" />
                <feMergeNode in="displaced" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
