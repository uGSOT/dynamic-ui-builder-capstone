const BACKGROUND = {
  surface: "bg-surface",
  muted: "bg-surface-muted",
  navy: "bg-navy",
  transparent: "bg-transparent",
};

const HEIGHT = {
  sm: "h-12",
  md: "h-14",
  lg: "h-16",
};

const BLUR = {
  none: "",
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
};

export function resolveNavbarStyles(styles = {}, { scrolled = false } = {}) {
  const isTransparent = styles.background === "transparent" && !scrolled;
  const backgroundKey = isTransparent
    ? "transparent"
    : scrolled && styles.background === "transparent"
      ? "surface"
      : (styles.background ?? "surface");

  const background = BACKGROUND[backgroundKey] ?? BACKGROUND.surface;
  const height = HEIGHT[styles.height] ?? HEIGHT.md;
  const blur =
    scrolled || styles.background !== "transparent"
      ? (BLUR[styles.blur] ?? "")
      : "";

  const inverted =
    isTransparent || (backgroundKey === "navy" && !isTransparent);

  const borderClass =
    isTransparent ? "" : "border-b border-border";

  const scrolledSurface =
    scrolled && styles.background === "transparent"
      ? "bg-surface/90 shadow-sm"
      : "";

  return {
    className: `${height} ${scrolledSurface || background} ${blur} ${borderClass}`.trim(),
    inverted: isTransparent || backgroundKey === "navy",
    isTransparent,
  };
}

export const NAVBAR_STYLE_DEFAULTS = {
  background: "surface",
  height: "md",
  blur: "none",
};

export const NAVBAR_TRANSPARENT_STYLE_DEFAULTS = {
  background: "transparent",
  height: "md",
  blur: "md",
};

export const NAVBAR_STYLE_PROP_SCHEMA = [
  {
    name: "background",
    type: "string",
    default: "surface",
    allowedValues: "surface | muted | navy | transparent",
    description: "Navbar background design token",
  },
  {
    name: "height",
    type: "string",
    default: "md",
    allowedValues: "sm | md | lg",
    description: "Navbar height scale",
  },
  {
    name: "blur",
    type: "string",
    default: "none",
    allowedValues: "none | sm | md | lg",
    description: "Backdrop blur when solid or scrolled (transparent variant)",
  },
];
