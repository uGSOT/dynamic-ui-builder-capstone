import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "@monaco-editor/react";
import { setRawJson } from "../../store/builderSlice";

export default function JsonEditor() {
  const dispatch = useDispatch();
  const rawJson = useSelector((state) => state.builder.rawJson);
  const parseError = useSelector((state) => state.builder.parseError);
  const [jsonText, setJsonText] = useState(rawJson);
  const debounceRef = useRef(null);
  const skipNextSync = useRef(false);

  useEffect(() => {
    if (skipNextSync.current) {
      skipNextSync.current = false;
      return;
    }
    setJsonText(rawJson);
  }, [rawJson]);

  const scheduleDispatch = (nextValue) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      skipNextSync.current = true;
      dispatch(setRawJson(nextValue));
    }, 300);
  };

  const handleChange = (value) => {
    const nextValue = value ?? "";
    setJsonText(nextValue);
    scheduleDispatch(nextValue);
  };

  const handleFormat = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(jsonText), null, 2);
      setJsonText(formatted);
      skipNextSync.current = true;
      dispatch(setRawJson(formatted));
    } catch {
      // keep current text when JSON is invalid
    }
  };

  return (
    <section className="flex min-h-0 flex-1 flex-col bg-navy-elevated">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-dark px-4 py-2.5 sm:px-6">
        <div>
          <h3 className="text-sm font-semibold text-ink-inverse">Site JSON</h3>
          <p className="text-xs text-ink-inverse-muted">
            Edit your full site configuration
          </p>
        </div>
        <button
          type="button"
          onClick={handleFormat}
          className="rounded-md border border-border-dark px-3 py-1.5 text-xs font-medium text-ink-inverse-muted transition-colors hover:border-primary/40 hover:text-ink-inverse"
        >
          Format
        </button>
      </div>

      {parseError && (
        <div className="border-b border-primary/30 bg-primary/10 px-4 py-2 text-xs text-brand-light sm:px-6">
          {parseError}
        </div>
      )}

      <div className="min-h-[360px] flex-1">
        <Editor
          height="100%"
          defaultLanguage="json"
          theme="vs-dark"
          value={jsonText}
          onChange={handleChange}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            wordWrap: "on",
            padding: { top: 12 },
            automaticLayout: true,
          }}
        />
      </div>
    </section>
  );
}
