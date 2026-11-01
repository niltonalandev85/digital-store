import "./Section.css";

export default function Section({
  title,
  titleAlign = "left",
  link,
  children,
}) {
  return (
    <section className="section">
      <div className={`section-header section-header-${titleAlign}`}>
        <h2 className="section-title">{title}</h2>

        {link && (
          <a href={link.href} className="section-link">
            {link.text} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      <div className="section-content">{children}</div>
    </section>
  );
}
