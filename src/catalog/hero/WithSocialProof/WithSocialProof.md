# With Social Proof

Centered hero with an avatar stack and trust label below the CTAs. Ideal for post-launch pages that need immediate credibility.

## When to use

- Post-launch traction and growth pages
- Products with an established user base to highlight
- Pages where social proof directly supports conversion

## Usage

```jsx
import WithSocialProof from "@/catalog/hero/WithSocialProof";

<WithSocialProof
  headline="Loved by teams shipping at scale"
  subtext="Join thousands of startups using our platform to launch faster, iterate confidently, and grow without friction."
  primaryAction={{ label: "Get started free", href: "#signup" }}
  secondaryAction={{ label: "Book a demo", href: "#demo" }}
  socialProof={{
    label: "Trusted by 2,000+ teams worldwide",
    avatars: [
      { initials: "JD", color: "bg-brand" },
      { initials: "AK", color: "bg-navy" },
    ],
  }}
  styles={{ paddingY: 8, background: "surface", textAlign: "center", minHeight: "lg" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `headline` | `string` | `"Loved by teams shipping at scale"` | No | Main headline displayed above the CTAs |
| `subtext` | `string` | `"Join thousands of startups using our platform..."` | No | Supporting text below the headline. Pass `""` to hide |
| `primaryAction` | `{ label: string, href: string, variant?, size? }` | `{ label: "Get started free", href: "#signup" }` | No | Primary call-to-action button |
| `secondaryAction` | `{ label: string, href: string, variant?, size? }` | `{ label: "Book a demo", href: "#demo" }` | No | Secondary call-to-action button |
| `socialProof` | `{ label: string, avatars: Array<{ initials: string, color?: string }> }` | 5 sample avatars + label | No | Avatar stack and trust label below the CTAs |
| `styles` | `object` | `{ paddingY: 8, background: "surface", textAlign: "center", minHeight: "lg" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"`, `"gradient"` | Section background token |
| `textAlign` | `string` | `"center"` | `"left"`, `"center"` | Headline and copy alignment |
| `minHeight` | `string` | `"lg"` | `"auto"`, `"md"`, `"lg"`, `"screen"` | Minimum section height |

## JSON example

```json
{
  "id": "hero-4",
  "type": "hero",
  "variant": "with-social-proof",
  "props": {
    "headline": "Loved by teams shipping at scale",
    "subtext": "Join thousands of startups using our platform to launch faster, iterate confidently, and grow without friction.",
    "primaryAction": { "label": "Get started free", "href": "#signup" },
    "secondaryAction": { "label": "Book a demo", "href": "#demo" },
    "socialProof": {
      "label": "Trusted by 2,000+ teams worldwide",
      "avatars": [
        { "initials": "JD", "color": "bg-brand" },
        { "initials": "AK", "color": "bg-navy" }
      ]
    }
  },
  "styles": {
    "paddingY": 8,
    "background": "surface",
    "textAlign": "center",
    "minHeight": "lg"
  }
}
```
