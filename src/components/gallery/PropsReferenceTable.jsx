function formatDefaultValue(value) {
  if (value === undefined || value === null) return "—";
  if (typeof value === "string") {
    if (value === "") return '""';
    return value.length > 48 ? `"${value.slice(0, 48)}…"` : `"${value}"`;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const first = value[0];
    if (first && typeof first === "object" && "question" in first) {
      return `[${value.length} FAQ items]`;
    }
    if (first && typeof first === "object" && "name" in first) {
      return `[${value.length} categories]`;
    }
    return `Array(${value.length})`;
  }
  if (typeof value === "object") return "Object";
  return String(value);
}

function PropTable({ title, rows }) {
  if (!rows?.length) return null;

  return (
    <div>
      <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-ink-subtle">
        {title}
      </h4>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[32rem] text-left text-xs">
          <thead>
            <tr className="border-b border-border bg-surface-muted">
              <th className="px-3 py-2 font-semibold text-ink">Prop</th>
              <th className="px-3 py-2 font-semibold text-ink">Type</th>
              <th className="px-3 py-2 font-semibold text-ink">Default</th>
              <th className="px-3 py-2 font-semibold text-ink">Allowed values</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.name}
                className="border-b border-border last:border-b-0"
              >
                <td className="px-3 py-2 align-top font-mono font-medium text-brand">
                  {row.name}
                </td>
                <td className="px-3 py-2 align-top font-mono text-ink-muted">
                  {row.type}
                </td>
                <td className="max-w-[10rem] break-words px-3 py-2 align-top font-mono text-ink-muted">
                  {formatDefaultValue(row.default)}
                </td>
                <td className="px-3 py-2 align-top text-ink-muted">
                  {row.allowedValues}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PropsReferenceTable({ propSchema }) {
  if (!propSchema) return null;

  return (
    <div className="bg-surface px-4 py-4 sm:px-6 sm:py-6">
      <h3 className="mb-3 text-sm font-semibold text-ink">Supported props</h3>
      <div className="space-y-4">
        <PropTable title="props" rows={propSchema.props} />
        <PropTable title="styles" rows={propSchema.styles} />
      </div>
    </div>
  );
}
