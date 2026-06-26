# Stat Cards

Each stat appears in its own card, making metrics feel more tangible and highlighted. Use this variant when you want a more premium, structured stats section.

## When to use

- Highlight multiple metrics with equal weight
- Use as a standalone proof section on a landing page
- Add visual separation from other page sections

## Usage

```jsx
import StatCards from "@/catalog/stats/StatCards";

<StatCards
  heading="Strong results"
  stats={[
    { value: "10K+", label: "Monthly users", icon: "users" },
    { value: "99.9%", label: "Uptime", icon: "uptime" },
    { value: "4.8/5", label: "Customer rating", icon: "rating" },
    { value: "24/7", label: "Support", icon: "support" },
  ]}
  styles={{ paddingY: 8, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Strong metrics that matter"` | No | Optional section title above the cards |
| `stats` | `Array<{ value: string, label: string, suffix?: string, icon?: string }>` | Sample stats array | No | Cards to render for each metric |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Style tokens for section padding and background |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "stats-stat-cards",
  "type": "stats",
  "variant": "stat-cards",
  "props": {
    "heading": "Strong results",
    "stats": [
      { "value": "10K+", "label": "Monthly users", "icon": "users" },
      { "value": "99.9%", "label": "Uptime", "icon": "uptime" },
      { "value": "4.8/5", "label": "Customer rating", "icon": "rating" },
      { "value": "24/7", "label": "Support", "icon": "support" }
    ]
  },
  "styles": { "paddingY": 8, "background": "surface" }
}
```
