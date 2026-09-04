/* Site behaviour: menu sheet, image fallbacks, archive catalog,
   publications register, sources ledger. */
(function () {
  "use strict";
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const LANG = document.documentElement.lang || "ta";
  const PFX = LANG === "en" ? "/en" : "";
  const T = window.TNA;
  const catBySlug = Object.fromEntries(T.cats.map(c => [c.slug, c]));
  const subBySlug = Object.fromEntries(T.subs.map(s => [s.slug, s]));

  const STR = {
    ta: {
      readable: "முழு வாசிப்புப் பிரதி", lending: "ஆவணப் பார்வை",
      all: "அனைத்தும்", records: "பதிவுகள்", read: "வாசிக்க",
      subject: "துறை வரிசை", chrono: "ஆண்டு வரிசை",
      searchPh: "தலைப்பு, ஆண்டு, துறை தேடல்…", noResults: "தேடலுக்குப் பொருத்தமான ஆவணப் பதிவுகள் ஏதுமில்லை.",
      clear: "தேடலை மீட்டமைக்க", copy: "நகல் செய்", copied: "நகலெடுக்கப்பட்டது",
      noJs: "இந்தப் பட்டியலைக் காட்ட JavaScript இயக்கவும்.",
    },
    en: {
      readable: "Readable", lending: "Lending",
      all: "All", records: "records", read: "Read",
      subject: "By Subject", chrono: "Chronological",
      searchPh: "Search title, year, category…", noResults: "No records match your search.",
      clear: "Clear search", copy: "Copy", copied: "Copied",
      noJs: "Enable JavaScript to view this register.",
    },
  }[LANG];

  const badge = st => st === "readable"
    ? `<span class="badge badge-readable">${STR.readable}</span>`
    : `<span class="badge badge-lending">${STR.lending}</span>`;

  /* ---------- Menu sheet ---------- */
  const menuBtn = $(".menu-btn"), sheet = $(".menu-sheet");
  if (menuBtn && sheet) {
    const close = () => { sheet.classList.remove("open"); document.body.style.overflow = ""; };
    menuBtn.addEventListener("click", () => {
      sheet.classList.add("open"); document.body.style.overflow = "hidden";
      $(".menu-close", sheet).focus();
    });
    $(".menu-close", sheet).addEventListener("click", close);
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    $$(".menu-links a", sheet).forEach(a => a.addEventListener("click", close));
  }

  /* ---------- Broken image -> placeholder ---------- */
  document.addEventListener("error", e => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    const holder = img.closest(".plate-mat") || img.parentElement;
    if (!holder) return;
    const ph = document.createElement("div");
    ph.className = "img-placeholder";
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", img.alt || "");
    ph.textContent = "ஃ";
    holder.replaceChild(ph, img);
    const plate = img.closest(".plate");
    if (plate) plate.classList.add("img-missing");
  }, true);

  /* ---------- Search input helper ---------- */
  function wireSearch(root, onInput) {
    if (!root) return;
    const input = $("input", root), clear = $(".clear", root);
    input.addEventListener("input", () => {
      root.classList.toggle("has-value", !!input.value);
      onInput(input.value.trim().toLowerCase());
    });
    clear.addEventListener("click", () => {
      input.value = ""; root.classList.remove("has-value");
      onInput("");
      input.focus();
    });
  }

  /* ---------- Empty-state reset buttons ---------- */
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-clear]");
    if (!btn) return;
    const input = document.getElementById(btn.dataset.clear);
    if (!input) return;
    input.value = "";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.focus();
  });

  /* ---------- Copy-to-clipboard buttons ---------- */
  document.addEventListener("click", e => {
    const btn = e.target.closest(".copy-btn");
    if (!btn || !btn.dataset.copy) return;
    const text = btn.dataset.copy;
    const done = () => {
      const old = btn.textContent;
      btn.textContent = "✓ " + STR.copied;
      btn.style.borderColor = "var(--emerald)";
      btn.style.color = "var(--emerald)";
      setTimeout(() => {
        btn.textContent = old;
        btn.style.borderColor = "";
        btn.style.color = "";
      }, 1400);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done, done);
    } else {
      done();
    }
  });

  /* ---------- Archive catalog ---------- */
  const catRoot = $("#catalog");
  if (catRoot) {
    const state = { q: "", cat: "", sub: "", sort: "subject" };
    const pillsRow = $("#cat-pills"), subRow = $("#cat-subpills");
    const tbody = $("#cat-tbody"), cards = $("#cat-cards"), count = $("#cat-count");
    const empty = $("#cat-empty");

    function pill(label, active, cls, onClick) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "pill" + (cls ? " " + cls : "") + (active ? " active" : "");
      b.textContent = label; b.addEventListener("click", onClick);
      return b;
    }

    function drawPills() {
      pillsRow.innerHTML = "";
      pillsRow.appendChild(pill(STR.all, !state.cat, "", () => { state.cat = ""; state.sub = ""; sync(); }));
      T.cats.forEach(c => pillsRow.appendChild(pill(
        LANG === "ta" ? c.ta : c.en, state.cat === c.slug, "",
        () => { state.cat = c.slug; state.sub = ""; sync(); }
      )));
      subRow.innerHTML = "";
      if (state.cat) {
        T.subs.filter(s => s.cat === state.cat).forEach(s =>
          subRow.appendChild(pill(LANG === "ta" ? s.ta : s.en, state.sub === s.slug, "pill-sub",
            () => { state.sub = state.sub === s.slug ? "" : s.slug; sync(); }))
        );
      }
    }

    function filtered() {
      return T.works.filter(w => {
        if (state.cat && w.cat !== state.cat) return false;
        if (state.sub && w.sub !== state.sub) return false;
        if (state.q) {
          const c = catBySlug[w.cat], s = subBySlug[w.sub];
          const hay = [w.title, w.titleTa, w.details, w.year, c && (LANG === "ta" ? c.ta : c.en), s && (LANG === "ta" ? s.ta : s.en)]
            .join(" ").toLowerCase();
          if (!hay.includes(state.q)) return false;
        }
        return true;
      }).slice().sort((a, b) => state.sort === "chrono"
        ? a.yearStart - b.yearStart || a.title.localeCompare(b.title)
        : 0);
    }

    function render() {
      const rows = filtered();
      count.textContent = `${rows.length} ${STR.records}`;
      const has = rows.length > 0;
      empty.hidden = has;
      count.hidden = !has;
      $("#cat-table-wrap").hidden = !has;
      cards.hidden = !has;
      tbody.innerHTML = ""; cards.innerHTML = "";
      rows.forEach((w, i) => {
        const c = catBySlug[w.cat];
        const href = `${PFX}/archive/documents/${w.slug}/`;
        const title = LANG === "ta" ? (w.titleTa || w.title) : w.title;
        const tr = document.createElement("tr");
        tr.className = "row-link";
        tr.innerHTML = `
          <td class="cell-no">${String(i + 1).padStart(2, "0")}</td>
          <td><span class="cell-title">${title}</span>${LANG === "en" && w.titleTa ? `<span class="ta-title">${w.titleTa}</span>` : ""}<div class="cell-details">${w.details}</div></td>
          <td class="cell-year">${w.year}</td>
          <td><span class="cat-chip ${c.cls}">${LANG === "ta" ? c.ta : c.en}</span></td>
          <td><a class="text-link-arrow" href="${href}">${STR.read}</a></td>`;
        tr.addEventListener("click", e => { if (!e.target.closest("a")) location.href = href; });
        tbody.appendChild(tr);
        const card = document.createElement("a");
        card.className = "record-card"; card.href = href;
        card.innerHTML = `
          <div class="rc-meta"><span>${w.year}</span>${badge(w.status)}</div>
          <div class="rc-title">${title}</div>
          <div class="rc-details">${w.details}</div>
          <div class="rc-meta"><span class="cat-chip ${c.cls}">${LANG === "ta" ? c.ta : c.en}</span><span class="rc-action">${STR.read} →</span></div>`;
        cards.appendChild(card);
      });
    }

    function sync() {
      const url = new URL(location);
      state.cat ? url.searchParams.set("cat", state.cat) : url.searchParams.delete("cat");
      history.replaceState(null, "", url);
      drawPills(); render();
    }

    wireSearch($("#cat-search"), q => { state.q = q; render(); });
    $$("#cat-sort button").forEach(b => b.addEventListener("click", () => {
      state.sort = b.dataset.sort;
      $$("#cat-sort button").forEach(x => x.classList.toggle("active", x === b));
      render();
    }));
    const qsCat = new URLSearchParams(location.search).get("cat");
    if (qsCat && catBySlug[qsCat]) state.cat = qsCat;
    sync();
  }

  /* ---------- Publications register (contributions) ---------- */
  const regRoot = $("#register");
  if (regRoot) {
    const state = { status: "all" };
    const pillsRow = $("#reg-pills"), tbody = $("#reg-tbody"), cards = $("#reg-cards");
    const count = $("#reg-count"), empty = $("#reg-empty");

    function render() {
      const rows = T.works.slice().sort((a, b) => a.yearStart - b.yearStart)
        .filter(w => state.status === "all" || w.status === state.status);
      count.textContent = `${rows.length} ${STR.records}`;
      const has = rows.length > 0;
      empty.hidden = has; count.hidden = !has;
      $("#reg-table-wrap").hidden = !has; cards.hidden = !has;
      tbody.innerHTML = ""; cards.innerHTML = "";
      rows.forEach(w => {
        const href = `${PFX}/archive/documents/${w.slug}/`;
        const title = LANG === "ta" ? (w.titleTa || w.title) : w.title;
        const tr = document.createElement("tr");
        tr.className = "row-link";
        tr.innerHTML = `
          <td class="cell-year">${w.year}</td>
          <td><span class="cell-title">${title}</span>${LANG === "en" && w.titleTa ? `<span class="ta-title">${w.titleTa}</span>` : ""}<div class="cell-details">${w.details}</div></td>
          <td>${badge(w.status)}</td>
          <td><a class="text-link-arrow" href="${href}">${STR.read}</a></td>`;
        tr.addEventListener("click", e => { if (!e.target.closest("a")) location.href = href; });
        tbody.appendChild(tr);
        const card = document.createElement("a");
        card.className = "record-card"; card.href = href;
        card.innerHTML = `
          <div class="rc-meta"><span>${w.year}</span>${badge(w.status)}</div>
          <div class="rc-title">${title}</div>
          <div class="rc-details">${w.details}</div>
          <span class="rc-action">${STR.read} →</span>`;
        cards.appendChild(card);
      });
    }

    pillsRow.innerHTML = "";
    [["all", STR.all], ["readable", STR.readable], ["lending", STR.lending]].forEach(([key, label]) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "pill" + (state.status === key ? " active" : "");
      b.textContent = label;
      b.addEventListener("click", () => {
        state.status = key;
        $$("button", pillsRow).forEach(x => x.classList.toggle("active", x === b));
        render();
      });
      pillsRow.appendChild(b);
    });
    render();
  }

  /* ---------- Sources ledger ---------- */
  const srcRoot = $("#sources");
  if (srcRoot) {
    const tbody = $("#src-tbody"), cards = $("#src-cards");
    const count = $("#src-count"), empty = $("#src-empty");

    function render(q) {
      const rows = T.sources.filter(s => !q ||
        `${s.id} ${s.title} ${s.type} ${s.url}`.toLowerCase().includes(q));
      count.textContent = `${rows.length} ${STR.records}`;
      const has = rows.length > 0;
      empty.hidden = has; count.hidden = !has;
      $("#src-table-wrap").hidden = !has; cards.hidden = !has;
      tbody.innerHTML = ""; cards.innerHTML = "";
      rows.forEach(s => {
        const host = (() => { try { return new URL(s.url).hostname; } catch { return s.url; } })();
        const tr = document.createElement("tr");
        tr.id = s.id.toLowerCase();
        tr.innerHTML = `
          <td><span class="chip">${s.id}</span></td>
          <td><span class="cell-title">${s.title}</span></td>
          <td class="cell-details">${s.type}</td>
          <td><a href="${s.url}" target="_blank" rel="noopener">${host} ↗</a></td>
          <td><button type="button" class="rt-btn copy-cite" data-id="${s.id}">${STR.copy}</button></td>`;
        tr.querySelector(".chip").setAttribute("aria-label", `${s.id}: ${s.title}`);
        tbody.appendChild(tr);
        const card = document.createElement("div");
        card.className = "record-card"; card.id = s.id.toLowerCase();
        card.innerHTML = `
          <div class="rc-meta"><span class="chip" aria-label="${s.id}: ${s.title}">${s.id}</span></div>
          <div class="rc-title">${s.title}</div>
          <div class="rc-details">${s.type}</div>
          <div class="rc-meta"><a href="${s.url}" target="_blank" rel="noopener">${host} ↗</a>
          <button type="button" class="rt-btn copy-cite" data-id="${s.id}">${STR.copy}</button></div>`;
        cards.appendChild(card);
      });
      $$("button.copy-cite").forEach(b => {
        if (b.dataset.wired) return;
        b.dataset.wired = "1";
        b.addEventListener("click", () => {
          const s = T.sources.find(x => x.id === b.dataset.id);
          const text = `${s.id}. ${s.title}. ${s.type}. ${s.url}`;
          const done = () => {
            const old = b.textContent; b.textContent = "✓ " + STR.copied;
            setTimeout(() => { b.textContent = old; }, 1200);
          };
          if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done);
          else done();
        });
      });
    }

    wireSearch($("#src-search"), q => render(q));
    render("");

    function flash() {
      const el = document.getElementById(location.hash.slice(1).toLowerCase());
      if (!el) return;
      el.style.transition = "background 2s ease";
      el.style.background = "var(--accent-wash)";
      el.scrollIntoView({ block: "center" });
      setTimeout(() => { el.style.background = ""; }, 2200);
    }
    flash();
    window.addEventListener("hashchange", flash);
  }
})();
