import { GRID_SIMPLE_DEFAULT_PROPS } from "../defaultProps";
import { resolveTeamStyles, TEAM_STYLE_DEFAULTS, TEAM_STYLE_PROP_SCHEMA } from "../teamStyles";

export const defaultProps = { ...GRID_SIMPLE_DEFAULT_PROPS };
export const defaultStyles = { ...TEAM_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "heading",
      type: "string",
      default: defaultProps.heading,
      allowedValues: "Any string",
      description: "Optional section heading",
    },
    {
      name: "subheading",
      type: "string",
      default: defaultProps.subheading,
      allowedValues: 'Any string (use "" to hide)',
      description: "Optional supporting text",
    },
    {
      name: "members",
      type: "Array<{ name: string, role: string, avatar: string, bio?: string, links?: Array<{ type: string, url: string }> }>",
      default: defaultProps.members,
      allowedValues: "Array of team member objects",
      description: "Team members shown in a responsive grid with name and role",
    },
  ],
  styles: TEAM_STYLE_PROP_SCHEMA,
};

export default function GridSimple({
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
          <div className="text-center mb-12">
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className={`flex flex-col items-center text-center rounded-lg p-6 transition-all hover:shadow-md ${cardColorClass} ${cardBorderClass}`}
            >
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-surface-muted shrink-0 ring-2 ring-border/20">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-base font-semibold ${nameClass}`}>{member.name}</h3>
              <p className={`text-sm mt-1 ${roleClass}`}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
