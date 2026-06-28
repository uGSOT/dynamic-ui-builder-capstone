import { useEffect, useState } from "react";
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

function useNavbarScroll(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

export const defaultProps = {
  logo: SAMPLE_LOGO_TEXT,
  navLinks: SAMPLE_NAV_LINKS,
  ctaButton: SAMPLE_CTA_BUTTON,
  sticky: true,
};

export const defaultStyles = {
  ...NAVBAR_STYLE_DEFAULTS,
  background: "transparent",
  scrolledBackground: "blur",
  border: "white",
  linkTone: "default",
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

export default function TransparentHero({
  logo = defaultProps.logo,
  navLinks = defaultProps.navLinks,
  ctaButton = defaultProps.ctaButton,
  sticky = defaultProps.sticky,
  styles = defaultStyles,
  onNavigate,
  activeLabel,
  preventNavigation = false,
  heroTone = "dark",
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useNavbarScroll();
  const nav = resolveNavbarStyles(styles, {
    scrolled,
    variant: "transparent-hero",
    heroTone,
  });

  const positionClass = sticky ? "sticky top-0 z-50" : "relative";
  const closeMobile = () => setMobileOpen(false);

  const mobileMenuClass = scrolled
    ? nav.mobileMenuClass
    : heroTone === "light"
      ? "border-border bg-surface/90 backdrop-blur-sm"
      : nav.mobileMenuClass;

  return (
    <div>
      <header
        className={`${positionClass} ${nav.headerClass} transition-colors duration-300`}
      >
        <div
          className={`flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center ${nav.innerClass}`}
        >
          <NavbarLogo
            logo={logo}
            inverted={nav.inverted}
            preventNavigation={preventNavigation}
            logoSize={nav.logoSize}
            className="shrink-0"
          />

          <NavbarNavLinks
            links={navLinks}
            className="hidden lg:block lg:justify-self-center"
            inverted={nav.inverted}
            onNavigate={onNavigate}
            activeLabel={activeLabel}
            linkSize={nav.linkSize}
          />

          <div className="flex shrink-0 items-center justify-end gap-2 lg:col-start-3">
            <NavbarCta
              ctaButton={ctaButton}
              inverted={nav.inverted}
              className="hidden lg:inline-flex"
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
          <div className={`border-t px-4 py-4 sm:px-6 lg:hidden ${mobileMenuClass}`}>
            <NavbarNavLinks
              links={navLinks}
              inverted={nav.inverted}
              onNavigate={onNavigate}
              activeLabel={activeLabel}
              onLinkClick={closeMobile}
              linkSize={nav.linkSize}
            />
            <div className="mt-4">
              <NavbarCta
                ctaButton={ctaButton}
                inverted={nav.inverted}
                className="w-full"
                onClick={closeMobile}
                ctaStyle={nav.ctaStyle}
                linkSize={nav.linkSize}
              />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
