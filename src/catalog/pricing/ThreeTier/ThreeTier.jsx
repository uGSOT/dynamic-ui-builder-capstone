import React, { useState } from "react";
import { Check } from "lucide-react";
import { DEFAULT_PRICING_PROPS } from "../defaultProps";
import {
  PRICING_STYLE_DEFAULTS,
  PRICING_STYLE_PROP_SCHEMA,
  resolvePricingStyles,
} from "../pricingStyles";

export const defaultProps = {
  ...DEFAULT_PRICING_PROPS,
};

export const defaultStyles = { ...PRICING_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Main section heading title",
    },
    {
      name: "subheading",
      type: "string",
      default: defaultProps.subheading,
      allowedValues: "Any string (optional)",
      description: "Supporting text below the heading",
    },
    {
      name: "plans",
      type: "Array<Plan>",
      default: defaultProps.plans,
      allowedValues: "Array of plan configuration objects",
      description: "Configuration details for the three pricing cards",
    },
    {
      name: "billingToggle",
      type: "object",
      default: defaultProps.billingToggle,
      allowedValues: "Object with enabled, annualLabel, monthlyLabel",
      description: "Configuration for the billing period toggle",
    },
  ],
  styles: PRICING_STYLE_PROP_SCHEMA,
};

export default function ThreeTier({
  heading       = defaultProps.heading,
  subheading    = defaultProps.subheading,
  plans         = defaultProps.plans,
  billingToggle = defaultProps.billingToggle,
  styles        = defaultStyles,
}) {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const {
    sectionClass,
    headingAlign,
    headingClass,
    subheadingClass,
    cardBaseClass,
    titleClass,
    descClass,
    accentTextClass,
    accentBgClass,
    accentBorderClass,
  } = resolvePricingStyles(styles);

  const alignClass =
    headingAlign === "center" ? "text-center mx-auto"
    : headingAlign === "right" ? "text-right ml-auto"
    : "text-left";

  const getPriceDisplay = (price) => {
    if (billingPeriod === "monthly") return price;
    const num = parseInt(price.replace(/[^0-9]/g, ""), 10);
    if (isNaN(num)) return price;
    return `$${Math.round(num * 0.8)}`;
  };

  const getPeriodDisplay = (period) => {
    if (billingPeriod === "monthly") return period;
    return "/mo, billed annually";
  };

  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`max-w-3xl ${alignClass}`}>
          {heading && (
            <h2 className={headingClass}>
              {heading}
            </h2>
          )}
          {subheading && (
            <p className={`mt-4 ${subheadingClass}`}>
              {subheading}
            </p>
          )}

          {/* Billing Toggle */}
          {billingToggle?.enabled && (
            <div className={`flex items-center gap-3 mt-8 ${headingAlign === "center" ? "justify-center" : headingAlign === "right" ? "justify-end" : "justify-start"}`}>
              <span className={`text-sm transition-colors ${billingPeriod === "monthly" ? `font-semibold ${titleClass}` : descClass}`}>
                {billingToggle.monthlyLabel}
              </span>
              <button
                type="button"
                onClick={() => setBillingPeriod((p) => (p === "monthly" ? "annually" : "monthly"))}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-surface-subtle`}
                aria-label="Toggle billing period"
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out ${accentBgClass} ${
                    billingPeriod === "annually" ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-sm transition-colors ${billingPeriod === "annually" ? `font-semibold ${titleClass}` : descClass}`}>
                {billingToggle.annualLabel}
              </span>
            </div>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const highlightedCard = plan.highlighted
              ? `${accentBorderClass} border-2 scale-[1.02] shadow-xl md:z-10`
              : "border border-border";

            const primaryBtnClass = `${accentBgClass} text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2`;
            const secondaryBtnClass = `border border-border ${accentTextClass} hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-offset-2`;

            return (
              <div
                key={`${plan.name}-${index}`}
                className={`relative flex flex-col transition-all duration-300 ${cardBaseClass} ${highlightedCard}`}
              >
                {/* Popular Plan Badge */}
                {plan.highlighted && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full ${accentBgClass} px-3 py-0.5 text-xs font-semibold text-white tracking-wide uppercase`}>
                    Most Popular
                  </span>
                )}

                {/* Plan Info */}
                <div className="mb-6">
                  <h3 className={`text-lg ${titleClass}`}>
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className={`text-4xl font-extrabold tracking-tight ${titleClass}`}>
                      {getPriceDisplay(plan.price)}
                    </span>
                    <span className={`ml-1 text-sm font-semibold ${descClass}`}>
                      {getPeriodDisplay(plan.period)}
                    </span>
                  </div>
                  {plan.description && (
                    <p className={`mt-3 ${descClass}`}>
                      {plan.description}
                    </p>
                  )}
                </div>

                {/* Features Checklist */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features?.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check
                        size={18}
                        className={`shrink-0 mt-0.5 ${accentTextClass}`}
                      />
                      <span className={descClass}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Call-to-Action */}
                {plan.cta?.label && (
                  <a
                    href={plan.cta.href || "#"}
                    className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all focus:outline-none ${
                      plan.highlighted ? primaryBtnClass : secondaryBtnClass
                    }`}
                  >
                    {plan.cta.label}
                  </a>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
