import { GRID_WITH_BIO_DEFAULT_PROPS } from "../defaultProps";
import { resolveTeamStyles, TEAM_STYLE_DEFAULTS, TEAM_STYLE_PROP_SCHEMA } from "../teamStyles";

export const defaultProps = { ...GRID_WITH_BIO_DEFAULT_PROPS };
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
      description: "Team members with image, name, role, and bio",
    },
  ],
  styles: TEAM_STYLE_PROP_SCHEMA,
};

export default function GridWithBio({
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
    bioClass,
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className={`rounded-lg p-6 transition-all hover:shadow-lg ${cardColorClass} ${cardBorderClass}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-muted shrink-0 ring-2 ring-border/20">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-base font-semibold ${nameClass}`}>{member.name}</h3>
                  <p className={`text-sm mt-0.5 font-medium ${roleClass}`}>{member.role}</p>
                </div>
              </div>
              
              {member.bio ? (
                <p className={`text-sm leading-relaxed ${bioClass} mb-4`}>{member.bio}</p>
              ) : null}
              
              {member.links && member.links.length > 0 ? (
                <div className="mt-4 pt-4 border-t border-border/30 flex gap-2">
                  {member.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex h-7 w-7 items-center justify-center rounded transition-colors hover:bg-brand/10`}
                      title={link.type}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        {link.type === 'twitter' && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 0a10.664 10.664 0 00-9.12-5.5z"/>}
                        {link.type === 'linkedin' && <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>}
                        {link.type === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>}
                      </svg>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
