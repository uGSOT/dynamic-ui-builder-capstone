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
  headline: "The app your team actually wants to use",
  subtext:
    "Beautiful, fast, and intuitive — designed for mobile-first teams who need clarity without complexity.",
  primaryAction: { ...SAMPLE_PRIMARY_ACTION, label: "Download app" },
  secondaryAction: { ...SAMPLE_SECONDARY_ACTION, label: "Watch video" },
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
      description: "Product image displayed on the left",
    },
  ],
  styles: HERO_SPLIT_STYLE_PROP_SCHEMA,
};

export default function SplitImageLeft({
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
        <HeroImage image={image} className="order-2 lg:order-1" />
        <div className="order-1 lg:order-2">
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
      </div>
    </section>
  );
}
