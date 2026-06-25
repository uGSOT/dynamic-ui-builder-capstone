import React from "react";
export { defaultProps, defaultStyles, propSchema } from "../StepsHorizontal/StepsHorizontal.jsx";

export default function StepsVertical(componentData) {
  const activeProps = componentData?.props || componentData;
  const activeStyles = componentData?.styles || {};

  const { heading = "", subheading = "", items = [] } = activeProps || {};
  const {
    background = "surface",
    paddingY = 16,
    headingColor = "text-ink",
    headingSize = "text-3xl",
    headingWeight = "font-bold",
    subheadingColor = "text-ink-muted",
    subheadingSize = "text-base",
    subheadingWeight = "font-normal",
    cardBg = "bg-transparent",
    cardTextColor = "text-ink",
    cardTitleWeight = "font-bold"
  } = activeStyles || {};

  const bgSectionClass = background === "navy" ? "bg-navy text-white" : background === "muted" ? "bg-surface-muted" : "bg-surface";

  return (
    <div className={`px-6 py-${paddingY} ${bgSectionClass} transition-all`}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          {heading && (
            <h2 className={`${headingSize} ${headingWeight} ${background === "navy" && headingColor === "text-ink" ? "text-white" : headingColor} tracking-tight`}>
              {heading}
            </h2>
          )}
          {subheading && (
            <p className={`mt-4 max-w-xl mx-auto ${subheadingSize} ${subheadingWeight} ${background === "navy" && subheadingColor === "text-ink-muted" ? "text-slate-3xl" : subheadingColor}`}>
              {subheading}
            </p>
          )}
        </div>

        <div className="max-w-2xl mx-auto space-y-6 relative before:absolute before:inset-0 before:left-[27px] before:w-[2px] before:bg-border/40">
          {items.map((item, idx) => (
            <div key={idx} className={`flex gap-6 relative p-4 rounded-xl ${background === "navy" ? "bg-navy-elevated/40" : cardBg}`}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-muted text-brand font-bold text-lg border border-brand/20 relative z-10 bg-surface">
                {item.step || `0${idx + 1}`}
              </div>
              <div className="pt-2 text-left">
                <h3 className={`text-xl ${cardTitleWeight} ${background === "navy" ? "text-white" : cardTextColor}`}>{item.title}</h3>
                <p className={`mt-2 text-base ${background === "navy" ? "text-slate-400" : "text-ink-muted"}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}