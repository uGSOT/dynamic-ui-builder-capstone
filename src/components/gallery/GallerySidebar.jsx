import {
  HelpCircle,
  Layers,
  Menu,
  PlayCircle,
  Sparkles,
  CreditCard,
  BarChart3,
  PanelBottom,
} from "lucide-react";

import { GALLERY_CATALOG } from "../../constants/galleryCatalog";

const ICONS = {
  faq: HelpCircle,
  hero: Layers,
  navbar: Menu,
  "how-it-works": PlayCircle,
  features: Sparkles,
  stats: BarChart3,
  pricing: CreditCard,
  footer: PanelBottom,
};

export default function GallerySidebar({
  selectedType,
  onSelectType,
}) {
  return (
    <aside className="shrink-0 border-b border-border bg-surface lg:w-56 lg:border-b-0 lg:border-r">
      <div className="border-b border-border px-4 py-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
          Components
        </h2>
      </div>

      <nav className="p-2 lg:max-h-[calc(100vh-14rem)] lg:overflow-y-auto">
        <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-0.5 lg:overflow-x-visible lg:pb-0">
          {GALLERY_CATALOG.map((component) => {
            const Icon = ICONS[component.id] ?? HelpCircle;
            const isSelected = selectedType === component.id;
            
            // 💡 FORCE "how-it-works" to be active here regardless of any other file settings!
            const isAvailable = component.id === "how-it-works" ? true : component.available;
            const isDisabled = !isAvailable;

            return (
              <li key={component.id} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  disabled={isDisabled}
                  onClick={() => onSelectType(component.id)}
                  className={`flex w-44 items-start gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors sm:w-48 lg:w-full ${
                    isSelected
                      ? "bg-brand-muted text-brand border border-brand/10"
                      : isDisabled
                        ? "cursor-not-allowed text-ink-subtle opacity-40"
                        : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                  }`}
                >
                  <Icon size={16} className="mt-0.5 shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">
                      {component.label}
                    </span>
                    <span className="mt-0.5 hidden text-xs leading-snug opacity-80 sm:block">
                      {component.description}
                    </span>
                    {isDisabled && (
                      <span className="mt-1 inline-block rounded bg-surface-subtle px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-subtle">
                        Soon
                      </span>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}