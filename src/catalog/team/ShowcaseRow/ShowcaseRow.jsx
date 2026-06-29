import { COMPACT_ROW_DEFAULT_PROPS } from "../defaultProps";
import { resolveTeamStyles, TEAM_STYLE_DEFAULTS, TEAM_STYLE_PROP_SCHEMA } from "../teamStyles";

export const defaultProps = { ...COMPACT_ROW_DEFAULT_PROPS };
export const defaultStyles = { ...TEAM_STYLE_DEFAULTS };

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
  styles: TEAM_STYLE_PROP_SCHEMA,
};

export default function CompactRow({
  heading = defaultProps.heading,
  subheading = defaultProps.subheading,
  members = defaultProps.members,
  styles = defaultStyles,
}) {
  const { 
    className, 
    headingClass, 
    subheadingClass,
    nameClass,
    roleClass,
    cardColorClass,
    cardBorderClass,
  } = resolveTeamStyles(styles);

  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {heading || subheading ? (
          <div className="text-center mb-10">
            {heading ? (
              <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${headingClass}`}>
                {heading}
              </h2>
            ) : null}
            {subheading ? (
              <p className={`mt-4 text-lg ${subheadingClass}`}>{subheading}</p>
            ) : null}
          </div>
        ) : null}

        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-3 rounded-full overflow-hidden bg-muted shrink-0 ring-2 ring-border/20 transition-all hover:ring-primary/30 hover:shadow-md">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-sm font-semibold ${nameClass}`}>{member.name}</h3>
              <p className={`text-xs mt-0.5 ${roleClass}`}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
