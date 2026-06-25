import { Layers } from "lucide-react";

export default function NavbarLogo({ logo, inverted = false }) {
  const textClass = inverted ? "text-ink-inverse" : "text-ink";
  const href = logo?.href ?? "/";

  if (logo?.type === "image" && logo.src) {
    return (
      <a href={href} className="flex shrink-0 items-center">
        <img
          src={logo.src}
          alt={logo.alt ?? "Logo"}
          className="h-7 w-auto object-contain"
        />
      </a>
    );
  }

  return (
    <a href={href} className="group flex shrink-0 items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand transition-colors group-hover:bg-brand-dark">
        <Layers size={15} className="text-ink-inverse" />
      </div>
      <span className={`text-sm font-semibold tracking-tight ${textClass}`}>
        {logo?.text ?? "Brand"}
      </span>
    </a>
  );
}
