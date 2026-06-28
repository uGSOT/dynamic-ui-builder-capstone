# Minimal Centered Footer

Clean, minimalist startup footer rendering brand mark, inline navigation links row, and small copyright centered. Used heavily in neat product-centric landing pages.

## When to use

- Clean developer tools, design utilities, or AI landing pages
- Sites that don't need heavy link structures or resource categories
- Mobile-first layouts where navigation space is at a premium

## Usage

```jsx
import MinimalCentered from "@/catalog/footer/MinimalCentered";

<MinimalCentered
  logo={{ type: "text", text: "Acme", icon: "Triangle" }}
  links={[
    { label: "Product", href: "#" },
    { label: "Features", href: "#" }
  ]}
  socialLinks={[
    { platform: "twitter", href: "#", icon: "Twitter" }
  ]}
  copyright="© 2026 Acme Inc. All rights reserved."
  backToTop={{ enabled: true, label: "Scroll to top" }}
  styles={{ paddingY: 6, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `logo` | `object` | `{ type: "text", text: "Acme", icon: "Triangle" }` | No | Centered logo brand configuration |
| `links` | `array` | 7 standard links | No | Array of navigation link items |
| `socialLinks` | `array` | 3 social icons | No | Centered social media profile links |
| `copyright` | `string` | `"© 2026 Acme Inc. All rights reserved."` | No | Copyright notice string |
| `backToTop` | `object` | `{ enabled: true }` | No | Arrow scroll-to-top option |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `6` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |
