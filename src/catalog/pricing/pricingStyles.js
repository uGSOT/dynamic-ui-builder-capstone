import {
  BODY_SIZE_MAP,
  BORDER_MAP,
  HEADING_SIZE_MAP,
  PADDING_MAP,
  RADIUS_MAP,
  SHADOW_MAP,
  WEIGHT_MAP,
  colorClass,
} from "../../utils/resolveStyles";

// ─── Defaults ─────────────────────────────────────────────────────────────────

export const PRICING_STYLE_DEFAULTS = {
  // Layout
  paddingY:          6,

  // Background
  background:        "surface",

  // Section heading
  headingColor:      "white",
  headingSize:       "4xl",
  headingWeight:     "bold",
  headingAlign:      "center",

  // Section subheading
  subheadingColor:   "muted",
  subheadingSize:    "lg",
  subheadingWeight:  "normal",

  // Card
  cardBg:            "muted",
  cardBorder:        "sm",
  cardBorderColor:   "subtle",
  cardRadius:        "lg",
  cardShadow:        "none",
  cardPaddingY:      6,
  cardPaddingX:      6,

  // Card title (plan name)
  titleColor:        "white",
  titleSize:         "base",
  titleWeight:       "semibold",

  // Card description / feature text
  descColor:         "muted",
  descSize:          "sm",
  descWeight:        "normal",

  // Accent (check icons, badges, highlighted borders, CTA buttons)
  accentColor:       "primary",
};

// ─── Schema ───────────────────────────────────────────────────────────────────

const COLOR_VALUES = '"primary" | "surface" | "muted" | "subtle" | "white"';

export const PRICING_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: 6,
    allowedValues: "4 | 6 | 8 | 10 | 12",
    description: "Vertical section padding",
  },
  {
    name: "background",
    type: "string",
    default: "surface",
    allowedValues: COLOR_VALUES,
    description: "Section background color token",
  },
  {
    name: "headingColor",
    type: "string",
    default: "white",
    allowedValues: COLOR_VALUES,
    description: "Section heading text color token",
  },
  {
    name: "headingSize",
    type: "string",
    default: "4xl",
    allowedValues: '"2xl" | "3xl" | "4xl" | "5xl" | "6xl"',
    description: "Section heading font size",
  },
  {
    name: "headingWeight",
    type: "string",
    default: "bold",
    allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"',
    description: "Section heading font weight",
  },
  {
    name: "headingAlign",
    type: "string",
    default: "center",
    allowedValues: '"left" | "center" | "right"',
    description: "Section heading alignment",
  },
  {
    name: "subheadingColor",
    type: "string",
    default: "muted",
    allowedValues: COLOR_VALUES,
    description: "Section subheading text color token",
  },
  {
    name: "subheadingSize",
    type: "string",
    default: "lg",
    allowedValues: '"sm" | "base" | "lg" | "xl"',
    description: "Section subheading font size",
  },
  {
    name: "subheadingWeight",
    type: "string",
    default: "normal",
    allowedValues: '"normal" | "medium" | "semibold" | "bold"',
    description: "Section subheading font weight",
  },
  {
    name: "cardBg",
    type: "string",
    default: "muted",
    allowedValues: COLOR_VALUES,
    description: "Card background color token",
  },
  {
    name: "cardBorder",
    type: "string",
    default: "sm",
    allowedValues: '"none" | "sm" | "md" | "lg"',
    description: "Card border thickness",
  },
  {
    name: "cardBorderColor",
    type: "string",
    default: "subtle",
    allowedValues: COLOR_VALUES,
    description: "Card border color token",
  },
  {
    name: "cardRadius",
    type: "string",
    default: "lg",
    allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"',
    description: "Card border radius",
  },
  {
    name: "cardShadow",
    type: "string",
    default: "none",
    allowedValues: '"none" | "sm" | "md" | "lg" | "xl"',
    description: "Card drop shadow",
  },
  {
    name: "cardPaddingY",
    type: "number",
    default: 6,
    allowedValues: "4 | 6 | 8 | 10",
    description: "Card vertical padding",
  },
  {
    name: "cardPaddingX",
    type: "number",
    default: 6,
    allowedValues: "4 | 6 | 8 | 10",
    description: "Card horizontal padding",
  },
  {
    name: "titleColor",
    type: "string",
    default: "white",
    allowedValues: COLOR_VALUES,
    description: "Plan title (name) color token",
  },
  {
    name: "titleSize",
    type: "string",
    default: "base",
    allowedValues: '"sm" | "base" | "lg" | "xl"',
    description: "Plan title font size",
  },
  {
    name: "titleWeight",
    type: "string",
    default: "semibold",
    allowedValues: '"normal" | "medium" | "semibold" | "bold"',
    description: "Plan title font weight",
  },
  {
    name: "descColor",
    type: "string",
    default: "muted",
    allowedValues: COLOR_VALUES,
    description: "Plan description / feature text color token",
  },
  {
    name: "descSize",
    type: "string",
    default: "sm",
    allowedValues: '"xs" | "sm" | "base"',
    description: "Plan description font size",
  },
  {
    name: "descWeight",
    type: "string",
    default: "normal",
    allowedValues: '"normal" | "medium" | "semibold"',
    description: "Plan description font weight",
  },
  {
    name: "accentColor",
    type: "string",
    default: "primary",
    allowedValues: COLOR_VALUES,
    description: "Accent color for check icons, badges, highlighted card borders, and CTA buttons",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function alignClass(align) {
  if (align === "right") return "text-right ml-auto";
  if (align === "left") return "text-left";
  return "text-center mx-auto";
}

function readableTextOn(token) {
  return token === "white" ? "text-ink" : "text-ink-inverse";
}

// ─── Resolver ─────────────────────────────────────────────────────────────────

export function resolvePricingStyles(styles = {}) {
  const s = { ...PRICING_STYLE_DEFAULTS, ...styles };

  // Section layout
  const background    = colorClass(s.background, "bg");
  const paddingY      = PADDING_MAP[s.paddingY]?.y ?? PADDING_MAP[6].y;

  // Whether we're on a dark background (everything except white)
  const inverted = s.background !== "white";

  // Accent
  const accentText   = colorClass(s.accentColor, "text");
  const accentBg     = colorClass(s.accentColor, "bg");
  const accentBorder = colorClass(s.accentColor, "border");

  // Card
  const cardBg     = colorClass(s.cardBg, "bg");
  const cardBorder = colorClass(s.cardBorderColor, "border");

  // Section heading
  const headingClass = [
    HEADING_SIZE_MAP[s.headingSize] ?? HEADING_SIZE_MAP["4xl"],
    WEIGHT_MAP[s.headingWeight]     ?? WEIGHT_MAP.bold,
    "tracking-tight",
    colorClass(s.headingColor, "text"),
  ].join(" ");

  // Section subheading
  const subheadingClass = [
    BODY_SIZE_MAP[s.subheadingSize]  ?? BODY_SIZE_MAP.lg,
    WEIGHT_MAP[s.subheadingWeight]   ?? WEIGHT_MAP.normal,
    "leading-relaxed",
    colorClass(s.subheadingColor, "text"),
  ].join(" ");

  // Plan title (card heading)
  const titleClass = [
    BODY_SIZE_MAP[s.titleSize]   ?? BODY_SIZE_MAP.base,
    WEIGHT_MAP[s.titleWeight]    ?? WEIGHT_MAP.semibold,
    colorClass(s.titleColor, "text"),
  ].join(" ");

  // Plan title — slightly larger variant used for feature-card headings
  const planTitleClass = [
    BODY_SIZE_MAP[s.titleSize === "sm" ? "sm" : "lg"] ?? BODY_SIZE_MAP.lg,
    WEIGHT_MAP.bold,
    colorClass(s.titleColor, "text"),
  ].join(" ");

  // Price display
  const priceClass = [
    "text-4xl",
    WEIGHT_MAP.extrabold,
    "tracking-tight",
    colorClass(s.titleColor, "text"),
  ].join(" ");

  const featuredPriceClass = [
    "text-5xl",
    WEIGHT_MAP.extrabold,
    "tracking-tight",
    colorClass(s.titleColor, "text"),
  ].join(" ");

  // Description / feature item text
  const descClass = [
    BODY_SIZE_MAP[s.descSize]  ?? BODY_SIZE_MAP.sm,
    WEIGHT_MAP[s.descWeight]   ?? WEIGHT_MAP.normal,
    "leading-relaxed",
    colorClass(s.descColor, "text"),
  ].join(" ");

  // Period / meta text (same size as desc but semibold)
  const metaClass = [
    BODY_SIZE_MAP[s.descSize] ?? BODY_SIZE_MAP.sm,
    WEIGHT_MAP.semibold,
    colorClass(s.descColor, "text"),
  ].join(" ");

  // Billing toggle
  const toggleActiveClass   = `${WEIGHT_MAP.semibold} ${colorClass(s.headingColor, "text")}`;
  const toggleInactiveClass = colorClass(s.descColor, "text");
  const toggleTrackClass    = cardBg;
  const toggleThumbClass    = accentBg;

  // Card classes
  const cardClass = [
    "relative flex flex-col transition-all duration-300",
    cardBg,
    BORDER_MAP[s.cardBorder] ?? BORDER_MAP.sm,
    cardBorder,
    RADIUS_MAP[s.cardRadius] ?? RADIUS_MAP.lg,
    SHADOW_MAP[s.cardShadow] ?? SHADOW_MAP.none,
    PADDING_MAP[s.cardPaddingY]?.y ?? PADDING_MAP[6].y,
    PADDING_MAP[s.cardPaddingX]?.x ?? PADDING_MAP[6].x,
  ].join(" ");

  const featuredCardClass = [
    "relative max-w-3xl mx-auto mt-16",
    cardBg,
    BORDER_MAP[s.cardBorder] ?? BORDER_MAP.sm,
    cardBorder,
    RADIUS_MAP[s.cardRadius] ?? RADIUS_MAP.lg,
    SHADOW_MAP[s.cardShadow] ?? SHADOW_MAP.xl,
    PADDING_MAP[s.cardPaddingY]?.y ?? PADDING_MAP[8].y,
    PADDING_MAP[s.cardPaddingX]?.x ?? PADDING_MAP[8].x,
  ].join(" ");

  // Highlighted card (most popular)
  const highlightClass = `${accentBorder} border-2 scale-[1.02] shadow-xl md:z-10`;

  // Badges
  const badgeClass         = `${accentBg} ${readableTextOn(s.accentColor)} rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide uppercase`;
  const featuredBadgeClass = `${accentText} bg-brand-muted inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-4`;

  // Check icon
  const checkClass = `${accentText} shrink-0 mt-0.5`;

  // CTA buttons
  const primaryButtonClass   = `${accentBg} ${readableTextOn(s.accentColor)} hover:opacity-90 focus:ring-brand`;
  const secondaryButtonClass = `${BORDER_MAP.sm} ${cardBorder} ${colorClass(s.titleColor, "text")} hover:opacity-80 focus:ring-brand`;

  // Divider
  const dividerClass = cardBorder;

  return {
    // Section wrapper
    className: `${paddingY} ${background}`,
    inverted,
    headerClass: `max-w-3xl ${alignClass(s.headingAlign)}`,

    // Text classes
    headingClass,
    subheadingClass,
    titleClass,
    planTitleClass,
    priceClass,
    featuredPriceClass,
    descClass,
    metaClass,

    // Toggle
    toggleActiveClass,
    toggleInactiveClass,
    toggleTrackClass,
    toggleThumbClass,

    // Cards
    cardClass,
    featuredCardClass,
    highlightClass,

    // Badges & accents
    badgeClass,
    featuredBadgeClass,
    checkClass,
    accentText,
    accentBg,
    accentBorder,

    // Buttons
    primaryButtonClass,
    secondaryButtonClass,

    // Misc
    dividerClass,
  };
}
