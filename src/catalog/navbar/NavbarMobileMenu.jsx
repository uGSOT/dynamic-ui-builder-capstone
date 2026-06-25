import { Menu, X } from "lucide-react";
import NavbarLink from "./NavbarLink";
import NavbarCtaButton from "./NavbarCtaButton";

export default function NavbarMobileMenu({
  navLinks,
  ctaButton,
  inverted = false,
  isOpen,
  onToggle,
}) {
  const toggleClass = inverted
    ? "text-ink-inverse hover:bg-white/10"
    : "text-ink-muted hover:bg-surface-muted hover:text-ink";

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={onToggle}
        className={`rounded-md p-2 transition-colors ${toggleClass}`}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div
          className={`absolute left-0 right-0 top-full border-b border-border px-4 py-4 shadow-card ${
            inverted ? "bg-navy" : "bg-surface"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavbarLink
                key={link.href + link.label}
                link={link}
                inverted={inverted}
              />
            ))}
          </nav>
          {ctaButton?.label && (
            <div className="mt-4">
              <NavbarCtaButton ctaButton={ctaButton} inverted={inverted} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
