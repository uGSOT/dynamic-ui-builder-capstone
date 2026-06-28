import React from "react";
import Icon from "../../../components/ui/Icon";
import { DEFAULT_MULTI_COLUMN_PROPS } from "../defaultProps";
import {
  FOOTER_STYLE_DEFAULTS,
  FOOTER_STYLE_PROP_SCHEMA,
  resolveFooterStyles,
} from "../footerStyles";

export const defaultProps = {
  ...DEFAULT_MULTI_COLUMN_PROPS,
};

export const defaultStyles = {
  ...FOOTER_STYLE_DEFAULTS,
};

export const propSchema = {
  props: [
    {
      name: "logo",
      type: '{ type: "text", text: string, icon?: string } | { type: "image", src: string, alt?: string }',
      default: defaultProps.logo,
      allowedValues: "Text logo with optional Lucide icon or image logo object",
      description: "Brand logo rendered in the top-left area",
    },
    {
      name: "tagline",
      type: "string",
      default: defaultProps.tagline,
      allowedValues: "Any string",
      description: "Supporting description text below the logo",
    },
    {
      name: "columns",
      type: "Array<{ title: string, links: Array<{ label: string, href: string }> }>",
      default: defaultProps.columns,
      allowedValues: "Array of link column configurations",
      description: "Footer navigation columns",
    },
    {
      name: "socialLinks",
      type: "Array<{ platform: string, href: string, icon: string }>",
      default: defaultProps.socialLinks,
      allowedValues: "List of social profiles with platform keys",
      description: "Social media profiles and destinations",
    },
    {
      name: "copyright",
      type: "string",
      default: defaultProps.copyright,
      allowedValues: "Any copyright text",
      description: "Standard copyright statement",
    },
    {
      name: "legalLinks",
      type: "Array<{ label: string, href: string }>",
      default: defaultProps.legalLinks,
      allowedValues: "List of links to display next to the copyright",
      description: "Legal policies or secondary terms links",
    },
    {
      name: "contactInfo",
      type: "{ email?: string, phone?: string }",
      default: defaultProps.contactInfo,
      allowedValues: "Contact details object containing email or phone",
      description: "Optional contact numbers or addresses",
    },
    {
      name: "backToTop",
      type: "{ enabled: boolean, label?: string }",
      default: defaultProps.backToTop,
      allowedValues: "Boolean to toggle and custom button label",
      description: "Scroll to top helper configuration",
    },
  ],
  styles: FOOTER_STYLE_PROP_SCHEMA,
};

export default function MultiColumn({
  logo = defaultProps.logo,
  tagline = defaultProps.tagline,
  columns = defaultProps.columns,
  socialLinks = defaultProps.socialLinks,
  copyright = defaultProps.copyright,
  legalLinks = defaultProps.legalLinks,
  contactInfo = defaultProps.contactInfo,
  backToTop = defaultProps.backToTop,
  styles = defaultStyles,
}) {
  const { className, inverted } = resolveFooterStyles(styles);

  // Dynamic Theme Styling
  const titleClass = inverted ? "text-ink-inverse" : "text-ink";
  const descClass = inverted ? "text-ink-inverse-muted" : "text-ink-muted";
  const linkClass = inverted
    ? "text-ink-inverse-muted hover:text-ink-inverse"
    : "text-ink-muted hover:text-ink";
  const borderClass = inverted ? "border-border-dark" : "border-border";
  const iconClass = inverted
    ? "text-ink-inverse-muted hover:text-ink-inverse hover:bg-navy-elevated"
    : "text-ink-muted hover:text-ink hover:bg-surface-subtle";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Logo rendering helper
  const renderLogo = () => {
    if (logo?.type === "image" && logo.src) {
      return (
        <div className="flex h-10 items-center">
          <img src={logo.src} alt={logo.alt ?? "Logo"} className="h-8 w-auto" />
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand shadow-sm shadow-brand/10">
          <Icon name={logo?.icon ?? "Layers"} size={20} className="text-white" />
        </div>
        <span className={`font-extrabold text-xl tracking-tight ${titleClass}`}>
          {logo?.text ?? "SaaSkit"}
        </span>
      </div>
    );
  };

  return (
    <footer className={`transition-colors duration-200 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12">
          
          {/* Logo & Tagline Column */}
          <div className="col-span-1 md:col-span-4 lg:col-span-5 space-y-4">
            {renderLogo()}
            {tagline && (
              <p className={`max-w-xs text-sm leading-relaxed ${descClass}`}>
                {tagline}
              </p>
            )}
            
            {/* Social media icons below logo column in multi-column layout */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border ${borderClass} ${iconClass} transition-all`}
                    aria-label={social.platform}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Links & Contact Columns */}
          <div className="col-span-1 md:col-span-8 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {columns.map((column, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className={`text-xs font-semibold tracking-wider ${titleClass}`}>
                  {column.title}
                </h3>
                <ul className="space-y-2.5">
                  {column.links?.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className={`text-sm transition-colors duration-150 ${linkClass}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column (rendered if contactInfo exists) */}
            {contactInfo && (contactInfo.email || contactInfo.phone) && (
              <div className="space-y-4">
                <h3 className={`text-xs font-semibold tracking-wider ${titleClass}`}>
                  CONTACT
                </h3>
                <ul className="space-y-2.5">
                  {contactInfo.email && (
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Mail" size={16} className={`h-4 w-4 shrink-0 ${descClass}`} />
                      <a href={`mailto:${contactInfo.email}`} className={`hover:underline ${linkClass}`}>
                        {contactInfo.email}
                      </a>
                    </li>
                  )}
                  {contactInfo.phone && (
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Phone" size={16} className={`h-4 w-4 shrink-0 ${descClass}`} />
                      <a href={`tel:${contactInfo.phone}`} className={`hover:underline ${linkClass}`}>
                        {contactInfo.phone}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
          
        </div>

        {/* Bottom Row */}
        <div className={`border-t ${borderClass} pt-8 flex flex-col md:flex-row items-center justify-between gap-4`}>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span className={`text-xs ${descClass}`}>
              {copyright}
            </span>
            {legalLinks && legalLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {legalLinks.map((link, idx) => (
                  <React.Fragment key={idx}>
                    <span className={`text-xs ${descClass} hidden sm:inline`}>•</span>
                    <a
                      href={link.href}
                      className={`text-xs transition-colors ${linkClass}`}
                    >
                      {link.label}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* Optional Back to Top button */}
          {backToTop?.enabled && (
            <button
              onClick={handleScrollTop}
              className={`inline-flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors ${linkClass}`}
              aria-label="Back to top"
            >
              <span>{backToTop.label ?? "Back to Top"}</span>
              <Icon name="ArrowUp" size={14} className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        
      </div>
    </footer>
  );
}
