import * as LucideIcons from "lucide-react";

export const defaultProps = {
  heading: "Everything you need to ship faster",
  subheading: "A complete toolkit for modern product teams — from idea to production.",
  columns: 3,
  iconSize: "md",
  cardStyle: "bordered",
  align: "left",
  features: [
    {
      id: "f1",
      icon: "Zap",
      title: "Blazing Fast",
      description: "Optimised for performance from day one. No bloat, no compromise.",
    },
    {
      id: "f2",
      icon: "Shield",
      title: "Secure by Default",
      description: "End-to-end encryption and role-based access out of the box.",
    },
    {
      id: "f3",
      icon: "Layers",
      title: "Composable",
      description: "Mix and match components to build exactly what your users need.",
    },
    {
      id: "f4",
      icon: "BarChart2",
      title: "Deep Analytics",
      description: "Real-time dashboards with actionable insights built in.",
    },
    {
      id: "f5",
      icon: "Globe",
      title: "Global CDN",
      description: "Deploy to 30+ regions instantly. Sub-100ms latency worldwide.",
    },
    {
      id: "f6",
      icon: "Plug",
      title: "100+ Integrations",
      description: "Connect to every tool your team already uses in one click.",
    },
  ],
};

const SIZE = {
  sm: {
    section: "px-4 py-12",
    heading: "text-2xl",
    subheading: "text-sm mt-3 mb-8",
    grid: "gap-4",
    card: "p-4",
    iconWrap: "h-8 w-8 mb-3",
    iconSize: 16,
    title: "text-sm font-semibold mb-1",
    description: "text-xs",
  },
  md: {
    section: "px-6 py-16",
    heading: "text-3xl",
    subheading: "text-base mt-4 mb-10",
    grid: "gap-5",
    card: "p-5",
    iconWrap: "h-10 w-10 mb-4",
    iconSize: 20,
    title: "text-base font-semibold mb-1.5",
    description: "text-sm",
  },
  lg: {
    section: "px-8 py-24",
    heading: "text-4xl",
    subheading: "text-lg mt-4 mb-14",
    grid: "gap-6",
    card: "p-6",
    iconWrap: "h-12 w-12 mb-5",
    iconSize: 24,
    title: "text-lg font-semibold mb-2",
    description: "text-base",
  },
};

const CARD_STYLE = {
  bordered: "rounded-xl border border-[#2a2a3a] bg-[#111118]",
  filled:   "rounded-xl bg-[#1a1a24]",
  ghost:    "rounded-xl",
};


const ICON_WRAP_COLOR = "bg-indigo-500/15 text-indigo-400 rounded-lg flex items-center justify-center";


function gridColClass(columns) {
  // Always 1 col on sm, 2 on md, then user-chosen on lg
  if (columns === 2) return "grid-cols-1 sm:grid-cols-2";
  if (columns === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"; // 6 treated as 3 cols
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * IconGrid — Features variant
 *
 * @param {object}   props
 * @param {string}   props.heading          - Section heading text
 * @param {string}   [props.subheading]     - Optional subheading below heading
 * @param {number}   [props.columns=3]      - Number of columns: 2 | 3 (6 features auto-wraps)
 * @param {"sm"|"md"|"lg"} [props.size="lg"] - Component size breakpoint
 * @param {"left"|"center"} [props.align="left"] - Text alignment for header and cards
 * @param {"bordered"|"filled"|"ghost"} [props.cardStyle="bordered"] - Visual style of each card
 * @param {"sm"|"md"|"lg"} [props.iconSize="md"] - Size of the icon wrapper
 * @param {Array}    props.features         - Array of feature objects
 * @param {string}   props.features[].id   - Unique key
 * @param {string}   props.features[].icon - Lucide icon name (e.g. "Zap")
 * @param {string}   props.features[].title
 * @param {string}   props.features[].description
 */
export default function IconGrid({
  heading    = defaultProps.heading,
  subheading = defaultProps.subheading,
  columns    = defaultProps.columns,
  size       = "lg",
  align      = defaultProps.align,
  cardStyle  = defaultProps.cardStyle,
  features   = defaultProps.features,
}) {
  const t = SIZE[size] ?? SIZE.lg;
  const alignClass = align === "center" ? "text-center" : "text-left";
  const alignItems = align === "center" ? "items-center" : "items-start";

  return (
    <section className={`w-full bg-[#0a0a0f] ${t.section}`}>
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className={`max-w-2xl ${align === "center" ? "mx-auto" : ""} ${alignClass}`}>
          <h2 className={`font-bold tracking-tight text-[#f1f1f5] ${t.heading}`}>
            {heading}
          </h2>
          {subheading && (
            <p className={`text-[#9898b0] ${t.subheading}`}>{subheading}</p>
          )}
        </div>

        {/* Grid */}
        <div className={`grid ${gridColClass(columns)} ${t.grid}`}>
          {features.map((feature) => {
            const Icon = LucideIcons[feature.icon] ?? LucideIcons.Star;
            return (
              <div
                key={feature.id}
                className={`flex flex-col ${alignItems} ${CARD_STYLE[cardStyle] ?? CARD_STYLE.bordered} ${t.card}`}
              >
                {/* Icon */}
                <div className={`${ICON_WRAP_COLOR} ${t.iconWrap}`}>
                  <Icon size={t.iconSize} />
                </div>

                {/* Text */}
                <p className={`text-[#f1f1f5] ${t.title}`}>{feature.title}</p>
                <p className={`text-[#9898b0] leading-relaxed ${t.description}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
