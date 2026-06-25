# Bento Grid
Asymmetric card grid with one large hero card, two medium cards, and four small cards. The modern layout pattern for dev-tool and AI product pages.

## When to use
- Modern dev-tool, AI product, or platform landing pages
- When features have different levels of importance and you want visual hierarchy
- As an alternative to a uniform grid when you want the layout itself to feel like a product

## Usage
```jsx
import BentoGrid from "@/catalog/features/BentoGrid";

<BentoGrid
  heading="The platform built for what's next"
  subheading="Every capability you need — assembled into a single coherent product."
  features={[
    { id: "f1", slot: "hero",   icon: "Zap",      tag: "Performance",  title: "Blazing fast",     description: "Optimised from day one.",              highlight: true  },
    { id: "f2", slot: "medium", icon: "Shield",   tag: "Security",     title: "Secure by default", description: "Encryption and access control built in.", highlight: false },
    { id: "f3", slot: "medium", icon: "BarChart2", tag: "Observability", title: "See everything",  description: "Real-time traces out of the box.",      highlight: false },
    { id: "f4", slot: "small",  icon: "Plug",     tag: "Integrations", title: "100+ integrations", description: "One-click setup.",                     highlight: false },
    { id: "f5", slot: "small",  icon: "Globe",    tag: "Infrastructure", title: "Global CDN",      description: "30+ regions instantly.",               highlight: false },
    { id: "f6", slot: "small",  icon: "Layers",   tag: "Platform",     title: "Composable APIs",  description: "Mix and match building blocks.",        highlight: false },
    { id: "f7", slot: "small",  icon: "RefreshCw", tag: "Reliability", title: "Auto rollbacks",   description: "Bad deploy? Rolled back in seconds.",   highlight: false },
  ]}
  styles={{ background: "surface", accentColor: "violet" }}
/>
```

## Props
| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"The platform built for what's next"` | No | Section title displayed above the grid |
| `subheading` | `string` | `"Every capability you need..."` | No | Supporting text below the heading. Pass `""` to hide |
| `features` | `Array<{ id, slot, icon, tag, title, description, highlight }>` | 7 sample features | No | Feature cards with `slot` controlling size. Recommended: 1 hero + 2 medium + 4 small |
| `styles` | `object` | see Styles | No | Token-based style overrides (see Styles) |

## Feature object — slot values
| Slot | Grid size | Best for |
|------|-----------|----------|
| `"hero"` | 2 cols × 2 rows | Most important feature — use `highlight: true` for accent background |
| `"medium"` | 1 col × 1 row | Secondary features — stacks next to the hero |
| `"small"` | 1 of 4 in bottom row | Supporting features — keep descriptions short |

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
| `cardBg` | `string` | `"default"` | `"default"`, `"transparent"`, `"custom"` | Card background preset |
| `customCardBgColor` | `string` | `""` | Any CSS color e.g. `"#18181c"` | Custom card color — only used when `cardBg` is `"custom"` |
| `cardBorder` | `boolean` | `true` | `true`, `false` | Show or hide card border |
| `cardShadow` | `string` | `"sm"` | `"none"`, `"sm"`, `"md"`, `"lg"` | Card drop shadow size |
| `titleSize` | `string` | `"base"` | `"sm"`, `"base"`, `"lg"` | Card title font size |
| `titleColor` | `string` | `""` | Any CSS color or `""` for auto | Card title color override |
| `descSize` | `string` | `"sm"` | `"xs"`, `"sm"`, `"base"` | Card description font size |
| `descColor` | `string` | `""` | Any CSS color or `""` for auto | Card description color override |
| `accentColor` | `string` | `"indigo"` | `"indigo"`, `"violet"`, `"emerald"`, `"rose"`, `"blue"` | Accent color for icons, tags, and hero highlight |

## JSON example
```json
{
  "id": "features-bento-grid",
  "type": "features",
  "variant": "bento-grid",
  "props": {
    "heading": "The platform built for what's next",
    "subheading": "Every capability you need — assembled into a single coherent product.",
    "features": [
      { "id": "f1", "slot": "hero",   "icon": "Zap",     "tag": "Performance",  "title": "Blazing fast",      "description": "Optimised from day one.",    "highlight": true  },
      { "id": "f2", "slot": "medium", "icon": "Shield",  "tag": "Security",     "title": "Secure by default", "description": "Built-in encryption.",        "highlight": false },
      { "id": "f3", "slot": "medium", "icon": "BarChart2","tag": "Observability","title": "See everything",    "description": "Real-time traces.",           "highlight": false },
      { "id": "f4", "slot": "small",  "icon": "Plug",    "tag": "Integrations", "title": "100+ integrations", "description": "One-click setup.",            "highlight": false },
      { "id": "f5", "slot": "small",  "icon": "Globe",   "tag": "Infrastructure","title": "Global CDN",        "description": "30+ regions instantly.",      "highlight": false },
      { "id": "f6", "slot": "small",  "icon": "Layers",  "tag": "Platform",     "title": "Composable APIs",   "description": "Mix and match.",              "highlight": false },
      { "id": "f7", "slot": "small",  "icon": "RefreshCw","tag": "Reliability", "title": "Auto rollbacks",    "description": "Bad deploy? Fixed instantly.", "highlight": false }
    ]
  },
  "styles": {
    "paddingY": 6,
    "background": "surface",
    "accentColor": "violet",
    "cardShadow": "sm",
    "cardBorder": true
  }
}
```