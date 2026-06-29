import React, { useState } from "react";
import Icon from "../../../components/ui/Icon";
import { DEFAULT_WITH_NEWSLETTER_PROPS } from "../defaultProps";
import {
  FOOTER_STYLE_DEFAULTS,
  FOOTER_STYLE_PROP_SCHEMA,
  resolveFooterStyles,
} from "../footerStyles";

export const defaultProps = {
  ...DEFAULT_WITH_NEWSLETTER_PROPS,
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
      description: "Brand logo rendered in the footer columns section",
    },
    {
      name: "tagline",
      type: "string",
      default: defaultProps.tagline,
      allowedValues: "Any string",
      description: "Supporting text below the logo",
    },
    {
      name: "newsletter",
      type: "{ title: string, description: string, placeholder?: string, buttonText?: string }",
      default: defaultProps.newsletter,
      allowedValues: "Newsletter banner settings",
      description: "Newsletter subscription signup row layout and labels",
    },
    {
      name: "columns",
      type: "Array<{ title: string, links: Array<{ label: string, href: string }> }>",
      default: defaultProps.columns,
      allowedValues: "List of footer navigation columns",
      description: "Standard layout columns",
    },
    {
      name: "socialLinks",
      type: "Array<{ platform: string, href: string, icon: string }>",
      default: defaultProps.socialLinks,
      allowedValues: "List of social profiles",
      description: "Social media profiles row on the bottom-right",
    },
    {
      name: "copyright",
      type: "string",
      default: defaultProps.copyright,
      allowedValues: "Any copyright text",
      description: "Standard copyright statement",
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
  const { className, inverted } = resolveFooterStyles(styles);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Dynamic Theme Styling
  const titleClass = inverted ? "text-ink-inverse" : "text-text";
  const descClass = inverted ? "text-ink-inverse-muted" : "text-ink-muted";
  const linkClass = inverted
    ? "text-ink-inverse-muted hover:text-ink-inverse"
    : "text-ink-muted hover:text-text";
  const borderClass = inverted ? "border-border-dark" : "border-border";
  const iconClass = inverted
    ? "text-ink-inverse-muted hover:text-ink-inverse hover:bg-navy-elevated"
    : "text-ink-muted hover:text-text hover:bg-surface-subtle";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
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
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm shadow-primary/10">
          <Icon name={logo?.icon ?? "Layers"} size={18} className="text-white" />
        </div>
        <span className={`font-extrabold text-lg tracking-tight ${titleClass}`}>
          {logo?.text ?? "GrowthLab"}
        </span>
      </div>
    );
  };

  return (
    <footer className={`transition-colors duration-200 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section: Newsletter Sign up Row */}
        {newsletter && (
          <div className={`pb-12 border-b ${borderClass} grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
            
            {/* Title & Desc */}
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${inverted ? 'bg-navy-elevated' : 'bg-surface-subtle'}`}>
                  <Icon name="Mail" size={18} className={titleClass} />
                </div>
                <h3 className={`text-lg font-bold tracking-tight ${titleClass}`}>
                  {newsletter.title}
                </h3>
              </div>
              <p className={`text-sm ${descClass} max-w-lg leading-relaxed`}>
                {newsletter.description}
              </p>
            </div>

            {/* Input Box */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:max-w-md lg:ml-auto">
                <input
                  type="email"
                  required
                  placeholder={newsletter.placeholder ?? "Enter your email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 min-w-0 rounded-xl border ${borderClass} bg-transparent px-4 py-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${titleClass}`}
                  disabled={subscribed}
                />
                <button
                  type="submit"
                  className={`inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary-dark px-5 py-3 text-sm font-semibold text-white shadow-sm focus:outline-none cursor-pointer transition-all active:scale-[0.98] ${subscribed ? "bg-emerald-600 hover:bg-emerald-600" : ""}`}
                  disabled={subscribed}
                >
                  {subscribed ? (
                    <span className="flex items-center gap-1.5">
                      <Icon name="Check" size={16} /> Subscribed
                    </span>
                  ) : (
                    newsletter.buttonText ?? "Subscribe"
                  )}
                </button>
              </form>
            </div>

          </div>
        )}

        {/* Middle Section: Logo, Tagline, & Multi-Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-4">
          
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 space-y-4">
            {renderLogo()}
            {tagline && (
              <p className={`text-sm leading-relaxed ${descClass}`}>
                {tagline}
              </p>
            )}
          </div>

          {/* Links columns */}
          <div className="col-span-1 md:col-span-8 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {columns.map((column, idx) => (
              <div key={idx} className="space-y-4.5">
                <h4 className={`text-xs font-semibold tracking-wider uppercase ${titleClass}`}>
                  {column.title}
                </h4>
                <ul className="space-y-3">
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
          </div>

        </div>

        {/* Bottom Section: Copyright & Social media */}
        <div className={`border-t ${borderClass} pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left`}>
          
          {/* Copyright text */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className={`text-xs ${descClass}`}>
              {copyright}
            </span>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border ${borderClass} ${iconClass} transition-all`}
                    aria-label={social.platform}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            )}

            {/* Back to top spacer & button */}
            {backToTop?.enabled && (
              <>
                <span className={`text-xs ${descClass} hidden sm:inline`}>|</span>
                <button
                  onClick={handleScrollTop}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors ${linkClass}`}
                  aria-label="Back to top"
                >
                  <span>{backToTop.label ?? "Back to Top"}</span>
                  <Icon name="ArrowUp" size={14} className="h-3.5 w-3.5" />
                </button>
              </>
            )}
          </div>

        </div>

      </div>
    </footer>
  );
}
