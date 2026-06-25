// resolveColor helper — same as CardGrid and Carousel
function resolveColor(value, fallback) {
  if (!value) return fallback;
  if (value.startsWith("#") || value.startsWith("rgb")) return value;
  const tokenMap = {
    "ink": "var(--color-ink)",
    "ink-muted": "var(--color-ink-muted)",
    "ink-subtle": "var(--color-ink-subtle)",
    "ink-inverse": "var(--color-ink-inverse)",
    "ink-inverse-muted": "var(--color-ink-inverse-muted)",
    "brand": "var(--color-brand)",
    "brand-dark": "var(--color-brand-dark)",
    "brand-light": "var(--color-brand-light)",
  };
  return tokenMap[value] ?? fallback;
}

export default function FeaturedSingle({
  styles = {},
  quote = defaultProps.quote,
  quoteColor = defaultProps.quoteColor,
  quoteWeight = defaultProps.quoteWeight,
  quoteSize = defaultProps.quoteSize,
  name = defaultProps.name,
  nameColor = defaultProps.nameColor,
  nameWeight = defaultProps.nameWeight,
  role = defaultProps.role,
  roleColor = defaultProps.roleColor,
  roleWeight = defaultProps.roleWeight,
  avatar = defaultProps.avatar,
  company = defaultProps.company,
  companyLogo = defaultProps.companyLogo,
  accentColor = defaultProps.accentColor,
}) {

  // structural classes — stay as Tailwind tokens
  const sectionBg = {
    surface: "bg-surface",
    "surface-muted": "bg-surface-muted",
    "surface-subtle": "bg-surface-subtle",
    navy: "bg-navy",
    "navy-elevated": "bg-navy-elevated",
    "navy-muted": "bg-navy-muted",
  }[styles.sectionBackground] ?? "bg-surface-muted";

  const paddingY = {
    8: "py-8", 10: "py-10", 12: "py-12",
    16: "py-16", 20: "py-20", 24: "py-24",
  }[styles.paddingY] ?? "py-20";

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
  }[styles.avatarSize] ?? "w-14 h-14";

  const logoHeight = {
    sm: "h-4", md: "h-6", lg: "h-8",
  }[styles.logoHeight] ?? "h-6";

  // font weight stays Tailwind — structural not color
  const weightMap = {
    normal: "font-normal", medium: "font-medium",
    semibold: "font-semibold", bold: "font-bold",
  };

  const sizeMap = {
    lg: "text-lg", xl: "text-xl", "2xl": "text-2xl",
    "3xl": "text-3xl", "4xl": "text-4xl",
  };

  return (
    <section className={`w-full ${sectionBg} ${paddingY}`}>
      <div className={`${maxWidth} mx-auto px-6 flex flex-col gap-8 ${align}`}>

        {/* Big decorative quote mark — color from accentColor */}
        <span
          className="text-8xl font-serif leading-none opacity-20"
          style={{ color: resolveColor(accentColor, "var(--color-brand)") }}
        >
          "
        </span>

        {/* Quote text */}
        <blockquote
          className={`-mt-10 leading-snug ${sizeMap[quoteSize] ?? "text-3xl"} ${weightMap[quoteWeight] ?? "font-semibold"}`}
          style={{ color: resolveColor(quoteColor, "var(--color-ink)") }}
        >
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
            <p
              className={`${weightMap[nameWeight] ?? "font-semibold"}`}
              style={{ color: resolveColor(nameColor, "var(--color-ink)") }}
            >
              {name}
            </p>
            <p
              className={`text-sm ${weightMap[roleWeight] ?? "font-normal"}`}
              style={{ color: resolveColor(roleColor, "var(--color-ink-muted)") }}
            >
              {role}
            </p>
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
  quoteColor: "ink",
  quoteWeight: "semibold",
  quoteSize: "3xl",
  name: "Jessica Park",
  nameColor: "ink",
  nameWeight: "semibold",
  role: "Head of Operations",
  roleColor: "ink-muted",
  roleWeight: "normal",
  avatar: "/assets/images/avatar1.jpg",
  company: "Acme",
  companyLogo: "/assets/logos/figma.svg",
  accentColor: "brand",
};

export const defaultStyles = {
  paddingY: 20,
  sectionBackground: "surface-muted",
  align: "center",
  maxWidth: "lg",
  avatarSize: "md",
  logoHeight: "md",
};

export const propSchema = {
  props: [
    { name: "quote", type: "string", default: "...", allowedValues: "Any string" },
    { name: "quoteColor", type: "string", default: "ink", allowedValues: "Token name OR any hex e.g. #0f0f14" },
    { name: "quoteWeight", type: "string", default: "semibold", allowedValues: "normal | medium | semibold | bold" },
    { name: "quoteSize", type: "string", default: "3xl", allowedValues: "lg | xl | 2xl | 3xl | 4xl" },
    { name: "name", type: "string", default: "Jessica Park", allowedValues: "Any string" },
    { name: "nameColor", type: "string", default: "ink", allowedValues: "Token name OR any hex" },
    { name: "nameWeight", type: "string", default: "semibold", allowedValues: "normal | medium | semibold | bold" },
    { name: "role", type: "string", default: "Head of Operations", allowedValues: "Any string" },
    { name: "roleColor", type: "string", default: "ink-muted", allowedValues: "Token name OR any hex" },
    { name: "roleWeight", type: "string", default: "normal", allowedValues: "normal | medium | semibold | bold" },
    { name: "avatar", type: "string", default: "/assets/images/avatar1.jpg", allowedValues: "Image path" },
    { name: "company", type: "string", default: "Acme", allowedValues: "Any string" },
    { name: "companyLogo", type: "string", default: "/assets/logos/figma.svg", allowedValues: "SVG path or null" },
    { name: "accentColor", type: "string", default: "brand", allowedValues: "Token name OR any hex" },
  ],
  styles: [
    { name: "paddingY", type: "number", default: "20", allowedValues: "8 | 10 | 12 | 16 | 20 | 24" },
    { name: "sectionBackground", type: "string", default: "surface-muted", allowedValues: "surface | surface-muted | surface-subtle | navy | navy-elevated | navy-muted" },
    { name: "align", type: "string", default: "center", allowedValues: "center | left" },
    { name: "maxWidth", type: "string", default: "lg", allowedValues: "sm | md | lg | xl" },
    { name: "avatarSize", type: "string", default: "md", allowedValues: "sm | md | lg" },
    { name: "logoHeight", type: "string", default: "md", allowedValues: "sm | md | lg" },
  ],
};