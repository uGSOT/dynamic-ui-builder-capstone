# SimpleRow

A clean horizontal strip of company logos with no heading. Best placed just below the hero section for subtle social proof without pulling too much attention away from the main content.

---

## How it looks

- Logos sit in a single centered row
- Wraps into multiple rows on mobile automatically
- Grayscale by default with slight opacity
- Thin top and bottom border separates it from surrounding sections

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `logos` | `array` | Yes | 5 sample logos | List of logos to display |
| `logos[].image` | `string` | Yes | — | Path to the logo file in public/assets/logos/ |
| `logos[].alt` | `string` | Yes | — | Alt text for the logo (company name) |
| `grayscale` | `boolean` | No | `true` | Show logos in grayscale with reduced opacity |

---

## Styles

| Key | Type | Default | Allowed Values | Description |
|-----|------|---------|----------------|-------------|
| `paddingY` | `number` | `10` | `4, 6, 8, 10, 12` | Top and bottom spacing |
| `background` | `string` | `surface` | `surface, muted, navy` | Background color token |

---

## When to use

- Right below the hero section
- When you want social proof to feel subtle and minimal
- When you have 4 to 6 logos and no heading is needed

---

## Example JSON

```json
{
  "id": "logo-cloud-simple-row",
  "type": "logo-cloud",
  "variant": "simple-row",
  "props": {
    "grayscale": true,
    "logos": [
      { "image": "/assets/logos/stripe.svg", "alt": "Stripe" },
      { "image": "/assets/logos/vercel.svg", "alt": "Vercel" },
      { "image": "/assets/logos/linear.svg", "alt": "Linear" },
      { "image": "/assets/logos/loom.svg", "alt": "Loom" },
      { "image": "/assets/logos/figma.svg", "alt": "Figma" }
    ]
  },
  "styles": {
    "paddingY": 10,
    "background": "surface"
  },
  "responsive": {}
}
```

---

## Notes

- `grayscale` uses a CSS filter inline style — not a Tailwind class — because it is dynamic at runtime
- `background` and `paddingY` map to Tailwind classes via a lookup object inside the component — not inline styles
- Logo images should be SVG for best quality at any size
- Always provide meaningful `alt` text for accessibility