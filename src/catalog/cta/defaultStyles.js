// ─── Defaults (tokens only — mapped to REAL Tailwind classes, light theme) ────

export const PROMO_STYLE_DEFAULTS = {
  background:           "white",
  paddingY:              12,
  paddingX:               6,
  headingColor:          "surface",
  headingSize:           "3xl",
  headingWeight:         "extrabold",
  subheadingColor:       "muted",
  subheadingSize:         "lg",
  subheadingWeight:      "normal",
  cardBg:                "white",
  cardBorder:            "sm",
  cardBorderColor:       "subtle",
  cardRadius:            "2xl",
  cardShadow:            "sm",
  primaryButtonColor:    "primary",
  secondaryButtonColor:  "surface",
  imagePosition:         "right",
  imageRadius:           "2xl",
};

// ─── Schema (full superset) ───────────────────────────────────────────────────

const COLOR_VALUES = '"primary" | "surface" | "muted" | "subtle" | "white"';

export const PROMO_STYLE_PROP_SCHEMA = [
  { name: "background",          type: "string", default: "white",      allowedValues: COLOR_VALUES,                                    description: "Section background color token" },
  { name: "paddingY",            type: "number", default: 12,           allowedValues: "4 | 6 | 8 | 10 | 12 | 16 | 20",                description: "Vertical section padding" },
  { name: "paddingX",            type: "number", default: 6,            allowedValues: "4 | 6 | 8 | 10 | 12",                          description: "Horizontal section padding" },
  { name: "headingColor",        type: "string", default: "surface",    allowedValues: COLOR_VALUES,                                    description: "Heading text color token" },
  { name: "headingSize",         type: "string", default: "3xl",        allowedValues: '"2xl" | "3xl" | "4xl" | "5xl"',                description: "Heading font size" },
  { name: "headingWeight",       type: "string", default: "extrabold",  allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"', description: "Heading font weight" },
  { name: "subheadingColor",     type: "string", default: "muted",      allowedValues: COLOR_VALUES,                                    description: "Subheading text color token" },
  { name: "subheadingSize",      type: "string", default: "lg",         allowedValues: '"sm" | "base" | "lg" | "xl"',                  description: "Subheading font size" },
  { name: "subheadingWeight",    type: "string", default: "normal",     allowedValues: '"normal" | "medium" | "semibold" | "bold"',    description: "Subheading font weight" },
  { name: "cardBg",              type: "string", default: "white",      allowedValues: COLOR_VALUES,                                    description: "Card background color token (NewsletterSignup only)" },
  { name: "cardBorder",          type: "string", default: "sm",         allowedValues: '"none" | "sm" | "md" | "lg"',                  description: "Card border thickness (NewsletterSignup only)" },
  { name: "cardBorderColor",     type: "string", default: "subtle",     allowedValues: COLOR_VALUES,                                    description: "Card border color token (NewsletterSignup only)" },
  { name: "cardRadius",          type: "string", default: "2xl",        allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"', description: "Card border radius (NewsletterSignup only)" },
  { name: "cardShadow",          type: "string", default: "sm",         allowedValues: '"none" | "sm" | "md" | "lg" | "xl"',           description: "Card drop shadow (NewsletterSignup only)" },
  { name: "primaryButtonColor",  type: "string", default: "primary",    allowedValues: COLOR_VALUES,                                    description: "Primary CTA button background color token" },
  { name: "secondaryButtonColor",type: "string", default: "surface",    allowedValues: COLOR_VALUES,                                    description: "Secondary CTA button border/text color token (FullWidthCentered only)" },
  { name: "imagePosition",       type: "string", default: "right",      allowedValues: '"left" | "right"',                             description: "Image side (SplitWithImage only)" },
  { name: "imageRadius",         type: "string", default: "2xl",        allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"', description: "Image frame border radius (SplitWithImage only)" },
];

// ─── Helper ───────────────────────────────────────────────────────────────────
// Filters the schema to only the keys a component actually uses, AND replaces
// each entry's default value with the component's own defaultStyles value so
// the "Supported props" table shows the correct per-component default — not
// the global PROMO_STYLE_DEFAULTS fallback.
//
// Usage:  pickStyleSchema(STYLE_KEYS, defaultStyles)

export function pickStyleSchema(keys, defaultOverrides = {}) {
  return PROMO_STYLE_PROP_SCHEMA
    .filter((entry) => keys.includes(entry.name))
    .map((entry) =>
      entry.name in defaultOverrides
        ? { ...entry, default: defaultOverrides[entry.name] }
        : entry
    );
}

// ─── Maps — resolved to REAL Tailwind classes ─────────────────────────────────
// primary = #e50913 (UpGrad red)

const COLOR_MAP = {
  primary: { text: "text-[#e50913]", bg: "bg-[#e50913]", border: "border-[#e50913]", hoverBg: "hover:bg-[#c40810]" },
  surface: { text: "text-gray-900",  bg: "bg-white",     border: "border-gray-900",  hoverBg: "hover:bg-gray-50"  },
  muted:   { text: "text-gray-500",  bg: "bg-gray-50",   border: "border-gray-200",  hoverBg: "hover:bg-gray-100" },
  subtle:  { text: "text-gray-400",  bg: "bg-gray-100",  border: "border-gray-100",  hoverBg: "hover:bg-gray-100" },
  white:   { text: "text-white",     bg: "bg-white",     border: "border-white",     hoverBg: "hover:bg-white/90" },
};

const HEADING_SIZE_MAP = { "2xl": "text-2xl", "3xl": "text-3xl sm:text-4xl", "4xl": "text-4xl sm:text-5xl", "5xl": "text-5xl sm:text-6xl" };
const BODY_SIZE_MAP    = { xs: "text-xs", sm: "text-sm", base: "text-base", lg: "text-lg", xl: "text-xl" };
const WEIGHT_MAP       = { normal: "font-normal", medium: "font-medium", semibold: "font-semibold", bold: "font-bold", extrabold: "font-extrabold" };
const BORDER_MAP       = { none: "border-0", sm: "border", md: "border-2", lg: "border-4" };
const RADIUS_MAP       = { none: "rounded-none", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", xl: "rounded-xl", "2xl": "rounded-2xl", full: "rounded-full" };
const SHADOW_MAP       = { none: "shadow-none", sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg", xl: "shadow-xl" };
const PADDING_MAP      = { 4: "4", 6: "6", 8: "8", 10: "10", 12: "12", 16: "16", 20: "20" };

function c(token, type) {
  return COLOR_MAP[token]?.[type] ?? COLOR_MAP.surface[type];
}

// ─── Resolver ─────────────────────────────────────────────────────────────────

export function resolvePromoStyles(styles = {}) {
  const s = { ...PROMO_STYLE_DEFAULTS, ...styles };

  const py = PADDING_MAP[s.paddingY] ?? PADDING_MAP[12];
  const px = PADDING_MAP[s.paddingX] ?? PADDING_MAP[6];
  const sectionClass = `${c(s.background, "bg")} ${c(s.background, "text")} py-${py} px-${px}`;

  const headingClass = [
    HEADING_SIZE_MAP[s.headingSize] ?? HEADING_SIZE_MAP["3xl"],
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

  const cardClass = [
    c(s.cardBg, "bg"),
    BORDER_MAP[s.cardBorder] ?? BORDER_MAP.sm,
    c(s.cardBorderColor, "border"),
    RADIUS_MAP[s.cardRadius] ?? RADIUS_MAP["2xl"],
    SHADOW_MAP[s.cardShadow] ?? SHADOW_MAP.sm,
  ].join(" ");

  const primaryBtnClass = [
    "px-6 py-3 text-sm font-semibold shadow-sm transition-all rounded-xl",
    c(s.primaryButtonColor, "bg"),
    COLOR_MAP[s.primaryButtonColor]?.hoverBg ?? COLOR_MAP.primary.hoverBg,
    "text-white",
  ].join(" ");

  const secondaryBtnClass = [
    "px-6 py-3 text-sm font-semibold transition-all rounded-xl border",
    c(s.secondaryButtonColor, "border"),
    c(s.secondaryButtonColor, "text"),
    COLOR_MAP[s.secondaryButtonColor]?.hoverBg ?? COLOR_MAP.surface.hoverBg,
  ].join(" ");

  const imageWrapClass = [
    "overflow-hidden border",
    c("subtle", "border"),
    RADIUS_MAP[s.imageRadius] ?? RADIUS_MAP["2xl"],
    SHADOW_MAP.sm,
  ].join(" ");

  const inputClass = [
    "min-w-0 flex-1 rounded-xl border px-3.5 py-2 text-sm shadow-sm",
    c("subtle", "border"),
    "placeholder:text-gray-400 bg-gray-50",
  ].join(" ");

  return {
    sectionClass,
    headingClass,
    subheadingClass,
    cardClass,
    primaryBtnClass,
    secondaryBtnClass,
    imageWrapClass,
    inputClass,
    imagePosition: s.imagePosition ?? "right",
  };
}