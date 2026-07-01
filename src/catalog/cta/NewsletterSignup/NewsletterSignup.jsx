import React, { useState } from "react";
import { NEWSLETTER_SIGNUP_PROPS } from "../defaultProps";
import { pickStyleSchema, resolvePromoStyles } from "../defaultStyles";

// Keys this component's resolver output actually consumes.
const STYLE_KEYS = [
  "background", "paddingY", "paddingX",
  "headingColor", "headingSize", "headingWeight",
  "subheadingColor", "subheadingSize", "subheadingWeight",
  "cardBg", "cardBorder", "cardBorderColor", "cardRadius", "cardShadow",
  "primaryButtonColor",
];

// Only the keys this component uses — no unused keys from PROMO_STYLE_DEFAULTS.
export const defaultStyles = {
  background:       "muted",
  paddingY:          12,
  paddingX:           6,
  headingColor:      "surface",
  headingSize:       "3xl",
  headingWeight:     "extrabold",
  subheadingColor:   "muted",
  subheadingSize:     "lg",
  subheadingWeight:  "normal",
  cardBg:            "white",
  cardBorder:        "sm",
  cardBorderColor:   "subtle",
  cardRadius:        "2xl",
  cardShadow:        "sm",
  primaryButtonColor: "primary",
};

export const defaultProps = NEWSLETTER_SIGNUP_PROPS;

export const propSchema = {
  props: [
    { name: "heading",         type: "string", default: defaultProps.heading,         allowedValues: "Any string", description: "Header text" },
    { name: "subheading",      type: "string", default: defaultProps.subheading,      allowedValues: "Any string", description: "Supporting description text" },
    { name: "buttonLabel",     type: "string", default: defaultProps.buttonLabel,     allowedValues: "Any string", description: "Submit button label" },
    { name: "placeholderText", type: "string", default: defaultProps.placeholderText, allowedValues: "Any string", description: "Email input placeholder" },
  ],
  styles: pickStyleSchema(STYLE_KEYS, defaultStyles),
};

export default function NewsletterSignup({
  heading         = defaultProps.heading,
  subheading      = defaultProps.subheading,
  buttonLabel     = defaultProps.buttonLabel,
  placeholderText = defaultProps.placeholderText,
  styles          = defaultStyles,
}) {
  const [email, setEmail] = useState("");
  const { sectionClass, headingClass, subheadingClass, cardClass, primaryBtnClass, inputClass } = resolvePromoStyles(styles);

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire up to your subscription handler
  };

  return (
    <section className={sectionClass}>
      <div className={`mx-auto max-w-4xl grid gap-8 items-center lg:grid-cols-3 p-8 ${cardClass}`}>
        <div className="text-left lg:col-span-2 space-y-2">
          {heading && <h3 className={headingClass}>{heading}</h3>}
          {subheading && <p className={subheadingClass}>{subheading}</p>}
        </div>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholderText}
            className={inputClass}
          />
          <button type="submit" className={primaryBtnClass}>
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
