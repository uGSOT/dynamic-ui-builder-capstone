# Icon Grid
3 or 6 features in equal columns with icon, title, and description. The standard feature overview pattern for SaaS and dev-tool landing pages.

## When to use
- Core "what we do" section on a landing page
- 3–6 features of roughly equal importance
- When you want a clean, scannable grid without images

## Usage
```jsx
import IconGrid from "@/catalog/features/IconGrid";

<IconGrid
  heading="Everything you need to ship faster"
  subheading="A complete toolkit for modern product teams — from idea to production."
  columns={3}
  showTags={false}
  features={[
    { id: "f1", icon: "Zap", tag: "Performance", title: "Blazing fast", description: "Optimised for performance from day one." },
    { id: "f2", icon: "Shield", tag: "Security", title: "Secure by default", description: "End-to-end encryption included on every plan." },
    { id: "f3", icon: "BarChart2", tag: "Observability", title: "See everything", description: "Real-time traces and dashboards out of the box." },
  ]}
  styles={{ background: "surface", accentColor: "indigo" }}
/>
```

## Props
| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Everything you need to ship faster"` | No | Section title displayed above the grid |
| `subheading` | `string` | `"A complete toolkit for modern product teams..."` | No | Supporting text below the heading. Pass `""` to hide |
| `columns` | `number` | `3` | No | Desktop column count. Mobile is always 1 col, tablet always 2 |
| `showTags` | `boolean` | `false` | No | Show or hide the coloured tag pill on each card |
| `features` | `Array<{ id, icon, tag, title, description }>` | 6 sample features | No | List of feature cards. `icon` must be a valid Lucide icon name |
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
| `cardBg` | `string` | `"default"` | `"default"`, `"transparent"`, `"custom"` | Card background preset |
| `customCardBgColor` | `string` | `""` | Any CSS color e.g. `"#18181c"` | Custom card color — only used when `cardBg` is `"custom"` |
| `cardBorder` | `boolean` | `true` | `true`, `false` | Show or hide card border |
| `cardShadow` | `string` | `"sm"` | `"none"`, `"sm"`, `"md"`, `"lg"` | Card drop shadow size |
| `titleSize` | `string` | `"base"` | `"sm"`, `"base"`, `"lg"` | Card title font size |
| `titleColor` | `string` | `""` | Any CSS color or `""` for auto | Card title color override |
| `descSize` | `string` | `"sm"` | `"xs"`, `"sm"`, `"base"` | Card description font size |
| `descColor` | `string` | `""` | Any CSS color or `""` for auto | Card description color override |
| `accentColor` | `string` | `"indigo"` | `"indigo"`, `"violet"`, `"emerald"`, `"rose"`, `"blue"` | Accent color for icons and tags |

## JSON example
```json
{
  "id": "features-icon-grid",
  "type": "features",
  "variant": "icon-grid",
  "props": {
    "heading": "Everything you need to ship faster",
    "subheading": "A complete toolkit for modern product teams — from idea to production.",
    "columns": 3,
    "showTags": false,
    "features": [
      { "id": "f1", "icon": "Zap", "tag": "Performance", "title": "Blazing fast", "description": "Optimised for performance from day one." },
      { "id": "f2", "icon": "Shield", "tag": "Security", "title": "Secure by default", "description": "End-to-end encryption included on every plan." }
    ]
  },
  "styles": {
    "paddingY": 6,
    "background": "surface",
    "accentColor": "indigo",
    "cardShadow": "sm",
    "cardBorder": true
  }
}
```