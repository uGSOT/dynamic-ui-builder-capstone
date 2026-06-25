# BentoGrid

**Type:** `features` · **Variant:** `bento-grid`

Asymmetric card grid in a "bento box" layout. One large hero card, two medium cards, and four small cards. Best for modern dev-tool and AI product pages.

---

## File structure
```
BentoGrid/
├── index.js
├── BentoGrid.jsx
├── BentoGrid.test.jsx
└── BentoGrid.doc.md
```

---

## Props

| Prop | Type | Default | Allowed values | Description |
|------|------|---------|----------------|-------------|
| `heading` | string | `"The platform built for what's next"` | Any string | Section title |
| `subheading` | string | `"Every capability you need…"` | Any string, `""` to hide | Supporting paragraph |
| `features` | array | 7 samples | See schema below | Feature cards. Slot controls size. |

### Feature object
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique key |
| `slot` | string | ✅ | `"hero"` = large (top-left), `"medium"` = tall (top-right stack), `"small"` = compact (bottom row) |
| `icon` | string | ✅ | Lucide icon name |
| `tag` | string \| null | ❌ | Short pill label |
| `title` | string | ✅ | Card heading |
| `description` | string | ✅ | Card body text |
| `highlight` | boolean | ❌ | Applies accent background to the card. Best used on the hero card only. |

---

## Recommended slot layout

```
1 hero  →  slot: "hero"    (top-left large card)
2 medium → slot: "medium"  (stacked right of hero)
4 small →  slot: "small"   (bottom row, 4 columns)
Total: 7 features
```

You can use fewer features but the layout works best at 7.

---

## Styles

| Prop | Type | Default | Allowed values | Description |
|------|------|---------|----------------|-------------|
| `paddingY` | number | `6` | `1`–`12` | Vertical section padding |
| `background` | string | `"white"` | `"white"` \| `"gray"` \| `"dark"` | Section background |
| `headingAlign` | string | `"left"` | `"left"` \| `"center"` | Heading alignment |
| `accentColor` | string | `"indigo"` | `"indigo"` \| `"violet"` \| `"emerald"` \| `"rose"` \| `"blue"` | Icon and tag colour, and hero highlight tint |

---

## What each change does

- **`features[].slot: "hero"`** — Makes that card large (2 cols × 2 rows on desktop)
- **`features[].highlight: true`** — Gives that card a coloured accent background (use on hero card)
- **`features[].tag`** — Small pill label on the card
- **`styles.accentColor`** — Changes icon colours, tag pills, and the highlight card tint all at once
- **`styles.background: "gray"`** — Entire section background becomes gray-50

---

## JSON example

```json
{
  "type": "features",
  "variant": "bento-grid",
  "props": {
    "heading": "The platform built for what's next",
    "subheading": "Every capability you need in one product.",
    "features": [
      { "id": "f1", "slot": "hero",   "icon": "Zap",      "tag": "Core",    "title": "Instant deploys",      "description": "Ship to 30 regions in 10 seconds.",       "highlight": true  },
      { "id": "f2", "slot": "medium", "icon": "Shield",   "tag": null,      "title": "Zero-trust security",  "description": "Every request verified.",                  "highlight": false },
      { "id": "f3", "slot": "medium", "icon": "BarChart2","tag": null,      "title": "Real-time metrics",    "description": "Traces and logs in one pane.",             "highlight": false },
      { "id": "f4", "slot": "small",  "icon": "Plug",     "tag": null,      "title": "100+ integrations",   "description": "Connects to your stack.",                  "highlight": false },
      { "id": "f5", "slot": "small",  "icon": "Globe",    "tag": null,      "title": "Global CDN",          "description": "Sub-100ms anywhere.",                      "highlight": false },
      { "id": "f6", "slot": "small",  "icon": "Layers",   "tag": null,      "title": "Composable APIs",     "description": "Build your stack, your way.",              "highlight": false },
      { "id": "f7", "slot": "small",  "icon": "RefreshCw","tag": null,      "title": "Auto rollbacks",      "description": "Bad deploy? Fixed in seconds.",            "highlight": false }
    ]
  },
  "styles": {
    "paddingY": 8,
    "background": "white",
    "headingAlign": "left",
    "accentColor": "indigo"
  }
}
```
