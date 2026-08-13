export default function Breadcrumbs({ items = [], lang = "en" }) {
  if (!items.length) return null;

  return (
    <nav
      className="breadcrumbs"
      aria-label={lang === "ta" ? "வழித்தடம்" : "Breadcrumb"}
    >
      <ol>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`}>
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
