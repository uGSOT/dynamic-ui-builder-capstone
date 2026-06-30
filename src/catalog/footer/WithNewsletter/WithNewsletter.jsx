import React, { useState } from "react";
import Icon from "../../../components/ui/Icon";
import { DEFAULT_WITH_NEWSLETTER_PROPS } from "../defaultProps";
import {
  FOOTER_STYLE_DEFAULTS,
  FOOTER_STYLE_PROP_SCHEMA,
  resolveFooterStyles,
} from "../footerStyles";

export const defaultProps = { ...DEFAULT_WITH_NEWSLETTER_PROPS };
export const defaultStyles = { ...FOOTER_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    { name: "logo", type: '{ type: "text", text: string, icon?: string } | { type: "image", src: string, alt?: string }', default: defaultProps.logo, allowedValues: "Text logo with optional Lucide icon or image logo object", description: "Brand logo in the footer" },
    { name: "tagline", type: "string", default: defaultProps.tagline, allowedValues: "Any string", description: "Supporting text below the logo" },
    { name: "newsletter", type: "{ title: string, description: string, placeholder?: string, buttonText?: string }", default: defaultProps.newsletter, allowedValues: "Newsletter banner settings", description: "Newsletter signup row" },
    { name: "columns", type: "Array<{ title: string, links: Array<{ label: string, href: string }> }>", default: defaultProps.columns, allowedValues: "List of footer navigation columns", description: "Navigation columns" },
    { name: "socialLinks", type: "Array<{ platform: string, href: string, icon: string }>", default: defaultProps.socialLinks, allowedValues: "List of social profiles", description: "Social media profiles" },
    { name: "copyright", type: "string", default: defaultProps.copyright, allowedValues: "Any copyright text", description: "Copyright statement" },
    { name: "backToTop", type: "{ enabled: boolean, label?: string }", default: defaultProps.backToTop, allowedValues: "Boolean to toggle and custom button label", description: "Scroll to top helper" },
  ],
  styles: FOOTER_STYLE_PROP_SCHEMA,
};

export default function WithNewsletter({
  logo = defaultProps.logo,
  tagline = defaultProps.tagline,
  newsletter = defaultProps.newsletter,
  columns = defaultProps.columns,
  socialLinks = defaultProps.socialLinks,
  copyright = defaultProps.copyright,
  backToTop = defaultProps.backToTop,
  styles = defaultStyles,
}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const {
    sectionClass,
    logoClass,
    headingClass,
    descClass,
    linkClass,
    borderClass,
    iconClass,
    accentBgClass,
    accentTextClass,
  } = resolveFooterStyles(styles);

  const handleScrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);

    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  const renderLogo = () => {
    if (logo?.type === "image" && logo.src) {
      return (
        <img
          src={logo.src}
          alt={logo.alt ?? "Logo"}
          className={`w-auto ${logoClass}`}
        />
      );
    }

    return (
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e50913]">
          <Icon
            name={logo?.icon ?? "Layers"}
            size={18}
            className="text-white"
          />
        </div>

        <span className={`font-extrabold tracking-tight text-lg ${logoClass}`}>
          {logo?.text ?? "GrowthLab"}
        </span>
      </div>
    );
  };

  return (
    <footer className={`transition-colors duration-200 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">

        {newsletter && (
          <div
            className={`pb-12 border-b ${borderClass} grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
          >
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                  <Icon
                    name="Mail"
                    size={18}
                    className={accentTextClass}
                  />
                </div>

                <h3 className={`text-lg font-bold tracking-tight ${headingClass}`}>
                  {newsletter.title}
                </h3>
              </div>

              <p className={`max-w-lg ${descClass}`}>
                {newsletter.description}
              </p>
            </div>

            <div className="lg:col-span-6">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 sm:max-w-md lg:ml-auto"
              >
                <input
                  type="email"
                  required
                  placeholder={newsletter.placeholder ?? "Enter your email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className={`flex-1 min-w-0 rounded-xl border ${borderClass} bg-transparent px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#e50913]`}
                />

                <button
                  type="submit"
                  disabled={subscribed}
                  className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all active:scale-[0.98] ${
                    subscribed ? "bg-emerald-600" : accentBgClass
                  }`}
                >
                  {subscribed ? (
                    <span className="flex items-center gap-1.5">
                      <Icon name="Check" size={16} />
                      Subscribed
                    </span>
                  ) : (
                    newsletter.buttonText ?? "Subscribe"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-4">

          <div className="col-span-1 md:col-span-4 lg:col-span-3 space-y-4">
            {renderLogo()}

            {tagline && (
              <p className={descClass}>
                {tagline}
              </p>
            )}
          </div>


          <div className="col-span-1 md:col-span-8 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {columns.map((column, idx) => (
              <div key={idx} className="space-y-4">

                <h4 className={headingClass}>
                  {column.title}
                </h4>

                <ul className="space-y-3">
                  {column.links?.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className={`transition-colors hover:opacity-80 ${linkClass}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>


        <div
          className={`border-t ${borderClass} pt-8 flex flex-col sm:flex-row items-center justify-between gap-4`}
        >

          <span className={descClass}>
            {copyright}
          </span>


          <div className="flex flex-wrap items-center gap-4 justify-center">

            {socialLinks?.length > 0 && (
              <div className="flex items-center gap-3">

                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className={`flex h-8 w-8 items-center justify-center border transition-all ${iconClass}`}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}

              </div>
            )}


            {backToTop?.enabled && (
              <>
                <span className={`hidden sm:inline ${descClass}`}>
                  |
                </span>

                <button
                  onClick={handleScrollTop}
                  aria-label="Back to top"
                  className={`inline-flex items-center gap-1.5 font-medium transition-colors hover:opacity-80 ${linkClass}`}
                >
                  <span>
                    {backToTop.label ?? "Back to Top"}
                  </span>

                  <Icon name="ArrowUp" size={14} />
                </button>
              </>
            )}

          </div>

        </div>

      </div>
    </footer>
  );
}