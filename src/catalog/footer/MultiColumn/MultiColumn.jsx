import React from "react";
import Icon from "../../../components/ui/Icon";
import { DEFAULT_MULTI_COLUMN_PROPS } from "../defaultProps";
import {
  FOOTER_STYLE_DEFAULTS,
  FOOTER_STYLE_PROP_SCHEMA,
  resolveFooterStyles,
} from "../footerStyles";

export const defaultProps = { ...DEFAULT_MULTI_COLUMN_PROPS };
export const defaultStyles = { ...FOOTER_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    { name: "logo", type: '{ type: "text", text: string, icon?: string } | { type: "image", src: string, alt?: string }', default: defaultProps.logo, allowedValues: "Text logo with optional Lucide icon or image logo object", description: "Brand logo in the top-left area" },
    { name: "tagline", type: "string", default: defaultProps.tagline, allowedValues: "Any string", description: "Supporting description below the logo" },
    { name: "columns", type: "Array<{ title: string, links: Array<{ label: string, href: string }> }>", default: defaultProps.columns, allowedValues: "Array of link column configurations", description: "Footer navigation columns" },
    { name: "socialLinks", type: "Array<{ platform: string, href: string, icon: string }>", default: defaultProps.socialLinks, allowedValues: "List of social profiles", description: "Social media profiles" },
    { name: "copyright", type: "string", default: defaultProps.copyright, allowedValues: "Any copyright text", description: "Standard copyright statement" },
    { name: "legalLinks", type: "Array<{ label: string, href: string }>", default: defaultProps.legalLinks, allowedValues: "List of links", description: "Legal or secondary links" },
    { name: "contactInfo", type: "{ email?: string, phone?: string }", default: defaultProps.contactInfo, allowedValues: "Contact details object", description: "Optional contact details" },
    { name: "backToTop", type: "{ enabled: boolean, label?: string }", default: defaultProps.backToTop, allowedValues: "Boolean to toggle and custom button label", description: "Scroll to top helper" },
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
  const {
    sectionClass,
    logoClass,
    headingClass,
    descClass,
    linkClass,
    borderClass,
    iconClass,
  } = resolveFooterStyles(styles);

  const handleScrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const renderLogo = () => {
    if (logo?.type === "image" && logo.src) {
      return (
        <div className="flex h-10 items-center">
          <img
            src={logo.src}
            alt={logo.alt ?? "Logo"}
            className={`h-8 w-auto ${logoClass}`}
          />
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e50913]">
          <Icon
            name={logo?.icon ?? "Layers"}
            size={20}
            className="text-white"
          />
        </div>

        <span className={`font-extrabold tracking-tight text-xl ${logoClass}`}>
          {logo?.text ?? "SaaSkit"}
        </span>
      </div>
    );
  };

  return (
    <footer className={`transition-colors duration-200 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12">

          {/* Logo + tagline + social */}
          <div className="col-span-1 md:col-span-4 lg:col-span-5 space-y-4">

            {renderLogo()}

            {tagline && (
              <p className={`max-w-xs text-sm leading-relaxed ${descClass}`}>
                {tagline}
              </p>
            )}

            {socialLinks?.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border ${borderClass} ${iconClass} transition-all`}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            )}

          </div>


          {/* Link columns + contact */}
          <div className="col-span-1 md:col-span-8 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">

            {columns.map((column, idx) => (
              <div key={idx} className="space-y-4">

                <h3 className={`text-xs font-semibold tracking-wider ${headingClass}`}>
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


            {contactInfo &&
              (contactInfo.email || contactInfo.phone) && (
                <div className="space-y-4">

                  <h3 className={`text-xs font-semibold tracking-wider ${headingClass}`}>
                    CONTACT
                  </h3>

                  <ul className="space-y-2.5">

                    {contactInfo.email && (
                      <li className="flex items-center gap-2 text-sm">
                        <Icon
                          name="Mail"
                          size={16}
                          className={`h-4 w-4 shrink-0 ${descClass}`}
                        />

                        <a
                          href={`mailto:${contactInfo.email}`}
                          className={`hover:underline ${linkClass}`}
                        >
                          {contactInfo.email}
                        </a>
                      </li>
                    )}

                    {contactInfo.phone && (
                      <li className="flex items-center gap-2 text-sm">
                        <Icon
                          name="Phone"
                          size={16}
                          className={`h-4 w-4 shrink-0 ${descClass}`}
                        />

                        <a
                          href={`tel:${contactInfo.phone}`}
                          className={`hover:underline ${linkClass}`}
                        >
                          {contactInfo.phone}
                        </a>
                      </li>
                    )}

                  </ul>

                </div>
              )}

          </div>

        </div>


        {/* Bottom row */}
        <div className={`border-t ${borderClass} pt-8 flex flex-col md:flex-row items-center justify-between gap-4`}>

          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">

            <span className={`text-xs ${descClass}`}>
              {copyright}
            </span>


            {legalLinks?.length > 0 && (
              <div className="flex items-center gap-3">

                {legalLinks.map((link, idx) => (
                  <React.Fragment key={idx}>

                    <span className={`text-xs ${descClass} hidden sm:inline`}>
                      •
                    </span>

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


          {backToTop?.enabled && (
            <button
              onClick={handleScrollTop}
              aria-label="Back to top"
              className={`inline-flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors ${linkClass}`}
            >
              <span>
                {backToTop.label ?? "Back to Top"}
              </span>

              <Icon name="ArrowUp" size={14} />

            </button>
          )}

        </div>

      </div>
    </footer>
  );
}