import { useSelector } from "react-redux";
import { AlertCircle, AlertTriangle } from "lucide-react";

export default function ValidationPanel() {
  const parseError = useSelector((state) => state.builder.parseError);
  const errors = useSelector((state) => state.builder.validationErrors);
  const warnings = useSelector((state) => state.builder.validationWarnings);
  const isValid = useSelector((state) => state.builder.isValid);

  const hasIssues = parseError || errors.length > 0 || warnings.length > 0;

  return (
    <section className="border-t border-border-dark bg-navy">
      <div className="border-b border-border-dark px-4 py-2.5 sm:px-6">
        <h3 className="text-sm font-semibold text-ink-inverse">Validation</h3>
        <p className="text-xs text-ink-inverse-muted">
          {isValid && !parseError
            ? "Configuration is valid"
            : "Resolve issues below to enable preview"}
        </p>
      </div>

      <div className="max-h-[180px] overflow-y-auto px-4 py-3 sm:px-6">
        {!hasIssues && (
          <p className="text-xs text-ink-inverse-muted">
            No errors or warnings.
          </p>
        )}

        {parseError && (
          <div className="mb-2 flex items-start gap-2 text-xs text-brand-light">
            <AlertCircle size={14} className="mt-0.5 shrink-0" />
            <span>{parseError}</span>
          </div>
        )}

        {errors.map((issue) => (
          <div
            key={`${issue.path}-${issue.message}`}
            className="mb-2 flex items-start gap-2 text-xs text-brand-light"
          >
            <AlertCircle size={14} className="mt-0.5 shrink-0" />
            <span>
              <span className="font-medium">{issue.path}</span>: {issue.message}
            </span>
          </div>
        ))}

        {warnings.map((issue) => (
          <div
            key={`${issue.path}-${issue.message}`}
            className="mb-2 flex items-start gap-2 text-xs text-amber-300/90"
          >
            <AlertTriangle size={14} className="mt-0.5 shrink-0" />
            <span>
              <span className="font-medium">{issue.path}</span>: {issue.message}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
