// ─── Defaults (tokens only — values now mapped to REAL Tailwind classes) ──────
// Matches the actual light-theme UI (white page, dark headings, light-gray
// cards, red brand accent) rather than doc 6's literal (unconfigured) theme
// class names, which don't exist in this project's Tailwind config.

export const HOW_IT_WORKS_STYLE_DEFAULTS = {
  // Background
  background:        "white",
  paddingY:           8,
  paddingX:            6,

  // Heading
  headingColor:       "surface",
  headingSize:        "4xl",
  headingWeight:      "extrabold",
  headingAlign:       "center",

  // Subheading
  subheadingColor:    "muted",
  subheadingSize:      "lg",
  subheadingWeight:   "normal",

  // Card
  cardBg:             "muted",
  cardBorder:         "none",
  cardBorderColor:    "subtle",
  cardRadius:         "xl",
  cardShadow:         "sm",
  cardPaddingY:        6,
  cardPaddingX:        6,

  // Card text
  titleColor:         "surface",
  titleSize:          "lg",
  titleWeight:        "bold",
  descColor:          "muted",
  descSize:           "sm",
  descWeight:         "normal",

  // Icon (IconCards only)
  iconColor:          "primary",
  iconBg:             "primary",   // resolver auto-tints this to a soft pink fill
  iconSize:           "md",
  iconRadius:         "lg",

  // Accent
  accentColor:        "primary",
};

// ─── Schema ───────────────────────────────────────────────────────────────────

const COLOR_VALUES = '"primary" | "surface" | "muted" | "subtle" | "white"';

export const HOW_IT_WORKS_STYLE_PROP_SCHEMA = [
  { name: "background",        type: "string", default: "white",   allowedValues: COLOR_VALUES,                                   description: "Section background color token" },
  { name: "paddingY",          type: "number", default: 8,          allowedValues: "4 | 6 | 8 | 10 | 12",                          description: "Vertical section padding" },
  { name: "paddingX",          type: "number", default: 6,          allowedValues: "4 | 6 | 8 | 10 | 12",                          description: "Horizontal section padding" },

  { name: "headingColor",      type: "string", default: "surface", allowedValues: COLOR_VALUES,                                   description: "Heading text color token" },
  { name: "headingSize",       type: "string", default: "4xl",     allowedValues: '"2xl" | "3xl" | "4xl" | "5xl" | "6xl"',        description: "Heading font size" },
  { name: "headingWeight",     type: "string", default: "extrabold", allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"', description: "Heading font weight" },
  { name: "headingAlign",      type: "string", default: "center",  allowedValues: '"left" | "center" | "right"',                  description: "Heading alignment" },

  { name: "subheadingColor",   type: "string", default: "muted",   allowedValues: COLOR_VALUES,                                   description: "Subheading text color token" },
  { name: "subheadingSize",    type: "string", default: "lg",      allowedValues: '"sm" | "base" | "lg" | "xl"',                  description: "Subheading font size" },
  { name: "subheadingWeight",  type: "string", default: "normal",  allowedValues: '"normal" | "medium" | "semibold" | "bold"',    description: "Subheading font weight" },

  { name: "cardBg",            type: "string", default: "muted",   allowedValues: COLOR_VALUES,                                   description: "Card background color token" },
  { name: "cardBorder",        type: "string", default: "none",    allowedValues: '"none" | "sm" | "md" | "lg"',                  description: "Card border thickness" },
  { name: "cardBorderColor",   type: "string", default: "subtle",  allowedValues: COLOR_VALUES,                                   description: "Card border color token" },
  { name: "cardRadius",        type: "string", default: "xl",      allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"', description: "Card border radius" },
  { name: "cardShadow",        type: "string", default: "sm",      allowedValues: '"none" | "sm" | "md" | "lg" | "xl"',           description: "Card drop shadow" },
  { name: "cardPaddingY",      type: "number", default: 6,         allowedValues: "4 | 6 | 8 | 10",                               description: "Card vertical padding" },
  { name: "cardPaddingX",      type: "number", default: 6,         allowedValues: "4 | 6 | 8 | 10",                               description: "Card horizontal padding" },

  { name: "titleColor",        type: "string", default: "surface", allowedValues: COLOR_VALUES,                                   description: "Card title color" },
  { name: "titleSize",         type: "string", default: "lg",      allowedValues: '"sm" | "base" | "lg" | "xl"',                  description: "Card title font size" },
  { name: "titleWeight",       type: "string", default: "bold",    allowedValues: '"normal" | "medium" | "semibold" | "bold"',    description: "Card title font weight" },
  { name: "descColor",         type: "string", default: "muted",   allowedValues: COLOR_VALUES,                                   description: "Card description color" },
  { name: "descSize",          type: "string", default: "sm",      allowedValues: '"xs" | "sm" | "base"',                         description: "Card description font size" },
  { name: "descWeight",        type: "string", default: "normal",  allowedValues: '"normal" | "medium" | "semibold"',             description: "Card description font weight" },

  { name: "iconColor",         type: "string", default: "primary", allowedValues: COLOR_VALUES,                                   description: "Icon color (IconCards only)" },
  { name: "iconBg",            type: "string", default: "primary", allowedValues: COLOR_VALUES,                                   description: "Icon container background (IconCards only) — 'primary' renders as a soft tinted fill" },
  { name: "iconSize",          type: "string", default: "md",      allowedValues: '"sm" | "md" | "lg" | "xl"',                    description: "Icon size (IconCards only)" },
  { name: "iconRadius",        type: "string", default: "lg",      allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "full"',  description: "Icon container border radius (IconCards only)" },

  { name: "accentColor",       type: "string", default: "primary", allowedValues: COLOR_VALUES,                                   description: "Accent color for step badges/numbers/connectors" },
];

// ─── Maps — resolved to REAL Tailwind classes (verified against faqStyles.js) ──
// primary = #e50913 (UpGrad red)

const COLOR_MAP = {
  primary:      { text: "text-[#e50913]", bg: "bg-[#e50913]", border: "border-[#e50913]", bgTint: "bg-[#fdecea]", borderTint: "border-[#e50913]/20" },
  surface:      { text: "text-gray-900",  bg: "bg-white",     border: "border-gray-900",  bgTint: "bg-gray-100",  borderTint: "border-gray-900/20" },
  muted:        { text: "text-gray-500",  bg: "bg-gray-50",   border: "border-gray-200",  bgTint: "bg-gray-100",  borderTint: "border-gray-200" },
  subtle:       { text: "text-gray-400",  bg: "bg-gray-100",  border: "border-gray-100",  bgTint: "bg-gray-100",  borderTint: "border-gray-100" },
  white:        { text: "text-white",     bg: "bg-white",     border: "border-white",     bgTint: "bg-white/10",  borderTint: "border-white/20" },
};

const HEADING_SIZE_MAP = {
  "2xl": "text-2xl",
  "3xl": "text-3xl sm:text-4xl",
  "4xl": "text-4xl sm:text-5xl",
  "5xl": "text-5xl sm:text-6xl",
  "6xl": "text-6xl sm:text-7xl",
};

const BODY_SIZE_MAP = { xs: "text-xs", sm: "text-sm", base: "text-base", lg: "text-lg", xl: "text-xl" };

const WEIGHT_MAP = {
  normal: "font-normal", medium: "font-medium", semibold: "font-semibold",
  bold: "font-bold", extrabold: "font-extrabold",
};

const BORDER_MAP  = { none: "border-0", sm: "border", md: "border-2", lg: "border-4" };
const RADIUS_MAP  = { none: "rounded-none", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", xl: "rounded-xl", "2xl": "rounded-2xl", full: "rounded-full" };
const SHADOW_MAP  = { none: "shadow-none", sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg", xl: "shadow-xl" };
const PADDING_MAP = { 4: "4", 6: "6", 8: "8", 10: "10", 12: "12" };

const ICON_SIZE_MAP = {
  sm: { px: 14, container: "h-8 w-8" },
  md: { px: 18, container: "h-10 w-10" },
  lg: { px: 22, container: "h-12 w-12" },
  xl: { px: 28, container: "h-14 w-14" },
};

function c(token, type) {
  return COLOR_MAP[token]?.[type] ?? COLOR_MAP.surface[type];
}

// ─── Resolver ─────────────────────────────────────────────────────────────────
// Single source of truth: components never write raw Tailwind classes themselves.

export function resolveHowItWorksStyles(styles = {}) {
  const s = { ...HOW_IT_WORKS_STYLE_DEFAULTS, ...styles };

  const py = PADDING_MAP[s.paddingY] ?? PADDING_MAP[8];
  const px = PADDING_MAP[s.paddingX] ?? PADDING_MAP[6];
  const sectionClass = `${c(s.background, "bg")} py-${py} px-${px}`;

  const headingClass = [
    HEADING_SIZE_MAP[s.headingSize] ?? HEADING_SIZE_MAP["4xl"],
    WEIGHT_MAP[s.headingWeight]     ?? WEIGHT_MAP.extrabold,
    "tracking-tight",
    c(s.headingColor, "text"),
  ].join(" ");

  const subheadingClass = [
    BODY_SIZE_MAP[s.subheadingSize] ?? BODY_SIZE_MAP.lg,
    WEIGHT_MAP[s.subheadingWeight]  ?? WEIGHT_MAP.normal,
    "leading-relaxed",
    c(s.subheadingColor, "text"),
  ].join(" ");

  const cardPy = PADDING_MAP[s.cardPaddingY] ?? PADDING_MAP[6];
  const cardPx = PADDING_MAP[s.cardPaddingX] ?? PADDING_MAP[6];
  const cardClass = [
    c(s.cardBg, "bg"),
    BORDER_MAP[s.cardBorder] ?? BORDER_MAP.none,
    c(s.cardBorderColor, "border"),
    RADIUS_MAP[s.cardRadius] ?? RADIUS_MAP.xl,
    SHADOW_MAP[s.cardShadow] ?? SHADOW_MAP.sm,
    `py-${cardPy}`,
    `px-${cardPx}`,
  ].join(" ");

  const titleClass = [
    BODY_SIZE_MAP[s.titleSize] ?? BODY_SIZE_MAP.lg,
    WEIGHT_MAP[s.titleWeight]  ?? WEIGHT_MAP.bold,
    c(s.titleColor, "text"),
  ].join(" ");

  const descClass = [
    BODY_SIZE_MAP[s.descSize] ?? BODY_SIZE_MAP.sm,
    WEIGHT_MAP[s.descWeight]  ?? WEIGHT_MAP.normal,
    "leading-relaxed",
    c(s.descColor, "text"),
  ].join(" ");

  const iconSizeToken = ICON_SIZE_MAP[s.iconSize] ?? ICON_SIZE_MAP.md;
  const iconBgClass = COLOR_MAP[s.iconBg]?.bgTint ?? COLOR_MAP.primary.bgTint;
  const iconWrapClass = [
    iconSizeToken.container,
    "flex items-center justify-center",
    iconBgClass,
    RADIUS_MAP[s.iconRadius] ?? RADIUS_MAP.lg,
  ].join(" ");
  const iconColorClass = c(s.iconColor, "text");
  const iconPx = iconSizeToken.px;

  const accentTextClass       = c(s.accentColor, "text");
  const accentBgClass         = c(s.accentColor, "bg");
  const accentBorderTintClass = COLOR_MAP[s.accentColor]?.borderTint ?? COLOR_MAP.primary.borderTint;
  const connectorClass        = "bg-gray-200"; // decorative line, not themable per schema

  return {
    sectionClass,
    headingAlign: s.headingAlign ?? "center",
    headingClass,
    subheadingClass,
    cardClass,
    titleClass,
    descClass,
    iconWrapClass,
    iconColorClass,
    iconPx,
    accentTextClass,
    accentBgClass,
    accentBorderTintClass,
    connectorClass,
  };
}