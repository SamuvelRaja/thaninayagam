"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Point = { x: number; y: number; distance: number };

/** Enhance the server-rendered chronology without hiding its reading content. */
export function TimelineProgress({ children, layout = "chapters" }: { children: ReactNode; layout?: "chapters" | "rows" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const baseRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const tipRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const svg = svgRef.current;
    const base = baseRef.current;
    const progress = progressRef.current;
    const tip = tipRef.current;
    if (!track || !svg || !base || !progress || !tip) return;

    const rows = layout === "rows";
    const events = Array.from(track.querySelectorAll<HTMLElement>(rows ? ".living-journey-event" : ".life-event"));
    const markers = events.map(event => event.querySelector<HTMLElement>(rows ? ".living-journey-marker" : ".life-event-marker")!);
    const links = rows ? [] : Array.from(track.closest(".life-timeline")!.querySelectorAll<HTMLAnchorElement>(".life-era-nav a"));
    let points: (Point & { readingY: number })[] = [];
    let route: Point[] = [];
    let trackTop = 0;
    let total = 0;
    let frame = 0;
    let needsMeasure = true;

    const measure = () => {
      const rect = track.getBoundingClientRect();
      trackTop = rect.top + window.scrollY;
      const bounds = markers.map(marker => marker.getBoundingClientRect());
      const multiColumn = rows && bounds.length > 1 && Math.abs(bounds[0].top - bounds[1].top) < 1;
      let distance = 0;
      route = [];
      const addPoint = (x: number, y: number) => {
        const previous = route[route.length - 1];
        if (previous) distance += Math.hypot(x - previous.x, y - previous.y);
        const point = { x, y, distance };
        route.push(point);
        return point;
      };
      points = bounds.map((bounds, index) => {
        const x = bounds.left + bounds.width / 2 - rect.left;
        const y = bounds.top + bounds.height / 2 - rect.top;
        if (index > 0) {
          const previous = route[route.length - 1];
          if (multiColumn) {
            if (Math.abs(previous.y - y) > 1) {
              const edgeX = previous.x > rect.width / 2 ? rect.width - 8 : 8;
              addPoint(edgeX, previous.y);
              addPoint(edgeX, y);
            }
          } else {
            const turnY = previous.y + (y - previous.y) / 2;
            addPoint(previous.x, turnY);
            addPoint(x, turnY);
          }
        }
        return { ...addPoint(x, y), readingY: y };
      });
      if (multiColumn) {
        // Spread each horizontal row across its reading height as it scrolls.
        for (let first = 0; first < points.length;) {
          let next = first + 1;
          while (next < points.length && Math.abs(points[next].y - points[first].y) < 1) next++;
          const span = next < points.length ? points[next].y - points[first].y : Math.max(...events.slice(first, next).map(event => event.offsetHeight));
          for (let index = first; index < next; index++) points[index].readingY += span * (index - first) / (next - first);
          first = next;
        }
      }
      total = distance;
      const path = route.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
      svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
      base.setAttribute("d", path);
      progress.setAttribute("d", path);
      progress.style.strokeDasharray = `${total} ${total}`;
      track.dataset.ready = "true";
    };

    const update = () => {
      frame = 0;
      if (needsMeasure) {
        measure();
        needsMeasure = false;
      }
      if (points.length < 2) return;

      // The reading position sits below the masthead, within the viewport.
      const headerBottom = document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;
      const readingY = Math.max(window.innerHeight * 0.62, headerBottom + 48);
      const cutoff = window.scrollY + readingY - trackTop;
      let current = -1;
      points.forEach((point, index) => {
        if (point.readingY <= cutoff) current = index;
      });

      let distance = 0;
      if (current >= points.length - 1) {
        distance = total;
      } else if (current >= 0) {
        const start = points[current];
        const end = points[current + 1];
        const fraction = Math.max(0, Math.min(1, (cutoff - start.readingY) / (end.readingY - start.readingY)));
        distance = start.distance + (end.distance - start.distance) * fraction;
      }

      // Interpolate along the actual route so horizontal turns fill smoothly too.
      const endIndex = Math.max(1, route.findIndex(point => point.distance >= distance));
      const start = route[endIndex - 1];
      const end = route[endIndex];
      const fraction = end.distance > start.distance ? (distance - start.distance) / (end.distance - start.distance) : 0;
      const position = { x: start.x + (end.x - start.x) * fraction, y: start.y + (end.y - start.y) * fraction };

      progress.style.strokeDashoffset = String(total - distance);
      tip.setAttribute("cx", String(position.x));
      tip.setAttribute("cy", String(position.y));
      tip.style.opacity = current >= 0 ? "1" : "0";
      events.forEach((event, index) => {
        event.classList.toggle("is-reached", index <= current);
        event.classList.toggle("is-current", index === current);
      });
      const chapter = current >= 0 ? events[current].closest(".life-era")?.id : undefined;
      links.forEach(link => {
        if (chapter && link.hash === `#${chapter}`) link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
      });
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const resize = () => {
      needsMeasure = true;
      schedule();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(track);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    schedule();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frame);
    };
  }, [layout]);

  return <div className={layout === "rows" ? "home-journey-timeline" : "life-timeline-chapters"} ref={trackRef}>
    <svg className="life-timeline-path" ref={svgRef} aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <path className="life-timeline-path-base" ref={baseRef} />
      <path className="life-timeline-path-progress" ref={progressRef} />
      <circle className="life-timeline-path-tip" ref={tipRef} r="5" />
    </svg>
    {children}
  </div>;
}
