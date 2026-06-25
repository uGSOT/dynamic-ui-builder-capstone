import { useState } from "react";
import NavbarLogo from "../NavbarLogo";
import NavbarLink from "../NavbarLink";
import NavbarCtaButton from "../NavbarCtaButton";
import NavbarMobileMenu from "../NavbarMobileMenu";
import {
  NAVBAR_STYLE_DEFAULTS,
  NAVBAR_STYLE_PROP_SCHEMA,
  resolveNavbarStyles,
} from "../navbarStyles";
import {
  SAMPLE_LOGO,
  SAMPLE_NAV_LINKS,
  SAMPLE_CTA_BUTTON,
} from "../defaultProps";

export const defaultProps = {
  logo: SAMPLE_LOGO,
  navLinks: SAMPLE_NAV_LINKS,
  ctaButton: SAMPLE_CTA_BUTTON,
  sticky: true,
};

export const defaultStyles = { ...NAVBAR_STYLE_DEFAULTS };

export const propSchema = {
  props: [
    {
      name: "logo",
      type: "{ type: text|image, text?, src?, alt?, href? }",
      default: defaultProps.logo,
      allowedValues: 'type: "text" or "image"',
      description: "Brand logo — text label or image URL",
    },
    {
      name: "navLinks",
      type: "Array<{ label: string, href: string, target?: string }>",
      default: defaultProps.navLinks,
      allowedValues: "Array of navigation link objects",
      description: "Primary navigation links",
    },
    {
      name: "ctaButton",
      type: "{ label, href, variant?, size? }",
      default: defaultProps.ctaButton,
      allowedValues: "variant: primary | secondary | ghost; size: sm | md | lg",
      description: "Primary call-to-action button on the right",
    },
    {
      name: "sticky",
      type: "boolean",
      default: defaultProps.sticky,
      allowedValues: "true | false",
      description: "Stick navbar to top on scroll",
    },
  ],
  styles: NAVBAR_STYLE_PROP_SCHEMA,
};

export default function ClassicSticky({
  logo = defaultProps.logo,
  navLinks = defaultProps.navLinks,
  ctaButton = defaultProps.ctaButton,
  sticky = defaultProps.sticky,
  styles = defaultStyles,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { className, inverted } = resolveNavbarStyles(styles);

  return (
    <header
      className={`relative w-full ${sticky ? "sticky top-0 z-50" : ""} ${className}`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <NavbarLogo logo={logo} inverted={inverted} />

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavbarLink
              key={link.href + link.label}
              link={link}
              inverted={inverted}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <NavbarCtaButton ctaButton={ctaButton} inverted={inverted} />
        </div>

        <NavbarMobileMenu
          navLinks={navLinks}
          ctaButton={ctaButton}
          inverted={inverted}
          isOpen={mobileOpen}
          onToggle={() => setMobileOpen((open) => !open)}
        />
      </div>
    </header>
  );
}
