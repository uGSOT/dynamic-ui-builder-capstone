# Two Tier Highlight

A pricing section displaying two plan cards side-by-side (Standard and Growth), with the Growth plan visually highlighted to drive conversions.

## When to use

- Early-stage products with a primary plan and a secondary fallback plan
- High-intent subscription flows where you want to anchor users to a specific highlighted price point

## Usage

```jsx
import TwoTierHighlight from "@/catalog/pricing/TwoTierHighlight";

<TwoTierHighlight
  heading="Simple, transparent pricing"
  subheading="Choose the perfect plan for your team."
  plans={[
    {
      name: "Standard Plan",
      price: "$19",
      period: "/mo",
      description: "Great features for startups and growing businesses.",
      features: ["Up to 10 active projects", "Advanced analytics dashboard"],
      cta: { label: "Get Started", href: "/signup" },
      highlighted: false
    },
    {
      name: "Growth Plan",
      price: "$49",
      period: "/mo",
      description: "Perfect for scaling organizations.",
      features: ["Unlimited active projects", "Real-time collaboration"],
      cta: { label: "Start Free Trial", href: "/signup-growth" },
      highlighted: true
    }
  ]}
  billingToggle={{
    enabled: true,
    annualLabel: "Annually (Save 20%)",
    monthlyLabel: "Monthly"
  }}
  styles={{ paddingY: 8, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Simple, transparent pricing"` | No | Section heading title text |
| `subheading` | `string` | `"Choose the perfect plan..."` | No | Supporting subtitle text below heading |
| `plans` | `Array<Plan>` | 2 default plans | No | Array of plan card detail configurations |
| `billingToggle` | `object` | Toggle configuration | No | Options to control the billing toggle |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "pricing-two-tier",
  "type": "pricing",
  "variant": "two-tier-highlight",
  "props": {
    "heading": "Simple, transparent pricing",
    "subheading": "Choose the perfect plan for your team.",
    "plans": [
      {
        "name": "Standard Plan",
        "price": "$19",
        "period": "/mo",
        "description": "Great features for startups.",
        "features": ["Up to 10 active projects"],
        "cta": { "label": "Get Started", "href": "/signup" },
        "highlighted": false
      }
    ],
    "billingToggle": {
      "enabled": true,
      "annualLabel": "Annually (Save 20%)",
      "monthlyLabel": "Monthly"
    }
  },
  "styles": {
    "paddingY": 8,
    "background": "surface"
  }
}
```
