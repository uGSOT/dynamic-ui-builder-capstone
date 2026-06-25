import { useState } from "react";

// resolves token name OR any hex/rgb color
function resolveColor(value, fallback) {
  if (!value) return fallback;
  if (value.startsWith("#") || value.startsWith("rgb")) return value;
  const tokenMap = {
    "ink": "var(--color-ink)",
    "ink-muted": "var(--color-ink-muted)",
    "ink-subtle": "var(--color-ink-subtle)",
    "ink-inverse": "var(--color-ink-inverse)",
    "ink-inverse-muted": "var(--color-ink-inverse-muted)",
    "brand": "var(--color-brand)",
    "brand-dark": "var(--color-brand-dark)",
    "brand-light": "var(--color-brand-light)",
  };
  return tokenMap[value] ?? fallback;
}

export default function Carousel({
  styles = {},
  heading = defaultProps.heading,
  headingColor = defaultProps.headingColor,
  headingWeight = defaultProps.headingWeight,
  headingSize = defaultProps.headingSize,
  subheading = defaultProps.subheading,
  subheadingColor = defaultProps.subheadingColor,
  subheadingWeight = defaultProps.subheadingWeight,
  eyebrow = defaultProps.eyebrow,
  eyebrowColor = defaultProps.eyebrowColor,
  eyebrowWeight = defaultProps.eyebrowWeight,
  quoteColor = defaultProps.quoteColor,
  quoteWeight = defaultProps.quoteWeight,
  quoteSize = defaultProps.quoteSize,
  nameColor = defaultProps.nameColor,
  nameWeight = defaultProps.nameWeight,
  roleColor = defaultProps.roleColor,
  roleWeight = defaultProps.roleWeight,
  accentColor = defaultProps.accentColor,
  testimonials = defaultProps.testimonials,
}) {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const visibleCount = styles.visibleCards ?? 3;

  // background and structural classes stay as Tailwind tokens
  const sectionBg = {
    surface: "bg-surface",
    "surface-muted": "bg-surface-muted",
    "surface-subtle": "bg-surface-subtle",
    navy: "bg-navy",
    "navy-elevated": "bg-navy-elevated",
    "navy-muted": "bg-navy-muted",
  }[styles.sectionBackground] ?? "bg-surface-muted";

  const paddingY = {
    8: "py-8", 10: "py-10", 12: "py-12",
    16: "py-16", 20: "py-20", 24: "py-24",
  }[styles.paddingY] ?? "py-16";

  const headingAlign = {
    center: "text-center items-center",
    left: "text-left items-start",
  }[styles.headingAlign] ?? "text-center items-center";

  const HeadingTag = styles.headingTag === "h3" ? "h3" : "h2";

  const cardBg = {
    surface: "bg-surface",
    "surface-muted": "bg-surface-muted",
    "surface-subtle": "bg-surface-subtle",
    navy: "bg-navy",
    "navy-elevated": "bg-navy-elevated",
    "navy-muted": "bg-navy-muted",
  }[styles.cardBackground] ?? "bg-surface";

  const cardBorderColor = {
    border: "border-border",
    "border-dark": "border-border-dark",
    brand: "border-brand",
    none: "border-transparent",
  }[styles.cardBorderColor] ?? "border-border";

  const cardRadius = {
    none: "rounded-none", sm: "rounded-sm", md: "rounded-md",
    lg: "rounded-lg", xl: "rounded-xl", "2xl": "rounded-2xl",
  }[styles.cardRadius] ?? "rounded-xl";

  const avatarSize = {
    sm: "w-8 h-8", md: "w-10 h-10", lg: "w-14 h-14",
  }[styles.avatarSize] ?? "w-10 h-10";

  const logoHeight = {
    sm: "h-4", md: "h-5", lg: "h-6",
  }[styles.logoHeight] ?? "h-5";

  const columnsClass = {
    2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4",
  }[visibleCount] ?? "md:grid-cols-3";

  const dotActiveColor = {
    brand: "bg-brand", ink: "bg-ink", "ink-inverse": "bg-ink-inverse",
  }[styles.dotActiveColor] ?? "bg-brand";

  const dotInactiveColor = {
    border: "bg-border", "border-dark": "bg-border-dark", "ink-subtle": "bg-ink-subtle",
  }[styles.dotInactiveColor] ?? "bg-border";

  const weightMap = {
    normal: "font-normal", medium: "font-medium",
    semibold: "font-semibold", bold: "font-bold",
  };

  const sizeMap = {
    sm: "text-sm", base: "text-base", lg: "text-lg",
    xl: "text-xl", "2xl": "text-2xl", "3xl": "text-3xl", "4xl": "text-4xl",
  };

  const visible = Array.from({ length: visibleCount }, (_, offset) =>
    testimonials[(current + offset) % total]
  );

  return (
    <section className={`w-full ${sectionBg} ${paddingY}`}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading block */}
        <div className={`flex flex-col mb-12 ${headingAlign}`}>
          {eyebrow && (
            <p
              className={`text-xs uppercase tracking-widest mb-2 ${weightMap[eyebrowWeight] ?? "font-bold"}`}
              style={{ color: resolveColor(eyebrowColor, "var(--color-brand)") }}
            >
              {eyebrow}
            </p>
          )}
          <HeadingTag
            className={`${sizeMap[headingSize] ?? "text-3xl"} ${weightMap[headingWeight] ?? "font-bold"}`}
            style={{ color: resolveColor(headingColor, "var(--color-ink)") }}
          >
            {heading}
          </HeadingTag>
          {subheading && (
            <p
              className={`mt-3 max-w-xl text-sm ${weightMap[subheadingWeight] ?? "font-normal"}`}
              style={{ color: resolveColor(subheadingColor, "var(--color-ink-muted)") }}
            >
              {subheading}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 ${columnsClass} gap-6`}>
          {visible.map((t, i) => (
            <div
              key={i}
              className={`${cardBg} border ${cardBorderColor} ${cardRadius} p-6 flex flex-col gap-4`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span
                className="text-4xl font-serif leading-none"
                style={{ color: resolveColor(accentColor, "var(--color-brand)") }}
              >
                "
              </span>
              <p
                className={`leading-relaxed ${sizeMap[quoteSize] ?? "text-sm"} ${weightMap[quoteWeight] ?? "font-normal"}`}
                style={{ color: resolveColor(quoteColor, "var(--color-ink)") }}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={`${avatarSize} rounded-full object-cover`}
                />
                <div>
                  <p
                    className={`text-sm ${weightMap[nameWeight] ?? "font-semibold"}`}
                    style={{ color: resolveColor(nameColor, "var(--color-ink)") }}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-xs ${weightMap[roleWeight] ?? "font-normal"}`}
                    style={{ color: resolveColor(roleColor, "var(--color-ink-muted)") }}
                  >
                    {t.role}
                  </p>
                </div>
                {t.companyLogo && (
                  <img
                    src={t.companyLogo}
                    alt={t.company}
                    className={`ml-auto ${logoHeight} w-auto object-contain`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setCurrent((current - 1 + total) % total)}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-ink-muted hover:text-ink transition"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition ${i === current ? dotActiveColor : dotInactiveColor}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((current + 1) % total)}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-ink-muted hover:text-ink transition"
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
  eyebrowColor: "brand",
  eyebrowWeight: "bold",
  heading: "Loved by founders and teams",
  headingColor: "ink",
  headingWeight: "bold",
  headingSize: "3xl",
  subheading: "Hear from startups using our platform to build, ship, and grow faster.",
  subheadingColor: "ink-muted",
  subheadingWeight: "normal",
  quoteColor: "ink",
  quoteWeight: "normal",
  quoteSize: "sm",
  nameColor: "ink",
  nameWeight: "semibold",
  roleColor: "ink-muted",
  roleWeight: "normal",
  accentColor: "brand",
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
  paddingY: 16,
  sectionBackground: "surface-muted",
  headingAlign: "center",
  headingTag: "h2",
  cardBackground: "surface",
  cardBorderColor: "border",
  cardRadius: "xl",
  avatarSize: "md",
  logoHeight: "md",
  visibleCards: 3,
  dotActiveColor: "brand",
  dotInactiveColor: "border",
};

export const propSchema = {
  props: [
    { name: "eyebrow", type: "string", default: "Testimonials", allowedValues: "Any string or null" },
    { name: "eyebrowColor", type: "string", default: "brand", allowedValues: "Token name (ink | brand etc) OR any hex e.g. #e50913" },
    { name: "eyebrowWeight", type: "string", default: "bold", allowedValues: "normal | medium | semibold | bold" },
    { name: "heading", type: "string", default: "Loved by founders and teams", allowedValues: "Any string" },
    { name: "headingColor", type: "string", default: "ink", allowedValues: "Token name (ink | brand etc) OR any hex e.g. #0f0f14" },
    { name: "headingWeight", type: "string", default: "bold", allowedValues: "normal | medium | semibold | bold" },
    { name: "headingSize", type: "string", default: "3xl", allowedValues: "xl | 2xl | 3xl | 4xl" },
    { name: "subheading", type: "string", default: "...", allowedValues: "Any string or null" },
    { name: "subheadingColor", type: "string", default: "ink-muted", allowedValues: "Token name OR any hex" },
    { name: "subheadingWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
    { name: "quoteColor", type: "string", default: "ink", allowedValues: "Token name OR any hex" },
    { name: "quoteWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
    { name: "quoteSize", type: "string", default: "sm", allowedValues: "sm | base | lg" },
    { name: "nameColor", type: "string", default: "ink", allowedValues: "Token name OR any hex" },
    { name: "nameWeight", type: "string", default: "semibold", allowedValues: "normal | medium | semibold | bold" },
    { name: "roleColor", type: "string", default: "ink-muted", allowedValues: "Token name OR any hex" },
    { name: "roleWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
    { name: "accentColor", type: "string", default: "brand", allowedValues: "Token name OR any hex" },
    { name: "testimonials", type: "Array<{ quote, name, role, avatar, company, companyLogo }>", default: "[4 items]", allowedValues: "Array of testimonial objects" },
  ],
  styles: [
    { name: "paddingY", type: "number", default: "16", allowedValues: "8 | 10 | 12 | 16 | 20 | 24" },
    { name: "sectionBackground", type: "string", default: "surface-muted", allowedValues: "surface | surface-muted | surface-subtle | navy | navy-elevated | navy-muted" },
    { name: "headingAlign", type: "string", default: "center", allowedValues: "center | left" },
    { name: "headingTag", type: "string", default: "h2", allowedValues: "h2 | h3" },
    { name: "cardBackground", type: "string", default: "surface", allowedValues: "surface | surface-muted | surface-subtle | navy | navy-elevated | navy-muted" },
    { name: "cardBorderColor", type: "string", default: "border", allowedValues: "border | border-dark | brand | none" },
    { name: "cardRadius", type: "string", default: "xl", allowedValues: "none | sm | md | lg | xl | 2xl" },
    { name: "avatarSize", type: "string", default: "md", allowedValues: "sm | md | lg" },
    { name: "logoHeight", type: "string", default: "md", allowedValues: "sm | md | lg" },
    { name: "visibleCards", type: "number", default: "3", allowedValues: "2 | 3 | 4" },
    { name: "dotActiveColor", type: "string", default: "brand", allowedValues: "brand | ink | ink-inverse" },
    { name: "dotInactiveColor", type: "string", default: "border", allowedValues: "border | border-dark | ink-subtle" },
  ],
};