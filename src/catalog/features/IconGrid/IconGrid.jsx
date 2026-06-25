import FeatureSectionHeader from "../FeatureSectionHeader";
import FeatureIconCard from "../FeatureIconCard";
import {
  FEATURE_STYLE_DEFAULTS,
  FEATURE_STYLE_PROP_SCHEMA,
  resolveFeatureStyles,
} from "../featureStyles";
import { SAMPLE_FEATURES } from "../defaultProps";

export const defaultProps = {
  heading: "Everything you need to ship faster",
  subheading:
    "A complete toolkit for modern product teams — from idea to production.",
  columns: 3,
  showTags: false,
  features: SAMPLE_FEATURES.slice(0, 6),
};

export const defaultStyles = { ...FEATURE_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Section title shown above the grid",
    },
    {
      name: "subheading",
      type: "string",
      default: defaultProps.subheading,
      allowedValues: 'Any string (use "" to hide)',
      description: "Supporting paragraph below the heading",
    },
    {
      name: "columns",
      type: "number",
      default: defaultProps.columns,
      allowedValues: "2 | 3",
      description:
        "Number of columns on desktop. Mobile is always 1 col, tablet always 2.",
    },
    {
      name: "showTags",
      type: "boolean",
      default: defaultProps.showTags,
      allowedValues: "true | false",
      description: "Show or hide the coloured tag pill on each card",
    },
    {
      name: "features",
      type: "Array<{ id, icon, tag, title, description }>",
      default: "[6 sample features]",
      allowedValues: "Array of feature objects",
      description:
        "List of feature cards to display. icon must be a valid Lucide icon name.",
    },
  ],
  styles: FEATURE_STYLE_PROP_SCHEMA,
};

export default function IconGrid({
  heading    = defaultProps.heading,
  subheading = defaultProps.subheading,
  columns    = defaultProps.columns,
  showTags   = defaultProps.showTags,
  features   = defaultProps.features,
  styles     = defaultStyles,
}) {
  const {
    sectionClass,
    inverted, accent, headingAlign,
    headingClass, headingStyle,
    subheadingClass, subheadingStyle,
    cardClass, cardStyle,
    titleClass, titleStyle,
    descClass, descStyle,
  } = resolveFeatureStyles(styles);

  const colClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`w-full ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <FeatureSectionHeader
          heading={heading}
          subheading={subheading}
          align={headingAlign}
          headingClass={headingClass}
          headingStyle={headingStyle}
          subheadingClass={subheadingClass}
          subheadingStyle={subheadingStyle}
        />

        <div className={`grid ${colClass} gap-6`}>
          {features.map((feature) => (
            <FeatureIconCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              tag={showTags ? feature.tag : null}
              accent={accent}
              inverted={inverted}
              cardClass={cardClass}
              cardStyle={cardStyle}
              titleClass={titleClass}
              titleStyle={titleStyle}
              descClass={descClass}
              descStyle={descStyle}
            />
          ))}
        </div>

      </div>
    </section>
  );
}