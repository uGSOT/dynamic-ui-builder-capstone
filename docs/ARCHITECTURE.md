# Architecture Document

## Dynamic UI Builder Studio

---

## 1. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18+ with JavaScript |
| Build | Vite |
| Routing | React Router v6 |
| State | Redux Toolkit |
| Styling | Tailwind CSS + `clsx` + `tailwind-merge` |
| Icons | Lucide React |
| Fonts | Google Fonts via `@fontsource` |
| Validation | Zod |
| JSON editor | Monaco Editor (`@monaco-editor/react`) |

Frontend-only SPA. No backend. Drafts saved to `localStorage`.

---

## 2. Overview

```
Pages (Home, Gallery, Builder)
        │
        ▼
Redux Store (gallery, builder, ui)
        │
        ├── Gallery  →  tweak component  →  copy JSON
        │
        └── Builder  →  paste JSON  →  live preview
        │
        ▼
Component Registry + Catalog (12 types, 37 variants)
        │
        ▼
Tailwind + Lucide + Google Fonts
```

**Core idea:** Gallery and builder share the same component registry and renderer. User copies section JSON from the gallery and pastes it into the builder.

---

## 3. Project Structure

Keep the folder tree flat. Avoid deep nesting and extra abstraction layers.

```
dynamic-ui-builder/
├── public/
│   └── assets/
│       ├── images/
│       ├── logos/
│       └── references/          # variant reference images (see COMPONENTS.md)
├── docs/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   └── COMPONENTS.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css                # Tailwind imports + CSS variables
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── GalleryPlaygroundPage.jsx
│   │   └── BuilderPage.jsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.jsx
│   │   │   └── AppHeader.jsx
│   │   ├── gallery/
│   │   │   ├── VariationGrid.jsx
│   │   │   ├── PlaygroundLayout.jsx
│   │   │   ├── StyleControls.jsx
│   │   │   ├── ContentControls.jsx
│   │   │   └── LiveJsonPanel.jsx
│   │   ├── builder/
│   │   │   ├── JsonEditor.jsx
│   │   │   ├── PreviewPanel.jsx
│   │   │   └── ValidationPanel.jsx
│   │   └── ui/                  # shared primitives
│   │       ├── Button.jsx
│   │       ├── Container.jsx
│   │       ├── Heading.jsx
│   │       └── Icon.jsx         # Lucide wrapper
│   │
│   ├── catalog/                 # all website section components
│   │   ├── registry.js          # register + lookup all types/variants
│   │   ├── navbar/
│   │   │   ├── ClassicSticky.jsx
│   │   │   ├── TransparentHero.jsx
│   │   │   └── CenteredLogo.jsx
│   │   ├── hero/
│   │   │   ├── Centered.jsx
│   │   │   ├── SplitImageRight.jsx
│   │   │   ├── SplitImageLeft.jsx
│   │   │   └── WithSocialProof.jsx
│   │   ├── logo-cloud/
│   │   ├── features/
│   │   ├── how-it-works/
│   │   ├── stats/
│   │   ├── pricing/
│   │   ├── testimonials/
│   │   ├── faq/
│   │   ├── cta/
│   │   ├── team/
│   │   └── footer/
│   │
│   ├── renderer/
│   │   ├── SiteRenderer.jsx     # renders full page from site JSON
│   │   └── SectionRenderer.jsx  # renders one section (gallery + builder)
│   │
│   ├── store/
│   │   ├── index.js             # configureStore
│   │   ├── gallerySlice.js
│   │   ├── builderSlice.js
│   │   └── uiSlice.js
│   │
│   ├── utils/
│   │   ├── validateConfig.js    # Zod validation
│   │   ├── sectionToJson.js     # gallery → copy-ready JSON
│   │   ├── resolveSection.js    # merge theme + responsive overrides
│   │   ├── stylesToClasses.js   # JSON styles → Tailwind classes
│   │   ├── cn.js
│   │   ├── storage.js           # localStorage read/write
│   │   └── constants.js         # breakpoints, tokens, storage keys
│   │
│   └── templates/
│       ├── blank.json
│       ├── saas-landing.json
│       ├── dev-tool-launch.json
│       └── ai-product-waitlist.json
│
├── tailwind.config.js
├── vite.config.js
└── package.json
```

### Folder rules

| Folder | Purpose |
|--------|---------|
| `pages/` | One file per route — composes components, no heavy logic |
| `components/` | App UI only (gallery, builder, layout, shared ui) |
| `catalog/` | Website section components — one folder per type, one file per variant |
| `renderer/` | Turns JSON config into React output |
| `store/` | Redux slices |
| `utils/` | Helpers — validation, JSON, styling, storage |

**Adding a new component:** create variant `.jsx` in `catalog/<type>/`, register it in `catalog/registry.js`.

---

## 4. Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/gallery` | Component category grid |
| `/gallery/:type/:variant` | Playground — live preview + controls + JSON |
| `/builder` | JSON editor + site preview |

---

## 5. Data Flow

### Gallery

1. User opens a variant in the playground
2. Redux `gallerySlice` holds `type`, `variant`, `props`, `styles`, `responsive`
3. Controls update state → preview re-renders via `SectionRenderer`
4. `sectionToJson()` builds the live JSON panel output
5. User copies JSON to clipboard

### Builder

1. User edits JSON in Monaco editor
2. Redux `builderSlice` stores raw JSON
3. Debounced parse → `validateConfig()` (Zod)
4. Valid config passed to `SiteRenderer` → `SectionRenderer` per section
5. Draft auto-saved to `localStorage`

Gallery and builder use the same `SectionRenderer` and `registry.js` — identical JSON renders identically in both.

---

## 6. Component Registry

Single file: `catalog/registry.js`

Maps each `type` + `variant` to:
- React component
- Default props and styles
- Allowed style keys
- Props schema (Zod)

```javascript
// simplified shape
export const registry = {
  hero: {
    centered: { component: HeroCentered, defaultProps: { ... }, defaultStyles: { ... } },
    'split-image-right': { component: HeroSplitRight, ... },
  },
  navbar: { ... },
  // ... all 12 types
};

export function getVariant(type, variant) {
  return registry[type]?.[variant] ?? null;
}
```

Full variant list: [COMPONENTS.md](./COMPONENTS.md)

---

## 7. Redux Store

```javascript
{
  gallery: { type, variant, sectionId, props, styles, responsive },
  builder: { rawJson, siteConfig, parseError, validationErrors },
  ui:      { viewport },   // mobile | tablet | desktop
}
```

| Slice | Key actions |
|-------|-------------|
| `gallerySlice` | `initPlayground`, `setVariant`, `updateProps`, `updateStyles` |
| `builderSlice` | `setRawJson`, `loadTemplate`, `resetBuilder` |
| `uiSlice` | `setViewport` |

Persist builder draft to `localStorage` key `uibuilder:draft` on change.

---

## 8. Rendering

**`SectionRenderer`** — used in gallery preview and builder preview:
1. Look up variant in `registry.js`
2. Call `resolveSection()` to merge theme + responsive overrides
3. Render the catalog component with merged props/styles

**`SiteRenderer`** — loops `pages[].sections[]` and renders each via `SectionRenderer`.

---

## 9. Styling

- **Tailwind CSS** for all layout and styling
- **CSS variables** on the preview container for runtime theme (colors, fonts from site JSON)
- **`stylesToClasses.js`** maps JSON style tokens to Tailwind classes inside catalog components
- **Google Fonts** loaded via `@fontsource` — Inter (default), Plus Jakarta Sans, DM Sans, Space Grotesk
- **Lucide React** for all icons — catalog props use icon name strings (e.g. `"Zap"`)

---

## 10. Validation

`utils/validateConfig.js` using Zod:
- Site JSON shape (`meta`, `theme`, `pages`, `sections`)
- Each section has valid `type` + `variant` from registry
- Props match component schema
- Style keys are allowed for that component

Errors shown in builder `ValidationPanel`.

---

## 11. localStorage

| Key | Stores |
|-----|--------|
| `uibuilder:draft` | Builder JSON |
| `uibuilder:preferences` | Viewport, editor settings |

Import/export `.json` files for manual backup.

---

## 12. Dependencies

```json
{
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "react-router-dom": "^6",
    "@reduxjs/toolkit": "^2",
    "react-redux": "^9",
    "zod": "^3",
    "lucide-react": "^0.400",
    "@monaco-editor/react": "^4",
    "@fontsource/inter": "^5",
    "@fontsource/plus-jakarta-sans": "^5",
    "clsx": "^2",
    "tailwind-merge": "^2"
  },
  "devDependencies": {
    "vite": "^5",
    "@vitejs/plugin-react": "^4",
    "tailwindcss": "^3",
    "postcss": "^8",
    "autoprefixer": "^10"
  }
}
```

---

## 13. Adding a New Variant

1. Create `catalog/<type>/MyVariant.jsx`
2. Register in `catalog/registry.js` with defaults
3. Add entry + reference image in `COMPONENTS.md`

No changes needed in gallery or builder — they read from the registry automatically.

---

## 14. Decision Log

| Decision | Why |
|----------|-----|
| Flat folder structure | Easier to navigate and extend for a capstone project |
| Single `registry.js` | One place to register all components — no multi-file registry layer |
| No separate engine layer | Validation, JSON helpers, and renderers live in `utils/` and `renderer/` |
| Redux Toolkit | Shared state between gallery and builder across routes |
| Copy-paste JSON handoff | Simple flow — gallery output is builder input, no extra sync logic |
| Tailwind + Lucide + Google Fonts | Fast styling, consistent icons and typography |
