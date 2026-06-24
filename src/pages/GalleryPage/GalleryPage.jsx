import { useState } from 'react'
import { getTypes, getVariants } from '../../catalog/registry'
import LiveJsonPanel from '../../components/gallery/LiveJsonPanel'

export default function GalleryPage() {
  const [selectedType, setSelectedType] = useState(getTypes()[0]?.type ?? '')
  const [selectedVariant, setSelectedVariant] = useState('')
  const types = getTypes()
  const variants = getVariants(selectedType)

  const activeVariant = variants.find((variant) => variant.id === selectedVariant) ?? variants[0] ?? null
  const ActiveComponent = activeVariant?.component ?? null

  return (
    <div className="gallery-shell">
      <aside className="rounded border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Component Types</h2>
        <div className="mt-4 space-y-2">
          {types.map(({ type, title }) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                setSelectedType(type)
                setSelectedVariant('')
              }}
              className={`w-full rounded px-3 py-2 text-left text-sm ${selectedType === type ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              {title}
            </button>
          ))}
        </div>
      </aside>

      <section className="rounded border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          {types.find((item) => item.type === selectedType)?.title ?? 'Gallery'}
        </h2>
        <p className="mt-1 text-sm text-gray-500">Choose a variant to preview it inline.</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {variants.length ? (
            variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => setSelectedVariant(variant.id)}
                className={`rounded-full border px-3 py-1.5 text-sm ${selectedVariant === variant.id || (!selectedVariant && variant.id === variants[0]?.id) ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'}`}
              >
                {variant.label}
              </button>
            ))
          ) : (
            <div className="text-sm text-gray-500">No variants available for this component.</div>
          )}
        </div>

        {activeVariant && (
          <div className="gallery-preview-grid mt-6">
            <div className="rounded border border-gray-200 bg-gray-50 p-4">
              <div className="mb-3 text-sm font-semibold text-gray-700">Preview</div>
              <div className="rounded border border-gray-200 bg-white p-4">
                {ActiveComponent ? <ActiveComponent {...activeVariant.defaultProps} /> : null}
              </div>
            </div>

            <div className="rounded border border-gray-200 bg-white p-4">
              <div className="mb-3 text-sm font-semibold text-gray-700">JSON</div>
              <LiveJsonPanel />
            </div>
          </div>
        )}
      </section>
    </div>
  )
}