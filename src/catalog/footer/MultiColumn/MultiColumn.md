# Multi Column Footer

Standard multi-column footer displaying company logo/name, tagline, multiple responsive navigation link columns, secondary legal policy links, social media buttons, contact information, and an optional scroll to top button.

## When to use

- Complex SaaS products and websites requiring clear division of resources and links
- Marketing websites where secondary navigation is critical
- Full-page websites looking to close the user journey with trust-building legal links

## Usage

```jsx
import MultiColumn from "@/catalog/footer/MultiColumn";

<MultiColumn
  logo={{ type: "text", text: "SaaSkit", icon: "Layers" }}
  tagline="Everything you need to build, launch, and scale your SaaS."
  columns={[
    {
      title: "PRODUCT",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
      ],
    },
  ]}
  socialLinks={[
    { platform: "github", href: "#", icon: "Github" }
  ]}
  copyright="© 2026 SaaSkit. All rights reserved."
  legalLinks={[
    { label: "Security", href: "#" }
  ]}
  backToTop={{ enabled: true, label: "Back to Top" }}
  styles={{ paddingY: 6, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `logo` | `object` | `{ type: "text", text: "SaaSkit", icon: "Layers" }` | No | Logo icon and text structure |
| `tagline` | `string` | `"Everything you need to build..."` | No | Company tagline below the logo |
| `columns` | `array` | 3 navigation columns | No | Array of columns with link entries |
| `socialLinks` | `array` | 4 social link objects | No | Platform key and URL links |
| `copyright` | `string` | `"© 2026 SaaSkit. All rights reserved."` | No | Small copyright text at bottom |
| `legalLinks` | `array` | 3 legal document links | No | Secondary links next to copyright |
| `contactInfo` | `object` | Email and phone object | No | Optional email or phone text link |
| `backToTop` | `object` | `{ enabled: true }` | No | Show/hide the back to top arrow button |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `6` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |
