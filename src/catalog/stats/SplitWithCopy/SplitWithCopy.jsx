import { SPLIT_WITH_COPY_DEFAULT_PROPS } from "../defaultProps";
import { resolveStatsStyles, STATS_STYLE_DEFAULTS, STATS_STYLE_PROP_SCHEMA } from "../statsStyles";
import { resolveStatIcon } from "../statsIcons";

export const defaultProps = { ...SPLIT_WITH_COPY_DEFAULT_PROPS };
export const defaultStyles = { ...STATS_STYLE_DEFAULTS, cardShadow: "none", headingAlign: "left", cardPaddingY: 6 };

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

export default function SplitWithCopy({
  heading = defaultProps.heading,
  body = defaultProps.body,
  stats = defaultProps.stats,
  styles = defaultStyles,
}) {
  const {
    sectionClass,
    headingClass,
    subheadingClass,
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
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            {heading ? <h2 className={headingClass}>{heading}</h2> : null}
            {body ? <p className={`mt-6 max-w-2xl leading-8 ${subheadingClass}`}>{body}</p> : null}
          </div>

          <div className="max-h-[22rem] min-h-0 space-y-4 overflow-y-auto pr-1 lg:max-h-[24rem]">
            {stats.map(({ value, label, suffix, icon }, index) => {
              const Icon = resolveStatIcon(icon);
              return (
                <div key={`${label}-${index}`} className={cardClass}>
                  <div className={cardPaddingClass}>
                    {Icon ? (
                      <div className={`mb-4 flex items-center justify-center ${iconWrapperClass}`}>
                        <Icon size={iconPixelSize} className={iconTextClass} />
                      </div>
                    ) : null}
                    <div className="flex items-baseline gap-2">
                      <p className={valueClass}>{value}</p>
                      {suffix ? <span className={`text-lg font-semibold ${labelClass}`}>{suffix}</span> : null}
                    </div>
                    <p className={`mt-2 ${labelClass}`}>{label}</p>
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
