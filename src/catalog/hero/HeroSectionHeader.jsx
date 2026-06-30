import React from "react";

export default function HeroSectionHeader({
  heading,
  subheading,
  headingClass = "",
  subheadingClass = "",
  headingWrapperClass = "",
  subheadingWrapperClass = "mt-6",
}) {
  if (!heading && !subheading) return null;

  return (
    <>
      {heading && (
        <h1 className={`${headingWrapperClass} ${headingClass}`.trim()}>
          {heading}
        </h1>
      )}
      {subheading && (
        <p className={`${subheadingWrapperClass} ${subheadingClass}`.trim()}>
          {subheading}
        </p>
      )}
    </>
  );
}
