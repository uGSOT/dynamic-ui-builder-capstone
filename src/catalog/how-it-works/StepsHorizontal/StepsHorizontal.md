# Steps Horizontal

Numbered step cards arranged in a horizontal row with connector lines. Ideal for illustrating sequential workflows, onboarding flows, or process overviews.

## When to use

- Onboarding or product walkthrough sections (3–5 steps)
- Feature highlight flows with a clear sequence
- Wide desktop layouts where vertical stacking would feel disconnected

## Usage

```jsx
import StepsHorizontal from "@/catalog/steps/StepsHorizontal";

<StepsHorizontal
  heading="Gallery → JSON → Builder"
  subheading="A connected workflow so you never write component JSON from scratch."
  items={[
    { step: "01", title: "Explore the Gallery", description: "Browse component layout variants across section types." },
    { step: "02", title: "Copy component JSON", description: "Every tweak syncs to a live JSON data layout panel." },
    { step: "03", title: "Assemble in Builder", description: "Drop configurations into your application layout structure." },
  ]}
  styles={{ paddingY: 16, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Gallery → JSON → Builder"` | No | Section title displayed above the step cards |
| `subheading` | `string` | `"A connected workflow so you never write component JSON from scratch."` | No | Supporting text below the heading. Pass `""` to hide |
| `items` | `Array<{ step: string, title: string, description: string }>` | 3 sample step items | No | Each item renders as a numbered card. Steps are displayed left to right |
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
| `cardBg` | `string` | `"bg-muted"` | Any background token | Card background color (ignored when `background` is `"navy"`) |
| `cardTextColor` | `string` | `"text-text"` | Any text color token | Card title color (ignored when `background` is `"navy"`) |
| `cardTitleWeight` | `string` | `"font-bold"` | Any font weight token | Font weight of each card's title |

## JSON example

```json
{
  "id": "steps-1",
  "type": "steps",
  "variant": "steps-horizontal",
  "props": {
    "heading": "Gallery → JSON → Builder",
    "subheading": "A connected workflow so you never write component JSON from scratch.",
    "items": [
      { "step": "01", "title": "Explore the Gallery", "description": "Browse component layout variants across section types." },
      { "step": "02", "title": "Copy component JSON", "description": "Every tweak syncs to a live JSON data layout panel." },
      { "step": "03", "title": "Assemble in Builder", "description": "Drop configurations into your application layout structure." }
    ]
  },
  "styles": {
    "paddingY": 16,
    "background": "surface"
  }
}
```