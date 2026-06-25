# Split With Copy

A storytelling section where supporting copy sits beside a list of stats. Great for proof-driven pages that need both context and key metrics.

## When to use

- Case studies, product pages, or marketing sections
- When you want to explain the data as well as show it
- Landing pages that need proof plus narrative

## Usage

```jsx
import SplitWithCopy from "@/catalog/stats/SplitWithCopy";

<SplitWithCopy
  heading="Metrics that move the needle"
  body="These statistics demonstrate our product performance, customer satisfaction, and operational reliability." 
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
| `heading` | `string` | `"Metrics that back your story"` | No | Optional section title |
| `body` | `string` | Supporting paragraph text | No | Supporting body content beside the stats |
| `stats` | `Array<{ value: string, label: string, suffix?: string, icon?: string }>` | Sample stats array | No | Metrics displayed in the split layout |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Style tokens for section padding and background |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "stats-split-with-copy",
  "type": "stats",
  "variant": "split-with-copy",
  "props": {
    "heading": "Metrics that move the needle",
    "body": "These statistics demonstrate our product performance, customer satisfaction, and operational reliability.",
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
