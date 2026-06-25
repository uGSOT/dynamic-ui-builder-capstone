const baseClass =
  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors";

export default function NavbarLink({ link, inverted = false }) {
  const colorClass = inverted
    ? "text-ink-inverse-muted hover:bg-white/10 hover:text-ink-inverse"
    : "text-ink-muted hover:bg-surface-muted hover:text-ink";

  return (
    <a
      href={link.href}
      target={link.target}
      rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${baseClass} ${colorClass}`}
    >
      {link.label}
    </a>
  );
}
