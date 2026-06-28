const PADDING_Y = {
  4: "py-8 sm:py-12",
  6: "py-12 sm:py-16",
  8: "py-16 sm:py-20",
  10: "py-20 sm:py-24",
};

const PADDING_BOTTOM = {
  4: "pb-8 sm:pb-12",
  6: "pb-12 sm:pb-16",
  8: "pb-16 sm:pb-20",
  10: "pb-20 sm:pb-24",
};

const NAVBAR_OFFSET = {
  compact: "pt-14",
  default: "pt-16 sm:pt-20",
  relaxed: "pt-20 sm:pt-24",
};

const BACKGROUND = {
  surface: "bg-surface",
  muted: "bg-surface-muted",
  navy: "bg-navy",
};

export function resolveHeroStyles(styles = {}) {
  const paddingY = styles.paddingY ?? 10;
  const background = BACKGROUND[styles.background] ?? "bg-surface";
  const inverted = styles.background === "navy";
  const navbarOffset = NAVBAR_OFFSET[styles.navbarOffset];

  const padding = navbarOffset
    ? `${navbarOffset} ${PADDING_BOTTOM[paddingY] ?? PADDING_BOTTOM[10]}`
    : PADDING_Y[paddingY] ?? PADDING_Y[10];

  return {
    className: `${padding} ${background}`.trim(),
    inverted,
  };
}

export const HERO_STYLE_DEFAULTS = {
  paddingY: 10,
  background: "surface",
};

export const HERO_STYLE_PROP_SCHEMA = [
  {
    name: "paddingY",
    type: "number",
    default: 10,
    allowedValues: "4 | 6 | 8 | 10",
    description: "Vertical section padding scale",
  },
  {
    name: "background",
    type: "string",
    default: "surface",
    allowedValues: "surface | muted | navy",
    description: "Section background design token",
  },
  {
    name: "navbarOffset",
    type: "string",
    default: "none",
    allowedValues: "compact | default | relaxed",
    description:
      "Extra top padding when hero sits below a transparent overlay navbar",
  },
];
