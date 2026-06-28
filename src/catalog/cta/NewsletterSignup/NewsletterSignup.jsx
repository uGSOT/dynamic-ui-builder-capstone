import React from "react";

export const defaultProps = {
  heading: "Stay ahead of the curve",
  subheading: "Get curated system update insights, design token workflows, and product updates monthly.",
  buttonLabel: "Subscribe",
  placeholderText: "Enter your email address"
};

export const defaultStyles = {
  background: "muted",
  paddingY: 12,
  headingColor: "text-ink",
  headingSize: "text-2xl",
  headingWeight: "font-bold",
  subheadingColor: "text-ink-muted",
  subheadingSize: "text-sm"
};

export const propSchema = {
  props: [
    { name: "heading", type: "string", default: defaultProps.heading, allowedValues: "Any string", description: "Header entry text string" },
    { name: "subheading", type: "string", default: defaultProps.subheading, allowedValues: "Any string", description: "Secondary instructional capture string description line" },
    { name: "buttonLabel", type: "string", default: defaultProps.buttonLabel, allowedValues: "Any string text", description: "Input form submit link layout node textual indicator" },
    { name: "placeholderText", type: "string", default: defaultProps.placeholderText, allowedValues: "Any string field copy descriptor", description: "Input focus field placeholder utility description" }
  ],
  styles: [
    { name: "background", type: "string", default: defaultStyles.background, allowedValues: "surface | muted | navy", description: "Outer frame wrap structural block background system configuration" },
    { name: "paddingY", type: "number", default: defaultStyles.paddingY, allowedValues: "8 | 12 | 16 | 20", description: "Vertical padding layout offset tracker context mapping value" }
  ]
};

export default function NewsletterSignup(componentData) {
  const activeProps = componentData?.props || componentData;
  const activeStyles = componentData?.styles || {};

  const { heading = "", subheading = "", buttonLabel = "Subscribe", placeholderText = "Enter your email" } = activeProps || {};
  const {
    background = "muted",
    paddingY = 12,
    headingColor = "text-ink",
    headingSize = "text-2xl",
    headingWeight = "font-bold",
    subheadingColor = "text-ink-muted",
    subheadingSize = "text-sm"
  } = activeStyles || {};

  const bgSectionClass = background === "navy" ? "bg-navy text-white" : background === "muted" ? "bg-surface-muted" : "bg-surface";

  return (
    <div className={`px-6 py-${paddingY} ${bgSectionClass} transition-all`}>
      <div className="mx-auto max-w-4xl grid gap-8 items-center lg:grid-cols-3 p-8 border border-border/20 rounded-2xl bg-surface shadow-card">
        <div className="text-left lg:col-span-2 space-y-2">
          {heading && <h3 className={`${headingSize} ${headingWeight} text-ink tracking-tight`}>{heading}</h3>}
          {subheading && <p className={`${subheadingSize} ${subheadingColor}`}>{subheading}</p>}
        </div>
        <div>
          {/* Form container configuration set as purely display-only layout framework style matches */}
          <div className="flex gap-2" onClick={(e) => e.preventDefault()}>
            <input 
              type="email" 
              disabled 
              placeholder={placeholderText} 
              className="min-w-0 flex-1 rounded-xl border border-border px-3.5 py-2 text-sm shadow-sm placeholder:text-ink-subtle bg-surface-muted cursor-not-allowed" 
            />
            <button 
              type="button" 
              disabled 
              className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-all pointer-events-none opacity-90"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}