import { useState } from "react";
import {
  resolveStyles,
  HEADING_SIZE_MAP,
  BODY_SIZE_MAP,
  WEIGHT_MAP,
  RADIUS_MAP,
  SHADOW_MAP,
  PADDING_MAP,
  COLOR_MAP,
} from "../../../utils/resolveStyles";

export default function Carousel({
  styles = {},
  heading = defaultProps.heading,
  subheading = defaultProps.subheading,
  eyebrow = defaultProps.eyebrow,
  testimonials = defaultProps.testimonials,
}) {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const visibleCount = styles.visibleCards ?? 3;

  const s = resolveStyles(styles);

  // eyebrow
  const eyebrowClass = [
    BODY_SIZE_MAP[styles.eyebrowSize ?? "xs"],
    WEIGHT_MAP[styles.eyebrowWeight ?? "bold"],
    COLOR_MAP[styles.eyebrowColor ?? "primary"]?.text,
    "uppercase tracking-widest",
  ].join(" ");

  // heading
  const headingAlign = styles.headingAlign === "left" ? "text-left items-start" : "text-center items-center";
  const HeadingTag = styles.headingTag === "h3" ? "h3" : "h2";
  const headingClass = [
    HEADING_SIZE_MAP[styles.headingSize ?? "3xl"],
    WEIGHT_MAP[styles.headingWeight ?? "bold"],
    COLOR_MAP[styles.headingColor ?? "surface"]?.text,
    "tracking-tight",
  ].join(" ");

  // subheading
  const subheadingClass = [
    BODY_SIZE_MAP[styles.subheadingSize ?? "sm"],
    WEIGHT_MAP[styles.subheadingWeight ?? "normal"],
    COLOR_MAP[styles.subheadingColor ?? "muted"]?.text,
    "leading-relaxed",
  ].join(" ");

  // card
  const cardBgClass = COLOR_MAP[styles.cardBg ?? "white"]?.bg ?? "bg-white";
  const cardBorderClass = COLOR_MAP[styles.cardBorderColor ?? "subtle"]?.border ?? "border-gray-100";
  const cardRadiusClass = RADIUS_MAP[styles.cardRadius ?? "xl"];
  const cardShadowClass = SHADOW_MAP[styles.cardShadow ?? "none"];
  const cardPaddingClass = PADDING_MAP[styles.cardPaddingY ?? 6]?.p ?? "p-6";

  // quote
  const quoteClass = [
    BODY_SIZE_MAP[styles.quoteSize ?? "sm"],
    WEIGHT_MAP[styles.quoteWeight ?? "normal"],
    COLOR_MAP[styles.quoteColor ?? "surface"]?.text,
    "leading-relaxed",
  ].join(" ");

  // name / role
  const nameClass = [
    BODY_SIZE_MAP[styles.nameSize ?? "sm"],
    WEIGHT_MAP[styles.nameWeight ?? "semibold"],
    COLOR_MAP[styles.nameColor ?? "surface"]?.text,
  ].join(" ");

  const roleClass = [
    BODY_SIZE_MAP[styles.roleSize ?? "xs"],
    WEIGHT_MAP[styles.roleWeight ?? "normal"],
    COLOR_MAP[styles.roleColor ?? "muted"]?.text,
  ].join(" ");

  // accent (quote mark)
  const accentClass = COLOR_MAP[styles.accentColor ?? "primary"]?.text;

  // avatar / logo
  const avatarSize = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-14 h-14" }[styles.avatarSize ?? "md"];
  const logoHeight = { sm: "h-4", md: "h-5", lg: "h-6" }[styles.logoHeight ?? "md"];

  const columnsClass = {
    2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4",
  }[visibleCount] ?? "md:grid-cols-3";

  // dots — remapped to canonical tokens
  const dotActiveClass = COLOR_MAP[styles.dotActiveColor ?? "primary"]?.bg ?? "bg-[#e50913]";
  const dotInactiveClass = COLOR_MAP[styles.dotInactiveColor ?? "subtle"]?.bg ?? "bg-gray-100";

  // arrow buttons — use muted/surface tokens for icon + border
  const arrowBorderClass = COLOR_MAP[styles.cardBorderColor ?? "subtle"]?.border ?? "border-gray-100";
  const arrowTextClass = COLOR_MAP[styles.subheadingColor ?? "muted"]?.text ?? "text-gray-500";
  const arrowHoverTextClass = COLOR_MAP[styles.headingColor ?? "surface"]?.text ?? "text-gray-900";

  const visible = Array.from({ length: visibleCount }, (_, offset) =>
    testimonials[(current + offset) % total]
  );

  return (
    <section className={`w-full ${s.sectionClass}`}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading block */}
        <div className={`flex flex-col mb-12 ${headingAlign}`}>
          {eyebrow && <p className={`mb-2 ${eyebrowClass}`}>{eyebrow}</p>}
          <HeadingTag className={headingClass}>{heading}</HeadingTag>
          {subheading && <p className={`mt-3 max-w-xl ${subheadingClass}`}>{subheading}</p>}
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 ${columnsClass} gap-6`}>
          {visible.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col gap-4 border ${cardBgClass} ${cardBorderClass} ${cardRadiusClass} ${cardShadowClass} ${cardPaddingClass}`}
            >
              <span className={`text-4xl font-serif leading-none ${accentClass}`}>"</span>
              <p className={quoteClass}>{t.quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img src={t.avatar} alt={t.name} className={`${avatarSize} rounded-full object-cover`} />
                <div>
                  <p className={nameClass}>{t.name}</p>
                  <p className={roleClass}>{t.role}</p>
                </div>
                {t.companyLogo && (
                  <img src={t.companyLogo} alt={t.company} className={`ml-auto ${logoHeight} w-auto object-contain`} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setCurrent((current - 1 + total) % total)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition ${arrowBorderClass} ${arrowTextClass} hover:${arrowHoverTextClass}`}
          >
            ‹
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition ${i === current ? dotActiveClass : dotInactiveClass}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((current + 1) % total)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition ${arrowBorderClass} ${arrowTextClass} hover:${arrowHoverTextClass}`}
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}

export const defaultProps = {
  eyebrow: "Testimonials",
  heading: "Loved by founders and teams",
  subheading: "Hear from startups using our platform to build, ship, and grow faster.",
  testimonials: [
    {
      quote: "This platform eliminated so much busywork for us. We ship features faster and our users love the experience.",
      name: "Sarah Chen",
      role: "Co-founder, Loopin",
      avatar: "/assets/images/avatar1.jpg",
      company: "Loopin",
      companyLogo: "/assets/logos/loom.svg",
    },
    {
      quote: "We went from idea to production in weeks, not months. The tooling and DX are best in class.",
      name: "James Carter",
      role: "CTO, Nexora",
      avatar: "/assets/images/avatar2.jpg",
      company: "Nexora",
      companyLogo: "/assets/logos/linear.svg",
    },
    {
      quote: "The analytics and insights have informed decisions and helped drive our growth.",
      name: "Maya Thompson",
      role: "Head of Growth, Bloom",
      avatar: "/assets/images/avatar3.jpg",
      company: "Bloom",
      companyLogo: "/assets/logos/vercel.svg",
    },
    {
      quote: "Incredible onboarding experience. We were live in a day and the team support is unmatched.",
      name: "Ravi Mehta",
      role: "Founder, Stackr",
      avatar: "/assets/images/avatar1.jpg",
      company: "Stackr",
      companyLogo: "/assets/logos/stripe.svg",
    },
  ],
};

export const defaultStyles = {
  paddingY: 8,
  background: "muted",
  headingAlign: "center",
  headingTag: "h2",
  headingColor: "surface",
  headingSize: "3xl",
  headingWeight: "bold",
  subheadingColor: "muted",
  subheadingSize: "sm",
  subheadingWeight: "normal",
  eyebrowColor: "primary",
  eyebrowSize: "xs",
  eyebrowWeight: "bold",
  cardBg: "white",
  cardBorderColor: "subtle",
  cardRadius: "xl",
  cardShadow: "none",
  cardPaddingY: 6,
  quoteColor: "surface",
  quoteSize: "sm",
  quoteWeight: "normal",
  nameColor: "surface",
  nameSize: "sm",
  nameWeight: "semibold",
  roleColor: "muted",
  roleSize: "xs",
  roleWeight: "normal",
  accentColor: "primary",
  avatarSize: "md",
  logoHeight: "md",
  visibleCards: 3,
  dotActiveColor: "primary",
  dotInactiveColor: "subtle",
};

export const propSchema = {
  props: [
    { name: "eyebrow", type: "string", default: '"Testimonials"', allowedValues: "Any string or null" },
    { name: "heading", type: "string", default: '"Loved by founders and teams"', allowedValues: "Any string" },
    { name: "subheading", type: "string", default: '"Hear from startups..."', allowedValues: "Any string or null" },
    { name: "testimonials", type: "Array<{ quote, name, role, avatar, company, companyLogo }>", default: "[4 items]", allowedValues: "Array of testimonial objects" },
  ],
  styles: [
    { name: "paddingY", type: "number", default: "8", allowedValues: "4 | 6 | 8 | 10 | 12" },
    { name: "background", type: "string", default: "muted", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "headingAlign", type: "string", default: "center", allowedValues: "center | left" },
    { name: "headingTag", type: "string", default: "h2", allowedValues: "h2 | h3" },
    { name: "headingColor", type: "string", default: "surface", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "headingSize", type: "string", default: "3xl", allowedValues: "2xl | 3xl | 4xl | 5xl | 6xl" },
    { name: "headingWeight", type: "string", default: "bold", allowedValues: "normal | medium | semibold | bold | extrabold" },
    { name: "subheadingColor", type: "string", default: "muted", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "subheadingSize", type: "string", default: "sm", allowedValues: "sm | base | lg | xl" },
    { name: "subheadingWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
    { name: "eyebrowColor", type: "string", default: "primary", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "eyebrowSize", type: "string", default: "xs", allowedValues: "xs | sm | base" },
    { name: "eyebrowWeight", type: "string", default: "bold", allowedValues: "normal | medium | semibold | bold" },
    { name: "cardBg", type: "string", default: "white", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "cardBorderColor", type: "string", default: "subtle", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "cardRadius", type: "string", default: "xl", allowedValues: "none | sm | md | lg | xl | 2xl | full" },
    { name: "cardShadow", type: "string", default: "none", allowedValues: "none | sm | md | lg | xl" },
    { name: "cardPaddingY", type: "number", default: "6", allowedValues: "4 | 6 | 8 | 10" },
    { name: "quoteColor", type: "string", default: "surface", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "quoteSize", type: "string", default: "sm", allowedValues: "sm | base | lg" },
    { name: "quoteWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
    { name: "nameColor", type: "string", default: "surface", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "nameSize", type: "string", default: "sm", allowedValues: "xs | sm | base" },
    { name: "nameWeight", type: "string", default: "semibold", allowedValues: "normal | medium | semibold | bold" },
    { name: "roleColor", type: "string", default: "muted", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "roleSize", type: "string", default: "xs", allowedValues: "xs | sm | base" },
    { name: "roleWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
    { name: "accentColor", type: "string", default: "primary", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "avatarSize", type: "string", default: "md", allowedValues: "sm | md | lg" },
    { name: "logoHeight", type: "string", default: "md", allowedValues: "sm | md | lg" },
    { name: "visibleCards", type: "number", default: "3", allowedValues: "2 | 3 | 4" },
    { name: "dotActiveColor", type: "string", default: "primary", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "dotInactiveColor", type: "string", default: "subtle", allowedValues: "primary | surface | muted | subtle | white" },
  ],
};