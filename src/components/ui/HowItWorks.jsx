import React from "react";
import { DynamicIcon } from "../../utils/iconMap";

export default function HowItWorks({ sectionConfig }) {
  if (!sectionConfig || !sectionConfig.props) return null;

  const { variant } = sectionConfig;
  const { heading, subheading, items = [], paddingY = 16, background = "surface" } = sectionConfig.props;

  // Background and Padding classes based on design system tokens
  const bgClasses = {
    surface: "bg-surface text-ink",
    muted: "bg-surface-muted text-ink",
    navy: "bg-navy text-ink-inverse",
  };

  const padClasses = {
    8: "py-8 sm:py-12",
    12: "py-12 sm:py-16",
    16: "py-16 sm:py-24",
    20: "py-20 sm:py-32",
  };

  return (
    <section className={`${bgClasses[background] || bgClasses.surface} ${padClasses[paddingY] || padClasses[16]} px-6 transition-colors duration-200`}>
      <div className="mx-auto max-w-5xl">
        {/* Header Block */}
        <div className="text-center mb-14">
          {heading && (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className={`mx-auto mt-4 max-w-xl text-base ${background === "navy" ? "text-ink-inverse-muted" : "text-ink-muted"}`}>
              {subheading}
            </p>
          )}
        </div>

        {/* Variant 1: steps-horizontal */}
        {variant === "steps-horizontal" && (
          <div className="grid gap-8 sm:grid-cols-3 relative">
            {items.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Visual Line connector between steps */}
                {index < items.length - 1 && (
                  <div className="hidden sm:block absolute top-7 left-[60%] right-[-40%] h-[2px] bg-border/60 z-0" />
                )}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-ink-inverse font-bold text-lg shadow-md mb-4">
                  {item.step || `0${index + 1}`}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${background === "navy" ? "text-ink-inverse-muted" : "text-ink-muted"}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Variant 2: steps-vertical */}
        {variant === "steps-vertical" && (
          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-[27px] before:w-[2px] before:bg-border/40">
            {items.map((item, index) => (
              <div key={index} className="flex gap-6 relative group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-muted text-brand font-bold text-lg border border-brand/20 relative z-10 bg-surface">
                  {item.step || `0${index + 1}`}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className={`mt-2 text-base leading-relaxed ${background === "navy" ? "text-ink-inverse-muted" : "text-ink-muted"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Variant 3: icon-cards */}
        {variant === "icon-cards" && (
          <div className="grid gap-8 sm:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className={`group rounded-2xl border p-6 shadow-card transition-all hover:shadow-card-hover ${
                  background === "navy" ? "border-border-dark bg-navy-elevated" : "border-border bg-surface"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted text-brand group-hover:bg-brand group-hover:text-ink-inverse transition-colors duration-200">
                  <DynamicIcon name={item.icon || "Sparkles"} size={22} />
                </div>
                <span className="mt-4 block text-xs font-bold uppercase tracking-widest text-brand">
                  Step {item.step || `0${index + 1}`}
                </span>
                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${background === "navy" ? "text-ink-inverse-muted" : "text-ink-muted"}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}