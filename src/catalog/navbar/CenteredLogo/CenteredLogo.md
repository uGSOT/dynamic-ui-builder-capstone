# Centered Logo

Logo centered with navigation links split on either side and the CTA on the far right. A minimal, design-forward layout.

## When to use

- Design-forward and lifestyle brands
- Portfolio and agency sites
- Pages where the logo is the visual anchor

## Usage

```jsx
import CenteredLogo from "@/catalog/navbar/CenteredLogo";

<CenteredLogo
  logo={{ type: "text", text: "LaunchPad" }}
  navLinks={[
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#blog" },
  ]}
  ctaButton={{ label: "Let's talk", href: "#contact" }}
  sticky={true}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `logo` | `text \| image` | `{ type: "text", text: "LaunchPad" }` | No | Brand mark centered in the bar |
| `navLinks` | `Array<{ label, href }>` | 4 sample links | No | Links split left/right of the logo |
| `ctaButton` | `{ label, href }` | `{ label: "Get started", href: "#signup" }` | No | CTA on the far right |
| `sticky` | `boolean` | `true` | No | Stick to top on scroll |

## JSON example

```json
{
  "id": "navbar-1",
  "type": "navbar",
  "variant": "centered-logo",
  "props": {
    "logo": { "type": "text", "text": "LaunchPad" },
    "navLinks": [
      { "label": "Work", "href": "#work" },
      { "label": "Studio", "href": "#studio" },
      { "label": "Contact", "href": "#contact" },
      { "label": "Blog", "href": "#blog" }
    ],
    "ctaButton": { "label": "Let's talk", "href": "#contact" },
    "sticky": true
  },
  "styles": {}
}
```
