import * as LucideIcons from "lucide-react";

export default function WithHeading({
  styles = {},
  heading = defaultProps.heading,
  headingColor = defaultProps.headingColor,
  headingWeight = defaultProps.headingWeight,
  logos = defaultProps.logos,
  grayscale = defaultProps.grayscale,
  logoFilter = defaultProps.logoFilter,
  badge = defaultProps.badge,
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
  }[styles.paddingY] ?? "py-16";

  // font weight map
  const fontWeightClass = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[headingWeight] ?? "font-bold";

  // grayscale takes priority over logoFilter
  const computedFilter = grayscale
    ? "grayscale(100%)"
    : logoFilter || "none";

  const logoOpacity = grayscale ? 0.5 : 1;

  // dynamic lucide icon — user passes icon name as string
  // e.g. "Users", "Star", "Heart"
  const BadgeIcon = badge?.icon
    ? (LucideIcons[badge.icon] ?? LucideIcons.Users)
    : LucideIcons.Users;

  return (
    <section className={`w-full ${backgroundClass} ${paddingClass}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading — color and weight from props */}
        {heading && (
          <h2
            className={`text-3xl md:text-5xl tracking-tight mb-10 ${fontWeightClass}`}
            style={{ color: headingColor || undefined }}
          >
            {heading}
          </h2>
        )}

        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-6 mb-10">
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

        {/* Badge — fully controlled from props */}
        {badge && (
          <div
            className="inline-flex items-center gap-3 rounded-xl px-5 py-3"
            style={{
              backgroundColor: badge.backgroundColor || "#fce8e9",
            }}
          >
            <BadgeIcon
              size={20}
              className="shrink-0"
              style={{ color: badge.iconColor || "#e50913" }}
            />
            <div className="text-left">
              <p
                className="text-sm font-semibold"
                style={{ color: badge.textColor || "#e50913" }}
              >
                {badge.text}
              </p>
              <p
                className="text-xs"
                style={{ color: badge.subtextColor || "#5c5c6f" }}
              >
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
  headingColor: "#0f0f14",
  headingWeight: "bold",
  logos: [
    { image: "/assets/logos/slack.svg", alt: "Slack" },
    { image: "/assets/logos/notion.svg", alt: "Notion" },
    { image: "/assets/logos/linear.svg", alt: "Linear" },
    { image: "/assets/logos/loom.svg", alt: "Loom" },
    { image: "/assets/logos/figma.svg", alt: "Figma" },
    { image: "/assets/logos/stripe.svg", alt: "Stripe" },
  ],
  grayscale: true,
  logoFilter: null,
  badge: {
    icon: "Users",
    text: "10,000+ teams",
    subtext: "from startups to enterprises",
    textColor: "#e50913",
    subtextColor: "#5c5c6f",
    iconColor: "#e50913",
    backgroundColor: "#fce8e9",
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
      name: "headingColor",
      type: "string",
      default: "#0f0f14",
      allowedValues: "Any hex color e.g. #0f0f14",
    },
    {
      name: "headingWeight",
      type: "string",
      default: "bold",
      allowedValues: "normal | medium | semibold | bold | extrabold",
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
      name: "logoFilter",
      type: "string",
      default: "null",
      allowedValues: "brightness(0) | invert(1) | opacity(0.3) | none",
    },
    {
      name: "badge.icon",
      type: "string",
      default: "Users",
      allowedValues: "Any lucide icon name e.g. Users | Star | Heart",
    },
    {
      name: "badge.text",
      type: "string",
      default: '"10,000+ teams"',
      allowedValues: "Any string",
    },
    {
      name: "badge.subtext",
      type: "string",
      default: '"from startups to enterprises"',
      allowedValues: "Any string",
    },
    {
      name: "badge.textColor",
      type: "string",
      default: "#e50913",
      allowedValues: "Any hex color",
    },
    {
      name: "badge.subtextColor",
      type: "string",
      default: "#5c5c6f",
      allowedValues: "Any hex color",
    },
    {
      name: "badge.iconColor",
      type: "string",
      default: "#e50913",
      allowedValues: "Any hex color",
    },
    {
      name: "badge.backgroundColor",
      type: "string",
      default: "#fce8e9",
      allowedValues: "Any hex color",
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