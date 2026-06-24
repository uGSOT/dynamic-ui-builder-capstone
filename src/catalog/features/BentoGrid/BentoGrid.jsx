import * as LucideIcons from "lucide-react";

// ─── Defaults ─────────────────────────────────────────────────────────────────
// Layout: 1 hero + 2 medium + 4 small = 7 features
// hero   → col-span-2 row-span-2  (top-left)
// medium → col-span-1 row-span-2  (top-right stack, 2 cards)
// small  → col-span-1 row-span-1  (bottom row, 4 cards)

export const defaultProps = {
  heading: "The platform built for what's next",
  subheading: "Every capability you need — assembled into a single coherent product.",
  accentColor: "indigo",
  size: "lg",
  features: [
    // hero
    {
      id: "f1",
      slot: "hero",
      icon: "Zap",
      title: "Instant global deploys",
      description:
        "Push code and watch it propagate to 30+ edge regions in under 10 seconds. No config, no pipelines, no waiting.",
      tag: "Core",
      highlight: true,
    },
    // medium
    {
      id: "f2",
      slot: "medium",
      icon: "Shield",
      title: "Zero-trust security",
      description: "Every request verified. Role-based access, audit logs, and SSO included on every plan.",
      tag: null,
      highlight: false,
    },
    {
      id: "f3",
      slot: "medium",
      icon: "BarChart2",
      title: "Real-time observability",
      description: "Traces, metrics, and logs in one pane. Spot issues before your users do.",
      tag: null,
      highlight: false,
    },
    // small
    {
      id: "f4",
      slot: "small",
      icon: "Plug",
      title: "100+ integrations",
      description: "Connects to the tools you already use.",
      tag: null,
      highlight: false,
    },
    {
      id: "f5",
      slot: "small",
      icon: "Globe",
      title: "Global CDN",
      description: "Sub-100ms latency, anywhere on Earth.",
      tag: null,
      highlight: false,
    },
    {
      id: "f6",
      slot: "small",
      icon: "Layers",
      title: "Composable APIs",
      description: "Build your stack, your way.",
      tag: null,
      highlight: false,
    },
    {
      id: "f7",
      slot: "small",
      icon: "RefreshCw",
      title: "Auto rollbacks",
      description: "Bad deploy? Rolled back in seconds.",
      tag: null,
      highlight: false,
    },
  ],
};

// ─── Accent colours ───────────────────────────────────────────────────────────

const ACCENT = {
  indigo: {
    iconBg:    "bg-indigo-500/15",
    iconText:  "text-indigo-400",
    tagBorder: "border-indigo-500/30",
    tagBg:     "bg-indigo-500/10",
    tagText:   "text-indigo-400",
    heroBg:    "bg-gradient-to-br from-indigo-500/20 to-purple-500/10",
    heroBorder:"border-indigo-500/30",
  },
  violet: {
    iconBg:    "bg-violet-500/15",
    iconText:  "text-violet-400",
    tagBorder: "border-violet-500/30",
    tagBg:     "bg-violet-500/10",
    tagText:   "text-violet-400",
    heroBg:    "bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10",
    heroBorder:"border-violet-500/30",
  },
  emerald: {
    iconBg:    "bg-emerald-500/15",
    iconText:  "text-emerald-400",
    tagBorder: "border-emerald-500/30",
    tagBg:     "bg-emerald-500/10",
    tagText:   "text-emerald-400",
    heroBg:    "bg-gradient-to-br from-emerald-500/20 to-teal-500/10",
    heroBorder:"border-emerald-500/30",
  },
  rose: {
    iconBg:    "bg-rose-500/15",
    iconText:  "text-rose-400",
    tagBorder: "border-rose-500/30",
    tagBg:     "bg-rose-500/10",
    tagText:   "text-rose-400",
    heroBg:    "bg-gradient-to-br from-rose-500/20 to-pink-500/10",
    heroBorder:"border-rose-500/30",
  },
};

// ─── Size tokens ──────────────────────────────────────────────────────────────

const SIZE = {
  sm: {
    section:      "px-4 py-12",
    heading:      "text-2xl",
    subheading:   "text-sm mt-3 mb-8",
    gap:          "gap-3",
    heroTitle:    "text-xl font-bold mb-2",
    heroDesc:     "text-sm leading-relaxed",
    heroIcon:     "h-10 w-10 mb-4",
    heroIconSize: 20,
    heroTag:      "text-xs px-2 py-0.5 mb-3",
    medTitle:     "text-base font-semibold mb-1.5",
    medDesc:      "text-xs leading-relaxed",
    medIcon:      "h-8 w-8 mb-3",
    medIconSize:  16,
    smTitle:      "text-sm font-semibold mb-1",
    smDesc:       "text-xs leading-relaxed",
    smIcon:       "h-7 w-7 mb-2",
    smIconSize:   14,
    cardPad:      "p-4",
  },
  md: {
    section:      "px-6 py-16",
    heading:      "text-3xl",
    subheading:   "text-base mt-4 mb-10",
    gap:          "gap-4",
    heroTitle:    "text-2xl font-bold mb-3",
    heroDesc:     "text-sm leading-relaxed",
    heroIcon:     "h-12 w-12 mb-5",
    heroIconSize: 24,
    heroTag:      "text-xs px-2.5 py-1 mb-4",
    medTitle:     "text-lg font-semibold mb-2",
    medDesc:      "text-sm leading-relaxed",
    medIcon:      "h-9 w-9 mb-4",
    medIconSize:  18,
    smTitle:      "text-sm font-semibold mb-1",
    smDesc:       "text-xs leading-relaxed",
    smIcon:       "h-7 w-7 mb-2",
    smIconSize:   14,
    cardPad:      "p-5",
  },
  lg: {
    section:      "px-8 py-24",
    heading:      "text-4xl",
    subheading:   "text-lg mt-4 mb-14",
    gap:          "gap-4",
    heroTitle:    "text-3xl font-bold mb-4",
    heroDesc:     "text-base leading-relaxed",
    heroIcon:     "h-14 w-14 mb-6",
    heroIconSize: 28,
    heroTag:      "text-xs px-3 py-1 mb-5",
    medTitle:     "text-xl font-semibold mb-2",
    medDesc:      "text-sm leading-relaxed",
    medIcon:      "h-10 w-10 mb-4",
    medIconSize:  20,
    smTitle:      "text-base font-semibold mb-1.5",
    smDesc:       "text-sm leading-relaxed",
    smIcon:       "h-8 w-8 mb-3",
    smIconSize:   16,
    cardPad:      "p-6",
  },
};

// ─── Card base ────────────────────────────────────────────────────────────────

const cardBase = "rounded-2xl border border-[#2a2a3a] bg-[#111118] flex flex-col";

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * BentoGrid — Features variant
 *
 * Asymmetric card grid: 1 hero card (large), 2 medium cards, 4 small cards.
 * On mobile all cards stack vertically. On desktop the bento layout is applied.
 *
 * @param {object}   props
 * @param {string}   props.heading                      - Section heading
 * @param {string}   [props.subheading]                 - Optional subheading
 * @param {"indigo"|"violet"|"emerald"|"rose"} [props.accentColor="indigo"]
 *   - Accent colour used for icons, tags, and the hero card background.
 * @param {"sm"|"md"|"lg"} [props.size="lg"]            - Component size
 * @param {Feature[]} props.features                    - Exactly 7 features recommended: 1 hero + 2 medium + 4 small
 * @param {string}   props.features[].id                - Unique key
 * @param {"hero"|"medium"|"small"} props.features[].slot - Controls card size in the bento layout
 * @param {string}   props.features[].icon              - Lucide icon name
 * @param {string}   props.features[].title             - Card heading
 * @param {string}   props.features[].description       - Card body text
 * @param {string|null} [props.features[].tag]          - Optional pill label (shown on hero card only)
 * @param {boolean}  [props.features[].highlight=false] - Applies accent gradient background to the card
 */
export default function BentoGrid({
  heading     = defaultProps.heading,
  subheading  = defaultProps.subheading,
  accentColor = defaultProps.accentColor,
  size        = defaultProps.size,
  features    = defaultProps.features,
}) {
  const t = SIZE[size] ?? SIZE.lg;
  const a = ACCENT[accentColor] ?? ACCENT.indigo;

  const hero    = features.filter((f) => f.slot === "hero");
  const medium  = features.filter((f) => f.slot === "medium");
  const small   = features.filter((f) => f.slot === "small");

  function IconWrap({ icon, wrapClass, iconSize, highlight }) {
    const Icon = LucideIcons[icon] ?? LucideIcons.Star;
    return (
      <div
        className={`${wrapClass} rounded-xl flex items-center justify-center ${
          highlight ? "bg-white/10" : a.iconBg
        }`}
      >
        <Icon size={iconSize} className={highlight ? "text-white" : a.iconText} />
      </div>
    );
  }

  function Tag({ label }) {
    if (!label) return null;
    return (
      <span
        className={`inline-flex items-center rounded-full border font-medium ${a.tagBorder} ${a.tagBg} ${a.tagText} ${t.heroTag}`}
      >
        {label}
      </span>
    );
  }

  return (
    <section className={`w-full bg-[#0a0a0f] ${t.section}`}>
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-2xl mb-0">
          <h2 className={`font-bold tracking-tight text-[#f1f1f5] ${t.heading}`}>
            {heading}
          </h2>
          {subheading && (
            <p className={`text-[#9898b0] ${t.subheading}`}>{subheading}</p>
          )}
        </div>

        {/*
          Desktop bento grid: 3 columns
          Row 1: [hero (col 1-2)] [medium (col 3)]
          Row 2: [hero (col 1-2)] [medium (col 3)]
          Row 3: [small][small][small][small] — 4 equal cols handled via a nested grid
        */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 ${t.gap}`}>

          {/* Hero card — spans 2 cols, 2 rows on desktop */}
          {hero.map((f) => (
            <div
              key={f.id}
              className={`${cardBase} lg:col-span-2 lg:row-span-2 ${t.cardPad} ${
                f.highlight ? `${a.heroBg} ${a.heroBorder}` : ""
              }`}
            >
              <Tag label={f.tag} />
              <IconWrap
                icon={f.icon}
                wrapClass={t.heroIcon}
                iconSize={t.heroIconSize}
                highlight={f.highlight}
              />
              <p className={`${f.highlight ? "text-white" : "text-[#f1f1f5]"} ${t.heroTitle}`}>
                {f.title}
              </p>
              <p className={`${f.highlight ? "text-white/70" : "text-[#9898b0]"} ${t.heroDesc}`}>
                {f.description}
              </p>
            </div>
          ))}

          {/* Medium cards — 1 col, 2 rows each on desktop */}
          {medium.map((f) => (
            <div
              key={f.id}
              className={`${cardBase} lg:col-span-1 lg:row-span-1 ${t.cardPad}`}
            >
              <IconWrap
                icon={f.icon}
                wrapClass={t.medIcon}
                iconSize={t.medIconSize}
                highlight={false}
              />
              <p className={`text-[#f1f1f5] ${t.medTitle}`}>{f.title}</p>
              <p className={`text-[#9898b0] ${t.medDesc}`}>{f.description}</p>
            </div>
          ))}

          {/* Small cards — span full 3-col width as a nested 4-col grid */}
          {small.length > 0 && (
            <div className={`lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${t.gap}`}>
              {small.map((f) => (
                <div key={f.id} className={`${cardBase} ${t.cardPad}`}>
                  <IconWrap
                    icon={f.icon}
                    wrapClass={t.smIcon}
                    iconSize={t.smIconSize}
                    highlight={false}
                  />
                  <p className={`text-[#f1f1f5] ${t.smTitle}`}>{f.title}</p>
                  <p className={`text-[#9898b0] ${t.smDesc}`}>{f.description}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
