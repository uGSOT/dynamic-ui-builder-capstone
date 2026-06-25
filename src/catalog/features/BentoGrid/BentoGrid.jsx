import FeatureSectionHeader from "../FeatureSectionHeader";
import FeatureIconCard from "../FeatureIconCard";
import {
  FEATURE_STYLE_DEFAULTS,
  FEATURE_STYLE_PROP_SCHEMA,
  resolveFeatureStyles,
} from "../featureStyles";
import { SAMPLE_BENTO_FEATURES } from "../defaultProps";

// ─── Default props ────────────────────────────────────────────────────────────

export const defaultProps = {
  heading: "The platform built for what's next",
  subheading:
    "Every capability you need — assembled into a single coherent product.",
  features: SAMPLE_BENTO_FEATURES,
};

export const defaultStyles = { ...FEATURE_STYLE_DEFAULTS };

// ─── Prop schema ──────────────────────────────────────────────────────────────

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

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * BentoGrid
 *
 * Asymmetric card grid: 1 large hero card, 2 medium cards, 4 small cards.
 *
 * Layout on desktop:
 *   [ hero (2 cols, 2 rows) ][ medium ]
 *   [ hero (2 cols, 2 rows) ][ medium ]
 *   [ small ][ small ][ small ][ small ]
 *
 * On mobile all cards stack vertically.
 *
 * @param {string}  heading      - Section heading
 * @param {string}  [subheading] - Optional subheading
 * @param {Array}   features     - Feature objects with slot field
 * @param {object}  [styles]     - Style overrides
 */
export default function BentoGrid({
  heading    = defaultProps.heading,
  subheading = defaultProps.subheading,
  features   = defaultProps.features,
  styles     = defaultStyles,
}) {
  const { sectionClass, inverted, accent, headingAlign } = resolveFeatureStyles(styles);

  const hero   = features.filter((f) => f.slot === "hero");
  const medium = features.filter((f) => f.slot === "medium");
  const small  = features.filter((f) => f.slot === "small");

  return (
    <section className={`w-full ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <FeatureSectionHeader
          heading={heading}
          subheading={subheading}
          inverted={inverted}
          align={headingAlign}
        />

        {/*
          Top block: hero (col-span-2, row-span-2) + medium stack (col-span-1)
          Uses a 3-column grid. Hero takes 2 cols, mediums take 1 col each.
        */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* Hero card */}
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
            />
          ))}

          {/* Medium cards */}
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
            />
          ))}

          {/* Small cards — nested 4-column grid spanning all 3 cols */}
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
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
