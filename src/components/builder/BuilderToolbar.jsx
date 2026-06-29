import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Download,
  LayoutGrid,
  RotateCcw,
  Trash2,
  Upload,
} from "lucide-react";
import { loadTemplate, resetBuilder, setRawJson, clearDraft } from "../../store/builderSlice";
import { TEMPLATES } from "../../templates";

export default function BuilderToolbar() {
  const dispatch = useDispatch();
  const rawJson = useSelector((state) => state.builder.rawJson);
  const fileInputRef = useRef(null);

  const handleExport = () => {
    const blob = new Blob([rawJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "site-config.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    file.text().then((text) => {
      dispatch(setRawJson(text));
    });
    event.target.value = "";
  };

  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-border bg-surface px-4 py-3 sm:px-6">
      <select
        className="rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-text"
        defaultValue=""
        onChange={(event) => {
          const template = TEMPLATES.find((item) => item.id === event.target.value);
          if (template) {
            dispatch(loadTemplate(template.config));
          }
          event.target.value = "";
        }}
      >
        <option value="" disabled>
          Load template
        </option>
        {TEMPLATES.map((template) => (
          <option key={template.id} value={template.id}>
            {template.label}
          </option>
        ))}
      </select>

      <div className="ml-auto flex flex-wrap items-center gap-2">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-ink-muted transition-colors hover:bg-muted hover:text-text"
        >
          <LayoutGrid size={14} />
          Gallery
        </Link>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-ink-muted transition-colors hover:bg-muted hover:text-text"
        >
          <Upload size={14} />
          Import
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={handleImport}
        />

        <button
          type="button"
          onClick={handleExport}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-ink-muted transition-colors hover:bg-muted hover:text-text"
        >
          <Download size={14} />
          Export
        </button>

        <button
          type="button"
          onClick={() => dispatch(resetBuilder())}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-ink-muted transition-colors hover:bg-muted hover:text-text"
        >
          <RotateCcw size={14} />
          Reset
        </button>

        <button
          type="button"
          onClick={() => dispatch(clearDraft())}
          className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-brand-muted px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
        >
          <Trash2 size={14} />
          Clear
        </button>
      </div>
    </div>
  );
}
