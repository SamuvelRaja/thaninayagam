import type { Metadata } from "next";
import "./globals.css";
import { FontLoader } from "@/components/FontLoader";

export const metadata: Metadata = {
  title: "தனிநாயக அடிகள் — எண்மிய ஆவணகமும் ஆய்வுப் பதிப்பும்",
  description: "அருள்திரு. முனைவர் சேவியர் தனிநாயகம் அடிகளாரின் (1913–1980) வாழ்வு, எழுத்துகள் மற்றும் உலகளாவிய தமிழியல் பணிகளின் திறந்தவெளி எண்மிய ஆவணகம்.",
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
      </head>
      <body>
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
