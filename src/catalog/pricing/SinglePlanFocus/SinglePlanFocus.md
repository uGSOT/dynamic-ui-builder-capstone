# Single Plan Focus

A pricing section that highlights a single main plan in a wide, centered layout block, detailing everything included in the subscription.

## When to use

- Single-tier products or standard flat-rate SaaS subscriptions
- Special promotional landing pages highlighting a specific premium tier
- Landing pages aiming to minimize decision friction by presenting one price

## Usage

```jsx
import SinglePlanFocus from "@/catalog/pricing/SinglePlanFocus";

<SinglePlanFocus
  heading="Simple, transparent pricing"
  subheading="Choose the perfect plan for your team."
  plans={[
    {
      name: "Pro Professional",
      price: "$29",
      period: "/mo",
      description: "All-in-one professional package containing all capabilities.",
      features: [
        "Unlimited projects",
        "Full analytics suite",
        "Priority email & chat support",
        "100GB secure cloud storage"
      ],
      cta: { label: "Get Access Now", href: "/signup" },
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
| `plans` | `Array<Plan>` | 1 default plan | No | Array containing the plan card details |
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
  "id": "pricing-single",
  "type": "pricing",
  "variant": "single-plan-focus",
  "props": {
    "heading": "Simple, transparent pricing",
    "subheading": "Choose the perfect plan for your team.",
    "plans": [
      {
        "name": "Pro Professional",
        "price": "$29",
        "period": "/mo",
        "description": "All-in-one professional package.",
        "features": ["Unlimited projects", "Full analytics suite"],
        "cta": { "label": "Get Access Now", "href": "/signup" },
        "highlighted": true
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
