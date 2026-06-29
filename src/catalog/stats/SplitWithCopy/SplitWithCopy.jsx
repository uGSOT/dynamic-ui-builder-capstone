import { SPLIT_WITH_COPY_DEFAULT_PROPS } from "../defaultProps";
import { resolveStatsStyles, STATS_STYLE_DEFAULTS, STATS_STYLE_PROP_SCHEMA } from "../statsStyles";
import { resolveStatIcon } from "../statsIcons";

export const defaultProps = { ...SPLIT_WITH_COPY_DEFAULT_PROPS };
export const defaultStyles = { ...STATS_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Optional section heading above the copy and stat split",
    },
    {
      name: "body",
      type: "string",
      default: defaultProps.body,
      allowedValues: "Any string",
      description: "Supporting paragraph shown next to the stats list",
    },
    {
      name: "stats",
      type: "Array<{ value: string, label: string, suffix?: string, icon?: string }>",
      default: defaultProps.stats,
      allowedValues: "Array of value/label/icon objects",
      description: "Metrics displayed in a split layout alongside copy",
    },
  ],
  styles: STATS_STYLE_PROP_SCHEMA,
};

export default function SplitWithCopy({ heading = defaultProps.heading, body = defaultProps.body, stats = defaultProps.stats, styles = defaultStyles }) {
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
  const titleClass = inverted ? "text-ink-inverse" : "text-text";
  const bodyClass = inverted ? "text-ink-inverse-muted" : "text-ink-muted";

  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            {heading ? (
              <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleClass}`}>{heading}</h2>
            ) : null}
            {body ? (
              <p className={`mt-6 max-w-2xl text-lg leading-8 ${bodyClass}`}>{body}</p>
            ) : null}
          </div>

          <div className="space-y-4 max-h-[22rem] min-h-0 overflow-y-auto pr-1 lg:max-h-[24rem]">
            {stats.map(({ value, label, suffix, icon }, index) => {
              const Icon = resolveStatIcon(icon);
              return (
                <div
                  key={`${label}-${index}`}
                  className={`rounded-3xl border border-border ${cardColorClass || "bg-surface"}`}
                >
                  <div className={`px-6 py-6 ${cardSizeClass}`}>
                    {Icon ? (
                      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-2xl ${iconWrapperClass}`}>
                        <Icon size={20} className={iconTextClass} />
                      </div>
                    ) : null}
                    <div className="flex items-baseline gap-2">
                      <p className={`${valueClass}`}>{value}</p>
                      {suffix ? <span className="text-lg font-semibold text-ink-muted">{suffix}</span> : null}
                    </div>
                    <p className={`mt-2 text-sm font-medium ${labelClass}`}>{label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
