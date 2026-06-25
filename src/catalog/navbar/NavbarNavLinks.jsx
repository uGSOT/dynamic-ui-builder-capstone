import { Layers, LayoutGrid, Menu, Wrench, X } from "lucide-react";

const NAVBAR_ICONS = {
  Layers,
  LayoutGrid,
  Wrench,
};

function resolveNavbarIcon(name) {
  return NAVBAR_ICONS[name] ?? Layers;
}

function isRouteActive(link, pathname) {
  if (!link.href?.startsWith("/")) return false;
  if (link.end) return pathname === link.href;
  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}

export default function NavbarNavLinks({
  links,
  className = "",
  inverted = false,
  onLinkClick,
  onNavigate,
  activeLabel,
  linkSize,
}) {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const size = linkSize ?? {
    text: "text-sm",
    icon: 14,
    pad: "px-3 py-1.5",
  };

  const baseClass = `flex items-center gap-1.5 rounded-md font-medium transition-all ${size.text} ${size.pad}`;

  const handleClick = (event, link) => {
    if (onNavigate) {
      event.preventDefault();
      onNavigate(link.label);
    }
    onLinkClick?.(event);
  };

  return (
    <nav className={className}>
      <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1">
        {links.map((link) => {
          const Icon = resolveNavbarIcon(link.icon);
          const active = onNavigate
            ? link.label === activeLabel
            : isRouteActive(link, pathname);

          let stateClass;
          if (inverted) {
            stateClass = active
              ? "bg-white/15 text-ink-inverse"
              : "text-ink-inverse-muted hover:bg-white/10 hover:text-ink-inverse";
          } else {
            stateClass = active
              ? "bg-brand-muted text-brand"
              : "text-ink-muted hover:bg-surface-muted hover:text-ink";
          }

          return (
            <li key={link.label}>
              <a
                href={onNavigate ? "#" : link.href}
                onClick={(event) => handleClick(event, link)}
                className={`${baseClass} ${stateClass} ${onLinkClick ? "w-full" : ""}`}
              >
                {link.icon && <Icon size={size.icon} />}
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function NavbarMobileToggle({
  isOpen,
  onToggle,
  inverted = false,
}) {
  const iconClass = inverted ? "text-ink-inverse" : "text-ink";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={`inline-flex items-center justify-center rounded-lg p-2 lg:hidden ${iconClass}`}
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}
