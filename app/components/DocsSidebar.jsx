import {
  archiveTaxonomy,
  sortDocsByTitle,
  taxonomyFor,
} from "@/app/lib/archiveMeta";

/** Learn-style sidebar: category → subcategory → titles. */
export default function DocsSidebar({
  documents = [],
  currentSlug,
  lang = "en",
}) {
  const archiveHref = lang === "ta" ? "/archive/" : "/en/archive/";
  const base =
    lang === "ta" ? "/archive/documents/" : "/en/archive/documents/";

  const copy =
    lang === "ta"
      ? {
          nav: "ஆவண வழிசெலுத்தல்",
          index: "அனைத்து ஆவணங்கள்",
          learn: "ஆவணகம்",
          menu: "ஆவணப் பட்டியல்",
        }
      : {
          nav: "Archive navigation",
          index: "All holdings",
          learn: "Archive",
          menu: "In this archive",
        };

  const sections = archiveTaxonomy
    .map((category) => {
      const subs = category.subcategories
        .map((sub) => {
          const items = sortDocsByTitle(
            documents.filter((doc) => {
              const tax = taxonomyFor(doc);
              return (
                tax.categoryId === category.id &&
                tax.subcategoryId === sub.id
              );
            }),
          );
          if (!items.length) return null;
          return {
            id: sub.id,
            label: lang === "ta" ? sub.ta.label : sub.en.label,
            items,
          };
        })
        .filter(Boolean);

      if (!subs.length) return null;
      return {
        id: category.id,
        label: lang === "ta" ? category.ta.label : category.en.label,
        subs,
      };
    })
    .filter(Boolean);

  const tree = (
    <>
      <a className="docs-sidebar-index" href={`${archiveHref}#holdings`}>
        {copy.index}
      </a>
      <p className="docs-sidebar-heading">{copy.learn}</p>
      {sections.map((category) => (
        <div key={category.id} className="docs-sidebar-group">
          <p className="docs-sidebar-group-label">{category.label}</p>
          {category.subs.map((sub) => (
            <div key={sub.id} className="docs-sidebar-sub">
              <p className="docs-sidebar-sub-label">{sub.label}</p>
              <ul>
                {sub.items.map((doc) => {
                  const active = doc.slug === currentSlug;
                  return (
                    <li key={doc.slug}>
                      <a
                        href={`${base}${doc.slug}/`}
                        aria-current={active ? "page" : undefined}
                        className={active ? "is-active" : undefined}
                      >
                        <span className="docs-sidebar-title">{doc.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );

  return (
    <nav className="docs-sidebar" aria-label={copy.nav}>
      <details className="docs-sidebar-mobile">
        <summary>{copy.menu}</summary>
        <div className="docs-sidebar-panel">{tree}</div>
      </details>
      <div className="docs-sidebar-desktop">{tree}</div>
    </nav>
  );
}
