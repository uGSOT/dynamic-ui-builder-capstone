
import { Users } from "lucide-react";

export default function WithHeading({ props = {}, styles = {} }) {

  
  const {
    heading = defaultProps.heading,
    logos = defaultProps.logos,
    grayscale = defaultProps.grayscale,
    badge = defaultProps.badge,
  } = props;

  
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
  }[styles.paddingY] ?? "py-16";

  return (
    <section className={`w-full ${backgroundClass} ${paddingClass}`}>

      <div className="max-w-5xl mx-auto px-6 text-center">

        {heading && (
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-ink mb-10">
            {heading}
          </h2>
        )}

        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-6 mb-10">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.image}
              alt={logo.alt}
              className="h-6 md:h-8 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
              style={{
                filter: grayscale ? "grayscale(100%)" : "none",
                opacity: grayscale ? 0.5 : 1,
              }}
            />
          ))}
        </div>

        {badge && (
          <div className="inline-flex items-center gap-3 bg-surface-muted rounded-xl px-5 py-3">

            <Users size={20} className="text-brand shrink-0" />

            <div className="text-left">
              <p className="text-sm font-semibold text-brand">
                {badge.text}
              </p>
              <p className="text-xs text-ink-muted">
                {badge.subtext}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export const defaultProps = {
  heading: "trusted by teams at",
  logos: [
    { image: "/assets/logos/Slack.svg", alt: "Slack" },
    { image: "/assets/logos/Notion.svg", alt: "Notion" },
    { image: "/assets/logos/Linear.svg", alt: "Linear" },
    { image: "/assets/logos/Loom.svg", alt: "Loom" },
    { image: "/assets/logos/Figma.svg", alt: "Figma" },
    { image: "/assets/logos/Stripe.svg", alt: "Stripe" },
  ],
  grayscale: true,
  badge: {
    text: "10,000+ teams",
    subtext: "from startups to enterprises",
  },
};

export const defaultStyles = {
  paddingY: 16,
  background: "surface",
};

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: '"trusted by teams at"',
      allowedValues: "Any string",
    },
    {
      name: "logos",
      type: "Array<{ image: string, alt: string }>",
      default: "[6 logos]",
      allowedValues: "Array of image/alt objects",
    },
    {
      name: "grayscale",
      type: "boolean",
      default: "true",
      allowedValues: "true | false",
    },
    {
      name: "badge",
      type: "object",
      default: '{ text: "10,000+ teams", subtext: "..." }',
      allowedValues: "{ text: string, subtext: string }",
    },
  ],
  styles: [
    {
      name: "paddingY",
      type: "number",
      default: "16",
      allowedValues: "4 | 6 | 8 | 10 | 16",
    },
    {
      name: "background",
      type: "string",
      default: "surface",
      allowedValues: "surface | muted | navy",
    },
  ],
};