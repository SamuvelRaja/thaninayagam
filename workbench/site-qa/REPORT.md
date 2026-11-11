# Desktop and mobile QA — 9 October 2026

Reviewed all 62 exported routes (60 content pages and two error routes) through ego-browser.

## Coverage

- 248 route checks at widths 320, 390, 768 and 1440px: no horizontal page overflow, out-of-viewport heading/body text, broken images, missing local anchors or missing internal destination files.
- Full-page visual review of all ten main Tamil/English pages at 390 and 1440px. Representative Tamil and English readers inspected visually.
- All ten English heading fonts checked on every route at 320 and 1024px: 1,240 font/layout combinations with no overflow.
- All 50 readers checked at 125% text size on 320px screens: no body text overflow.
- Native interaction checks: mobile and desktop dropdowns, font selection/reset/Escape, colour picker, reader themes and zoom, drawer focus containment/return, contents jumps, reading progress, archive search/category/sort/reset/reload, home filters and publication-register filters.
- Timeline retains three events per desktop row and only horizontal/vertical path segments; the progress line advances on scroll.

## Repairs

- Keep font-picker heading, close control and reset visible in short landscape viewports; scroll the font choices independently. Use a native radio group in a normal scrolling grid to avoid fieldset scrolling defects.
- Bound colour-picker height in landscape and enlarge picker close/reset targets.
- Hide preview widgets while a mobile menu or reader drawer is open.
- Enlarge mobile reader controls to 44px, lock background scrolling, prevent access to a closed drawer, keep keyboard focus within the open drawer, and return focus when dismissed.
- Restore white statistics on the primary-colour panel; make the support banner follow the selected primary colour.
- Synchronise local archive filters with browser history, including reset, without fetching the static page again.
- Disable ETags in the preview command: the installed serve-handler creates an unused file stream before returning a 304 response, exhausting file descriptors during repeated page visits.

## Validation

The final production build and TypeScript checks pass. git diff --check passes. The dev server is running on port 3000 and the updated static preview on port 3001.

Viewport checks use Chromium emulation; no physical-device or Safari/Firefox run was performed. Route evidence is in final.json, reader enlargement evidence in reader-zoom.json, and screenshots in this directory.

## Permanent Marker update

Permanent Marker is now the default English heading font. Rechecked all 62 routes at 320 and 1440px (124 checks, zero overflow/clipping issues). Confirmed the actual font loads for English document titles on Tamil routes, while body text remains Spectral. Homepage and reader mobile screenshots are in the parent workbench directory. Production build and TypeScript checks pass.
