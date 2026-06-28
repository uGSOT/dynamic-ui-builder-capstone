import { Wrench } from "lucide-react";
import BuilderToolbar from "../../components/builder/BuilderToolbar";
import JsonEditor from "../../components/builder/JsonEditor";
import PreviewPanel from "../../components/builder/PreviewPanel";
import ValidationPanel from "../../components/builder/ValidationPanel";

export default function BuilderPage() {
  return (
    <div className="bg-surface-muted pb-8 sm:pb-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="py-6 sm:py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-brand sm:h-10 sm:w-10">
              <Wrench size={18} />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
                Website Builder
              </h1>
              <p className="text-sm text-ink-muted">
                Paste gallery JSON, edit your site config, and preview the full
                page live
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
          <BuilderToolbar />

          <div className="flex min-h-[720px] flex-col lg:flex-row">
            <div className="flex min-h-0 min-w-0 flex-1 flex-col lg:max-w-[50%]">
              <JsonEditor />
              <ValidationPanel />
            </div>

            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
              <PreviewPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
