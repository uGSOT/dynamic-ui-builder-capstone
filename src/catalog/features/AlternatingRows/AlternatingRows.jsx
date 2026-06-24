import * as LucideIcons from "lucide-react";

// ─── Defaults ────────────────────────────────────────────────────────────────

export const defaultProps = {
  heading: "A deeper look at what we built",
  subheading: "Every feature is designed around real workflows — not checkboxes.",
  imagePosition: "right-first",
  showImageFallback: true,
  size: "lg",
  features: [
    {
      id: "f1",
      icon: "Zap",
      tag: "Performance",
      title: "Ship in seconds, not hours",
      description:
        "Our build pipeline is optimised end-to-end. From a single git push to a globally distributed deploy in under 30 seconds — no config required.",
      bullets: ["Zero cold starts", "Edge-optimised delivery", "Automatic rollbacks"],
      image: null,
    },
    {
      id: "f2",
      icon: "Shield",
      tag: "Security",
      title: "Enterprise-grade security, zero overhead",
      description:
        "Role-based access, audit logs, and SSO come standard. Security isn't a paid add-on — it's baked into every layer of the platform.",
      bullets: ["SOC 2 Type II certified", "SAML & OIDC SSO", "Fine-grained permissions"],
      image: null,
    },
    {
      id: "f3",
      icon: "BarChart2",
      tag: "Observability",
      title: "See everything that matters",
      description:
        "Real-time traces, error tracking, and custom dashboards out of the box. No more grepping logs at 2 AM trying to find a silent failure.",
      bullets: ["P99 latency tracking", "Custom alert rules", "One-click log tailing"],
      image: null,
    },
  ],
};

// ─── Size tokens ─────────────────────────────────────────────────────────────

const SIZE = {
  sm: {
    section: "px-4 py-12",
    rowGap: "gap-12",
    heading: "text-2xl",
    subheading: "text-sm mt-3 mb-10",
    tag: "text-xs px-2 py-0.5 mb-3",
    title: "text-xl font-bold mb-3",
    description: "text-sm leading-relaxed mb-4",
    bullet: "text-xs",
    bulletIcon: 12,
    iconWrap: "h-7 w-7",
    iconSize: 14,
    imageFallback: "h-48 rounded-xl",
    imageReal: "h-48 w-full rounded-xl object-cover",
  },
  md: {
    section: "px-6 py-16",
    rowGap: "gap-16",
    heading: "text-3xl",
    subheading: "text-base mt-4 mb-12",
    tag: "text-xs px-2.5 py-1 mb-4",
    title: "text-2xl font-bold mb-4",
    description: "text-sm leading-relaxed mb-5",
    bullet: "text-sm",
    bulletIcon: 14,
    iconWrap: "h-8 w-8",
    iconSize: 16,
    imageFallback: "h-64 rounded-2xl",
    imageReal: "h-64 w-full rounded-2xl object-cover",
  },
  lg: {
    section: "px-8 py-24",
    rowGap: "gap-24",
    heading: "text-4xl",
    subheading: "text-lg mt-4 mb-16",
    tag: "text-xs px-3 py-1 mb-4",
    title: "text-3xl font-bold mb-5",
    description: "text-base leading-relaxed mb-6",
    bullet: "text-sm",
    bulletIcon: 14,
    iconWrap: "h-10 w-10",
    iconSize: 20,
    imageFallback: "h-80 rounded-2xl",
    imageReal: "h-80 w-full rounded-2xl object-cover",
  },
};

// ─── Fallback illustration ────────────────────────────────────────────────────

function ImageFallback({ icon, sizeClass }) {
  const Icon = LucideIcons[icon] ?? LucideIcons.Star;
  return (
    <div
      className={`${sizeClass} w-full flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-[#2a2a3a]`}
    >
      <Icon size={48} className="text-indigo-400/40" />
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * AlternatingRows — Features variant
 *
 * @param {object}   props
 * @param {string}   props.heading                    - Section heading
 * @param {string}   [props.subheading]               - Optional subheading
 * @param {"right-first"|"left-first"} [props.imagePosition="right-first"]
 *   - Which side the image appears on for the first row. Subsequent rows alternate automatically.
 * @param {boolean}  [props.showImageFallback=true]   - Show a gradient placeholder when no image URL is provided
 * @param {"sm"|"md"|"lg"} [props.size="lg"]          - Component size
 * @param {Array}    props.features                   - Array of feature row objects
 * @param {string}   props.features[].id              - Unique key
 * @param {string}   props.features[].icon            - Lucide icon name used in tag and fallback illustration
 * @param {string}   [props.features[].tag]           - Small label above the title (e.g. "Performance")
 * @param {string}   props.features[].title           - Row heading
 * @param {string}   props.features[].description     - Body paragraph
 * @param {string[]} [props.features[].bullets]       - Optional bullet point list
 * @param {string|null} [props.features[].image]      - Image URL; null shows the fallback illustration
 */
export default function AlternatingRows({
  heading           = defaultProps.heading,
  subheading        = defaultProps.subheading,
  imagePosition     = defaultProps.imagePosition,
  showImageFallback = defaultProps.showImageFallback,
  size              = defaultProps.size,
  features          = defaultProps.features,
}) {
  const t = SIZE[size] ?? SIZE.lg;

  return (
    <section className={`w-full bg-[#0a0a0f] ${t.section}`}>
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-2xl">
          <h2 className={`font-bold tracking-tight text-[#f1f1f5] ${t.heading}`}>
            {heading}
          </h2>
          {subheading && (
            <p className={`text-[#9898b0] ${t.subheading}`}>{subheading}</p>
          )}
        </div>

        {/* Rows */}
        <div className={`flex flex-col ${t.rowGap}`}>
          {features.map((feature, index) => {
            const Icon = LucideIcons[feature.icon] ?? LucideIcons.Star;

            // Determine image side based on imagePosition + index
            const imageOnRight =
              imagePosition === "right-first" ? index % 2 === 0 : index % 2 !== 0;

            const showImage = feature.image || showImageFallback;

            return (
              <div
                key={feature.id}
                className={`flex flex-col ${
                  imageOnRight ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-10 lg:gap-16`}
              >
                {/* Copy side */}
                <div className="flex-1 w-full">
                  {/* Tag */}
                  {feature.tag && (
                    <div className="inline-flex items-center gap-1.5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-medium ${t.tag}`}
                      >
                        <Icon size={10} />
                        {feature.tag}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className={`text-[#f1f1f5] ${t.title}`}>{feature.title}</h3>

                  {/* Description */}
                  <p className={`text-[#9898b0] ${t.description}`}>
                    {feature.description}
                  </p>

                  {/* Bullets */}
                  {Array.isArray(feature.bullets) && feature.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <LucideIcons.Check
                            size={t.bulletIcon}
                            className="text-indigo-400 shrink-0"
                          />
                          <span className={`text-[#9898b0] ${t.bullet}`}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image side */}
                {showImage && (
                  <div className="flex-1 w-full">
                    {feature.image ? (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className={t.imageReal}
                      />
                    ) : (
                      <ImageFallback
                        icon={feature.icon}
                        sizeClass={t.imageFallback}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
