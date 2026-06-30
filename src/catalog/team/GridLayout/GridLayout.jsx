import { GRID_SIMPLE_DEFAULT_PROPS } from "../defaultProps";
import {
  resolveTeamStyles,
  TEAM_GRID_STYLE_PROP_SCHEMA,
  TEAM_STYLE_DEFAULTS,
} from "../teamStyles";

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
  styles: TEAM_GRID_STYLE_PROP_SCHEMA,
};

export default function GridSimple({
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
    cardClass,
  } = resolveTeamStyles(styles);

  return (
    <section className={sectionClass}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {heading || subheading ? (
          <div className="mb-12 text-center">
            {heading ? <h2 className={headingClass}>{heading}</h2> : null}
            {subheading ? <p className={subheadingClass}>{subheading}</p> : null}
          </div>
        ) : null}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className={`flex flex-col items-center p-6 text-center transition-all hover:shadow-md ${cardClass}`}
            >
              <div className="mb-4 h-24 w-24 shrink-0 overflow-hidden rounded-full bg-surface-muted ring-2 ring-border/20">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className={nameClass}>{member.name}</h3>
              <p className={`mt-1 ${roleClass}`}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
