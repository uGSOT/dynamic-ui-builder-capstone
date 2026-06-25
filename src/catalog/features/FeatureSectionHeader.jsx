export default function FeatureSectionHeader({
  heading,
  subheading,
  inverted = false,
  align = "left",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          inverted ? "text-white" : "text-gray-900"
        }`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            inverted ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
