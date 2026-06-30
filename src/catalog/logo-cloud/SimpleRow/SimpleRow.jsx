import { resolveStyles, LOGO_SIZE_MAP, PADDING_MAP, COLOR_MAP } from "../../../utils/resolveStyles";

export default function SimpleRow({
  styles = {},
  logos = defaultProps.logos,
  grayscale = defaultProps.grayscale,
}) {
  const s = resolveStyles(styles);

  // logo size from token
  const logoHeight = LOGO_SIZE_MAP[styles.logoSize ?? "md"];

  // logo opacity from token
  const opacityMap = {
    "50": 0.5, "60": 0.6, "75": 0.75, "100": 1,
  };
  const logoOpacity = grayscale
    ? opacityMap[styles.logoOpacity ?? "75"]
    : opacityMap[styles.logoOpacity ?? "100"];

  // logo filter
  const logoFilter = grayscale ? "grayscale(100%)" : "none";

  return (
    <section className={`w-full border-y border-gray-100 ${s.sectionClass}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.image}
              alt={logo.alt}
              className={`${logoHeight} w-auto object-contain transition-opacity duration-200 hover:opacity-80`}
              style={{
                filter: logoFilter,
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
};

export const defaultStyles = {
  paddingY: 6,
  background: "white",
  logoSize: "md",
  logoOpacity: "75",
  logoColor: "muted",
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
  ],
  styles: [
    {
      name: "paddingY",
      type: "number",
      default: "6",
      allowedValues: "4 | 6 | 8 | 10 | 12",
    },
    {
      name: "background",
      type: "string",
      default: "white",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "logoSize",
      type: "string",
      default: "md",
      allowedValues: "sm | md | lg | xl",
    },
    {
      name: "logoOpacity",
      type: "string",
      default: "75",
      allowedValues: "50 | 60 | 75 | 100",
    },
    {
      name: "logoColor",
      type: "string",
      default: "muted",
      allowedValues: "primary | surface | muted | subtle | white",
    },
  ],
};