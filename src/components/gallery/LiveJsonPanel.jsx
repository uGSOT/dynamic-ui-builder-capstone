export default function LiveJsonPanel() {
  return (
    <pre className="overflow-x-auto rounded bg-gray-950 p-3 text-xs text-gray-100">
{JSON.stringify({}, null, 2)}
    </pre>
  )
}
