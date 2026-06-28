import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteRenderer from "../../renderer/SiteRenderer";
import { STORAGE_KEYS, SESSION_KEYS } from "../../utils/constants";
import { readStorage } from "../../utils/storage";
import { readSession } from "../../utils/sessionStorage";
import { parseAndValidateJson } from "../../utils/validateConfig";
import { widthToBreakpoint } from "../../utils/previewViewport";

function loadPreviewConfig() {
  const session = readSession(SESSION_KEYS.PREVIEW);
  if (session?.siteConfig) {
    const result = parseAndValidateJson(JSON.stringify(session.siteConfig));
    if (result.valid && result.siteConfig) return result.siteConfig;
  }

  const draft = readStorage(STORAGE_KEYS.DRAFT);
  if (draft?.rawJson) {
    const result = parseAndValidateJson(draft.rawJson);
    if (result.valid && result.siteConfig) return result.siteConfig;
  }

  return null;
}

export default function PreviewPage() {
  const siteConfig = useMemo(() => loadPreviewConfig(), []);
  const [viewport, setViewport] = useState(() =>
    widthToBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setViewport(widthToBreakpoint(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const title = siteConfig?.meta?.title;
    document.title = title ? `${title} · Preview` : "Site Preview";
    return () => {
      document.title = "dynamic-ui-builder";
    };
  }, [siteConfig]);

  if (!siteConfig) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface px-6 text-center">
        <p className="text-lg font-semibold text-ink">No site to preview</p>
        <p className="max-w-md text-sm text-ink-muted">
          Open the builder, load a template or paste valid JSON, then use{" "}
          <strong>Open clean site</strong>.
        </p>
        <Link
          to="/builder"
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-ink-inverse hover:bg-brand-dark"
        >
          <ArrowLeft size={16} />
          Back to Builder
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <SiteRenderer siteConfig={siteConfig} viewport={viewport} />
    </div>
  );
}
