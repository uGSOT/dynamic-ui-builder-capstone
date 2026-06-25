# With Social Proof Hero

A hero section with centered content, actions, an optional image, and a user avatar stack combined with social proof copy located below the CTA buttons.

## When to use

- Mid-stage or mature startups where user growth, client count, or download numbers are major selling points
- Pages where building credibility and trust instantly is highly prioritized

## Usage

```jsx
import WithSocialProof from "@/catalog/hero/WithSocialProof";

<WithSocialProof
  headline="Build the future of your company"
  subtext="Collaborate seamlessly across engineering, product, and design to ship beautiful products."
  primaryAction={{ label: "Start building today", href: "/signup" }}
  secondaryAction={{ label: "Talk to product expert", href: "/contact" }}
  badge="Trusted by top engineering organizations"
  socialProofText="Joined by 12,000+ developers this week"
  socialProofAvatars={[
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  ]}
  styles={{ paddingY: 10, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `headline` | `string` | `"Build the future..."` | No | Main heading title text |
| `subtext` | `string` | `"Collaborate seamlessly..."` | No | Supporting description paragraphs |
| `primaryAction` | `object` | `{ label: "Start building today", href: "#" }` | No | Primary conversion button configuration |
| `secondaryAction` | `object` | `{ label: "Talk to product expert", href: "#" }` | No | Secondary button configuration |
| `badge` | `string` | `"Trusted by top..."` | No | Sub-CTA supporting text badge |
| `imageUrl` | `string` | `""` | No | Optional hero mockup/screenshot image URL |
| `socialProofText` | `string` | `"Joined by 12,000+..."` | No | Credibility/growth text shown below buttons |
| `socialProofAvatars` | `Array<string>` | 4 sample avatar images | No | List of image URLs of users/clients |
| `styles` | `object` | `{ paddingY: 10, background: "surface" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `10` | `4`, `6`, `8`, `10` | Vertical section padding scale |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "hero-social-proof",
  "type": "hero",
  "variant": "with-social-proof",
  "props": {
    "headline": "Build the future of your company",
    "subtext": "Collaborate seamlessly across engineering, product, and design to ship beautiful products.",
    "primaryAction": { "label": "Start building today", "href": "/signup" },
    "secondaryAction": { "label": "Talk to product expert", "href": "/contact" },
    "badge": "Trusted by top engineering organizations",
    "socialProofText": "Joined by 12,000+ developers this week",
    "socialProofAvatars": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    ]
  },
  "styles": {
    "paddingY": 10,
    "background": "surface"
  }
}
```
