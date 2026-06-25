import { STAT_CARDS_DEFAULT_PROPS } from "../defaultProps";
import { resolveStatsStyles, STATS_STYLE_DEFAULTS, STATS_STYLE_PROP_SCHEMA } from "../statsStyles";
import { resolveStatIcon } from "../statsIcons";

export const defaultProps = { ...STAT_CARDS_DEFAULT_PROPS };
export const defaultStyles = { ...STATS_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Optional section heading displayed above the cards",
    },
    {
      name: "stats",
      type: "Array<{ value: string, label: string, suffix?: string, icon?: string }>",
      default: defaultProps.stats,
      allowedValues: "Array of value/label/icon objects",
      description: "Individual stat cards shown in a grid",
    },
  ],
  styles: STATS_STYLE_PROP_SCHEMA,
};

export default function StatCards({ heading = defaultProps.heading, stats = defaultProps.stats, styles = defaultStyles }) {
  const {
    className,
    inverted,
    valueClass,
    labelClass,
    cardColorClass,
    cardSizeClass,
    iconWrapperClass,
    iconTextClass,
  } = resolveStatsStyles(styles);
  const titleClass = inverted ? "text-ink-inverse" : "text-ink";

  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {heading ? (
          <div className="text-center">
            <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleClass}`}>{heading}</h2>
          </div>
        ) : null}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, suffix, icon }, index) => {
            const Icon = resolveStatIcon(icon);
            return (
              <div
                key={`${label}-${index}`}
                className={`rounded-3xl border border-border ${cardColorClass || "bg-surface"} shadow-sm`}
              >
                <div className={`px-6 py-8 ${cardSizeClass}`}>
                  {Icon ? (
                    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-2xl ${iconWrapperClass}`}>
                      <Icon size={20} className={iconTextClass} />
                    </div>
                  ) : null}
                  <div className="flex items-baseline gap-2">
                    <p className={`${valueClass}`}>{value}</p>
                    {suffix ? <span className="text-lg font-semibold text-ink-muted">{suffix}</span> : null}
                  </div>
                  <p className={`mt-4 text-sm font-medium ${labelClass}`}>{label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
