# IconGrid

**Type:** `features` · **Variant:** `icon-grid`

Equal-column card grid. Each card shows an icon, title, and description.
Best for a standard 3–6 feature overview.

---

## File structure
```
IconGrid/
├── index.js
├── IconGrid.jsx
├── IconGrid.test.jsx
└── IconGrid.doc.md
```

Shared sub-components (one level up):
```
features/
├── FeatureSectionHeader.jsx
├── FeatureIconCard.jsx
├── featureStyles.js
└── defaultProps.js
```

---

## Props

| Prop | Type | Default | Allowed values | Description |
|------|------|---------|----------------|-------------|
| `heading` | string | `"Everything you need to ship faster"` | Any string | Section title above the grid |
| `subheading` | string | `"A complete toolkit…"` | Any string, `""` to hide | Supporting paragraph |
| `columns` | number | `3` | `2` \| `3` | Desktop column count. Mobile = 1 col, tablet = 2 col always. |
| `showTags` | boolean | `false` | `true` \| `false` | Show/hide the coloured tag pill on each card |
| `features` | array | 6 samples | See schema below | Feature cards to render |

### Feature object
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique key |
| `icon` | string | ✅ | Lucide icon name e.g. `"Zap"`. Invalid names fall back to `"Star"` |
| `tag` | string | ❌ | Short label e.g. `"Performance"`. Only shown when `showTags` is `true` |
| `title` | string | ✅ | Card heading |
| `description` | string | ✅ | 1–2 sentence body text |

---

## Styles

| Prop | Type | Default | Allowed values | Description |
|------|------|---------|----------------|-------------|
| `paddingY` | number | `6` | `1`–`12` | Vertical section padding (Tailwind `py-*`) |
| `background` | string | `"white"` | `"white"` \| `"gray"` \| `"dark"` | Section background |
| `headingAlign` | string | `"left"` | `"left"` \| `"center"` | Heading alignment |
| `accentColor` | string | `"indigo"` | `"indigo"` \| `"violet"` \| `"emerald"` \| `"rose"` \| `"blue"` | Icon and tag colour |

---

## What each change does

- **`heading`** — Updates the large bold title at the top
- **`subheading`** — Updates the muted paragraph. Delete the key to hide it entirely
- **`columns: 2`** — Switches desktop grid from 3 wide to 2 wide
- **`showTags: true`** — Reveals the coloured pill badge on every card
- **`features[].icon`** — Swaps the icon. Must be a valid [Lucide icon name](https://lucide.dev/icons/)
- **`features[].title`** — Updates the bold card heading
- **`features[].description`** — Updates the body text
- **Add a feature object** — A new card appears in the grid
- **Remove a feature object** — That card disappears
- **`styles.background: "gray"`** — Section background becomes gray-50
- **`styles.accentColor: "emerald"`** — All icons and tags switch to emerald green
- **`styles.headingAlign: "center"`** — Heading and subheading centre-align
- **`styles.paddingY: 12`** — More vertical breathing room around the section

---

## JSON example

```json
{
  "type": "features",
  "variant": "icon-grid",
  "props": {
    "heading": "Why teams choose us",
    "subheading": "Built for speed, reliability, and scale.",
    "columns": 3,
    "showTags": true,
    "features": [
      { "id": "f1", "icon": "Zap",    "tag": "Speed",    "title": "Blazing fast",  "description": "Sub-second load times globally." },
      { "id": "f2", "icon": "Shield", "tag": "Security", "title": "Secure",        "description": "SOC 2 Type II certified." },
      { "id": "f3", "icon": "Globe",  "tag": "Scale",    "title": "Global",        "description": "30 regions, 99.99% uptime SLA." }
    ]
  },
  "styles": {
    "paddingY": 8,
    "background": "white",
    "headingAlign": "center",
    "accentColor": "indigo"
  }
}
```
