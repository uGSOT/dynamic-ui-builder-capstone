import {
  resolveStyles,
  WEIGHT_MAP,
  COLOR_MAP,
} from "../../../utils/resolveStyles";

export default function FeaturedSingle({
  styles = {},
  quote = defaultProps.quote,
  name = defaultProps.name,
  role = defaultProps.role,
  avatar = defaultProps.avatar,
  company = defaultProps.company,
  companyLogo = defaultProps.companyLogo,
}) {
  const s = resolveStyles(styles);

  // structural classes — stay as Tailwind tokens
  const sectionBgClass = COLOR_MAP[styles.background ?? "muted"]?.bg ?? "bg-gray-50";

  const paddingClass = {
    4: "py-8 sm:py-10", 6: "py-10 sm:py-12", 8: "py-12 sm:py-16",
    10: "py-16 sm:py-20", 12: "py-20 sm:py-24",
  }[styles.paddingY ?? 10] ?? "py-16 sm:py-20";

  const align = {
    center: "text-center items-center",
    left: "text-left items-start",
  }[styles.align] ?? "text-center items-center";

  const maxWidth = {
    sm: "max-w-xl", md: "max-w-2xl",
    lg: "max-w-3xl", xl: "max-w-4xl",
  }[styles.maxWidth] ?? "max-w-3xl";

  const avatarSize = {
    sm: "w-10 h-10", md: "w-14 h-14", lg: "w-20 h-20",
  }[styles.avatarSize ?? "md"];

  const logoHeight = {
    sm: "h-4", md: "h-6", lg: "h-8",
  }[styles.logoHeight ?? "md"];

  const sizeMap = {
    lg: "text-lg", xl: "text-xl", "2xl": "text-2xl",
    "3xl": "text-3xl", "4xl": "text-4xl",
  };

  // quote
  const quoteClass = [
    sizeMap[styles.quoteSize ?? "3xl"],
    WEIGHT_MAP[styles.quoteWeight ?? "semibold"],
    COLOR_MAP[styles.quoteColor ?? "surface"]?.text,
    "leading-snug",
  ].join(" ");

  // name / role
  const nameClass = [
    WEIGHT_MAP[styles.nameWeight ?? "semibold"],
    COLOR_MAP[styles.nameColor ?? "surface"]?.text,
  ].join(" ");

  const roleClass = [
    "text-sm",
    WEIGHT_MAP[styles.roleWeight ?? "normal"],
    COLOR_MAP[styles.roleColor ?? "muted"]?.text,
  ].join(" ");

  // accent (decorative quote mark)
  const accentClass = COLOR_MAP[styles.accentColor ?? "primary"]?.text;

  return (
    <section className={`w-full ${sectionBgClass} ${paddingClass}`}>
      <div className={`${maxWidth} mx-auto px-6 flex flex-col gap-8 ${align}`}>

        {/* Big decorative quote mark */}
        <span className={`text-8xl font-serif leading-none opacity-20 ${accentClass}`}>
          "
        </span>

        {/* Quote text */}
        <blockquote className={`-mt-10 ${quoteClass}`}>
          "{quote}"
        </blockquote>

        {/* Author row */}
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className={`${avatarSize} rounded-full object-cover`}
          />
          <div className="text-left">
            <p className={nameClass}>{name}</p>
            <p className={roleClass}>{role}</p>
          </div>
          {companyLogo && (
            <img
              src={companyLogo}
              alt={company}
              className={`ml-4 ${logoHeight} w-auto object-contain`}
            />
          )}
        </div>

      </div>
    </section>
  );
}

export const defaultProps = {
  quote: "This product has completely changed the way we work. Our team is more aligned and moving faster than ever.",
  name: "Jessica Park",
  role: "Head of Operations",
  avatar: "/assets/images/avatar1.jpg",
  company: "Acme",
  companyLogo: "/assets/logos/figma.svg",
};

export const defaultStyles = {
  paddingY: 10,
  background: "muted",
  align: "center",
  maxWidth: "lg",
  avatarSize: "md",
  logoHeight: "md",
  quoteColor: "surface",
  quoteWeight: "semibold",
  quoteSize: "3xl",
  nameColor: "surface",
  nameWeight: "semibold",
  roleColor: "muted",
  roleWeight: "normal",
  accentColor: "primary",
};

export const propSchema = {
  props: [
    { name: "quote", type: "string", default: '"This product has completely changed..."', allowedValues: "Any string" },
    { name: "name", type: "string", default: '"Jessica Park"', allowedValues: "Any string" },
    { name: "role", type: "string", default: '"Head of Operations"', allowedValues: "Any string" },
    { name: "avatar", type: "string", default: '"/assets/images/avatar1.jpg"', allowedValues: "Image path" },
    { name: "company", type: "string", default: '"Acme"', allowedValues: "Any string" },
    { name: "companyLogo", type: "string", default: '"/assets/logos/figma.svg"', allowedValues: "SVG path or null" },
  ],
  styles: [
    { name: "paddingY", type: "number", default: "10", allowedValues: "4 | 6 | 8 | 10 | 12" },
    { name: "background", type: "string", default: "muted", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "align", type: "string", default: "center", allowedValues: "center | left" },
    { name: "maxWidth", type: "string", default: "lg", allowedValues: "sm | md | lg | xl" },
    { name: "avatarSize", type: "string", default: "md", allowedValues: "sm | md | lg" },
    { name: "logoHeight", type: "string", default: "md", allowedValues: "sm | md | lg" },
    { name: "quoteColor", type: "string", default: "surface", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "quoteWeight", type: "string", default: "semibold", allowedValues: "normal | medium | semibold | bold" },
    { name: "quoteSize", type: "string", default: "3xl", allowedValues: "lg | xl | 2xl | 3xl | 4xl" },
    { name: "nameColor", type: "string", default: "surface", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "nameWeight", type: "string", default: "semibold", allowedValues: "normal | medium | semibold | bold" },
    { name: "roleColor", type: "string", default: "muted", allowedValues: "primary | surface | muted | subtle | white" },
    { name: "roleWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
    { name: "accentColor", type: "string", default: "primary", allowedValues: "primary | surface | muted | subtle | white" },
  ],
};