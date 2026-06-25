export default function FeatureSectionHeader({
  heading,
  subheading,
  align = "left",
  headingClass = "text-4xl font-bold text-gray-900",
  headingStyle = {},
  subheadingClass = "text-lg text-gray-500",
  subheadingStyle = {},
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      <h2
        className={`tracking-tight ${headingClass}`}
        style={headingStyle}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-4 ${subheadingClass}`}
          style={subheadingStyle}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}