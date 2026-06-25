import * as LucideIcons from "lucide-react";
import FeatureSectionHeader from "../FeatureSectionHeader";
import FeatureImageSlot from "../FeatureImageSlot";
import {
  FEATURE_STYLE_DEFAULTS,
  FEATURE_STYLE_PROP_SCHEMA,
  resolveFeatureStyles,
} from "../featureStyles";
import { SAMPLE_FEATURES } from "../defaultProps";

// ─── Default props ────────────────────────────────────────────────────────────

export const defaultProps = {
  heading: "A deeper look at what we built",
  subheading:
    "Every feature is designed around real workflows — not checkboxes.",
  imagePosition: "right-first",
  showBullets: true,
  showTags: true,
  features: SAMPLE_FEATURES.slice(0, 3),
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
      description: "Section title",
    },
    {
      name: "subheading",
      type: "string",
      default: defaultProps.subheading,
      allowedValues: 'Any string (use "" to hide)',
      description: "Supporting paragraph below the heading",
    },
    {
      name: "imagePosition",
      type: "string",
      default: defaultProps.imagePosition,
      allowedValues: '"right-first" | "left-first"',
      description:
        "Which side the image appears on for the first row. Rows alternate automatically after that.",
    },
    {
      name: "showBullets",
      type: "boolean",
      default: defaultProps.showBullets,
      allowedValues: "true | false",
      description: "Show or hide the bullet checklist on each row",
    },
    {
      name: "showTags",
      type: "boolean",
      default: defaultProps.showTags,
      allowedValues: "true | false",
      description: "Show or hide the tag pill above each row title",
    },
    {
      name: "features",
      type: "Array<{ id, icon, tag, title, description, bullets, image }>",
      default: "[3 sample features]",
      allowedValues: "Array of feature objects",
      description: "Feature rows to display. Recommend 2–4 items.",
    },
  ],
  styles: FEATURE_STYLE_PROP_SCHEMA,
};

// ─── Sub-component: one alternating row ───────────────────────────────────────

function FeatureRow({
  feature,
  imageOnRight,
  showBullets,
  showTags,
  accent,
  inverted,
}) {
  const titleColor = inverted ? "text-white" : "text-gray-900";
  const descColor  = inverted ? "text-gray-300" : "text-gray-500";
  const bulletColor = inverted ? "text-gray-300" : "text-gray-600";

  return (
    <div
      className={`flex flex-col gap-10 lg:items-center ${
        imageOnRight ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Copy side */}
      <div className="flex-1">
        {/* Tag */}
        {showTags && feature.tag && (
          <span
            className={`mb-4 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${accent.tagBg} ${accent.tagText}`}
          >
            {feature.tag}
          </span>
        )}

        {/* Title */}
        <h3 className={`text-2xl font-bold tracking-tight sm:text-3xl ${titleColor}`}>
          {feature.title}
        </h3>

        {/* Description */}
        <p className={`mt-4 text-base leading-relaxed ${descColor}`}>
          {feature.description}
        </p>

        {/* Bullets */}
        {showBullets && Array.isArray(feature.bullets) && feature.bullets.length > 0 && (
          <ul className="mt-6 space-y-2">
            {feature.bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <LucideIcons.Check
                  size={16}
                  className={`shrink-0 ${accent.iconText}`}
                />
                <span className={`text-sm ${bulletColor}`}>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Image side */}
      <div className="flex-1">
        <FeatureImageSlot
          src={feature.image}
          alt={feature.title}
          icon={feature.icon}
          accent={accent}
          className="h-64 lg:h-80"
        />
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * AlternatingRows
 *
 * Feature rows where the image and copy alternate sides with each row.
 * Best for a deep-dive on 2–4 key capabilities.
 *
 * @param {string}  heading                          - Section heading
 * @param {string}  [subheading]                     - Optional subheading
 * @param {"right-first"|"left-first"} [imagePosition] - Image side for first row
 * @param {boolean} [showBullets=true]               - Show bullet lists
 * @param {boolean} [showTags=true]                  - Show tag pills
 * @param {Array}   features                         - Feature row objects
 * @param {object}  [styles]                         - Style overrides
 */
export default function AlternatingRows({
  heading       = defaultProps.heading,
  subheading    = defaultProps.subheading,
  imagePosition = defaultProps.imagePosition,
  showBullets   = defaultProps.showBullets,
  showTags      = defaultProps.showTags,
  features      = defaultProps.features,
  styles        = defaultStyles,
}) {
  const { sectionClass, inverted, accent, headingAlign } = resolveFeatureStyles(styles);

  return (
    <section className={`w-full ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <FeatureSectionHeader
          heading={heading}
          subheading={subheading}
          inverted={inverted}
          align={headingAlign}
        />

        <div className="flex flex-col gap-20">
          {features.map((feature, index) => {
            const imageOnRight =
              imagePosition === "right-first"
                ? index % 2 === 0
                : index % 2 !== 0;

            return (
              <FeatureRow
                key={feature.id}
                feature={feature}
                imageOnRight={imageOnRight}
                showBullets={showBullets}
                showTags={showTags}
                accent={accent}
                inverted={inverted}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
