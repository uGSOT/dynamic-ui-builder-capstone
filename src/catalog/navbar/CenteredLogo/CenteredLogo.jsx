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

function splitNavLinks(links) {
  const midpoint = Math.ceil(links.length / 2);
  return {
    leftLinks: links.slice(0, midpoint),
    rightLinks: links.slice(midpoint),
  };
}

export const defaultProps = {
  logo: SAMPLE_LOGO_TEXT,
  navLinks: SAMPLE_NAV_LINKS,
  ctaButton: SAMPLE_CTA_BUTTON,
  sticky: true,
};

export const defaultStyles = {
  ...NAVBAR_STYLE_DEFAULTS,
  background: "surface",
  border: "subtle",
};

export const propSchema = {
  props: [
    {
      name: "logo",
      type: '{ type: "text", text: string } | { type: "image", src: string, alt?: string }',
      default: defaultProps.logo,
      allowedValues: "Text logo or image logo object",
      description: "Brand mark centered in the navbar",
    },
    {
      name: "navLinks",
      type: "Array<{ label: string, href: string, icon?: string, end?: boolean }>",
      default: defaultProps.navLinks,
      allowedValues: "Array of navigation link objects with optional Lucide icon name",
      description: "Navigation links split left and right of the logo",
    },
    {
      name: "ctaButton",
      type: "{ label: string, href: string }",
      default: defaultProps.ctaButton,
      allowedValues: "CTA label and destination URL",
      description: "Call-to-action button on the far right",
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

export default function CenteredLogo({
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
  const { leftLinks, rightLinks } = splitNavLinks(navLinks);
  const nav = resolveNavbarStyles(styles, { variant: "centered-logo" });

  const positionClass = sticky ? "sticky top-0 z-50" : "relative";
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`${positionClass} ${nav.headerClass}`}>
      <div className={`flex items-center ${nav.innerClass}`}>
        <div className="hidden flex-1 lg:block">
          <NavbarNavLinks
            links={leftLinks}
            className="flex justify-end"
            onNavigate={onNavigate}
            activeLabel={activeLabel}
            inverted={nav.inverted}
            linkSize={nav.linkSize}
          />
        </div>

        <div className="flex flex-1 justify-center lg:flex-none lg:px-10">
          <NavbarLogo
            logo={logo}
            preventNavigation={preventNavigation}
            inverted={nav.inverted}
            logoSize={nav.logoSize}
            logoTextClass={nav.logoTextClass}
            logoIconBoxClass={nav.logoIconBoxClass}
            logoIconClass={nav.logoIconClass}
            logoImageStyle={nav.logoImageStyle}
          />
        </div>

        <div className="hidden flex-1 items-center justify-between lg:flex">
          <NavbarNavLinks
            links={rightLinks}
            onNavigate={onNavigate}
            activeLabel={activeLabel}
            inverted={nav.inverted}
            linkSize={nav.linkSize}
          />
          <NavbarCta
            ctaButton={ctaButton}
            className="ml-8 shrink-0"
            inverted={nav.inverted}
            ctaStyle={nav.ctaStyle}
            linkSize={nav.linkSize}
          />
        </div>

        <div className="ml-auto lg:hidden">
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
