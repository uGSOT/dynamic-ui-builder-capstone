# Icon Cards

Feature cards with Lucide icons, step labels, and descriptions arranged in a horizontal grid. Ideal for product highlights, feature overviews, and numbered benefit sections.

## When to use

- Product feature sections with 3–6 items
- Onboarding or "how it works" blocks where each step has a distinct icon
- Wide desktop layouts that benefit from a card-per-feature treatment

## Usage

```jsx
import IconCards from "@/catalog/icon-cards/IconCards";

<IconCards
  heading="Built for speed and consistency"
  subheading="Every site shares the same design tokens and predictable API layout."
  items={[
    { step: "01", title: "Instant preview", description: "Changes reflect in under 100ms. No deploy step, no waiting.", icon: "Zap" },
    { step: "02", title: "37 curated variants", description: "Every section type startups need — hero through footer.", icon: "Layers" },
    { step: "03", title: "JSON source of truth", description: "Declarative configs you own. Import, export, version control.", icon: "Code2" },
  ]}
  styles={{ paddingY: 16, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Built for speed and consistency"` | No | Section title displayed above the cards |
| `subheading` | `string` | `"Every site shares the same design tokens and predictable API layout."` | No | Supporting text below the heading. Pass `""` to hide |
| `items` | `Array<{ step: string, title: string, description: string, icon: string }>` | 3 sample feature items | No | Each item renders as a card. `icon` must be a valid [Lucide icon](https://lucide.dev/icons/) name (e.g. `"Zap"`, `"Layers"`). Falls back to `Sparkles` if the icon is not found |
| `styles` | `object` | `{ paddingY: 16, background: "surface" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |
| `paddingY` | `number` | `16` | `8`, `12`, `16`, `20` | Vertical section padding scale |
| `headingColor` | `string` | `"text-text"` | Any text color token | Color applied to the section heading |
| `headingSize` | `string` | `"text-3xl"` | Any text size token | Font size of the section heading |
| `headingWeight` | `string` | `"font-bold"` | Any font weight token | Font weight of the section heading |
| `subheadingColor` | `string` | `"text-ink-muted"` | Any text color token | Color applied to the subheading |
| `subheadingSize` | `string` | `"text-base"` | Any text size token | Font size of the subheading |
| `subheadingWeight` | `string` | `"font-normal"` | Any font weight token | Font weight of the subheading |
| `cardBg` | `string` | `"bg-surface"` | Any background token | Card background color (ignored when `background` is `"navy"`) |
| `cardTextColor` | `string` | `"text-text"` | Any text color token | Card title color (ignored when `background` is `"navy"`) |
| `cardTitleWeight` | `string` | `"font-bold"` | Any font weight token | Font weight of each card's title |

## JSON example

```json
{
  "id": "icon-cards-1",
  "type": "features",
  "variant": "icon-cards",
  "props": {
    "heading": "Built for speed and consistency",
    "subheading": "Every site shares the same design tokens and predictable API layout.",
    "items": [
      { "step": "01", "title": "Instant preview", "description": "Changes reflect in under 100ms. No deploy step, no waiting.", "icon": "Zap" },
      { "step": "02", "title": "37 curated variants", "description": "Every section type startups need — hero through footer.", "icon": "Layers" },
      { "step": "03", "title": "JSON source of truth", "description": "Declarative configs you own. Import, export, version control.", "icon": "Code2" }
    ]
  },
  "styles": {
    "paddingY": 16,
    "background": "surface"
  }
}
```