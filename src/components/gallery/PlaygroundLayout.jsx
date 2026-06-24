import LiveJsonPanel from './LiveJsonPanel'

export default function PlaygroundLayout({ component: Component, props = {} }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded border border-gray-200 bg-white p-4 shadow-sm">
        <div className="mb-3 text-sm font-semibold text-gray-700">Preview</div>
        <div className="rounded border border-gray-100 bg-gray-50 p-4">
          <Component {...props} />
        </div>
      </div>

      <div className="rounded border border-gray-200 bg-white p-4 shadow-sm">
        <div className="mb-3 text-sm font-semibold text-gray-700">JSON</div>
        <LiveJsonPanel />
      </div>
    </div>
  )
}
