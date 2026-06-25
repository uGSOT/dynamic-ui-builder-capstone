# Accordion Two Column

FAQ questions split across two accordion columns. Ideal for longer FAQ lists that benefit from a wider layout.

## When to use

- Long FAQ lists (6+ items)
- Enterprise or compliance-heavy products with many questions
- Wide desktop layouts where a single column feels too tall

## Usage

```jsx
import AccordionTwoColumn from "@/catalog/faq/AccordionTwoColumn";

<AccordionTwoColumn
  heading="Frequently asked questions"
  subheading="Find quick answers across our most common topics."
  items={[
    { question: "How does billing work?", answer: "We bill monthly or annually." },
    { question: "Is SSO supported?", answer: "Yes, on Enterprise plans." },
  ]}
  defaultOpenIndex={0}
  styles={{ paddingY: 8, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Frequently asked questions"` | No | Section title displayed above the columns |
| `subheading` | `string` | `"Find quick answers across our most common topics."` | No | Supporting text below the heading. Pass `""` to hide |
| `items` | `Array<{ question: string, answer: string }>` | 6 sample FAQ items | No | Items are split evenly between left and right columns |
| `defaultOpenIndex` | `number` | `0` | No | Global index of the item open on first render. Use `-1` for all closed |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "faq-2",
  "type": "faq",
  "variant": "accordion-two-column",
  "props": {
    "heading": "Frequently asked questions",
    "subheading": "Find quick answers across our most common topics.",
    "items": [
      { "question": "How does billing work?", "answer": "We bill monthly or annually." }
    ],
    "defaultOpenIndex": 0
  },
  "styles": {
    "paddingY": 8,
    "background": "surface"
  }
}
```
