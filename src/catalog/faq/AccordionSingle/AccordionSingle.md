# Accordion Single Column

Expand/collapse Q&A list in a single centered column. One question opens at a time — the standard FAQ pattern for startup landing pages.

## When to use

- Standard FAQ section below pricing or testimonials
- Short to medium FAQ lists (4–8 items)
- Pages where a focused, readable column works best

## Usage

```jsx
import AccordionSingle from "@/catalog/faq/AccordionSingle";

<AccordionSingle
  heading="Frequently asked questions"
  subheading="Everything you need to know about the product and billing."
  items={[
    { question: "How does the free trial work?", answer: "Start with a 14-day free trial..." },
    { question: "Can I change plans later?", answer: "Yes. Upgrade or downgrade at any time." },
  ]}
  defaultOpenIndex={0}
  styles={{ paddingY: 8, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Frequently asked questions"` | No | Section title displayed above the accordion |
| `subheading` | `string` | `"Everything you need to know about the product and billing."` | No | Supporting text below the heading. Pass `""` to hide |
| `items` | `Array<{ question: string, answer: string }>` | 6 sample FAQ items | No | List of question/answer pairs |
| `defaultOpenIndex` | `number` | `0` | No | Index of the item open on first render. Use `-1` for all closed |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "faq-1",
  "type": "faq",
  "variant": "accordion-single",
  "props": {
    "heading": "Frequently asked questions",
    "subheading": "Everything you need to know about the product and billing.",
    "items": [
      { "question": "How does the free trial work?", "answer": "Start with a 14-day free trial..." }
    ],
    "defaultOpenIndex": 0
  },
  "styles": {
    "paddingY": 8,
    "background": "surface"
  }
}
```
