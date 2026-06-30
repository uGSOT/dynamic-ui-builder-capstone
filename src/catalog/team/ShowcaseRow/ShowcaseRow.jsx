import { COMPACT_ROW_DEFAULT_PROPS } from "../defaultProps";
import {
  resolveTeamStyles,
  TEAM_COMPACT_STYLE_PROP_SCHEMA,
  TEAM_STYLE_DEFAULTS,
} from "../teamStyles";

export const defaultProps = { ...COMPACT_ROW_DEFAULT_PROPS };
export const defaultStyles = { ...TEAM_STYLE_DEFAULTS, titleSize: "sm" };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Section heading",
    },
    {
      name: "subheading",
      type: "string",
      default: defaultProps.subheading,
      allowedValues: 'Any string (use "" to hide)',
      description: "Supporting text below the heading",
    },
    {
      name: "members",
      type: "Array<{ name: string, role: string, avatar: string, bio?: string, links?: Array<{ type: string, url: string }> }>",
      default: defaultProps.members,
      allowedValues: "Array of team member objects",
      description: "Team members shown in a compact grid layout (6 members recommended)",
    },
  ],
  styles: TEAM_COMPACT_STYLE_PROP_SCHEMA,
};

export default function CompactRow({
  heading = defaultProps.heading,
  subheading = defaultProps.subheading,
  members = defaultProps.members,
  styles = defaultStyles,
}) {
  const {
    sectionClass,
    headingClass,
    subheadingClass,
    nameClass,
    roleClass,
  } = resolveTeamStyles(styles);

  return (
    <section className={sectionClass}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {heading || subheading ? (
          <div className="mb-10 text-center">
            {heading ? <h2 className={headingClass}>{heading}</h2> : null}
            {subheading ? <p className={subheadingClass}>{subheading}</p> : null}
          </div>
        ) : null}

        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, index) => (
            <div key={`${member.name}-${index}`} className="flex flex-col items-center text-center">
              <div className="mb-3 h-20 w-20 shrink-0 overflow-hidden rounded-full bg-surface-muted ring-2 ring-border/20 transition-all hover:shadow-md hover:ring-brand/30">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className={nameClass}>{member.name}</h3>
              <p className={`mt-0.5 text-xs ${roleClass}`}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
