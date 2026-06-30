// ─── Defaults ─────────────────────────────────────────────────────────────────

export const PRICING_STYLE_DEFAULTS = {
  // Layout
  paddingY: 8,

  // Background
  background: "white",

  // Heading
  headingColor: "surface",
  headingSize: "4xl",
  headingWeight: "extrabold",
  headingAlign: "center",

  // Subheading
  subheadingColor: "muted",
  subheadingSize: "lg",
  subheadingWeight: "normal",

  // Card
  cardBg: "white",
  cardBorder: "sm",
  cardBorderColor: "subtle",
  cardRadius: "2xl",
  cardShadow: "none",
  cardPaddingY: 8,
  cardPaddingX: 8,

  // Card text
  titleColor: "surface",
  titleSize: "lg",
  titleWeight: "bold",
  descColor: "muted",
  descSize: "sm",
  descWeight: "normal",

  // Accent (check icons, highlighted badge, toggle thumb, CTA button)
  accentColor: "primary",
};

// ─── Schema ───────────────────────────────────────────────────────────────────

const COLOR_VALUES = '"primary" | "surface" | "muted" | "subtle" | "white"';

export const PRICING_STYLE_PROP_SCHEMA = [
  // Layout
  { name: "paddingY",         type: "number",  default: 8,           allowedValues: "4 | 6 | 8 | 10 | 12",                                    description: "Vertical section padding scale" },

  // Background
  { name: "background",       type: "string",  default: "white",     allowedValues: COLOR_VALUES,                                              description: "Section background color token" },

  // Heading
  { name: "headingColor",     type: "string",  default: "surface",   allowedValues: COLOR_VALUES,                                              description: "Heading text color token" },
  { name: "headingSize",      type: "string",  default: "4xl",       allowedValues: '"2xl" | "3xl" | "4xl" | "5xl" | "6xl"',                  description: "Heading font size" },
  { name: "headingWeight",    type: "string",  default: "extrabold", allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"', description: "Heading font weight" },
  { name: "headingAlign",     type: "string",  default: "center",    allowedValues: '"left" | "center" | "right"',                            description: "Heading alignment" },

  // Subheading
  { name: "subheadingColor",  type: "string",  default: "muted",     allowedValues: COLOR_VALUES,                                              description: "Subheading text color token" },
  { name: "subheadingSize",   type: "string",  default: "lg",        allowedValues: '"sm" | "base" | "lg" | "xl"',                            description: "Subheading font size" },
  { name: "subheadingWeight", type: "string",  default: "normal",    allowedValues: '"normal" | "medium" | "semibold" | "bold"',              description: "Subheading font weight" },

  // Card
  { name: "cardBg",           type: "string",  default: "white",     allowedValues: COLOR_VALUES,                                              description: "Card background color token" },
  { name: "cardBorder",       type: "string",  default: "sm",        allowedValues: '"none" | "sm" | "md" | "lg"',                            description: "Card border thickness" },
  { name: "cardBorderColor",  type: "string",  default: "subtle",    allowedValues: COLOR_VALUES,                                              description: "Card border color token" },
  { name: "cardRadius",       type: "string",  default: "2xl",       allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"',   description: "Card border radius" },
  { name: "cardShadow",       type: "string",  default: "none",      allowedValues: '"none" | "sm" | "md" | "lg" | "xl"',                     description: "Card drop shadow" },
  { name: "cardPaddingY",     type: "number",  default: 8,           allowedValues: "4 | 6 | 8 | 10",                                         description: "Card vertical padding" },
  { name: "cardPaddingX",     type: "number",  default: 8,           allowedValues: "4 | 6 | 8 | 10",                                         description: "Card horizontal padding" },

  // Card text
  { name: "titleColor",       type: "string",  default: "surface",   allowedValues: COLOR_VALUES,                                              description: "Plan name / card title color token" },
  { name: "titleSize",        type: "string",  default: "lg",        allowedValues: '"sm" | "base" | "lg" | "xl"',                            description: "Plan name font size" },
  { name: "titleWeight",      type: "string",  default: "bold",      allowedValues: '"normal" | "medium" | "semibold" | "bold"',              description: "Plan name font weight" },
  { name: "descColor",        type: "string",  default: "muted",     allowedValues: COLOR_VALUES,                                              description: "Plan description text color token" },
  { name: "descSize",         type: "string",  default: "sm",        allowedValues: '"xs" | "sm" | "base"',                                   description: "Plan description font size" },
  { name: "descWeight",       type: "string",  default: "normal",    allowedValues: '"normal" | "medium" | "semibold"',                       description: "Plan description font weight" },

  // Accent
  { name: "accentColor",      type: "string",  default: "primary",   allowedValues: COLOR_VALUES,                                              description: "Accent color — check icons, badge, toggle, CTA button" },
];

// ─── Token maps ───────────────────────────────────────────────────────────────
// Five semantic color tokens → actual Tailwind classes from src/index.css @theme
//
//   "primary" → brand red  #e50913
//   "surface" → dark ink   #0f0f14  (maps to text-ink / bg-surface)
//   "muted"   → muted ink  #5c5c6f  (maps to text-ink-muted / bg-surface-muted)
//   "subtle"  → subtle ink #8e8e9e  (maps to text-ink-subtle / bg-surface-subtle)
//   "white"   → #ffffff

const COLOR_MAP = {
  primary: { text: "text-brand",       bg: "bg-brand",         border: "border-brand" },
  surface: { text: "text-ink",         bg: "bg-surface",       border: "border-border" },
  muted:   { text: "text-ink-muted",   bg: "bg-surface-muted", border: "border-border" },
  subtle:  { text: "text-ink-subtle",  bg: "bg-surface-subtle",border: "border-border" },
  white:   { text: "text-white",       bg: "bg-white",         border: "border-white" },
};

const HEADING_SIZE_MAP = {
  "2xl": "text-2xl",
  "3xl": "text-3xl sm:text-4xl",
  "4xl": "text-4xl sm:text-5xl",
  "5xl": "text-5xl sm:text-6xl",
  "6xl": "text-6xl sm:text-7xl",
};

const BODY_SIZE_MAP = {
  xs: "text-xs", sm: "text-sm", base: "text-base", lg: "text-lg", xl: "text-xl",
};

const WEIGHT_MAP = {
  normal:    "font-normal",
  medium:    "font-medium",
  semibold:  "font-semibold",
  bold:      "font-bold",
  extrabold: "font-extrabold",
};

const PADDING_Y_MAP = {
  4:  "py-8 sm:py-10",
  6:  "py-10 sm:py-12",
  8:  "py-12 sm:py-16",
  10: "py-16 sm:py-20",
  12: "py-20 sm:py-24",
};

const CARD_PADDING_Y_MAP = { 4: "py-4", 6: "py-6", 8: "py-8", 10: "py-10" };
const CARD_PADDING_X_MAP = { 4: "px-4", 6: "px-6", 8: "px-8", 10: "px-10" };

const CARD_BORDER_MAP = { none: "border-0", sm: "border", md: "border-2", lg: "border-4" };
const CARD_RADIUS_MAP = { none: "rounded-none", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", xl: "rounded-xl", "2xl": "rounded-2xl", full: "rounded-full" };
const CARD_SHADOW_MAP = { none: "shadow-none", sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg", xl: "shadow-xl" };

// ─── Helper ───────────────────────────────────────────────────────────────────

function c(token, type) {
  return COLOR_MAP[token]?.[type] ?? COLOR_MAP.surface[type];
}

// ─── Resolver ─────────────────────────────────────────────────────────────────

export function resolvePricingStyles(styles = {}) {
  const s = { ...PRICING_STYLE_DEFAULTS, ...styles };

  // Section
  const sectionClass = [
    c(s.background, "bg"),
    PADDING_Y_MAP[s.paddingY] ?? PADDING_Y_MAP[8],
    "transition-colors duration-200",
  ].join(" ");

  // Heading
  const headingClass = [
    HEADING_SIZE_MAP[s.headingSize]  ?? HEADING_SIZE_MAP["4xl"],
    WEIGHT_MAP[s.headingWeight]      ?? WEIGHT_MAP.extrabold,
    "tracking-tight",
    c(s.headingColor, "text"),
  ].join(" ");

  // Subheading
  const subheadingClass = [
    BODY_SIZE_MAP[s.subheadingSize]  ?? BODY_SIZE_MAP.lg,
    WEIGHT_MAP[s.subheadingWeight]   ?? WEIGHT_MAP.normal,
    "leading-relaxed",
    c(s.subheadingColor, "text"),
  ].join(" ");

  // Card base (no border — components apply border separately so highlighted
  // plans can override the border colour/width cleanly)
  const cardBaseClass = [
    c(s.cardBg, "bg"),
    CARD_RADIUS_MAP[s.cardRadius]      ?? CARD_RADIUS_MAP["2xl"],
    CARD_SHADOW_MAP[s.cardShadow]      ?? CARD_SHADOW_MAP.none,
    CARD_PADDING_Y_MAP[s.cardPaddingY] ?? CARD_PADDING_Y_MAP[8],
    CARD_PADDING_X_MAP[s.cardPaddingX] ?? CARD_PADDING_X_MAP[8],
  ].join(" ");

  const cardBorderClass = [
    CARD_BORDER_MAP[s.cardBorder]  ?? CARD_BORDER_MAP.sm,
    c(s.cardBorderColor, "border"),
  ].join(" ");

  // Combined (used by SinglePlanFocus which has one static card)
  const cardClass = `${cardBaseClass} ${cardBorderClass}`;

  // Card title
  const titleClass = [
    BODY_SIZE_MAP[s.titleSize]   ?? BODY_SIZE_MAP.lg,
    WEIGHT_MAP[s.titleWeight]    ?? WEIGHT_MAP.bold,
    c(s.titleColor, "text"),
  ].join(" ");

  // Card description / feature text
  const descClass = [
    BODY_SIZE_MAP[s.descSize]    ?? BODY_SIZE_MAP.sm,
    WEIGHT_MAP[s.descWeight]     ?? WEIGHT_MAP.normal,
    "leading-relaxed",
    c(s.descColor, "text"),
  ].join(" ");

  // Accent
  const accentTextClass   = c(s.accentColor, "text");
  const accentBgClass     = c(s.accentColor, "bg");
  const accentBorderClass = c(s.accentColor, "border");

  // Heading align
  const headingAlign = s.headingAlign ?? "center";

  return {
    sectionClass,
    headingAlign,
    headingClass,
    subheadingClass,
    cardClass,
    cardBaseClass,
    cardBorderClass,
    titleClass,
    descClass,
    accentTextClass,
    accentBgClass,
    accentBorderClass,
  };
}
