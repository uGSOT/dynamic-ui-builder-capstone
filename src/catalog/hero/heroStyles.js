const PADDING_Y = {
  4: "py-8",
  6: "py-12",
  8: "py-16",
  10: "py-20",
};

const BACKGROUND = {
  surface: "bg-surface",
  muted: "bg-surface-muted",
  navy: "bg-navy",
  gradient: "bg-gradient-to-b from-brand-muted via-surface to-surface",
};

const MIN_HEIGHT = {
  auto: "",
  md: "min-h-[28rem]",
  lg: "min-h-[32rem]",
  screen: "min-h-[80vh]",
};

export function resolveHeroStyles(styles = {}) {
  const padding = PADDING_Y[styles.paddingY] ?? "py-16";
  const background = BACKGROUND[styles.background] ?? BACKGROUND.surface;
  const textAlign = styles.textAlign ?? "center";
  const minHeight = MIN_HEIGHT[styles.minHeight] ?? MIN_HEIGHT.lg;
  const inverted = styles.background === "navy";

  return {
    className: `${padding} ${background} ${minHeight}`.trim(),
    textAlign,
    inverted,
  };
}

export const HERO_STYLE_DEFAULTS = {
  paddingY: 8,
  background: "gradient",
  textAlign: "center",
  minHeight: "lg",
};

export const HERO_SPLIT_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: 8,
    allowedValues: "4 | 6 | 8 | 10",
    description: "Vertical section padding scale",
  },
  {
    name: "background",
    type: "string",
    default: "surface",
    allowedValues: "surface | muted | navy | gradient",
    description: "Section background design token",
  },
  {
    name: "textAlign",
    type: "string",
    default: "left",
    allowedValues: "left | center",
    description: "Headline and copy alignment",
  },
  {
    name: "minHeight",
    type: "string",
    default: "lg",
    allowedValues: "auto | md | lg | screen",
    description: "Minimum section height",
  },
];

export const HERO_SOCIAL_PROOF_STYLE_DEFAULTS = {
  paddingY: 8,
  background: "surface",
  textAlign: "center",
  minHeight: "lg",
};

export const HERO_SOCIAL_PROOF_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: 8,
    allowedValues: "4 | 6 | 8 | 10",
    description: "Vertical section padding scale",
  },
  {
    name: "background",
    type: "string",
    default: "surface",
    allowedValues: "surface | muted | navy | gradient",
    description: "Section background design token",
  },
  {
    name: "textAlign",
    type: "string",
    default: "center",
    allowedValues: "left | center",
    description: "Headline and copy alignment",
  },
  {
    name: "minHeight",
    type: "string",
    default: "lg",
    allowedValues: "auto | md | lg | screen",
    description: "Minimum section height",
  },
];

export const HERO_SPLIT_STYLE_DEFAULTS = {
  paddingY: 8,
  background: "surface",
  textAlign: "left",
  minHeight: "lg",
};

export const HERO_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: 8,
    allowedValues: "4 | 6 | 8 | 10",
    description: "Vertical section padding scale",
  },
  {
    name: "background",
    type: "string",
    default: "gradient",
    allowedValues: "surface | muted | navy | gradient",
    description: "Section background design token",
  },
  {
    name: "textAlign",
    type: "string",
    default: "center",
    allowedValues: "left | center",
    description: "Headline and copy alignment",
  },
  {
    name: "minHeight",
    type: "string",
    default: "lg",
    allowedValues: "auto | md | lg | screen",
    description: "Minimum section height",
  },
];
