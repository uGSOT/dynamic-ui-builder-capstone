import HeroSectionHeader from "../HeroSectionHeader";
import HeroActionButtons from "../HeroActionButtons";
import HeroSocialProof from "../HeroSocialProof";
import {
  HERO_SOCIAL_PROOF_STYLE_DEFAULTS,
  HERO_SOCIAL_PROOF_STYLE_PROP_SCHEMA,
  resolveHeroStyles,
} from "../heroStyles";
import {
  SAMPLE_PRIMARY_ACTION,
  SAMPLE_SECONDARY_ACTION,
  SAMPLE_SOCIAL_PROOF,
} from "../defaultProps";

export const defaultProps = {
  headline: "Loved by teams shipping at scale",
  subtext:
    "Join thousands of startups using our platform to launch faster, iterate confidently, and grow without friction.",
  primaryAction: { ...SAMPLE_PRIMARY_ACTION, label: "Get started free" },
  secondaryAction: SAMPLE_SECONDARY_ACTION,
  socialProof: SAMPLE_SOCIAL_PROOF,
};

export const defaultStyles = { ...HERO_SOCIAL_PROOF_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "headline",
      type: "string",
      default: defaultProps.headline,
      allowedValues: "Any string",
      description: "Main headline displayed above the CTAs",
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
      name: "socialProof",
      type: "{ label: string, avatars: Array<{ initials: string, color?: string }> }",
      default: defaultProps.socialProof,
      allowedValues: "Trust badge with label and avatar initials stack",
      description: "Social proof row displayed below the CTAs",
    },
  ],
  styles: HERO_SOCIAL_PROOF_STYLE_PROP_SCHEMA,
};

export default function WithSocialProof({
  headline = defaultProps.headline,
  subtext = defaultProps.subtext,
  primaryAction = defaultProps.primaryAction,
  secondaryAction = defaultProps.secondaryAction,
  socialProof = defaultProps.socialProof,
  styles = defaultStyles,
}) {
  const { className, textAlign, inverted } = resolveHeroStyles(styles);

  return (
    <section className={className}>
      <div className="mx-auto flex h-full w-full max-w-3xl items-center px-4 sm:px-6">
        <div className="w-full">
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
          <HeroSocialProof socialProof={socialProof} inverted={inverted} />
        </div>
      </div>
    </section>
  );
}
