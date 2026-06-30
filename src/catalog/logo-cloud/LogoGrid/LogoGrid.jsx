import {
  resolveStyles,
  LOGO_SIZE_MAP,
  HEADING_SIZE_MAP,
  BODY_SIZE_MAP,
  WEIGHT_MAP,
  RADIUS_MAP,
  SHADOW_MAP,
  PADDING_MAP,
  COLOR_MAP,
} from "../../../utils/resolveStyles";

export default function LogoGrid({
  styles = {},
  label = defaultProps.label,
  heading = defaultProps.heading,
  subheading = defaultProps.subheading,
  logos = defaultProps.logos,
  grayscale = defaultProps.grayscale,
  columns = defaultProps.columns,
}) {
  const s = resolveStyles(styles);

  // label
  const labelClass = [
    BODY_SIZE_MAP[styles.labelSize ?? "xs"],
    WEIGHT_MAP[styles.labelWeight ?? "semibold"],
    COLOR_MAP[styles.labelColor ?? "muted"]?.text,
    "uppercase tracking-widest",
  ].join(" ");

  // heading
  const headingClass = [
    HEADING_SIZE_MAP[styles.headingSize ?? "4xl"],
    WEIGHT_MAP[styles.headingWeight ?? "bold"],
    COLOR_MAP[styles.headingColor ?? "surface"]?.text,
    "tracking-tight",
  ].join(" ");

  // subheading
  const subheadingClass = [
    BODY_SIZE_MAP[styles.subheadingSize ?? "lg"],
    WEIGHT_MAP[styles.subheadingWeight ?? "normal"],
    COLOR_MAP[styles.subheadingColor ?? "muted"]?.text,
    "leading-relaxed",
  ].join(" ");

  // logo name
  const logoNameClass = [
    BODY_SIZE_MAP[styles.logoNameSize ?? "xs"],
    WEIGHT_MAP[styles.logoNameWeight ?? "semibold"],
    COLOR_MAP[styles.logoNameColor ?? "muted"]?.text,
    "uppercase tracking-widest",
  ].join(" ");

  // card
  const cardBgClass = COLOR_MAP[styles.cardBg ?? "white"]?.bg ?? "bg-white";
  const cardBorderClass = COLOR_MAP[styles.cardBorderColor ?? "subtle"]?.border ?? "border-gray-100";
  const cardRadiusClass = RADIUS_MAP[styles.cardRadius ?? "2xl"];
  const cardShadowClass = SHADOW_MAP[styles.cardShadow ?? "none"];
  const cardPaddingClass = PADDING_MAP[styles.cardPaddingY ?? 6]?.p ?? "p-6";

  // logo
  const logoHeight = LOGO_SIZE_MAP[styles.logoSize ?? "md"];
  const opacityMap = { "50": 0.5, "60": 0.6, "75": 0.75, "100": 1 };
  const logoOpacity = grayscale
    ? opacityMap[styles.logoOpacity ?? "75"]
    : opacityMap[styles.logoOpacity ?? "100"];
  const logoFilter = grayscale ? "grayscale(100%)" : "none";

  // grid columns
  const gridClass = {
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns] ?? "grid-cols-2 sm:grid-cols-3";

  return (
    <section className={`w-full ${s.sectionClass}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Label */}
        {label && (
          <p className={`mb-3 ${labelClass}`}>
            {label}
          </p>
        )}

        {/* Heading */}
        {heading && (
          <h2 className={`mb-4 ${headingClass}`}>
            {heading}
          </h2>
        )}

        {/* Subheading */}
        {subheading && (
          <p className={`max-w-xl mx-auto mb-12 ${subheadingClass}`}>
            {subheading}
          </p>
        )}

        {/* Grid */}
        <div className={`grid ${gridClass} gap-4`}>
          {logos.map((logo, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center border transition-colors duration-150 ${cardBgClass} ${cardBorderClass} ${cardRadiusClass} ${cardShadowClass} ${cardPaddingClass}`}
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className={`${logoHeight} w-auto object-contain mb-3`}
                style={{
                  filter: logoFilter,
                  opacity: logoOpacity,
                }}
              />
              <p className={logoNameClass}>
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
  heading: "Trusted by innovative startups",
  subheading: "We're proud to partner with forward-thinking startups building the future.",
  logos: [
    { image: "/assets/logos/stripe.svg", alt: "Stripe" },
    { image: "/assets/logos/vercel.svg", alt: "Vercel" },
    { image: "/assets/logos/linear.svg", alt: "Linear" },
    { image: "/assets/logos/notion.svg", alt: "Notion" },
    { image: "/assets/logos/loom.svg", alt: "Loom" },
    { image: "/assets/logos/figma.svg", alt: "Figma" },
  ],
  grayscale: false,
  columns: 3,
};

export const defaultStyles = {
  paddingY: 6,
  background: "white",
  labelColor: "muted",
  labelSize: "xs",
  labelWeight: "semibold",
  headingColor: "surface",
  headingSize: "4xl",
  headingWeight: "bold",
  subheadingColor: "muted",
  subheadingSize: "lg",
  subheadingWeight: "normal",
  cardBg: "white",
  cardBorderColor: "subtle",
  cardRadius: "2xl",
  cardShadow: "none",
  cardPaddingY: 6,
  logoSize: "md",
  logoOpacity: "100",
  logoNameColor: "muted",
  logoNameSize: "xs",
  logoNameWeight: "semibold",
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
      name: "heading",
      type: "string",
      default: '"Trusted by innovative startups"',
      allowedValues: "Any string",
    },
    {
      name: "subheading",
      type: "string",
      default: '"We\'re proud to partner..."',
      allowedValues: "Any string",
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
      name: "columns",
      type: "number",
      default: "3",
      allowedValues: "3 | 4",
    },
  ],
  styles: [
    {
      name: "paddingY",
      type: "number",
      default: "6",
      allowedValues: "4 | 6 | 8 | 10 | 12",
    },
    {
      name: "background",
      type: "string",
      default: "white",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "labelColor",
      type: "string",
      default: "muted",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "labelSize",
      type: "string",
      default: "xs",
      allowedValues: "xs | sm | base | lg",
    },
    {
      name: "labelWeight",
      type: "string",
      default: "semibold",
      allowedValues: "normal | medium | semibold | bold",
    },
    {
      name: "headingColor",
      type: "string",
      default: "surface",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "headingSize",
      type: "string",
      default: "4xl",
      allowedValues: "2xl | 3xl | 4xl | 5xl | 6xl",
    },
    {
      name: "headingWeight",
      type: "string",
      default: "bold",
      allowedValues: "normal | medium | semibold | bold | extrabold",
    },
    {
      name: "subheadingColor",
      type: "string",
      default: "muted",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "subheadingSize",
      type: "string",
      default: "lg",
      allowedValues: "sm | base | lg | xl",
    },
    {
      name: "subheadingWeight",
      type: "string",
      default: "normal",
      allowedValues: "normal | medium | semibold | bold",
    },
    {
      name: "cardBg",
      type: "string",
      default: "white",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "cardBorderColor",
      type: "string",
      default: "subtle",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "cardRadius",
      type: "string",
      default: "2xl",
      allowedValues: "none | sm | md | lg | xl | 2xl | full",
    },
    {
      name: "cardShadow",
      type: "string",
      default: "none",
      allowedValues: "none | sm | md | lg | xl",
    },
    {
      name: "cardPaddingY",
      type: "number",
      default: "6",
      allowedValues: "4 | 6 | 8 | 10",
    },
    {
      name: "logoSize",
      type: "string",
      default: "md",
      allowedValues: "sm | md | lg | xl",
    },
    {
      name: "logoOpacity",
      type: "string",
      default: "100",
      allowedValues: "50 | 60 | 75 | 100",
    },
    {
      name: "logoNameColor",
      type: "string",
      default: "muted",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "logoNameSize",
      type: "string",
      default: "xs",
      allowedValues: "xs | sm | base",
    },
    {
      name: "logoNameWeight",
      type: "string",
      default: "semibold",
      allowedValues: "normal | medium | semibold | bold",
    },
  ],
};
