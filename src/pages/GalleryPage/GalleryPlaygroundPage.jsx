import { useParams } from 'react-router-dom'
import { getVariant } from '../../catalog/registry'
import PlaygroundLayout from '../../components/gallery/PlaygroundLayout'

export default function GalleryPlaygroundPage() {
  const { type, variant } = useParams()
  const selectedVariant = getVariant(type, variant)

  if (!selectedVariant) {
    return (
      <div className="rounded border border-gray-200 bg-white p-6 text-sm text-gray-600">
        Variant not found.
      </div>
    )
  }

  const Component = selectedVariant.component

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{selectedVariant.label}</h1>
        <p className="text-sm text-gray-500">{type} / {variant}</p>
      </div>
      <PlaygroundLayout component={Component} props={selectedVariant.defaultProps} />
    </div>
  )
}
