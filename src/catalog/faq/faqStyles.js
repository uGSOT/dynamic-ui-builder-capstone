// ─── Defaults ─────────────────────────────────────────────────────────────────

export const FAQ_STYLE_DEFAULTS = {
  // Layout
  paddingY:          8,

  // Background
  background:        "white",

  // Heading
  headingColor:      "surface",
  headingSize:       "3xl",
  headingWeight:     "bold",
  headingAlign:      "center",

  // Subheading
  subheadingColor:   "muted",
  subheadingSize:    "base",
  subheadingWeight:  "normal",

  // Accordion item
  questionColor:     "surface",
  questionSize:      "base",
  questionWeight:    "semibold",
  answerColor:       "muted",
  answerSize:        "sm",
  borderColor:       "subtle",

  // Category heading (GroupedByCategory only)
  categoryColor:     "surface",
  categoryBorder:    "subtle",

  // Accent
  accentColor:       "primary",
};

// ─── Schema ───────────────────────────────────────────────────────────────────

const COLOR_VALUES = '"primary" | "surface" | "muted" | "subtle" | "white"';

export const FAQ_STYLE_PROP_SCHEMA = [
  { name: "paddingY",         type: "number",  default: 8,          allowedValues: "4 | 6 | 8 | 10 | 12",                                 description: "Vertical section padding" },
  { name: "background",       type: "string",  default: "white",    allowedValues: COLOR_VALUES,                                           description: "Section background color token" },
  { name: "headingColor",     type: "string",  default: "surface",  allowedValues: COLOR_VALUES,                                           description: "Heading text color token" },
  { name: "headingSize",      type: "string",  default: "3xl",      allowedValues: '"2xl" | "3xl" | "4xl" | "5xl"',                       description: "Heading font size" },
  { name: "headingWeight",    type: "string",  default: "bold",     allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"', description: "Heading font weight" },
  { name: "headingAlign",     type: "string",  default: "center",   allowedValues: '"left" | "center" | "right"',                         description: "Heading alignment" },
  { name: "subheadingColor",  type: "string",  default: "muted",    allowedValues: COLOR_VALUES,                                           description: "Subheading text color token" },
  { name: "subheadingSize",   type: "string",  default: "base",     allowedValues: '"sm" | "base" | "lg" | "xl"',                         description: "Subheading font size" },
  { name: "subheadingWeight", type: "string",  default: "normal",   allowedValues: '"normal" | "medium" | "semibold" | "bold"',           description: "Subheading font weight" },
  { name: "questionColor",    type: "string",  default: "surface",  allowedValues: COLOR_VALUES,                                           description: "Accordion question text color" },
  { name: "questionSize",     type: "string",  default: "base",     allowedValues: '"sm" | "base" | "lg"',                                description: "Accordion question font size" },
  { name: "questionWeight",   type: "string",  default: "semibold", allowedValues: '"normal" | "medium" | "semibold" | "bold"',           description: "Accordion question font weight" },
  { name: "answerColor",      type: "string",  default: "muted",    allowedValues: COLOR_VALUES,                                           description: "Accordion answer text color" },
  { name: "answerSize",       type: "string",  default: "sm",       allowedValues: '"xs" | "sm" | "base"',                                description: "Accordion answer font size" },
  { name: "borderColor",      type: "string",  default: "subtle",   allowedValues: COLOR_VALUES,                                           description: "Accordion item divider color" },
  { name: "categoryColor",    type: "string",  default: "surface",  allowedValues: COLOR_VALUES,                                           description: "Category heading color (GroupedByCategory only)" },
  { name: "categoryBorder",   type: "string",  default: "subtle",   allowedValues: COLOR_VALUES,                                           description: "Category heading border color (GroupedByCategory only)" },
  { name: "accentColor",      type: "string",  default: "primary",  allowedValues: COLOR_VALUES,                                           description: "Accent color for chevron icon" },
];

// ─── Maps ─────────────────────────────────────────────────────────────────────

// primary = #e50913 (UpGrad red)
const COLOR_MAP = {
  primary:      { text: "text-[#e50913]", bg: "bg-[#e50913]", border: "border-[#e50913]" },
  primaryMuted: { text: "text-[#e50913]", bg: "bg-[#fdecea]", border: "border-[#fca5a5]" },
  surface:      { text: "text-gray-900",  bg: "bg-white",     border: "border-gray-900"  },
  muted:        { text: "text-gray-500",  bg: "bg-gray-50",   border: "border-gray-200"  },
  subtle:       { text: "text-gray-400",  bg: "bg-gray-100",  border: "border-gray-100"  },
  white:        { text: "text-white",     bg: "bg-white",     border: "border-white"     },
};

const HEADING_SIZE_MAP = {
  "2xl": "text-2xl",
  "3xl": "text-3xl sm:text-4xl",
  "4xl": "text-4xl sm:text-5xl",
  "5xl": "text-5xl sm:text-6xl",
};

const BODY_SIZE_MAP = {
  xs: "text-xs", sm: "text-sm", base: "text-base", lg: "text-lg", xl: "text-xl",
};

const WEIGHT_MAP = {
  normal: "font-normal", medium: "font-medium", semibold: "font-semibold",
  bold: "font-bold", extrabold: "font-extrabold",
};

const PADDING_Y_MAP = {
  4: "py-8 sm:py-10", 6: "py-10 sm:py-12",
  8: "py-12 sm:py-16", 10: "py-16 sm:py-20", 12: "py-20 sm:py-24",
};

// ─── Helper ───────────────────────────────────────────────────────────────────

function c(token, type) {
  return COLOR_MAP[token]?.[type] ?? COLOR_MAP.surface[type];
}

// ─── Resolver ─────────────────────────────────────────────────────────────────

export function resolveFaqStyles(styles = {}) {
  const s = { ...FAQ_STYLE_DEFAULTS, ...styles };

  // Section
  const sectionClass = `${c(s.background, "bg")} ${PADDING_Y_MAP[s.paddingY] ?? PADDING_Y_MAP[8]}`;

  // Heading
  const headingClass = [
    HEADING_SIZE_MAP[s.headingSize]  ?? HEADING_SIZE_MAP["3xl"],
    WEIGHT_MAP[s.headingWeight]      ?? WEIGHT_MAP.bold,
    "tracking-tight",
    c(s.headingColor, "text"),
  ].join(" ");

  // Subheading
  const subheadingClass = [
    BODY_SIZE_MAP[s.subheadingSize]  ?? BODY_SIZE_MAP.base,
    WEIGHT_MAP[s.subheadingWeight]   ?? WEIGHT_MAP.normal,
    "leading-relaxed",
    c(s.subheadingColor, "text"),
  ].join(" ");

  // Accordion question
  const questionClass = [
    BODY_SIZE_MAP[s.questionSize]    ?? BODY_SIZE_MAP.base,
    WEIGHT_MAP[s.questionWeight]     ?? WEIGHT_MAP.semibold,
    c(s.questionColor, "text"),
  ].join(" ");

  // Accordion answer
  const answerClass = [
    BODY_SIZE_MAP[s.answerSize]      ?? BODY_SIZE_MAP.sm,
    "leading-relaxed",
    c(s.answerColor, "text"),
  ].join(" ");

  // Accordion border + chevron
  const borderClass    = c(s.borderColor, "border");
  const accentClass    = c(s.accentColor, "text");

  // Category heading (GroupedByCategory)
  const categoryClass  = [
    "text-sm font-bold uppercase tracking-widest",
    c(s.categoryColor, "text"),
  ].join(" ");
  const categoryBorderClass = c(s.categoryBorder, "border");

  // Heading align
  const headingAlign = s.headingAlign ?? "center";

  return {
    sectionClass,
    headingAlign,
    headingClass,
    subheadingClass,
    questionClass,
    answerClass,
    borderClass,
    accentClass,
    categoryClass,
    categoryBorderClass,
  };
}