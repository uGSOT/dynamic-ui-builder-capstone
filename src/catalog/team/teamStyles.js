import { resolveColorBg, resolveColorText, resolveStyleTokens } from "../styleTokens";

const BODY_SIZE = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const FONT_WEIGHT = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

function pick(map, key, fallbackKey) {
  return map[key] ?? map[fallbackKey];
}

const TEAM_BACKGROUND = {
  primary: "bg-brand",
  surface: "bg-surface",
  muted: "bg-surface-muted",
  subtle: "bg-surface-subtle",
  white: "bg-white",
  navy: "bg-navy",
};

const TEAM_CARD_BG = {
  none: "",
  primary: "bg-brand/5",
  surface: "bg-surface",
  muted: "bg-surface-muted",
  subtle: "bg-surface-subtle",
  white: "bg-white",
  navy: "bg-navy/10",
};

const TEAM_CARD_BORDER = {
  none: "",
  light: "border border-border/30",
  default: "border border-border",
  bold: "border-2 border-border",
  sm: "border border-border/30",
  md: "border border-border",
  lg: "border-2 border-border",
};

const TEAM_CARD_RADIUS = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

const LEGACY_FONT_COLOR_SCHEME = {
  default: {
    headingColor: "surface",
    subheadingColor: "muted",
    titleColor: "surface",
    accentColor: "primary",
    descColor: "muted",
  },
  ink: {
    headingColor: "surface",
    subheadingColor: "muted",
    titleColor: "surface",
    accentColor: "primary",
    descColor: "muted",
  },
  inverse: {
    headingColor: "white",
    subheadingColor: "muted",
    titleColor: "white",
    accentColor: "white",
    descColor: "muted",
  },
  brand: {
    headingColor: "primary",
    subheadingColor: "primary",
    titleColor: "primary",
    accentColor: "primary",
    descColor: "primary",
  },
};

const LEGACY_KEY_MAP = {
  "padding-y": "paddingY",
  "font-color": "fontColor",
  "font-boldness": "fontBoldness",
  "card-color": "cardBg",
  "card-border": "cardBorder",
};

const LEGACY_FONT_WEIGHT = {
  normal: "normal",
  medium: "medium",
  bold: "semibold",
  "extra-bold": "extrabold",
};

const LEGACY_CARD_BG = {
  none: "none",
  surface: "surface",
  muted: "muted",
  navy: "navy",
  brand: "primary",
};

const LEGACY_BACKGROUND = {
  surface: "surface",
  muted: "muted",
  navy: "navy",
};

function normalizeLegacyStyles(styles = {}) {
  const normalized = {};

  for (const [key, value] of Object.entries(styles)) {
    const mappedKey = LEGACY_KEY_MAP[key] ?? key;

    switch (mappedKey) {
      case "fontColor": {
        const scheme = LEGACY_FONT_COLOR_SCHEME[value] ?? LEGACY_FONT_COLOR_SCHEME.default;
        Object.assign(normalized, scheme);
        break;
      }
      case "fontBoldness":
        normalized.titleWeight = LEGACY_FONT_WEIGHT[value] ?? value;
        break;
      case "cardBg":
        normalized.cardBg = LEGACY_CARD_BG[value] ?? value;
        break;
      case "background":
        normalized.background = LEGACY_BACKGROUND[value] ?? value;
        break;
      default:
        normalized[mappedKey] = value;
    }
  }

  return normalized;
}

export const TEAM_STYLE_DEFAULTS = {
  paddingY: 8,
  background: "surface",
  headingColor: "surface",
  headingSize: "3xl",
  headingWeight: "bold",
  headingAlign: "center",
  subheadingColor: "muted",
  subheadingSize: "lg",
  subheadingWeight: "normal",
  titleColor: "surface",
  titleSize: "base",
  titleWeight: "semibold",
  accentColor: "primary",
  descColor: "muted",
  descSize: "sm",
  descWeight: "normal",
  cardBg: "muted",
  cardBorder: "light",
  cardRadius: "lg",
};

const SHARED_STYLE_PROPS = [
  {
    name: "paddingY",
    type: "number",
    default: TEAM_STYLE_DEFAULTS.paddingY,
    allowedValues: "4 | 6 | 8 | 10 | 12",
    description: "Vertical section padding scale",
  },
  {
    name: "background",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.background,
    allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white" | "navy"',
    description: "Section background color",
  },
  {
    name: "headingColor",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.headingColor,
    allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"',
    description: "Section heading color",
  },
  {
    name: "headingSize",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.headingSize,
    allowedValues: '"2xl" | "3xl" | "4xl" | "5xl" | "6xl"',
    description: "Section heading font size",
  },
  {
    name: "headingWeight",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.headingWeight,
    allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"',
    description: "Section heading font weight",
  },
  {
    name: "headingAlign",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.headingAlign,
    allowedValues: '"left" | "center" | "right"',
    description: "Section heading alignment",
  },
  {
    name: "subheadingColor",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.subheadingColor,
    allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"',
    description: "Section subheading color",
  },
  {
    name: "subheadingSize",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.subheadingSize,
    allowedValues: '"sm" | "base" | "lg" | "xl"',
    description: "Section subheading font size",
  },
  {
    name: "titleColor",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.titleColor,
    allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"',
    description: "Team member name color",
  },
  {
    name: "titleWeight",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.titleWeight,
    allowedValues: '"normal" | "medium" | "semibold" | "bold" | "extrabold"',
    description: "Team member name font weight",
  },
  {
    name: "accentColor",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.accentColor,
    allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"',
    description: "Team member role color",
  },
];

const CARD_STYLE_PROPS = [
  {
    name: "cardBg",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.cardBg,
    allowedValues: '"none" | "primary" | "surface" | "muted" | "subtle" | "white" | "navy"',
    description: "Member card background color",
  },
  {
    name: "cardBorder",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.cardBorder,
    allowedValues: '"none" | "light" | "default" | "bold"',
    description: "Member card border style",
  },
  {
    name: "cardRadius",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.cardRadius,
    allowedValues: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"',
    description: "Member card border radius",
  },
];

const BIO_STYLE_PROPS = [
  {
    name: "descColor",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.descColor,
    allowedValues: '"primary" | "surface" | "muted" | "subtle" | "white"',
    description: "Team member bio text color",
  },
  {
    name: "descSize",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.descSize,
    allowedValues: '"xs" | "sm" | "base"',
    description: "Team member bio font size",
  },
];

export const TEAM_GRID_STYLE_PROP_SCHEMA = [
  ...SHARED_STYLE_PROPS,
  ...CARD_STYLE_PROPS,
];

export const TEAM_BIO_STYLE_PROP_SCHEMA = [
  ...SHARED_STYLE_PROPS,
  ...CARD_STYLE_PROPS,
  ...BIO_STYLE_PROPS,
];

export const TEAM_COMPACT_STYLE_PROP_SCHEMA = [...SHARED_STYLE_PROPS];

/** @deprecated Use variant-specific schema exports instead */
export const TEAM_STYLE_PROP_SCHEMA = TEAM_GRID_STYLE_PROP_SCHEMA;

export function resolveTeamStyles(styles = {}) {
  const merged = { ...TEAM_STYLE_DEFAULTS, ...normalizeLegacyStyles(styles) };
  const tokens = resolveStyleTokens(merged);
  const inverted = merged.background === "navy";

  const sectionBg = TEAM_BACKGROUND[merged.background] ?? TEAM_BACKGROUND.surface;
  const sectionClass = `${tokens.sectionClass.split(" ").find((c) => c.startsWith("py-")) ?? "py-16"} ${sectionBg}`;

  const subheadingColorClass = inverted
    ? "text-ink-inverse-muted"
    : resolveColorText(merged.subheadingColor, "muted");

  const subheadingClass = [
    "mt-4",
    pick(BODY_SIZE, merged.subheadingSize, "lg"),
    pick(FONT_WEIGHT, merged.subheadingWeight, "normal"),
    subheadingColorClass,
  ].join(" ");

  const cardBgKey = merged.cardBg === "none" ? "none" : merged.cardBg;
  const cardColorClass = TEAM_CARD_BG[cardBgKey] ?? TEAM_CARD_BG.muted;
  const cardBorderClass = TEAM_CARD_BORDER[merged.cardBorder] ?? TEAM_CARD_BORDER.light;

  return {
    sectionClass,
    inverted,
    headingClass: tokens.headingClass,
    subheadingClass,
    nameClass: tokens.titleClass,
    roleClass: tokens.accentTextClass,
    bioClass: tokens.descClass,
    cardClass: [cardColorClass, cardBorderClass, TEAM_CARD_RADIUS[merged.cardRadius] ?? TEAM_CARD_RADIUS.lg].filter(Boolean).join(" "),
    cardColorClass,
    cardBorderClass,
  };
}
