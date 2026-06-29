export default function LogoGrid({
    styles = {},
    label = defaultProps.label,
    labelColor = defaultProps.labelColor,
    heading = defaultProps.heading,
    headingColor = defaultProps.headingColor,
    headingWeight = defaultProps.headingWeight,
    subheading = defaultProps.subheading,
    subheadingColor = defaultProps.subheadingColor,
    logos = defaultProps.logos,
    grayscale = defaultProps.grayscale,
    logoFilter = defaultProps.logoFilter,
    logoNameColor = defaultProps.logoNameColor,
    columns = defaultProps.columns,
    cardBackground = defaultProps.cardBackground,
    cardBorderColor = defaultProps.cardBorderColor,
    cardHoverBackground = defaultProps.cardHoverBackground,
  }) {
  
    const backgroundClass = {
      surface: "bg-surface",
      muted: "bg-muted",
      navy: "bg-secondary",
    }[styles.background] ?? "bg-surface";
  
    const paddingClass = {
      4: "py-4",
      6: "py-6",
      8: "py-8",
      10: "py-10",
      12: "py-12",
      16: "py-16",
    }[styles.paddingY] ?? "py-16";
  
    const fontWeightClass = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    }[headingWeight] ?? "font-bold";
  
    const gridClass = {
      3: "grid-cols-2 sm:grid-cols-3",
      4: "grid-cols-2 sm:grid-cols-4",
    }[columns] ?? "grid-cols-2 sm:grid-cols-3";
  
    const computedFilter = grayscale
      ? "grayscale(100%)"
      : logoFilter || "none";
  
    const logoOpacity = grayscale ? 0.5 : 1;
  
    return (
      <section className={`w-full ${backgroundClass} ${paddingClass}`}>
        <div className="max-w-5xl mx-auto px-6 text-center">
  
          {/* Label */}
          {label && (
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: labelColor || undefined }}
            >
              {label}
            </p>
          )}
  
          {/* Heading */}
          {heading && (
            <h2
              className={`text-2xl md:text-4xl mb-4 ${fontWeightClass}`}
              style={{ color: headingColor || undefined }}
            >
              {heading}
            </h2>
          )}
  
          {/* Subheading */}
          {subheading && (
            <p
              className="text-sm md:text-base max-w-xl mx-auto mb-12"
              style={{ color: subheadingColor || undefined }}
            >
              {subheading}
            </p>
          )}
  
          {/* Grid */}
          <div className={`grid ${gridClass} gap-4`}>
            {logos.map((logo, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl transition-colors duration-150"
                style={{
                  backgroundColor: cardBackground || "#ffffff",
                  border: `1px solid ${cardBorderColor || "#e4e4ea"}`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = cardHoverBackground || "#f5f5f7";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = cardBackground || "#ffffff";
                }}
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="h-8 md:h-10 w-auto object-contain mb-3"
                  style={{
                    filter: computedFilter,
                    opacity: logoOpacity,
                  }}
                />
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: logoNameColor || undefined }}
                >
                  {logo.alt}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export const defaultProps = {
    label: "OUR STARTUP PARTNERS",
    labelColor: "#8e8e9e",
    heading: "Trusted by innovative startups",
    headingColor: "#0f0f14",
    headingWeight: "bold",
    subheading: "We're proud to partner with forward-thinking startups building the future.",
    subheadingColor: "#5c5c6f",
    logos: [
      { image: "/assets/logos/stripe.svg", alt: "Stripe" },
      { image: "/assets/logos/vercel.svg", alt: "Vercel" },
      { image: "/assets/logos/linear.svg", alt: "Linear" },
      { image: "/assets/logos/notion.svg", alt: "Notion" },
      { image: "/assets/logos/loom.svg", alt: "Loom" },
      { image: "/assets/logos/figma.svg", alt: "Figma" },
    ],
    grayscale: false,
    logoFilter: null,
    logoNameColor: "#8e8e9e",
    columns: 3,
    cardBackground: "#ffffff",
    cardBorderColor: "#e4e4ea",
    cardHoverBackground: "#f5f5f7",
  };
  
  export const defaultStyles = {
    paddingY: 16,
    background: "surface",
  };
  
  export const propSchema = {
    props: [
      {
        name: "label",
        type: "string",
        default: '"OUR STARTUP PARTNERS"',
        allowedValues: "Any string",
      },
      {
        name: "labelColor",
        type: "string",
        default: "#8e8e9e",
        allowedValues: "Any hex color",
      },
      {
        name: "heading",
        type: "string",
        default: '"Trusted by innovative startups"',
        allowedValues: "Any string",
      },
      {
        name: "headingColor",
        type: "string",
        default: "#0f0f14",
        allowedValues: "Any hex color",
      },
      {
        name: "headingWeight",
        type: "string",
        default: "bold",
        allowedValues: "normal | medium | semibold | bold | extrabold",
      },
      {
        name: "subheading",
        type: "string",
        default: '"We\'re proud to partner..."',
        allowedValues: "Any string",
      },
      {
        name: "subheadingColor",
        type: "string",
        default: "#5c5c6f",
        allowedValues: "Any hex color",
      },
      {
        name: "logos",
        type: "Array<{ image: string, alt: string }>",
        default: "[6 logos]",
        allowedValues: "Array of image/alt objects",
      },
      {
        name: "grayscale",
        type: "boolean",
        default: "false",
        allowedValues: "true | false",
      },
      {
        name: "logoFilter",
        type: "string",
        default: "null",
        allowedValues: "brightness(0) | invert(1) | opacity(0.3) | none",
      },
      {
        name: "logoNameColor",
        type: "string",
        default: "#8e8e9e",
        allowedValues: "Any hex color",
      },
      {
        name: "columns",
        type: "number",
        default: "3",
        allowedValues: "3 | 4",
      },
      {
        name: "cardBackground",
        type: "string",
        default: "#ffffff",
        allowedValues: "Any hex color",
      },
      {
        name: "cardBorderColor",
        type: "string",
        default: "#e4e4ea",
        allowedValues: "Any hex color",
      },
      {
        name: "cardHoverBackground",
        type: "string",
        default: "#f5f5f7",
        allowedValues: "Any hex color",
      },
    ],
    styles: [
      {
        name: "paddingY",
        type: "number",
        default: "16",
        allowedValues: "4 | 6 | 8 | 10 | 16",
      },
      {
        name: "background",
        type: "string",
        default: "surface",
        allowedValues: "surface | muted | navy",
      },
    ],
  };