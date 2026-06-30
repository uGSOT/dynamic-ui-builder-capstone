export default function StatsSectionHeader({
  heading,
  subheading,
  headingClass = "",
  subheadingClass = "",
}) {
  if (!heading && !subheading) return null;

  return (
    <div className="mb-8 text-center sm:mb-10">
      {heading ? (
        <h2 className={headingClass}>{heading}</h2>
      ) : null}
      {subheading ? (
        <p className={`mx-auto mt-3 max-w-2xl ${subheadingClass}`}>{subheading}</p>
      ) : null}
    </div>
  );
}
