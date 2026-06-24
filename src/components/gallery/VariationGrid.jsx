import { Link } from 'react-router-dom'

export default function VariationGrid({ type, variants = [] }) {
  if (!variants.length) {
    return <div className="text-sm text-gray-500">No variants available.</div>
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {variants.map((variant) => (
        <div
          key={variant.id}
          className="rounded border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:border-blue-500 hover:shadow"
        >
          <div className="text-sm font-semibold text-gray-900">{variant.label}</div>
          <div className="mt-1 text-xs text-gray-500">{variant.id}</div>
          <Link
            to={`/gallery/${type}/${variant.id}`}
            className="mt-4 inline-flex items-center rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            View Variant
          </Link>
        </div>
      ))}
    </div>
  )
}
