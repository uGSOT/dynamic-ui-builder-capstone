# LogoGrid

Logos arranged in a structured card grid. Each logo sits in its own rounded box with a border and hover effect. Gives logos equal visual weight and looks more premium than a simple row.

---

## How it looks

- Small uppercase label at the very top
- Bold heading below the label
- Short paragraph below the heading
- Logos in a 3 or 4 column grid
- Each logo sits in its own rounded card with a border
- Company name displayed below each logo
- On mobile always collapses to 2 columns

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | `string` | No | `"OUR STARTUP PARTNERS"` | Small uppercase text above the heading |
| `heading` | `string` | No | `"Trusted by innovative startups"` | Bold heading below the label |
| `subheading` | `string` | No | `"We're proud to partner..."` | Short paragraph below the heading |
| `logos` | `array` | Yes | 6 sample logos | List of logos to display |
| `logos[].image` | `string` | Yes | — | Path to the logo file in public/assets/logos/ |
| `logos[].alt` | `string` | Yes | — | Alt text shown below the logo inside the card |
| `grayscale` | `boolean` | No | `false` | Show logos in grayscale with reduced opacity |
| `columns` | `number` | No | `3` | Number of grid columns. Accepts 3 or 4 |

---

## Styles

| Key | Type | Default | Allowed Values | Description |
|-----|------|---------|----------------|-------------|
| `paddingY` | `number` | `16` | `4, 6, 8, 10, 16` | Top and bottom spacing |
| `background` | `string` | `surface` | `surface, muted, navy` | Background color token |

---

## When to use

- When you have 6 or more logos to display
- When you want logos to feel structured and equally weighted
- On enterprise or B2B pages where partner credibility matters
- When a flowing row would look uneven with many logos

---

## Example JSON

```json
{
  "id": "logo-cloud-logo-grid",
  "type": "logo-cloud",
  "variant": "logo-grid",
  "props": {
    "label": "OUR STARTUP PARTNERS",
    "heading": "Trusted by innovative startups",
    "subheading": "We're proud to partner with forward-thinking startups building the future.",
    "grayscale": false,
    "columns": 3,
    "logos": [
      { "image": "/assets/logos/stripe.svg", "alt": "Stripe" },
      { "image": "/assets/logos/vercel.svg", "alt": "Vercel" },
      { "image": "/assets/logos/linear.svg", "alt": "Linear" },
      { "image": "/assets/logos/notion.svg", "alt": "Notion" },
      { "image": "/assets/logos/loom.svg", "alt": "Loom" },
      { "image": "/assets/logos/figma.svg", "alt": "Figma" }
    ]
  },
  "styles": {
    "paddingY": 16,
    "background": "surface"
  },
  "responsive": {}
}
```

---

## Notes

- `label`, `heading` and `subheading` are all optional — skip any you don't need
- `logo.alt` is used as the company name label below each logo card — no separate prop needed
- `columns: 3` gives a 3 column grid on tablet and above, 2 columns on mobile
- `columns: 4` gives a 4 column grid on tablet and above, 2 columns on mobile
- `grayscale` defaults to `false` here unlike SimpleRow and WithHeading — the grid style looks better with color logos
- Card hover uses `hover:bg-muted` from your design token system