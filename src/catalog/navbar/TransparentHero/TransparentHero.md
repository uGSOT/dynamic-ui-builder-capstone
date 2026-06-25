# Transparent Hero

Transparent navbar over a full-bleed hero. Becomes a solid, blurred surface bar after the user scrolls. Includes a dark hero band in preview so the transparent state is visible.

## When to use

- Product launch pages with a hero image or gradient
- Developer tool and AI product landing pages
- Pages where the navbar should feel immersive at the top

## Usage

```jsx
import TransparentHero from "@/catalog/navbar/TransparentHero";

<TransparentHero
  logo={{ type: "text", text: "LaunchPad" }}
  navLinks={[
    { label: "Features", href: "#features" },
    { label: "Docs", href: "#docs" },
  ]}
  ctaButton={{ label: "Start building", href: "#signup" }}
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
  "variant": "transparent-hero",
  "props": {
    "logo": { "type": "text", "text": "LaunchPad" },
    "navLinks": [
      { "label": "Features", "href": "#features" },
      { "label": "Docs", "href": "#docs" }
    ],
    "ctaButton": { "label": "Start building", "href": "#signup" },
    "sticky": true
  },
  "styles": {}
}
```
