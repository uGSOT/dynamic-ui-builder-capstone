import React from "react";
import * as LucideIcons from "lucide-react";

export { defaultProps, defaultStyles, propSchema } from "../StepsHorizontal/StepsHorizontal.jsx";

export default function IconCards(componentData) {
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
    cardBg = "bg-surface",
    cardTextColor = "text-ink",
    cardTitleWeight = "font-bold"
  } = activeStyles || {};

  const bgSectionClass = background === "navy" ? "bg-navy text-white" : background === "muted" ? "bg-surface-muted" : "bg-surface";

  return (
    <div className={`px-6 py-${paddingY} ${bgSectionClass} transition-all`}>
      <div className="mx-auto max-w-5xl text-center">
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

        <div className="grid gap-6 sm:grid-cols-3 mt-14">
          {items.map((item, idx) => {
            const IconComponent = LucideIcons[item.icon] || LucideIcons.Sparkles;
            
            return (
              <div key={idx} className={`flex flex-col items-start text-left rounded-2xl border border-border p-6 shadow-card transition-all ${background === "navy" ? "bg-navy-elevated border-border-dark" : cardBg}`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-brand mb-4">
                  <IconComponent size={20} />
                </div>
                <span className="text-xs font-bold uppercase text-brand tracking-widest">Step {item.step || `0${idx + 1}`}</span>
                <h3 className={`text-lg mt-1 ${cardTitleWeight} ${background === "navy" ? "text-white" : cardTextColor}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${background === "navy" ? "text-slate-400" : "text-ink-muted"}`}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}