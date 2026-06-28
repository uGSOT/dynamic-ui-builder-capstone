# With Newsletter Footer

Growth-focused landing page footer rendering an email subscription form block on the top row, combined with standard brand tagline column, multi-column navigation structures, copyright, and social icons.

## When to use

- Growing startup products building user email waitlists
- E-commerce or SaaS products sending regular blog newsletters
- Blogs and guides looking to drive subscriptions

## Usage

```jsx
import WithNewsletter from "@/catalog/footer/WithNewsletter";

<WithNewsletter
  logo={{ type: "text", text: "GrowthLab", icon: "TrendingUp" }}
  tagline="Growth tools and insights for ambitious teams."
  newsletter={{
    title: "Stay in the loop",
    description: "Get product updates, growth tips and startup insights—straight to your inbox.",
    placeholder: "Enter your email",
    buttonText: "Subscribe"
  }}
  columns={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" }
      ]
    }
  ]}
  socialLinks={[
    { platform: "twitter", href: "#", icon: "Twitter" }
  ]}
  copyright="© 2026 GrowthLab Inc. All rights reserved."
  backToTop={{ enabled: true, label: "Back to Top" }}
  styles={{ paddingY: 6, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `logo` | `object` | `{ type: "text", text: "GrowthLab", icon: "TrendingUp" }` | No | Brand mark text or image configuration |
| `tagline` | `string` | `"Growth tools and insights..."` | No | Company description tag below the logo |
| `newsletter` | `object` | Email form configuration | No | Form labels, description, placeholder, and CTA button text |
| `columns` | `array` | 5 navigation columns | No | Footer link collections |
| `socialLinks` | `array` | 4 social profiles | No | Brand links rendered on the bottom right |
| `copyright` | `string` | `"© 2026 GrowthLab Inc. All rights reserved."` | No | Copyright notice |
| `backToTop` | `object` | `{ enabled: true }` | No | Option to render a scroll-to-top button |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `6` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |
