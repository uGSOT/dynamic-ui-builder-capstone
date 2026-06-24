# Centered Hero

A hero section with centered content, actions, and optional image support.

| Prop | Type | Description |
|---|---|---|
| `headline` | `string` | Main title text. |
| `subtext` | `string` | Supporting description text. |
| `primaryAction` | `object` | `{ label, href }` for the main CTA. |
| `secondaryAction` | `object` | `{ label, href }` for the secondary CTA. |
| `imageUrl` | `string` (optional) | Optional image URL. |
| `badge` | `string` (optional) | Optional supporting badge text. |

## Usage


### With default props

```jsx
import Centered from './catalog/hero/Centered'

function Example() {
  return <Centered />
}
```

Renders with all fallback values: default headline, subtext, CTAs ("Start free trial" / "Book a demo"), and badge text. No image is rendered since `imageUrl` has no default.

### With props passed

```jsx
import Centered from './catalog/hero/Centered'

function Example() {
  return (
    <Centered
      headline="Build faster. Launch sooner."
      subtext="A faster way to ship your product."
      primaryAction={{ label: 'Get started', href: '/signup' }}
      secondaryAction={{ label: 'Learn more', href: '/about' }}
      imageUrl="/assets/screenshot.png"
      badge="14-day free trial"
    />
  )
}
```

All six props are overridden — custom headline, subtext, both CTAs, an image, and a custom badge.
```
