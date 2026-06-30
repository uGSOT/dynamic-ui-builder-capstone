import { INLINE_ROW_DEFAULT_PROPS } from "../defaultProps";
import { resolveStatsStyles, STATS_STYLE_DEFAULTS, STATS_STYLE_PROP_SCHEMA } from "../statsStyles";
import { resolveStatIcon } from "../statsIcons";
import StatsSectionHeader from "../StatsSectionHeader";

export const defaultProps = { ...INLINE_ROW_DEFAULT_PROPS };
export const defaultStyles = { ...STATS_STYLE_DEFAULTS, cardBorder: "none", cardShadow: "none", cardPaddingY: 6 };

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
    sectionClass,
    headingClass,
    valueClass,
    labelClass,
    cardClass,
    cardPaddingClass,
    iconWrapperClass,
    iconTextClass,
    iconPixelSize,
  } = resolveStatsStyles(styles);

  return (
    <section className={sectionClass}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <StatsSectionHeader heading={heading} headingClass={headingClass} />

        <div className={`${heading ? "mt-10" : ""} grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}>
          {stats.map(({ value, label, suffix, icon }, index) => {
            const Icon = resolveStatIcon(icon);
            return (
              <div key={`${label}-${index}`} className={`text-center ${cardClass} ${cardPaddingClass}`}>
                {Icon ? (
                  <div className={`mx-auto mb-4 flex items-center justify-center ${iconWrapperClass}`}>
                    <Icon size={iconPixelSize} className={iconTextClass} />
                  </div>
                ) : null}
                <div className="inline-flex items-baseline justify-center gap-2">
                  <p className={valueClass}>{value}</p>
                  {suffix ? <span className={`text-lg font-semibold ${labelClass}`}>{suffix}</span> : null}
                </div>
                <p className={`mt-2 ${labelClass}`}>{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
