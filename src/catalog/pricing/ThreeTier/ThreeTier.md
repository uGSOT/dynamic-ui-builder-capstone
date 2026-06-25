# Three Tier Cards

A standard SaaS-style pricing section displaying three plan cards side-by-side (Basic, Pro, and Enterprise), with support for highlighting a specific card (typically the Pro plan) as "Most Popular".

## When to use

- Standard SaaS billing page or subscription plan selection
- Products with tiered service levels (e.g. Free, Pro, Enterprise)

## Usage

```jsx
import ThreeTier from "@/catalog/pricing/ThreeTier";

<ThreeTier
  heading="Simple, transparent pricing"
  subheading="Choose the perfect plan for your team."
  plans={[
    {
      name: "Basic Plan",
      price: "$9",
      period: "/mo",
      description: "Essential tools for freelancers and small projects.",
      features: ["Up to 3 active projects", "Basic analytics dashboard"],
      cta: { label: "Get Started", href: "/signup" },
      highlighted: false
    },
    {
      name: "Pro Plan",
      price: "$29",
      period: "/mo",
      description: "Advanced capabilities for growing teams.",
      features: ["Unlimited active projects", "Advanced usage reports"],
      cta: { label: "Try Pro Free", href: "/signup-pro" },
      highlighted: true
    },
    {
      name: "Enterprise Plan",
      price: "$99",
      period: "/mo",
      description: "Custom security and compliance.",
      features: ["Everything in Pro", "Dedicated account manager"],
      cta: { label: "Contact Sales", href: "/contact" },
      highlighted: false
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
| `plans` | `Array<Plan>` | 3 default plans | No | Array of plan card detail configurations |
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
  "id": "pricing-1",
  "type": "pricing",
  "variant": "three-tier",
  "props": {
    "heading": "Simple, transparent pricing",
    "subheading": "Choose the perfect plan for your team.",
    "plans": [
      {
        "name": "Basic Plan",
        "price": "$9",
        "period": "/mo",
        "description": "Essential tools for freelancers and small projects.",
        "features": ["Up to 3 active projects"],
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
