import React from "react";
import Icon from "../../../components/ui/Icon";
import { DEFAULT_MINIMAL_CENTERED_PROPS } from "../defaultProps";
import {
  FOOTER_STYLE_DEFAULTS,
  FOOTER_STYLE_PROP_SCHEMA,
  resolveFooterStyles,
} from "../footerStyles";

export const defaultProps = {
  ...DEFAULT_MINIMAL_CENTERED_PROPS,
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
      description: "Brand logo rendered in the center",
    },
    {
      name: "links",
      type: "Array<{ label: string, href: string }>",
      default: defaultProps.links,
      allowedValues: "List of links to render in a horizontal row",
      description: "Centered navigation links",
    },
    {
      name: "copyright",
      type: "string",
      default: defaultProps.copyright,
      allowedValues: "Any copyright text",
      description: "Standard copyright statement",
    },
    {
      name: "socialLinks",
      type: "Array<{ platform: string, href: string, icon: string }>",
      default: defaultProps.socialLinks,
      allowedValues: "List of social profiles",
      description: "Social media links below navigation row",
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

export default function MinimalCentered({
  logo = defaultProps.logo,
  links = defaultProps.links,
  copyright = defaultProps.copyright,
  socialLinks = defaultProps.socialLinks,
  backToTop = defaultProps.backToTop,
  styles = defaultStyles,
}) {
  const { className, inverted } = resolveFooterStyles(styles);

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

  // Logo rendering helper
  const renderLogo = () => {
    if (logo?.type === "image" && logo.src) {
      return (
        <div className="flex h-10 items-center justify-center">
          <img src={logo.src} alt={logo.alt ?? "Logo"} className="h-8 w-auto" />
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm shadow-primary/10">
          <Icon name={logo?.icon ?? "Layers"} size={18} className="text-white" />
        </div>
        <span className={`font-extrabold text-lg tracking-tight ${titleClass}`}>
          {logo?.text ?? "Acme"}
        </span>
      </div>
    );
  };

  return (
    <footer className={`transition-colors duration-200 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Brand logo */}
        <div className="flex justify-center">
          {renderLogo()}
        </div>

        {/* Centered navigation links */}
        {links && links.length > 0 && (
          <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`text-sm font-medium transition-colors ${linkClass}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Social Icons row */}
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex justify-center items-center gap-4">
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

        {/* Copyright and Back to Top footer bar */}
        <div className={`border-t ${borderClass} pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left`}>
          <span className={`text-xs ${descClass}`}>
            {copyright}
          </span>

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
