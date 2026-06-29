const PADDING_Y = {
  4: "py-8",
  6: "py-12",
  8: "py-16",
  10: "py-20",
};

const BACKGROUND = {
  surface: "bg-surface",
  muted: "bg-muted",
  navy: "bg-secondary",
};

const FONT_COLORS = {
  default: {
    heading: "text-text",
    subheading: "text-ink-muted",
    name: "text-text",
    role: "text-primary",
    bio: "text-ink-muted",
  },
  ink: {
    heading: "text-text",
    subheading: "text-ink-muted",
    name: "text-text",
    role: "text-primary",
    bio: "text-ink-muted",
  },
  inverse: {
    heading: "text-ink-inverse",
    subheading: "text-ink-inverse-muted",
    name: "text-ink-inverse",
    role: "text-white",
    bio: "text-ink-inverse-muted",
  },
  brand: {
    heading: "text-primary",
    subheading: "text-primary/80",
    name: "text-primary",
    role: "text-primary/60",
    bio: "text-primary/70",
  },
};

const FONT_WEIGHTS = {
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-semibold",
  "extra-bold": "font-extrabold",
};

const CARD_COLORS = {
  none: "",
  surface: "bg-surface",
  muted: "bg-muted",
  navy: "bg-secondary/10",
  brand: "bg-primary/5",
};

const CARD_BORDERS = {
  none: "",
  light: "border border-border/30",
  default: "border border-border",
  bold: "border-2 border-border",
};

const STYLE_KEY_MAP = {
  "padding-y": "paddingY",
  "font-color": "fontColor",
  "font-boldness": "fontBoldness",
  "card-color": "cardColor",
  "card-border": "cardBorder",
};

function normalizeStyles(styles = {}) {
  return Object.entries(styles).reduce((normalized, [key, value]) => {
    const mappedKey = STYLE_KEY_MAP[key] ?? key;
    normalized[mappedKey] = value;
    return normalized;
  }, {});
}

export function resolveTeamStyles(styles = {}) {
  const normalizedStyles = normalizeStyles(styles);
  const padding = PADDING_Y[normalizedStyles.paddingY] ?? PADDING_Y[8];
  const background = BACKGROUND[normalizedStyles.background] ?? BACKGROUND.surface;
  const inverted = normalizedStyles.background === "navy";
  const fontColor = FONT_COLORS[normalizedStyles.fontColor] ?? FONT_COLORS.default;
  const fontWeight = FONT_WEIGHTS[normalizedStyles.fontBoldness] ?? FONT_WEIGHTS.bold;
  const cardColorClass = CARD_COLORS[normalizedStyles.cardColor] ?? CARD_COLORS.none;
  const cardBorderClass = CARD_BORDERS[normalizedStyles.cardBorder] ?? CARD_BORDERS.default;

  return {
    className: `${padding} ${background}`.trim(),
    inverted,
    headingClass: fontColor.heading,
    subheadingClass: inverted ? "text-ink-inverse-muted" : fontColor.subheading,
    nameClass: `${fontWeight} ${fontColor.name}`,
    roleClass: fontColor.role,
    bioClass: fontColor.bio,
    cardColorClass,
    cardBorderClass,
  };
}

export const TEAM_STYLE_DEFAULTS = {
  paddingY: 8,
  background: "surface",
  fontColor: "default",
  fontBoldness: "bold",
  cardColor: "muted",
  cardBorder: "light",
};

export const TEAM_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: TEAM_STYLE_DEFAULTS.paddingY,
    allowedValues: "4 | 6 | 8 | 10",
    description: "Vertical section padding scale",
  },
  {
    name: "background",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.background,
    allowedValues: "surface | muted | navy",
    description: "Section background design token",
  },
  {
    name: "fontColor",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.fontColor,
    allowedValues: "default | ink | inverse | brand",
    description: "Text color scheme for headings, names, and roles",
  },
  {
    name: "fontBoldness",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.fontBoldness,
    allowedValues: "normal | medium | bold | extra-bold",
    description: "Font weight for team member names",
  },
  {
    name: "cardColor",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.cardColor,
    allowedValues: "none | surface | muted | navy | brand",
    description: "Card background color",
  },
  {
    name: "cardBorder",
    type: "string",
    default: TEAM_STYLE_DEFAULTS.cardBorder,
    allowedValues: "none | light | default | bold",
    description: "Card border style and weight",
  },
];
