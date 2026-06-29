// add this helper at the top of CardGrid.jsx
// same as what we did for Carousel
function resolveColor(value, fallback) {
    if (!value) return fallback;
    if (value.startsWith("#") || value.startsWith("rgb")) return value;
    const tokenMap = {
      text: "var(--color-text)",
      ink: "var(--color-text)",
      primary: "var(--color-primary)",
      brand: "var(--color-primary)",
      "ink-muted": "var(--color-ink-muted)",
      "ink-subtle": "var(--color-ink-subtle)",
      "ink-inverse": "var(--color-ink-inverse)",
      "ink-inverse-muted": "var(--color-ink-inverse-muted)",
      "primary-dark": "var(--color-primary-dark)",
      "brand-light": "var(--color-brand-light)",
    };
    return tokenMap[value] ?? fallback;
  }
  
  export default function CardGrid({
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
  
    // structural classes stay as Tailwind tokens — these never change at runtime
    const sectionBg = {
      surface: "bg-surface",
      "surface-muted": "bg-muted",
      "surface-subtle": "bg-surface-subtle",
      navy: "bg-secondary",
      "navy-elevated": "bg-navy-elevated",
      "navy-muted": "bg-navy-muted",
    }[styles.sectionBackground] ?? "bg-surface";
  
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
      "surface-muted": "bg-muted",
      "surface-subtle": "bg-surface-subtle",
      navy: "bg-secondary",
      "navy-elevated": "bg-navy-elevated",
      "navy-muted": "bg-navy-muted",
    }[styles.cardBackground] ?? "bg-surface";
  
    const cardBorderColor = {
      border: "border-border",
      "border-dark": "border-border-dark",
      brand: "border-primary",
      primary: "border-primary",
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
  
    const columns = {
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
    }[styles.columns] ?? "md:grid-cols-3";
  
    // font weight stays Tailwind — structural not color
    const weightMap = {
      normal: "font-normal", medium: "font-medium",
      semibold: "font-semibold", bold: "font-bold",
    };
  
    const sizeMap = {
      sm: "text-sm", base: "text-base", lg: "text-lg",
      xl: "text-xl", "2xl": "text-2xl", "3xl": "text-3xl", "4xl": "text-4xl",
    };
  
    return (
      <section className={`w-full ${sectionBg} ${paddingY}`}>
        <div className="max-w-6xl mx-auto px-6">
  
          {/* Heading block */}
          <div className={`flex flex-col mb-12 ${headingAlign}`}>
            {eyebrow && (
              <p
                className={`text-xs uppercase tracking-widest mb-2 ${weightMap[eyebrowWeight] ?? "font-bold"}`}
                style={{ color: resolveColor(eyebrowColor, "var(--color-primary)") }}
              >
                {eyebrow}
              </p>
            )}
            <HeadingTag
              className={`${sizeMap[headingSize] ?? "text-3xl"} ${weightMap[headingWeight] ?? "font-bold"}`}
              style={{ color: resolveColor(headingColor, "var(--color-text)") }}
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
          <div className={`grid grid-cols-1 ${columns} gap-6`}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${cardBg} border ${cardBorderColor} ${cardRadius} p-6 flex flex-col gap-4`}
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span
                  className="text-4xl font-serif leading-none"
                  style={{ color: resolveColor(accentColor, "var(--color-primary)") }}
                >
                  "
                </span>
                <p
                  className={`leading-relaxed ${sizeMap[quoteSize] ?? "text-sm"} ${weightMap[quoteWeight] ?? "font-normal"}`}
                  style={{ color: resolveColor(quoteColor, "var(--color-text)") }}
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
                      style={{ color: resolveColor(nameColor, "var(--color-text)") }}
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
  
        </div>
      </section>
    );
  }
  
  export const defaultProps = {
    eyebrow: "Testimonials",
    eyebrowColor: "primary",
    eyebrowWeight: "bold",
    heading: "Trusted by startup teams",
    headingColor: "text",
    headingWeight: "bold",
    headingSize: "3xl",
    subheading: "See what founders and operators say about working with us.",
    subheadingColor: "ink-muted",
    subheadingWeight: "normal",
    quoteColor: "text",
    quoteWeight: "normal",
    quoteSize: "sm",
    nameColor: "text",
    nameWeight: "semibold",
    roleColor: "ink-muted",
    roleWeight: "normal",
    accentColor: "primary",
    testimonials: [
      {
        quote: "This product has become indispensable to our daily workflow. It's simple, powerful, and saves us hours every week.",
        name: "Sarah Chen",
        role: "Co-founder & CEO",
        avatar: "/assets/images/avatar1.jpg",
        company: "Luminara",
        companyLogo: "/assets/logos/figma.svg",
      },
      {
        quote: "Onboarding was effortless and we saw value within days. The team moves fast and genuinely cares about our success.",
        name: "Arjun Patel",
        role: "CTO",
        avatar: "/assets/images/avatar2.jpg",
        company: "Flowbase",
        companyLogo: "/assets/logos/vercel.svg",
      },
      {
        quote: "The best support experience we've had as a startup. Thoughtful product, clear roadmap, and an amazing team behind it.",
        name: "Mina Lee",
        role: "Head of Operations",
        avatar: "/assets/images/avatar3.jpg",
        company: "Springboard",
        companyLogo: "/assets/logos/linear.svg",
      },
    ],
  };
  
  export const defaultStyles = {
    paddingY: 16,
    sectionBackground: "surface",
    headingAlign: "center",
    headingTag: "h2",
    cardBackground: "surface",
    cardBorderColor: "border",
    cardRadius: "xl",
    avatarSize: "md",
    logoHeight: "md",
    columns: 3,
  };
  
  export const propSchema = {
    props: [
      { name: "eyebrow", type: "string", default: "Testimonials", allowedValues: "Any string or null" },
      { name: "eyebrowColor", type: "string", default: "primary", allowedValues: "Token name OR any hex e.g. #e50913" },
      { name: "eyebrowWeight", type: "string", default: "bold", allowedValues: "normal | medium | semibold | bold" },
      { name: "heading", type: "string", default: "Trusted by startup teams", allowedValues: "Any string" },
      { name: "headingColor", type: "string", default: "text", allowedValues: "Token name OR any hex e.g. #0f0f14" },
      { name: "headingWeight", type: "string", default: "bold", allowedValues: "normal | medium | semibold | bold" },
      { name: "headingSize", type: "string", default: "3xl", allowedValues: "xl | 2xl | 3xl | 4xl" },
      { name: "subheading", type: "string", default: "...", allowedValues: "Any string or null" },
      { name: "subheadingColor", type: "string", default: "ink-muted", allowedValues: "Token name OR any hex" },
      { name: "subheadingWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
      { name: "quoteColor", type: "string", default: "text", allowedValues: "Token name OR any hex" },
      { name: "quoteWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
      { name: "quoteSize", type: "string", default: "sm", allowedValues: "sm | base | lg" },
      { name: "nameColor", type: "string", default: "text", allowedValues: "Token name OR any hex" },
      { name: "nameWeight", type: "string", default: "semibold", allowedValues: "normal | medium | semibold | bold" },
      { name: "roleColor", type: "string", default: "ink-muted", allowedValues: "Token name OR any hex" },
      { name: "roleWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
      { name: "accentColor", type: "string", default: "primary", allowedValues: "Token name OR any hex" },
      { name: "testimonials", type: "Array<{ quote, name, role, avatar, company, companyLogo }>", default: "[3 items]", allowedValues: "Array of testimonial objects" },
    ],
    styles: [
      { name: "paddingY", type: "number", default: "16", allowedValues: "8 | 10 | 12 | 16 | 20 | 24" },
      { name: "sectionBackground", type: "string", default: "surface", allowedValues: "surface | surface-muted | surface-subtle | navy | navy-elevated | navy-muted" },
      { name: "headingAlign", type: "string", default: "center", allowedValues: "center | left" },
      { name: "headingTag", type: "string", default: "h2", allowedValues: "h2 | h3" },
      { name: "cardBackground", type: "string", default: "surface", allowedValues: "surface | surface-muted | surface-subtle | navy | navy-elevated | navy-muted" },
      { name: "cardBorderColor", type: "string", default: "border", allowedValues: "border | border-dark | primary | brand | none" },
      { name: "cardRadius", type: "string", default: "xl", allowedValues: "none | sm | md | lg | xl | 2xl" },
      { name: "avatarSize", type: "string", default: "md", allowedValues: "sm | md | lg" },
      { name: "logoHeight", type: "string", default: "md", allowedValues: "sm | md | lg" },
      { name: "columns", type: "number", default: "3", allowedValues: "2 | 3 | 4" },
    ],
  };