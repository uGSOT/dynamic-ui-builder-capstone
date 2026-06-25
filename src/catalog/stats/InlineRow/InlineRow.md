# Inline Row

A compact horizontal stats strip perfect for hero or feature sections. Displays four key metrics in a single row with a clean, balanced layout.

## When to use

- Below hero or feature sections
- Quick showcase of traction numbers
- Simple, lightweight statistics display

## Usage

```jsx
import InlineRow from "@/catalog/stats/InlineRow";

<InlineRow
  heading="Company highlights"
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
| `heading` | `string` | `"Traction in one glance"` | No | Optional section title above the row |
| `stats` | `Array<{ value: string, label: string, suffix?: string, icon?: string }>` | Sample stats array | No | Metrics displayed in the row |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Style tokens for section padding and background |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "stats-inline-row",
  "type": "stats",
  "variant": "inline-row",
  "props": {
    "heading": "Company highlights",
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
