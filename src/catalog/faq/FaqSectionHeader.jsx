export default function FaqSectionHeader({
  heading,
  subheading,
  align = "center",
  headingClass = "text-3xl font-bold tracking-tight text-gray-900",
  subheadingClass = "text-base leading-relaxed text-gray-500",
}) {
  if (!heading && !subheading) return null;

  const alignClass = align === "center"
    ? "text-center mx-auto"
    : align === "right"
    ? "text-right ml-auto"
    : "text-left";

  return (
    <div className={`mb-8 max-w-2xl sm:mb-10 ${alignClass}`}>
      {heading && (
        <h2 className={headingClass}>
          {heading}
        </h2>
      )}
      {subheading && (
        <p className={`mt-3 ${subheadingClass}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}