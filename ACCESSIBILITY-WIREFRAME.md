# Accessibility-first wireframe

Audience: decision-makers aged 70 and above. The site should feel like a calm, trustworthy reference archive—not an interactive exhibit. No 3D models.

## Site map

```text
Home
  ├── Biography
  ├── Timeline
  ├── Contributions
  ├── Archive
  └── Sources
```

## Shared chrome

```text
┌──────────────────────────────────────────────────────────────┐
│ Skip to main content                                        │
├──────────────────────────────────────────────────────────────┤
│ Thani Nayagam Digital Archive                               │
│ Home | Biography | Timeline | Contributions | Archive |     │
│ Sources                                                     │
├──────────────────────────────────────────────────────────────┤
│ [page content]                                              │
├──────────────────────────────────────────────────────────────┤
│ Footer with secondary links + back to main content          │
└──────────────────────────────────────────────────────────────┘
```

## Home

```text
│ 1913–1980                                                   │
│ THANI NAYAGAM ADIGAL                         [Place image]  │
│ Roving Ambassador of Tamil                                  │
│ One-sentence explanation of who he was and why he matters.  │
│ [Read his biography]  [View the timeline]                   │
│                                                             │
│ Known for: Scholarship | Publishing | Global collaboration │
│ Explore links to each section page                          │
│ Present-day place photographs with permanent captions       │
```

## Interaction and accessibility rules

- Use one `h1` per page, followed by correctly ordered `h2` and `h3` headings.
- Keep navigation visible instead of hiding it behind a menu.
- Mark the current page with `aria-current="page"`.
- Use a minimum ~20px reading size, generous line spacing, and a narrow text measure.
- Maintain strong text/background contrast and visible keyboard focus.
- Keep links underlined in body content; make primary actions look like buttons.
- Do not auto-play animation, auto-scroll content, hide the header, or require dragging.
- Respect browser zoom and `prefers-reduced-motion`.
- Prefer clear documentary photographs over decorative or interpretive media.
