import { useState } from "react";
import NavbarLogo from "../NavbarLogo";
import NavbarNavLinks, { NavbarMobileToggle } from "../NavbarNavLinks";
import NavbarCta from "../NavbarCta";
import {
  NAVBAR_STYLE_DEFAULTS,
  NAVBAR_STYLE_PROP_SCHEMA,
  resolveNavbarStyles,
} from "../navbarStyles";
import {
  SAMPLE_CTA_BUTTON,
  SAMPLE_LOGO_TEXT,
  SAMPLE_NAV_LINKS,
} from "../defaultProps";

export const defaultProps = {
  logo: SAMPLE_LOGO_TEXT,
  navLinks: SAMPLE_NAV_LINKS,
  ctaButton: SAMPLE_CTA_BUTTON,
  sticky: true,
};

export const defaultStyles = {
  ...NAVBAR_STYLE_DEFAULTS,
  background: "surface",
  border: "white",
};

export const propSchema = {
  props: [
    {
      name: "logo",
      type: '{ type: "text", text: string } | { type: "image", src: string, alt?: string }',
      default: defaultProps.logo,
      allowedValues: "Text logo or image logo object",
      description: "Brand mark shown on the left",
    },
    {
      name: "navLinks",
      type: "Array<{ label: string, href: string, icon?: string, end?: boolean }>",
      default: defaultProps.navLinks,
      allowedValues: "Array of navigation link objects with optional Lucide icon name",
      description: "Primary navigation links (Home, Gallery, Builder)",
    },
    {
      name: "ctaButton",
      type: "{ label: string, href: string }",
      default: defaultProps.ctaButton,
      allowedValues: "CTA label and destination URL",
      description: "Primary call-to-action button on the right",
    },
    {
      name: "sticky",
      type: "boolean",
      default: defaultProps.sticky,
      allowedValues: "true | false",
      description: "Whether the navbar sticks to the top on scroll",
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
  onNavigate,
  activeLabel,
  preventNavigation = false,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = resolveNavbarStyles(styles, { variant: "classic-sticky" });

  const positionClass = sticky ? "sticky top-0 z-50" : "relative";
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`${positionClass} ${nav.headerClass}`}>
      <div
        className={`grid grid-cols-[1fr_auto_1fr] items-center ${nav.innerClass}`}
      >
        <NavbarLogo
          logo={logo}
          preventNavigation={preventNavigation}
          inverted={nav.inverted}
          logoSize={nav.logoSize}
        />

        <NavbarNavLinks
          links={navLinks}
          className="hidden justify-self-center lg:block"
          onNavigate={onNavigate}
          activeLabel={activeLabel}
          inverted={nav.inverted}
          linkSize={nav.linkSize}
        />

        <div className="flex items-center justify-end gap-2">
          <NavbarCta
            ctaButton={ctaButton}
            className="hidden lg:inline-flex"
            inverted={nav.inverted}
            ctaStyle={nav.ctaStyle}
            linkSize={nav.linkSize}
          />
          <NavbarMobileToggle
            isOpen={mobileOpen}
            onToggle={() => setMobileOpen((open) => !open)}
            inverted={nav.inverted}
          />
        </div>
      </div>

      {mobileOpen && (
        <div className={`border-t ${nav.mobileMenuClass} px-4 py-4 sm:px-6 lg:hidden`}>
          <NavbarNavLinks
            links={navLinks}
            onNavigate={onNavigate}
            activeLabel={activeLabel}
            onLinkClick={closeMobile}
            inverted={nav.inverted}
            linkSize={nav.linkSize}
          />
          <div className="mt-4">
            <NavbarCta
              ctaButton={ctaButton}
              className="w-full"
              onClick={closeMobile}
              inverted={nav.inverted}
              ctaStyle={nav.ctaStyle}
              linkSize={nav.linkSize}
            />
          </div>
        </div>
      )}
    </header>
  );
}
