# BentoGrid

**Type:** `features` · **Variant:** `bento-grid`

An asymmetric card grid in a modern "bento box" layout. One large hero card sits top-left spanning two columns and two rows, two medium cards stack on the right, and four equal small cards fill the bottom row. Best suited to dev-tool, AI product, and design-forward pages.

---

## Location
`src/catalog/features/BentoGrid/`

## Structure
```
BentoGrid/
├── index.js
├── BentoGrid.jsx
├── BentoGrid.test.jsx
└── BentoGrid.doc.md
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `"The platform built for what's next"` | Section heading |
| `subheading` | `string \| undefined` | `"Every capability you need…"` | Optional paragraph below heading. Omit to hide. |
| `accentColor` | `"indigo" \| "violet" \| "emerald" \| "rose"` | `"indigo"` | Accent colour applied to icons, tag badges, and the hero card gradient. |
| `size` | `"sm" \| "md" \| "lg"` | `"lg"` | Controls all spacing, font sizes, and icon sizes together. |
| `features` | `Feature[]` | 7 defaults | Array of feature objects. **Recommended: exactly 7** — 1 hero, 2 medium, 4 small. See slot rules below. |

### Feature object schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | ✅ | Unique key for React rendering |
| `slot` | `"hero" \| "medium" \| "small"` | ✅ | Controls which position in the bento grid this card occupies |
| `icon` | `string` | ✅ | Lucide icon name (e.g. `"Zap"`, `"Shield"`) |
| `title` | `string` | ✅ | Card heading |
| `description` | `string` | ✅ | Card body text |
| `tag` | `string \| null` | ❌ | Small pill label — only rendered on the hero card. Pass `null` to hide. |
| `highlight` | `boolean` | ❌ | When `true`, applies the accent gradient background to the card. Typically used on the hero card only. |

---

## Slot layout

```
Desktop (3-column grid)
┌──────────────────┬─────────┐
│                  │ medium  │
│      hero        ├─────────┤
│  (col 1–2)       │ medium  │
├────┬────┬────┬───┴─────────┤  ← bottom row spans all 3 cols
│ sm │ sm │ sm │     sm      │     as a nested 4-col grid
└────┴────┴────┴─────────────┘

Mobile (390px)
All cards stacked vertically in slot order: hero → medium → medium → small × 4
```

---

## Size breakpoints

| Size | Section padding | Heading | Hero title | Hero icon | Gap |
|------|----------------|---------|------------|-----------|-----|
| `sm` | `px-4 py-12` | `text-2xl` | `text-xl` | `40×40px` | `gap-3` |
| `md` | `px-6 py-16` | `text-3xl` | `text-2xl` | `48×48px` | `gap-4` |
| `lg` | `px-8 py-24` | `text-4xl` | `text-3xl` | `56×56px` | `gap-4` |

---

## Accent colours

| Value | Icon & tag colour | Hero gradient |
|-------|-------------------|---------------|
| `indigo` | Indigo 400 | `from-indigo-500/20 to-purple-500/10` |
| `violet` | Violet 400 | `from-violet-500/20 to-fuchsia-500/10` |
| `emerald` | Emerald 400 | `from-emerald-500/20 to-teal-500/10` |
| `rose` | Rose 400 | `from-rose-500/20 to-pink-500/10` |

---

## What each prop changes

- **`heading`** — The large bold text at the top of the section.
- **`subheading`** — Muted paragraph under the heading. Remove the prop to collapse it.
- **`accentColor`** — Changes all icon colours, tag pill colours, and the hero card gradient in one go.
- **`size`** — Uniformly scales padding, font sizes, icon dimensions, and card gaps. Use `"sm"` for mobile preview.
- **`features[].slot`** — Determines which zone of the bento grid the card goes into. The first `"hero"` feature gets the large top-left position; `"medium"` cards stack right; `"small"` cards fill the bottom row.
- **`features[].highlight`** — Applies the accent gradient to that card's background. Best used on the single hero card.
- **`features[].tag`** — A small pill badge displayed above the icon on the hero card. Typically short nouns like `"Core"` or `"New"`.

---

## Usage example

```jsx
import BentoGrid from "@/catalog/features/BentoGrid";

<BentoGrid
  heading="The platform built for what's next"
  subheading="Every capability you need, assembled into one product."
  accentColor="indigo"
  size="lg"
  features={[
    // hero — large card, top-left
    { id: "f1", slot: "hero",   icon: "Zap",      title: "Instant deploys",       description: "Ship to 30 regions in 10 seconds.",  tag: "Core", highlight: true  },
    // medium — stack right
    { id: "f2", slot: "medium", icon: "Shield",   title: "Zero-trust security",   description: "Every request verified.",             tag: null,   highlight: false },
    { id: "f3", slot: "medium", icon: "BarChart2",title: "Real-time observability",description: "Traces and metrics in one pane.",    tag: null,   highlight: false },
    // small — bottom row
    { id: "f4", slot: "small",  icon: "Plug",     title: "100+ integrations",     description: "Connects to your existing stack.",   tag: null,   highlight: false },
    { id: "f5", slot: "small",  icon: "Globe",    title: "Global CDN",            description: "Sub-100ms, anywhere.",               tag: null,   highlight: false },
    { id: "f6", slot: "small",  icon: "Layers",   title: "Composable APIs",       description: "Build your stack, your way.",        tag: null,   highlight: false },
    { id: "f7", slot: "small",  icon: "RefreshCw",title: "Auto rollbacks",        description: "Bad deploy? Fixed in seconds.",      tag: null,   highlight: false },
  ]}
/>
```

---

## Registry entry

```js
// catalog/registry.js
import BentoGrid, { defaultProps as bentoGridDefaults } from "./features/BentoGrid";

registry.features["bento-grid"] = {
  component: BentoGrid,
  defaultProps: bentoGridDefaults,
};
```
