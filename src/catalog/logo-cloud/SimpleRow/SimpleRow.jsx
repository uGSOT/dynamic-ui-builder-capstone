export default function SimpleRow({
  styles = {},
  logos = defaultProps.logos,
  grayscale = defaultProps.grayscale,
  logoFilter = defaultProps.logoFilter,
}) {

  const backgroundClass = {
    surface: "bg-surface",
    muted: "bg-surface-muted",
    navy: "bg-navy",
  }[styles.background] ?? "bg-surface";

  const paddingClass = {
    4: "py-4",
    6: "py-6",
    8: "py-8",
    10: "py-10",
    12: "py-12",
    16: "py-16",
  }[styles.paddingY] ?? "py-10";

  // grayscale takes priority over logoFilter
  const computedFilter = grayscale
    ? "grayscale(100%)"
    : logoFilter || "none";

  const logoOpacity = grayscale ? 0.5 : 1;

  return (
    <section className={`w-full border-y border-border ${backgroundClass} ${paddingClass}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.image}
              alt={logo.alt}
              className="h-6 md:h-8 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
              style={{
                filter: computedFilter,
                opacity: logoOpacity,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const defaultProps = {
  logos: [
    { image: "/assets/logos/stripe.svg", alt: "Stripe" },
    { image: "/assets/logos/vercel.svg", alt: "Vercel" },
    { image: "/assets/logos/linear.svg", alt: "Linear" },
    { image: "/assets/logos/loom.svg", alt: "Loom" },
    { image: "/assets/logos/figma.svg", alt: "Figma" },
  ],
  grayscale: true,
  logoFilter: null,
};

export const defaultStyles = {
  paddingY: 10,
  background: "surface",
};

export const propSchema = {
  props: [
    {
      name: "logos",
      type: "Array<{ image: string, alt: string }>",
      default: "[5 logos]",
      allowedValues: "Array of image/alt objects",
    },
    {
      name: "grayscale",
      type: "boolean",
      default: "true",
      allowedValues: "true | false",
    },
    {
      name: "logoFilter",
      type: "string",
      default: "null",
      allowedValues: "brightness(0) | invert(1) | opacity(0.3) | none",
    },
  ],
  styles: [
    {
      name: "paddingY",
      type: "number",
      default: "10",
      allowedValues: "4 | 6 | 8 | 10 | 12",
    },
    {
      name: "background",
      type: "string",
      default: "surface",
      allowedValues: "surface | muted | navy",
    },
  ],
};