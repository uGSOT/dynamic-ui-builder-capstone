import { useMemo } from "react";
import { resolveNavbarIcon } from "./NavbarNavLinks";

export default function NavbarLogo({
  logo,
  className = "",
  inverted = false,
  preventNavigation = false,
  logoSize,
}) {
  const logoHref = preventNavigation ? "#" : "/";

  const handleClick = preventNavigation
    ? (event) => event.preventDefault()
    : undefined;

  const size = logoSize ?? {
    logoBox: "h-7 w-7",
    logoIcon: 15,
    logoText: "text-sm",
    logoImage: "h-8",
  };

  if (logo?.type === "image" && logo.src) {
    return (
      <a
        href={logoHref}
        onClick={handleClick}
        className={`group inline-flex shrink-0 items-center ${className}`}
      >
        <img
          src={logo.src}
          alt={logo.alt ?? ""}
          className={`${size.logoImage} w-auto`}
        />
      </a>
    );
  }

  const textClass = inverted ? "text-ink-inverse" : "text-ink";
  const Icon = useMemo(() => resolveNavbarIcon(logo?.icon), [logo?.icon]);

  return (
    <a
      href={logoHref}
      onClick={handleClick}
      className={`group flex items-center gap-2 ${className}`}
    >
      <div
        className={`flex ${size.logoBox} items-center justify-center rounded-md bg-brand transition-colors group-hover:bg-brand-dark`}
      >
        <Icon size={size.logoIcon} className="text-ink-inverse" />
      </div>
      <span className={`${size.logoText} font-semibold tracking-tight ${textClass}`}>
        {logo?.text ?? "UI Builder"}
      </span>
    </a>
  );
}
