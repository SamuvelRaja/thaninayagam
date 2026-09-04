/* Reader apparatus: breadcrumbs, document header, TOC scroll-spy,
   zoom / measure / themes, progress bar, pager. */
(function () {
  "use strict";
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const LANG = document.documentElement.lang || "ta";
  const PFX = LANG === "en" ? "/en" : "";
  const T = window.TNA;
  const STR = {
    ta: { contents: "உள்ளடக்கம்", readable: "வாசிக்க", lending: "கடன் வழங்கல்",
          prev: "முந்தையது", next: "அடுத்தது", home: "முகப்பு", archive: "ஆவணகம்", source: "மூலம்" },
    en: { contents: "Contents", readable: "Readable", lending: "Lending",
          prev: "Previous", next: "Next", home: "Home", archive: "Archive", source: "Source" },
  }[LANG];
  const srcObj = id => T.sources.find(s => s.id === id);
  const srcTitle = id => (srcObj(id) || {}).title || id;

  const m = location.pathname.match(/archive\/documents\/([^/]+)/);
  const doc = m && T.works.find(w => w.slug === m[1]);
  if (!doc) return;

  const cat = T.cats.find(c => c.slug === doc.cat);
  const sub = T.subs.find(s => s.slug === doc.sub);
  const title = LANG === "ta" ? (doc.titleTa || doc.title) : doc.title;

  /* ---------- Breadcrumbs ---------- */
  const crumb = $("#crumbs");
  if (crumb) {
    crumb.innerHTML = `
      <a href="${PFX}/">${STR.home}</a><span class="sep">/</span>
      <a href="${PFX}/archive/">${STR.archive}</a><span class="sep">/</span>
      <a href="${PFX}/archive/?cat=${cat.slug}">${LANG === "ta" ? cat.ta : cat.en}</a><span class="sep">/</span>
      <span>${title}</span>`;
  }

  /* ---------- Document header ---------- */
  const head = $("#doc-header");
  if (head) {
    head.innerHTML = `
      <p class="eyebrow">${LANG === "ta" ? cat.ta : cat.en}</p>
      <h1 class="display-2">${title}</h1>
      <div class="reader-meta">
        <span>${LANG === "ta" ? sub.ta : sub.en}</span><span>·</span>
        <span>${doc.year}</span><span>·</span>
        <span class="badge ${doc.status === "readable" ? "badge-readable" : "badge-lending"}">${doc.status === "readable" ? STR.readable : STR.lending}</span>
        ${doc.sources.map(id => {
          const s = srcObj(id);
          return s && s.url
            ? `<a class="chip" href="${s.url}" target="_blank" rel="noopener" aria-label="${STR.source} ${id}: ${srcTitle(id)}">${id}</a>`
            : `<span class="chip" aria-label="${STR.source} ${id}: ${srcTitle(id)}">${id}</span>`;
        }).join("")}
      </div>`;
  }

  /* ---------- TOC (desktop sidebar + mobile disclosure) ---------- */
  const tocHosts = $$("[data-toc]");
  const canvas = $(".reader-canvas");
  let tocItems = [];
  if (tocHosts.length && canvas) {
    const heads = $$("h2, h3", canvas);
    tocHosts.forEach(nav => {
      const ul = $("ul", nav);
      if (!ul) return;
      heads.forEach((h, i) => {
        h.id = h.id || "sec-" + i;
        let li;
        if (h.tagName === "H3" && ul.lastElementChild) {
          const parent = ul.lastElementChild;
          let subUl = parent.querySelector("ul");
          if (!subUl) { subUl = document.createElement("ul"); parent.appendChild(subUl); }
          li = document.createElement("li");
          subUl.appendChild(li);
        } else {
          li = document.createElement("li");
          ul.appendChild(li);
        }
        li.innerHTML = `<a href="#${h.id}">${h.textContent}</a>`;
        tocItems.push({ h, a: $("a", li) });
      });
    });
  }

  /* ---------- Scroll spy + progress ---------- */
  const bar = $("#progress");
  function onScroll() {
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = pct + "%";
      bar.setAttribute("aria-valuenow", String(Math.round(pct)));
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (tocItems.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          tocItems.forEach(t => t.a.classList.toggle("active", t.h === en.target));
        }
      });
    }, { rootMargin: "-80px 0px -70% 0px" });
    tocItems.forEach(t => spy.observe(t.h));
  }

  /* ---------- Toolbar: zoom / measure / theme ---------- */
  const steps = [0.875, 1, 1.125, 1.25];
  let zi = steps.indexOf(parseFloat(localStorage.getItem("tna:zoom") || "1"));
  if (zi < 0) zi = 1;
  const val = $("#zoom-value");

  function applyZoom() {
    document.documentElement.style.setProperty("--reader-scale", String(steps[zi]));
    val.textContent = Math.round(steps[zi] * 100) + "%";
    localStorage.setItem("tna:zoom", String(steps[zi]));
  }
  $("#zoom-out").addEventListener("click", () => { if (zi > 0) { zi--; applyZoom(); } });
  $("#zoom-in").addEventListener("click", () => { if (zi < steps.length - 1) { zi++; applyZoom(); } });
  applyZoom();

  const segBtns = $$("#measure-seg button");
  function applyMeasure(wide) {
    document.documentElement.style.setProperty("--measure", wide ? "46rem" : "38rem");
    segBtns.forEach(b => b.classList.toggle("active", (b.dataset.wide === "1") === wide));
    localStorage.setItem("tna:measure", wide ? "wide" : "std");
  }
  segBtns.forEach(b => b.addEventListener("click", () => applyMeasure(b.dataset.wide === "1")));
  applyMeasure(localStorage.getItem("tna:measure") === "wide");

  const dots = $$(".theme-dot");
  function applyTheme(t) {
    if (t && t !== "light") document.body.setAttribute("data-theme", t);
    else document.body.removeAttribute("data-theme");
    dots.forEach(d => d.classList.toggle("active", d.dataset.theme === t));
    localStorage.setItem("tna:theme", t || "light");
  }
  dots.forEach(d => d.addEventListener("click", () => applyTheme(d.dataset.theme)));
  applyTheme(localStorage.getItem("tna:theme") || "light");

  /* ---------- Pager (prev / next within category) ---------- */
  const pager = $("#pager");
  if (pager) {
    const siblings = T.works.filter(w => w.cat === doc.cat);
    const i = siblings.indexOf(doc);
    const prev = siblings[i - 1], next = siblings[i + 1];
    const cell = (d, label, cls) => d
      ? `<a class="${cls}" href="${PFX}/archive/documents/${d.slug}/">
           <span class="p-label">${label}</span>
           <span class="p-title">${LANG === "ta" ? (d.titleTa || d.title) : d.title}</span></a>`
      : `<span class="${cls}"></span>`;
    pager.innerHTML = cell(prev, "← " + STR.prev, "prev") + cell(next, STR.next + " →", "next");

    document.addEventListener("keydown", e => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const cv = $(".reader-canvas");
      if (!cv || !cv.contains(document.activeElement)) return;
      const a = $("a." + (e.key === "ArrowLeft" ? "prev" : "next"), pager);
      if (a) { e.preventDefault(); a.click(); }
    });
  }
})();
