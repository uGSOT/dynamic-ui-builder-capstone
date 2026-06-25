export default function HeroSectionHeader({
  headline,
  subtext,
  textAlign = "center",
  inverted = false,
}) {
  if (!headline && !subtext) return null;

  const titleClass = inverted ? "text-ink-inverse" : "text-ink";
  const subtitleClass = inverted ? "text-ink-inverse-muted" : "text-ink-muted";
  const alignClass = textAlign === "left" ? "text-left" : "text-center";
  const subtextMargin = textAlign === "left" ? "" : "mx-auto";

  return (
    <div className={alignClass}>
      {headline && (
        <h1
          className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${titleClass}`}
        >
          {headline}
        </h1>
      )}
      {subtext && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${subtextMargin} ${subtitleClass}`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
