# Classic Sticky

Logo left, links centered, CTA on the right. Solid surface background with optional sticky positioning — the default SaaS homepage navbar.

## When to use

- Standard B2B SaaS landing pages
- Product marketing sites with a clear primary CTA
- Pages where the navbar should remain visible while scrolling

## Usage

```jsx
import ClassicSticky from "@/catalog/navbar/ClassicSticky";

<ClassicSticky
  logo={{ type: "text", text: "LaunchPad" }}
  navLinks={[
    { label: "Product", href: "#product" },
    { label: "Pricing", href: "#pricing" },
  ]}
  ctaButton={{ label: "Get started", href: "#signup" }}
  sticky={true}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `logo` | `text \| image` | `{ type: "text", text: "LaunchPad" }` | No | Brand mark on the left |
| `navLinks` | `Array<{ label, href }>` | 4 sample links | No | Primary navigation links |
| `ctaButton` | `{ label, href }` | `{ label: "Get started", href: "#signup" }` | No | Primary CTA button |
| `sticky` | `boolean` | `true` | No | Stick to top on scroll |

## JSON example

```json
{
  "id": "navbar-1",
  "type": "navbar",
  "variant": "classic-sticky",
  "props": {
    "logo": { "type": "text", "text": "LaunchPad" },
    "navLinks": [
      { "label": "Product", "href": "#product" },
      { "label": "Pricing", "href": "#pricing" }
    ],
    "ctaButton": { "label": "Get started", "href": "#signup" },
    "sticky": true
  },
  "styles": {}
}
```
