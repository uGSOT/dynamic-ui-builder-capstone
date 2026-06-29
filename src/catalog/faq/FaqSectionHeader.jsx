export default function FaqSectionHeader({
  heading,
  subheading,
  inverted = false,
}) {
  if (!heading && !subheading) return null;

  const titleClass = inverted ? "text-ink-inverse" : "text-text";
  const subtitleClass = inverted ? "text-ink-inverse-muted" : "text-ink-muted";

  return (
    <div className="mb-8 text-center sm:mb-10">
      {heading && (
        <h2
          className={`text-2xl font-bold tracking-tight sm:text-3xl ${titleClass}`}
        >
          {heading}
        </h2>
      )}
      {subheading && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base ${subtitleClass}`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
