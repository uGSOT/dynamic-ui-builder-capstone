# Centered

Headline, subtext, and dual CTAs centered with an optional trust badge below the buttons. The standard above-the-fold hero for early-stage landing pages.

## When to use

- Early-stage landing pages and waitlists
- Simple value proposition with two clear actions
- Pages where a gradient or solid background sets the tone

## Usage

```jsx
import Centered from "@/catalog/hero/Centered";

<Centered
  headline="Ship faster. Grow smarter."
  subtext="The all-in-one platform for modern teams to plan, build, and scale software that drives real impact."
  primaryAction={{ label: "Start free trial", href: "#signup" }}
  secondaryAction={{ label: "Book a demo", href: "#demo" }}
  badge="No credit card required • Cancel anytime"
  styles={{ paddingY: 8, background: "gradient", textAlign: "center", minHeight: "lg" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `headline` | `string` | `"Ship faster. Grow smarter."` | No | Main headline displayed above the CTAs |
| `subtext` | `string` | `"The all-in-one platform for modern teams..."` | No | Supporting text below the headline. Pass `""` to hide |
| `primaryAction` | `{ label: string, href: string, variant?, size? }` | `{ label: "Start free trial", href: "#signup" }` | No | Primary call-to-action button |
| `secondaryAction` | `{ label: string, href: string, variant?, size? }` | `{ label: "Book a demo", href: "#demo" }` | No | Secondary call-to-action button |
| `badge` | `string` | `"No credit card required • Cancel anytime"` | No | Small trust line displayed below the CTAs. Pass `""` to hide |
| `styles` | `object` | `{ paddingY: 8, background: "gradient", textAlign: "center", minHeight: "lg" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"gradient"` | `"surface"`, `"muted"`, `"navy"`, `"gradient"` | Section background token |
| `textAlign` | `string` | `"center"` | `"left"`, `"center"` | Headline and copy alignment |
| `minHeight` | `string` | `"lg"` | `"auto"`, `"md"`, `"lg"`, `"screen"` | Minimum section height |

## JSON example

```json
{
  "id": "hero-1",
  "type": "hero",
  "variant": "centered",
  "props": {
    "headline": "Ship faster. Grow smarter.",
    "subtext": "The all-in-one platform for modern teams to plan, build, and scale software that drives real impact.",
    "primaryAction": { "label": "Start free trial", "href": "#signup" },
    "secondaryAction": { "label": "Book a demo", "href": "#demo" },
    "badge": "No credit card required • Cancel anytime"
  },
  "styles": {
    "paddingY": 8,
    "background": "gradient",
    "textAlign": "center",
    "minHeight": "lg"
  }
}
```
