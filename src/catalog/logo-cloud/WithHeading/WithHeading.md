# WithHeading

A logo row with a large bold heading above and an optional badge below. More prominent than SimpleRow — makes the social proof explicit with a clear label like "trusted by teams at".

---

## How it looks

- Large bold heading centered at the top
- Logos in a centered row below the heading
- Optional pill-shaped badge at the bottom with an icon, main text and subtext
- Grayscale logos by default
- No border — works as a standalone section with its own padding

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `heading` | `string` | No | `"trusted by teams at"` | Large bold heading above the logos |
| `logos` | `array` | Yes | 6 sample logos | List of logos to display |
| `logos[].image` | `string` | Yes | — | Path to the logo file in public/assets/logos/ |
| `logos[].alt` | `string` | Yes | — | Alt text for the logo (company name) |
| `grayscale` | `boolean` | No | `true` | Show logos in grayscale with reduced opacity |
| `badge` | `object` | No | See below | Small pill badge shown below the logos |
| `badge.text` | `string` | No | `"10,000+ teams"` | Main text inside the badge |
| `badge.subtext` | `string` | No | `"from startups to enterprises"` | Smaller supporting text below badge text |

---

## Styles

| Key | Type | Default | Allowed Values | Description |
|-----|------|---------|----------------|-------------|
| `paddingY` | `number` | `16` | `4, 6, 8, 10, 16` | Top and bottom spacing |
| `background` | `string` | `surface` | `surface, muted, navy` | Background color token |

---

## When to use

- When you want to make the social proof section more prominent
- Between the hero and features sections
- When you have 5 to 6 logos and want a clear heading above them
- When you want to show a traction number like "10,000+ teams"

---

## Example JSON

```json
{
  "id": "logo-cloud-with-heading",
  "type": "logo-cloud",
  "variant": "with-heading",
  "props": {
    "heading": "trusted by teams at",
    "grayscale": true,
    "badge": {
      "text": "10,000+ teams",
      "subtext": "from startups to enterprises"
    },
    "logos": [
      { "image": "/assets/logos/slack.svg", "alt": "Slack" },
      { "image": "/assets/logos/notion.svg", "alt": "Notion" },
      { "image": "/assets/logos/linear.svg", "alt": "Linear" },
      { "image": "/assets/logos/loom.svg", "alt": "Loom" },
      { "image": "/assets/logos/figma.svg", "alt": "Figma" },
      { "image": "/assets/logos/stripe.svg", "alt": "Stripe" }
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

- `badge` is fully optional — if not passed the badge section simply does not render
- `heading` is also optional — if not passed the component renders just the logo row and badge
- The badge uses the `Users` icon from lucide-react
- Badge colors use `text-brand` and `bg-surface-muted` from your design token system
- `grayscale` uses inline CSS filter because it is a dynamic runtime value