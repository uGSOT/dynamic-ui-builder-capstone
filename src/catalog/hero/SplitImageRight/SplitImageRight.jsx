import HeroSectionHeader from "../HeroSectionHeader";
import HeroActionButtons from "../HeroActionButtons";
import HeroImage from "../HeroImage";
import {
  HERO_SPLIT_STYLE_DEFAULTS,
  HERO_SPLIT_STYLE_PROP_SCHEMA,
  resolveHeroStyles,
} from "../heroStyles";
import {
  SAMPLE_PRIMARY_ACTION,
  SAMPLE_SECONDARY_ACTION,
  SAMPLE_HERO_IMAGE,
} from "../defaultProps";

export const defaultProps = {
  headline: "Build your startup site in minutes",
  subtext:
    "Pick proven components, customize with JSON, and preview your landing page instantly — no design system required.",
  primaryAction: SAMPLE_PRIMARY_ACTION,
  secondaryAction: SAMPLE_SECONDARY_ACTION,
  image: SAMPLE_HERO_IMAGE,
};

export const defaultStyles = { ...HERO_SPLIT_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "headline",
      type: "string",
      default: defaultProps.headline,
      allowedValues: "Any string",
      description: "Main headline displayed beside the image",
    },
    {
      name: "subtext",
      type: "string",
      default: defaultProps.subtext,
      allowedValues: 'Any string (use "" to hide)',
      description: "Supporting text below the headline",
    },
    {
      name: "primaryAction",
      type: "{ label: string, href: string, variant?, size? }",
      default: defaultProps.primaryAction,
      allowedValues: "Button object with label and href",
      description: "Primary call-to-action button",
    },
    {
      name: "secondaryAction",
      type: "{ label: string, href: string, variant?, size? }",
      default: defaultProps.secondaryAction,
      allowedValues: "Button object with label and href",
      description: "Secondary call-to-action button",
    },
    {
      name: "image",
      type: "{ src?: string, alt?: string }",
      default: defaultProps.image,
      allowedValues: "Image object; renders a placeholder when src is omitted",
      description: "Product screenshot or mockup displayed on the right",
    },
  ],
  styles: HERO_SPLIT_STYLE_PROP_SCHEMA,
};

export default function SplitImageRight({
  headline = defaultProps.headline,
  subtext = defaultProps.subtext,
  primaryAction = defaultProps.primaryAction,
  secondaryAction = defaultProps.secondaryAction,
  image = defaultProps.image,
  styles = defaultStyles,
}) {
  const { className, textAlign, inverted } = resolveHeroStyles(styles);

  return (
    <section className={className}>
      <div className="mx-auto grid h-full w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <HeroSectionHeader
            headline={headline}
            subtext={subtext}
            textAlign={textAlign}
            inverted={inverted}
          />
          <div className="mt-8">
            <HeroActionButtons
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
              align={textAlign}
              inverted={inverted}
            />
          </div>
        </div>
        <HeroImage image={image} />
      </div>
    </section>
  );
}
