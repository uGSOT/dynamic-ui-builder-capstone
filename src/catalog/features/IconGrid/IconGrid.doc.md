# IconGrid

**Type:** `features` · **Variant:** `icon-grid`

Displays product features in an equal-column grid. Each card shows a Lucide icon, a title, and a description. Supports 2 or 3 columns, three size breakpoints, two alignment modes, and three card styles.

---

## Location
`src/catalog/features/IconGrid/`

## Structure
```
IconGrid/
├── index.js           # re-export only
├── IconGrid.jsx       # component + defaultProps
├── IconGrid.test.jsx  # unit tests
└── IconGrid.doc.md    # this file
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `"Everything you need to ship faster"` | Main section heading |
| `subheading` | `string \| undefined` | `"A complete toolkit…"` | Optional paragraph below heading. Omit to hide. |
| `columns` | `2 \| 3` | `3` | Number of columns in the grid. 6 features with 3 columns fills 2 rows. |
| `size` | `"sm" \| "md" \| "lg"` | `"lg"` | Controls padding, font sizes, icon sizes, and gap across the three breakpoints. |
| `align` | `"left" \| "center"` | `"left"` | Alignment of the section header and card content. |
| `cardStyle` | `"bordered" \| "filled" \| "ghost"` | `"bordered"` | Visual treatment of each feature card. |
| `features` | `Feature[]` | 6 defaults | Array of feature objects — see schema below. |

### Feature object schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | ✅ | Unique key for React rendering |
| `icon` | `string` | ✅ | Lucide icon name (e.g. `"Zap"`, `"Shield"`, `"Globe"`) — see [Lucide icons](https://lucide.dev/icons/) |
| `title` | `string` | ✅ | Feature name shown in bold |
| `description` | `string` | ✅ | One or two sentence explanation |

---

## Size breakpoints

| Size | Padding | Heading | Description text | Icon wrapper | Gap |
|------|---------|---------|-----------------|--------------|-----|
| `sm` | `px-4 py-12` | `text-2xl` | `text-xs` | `32×32px` | `gap-4` |
| `md` | `px-6 py-16` | `text-3xl` | `text-sm` | `40×40px` | `gap-5` |
| `lg` | `px-8 py-24` | `text-4xl` | `text-base` | `48×48px` | `gap-6` |

The grid is always **1 column on mobile (390px)**, **2 columns on tablet (768px)**, and scales to the chosen `columns` value on desktop (1280px).

---

## Card styles

| Value | Appearance |
|-------|------------|
| `bordered` | Dark card with a subtle border (`border-[#2a2a3a] bg-[#111118]`) |
| `filled` | Slightly lighter fill, no border (`bg-[#1a1a24]`) |
| `ghost` | No background or border — text floats on the section background |

---

## What each prop changes

- **`heading`** — The large bold text at the top of the section.
- **`subheading`** — The muted paragraph beneath the heading. Remove the prop entirely to hide it.
- **`columns`** — Changes the desktop grid from 2-wide to 3-wide. On mobile it is always 1 column; on tablet always 2.
- **`size`** — Scales the entire component: padding, font sizes, icon dimensions, and card gaps all change together. Match this to the viewport setting in the gallery.
- **`align`** — Switches both the section header and every card's inner content between left-aligned and centred.
- **`cardStyle`** — Changes the visual weight of the cards. Use `bordered` for clear separation, `filled` for a subtle lift, and `ghost` for a minimal look.
- **`features[].icon`** — Any valid Lucide icon name. Invalid names silently fall back to `Star`.
- **`features[].title`** — Bold label at the top of each card.
- **`features[].description`** — Body text below the title. Keep to 1–2 sentences.

---

## Usage example

```jsx
import IconGrid from "@/catalog/features/IconGrid";

<IconGrid
  heading="Why teams choose us"
  subheading="Built for speed, reliability, and scale."
  columns={3}
  size="lg"
  align="center"
  cardStyle="bordered"
  features={[
    { id: "f1", icon: "Zap",    title: "Fast",    description: "Sub-second load times globally." },
    { id: "f2", icon: "Shield", title: "Secure",  description: "SOC 2 Type II certified." },
    { id: "f3", icon: "Globe",  title: "Global",  description: "30 regions, 99.99% uptime SLA." },
  ]}
/>
```

---

## Registry entry

```js
// catalog/registry.js
import IconGrid, { defaultProps as iconGridDefaults } from "./features/IconGrid";

registry.features["icon-grid"] = {
  component: IconGrid,
  defaultProps: iconGridDefaults,
};
```
