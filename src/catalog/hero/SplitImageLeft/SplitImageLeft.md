# Split Image Left

Product image on the left, copy and CTAs on the right. Common for mobile apps, hardware products, and visual-first brands.

## When to use

- Mobile app and hardware product pages
- Visual-first brands where the product image leads
- Layouts that mirror reading direction with image-first emphasis

## Usage

```jsx
import SplitImageLeft from "@/catalog/hero/SplitImageLeft";

<SplitImageLeft
  headline="The app your team actually wants to use"
  subtext="Beautiful, fast, and intuitive — designed for mobile-first teams who need clarity without complexity."
  primaryAction={{ label: "Download app", href: "#download" }}
  secondaryAction={{ label: "Watch video", href: "#video" }}
  image={{ src: "/assets/app-preview.png", alt: "Mobile app preview" }}
  styles={{ paddingY: 8, background: "surface", textAlign: "left", minHeight: "lg" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `headline` | `string` | `"The app your team actually wants to use"` | No | Main headline displayed beside the image |
| `subtext` | `string` | `"Beautiful, fast, and intuitive..."` | No | Supporting text below the headline. Pass `""` to hide |
| `primaryAction` | `{ label: string, href: string, variant?, size? }` | `{ label: "Download app", href: "#signup" }` | No | Primary call-to-action button |
| `secondaryAction` | `{ label: string, href: string, variant?, size? }` | `{ label: "Watch video", href: "#demo" }` | No | Secondary call-to-action button |
| `image` | `{ src?: string, alt?: string }` | Placeholder mockup | No | Product image on the left. Renders a placeholder when `src` is omitted |
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
  "id": "hero-3",
  "type": "hero",
  "variant": "split-image-left",
  "props": {
    "headline": "The app your team actually wants to use",
    "subtext": "Beautiful, fast, and intuitive — designed for mobile-first teams who need clarity without complexity.",
    "primaryAction": { "label": "Download app", "href": "#download" },
    "secondaryAction": { "label": "Watch video", "href": "#video" },
    "image": { "src": "/assets/app-preview.png", "alt": "Mobile app preview" }
  },
  "styles": {
    "paddingY": 8,
    "background": "surface",
    "textAlign": "left",
    "minHeight": "lg"
  }
}
```
