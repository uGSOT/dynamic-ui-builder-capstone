import * as LucideIcons from "lucide-react";
import {
  resolveStyles,
  LOGO_SIZE_MAP,
  HEADING_SIZE_MAP,
  BODY_SIZE_MAP,
  WEIGHT_MAP,
  COLOR_MAP,
} from "../../../utils/resolveStyles";

export default function WithHeading({
  styles = {},
  heading = defaultProps.heading,
  logos = defaultProps.logos,
  grayscale = defaultProps.grayscale,
  badge = defaultProps.badge,
}) {
  const s = resolveStyles(styles);

  // heading
  const headingClass = [
    HEADING_SIZE_MAP[styles.headingSize ?? "4xl"],
    WEIGHT_MAP[styles.headingWeight ?? "bold"],
    COLOR_MAP[styles.headingColor ?? "surface"]?.text,
    "tracking-tight",
  ].join(" ");

  // logo
  const logoHeight = LOGO_SIZE_MAP[styles.logoSize ?? "md"];
  const opacityMap = { "50": 0.5, "60": 0.6, "75": 0.75, "100": 1 };
  const logoOpacity = grayscale
    ? opacityMap[styles.logoOpacity ?? "75"]
    : opacityMap[styles.logoOpacity ?? "100"];
  const logoFilter = grayscale ? "grayscale(100%)" : "none";

  // badge colors from styles
  const badgeBgClass = COLOR_MAP[styles.badgeBg ?? "primaryMuted"]?.bg ?? "bg-[#fdecea]";
  const badgeIconClass = COLOR_MAP[styles.badgeIconColor ?? "primary"]?.text ?? "text-[#e50913]";
  const badgeTextClass = COLOR_MAP[styles.badgeTextColor ?? "primary"]?.text ?? "text-[#e50913]";
  const badgeSubtextClass = COLOR_MAP[styles.badgeSubtextColor ?? "muted"]?.text ?? "text-gray-500";

  // dynamic lucide icon
  const BadgeIcon = badge?.icon
    ? (LucideIcons[badge.icon] ?? LucideIcons.Users)
    : LucideIcons.Users;

  return (
    <section className={`w-full ${s.sectionClass}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        {heading && (
          <h2 className={`mb-10 ${headingClass}`}>
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
              className={`${logoHeight} w-auto object-contain transition-opacity duration-200 hover:opacity-80`}
              style={{
                filter: logoFilter,
                opacity: logoOpacity,
              }}
            />
          ))}
        </div>

        {/* Badge */}
        {badge && (
          <div className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 ${badgeBgClass}`}>
            <BadgeIcon size={20} className={`shrink-0 ${badgeIconClass}`} />
            <div className="text-left">
              <p className={`text-sm font-semibold ${badgeTextClass}`}>
                {badge.text}
              </p>
              <p className={`text-xs ${badgeSubtextClass}`}>
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
    { image: "/assets/logos/slack.svg", alt: "Slack" },
    { image: "/assets/logos/notion.svg", alt: "Notion" },
    { image: "/assets/logos/linear.svg", alt: "Linear" },
    { image: "/assets/logos/loom.svg", alt: "Loom" },
    { image: "/assets/logos/figma.svg", alt: "Figma" },
    { image: "/assets/logos/stripe.svg", alt: "Stripe" },
  ],
  grayscale: true,
  badge: {
    text: "10,000+ teams",
    subtext: "from startups to enterprises",
    icon: "Users",
  },
};

export const defaultStyles = {
  paddingY: 6,
  background: "white",
  headingColor: "surface",
  headingSize: "4xl",
  headingWeight: "bold",
  logoSize: "md",
  logoOpacity: "75",
  badgeTextColor: "primary",
  badgeSubtextColor: "muted",
  badgeIconColor: "primary",
  badgeBg: "primaryMuted",
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
      name: "badge.icon",
      type: "string",
      default: "Users",
      allowedValues: "Any lucide icon name e.g. Users | Star | Heart",
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
      name: "headingColor",
      type: "string",
      default: "surface",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "headingSize",
      type: "string",
      default: "4xl",
      allowedValues: "2xl | 3xl | 4xl | 5xl | 6xl",
    },
    {
      name: "headingWeight",
      type: "string",
      default: "bold",
      allowedValues: "normal | medium | semibold | bold | extrabold",
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
      name: "badgeBg",
      type: "string",
      default: "primaryMuted",
      allowedValues: "primary | primaryMuted | surface | muted | subtle | white",
    },
    {
      name: "badgeTextColor",
      type: "string",
      default: "primary",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "badgeSubtextColor",
      type: "string",
      default: "muted",
      allowedValues: "primary | surface | muted | subtle | white",
    },
    {
      name: "badgeIconColor",
      type: "string",
      default: "primary",
      allowedValues: "primary | surface | muted | subtle | white",
    },
  ],
};