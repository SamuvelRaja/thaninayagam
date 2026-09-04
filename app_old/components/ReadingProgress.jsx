"use client";

import { useEffect, useState } from "react";

/** Thin top-of-viewport bar showing how far the reader has scrolled in a document. */
export default function ReadingProgress({
  lang = "en",
  targetSelector = ".document-reader",
}) {
  const [progress, setProgress] = useState(0);
  const label = lang === "ta" ? "வாசிப்பு முன்னேற்றம்" : "Reading progress";

  useEffect(() => {
    const target = document.querySelector(targetSelector);
    if (!target) return undefined;

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = target.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(rect.bottom <= window.innerHeight ? 100 : 0);
        return;
      }
      const scrolled = Math.min(scrollable, Math.max(0, -rect.top));
      setProgress((scrolled / scrollable) * 100);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [targetSelector]);

  return (
    <div
      className="reading-progress"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <span
        className="reading-progress-fill"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
