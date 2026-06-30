import React, { useState } from "react";
import { Check } from "lucide-react";
import { DEFAULT_SINGLE_PLAN, DEFAULT_PRICING_PROPS } from "../defaultProps";
import {
  PRICING_STYLE_DEFAULTS,
  PRICING_STYLE_PROP_SCHEMA,
  resolvePricingStyles,
} from "../pricingStyles";

export const defaultProps = {
  ...DEFAULT_PRICING_PROPS,
  plans: DEFAULT_SINGLE_PLAN,
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
      allowedValues: "Array containing a single plan configuration object",
      description: "Configuration details for the centered pricing card",
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

export default function SinglePlanFocus({
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
    cardClass,
    titleClass,
    descClass,
    accentTextClass,
    accentBgClass,
    accentBorderClass,
  } = resolvePricingStyles(styles);

  const plan = plans[0] || DEFAULT_SINGLE_PLAN[0];

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
                className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-surface-subtle"
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

        {/* Centered Single Plan Card */}
        <div className={`relative max-w-3xl mx-auto mt-16 ${cardClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* Left side: Plan Info */}
            <div className="md:col-span-5 flex flex-col h-full justify-between">
              <div>
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-4 bg-brand/10 text-brand`}>
                  Featured Plan
                </span>
                <h3 className={`text-xl ${titleClass}`}>
                  {plan.name}
                </h3>
                {plan.description && (
                  <p className={`mt-3 ${descClass}`}>
                    {plan.description}
                  </p>
                )}
                <div className="mt-6 flex items-baseline">
                  <span className={`text-5xl font-extrabold tracking-tight ${titleClass}`}>
                    {getPriceDisplay(plan.price)}
                  </span>
                  <span className={`ml-2 text-sm font-semibold ${descClass}`}>
                    {getPeriodDisplay(plan.period)}
                  </span>
                </div>
              </div>

              {plan.cta?.label && (
                <div className="mt-8">
                  <a
                    href={plan.cta.href || "#"}
                    className={`inline-flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold shadow transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ${accentBgClass} text-white`}
                  >
                    {plan.cta.label}
                  </a>
                </div>
              )}
            </div>

            {/* Right side: Features Checklist */}
            <div className="md:col-span-7 border-t border-opacity-10 md:border-t-0 md:border-l md:pl-8 pt-8 md:pt-0">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${descClass}`}>
                Everything Included
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {plan.features?.map((feature, index) => (
                  <li
                    key={index}
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
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
