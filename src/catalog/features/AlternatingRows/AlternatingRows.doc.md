# Alternating Rows
Feature rows where the image and copy alternate sides with each row. Best for a deep-dive on 2–4 key capabilities where each deserves its own visual.

## When to use
- Deep-dive on 2–4 key product features
- When each feature has a distinct visual or screenshot
- Sections below the hero where you want to build narrative momentum

## Usage
```jsx
import AlternatingRows from "@/catalog/features/AlternatingRows";

<AlternatingRows
  heading="A deeper look at what we built"
  subheading="Every feature is designed around real workflows — not checkboxes."
  imagePosition="right-first"
  showBullets={true}
  showTags={true}
  features={[
    {
      id: "f1",
      icon: "Zap",
      tag: "Performance",
      title: "Blazing fast by default",
      description: "Optimised for performance from day one. No bloat, no config.",
      bullets: ["Zero cold starts", "Edge-optimised delivery", "Automatic rollbacks"],
      image: null,
    },
    {
      id: "f2",
      icon: "Shield",
      tag: "Security",
      title: "Secure by default",
      description: "End-to-end encryption and audit logs included on every plan.",
      bullets: ["SOC 2 Type II certified", "SAML & OIDC SSO", "Fine-grained permissions"],
      image: null,
    },
  ]}
  styles={{ background: "surface", accentColor: "indigo", showBullets: true }}
/>
```

## Props
| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"A deeper look at what we built"` | No | Section title displayed above the rows |
| `subheading` | `string` | `"Every feature is designed around real workflows..."` | No | Supporting text below the heading. Pass `""` to hide |
| `imagePosition` | `string` | `"right-first"` | No | Image side for the first row. Alternates automatically after that |
| `showBullets` | `boolean` | `true` | No | Show or hide the bullet checklist on each row |
| `showTags` | `boolean` | `true` | No | Show or hide the tag pill above each row title |
| `features` | `Array<{ id, icon, tag, title, description, bullets, image }>` | 3 sample features | No | Feature rows. `image` accepts a URL or `null` for the icon placeholder |
| `styles` | `object` | see Styles | No | Token-based style overrides (see Styles) |

## Styles
| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `6` | `1` – `12` | Vertical section padding (maps to Tailwind `py-*`) |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"`, `"transparent"`, `"blur"` | Section background token |
| `headingAlign` | `string` | `"left"` | `"left"`, `"center"` | Heading and subheading alignment |
| `headingSize` | `string` | `"4xl"` | `"3xl"`, `"4xl"`, `"5xl"` | Heading font size |
| `headingColor` | `string` | `""` | Any CSS color e.g. `"#ffffff"`, or `""` for auto | Heading color override |
| `subheadingSize` | `string` | `"lg"` | `"base"`, `"lg"`, `"xl"` | Subheading font size |
| `subheadingColor` | `string` | `""` | Any CSS color or `""` for auto | Subheading color override |
| `titleSize` | `string` | `"base"` | `"sm"`, `"base"`, `"lg"` | Row title font size |
| `titleColor` | `string` | `""` | Any CSS color or `""` for auto | Row title color override |
| `descSize` | `string` | `"sm"` | `"xs"`, `"sm"`, `"base"` | Row description font size |
| `descColor` | `string` | `""` | Any CSS color or `""` for auto | Row description and bullet color override |
| `accentColor` | `string` | `"indigo"` | `"indigo"`, `"violet"`, `"emerald"`, `"rose"`, `"blue"` | Accent color for tags, icons, and bullet checkmarks |

## JSON example
```json
{
  "id": "features-alternating-rows",
  "type": "features",
  "variant": "alternating-rows",
  "props": {
    "heading": "A deeper look at what we built",
    "subheading": "Every feature is designed around real workflows — not checkboxes.",
    "imagePosition": "right-first",
    "showBullets": true,
    "showTags": true,
    "features": [
      {
        "id": "f1",
        "icon": "Zap",
        "tag": "Performance",
        "title": "Blazing fast by default",
        "description": "Optimised for performance from day one.",
        "bullets": ["Zero cold starts", "Edge-optimised delivery"],
        "image": null
      }
    ]
  },
  "styles": {
    "paddingY": 6,
    "background": "surface",
    "accentColor": "indigo",
    "headingAlign": "left"
  }
}
```