# Architecture Document

## Dynamic UI Builder Studio

---

## 1. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18+ with JavaScript (`.jsx` / `.js`) |
| Build | Vite |
| Routing | React Router v6 |
| State | Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) |
| Styling | Tailwind CSS v3+ with `tailwind-merge` + `clsx` |
| Icons | Lucide React (`lucide-react`) |
| Fonts | Google Fonts via `@fontsource` packages or CSS `@import` |
| Validation | Zod |
| JSON editor | `@monaco-editor/react` |
| Deployment | Static SPA (Netlify, Vercel, S3, etc.) |

No backend. No TypeScript. Session persistence via `localStorage` only.

---

## 2. Architecture Overview

The application is a **client-only React SPA**. All logic—component registration, gallery playground, JSON validation, rendering, and persistence—runs in the browser.

```
┌──────────────────────────────────────────────────────────────────────┐
│                            Browser (SPA)                             │
├──────────────────────────────────────────────────────────────────────┤
│  Pages                          Routes                               │
│  ├── Home (/)                   react-router-dom                     │
│  ├── Gallery (/gallery)                                              │
│  ├── Gallery Playground (/gallery/:type/:variant)                    │
│  └── Builder (/builder)                                              │
├──────────────────────────────────────────────────────────────────────┤
│  Features                                                            │
│  ├── Gallery Playground  →  real-time controls + live JSON panel     │
│  └── Website Builder     →  JSON editor + live site preview          │
├──────────────────────────────────────────────────────────────────────┤
│  Redux Store                                                         │
│  ├── gallerySlice     (playground section state → section JSON)      │
│  ├── builderSlice     (site config, editor, validation)              │
│  ├── uiSlice          (viewport, panel layout, modals)               │
│  └── favoritesSlice   (gallery favorites, synced to localStorage)    │
├──────────────────────────────────────────────────────────────────────┤
│  Engine (pure JS, no React)                                          │
│  ├── Component Registry   (12 types, 39 variants)                    │
│  ├── Validator            (Zod site + section schemas)               │
│  ├── resolveSection       (theme + styles + responsive merge)        │
│  └── sectionToJson        (shared serializer for gallery + builder)  │
├──────────────────────────────────────────────────────────────────────┤
│  Catalog (React variant components)                                  │
│  └── 12 component folders × variants (Tailwind + Lucide + tokens)    │
├──────────────────────────────────────────────────────────────────────┤
│  Design System                                                       │
│  ├── Tailwind config + CSS variables (theme tokens)                  │
│  ├── Google Fonts (Inter, Plus Jakarta Sans, etc.)                   │
│  └── Primitives (Container, Section, Button, Heading, …)             │
├──────────────────────────────────────────────────────────────────────┤
│  Persistence                                                         │
│  └── localStorage middleware (draft, favorites, preferences)         │
└──────────────────────────────────────────────────────────────────────┘
```

### 2.1 Design Principles

1. **Registry-driven** — Gallery and builder both consume the same catalog registry; one renderer path.
2. **Gallery produces JSON, builder consumes JSON** — Playground state serializes to a section object via `sectionToJson()`; no schema translation between surfaces.
3. **Redux for cross-route state** — Gallery playground and builder draft persist through Redux + localStorage middleware; gallery-to-builder transfer is manual copy-paste.
4. **Strict folder boundaries** — Pages, features, catalog, engine, and design-system are separate; new components plug into `catalog/components/<type>/` without touching features.
5. **Tailwind-first styling** — Variant components use Tailwind utilities; JSON `styles` map to token classes via a shared `stylesToClasses()` helper.
6. **Fail gracefully** — Invalid JSON, unknown types, and render errors are isolated; the app never hard-crashes.

---

## 3. High-Level Data Flow

### 3.1 Gallery Playground (Real-Time)

```
User opens /gallery/:type/:variant
       │
       ▼
dispatch(initPlayground({ type, variant }))
       │  loads defaults from registry
       ▼
Redux gallerySlice: { type, variant, props, styles, responsive, sectionId }
       │
       ├── User changes variant/style/props/viewport
       │         │
       │         ▼
       │   dispatch(updatePlayground(...))  →  re-render preview (< 100ms)
       │         │
       │         ▼
       │   selectPlaygroundSectionJson(state)  →  live JSON panel
       │
       └── User clicks "Copy JSON"
                 │
                 ▼
           clipboard ← sectionToJson(gallerySlice)
                 │
                 ▼
           User navigates to builder and pastes into sections[]
```

### 3.2 Builder Live Preview

```
User edits JSON in Monaco editor
       │
       ▼
dispatch(setRawJson(value))
       │
       ▼
debounced middleware (150ms) → JSON.parse
       │
       ├── parse error  → builderSlice.parseError
       │
       ▼
validateSiteConfig(parsed)  →  Zod + registry checks
       │
       ├── validation errors  → builderSlice.validationErrors
       │
       ▼
builderSlice.siteConfig = sanitizedConfig
       │
       ▼
<SiteRenderer config={siteConfig} viewport={uiSlice.viewport} />
       │
       ▼
pages[].sections[]  →  resolveSection  →  SectionRenderer  →  catalog variant
```

### 3.3 Gallery ↔ Builder Parity

Both surfaces call the same functions:

| Function | Used by |
|----------|---------|
| `resolveSection(section, theme, breakpoint)` | Gallery preview, builder preview |
| `SectionRenderer` | Gallery preview, builder preview |
| `sectionToJson(section)` | Gallery JSON panel, Copy JSON |
| `validateSection(section)` | Gallery (on export), builder (on paste) |

Identical section JSON must render identically in both surfaces.

---

## 4. Project Structure

Strict, feature-sliced layout. **Do not colocate catalog variants inside `features/`**. New components extend `catalog/components/<type>/` only.

```
dynamic-ui-builder/
├── public/
│   └── assets/
│       ├── images/                  # Demo images, mockups, avatars
│       └── logos/                   # Partner logo placeholders
├── docs/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   └── COMPONENTS.md
├── src/
│   ├── app/                         # Application shell — bootstrap only
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── store/
│   │   │   ├── index.js             # configureStore
│   │   │   ├── rootReducer.js
│   │   │   └── middleware/
│   │   │       ├── localStorageMiddleware.js
│   │   │       └── debounceMiddleware.js
│   │   ├── providers/
│   │   │   └── AppProviders.jsx     # Provider, Router, ThemeProvider
│   │   └── router/
│   │       ├── index.jsx
│   │       └── routes.config.js
│   │
│   ├── pages/                       # Route entry points — thin wrappers
│   │   ├── home/
│   │   │   └── HomePage.jsx
│   │   ├── gallery/
│   │   │   ├── GalleryPage.jsx              # Category grid
│   │   │   └── GalleryPlaygroundPage.jsx    # /gallery/:type/:variant
│   │   └── builder/
│   │       └── BuilderPage.jsx
│   │
│   ├── features/                    # User-facing feature UI (not catalog variants)
│   │   ├── gallery/
│   │   │   ├── components/
│   │   │   │   ├── CategoryNav.jsx
│   │   │   │   ├── VariationGrid.jsx
│   │   │   │   ├── PlaygroundLayout.jsx
│   │   │   │   ├── VariantSwitcher.jsx
│   │   │   │   ├── StyleControlsPanel.jsx
│   │   │   │   ├── ContentControlsPanel.jsx
│   │   │   │   ├── LiveJsonPanel.jsx
│   │   │   │   └── CopyJsonButton.jsx
│   │   │   ├── hooks/
│   │   │   │   └── usePlayground.js         # selectors + dispatch helpers
│   │   │   └── index.js                     # public exports
│   │   │
│   │   ├── builder/
│   │   │   ├── components/
│   │   │   │   ├── BuilderLayout.jsx
│   │   │   │   ├── JsonEditorPanel.jsx
│   │   │   │   ├── PreviewPanel.jsx
│   │   │   │   ├── BuilderToolbar.jsx
│   │   │   │   ├── ValidationPanel.jsx
│   │   │   │   ├── TemplatePicker.jsx
│   │   │   │   └── ImportExportButtons.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useBuilder.js
│   │   │   └── index.js
│   │   │
│   │   └── home/
│   │       ├── components/
│   │       │   ├── HeroBanner.jsx
│   │       │   └── ExampleSitesShowcase.jsx
│   │       └── index.js
│   │
│   ├── catalog/                     # Component catalog — registry + variants
│   │   ├── registry/
│   │   │   ├── index.js             # registerComponent, getComponent, getVariant
│   │   │   ├── registerAll.js       # imports all 12 component index files
│   │   │   └── galleryOrder.js      # category display order + tags
│   │   │
│   │   └── components/              # One folder per type — ADD NEW TYPES HERE
│   │       ├── navbar/
│   │       │   ├── index.js         # registerComponent({ type: 'navbar', ... })
│   │       │   ├── schema.js        # Zod props + allowedStyleKeys
│   │       │   ├── meta.js          # gallery name, description, tags
│   │       │   └── variants/
│   │       │       ├── ClassicSticky.jsx
│   │       │       ├── TransparentHero.jsx
│   │       │       └── CenteredLogo.jsx
│   │       ├── hero/
│   │       │   ├── index.js
│   │       │   ├── schema.js
│   │       │   ├── meta.js
│   │       │   └── variants/
│   │       │       ├── Centered.jsx
│   │       │       ├── SplitImageRight.jsx
│   │       │       ├── SplitImageLeft.jsx
│   │       │       └── WithSocialProof.jsx
│   │       ├── logo-cloud/
│   │       │   └── variants/  (SimpleRow, WithHeading, LogoGrid)
│   │       ├── features/
│   │       │   └── variants/  (IconGrid, AlternatingRows, BentoGrid)
│   │       ├── how-it-works/
│   │       │   └── variants/  (StepsHorizontal, StepsVertical, IconCards)
│   │       ├── stats/
│   │       │   └── variants/  (InlineRow, StatCards, SplitWithCopy)
│   │       ├── pricing/
│   │       │   └── variants/  (ThreeTier, TwoTierHighlight, SinglePlanFocus)
│   │       ├── testimonials/
│   │       │   └── variants/  (CardGrid, FeaturedSingle, Carousel)
│   │       ├── faq/
│   │       │   └── variants/  (AccordionSingle, AccordionTwoColumn, GroupedCategory)
│   │       ├── cta/
│   │       │   └── variants/  (FullWidthCentered, SplitWithImage, NewsletterSignup)
│   │       ├── team/
│   │       │   └── variants/  (GridSimple, GridWithBio, CompactRow)
│   │       └── footer/
│   │           └── variants/  (MultiColumn, MinimalCentered, WithNewsletter)
│   │
│   ├── engine/                      # Pure logic — no JSX except renderer
│   │   ├── validator/
│   │   │   ├── siteSchema.js
│   │   │   ├── sectionSchema.js
│   │   │   └── validateConfig.js
│   │   ├── renderer/
│   │   │   ├── SiteRenderer.jsx
│   │   │   ├── PageRenderer.jsx
│   │   │   ├── SectionRenderer.jsx
│   │   │   ├── SectionError.jsx
│   │   │   ├── SectionErrorBoundary.jsx
│   │   │   └── PreviewFrame.jsx
│   │   ├── parser/
│   │   │   ├── resolveSection.js
│   │   │   └── mergeTheme.js
│   │   └── serializer/
│   │       └── sectionToJson.js     # gallery JSON output — single source
│   │
│   ├── store/                       # Redux slices (feature state)
│   │   ├── slices/
│   │   │   ├── gallerySlice.js
│   │   │   ├── builderSlice.js
│   │   │   ├── uiSlice.js
│   │   │   └── favoritesSlice.js
│   │   └── selectors/
│   │       ├── gallerySelectors.js  # selectPlaygroundSectionJson, etc.
│   │       └── builderSelectors.js
│   │
│   ├── design-system/               # Tokens, primitives, global styles
│   │   ├── tokens/
│   │   │   ├── colors.js
│   │   │   ├── spacing.js
│   │   │   ├── typography.js
│   │   │   ├── radius.js
│   │   │   ├── shadows.js
│   │   │   └── index.js
│   │   ├── fonts/
│   │   │   ├── fontConfig.js        # Google Fonts map: inter, plus-jakarta-sans
│   │   │   └── loadFonts.js
│   │   ├── styles/
│   │   │   ├── index.css            # @tailwind base/components/utilities
│   │   │   └── theme.css            # CSS variables for runtime theme
│   │   ├── utils/
│   │   │   ├── cn.js                # clsx + tailwind-merge
│   │   │   └── stylesToClasses.js   # JSON styles → Tailwind classes
│   │   ├── ThemeProvider.jsx        # applies site config theme to preview root
│   │   └── primitives/
│   │       ├── Container.jsx
│   │       ├── Section.jsx
│   │       ├── Heading.jsx
│   │       ├── Text.jsx
│   │       ├── Button.jsx
│   │       ├── Icon.jsx             # Lucide wrapper
│   │       ├── Grid.jsx
│   │       └── Card.jsx
│   │
│   ├── shared/                      # Shared across features — not catalog-specific
│   │   ├── components/
│   │   │   ├── AppLayout.jsx
│   │   │   ├── AppHeader.jsx
│   │   │   ├── ViewportSwitcher.jsx
│   │   │   └── ErrorFallback.jsx
│   │   ├── hooks/
│   │   │   ├── useDebouncedValue.js
│   │   │   └── useCopyToClipboard.js
│   │   ├── constants/
│   │   │   ├── breakpoints.js
│   │   │   └── storageKeys.js
│   │   └── utils/
│   │       ├── exportJson.js
│   │       ├── importJson.js
│   │       └── sanitizeHref.js
│   │
│   ├── storage/
│   │   └── localStorageAdapter.js
│   │
│   └── templates/
│       ├── blank.json
│       ├── saas-landing.json
│       ├── dev-tool-launch.json
│       └── ai-product-waitlist.json
│
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

### 4.1 Folder Rules (Expansion Contract)

| Rule | Description |
|------|-------------|
| **New component type** | Add `catalog/components/<type>/` with `index.js`, `schema.js`, `meta.js`, `variants/`; register in `registerAll.js` |
| **New variant** | Add one file in `variants/`; register in component's `index.js` only |
| **No variant JSX in `features/`** | Feature folders contain playground/builder chrome, not catalog sections |
| **Engine stays framework-agnostic** | Validator, parser, serializer are plain JS; only `engine/renderer/` uses JSX |
| **Pages stay thin** | Pages compose feature components; no business logic in pages |
| **Slice per domain** | Gallery state ≠ builder state; user copies JSON from gallery and pastes into builder manually |
| **Shared UI in `shared/` or `design-system/primitives/`** | Do not duplicate Button/Container across features |

---

## 5. Component Registry

Single source of truth for all **12 types** and **37 variants** (see [COMPONENTS.md](./COMPONENTS.md)).

### 5.1 Registration API

```javascript
// src/catalog/registry/index.js
const registry = new Map();

export function registerComponent(definition) {
  registry.set(definition.type, definition);
}

export function getComponent(type) {
  return registry.get(type);
}

export function getAllComponents() {
  return Array.from(registry.values());
}

export function getVariant(type, variantId) {
  return registry.get(type)?.variants[variantId] ?? null;
}

export function getAllVariants() {
  return getAllComponents().flatMap((c) =>
    Object.values(c.variants).map((v) => ({ type: c.type, ...v }))
  );
}
```

Bootstrap in `main.jsx`:

```javascript
import '@/catalog/registry/registerAll.js'; // side-effect: registers all 12 types
```

### 5.2 ComponentDefinition Shape

```javascript
/**
 * @typedef {Object} ComponentDefinition
 * @property {string} type
 * @property {string} category
 * @property {string[]} tags
 * @property {import('zod').ZodObject} propsSchema
 * @property {string[]} allowedStyleKeys
 * @property {Record<string, VariantDefinition>} variants
 */

/**
 * @typedef {Object} VariantDefinition
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {React.ComponentType} component
 * @property {object} defaultProps
 * @property {object} defaultStyles
 */
```

### 5.3 Catalog Index (PRD Alignment)

| Type | Folder | Variants |
|------|--------|----------|
| `navbar` | `catalog/components/navbar/` | `classic-sticky`, `transparent-hero`, `centered-logo` |
| `hero` | `catalog/components/hero/` | `centered`, `split-image-right`, `split-image-left`, `with-social-proof` |
| `logo-cloud` | `catalog/components/logo-cloud/` | `simple-row`, `with-heading`, `logo-grid` |
| `features` | `catalog/components/features/` | `icon-grid`, `alternating-rows`, `bento-grid` |
| `how-it-works` | `catalog/components/how-it-works/` | `steps-horizontal`, `steps-vertical`, `icon-cards` |
| `stats` | `catalog/components/stats/` | `inline-row`, `stat-cards`, `split-with-copy` |
| `pricing` | `catalog/components/pricing/` | `three-tier`, `two-tier-highlight`, `single-plan-focus` |
| `testimonials` | `catalog/components/testimonials/` | `card-grid`, `featured-single`, `carousel` |
| `faq` | `catalog/components/faq/` | `accordion-single`, `accordion-two-column`, `grouped-category` |
| `cta` | `catalog/components/cta/` | `full-width-centered`, `split-with-image`, `newsletter-signup` |
| `team` | `catalog/components/team/` | `grid-simple`, `grid-with-bio`, `compact-row` |
| `footer` | `catalog/components/footer/` | `multi-column`, `minimal-centered`, `with-newsletter` |

### 5.4 Example Component Registration

```javascript
// src/catalog/components/hero/index.js
import { registerComponent } from '@/catalog/registry';
import { heroPropsSchema, heroStyleKeys } from './schema';
import { heroMeta } from './meta';
import Centered from './variants/Centered';
import SplitImageRight from './variants/SplitImageRight';
import SplitImageLeft from './variants/SplitImageLeft';
import WithSocialProof from './variants/WithSocialProof';

registerComponent({
  type: 'hero',
  category: heroMeta.category,
  tags: heroMeta.tags,
  propsSchema: heroPropsSchema,
  allowedStyleKeys: heroStyleKeys,
  variants: {
    centered: {
      id: 'centered',
      name: 'Centered Hero',
      description: 'Headline, subtext, and CTAs centered',
      component: Centered,
      defaultProps: { headline: 'Build faster', subtext: '...', primaryAction: { label: 'Get started', href: '#' } },
      defaultStyles: { paddingY: 8, textAlign: 'center' },
    },
    'split-image-right': { /* ... */ },
    'split-image-left': { /* ... */ },
    'with-social-proof': { /* ... */ },
  },
});
```

---

## 6. Redux Store Architecture

### 6.1 Store Shape

```javascript
{
  gallery: {
    type: 'hero',
    variant: 'split-image-right',
    sectionId: 'hero-1',
    props: { /* ... */ },
    styles: { /* ... */ },
    responsive: { mobile: { styles: {}, props: {} } },
    activeBreakpoint: 'desktop',  // playground viewport for editing responsive
  },
  builder: {
    rawJson: string,
    siteConfig: object | null,
    parseError: string | null,
    validationErrors: array,
    validationWarnings: array,
    activePageId: 'home',
  },
  ui: {
    viewport: 'desktop',           // builder preview viewport
    galleryPanelLayout: 'split',   // split | stacked
    showValidationPanel: true,
  },
  favorites: {
    items: [{ type, variant }],
  },
}
```

### 6.2 Key Slices & Actions

**gallerySlice**

| Action | Purpose |
|--------|---------|
| `initPlayground({ type, variant })` | Load registry defaults |
| `setVariant(variantId)` | Swap variant; reset props/styles to new defaults |
| `updateProps(partial)` | Content control changes |
| `updateStyles(partial)` | Style control changes |
| `updateResponsive({ breakpoint, props, styles })` | Per-breakpoint overrides |
| `setPlaygroundBreakpoint(bp)` | Toggle mobile/tablet/desktop in playground |

**builderSlice**

| Action | Purpose |
|--------|---------|
| `setRawJson(string)` | Editor onChange |
| `setSiteConfig(config)` | After successful parse + validate |
| `loadTemplate(templateId)` | Load starter JSON |
| `resetBuilder()` | Clear to blank template |

**Selector for live JSON panel:**

```javascript
// src/store/selectors/gallerySelectors.js
export const selectPlaygroundSectionJson = (state) =>
  sectionToJson({
    id: state.gallery.sectionId,
    type: state.gallery.type,
    variant: state.gallery.variant,
    props: state.gallery.props,
    styles: state.gallery.styles,
    responsive: state.gallery.responsive,
  });
```

### 6.3 localStorage Middleware

Persist on every `builderSlice` update and `favoritesSlice` update:

| Key | Slice |
|-----|-------|
| `uibuilder:draft` | `builder.rawJson` |
| `uibuilder:gallery-favorites` | `favorites.items` |
| `uibuilder:editor-preferences` | `ui` subset |

On app init, hydrate store from localStorage; prompt restore if draft exists.

---

## 7. JSON Config & Validation

### 7.1 Schemas

```javascript
// engine/validator/sectionSchema.js
export const sectionSchema = z.object({
  id: z.string(),
  type: z.string(),
  variant: z.string(),
  props: z.record(z.unknown()).default({}),
  styles: z.record(z.unknown()).optional(),
  responsive: z.record(z.object({
    props: z.record(z.unknown()).optional(),
    styles: z.record(z.unknown()).optional(),
  })).optional(),
});
```

Validation pipeline:

1. Structural — `siteSchema` / `sectionSchema`
2. Registry — `type` and `variant` exist
3. Component — `propsSchema.safeParse(section.props)`
4. Styles — keys ⊆ `allowedStyleKeys`
5. Responsive — same rules per breakpoint

### 7.2 sectionToJson (Gallery Output)

```javascript
// engine/serializer/sectionToJson.js
export function sectionToJson(section) {
  const output = {
    id: section.id,
    type: section.type,
    variant: section.variant,
    props: section.props,
  };
  if (section.styles && Object.keys(section.styles).length) {
    output.styles = section.styles;
  }
  if (section.responsive && Object.keys(section.responsive).length) {
    output.responsive = section.responsive;
  }
  return output;
}
```

This object is what users copy and paste into `pages[].sections[]`.

---

## 8. Rendering Pipeline

### 8.1 resolveSection

```javascript
// engine/parser/resolveSection.js
export function resolveSection(section, theme, breakpoint) {
  const responsive = section.responsive?.[breakpoint] ?? {};
  return {
    ...section,
    props: { ...section.props, ...responsive.props },
    styles: { ...section.styles, ...responsive.styles },
    theme,
  };
}
```

### 8.2 SectionRenderer

Shared by gallery playground preview and builder preview:

```javascript
// engine/renderer/SectionRenderer.jsx
export function SectionRenderer({ section, theme, breakpoint }) {
  const variantDef = getVariant(section.type, section.variant);
  if (!variantDef) return <SectionError type={section.type} variant={section.variant} />;

  const resolved = resolveSection(section, theme, breakpoint);
  const Component = variantDef.component;

  return (
    <SectionErrorBoundary sectionId={section.id}>
      <Component {...resolved.props} styles={resolved.styles} theme={theme} />
    </SectionErrorBoundary>
  );
}
```

### 8.3 Gallery Playground Preview

```javascript
// features/gallery/components/PlaygroundLayout.jsx
const sectionJson = useSelector(selectPlaygroundSectionJson);
const viewport = useSelector((s) => s.ui.viewport);

<PreviewFrame width={BREAKPOINT_WIDTHS[viewport]}>
  <ThemeProvider theme={DEFAULT_THEME}>
    <SectionRenderer section={sectionJson} theme={DEFAULT_THEME} breakpoint={viewport} />
  </ThemeProvider>
</PreviewFrame>
<LiveJsonPanel json={sectionJson} />
```

---

## 9. Styling — Tailwind CSS

### 9.1 Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      spacing: {
        /* token scale: 0–8 mapped in design-system/tokens/spacing.js */
      },
      borderRadius: {
        token: 'var(--radius)',
      },
    },
  },
  plugins: [],
};
```

### 9.2 Runtime Theme (Site Config)

`ThemeProvider` writes CSS variables on the preview container (not `:root` globally—avoids leaking into app chrome):

```javascript
// design-system/ThemeProvider.jsx
export function ThemeProvider({ theme, children, previewRef }) {
  useEffect(() => {
    const el = previewRef?.current;
    if (!el || !theme) return;
    Object.entries(theme.colors ?? {}).forEach(([k, v]) => {
      el.style.setProperty(`--color-${k}`, v);
    });
    if (theme.typography?.fontFamily) {
      el.style.setProperty('--font-sans', FONT_MAP[theme.typography.fontFamily]);
    }
  }, [theme, previewRef]);
  return <div ref={previewRef} className="preview-root">{children}</div>;
}
```

### 9.3 stylesToClasses

Maps JSON `styles` object to Tailwind classes for variant components:

```javascript
// design-system/utils/stylesToClasses.js
const PADDING_Y_MAP = { 0: 'py-0', 4: 'py-8', 8: 'py-16', /* ... */ };
const TEXT_ALIGN_MAP = { left: 'text-left', center: 'text-center', right: 'text-right' };

export function stylesToClasses(styles = {}) {
  return cn(
    styles.paddingY != null && PADDING_Y_MAP[styles.paddingY],
    styles.textAlign && TEXT_ALIGN_MAP[styles.textAlign],
    styles.background && `bg-${styles.background}`,
    /* ... */
  );
}
```

### 9.4 Variant Component Pattern

```javascript
// catalog/components/hero/variants/SplitImageRight.jsx
import { Container, Heading, Text, Button } from '@/design-system/primitives';
import { stylesToClasses } from '@/design-system/utils/stylesToClasses';

export default function SplitImageRight({ headline, subtext, primaryAction, image, styles, theme }) {
  return (
    <section className={cn('w-full', stylesToClasses(styles))}>
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Heading level={1}>{headline}</Heading>
          <Text variant="muted" className="mt-4">{subtext}</Text>
          <Button className="mt-8" href={primaryAction.href}>{primaryAction.label}</Button>
        </div>
        <img src={image} alt="" className="rounded-lg shadow-md" />
      </Container>
    </section>
  );
}
```

---

## 10. Google Fonts

### 10.1 Allowed Font Families

Defined in `design-system/fonts/fontConfig.js`:

| Key | Google Font | Usage |
|-----|-------------|-------|
| `inter` | Inter | Default body |
| `plus-jakarta-sans` | Plus Jakarta Sans | Modern SaaS headings |
| `dm-sans` | DM Sans | Clean startup aesthetic |
| `space-grotesk` | Space Grotesk | Dev-tool / tech brands |

### 10.2 Loading Strategy

Option A — `@fontsource` packages (recommended for Vite):

```javascript
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
```

Option B — Google Fonts CSS in `index.html` with `preconnect`.

Site config `theme.typography.fontFamily` selects from the allowed map; gallery style controls expose the same list.

---

## 11. Lucide Icons

All icons use **Lucide React**. No inline SVGs in variant components.

```javascript
// design-system/primitives/Icon.jsx
import * as LucideIcons from 'lucide-react';
import { cn } from '@/design-system/utils/cn';

export function Icon({ name, className, size = 20 }) {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={cn('shrink-0', className)} size={size} />;
}
```

Catalog components reference icons by string name in JSON props:

```json
{ "features": [{ "icon": "Zap", "title": "Fast", "description": "..." }] }
```

`Icon` resolves `"Zap"` → `lucide-react` `Zap`. Allowed icon names validated in component `propsSchema`.

App chrome (gallery/builder UI) uses Lucide directly: `Copy`, `Monitor`, `Tablet`, `Smartphone`, etc.

---

## 12. Gallery Playground Architecture

| Panel | Implementation |
|-------|----------------|
| **Variant switcher** | Tabs listing `registry.variants` for current `type`; `dispatch(setVariant(id))` |
| **Style controls** | Generated from `allowedStyleKeys`; maps to token inputs |
| **Content controls** | Generated from `propsSchema` shape; text inputs, array editors |
| **Responsive toggle** | `ViewportSwitcher` shared component; edits `responsive[bp]` in gallerySlice |
| **Live preview** | `SectionRenderer` inside `PreviewFrame` |
| **Live JSON panel** | `selectPlaygroundSectionJson` → formatted `JSON.stringify` |
| **Copy JSON** | `useCopyToClipboard(selectPlaygroundSectionJson(state))` — user pastes into builder manually |

---

## 13. Builder Architecture

Split layout via CSS Grid:

```
┌──────────────────────┬──────────────────────┐
│   JsonEditorPanel    │    PreviewPanel      │
│   (Monaco)           │    (SiteRenderer)    │
│                      │    [ViewportSwitcher]│
├──────────────────────┴──────────────────────┤
│   ValidationPanel (collapsible)             │
└─────────────────────────────────────────────┘
```

- `JsonEditorPanel` dispatches `setRawJson` on change
- `debounceMiddleware` parses and validates before updating `siteConfig`
- `PreviewPanel` reads `builder.siteConfig` + `ui.viewport`
- Toolbar: import/export, template picker, link to gallery, clear draft

---

## 14. Routing

```javascript
// src/app/router/routes.config.js
export const routes = [
  { path: '/', element: HomePage },
  { path: '/gallery', element: GalleryPage },
  { path: '/gallery/:type/:variant', element: GalleryPlaygroundPage },
  { path: '/builder', element: BuilderPage },
];
```

`AppLayout` wraps all routes with header nav (Gallery, Builder) and app-level Tailwind theme (separate from site preview theme).

---

## 15. Responsive Preview

| Breakpoint | Preview width | JSON key |
|------------|---------------|----------|
| `mobile` | 375px | `responsive.mobile` |
| `tablet` | 768px | `responsive.tablet` |
| `desktop` | 1280px | `responsive.desktop` |

`PreviewFrame` sets container width; `resolveSection` receives active breakpoint string. Tailwind responsive utilities handle fluid layout inside variants; JSON `responsive` overrides take precedence for allowed keys.

---

## 16. Error Handling

| Layer | Strategy |
|-------|----------|
| JSON parse | `builderSlice.parseError` → banner in editor |
| Validation | `ValidationPanel` lists paths + messages |
| Unknown type/variant | `SectionError` component in preview |
| Render throw | `SectionErrorBoundary` per section |
| App root | `ErrorFallback` with link home |

---

## 17. Performance

- `React.memo` on `SectionRenderer`
- `React.lazy` for variant components in gallery grid thumbnails
- Route-level code splitting (`React.lazy` on pages)
- Debounce: parse 150ms, validation 300ms
- Soft warning when `sections.length > 20`

---

## 18. Security (Frontend-Only)

- Plain text props only; no `dangerouslySetInnerHTML`
- `sanitizeHref()` blocks `javascript:` URLs
- Image URLs: https or same-origin preferred
- No `eval` / `new Function` on user JSON
- localStorage: no secrets

---

## 19. Dependencies

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

## 20. Extension Guide

### Add a new component type

1. Create `src/catalog/components/<type>/` with `index.js`, `schema.js`, `meta.js`, `variants/`
2. Import in `catalog/registry/registerAll.js`
3. Add entry to `catalog/registry/galleryOrder.js`
4. Gallery and builder pick it up automatically—no feature code changes

### Add a new variant

1. Add `variants/NewVariant.jsx`
2. Register in component `index.js` under `variants`
3. Add Zod defaults if props differ

### Add a new Google Font

1. Install `@fontsource/<font>`
2. Import in `design-system/fonts/loadFonts.js`
3. Add key to `fontConfig.js` and theme schema allowlist

### Add a starter template

1. Drop JSON in `src/templates/`
2. Register in `TemplatePicker` config array

---

## 21. Architecture Diagram

```
                    ┌─────────────────┐
                    │  Gallery UI     │
                    │  (playground)   │
                    └────────┬────────┘
                             │ dispatch updateProps/Styles
                             ▼
                    ┌─────────────────┐
                    │  gallerySlice   │
                    └────────┬────────┘
                             │ selectPlaygroundSectionJson
                             ▼
                    ┌─────────────────┐      Copy JSON
                    │ sectionToJson   │──────────────────┐
                    └────────┬────────┘                  │
                             │                           │
                             ▼                           ▼
                    ┌─────────────────┐      ┌─────────────────┐
                    │ SectionRenderer │      │  User clipboard │
                    └────────┬────────┘      └────────┬────────┘
                             │                        │ paste
                             │                        ▼
                             │               ┌─────────────────┐
                             │               │  builderSlice   │
                             │               │  (rawJson)      │
                             │               └────────┬────────┘
                             │                        │ validate
                             │                        ▼
                             │               ┌─────────────────┐
                             └──────────────►│  SiteRenderer   │
                                             └────────┬────────┘
                                                      │
                                                      ▼
                                             ┌─────────────────┐
                                             │ Catalog Variant │
                                             │ (Tailwind+Lucide)│
                                             └─────────────────┘
```

---

## 22. Decision Log

| Decision | Rationale |
|----------|-----------|
| Redux Toolkit | Predictable state for gallery playground and builder; localStorage middleware |
| Tailwind CSS | Rapid variant iteration; token mapping via `stylesToClasses` |
| Lucide React | Consistent icon set; string names in JSON props |
| Google Fonts (@fontsource) | Self-hosted fonts; no runtime dependency on Google CDN in production |
| Strict catalog/engine/features split | Add 12+ components without touching builder or gallery logic |
| `sectionToJson` shared serializer | Gallery JSON === builder section JSON; PRD parity guarantee |
| Zod validation | Schemas colocated with catalog components |
| Vite | Fast dev server and static build for SPA deploy |
