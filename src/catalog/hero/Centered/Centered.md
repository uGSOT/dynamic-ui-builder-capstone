# Centered Hero

A hero section with centered content, actions, and optional image support. Located at the very top of a landing page to capture visitor attention and drive core actions.

## When to use

- Above-the-fold landing page content for pre-launch, SaaS, or marketing sites
- Clean, focused layouts where a single column flow works best
- Pages designed to guide the user toward a single primary call to action (with optional secondary option)

## Usage

```jsx
import Centered from "@/catalog/hero/Centered";

<Centered
  headline="Ship faster. Grow smarter."
  subtext="The all-in-one platform for modern teams to plan, build, and scale software."
  primaryAction={{ label: "Start free trial", href: "/signup" }}
  secondaryAction={{ label: "Book a demo", href: "/demo" }}
  badge="No credit card required • Cancel anytime"
  imageUrl="/assets/screenshot.png"
  styles={{ paddingY: 10, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `headline` | `string` | `"Ship faster. Grow smarter."` | No | Main heading title text |
| `subtext` | `string` | `"The all-in-one platform..."` | No | Supporting description paragraphs |
| `primaryAction` | `object` | `{ label: "Start free trial", href: "#" }` | No | Primary conversion button configuration |
| `secondaryAction` | `object` | `{ label: "Book a demo", href: "#" }` | No | Secondary button configuration |
| `badge` | `string` | `"No credit card required..."` | No | Sub-CTA supporting text badge |
| `imageUrl` | `string` | `""` | No | Optional hero mockup/screenshot image URL |
| `styles` | `object` | `{ paddingY: 10, background: "surface" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `10` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "hero-1",
  "type": "hero",
  "variant": "centered",
  "props": {
    "headline": "Ship faster. Grow smarter.",
    "subtext": "The all-in-one platform for modern teams to plan, build, and scale software.",
    "primaryAction": { "label": "Start free trial", "href": "/signup" },
    "secondaryAction": { "label": "Book a demo", "href": "/demo" },
    "badge": "No credit card required • Cancel anytime",
    "imageUrl": "/assets/screenshot.png"
  },
  "styles": {
    "paddingY": 10,
    "background": "surface"
  }
}
```
