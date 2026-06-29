const CTA_STYLES = {
  brand: "bg-primary text-ink-inverse hover:bg-primary-dark",
  outline:
    "border border-border bg-transparent text-text hover:bg-muted",
  ghost: "bg-transparent text-ink-muted hover:bg-muted hover:text-text",
};

const CTA_STYLES_INVERSE = {
  brand: "bg-surface text-text hover:bg-muted",
  outline:
    "border border-border-dark bg-transparent text-ink-inverse hover:bg-white/10",
  ghost:
    "bg-transparent text-ink-inverse-muted hover:bg-white/10 hover:text-ink-inverse",
};

export default function NavbarCta({
  ctaButton,
  className = "",
  onClick,
  inverted = false,
  ctaStyle = "brand",
  linkSize,
}) {
  if (!ctaButton?.label) return null;

  const sizeClass = linkSize?.text ?? "text-sm";
  const palette = inverted ? CTA_STYLES_INVERSE : CTA_STYLES;
  const variantClass = palette[ctaStyle] ?? palette.brand;

  return (
    <a
      href={ctaButton.href ?? "#"}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold transition-colors ${sizeClass} ${variantClass} ${className}`}
    >
      {ctaButton.label}
    </a>
  );
}
