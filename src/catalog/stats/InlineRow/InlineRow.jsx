import { INLINE_ROW_DEFAULT_PROPS } from "../defaultProps";
import { resolveStatsStyles, STATS_STYLE_DEFAULTS, STATS_STYLE_PROP_SCHEMA } from "../statsStyles";
import { resolveStatIcon } from "../statsIcons";

export const defaultProps = { ...INLINE_ROW_DEFAULT_PROPS };
export const defaultStyles = { ...STATS_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Optional section heading displayed above the stats row",
    },
    {
      name: "stats",
      type: "Array<{ value: string, label: string, suffix?: string, icon?: string }>",
      default: defaultProps.stats,
      allowedValues: "Array of value/label/icon objects",
      description: "Stats shown in a horizontal row",
    },
  ],
  styles: STATS_STYLE_PROP_SCHEMA,
};

export default function InlineRow({ heading = defaultProps.heading, stats = defaultProps.stats, styles = defaultStyles }) {
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

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, suffix, icon }, index) => {
            const Icon = resolveStatIcon(icon);
            return (
              <div key={`${label}-${index}`} className={`text-center rounded-3xl ${cardColorClass || "bg-surface"} px-6 py-6 ${cardSizeClass}`}>
                {Icon ? (
                  <div className={`mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-2xl ${iconWrapperClass}`}>
                    <Icon size={20} className={iconTextClass} />
                  </div>
                ) : null}
                <div className="inline-flex items-baseline gap-2 justify-center">
                  <p className={`${valueClass}`}>{value}</p>
                  {suffix ? <span className="text-lg font-semibold text-ink-muted">{suffix}</span> : null}
                </div>
                <p className={`mt-2 text-sm font-medium ${labelClass}`}>{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
