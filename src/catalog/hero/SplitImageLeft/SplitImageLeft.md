# Split Image Left Hero

A hero section with copy elements on the right side and a product image/mockup on the left side on desktop screens. Responds to a single column stack on mobile.

## When to use

- Mobile apps, developer tools, or hardware landing pages where displaying the product/device on the left is preferred
- Marketing websites where you want to lead visually with an image, then capture attention with headings

## Usage

```jsx
import SplitImageLeft from "@/catalog/hero/SplitImageLeft";

<SplitImageLeft
  headline="The operating system for modern business"
  subtext="Connect your tools, automate your workflows, and scale your growth."
  primaryAction={{ label: "Get started free", href: "/signup" }}
  secondaryAction={{ label: "Watch interactive demo", href: "/demo" }}
  badge="New: Version 2.0 is now live"
  imageUrl="/assets/screenshot.png"
  styles={{ paddingY: 10, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `headline` | `string` | `"The operating system..."` | No | Main heading title text |
| `subtext` | `string` | `"Connect your tools..."` | No | Supporting description paragraphs |
| `primaryAction` | `object` | `{ label: "Get started free", href: "#" }` | No | Primary conversion button configuration |
| `secondaryAction` | `object` | `{ label: "Watch interactive demo", href: "#" }` | No | Secondary button configuration |
| `badge` | `string` | `"New: Version 2.0..."` | No | Sub-CTA supporting text badge |
| `imageUrl` | `string` | `"https://images.unsplash.com..."` | No | Hero mockup/screenshot image URL |
| `styles` | `object` | `{ paddingY: 10, background: "surface" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `10` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "hero-split-left",
  "type": "hero",
  "variant": "split-image-left",
  "props": {
    "headline": "The operating system for modern business",
    "subtext": "Connect your tools, automate your workflows, and scale your growth.",
    "primaryAction": { "label": "Get started free", "href": "/signup" },
    "secondaryAction": { "label": "Watch interactive demo", "href": "/demo" },
    "badge": "New: Version 2.0 is now live",
    "imageUrl": "/assets/screenshot.png"
  },
  "styles": {
    "paddingY": 10,
    "background": "surface"
  }
}
```
