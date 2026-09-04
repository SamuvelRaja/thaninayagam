"use client";

import { useEffect, useRef, useState } from "react";

const ZOOM_MIN = 80;
const ZOOM_MAX = 150;
const ZOOM_STEP = 10;
const THEMES = ["light", "sepia", "dark"];

export default function ReaderControls({ lang = "en" }) {
  const copy =
    lang === "ta"
      ? {
          group: "படிக்கும் கட்டுப்பாடுகள்",
          zoomLabel: "எழுத்து அளவு",
          smaller: "எழுத்தைச் சிறிதாக்கு",
          larger: "எழுத்தைப் பெரிதாக்கு",
          measure: "அகல வரி",
          themeLabel: "வாசிப்புத் தோற்றம்",
          light: "வெளிர்",
          sepia: "செப்பியா",
          dark: "இருள்",
        }
      : {
          group: "Reading controls",
          zoomLabel: "Text size",
          smaller: "Smaller text",
          larger: "Larger text",
          measure: "Wide lines",
          themeLabel: "Reading theme",
          light: "Light",
          sepia: "Sepia",
          dark: "Dark",
        };

  const [zoom, setZoom] = useState(100);
  const [wide, setWide] = useState(false);
  const [theme, setTheme] = useState("light");
  const hostRef = useRef(null);

  useEffect(() => {
    const root =
      hostRef.current?.closest(".docs-main") ||
      hostRef.current?.closest(".document-reader");
    if (!root) return undefined;

    root.style.setProperty("--reader-zoom", String(zoom / 100));
    root.classList.toggle("is-measure-wide", wide);
    root.classList.toggle("is-theme-sepia", theme === "sepia");
    root.classList.toggle("is-theme-dark", theme === "dark");

    return () => {
      root.classList.remove(
        "is-measure-wide",
        "is-theme-sepia",
        "is-theme-dark",
      );
    };
  }, [zoom, wide, theme]);

  const clampZoom = (value) =>
    Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, value));

  return (
    <div ref={hostRef} className="reader-controls" role="group" aria-label={copy.group}>
      <div
        className="reader-controls-group"
        role="group"
        aria-label={copy.zoomLabel}
      >
        <button
          type="button"
          className="reader-controls-btn"
          aria-label={copy.smaller}
          disabled={zoom <= ZOOM_MIN}
          onClick={() => setZoom((z) => clampZoom(z - ZOOM_STEP))}
        >
          A−
        </button>
        <span className="reader-controls-zoom" aria-live="polite">
          {zoom}%
        </span>
        <button
          type="button"
          className="reader-controls-btn"
          aria-label={copy.larger}
          disabled={zoom >= ZOOM_MAX}
          onClick={() => setZoom((z) => clampZoom(z + ZOOM_STEP))}
        >
          A+
        </button>
      </div>

      <button
        type="button"
        className={`reader-controls-btn${wide ? " is-on" : ""}`}
        aria-pressed={wide}
        onClick={() => setWide((w) => !w)}
      >
        {copy.measure}
      </button>

      <div
        className="reader-controls-group"
        role="group"
        aria-label={copy.themeLabel}
      >
        {THEMES.map((name) => (
          <button
            key={name}
            type="button"
            className={`reader-controls-btn reader-controls-theme-${name}${theme === name ? " is-on" : ""}`}
            aria-pressed={theme === name}
            onClick={() => setTheme(name)}
          >
            {copy[name]}
          </button>
        ))}
      </div>
    </div>
  );
}
