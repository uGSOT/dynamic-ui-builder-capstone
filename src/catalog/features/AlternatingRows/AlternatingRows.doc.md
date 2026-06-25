# AlternatingRows

**Type:** `features` · **Variant:** `alternating-rows`

Feature rows where the image/illustration and copy alternate sides on each row.
Best for a deep-dive on 2–4 key capabilities.

---

## File structure
```
AlternatingRows/
├── index.js
├── AlternatingRows.jsx
├── AlternatingRows.test.jsx
└── AlternatingRows.doc.md
```

---

## Props

| Prop | Type | Default | Allowed values | Description |
|------|------|---------|----------------|-------------|
| `heading` | string | `"A deeper look at what we built"` | Any string | Section title |
| `subheading` | string | `"Every feature is designed…"` | Any string, `""` to hide | Supporting paragraph |
| `imagePosition` | string | `"right-first"` | `"right-first"` \| `"left-first"` | Which side the image goes on for row 1. All rows alternate from there. |
| `showBullets` | boolean | `true` | `true` \| `false` | Show/hide the bullet checklist below each row's description |
| `showTags` | boolean | `true` | `true` \| `false` | Show/hide the tag pill above each row title |
| `features` | array | 3 samples | See schema below | Feature rows. Recommend 2–4 items. |

### Feature object
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique key |
| `icon` | string | ✅ | Lucide icon name. Used in the image fallback illustration |
| `tag` | string | ❌ | Short label e.g. `"Performance"`. Shown when `showTags` is `true` |
| `title` | string | ✅ | Row heading |
| `description` | string | ✅ | 2–3 sentence body paragraph |
| `bullets` | string[] | ❌ | Checklist items. Shown when `showBullets` is `true` |
| `image` | string \| null | ❌ | Image URL. Pass `null` to show the gradient fallback illustration |

---

## Styles

| Prop | Type | Default | Allowed values | Description |
|------|------|---------|----------------|-------------|
| `paddingY` | number | `6` | `1`–`12` | Vertical section padding |
| `background` | string | `"white"` | `"white"` \| `"gray"` \| `"dark"` | Section background |
| `headingAlign` | string | `"left"` | `"left"` \| `"center"` | Heading alignment |
| `accentColor` | string | `"indigo"` | `"indigo"` \| `"violet"` \| `"emerald"` \| `"rose"` \| `"blue"` | Bullet check and tag colour |

---

## What each change does

- **`imagePosition: "left-first"`** — Flips the layout so the first row has image on left, copy on right. All rows keep alternating.
- **`showBullets: false`** — Hides the checklist on all rows
- **`showTags: false`** — Hides the tag pill on all rows
- **`features[].image`** — Add a real URL to replace the gradient placeholder with a screenshot
- **`features[].bullets`** — Add strings to show a checklist. An empty array hides the list for that row
- **`styles.accentColor: "emerald"`** — Switches bullet icons and tag pills to emerald green

---

## JSON example

```json
{
  "type": "features",
  "variant": "alternating-rows",
  "props": {
    "heading": "Built for serious teams",
    "subheading": "Everything you need, nothing you don't.",
    "imagePosition": "right-first",
    "showBullets": true,
    "showTags": true,
    "features": [
      {
        "id": "f1",
        "icon": "Zap",
        "tag": "Speed",
        "title": "Deploy in under 30 seconds",
        "description": "From git push to globally distributed in a single step.",
        "bullets": ["Zero config", "Automatic rollbacks", "Edge delivery"],
        "image": null
      },
      {
        "id": "f2",
        "icon": "Shield",
        "tag": "Security",
        "title": "Security built in, not bolted on",
        "description": "SOC 2 certified with fine-grained access controls.",
        "bullets": ["SAML SSO", "Audit logs", "Role-based access"],
        "image": null
      }
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
