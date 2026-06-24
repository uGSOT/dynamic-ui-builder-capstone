# Grouped By Category

FAQs organized under category headings such as Product, Pricing, and Security. Each category contains its own accordion list.

## When to use

- Enterprise or compliance-heavy products
- FAQs that naturally group by topic
- Sites where visitors scan by category before reading answers

## Usage

```jsx
import GroupedByCategory from "@/catalog/faq/GroupedByCategory";

<GroupedByCategory
  heading="Frequently asked questions"
  subheading="Organized by topic for enterprise and compliance-focused products."
  categories={[
    {
      name: "Product",
      items: [
        { question: "What features are included?", answer: "All plans include core features." },
      ],
    },
    {
      name: "Security",
      items: [
        { question: "Do you support SSO?", answer: "Yes, on Enterprise plans." },
      ],
    },
  ]}
  defaultOpenKey="0-0"
  styles={{ paddingY: 8, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Frequently asked questions"` | No | Section title displayed above the categories |
| `subheading` | `string` | `"Organized by topic for enterprise and compliance-focused products."` | No | Supporting text below the heading. Pass `""` to hide |
| `categories` | `Array<{ name: string, items: Array<{ question: string, answer: string }> }>` | 3 sample categories | No | Grouped FAQ content |
| `defaultOpenKey` | `string` | `"0-0"` | No | Key of the open item on first render (`"{categoryIndex}-{itemIndex}"`). Pass `""` for all closed |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "faq-3",
  "type": "faq",
  "variant": "grouped-category",
  "props": {
    "heading": "Frequently asked questions",
    "subheading": "Organized by topic for enterprise and compliance-focused products.",
    "categories": [
      {
        "name": "Product",
        "items": [
          { "question": "What features are included?", "answer": "All plans include core features." }
        ]
      }
    ],
    "defaultOpenKey": "0-0"
  },
  "styles": {
    "paddingY": 8,
    "background": "surface"
  }
}
```
