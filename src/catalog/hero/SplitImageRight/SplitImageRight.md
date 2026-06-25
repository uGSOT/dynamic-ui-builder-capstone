# Split Image Right

Copy and CTAs on the left, product screenshot or mockup on the right. The standard SaaS product demo hero layout.

## When to use

- SaaS product demos and feature showcases
- Pages where a product screenshot reinforces the headline
- B2B landing pages with a clear product-led story

## Usage

```jsx
import SplitImageRight from "@/catalog/hero/SplitImageRight";

<SplitImageRight
  headline="Build your startup site in minutes"
  subtext="Pick proven components, customize with JSON, and preview your landing page instantly."
  primaryAction={{ label: "Start free trial", href: "#signup" }}
  secondaryAction={{ label: "Book a demo", href: "#demo" }}
  image={{ src: "/assets/hero-mockup.png", alt: "Product dashboard preview" }}
  styles={{ paddingY: 8, background: "surface", textAlign: "left", minHeight: "lg" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `headline` | `string` | `"Build your startup site in minutes"` | No | Main headline displayed beside the image |
| `subtext` | `string` | `"Pick proven components, customize with JSON..."` | No | Supporting text below the headline. Pass `""` to hide |
| `primaryAction` | `{ label: string, href: string, variant?, size? }` | `{ label: "Start free trial", href: "#signup" }` | No | Primary call-to-action button |
| `secondaryAction` | `{ label: string, href: string, variant?, size? }` | `{ label: "Book a demo", href: "#demo" }` | No | Secondary call-to-action button |
| `image` | `{ src?: string, alt?: string }` | Placeholder mockup | No | Product screenshot on the right. Renders a placeholder when `src` is omitted |
| `styles` | `object` | `{ paddingY: 8, background: "surface", textAlign: "left", minHeight: "lg" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"`, `"gradient"` | Section background token |
| `textAlign` | `string` | `"left"` | `"left"`, `"center"` | Headline and copy alignment |
| `minHeight` | `string` | `"lg"` | `"auto"`, `"md"`, `"lg"`, `"screen"` | Minimum section height |

## JSON example

```json
{
  "id": "hero-2",
  "type": "hero",
  "variant": "split-image-right",
  "props": {
    "headline": "Build your startup site in minutes",
    "subtext": "Pick proven components, customize with JSON, and preview your landing page instantly.",
    "primaryAction": { "label": "Start free trial", "href": "#signup" },
    "secondaryAction": { "label": "Book a demo", "href": "#demo" },
    "image": { "src": "/assets/hero-mockup.png", "alt": "Product dashboard preview" }
  },
  "styles": {
    "paddingY": 8,
    "background": "surface",
    "textAlign": "left",
    "minHeight": "lg"
  }
}
```
