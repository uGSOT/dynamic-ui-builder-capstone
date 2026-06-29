export const FEATURE_STYLE_DEFAULTS = {
  paddingY: 6,

  background: "surface",

  headingAlign: "left",
  headingSize: "4xl",
  headingColor: "",

  subheadingSize: "lg",
  subheadingColor: "",

  cardBg: "default",
  customCardBgColor: "",
  cardBorder: true,
  cardShadow: "sm",

  titleSize: "base",
  titleColor: "",
  descSize: "sm",
  descColor: "",

  accentColor: "indigo",
};

export const FEATURE_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: 6,
    allowedValues: "1 – 12",
    description: "Vertical padding of the section (maps to Tailwind py-*)",
  },
  {
    name: "background",
    type: "string",
    default: "surface",
    allowedValues: '"surface" | "muted" | "navy" | "transparent" | "blur"',
    description: "Section background using design tokens",
  },
  {
    name: "headingAlign",
    type: "string",
    default: "left",
    allowedValues: '"left" | "center"',
    description: "Alignment of the section heading and subheading",
  },
  {
    name: "headingSize",
    type: "string",
    default: "4xl",
    allowedValues: '"3xl" | "4xl" | "5xl"',
    description: "Heading font size",
  },
  {
    name: "headingColor",
    type: "string",
    default: "",
    allowedValues: 'Any CSS color e.g. "#ffffff", or "" for auto',
    description: "Heading text color override. Leave empty to use theme default.",
  },
  {
    name: "subheadingSize",
    type: "string",
    default: "lg",
    allowedValues: '"base" | "lg" | "xl"',
    description: "Subheading font size",
  },
  {
    name: "subheadingColor",
    type: "string",
    default: "",
    allowedValues: 'Any CSS color e.g. "#9693b0", or "" for auto',
    description: "Subheading text color override. Leave empty to use theme default.",
  },
  {
    name: "cardBg",
    type: "string",
    default: "default",
    allowedValues: '"default" | "transparent" | "custom"',
    description: "Card background preset",
  },
  {
    name: "customCardBgColor",
    type: "string",
    default: "",
    allowedValues: 'Any CSS color e.g. "#18181c"',
    description: "Custom card background color — only used when cardBg is custom",
  },
  {
    name: "cardBorder",
    type: "boolean",
    default: true,
    allowedValues: "true | false",
    description: "Show or hide card border",
  },
  {
    name: "cardShadow",
    type: "string",
    default: "sm",
    allowedValues: '"none" | "sm" | "md" | "lg"',
    description: "Card drop shadow size",
  },
  {
    name: "titleSize",
    type: "string",
    default: "base",
    allowedValues: '"sm" | "base" | "lg"',
    description: "Feature title font size inside each card",
  },
  {
    name: "titleColor",
    type: "string",
    default: "",
    allowedValues: 'Any CSS color e.g. "#f0eff8", or "" for auto',
    description: "Feature title color override. Leave empty to use theme default.",
  },
  {
    name: "descSize",
    type: "string",
    default: "sm",
    allowedValues: '"xs" | "sm" | "base"',
    description: "Feature description font size inside each card",
  },
  {
    name: "descColor",
    type: "string",
    default: "",
    allowedValues: 'Any CSS color e.g. "#9693b0", or "" for auto',
    description: "Feature description color override. Leave empty to use theme default.",
  },
  {
    name: "accentColor",
    type: "string",
    default: "indigo",
    allowedValues: '"indigo" | "violet" | "emerald" | "rose" | "blue" | "brand"',
    description: "Accent colour used for icons, tags, and highlights",
  },
];

const BG_MAP = {
  surface: "bg-surface",
  muted: "bg-surface-secondary",
  navy: "bg-surface-tertiary",
  transparent: "bg-transparent",
  blur: "bg-surface/80 backdrop-blur-md",
};

const SHADOW_MAP = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

const HEADING_SIZE_MAP = {
  "3xl": "text-3xl sm:text-4xl",
  "4xl": "text-4xl sm:text-5xl",
  "5xl": "text-5xl sm:text-6xl",
};

const SUBHEADING_SIZE_MAP = {
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const TITLE_SIZE_MAP = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

const DESC_SIZE_MAP = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
};

const ACCENT_MAP = {
  indigo: {
    iconBg: "bg-indigo-50",
    iconText: "text-indigo-600",
    tagText: "text-indigo-600",
    tagBg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  violet: {
    iconBg: "bg-violet-50",
    iconText: "text-violet-600",
    tagText: "text-violet-600",
    tagBg: "bg-violet-50",
    border: "border-violet-100",
  },
  emerald: {
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
    tagText: "text-emerald-600",
    tagBg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  rose: {
    iconBg: "bg-rose-50",
    iconText: "text-rose-600",
    tagText: "text-rose-600",
    tagBg: "bg-rose-50",
    border: "border-rose-100",
  },
  brand: {
    iconBg: "bg-brand-muted",
    iconText: "text-primary",
    tagText: "text-primary",
    tagBg: "bg-brand-muted",
    border: "border-primary/20",
  },
  blue: {
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    tagText: "text-blue-600",
    tagBg: "bg-blue-50",
    border: "border-blue-100",
  },
};

const PADDING_Y = {
  4: "py-8 sm:py-10",
  6: "py-10 sm:py-12",
  8: "py-12 sm:py-16",
  10: "py-16 sm:py-20",
  12: "py-20 sm:py-24",
};

export function resolveFeatureStyles(styles = {}) {
  const s = { ...FEATURE_STYLE_DEFAULTS, ...styles };

  const inverted = s.background === "navy";

  const sectionBgClass = BG_MAP[s.background] ?? BG_MAP.surface;
  const sectionClass = `${sectionBgClass} ${PADDING_Y[s.paddingY] ?? PADDING_Y[6]}`;

  const headingAutoColor = inverted ? "text-text-primary" : "text-gray-900";
  const headingColorClass = s.headingColor ? "" : headingAutoColor;
  const headingColorStyle = s.headingColor ? { color: s.headingColor } : {};
  const headingClass = `font-bold tracking-tight ${HEADING_SIZE_MAP[s.headingSize] ?? HEADING_SIZE_MAP["4xl"]} ${headingColorClass}`;

  const subheadingAutoColor = inverted ? "text-text-secondary" : "text-gray-500";
  const subheadingColorClass = s.subheadingColor ? "" : subheadingAutoColor;
  const subheadingColorStyle = s.subheadingColor ? { color: s.subheadingColor } : {};
  const subheadingClass = `leading-relaxed ${SUBHEADING_SIZE_MAP[s.subheadingSize] ?? SUBHEADING_SIZE_MAP.lg} ${subheadingColorClass}`;

  const cardBgClass =
    s.cardBg === "custom" && s.customCardBgColor
      ? ""
      : s.cardBg === "transparent"
      ? "bg-transparent"
      : inverted
      ? "bg-surface-secondary"
      : "bg-white";

  const cardBgStyle =
    s.cardBg === "custom" && s.customCardBgColor
      ? { backgroundColor: s.customCardBgColor }
      : {};

  const cardBorderClass = s.cardBorder
    ? inverted
      ? "border border-surface-border"
      : "border border-gray-100"
    : "";

  const cardShadowClass = SHADOW_MAP[s.cardShadow] ?? SHADOW_MAP.sm;
  const cardClass = `${cardBgClass} ${cardBorderClass} ${cardShadowClass}`.trim();

  const titleColorClass = s.titleColor ? "" : "text-gray-900";
  const titleColorStyle = s.titleColor ? { color: s.titleColor } : {};
  const titleClass = `font-semibold ${TITLE_SIZE_MAP[s.titleSize] ?? TITLE_SIZE_MAP.base} ${titleColorClass}`;

  const descAutoColor = inverted ? "text-text-secondary" : "text-gray-500";
  const descColorClass = s.descColor ? "" : descAutoColor;
  const descColorStyle = s.descColor ? { color: s.descColor } : {};
  const descClass = `leading-relaxed ${DESC_SIZE_MAP[s.descSize] ?? DESC_SIZE_MAP.sm} ${descColorClass}`;

  return {
    sectionClass,

    inverted,
    headingAlign: s.headingAlign ?? "left",
    headingClass,
    headingStyle: headingColorStyle,

    subheadingClass,
    subheadingStyle: subheadingColorStyle,

    cardClass,
    cardStyle: cardBgStyle,

    titleClass,
    titleStyle: titleColorStyle,
    descClass,
    descStyle: descColorStyle,

    accent: ACCENT_MAP[s.accentColor] ?? ACCENT_MAP.indigo,
  };
}