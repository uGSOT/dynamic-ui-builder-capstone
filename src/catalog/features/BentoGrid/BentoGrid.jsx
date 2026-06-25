import FeatureSectionHeader from "../FeatureSectionHeader";
import FeatureIconCard from "../FeatureIconCard";
import {
  FEATURE_STYLE_DEFAULTS,
  FEATURE_STYLE_PROP_SCHEMA,
  resolveFeatureStyles,
} from "../featureStyles";
import { SAMPLE_BENTO_FEATURES } from "../defaultProps";

export const defaultProps = {
  heading: "The platform built for what's next",
  subheading:
    "Every capability you need — assembled into a single coherent product.",
  features: SAMPLE_BENTO_FEATURES,
};

export const defaultStyles = { ...FEATURE_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Section title above the bento grid",
    },
    {
      name: "subheading",
      type: "string",
      default: defaultProps.subheading,
      allowedValues: 'Any string (use "" to hide)',
      description: "Supporting paragraph below the heading",
    },
    {
      name: "features",
      type: "Array<{ id, slot, icon, tag, title, description, highlight }>",
      default: "[7 sample features]",
      allowedValues: "Array of feature objects",
      description:
        'Feature cards. slot controls card size: "hero" = large, "medium" = tall, "small" = compact. Recommended: 1 hero + 2 medium + 4 small.',
    },
  ],
  styles: FEATURE_STYLE_PROP_SCHEMA,
};

export default function BentoGrid({
  heading    = defaultProps.heading,
  subheading = defaultProps.subheading,
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

  const hero   = features.filter((f) => f.slot === "hero");
  const medium = features.filter((f) => f.slot === "medium");
  const small  = features.filter((f) => f.slot === "small");

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

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {hero.map((f) => (
            <FeatureIconCard
              key={f.id}
              icon={f.icon}
              title={f.title}
              description={f.description}
              tag={f.tag}
              highlight={f.highlight}
              accent={accent}
              inverted={inverted}
              iconSize={28}
              className="lg:col-span-2 lg:row-span-2 min-h-[260px]"
              cardClass={cardClass}
              cardStyle={cardStyle}
              titleClass={titleClass}
              titleStyle={titleStyle}
              descClass={descClass}
              descStyle={descStyle}
            />
          ))}

          {medium.map((f) => (
            <FeatureIconCard
              key={f.id}
              icon={f.icon}
              title={f.title}
              description={f.description}
              tag={f.tag}
              highlight={f.highlight}
              accent={accent}
              inverted={inverted}
              iconSize={20}
              className="lg:col-span-1"
              cardClass={cardClass}
              cardStyle={cardStyle}
              titleClass={titleClass}
              titleStyle={titleStyle}
              descClass={descClass}
              descStyle={descStyle}
            />
          ))}

          {small.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
              {small.map((f) => (
                <FeatureIconCard
                  key={f.id}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                  tag={f.tag}
                  highlight={f.highlight}
                  accent={accent}
                  inverted={inverted}
                  iconSize={16}
                  cardClass={cardClass}
                  cardStyle={cardStyle}
                  titleClass={titleClass}
                  titleStyle={titleStyle}
                  descClass={descClass}
                  descStyle={descStyle}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}