import Icon from "../../../components/ui/Icon";
import { DEFAULT_MINIMAL_CENTERED_PROPS } from "../defaultProps";
import {
  FOOTER_STYLE_DEFAULTS,
  FOOTER_STYLE_PROP_SCHEMA,
  resolveFooterStyles,
} from "../footerStyles";

export const defaultProps = { ...DEFAULT_MINIMAL_CENTERED_PROPS };
export const defaultStyles = { ...FOOTER_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    { name: "logo",        type: '{ type: "text", text: string, icon?: string } | { type: "image", src: string, alt?: string }', default: defaultProps.logo,        allowedValues: "Text logo with optional Lucide icon or image logo object", description: "Brand logo rendered in the center" },
    { name: "links",       type: "Array<{ label: string, href: string }>",                                                        default: defaultProps.links,       allowedValues: "List of links to render in a horizontal row",             description: "Centered navigation links" },
    { name: "copyright",   type: "string",                                                                                        default: defaultProps.copyright,   allowedValues: "Any copyright text",                                      description: "Standard copyright statement" },
    { name: "socialLinks", type: "Array<{ platform: string, href: string, icon: string }>",                                       default: defaultProps.socialLinks, allowedValues: "List of social profiles",                                 description: "Social media links below navigation row" },
    { name: "backToTop",   type: "{ enabled: boolean, label?: string }",                                                          default: defaultProps.backToTop,   allowedValues: "Boolean to toggle and custom button label",               description: "Scroll to top helper configuration" },
  ],
  styles: FOOTER_STYLE_PROP_SCHEMA,
};

export default function MinimalCentered({
  logo        = defaultProps.logo,
  links       = defaultProps.links,
  copyright   = defaultProps.copyright,
  socialLinks = defaultProps.socialLinks,
  backToTop   = defaultProps.backToTop,
  styles      = defaultStyles,
}) {
  const {
    sectionClass, logoClass, headingClass,
    descClass, linkClass, borderClass, iconClass,
  } = resolveFooterStyles(styles);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const renderLogo = () => {
    if (logo?.type === "image" && logo.src) {
      return <img src={logo.src} alt={logo.alt ?? "Logo"} className={`w-auto ${logoClass}`} />;
    }
    return (
      <div className="flex items-center justify-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e50913]">
          <Icon name={logo?.icon ?? "Layers"} size={18} className="text-white" />
        </div>
        <span className={`font-extrabold tracking-tight text-lg ${logoClass}`}>
          {logo?.text ?? "Acme"}
        </span>
      </div>
    );
  };

  return (
    <footer className={`transition-colors duration-200 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">

        <div className="flex justify-center">{renderLogo()}</div>

        {links?.length > 0 && (
          <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {links.map((link, idx) => (
              <a key={idx} href={link.href} className={`font-medium transition-colors hover:opacity-80 ${linkClass}`}>
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {socialLinks?.length > 0 && (
          <div className="flex justify-center items-center gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className={`flex h-9 w-9 items-center justify-center border transition-all ${iconClass}`}
              >
                <Icon name={social.icon} size={18} />
              </a>
            ))}
          </div>
        )}

        <div className={`border-t ${borderClass} pt-8 flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <span className={descClass}>{copyright}</span>
          {backToTop?.enabled && (
            <button
              onClick={handleScrollTop}
              aria-label="Back to top"
              className={`inline-flex items-center gap-1.5 font-medium transition-colors hover:opacity-80 ${linkClass}`}
            >
              <span>{backToTop.label ?? "Back to Top"}</span>
              <Icon name="ArrowUp" size={14} />
            </button>
          )}
        </div>

      </div>
    </footer>
  );
}