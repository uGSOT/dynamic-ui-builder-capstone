# Steps Vertical

Numbered step items stacked vertically with a connecting timeline line. Ideal for sequential workflows, onboarding flows, or process guides where order and readability matter more than width.

## When to use

- Onboarding or setup flows with 3–6 steps
- Narrative-driven "how it works" sections
- Narrower or single-column layouts where horizontal steps would feel cramped

## Usage

```jsx
import StepsVertical from "@/catalog/steps/StepsVertical";

<StepsVertical
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
| `heading` | `string` | `"Gallery → JSON → Builder"` | No | Section title displayed above the step list |
| `subheading` | `string` | `"A connected workflow so you never write component JSON from scratch."` | No | Supporting text below the heading. Pass `""` to hide |
| `items` | `Array<{ step: string, title: string, description: string }>` | 3 sample step items | No | Each item renders as a row with a numbered circle and connecting line |
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
| `cardBg` | `string` | `"bg-transparent"` | Any background token | Row background color (ignored when `background` is `"navy"`) |
| `cardTextColor` | `string` | `"text-text"` | Any text color token | Step title color (ignored when `background` is `"navy"`) |
| `cardTitleWeight` | `string` | `"font-bold"` | Any font weight token | Font weight of each step's title |

## JSON example

```json
{
  "id": "steps-vertical-1",
  "type": "steps",
  "variant": "steps-vertical",
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