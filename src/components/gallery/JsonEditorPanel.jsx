import { useState } from "react";
import Editor from "@monaco-editor/react";
import { AlertCircle, Check, Copy } from "lucide-react";

export default function JsonEditorPanel({ sectionConfig, onConfigChange }) {
  const [jsonText, setJsonText] = useState(() =>
    JSON.stringify(sectionConfig, null, 2)
  );
  const [parseError, setParseError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleEditorChange = (value) => {
    const nextValue = value ?? "";
    setJsonText(nextValue);

    try {
      const parsed = JSON.parse(nextValue);
      setParseError(null);
      onConfigChange(parsed);
    } catch {
      setParseError("Invalid JSON — fix syntax to update the preview");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="border-b border-border bg-navy-elevated">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-dark px-4 py-2.5 sm:px-6">
        <div>
          <h3 className="text-sm font-semibold text-ink-inverse">Section JSON</h3>
          <p className="text-xs text-ink-inverse-muted">
            Editable — changes sync to the preview
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-ink-inverse transition-colors hover:bg-brand-dark"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy JSON"}
        </button>
      </div>

      {parseError && (
        <div className="flex items-center gap-2 border-b border-brand/30 bg-brand/10 px-4 py-2 text-xs text-brand-light sm:px-6">
          <AlertCircle size={14} className="shrink-0" />
          {parseError}
        </div>
      )}

      <div className="h-[360px] sm:h-[420px]">
        <Editor
          height="100%"
          defaultLanguage="json"
          theme="vs-dark"
          value={jsonText}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            wordWrap: "on",
            padding: { top: 12 },
          }}
        />
      </div>
    </section>
  );
}
