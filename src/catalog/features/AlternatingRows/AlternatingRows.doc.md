# AlternatingRows

**Type:** `features` · **Variant:** `alternating-rows`

Displays 3–4 key features as full-width rows where the image/illustration and copy alternate sides with each row. Ideal for deep-diving on a small number of important capabilities.

---

## Location
`src/catalog/features/AlternatingRows/`

## Structure
```
AlternatingRows/
├── index.js
├── AlternatingRows.jsx
├── AlternatingRows.test.jsx
└── AlternatingRows.doc.md
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `"A deeper look at what we built"` | Section heading |
| `subheading` | `string \| undefined` | `"Every feature is designed…"` | Optional paragraph below heading. Omit to hide. |
| `imagePosition` | `"right-first" \| "left-first"` | `"right-first"` | Controls which side the image appears on for the **first** row. All subsequent rows alternate automatically. |
| `showImageFallback` | `boolean` | `true` | When `true` and a feature has no `image` URL, renders a gradient placeholder with the feature's icon centred inside it. Set to `false` to collapse the image column entirely for text-only rows. |
| `size` | `"sm" \| "md" \| "lg"` | `"lg"` | Controls all spacing, font sizes, and image heights together. |
| `features` | `Feature[]` | 3 defaults | Array of feature row objects — see schema below. |

### Feature object schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | ✅ | Unique key for React rendering |
| `icon` | `string` | ✅ | Lucide icon name — used in the tag badge and as the fallback illustration icon |
| `tag` | `string` | ❌ | Small pill label above the title (e.g. `"Performance"`, `"Security"`). Omit to hide. |
| `title` | `string` | ✅ | Row heading |
| `description` | `string` | ✅ | One to three sentence body paragraph |
| `bullets` | `string[]` | ❌ | Optional bullet point list rendered below the description with check icons. Omit or pass `[]` to hide. |
| `image` | `string \| null` | ❌ | URL of a screenshot or illustration. Pass `null` to use the fallback. |

---

## Size breakpoints

| Size | Section padding | Row gap | Heading | Description | Image height |
|------|----------------|---------|---------|-------------|--------------|
| `sm` | `px-4 py-12` | `gap-12` | `text-2xl` | `text-sm` | `h-48` |
| `md` | `px-6 py-16` | `gap-16` | `text-3xl` | `text-sm` | `h-64` |
| `lg` | `px-8 py-24` | `gap-24` | `text-4xl` | `text-base` | `h-80` |

On **mobile (390px)** all rows are stacked — copy on top, image below.
On **desktop (1280px)** rows are side-by-side and alternate automatically.

---

## What each prop changes

- **`heading`** — The large bold text at the top of the section.
- **`subheading`** — Muted paragraph under the heading. Remove the prop to collapse it.
- **`imagePosition`** — Setting `"right-first"` puts the image on the right for row 1 (copy left), then alternates. `"left-first"` does the opposite.
- **`showImageFallback`** — Controls whether rows without an image URL get a gradient placeholder or render as text-only columns.
- **`size`** — Scales the entire component uniformly. Use `"sm"` for mobile preview, `"lg"` for full desktop.
- **`features[].tag`** — The coloured pill badge above the row title. Use short nouns like `"Performance"` or `"Security"`.
- **`features[].bullets`** — Checklist items rendered below the description. Great for listing specific specs or guarantees.
- **`features[].image`** — A real URL here replaces the fallback with an `<img>` tag. Use product screenshots or diagrams.

---

## Usage example

```jsx
import AlternatingRows from "@/catalog/features/AlternatingRows";

<AlternatingRows
  heading="Built for serious teams"
  subheading="Everything you need, nothing you don't."
  imagePosition="right-first"
  showImageFallback={true}
  size="lg"
  features={[
    {
      id: "f1",
      icon: "Zap",
      tag: "Speed",
      title: "Deploy in under 30 seconds",
      description: "From git push to globally distributed in a single step.",
      bullets: ["Zero config", "Automatic rollbacks", "Edge delivery"],
      image: "/screenshots/deploy.png",
    },
    {
      id: "f2",
      icon: "Shield",
      tag: "Security",
      title: "Security built in, not bolted on",
      description: "SOC 2 certified with fine-grained access controls.",
      bullets: ["SAML SSO", "Audit logs", "Role-based access"],
      image: null,
    },
  ]}
/>
```

---

## Registry entry

```js
// catalog/registry.js
import AlternatingRows, { defaultProps as alternatingRowsDefaults } from "./features/AlternatingRows";

registry.features["alternating-rows"] = {
  component: AlternatingRows,
  defaultProps: alternatingRowsDefaults,
};
```
