import { useDispatch, useSelector } from "react-redux";
import { ExternalLink, Eye, Monitor, Smartphone, Tablet } from "lucide-react";
import SiteRenderer from "../../renderer/SiteRenderer";
import PreviewFrame from "./PreviewFrame";
import { setViewport } from "../../store/uiSlice";
import { SESSION_KEYS } from "../../utils/constants";
import { getPreset, VIEWPORT_PRESETS } from "../../utils/previewViewport";
import { writeSession } from "../../utils/sessionStorage";

const PRESET_BUTTONS = [
  { id: "mobile", icon: Smartphone },
  { id: "tablet", icon: Tablet },
  { id: "desktop", icon: Monitor },
];

export default function PreviewPanel() {
  const dispatch = useDispatch();
  const siteConfig = useSelector((state) => state.builder.siteConfig);
  const isValid = useSelector((state) => state.builder.isValid);
  const viewport = useSelector((state) => state.ui.viewport);
  const preset = getPreset(viewport);

  const handleOpenInNewTab = () => {
    if (!siteConfig) return;
    writeSession(SESSION_KEYS.PREVIEW, { siteConfig });
    window.open("/preview", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="flex min-h-0 flex-1 flex-col border-b border-border lg:border-b-0 lg:border-l">
      <div className="flex flex-wrap items-center gap-2 border-b border-border bg-surface px-4 py-2.5 sm:px-6">
        <Eye size={15} className="shrink-0 text-brand" />
        <h3 className="text-sm font-semibold text-ink">Live Preview</h3>

        <div className="flex items-center gap-1 rounded-lg border border-border bg-surface-muted p-0.5">
          {PRESET_BUTTONS.map(({ id, icon: Icon }) => (
            <button
              key={id}
              type="button"
              title={`${VIEWPORT_PRESETS[id].label} (${VIEWPORT_PRESETS[id].width}px)`}
              onClick={() => dispatch(setViewport(id))}
              className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                viewport === id
                  ? "bg-surface text-brand shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <Icon size={13} />
              <span className="hidden sm:inline">{VIEWPORT_PRESETS[id].label}</span>
            </button>
          ))}
        </div>

        <span className="rounded bg-surface-muted px-2 py-0.5 text-xs font-medium text-ink-muted">
          {preset.width}×{preset.height}
        </span>

        <button
          type="button"
          onClick={handleOpenInNewTab}
          disabled={!isValid || !siteConfig}
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ExternalLink size={13} />
          Open clean site
        </button>

        {!isValid && (
          <span className="w-full text-xs text-brand sm:w-auto">
            fix validation errors to preview
          </span>
        )}
      </div>

      <div className="flex flex-1 justify-center overflow-auto bg-surface-subtle p-4 sm:p-6">
        {isValid && siteConfig ? (
          <PreviewFrame width={preset.width} height={preset.height}>
            <SiteRenderer siteConfig={siteConfig} viewport={preset.breakpoint} />
          </PreviewFrame>
        ) : (
          <div className="flex min-h-[320px] w-full items-center justify-center rounded-xl border border-border bg-surface p-8 text-center text-sm text-ink-muted shadow-card">
            Preview unavailable until JSON is valid
          </div>
        )}
      </div>
    </section>
  );
}
