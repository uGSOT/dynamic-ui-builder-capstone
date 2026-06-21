# Sprint Stories

## Dynamic UI Builder Studio — 12-Day Sprint

**Team:** 5 developers  
**Sprint:** 12 days  
**Process:** Pick a story → build → open PR → review → merge → pick next (check dependencies first)

**Sprint flow:** Setup → Components → JSON Rendering → Builder Phase

**Points guide:** 1 = small story · 2 = medium · 3 = large  
**Total stories:** 34 across 4 epics · **49 points** total  
**Docs:** [PRD](./PRD.md) · [ARCHITECTURE](./ARCHITECTURE.md) · [COMPONENTS](./COMPONENTS.md)

---

## Sprint flow

```
Epic 1 — Setup
    ↓
Epic 2 — Components (build all 37 variants as React components)
    ↓
Epic 3 — JSON Rendering (registry, renderers, validation, wire components to JSON)
    ↓
Epic 4 — Builder Phase (gallery, website builder, templates, ship)
```

---

## Epic overview

| Epic | Name | Goal | Stories | Points |
|------|------|------|---------|--------|
| **E1** | Setup | Project runs locally and on Vercel, routes work, design system ready | E1-01 → E1-07 | 8 |
| **E2** | Components | All 12 types and 37 variants built as React components | E2-01 → E2-12 | 15 |
| **E3** | JSON Rendering | JSON config drives rendering — registry, renderers, validation, Redux | E3-01 → E3-05 | 9 |
| **E4** | Builder Phase | Gallery playground, website builder, templates, QA, production deploy | E4-01 → E4-10 | 17 |

---

## Full story index

| Story | Epic | Title | Points | Depends on |
|-------|------|-------|--------|------------|
| E1-01 | Setup | Project init and dependencies | 1 | — |
| E1-02 | Setup | Vercel deploy and README | 1 | E1-01 |
| E1-03 | Setup | App layout and header | 1 | E1-01 |
| E1-04 | Setup | Routes and placeholder pages | 1 | E1-03 |
| E1-05 | Setup | Home page | 1 | E1-04 |
| E1-06 | Setup | Tailwind config and theme tokens | 1 | E1-01 |
| E1-07 | Setup | UI primitives and helpers | 2 | E1-06 |
| E2-01 | Components | Navbar (3 variants) | 1 | E1-07 |
| E2-02 | Components | Hero (4 variants) | 2 | E1-07 |
| E2-03 | Components | Logo Cloud (3 variants) | 1 | E1-07 |
| E2-04 | Components | Features (3 variants) | 1 | E1-07 |
| E2-05 | Components | How It Works (3 variants) | 1 | E1-07 |
| E2-06 | Components | Stats (3 variants) | 1 | E1-07 |
| E2-07 | Components | Pricing (3 variants) | 2 | E1-07 |
| E2-08 | Components | Testimonials (3 variants) | 2 | E1-07 |
| E2-09 | Components | FAQ (3 variants) | 1 | E1-07 |
| E2-10 | Components | CTA (3 variants) | 1 | E1-07 |
| E2-11 | Components | Team (3 variants) | 1 | E1-07 |
| E2-12 | Components | Footer (3 variants) | 1 | E1-07 |
| E3-01 | JSON Rendering | Registry and renderers | 2 | E1-07, E2-01 |
| E3-02 | JSON Rendering | JSON utils and validation | 2 | E3-01 |
| E3-03 | JSON Rendering | Register all components in registry | 2 | E3-01, E2-12 |
| E3-04 | JSON Rendering | Redux store and localStorage | 2 | E3-02 |
| E3-05 | JSON Rendering | Full-page JSON render smoke test | 1 | E3-03, E3-04 |
| E4-01 | Builder | Gallery category and variation grid | 2 | E3-05 |
| E4-02 | Builder | Playground layout and variant switcher | 2 | E4-01 |
| E4-03 | Builder | Style and content controls | 2 | E4-02 |
| E4-04 | Builder | Live JSON panel, copy button, viewport toggle | 1 | E4-03 |
| E4-05 | Builder | Builder layout and JSON editor | 2 | E3-05 |
| E4-06 | Builder | Live preview panel | 2 | E4-05 |
| E4-07 | Builder | Validation and error panel | 1 | E4-05 |
| E4-08 | Builder | Toolbar — import, export, reset, templates | 1 | E4-06 |
| E4-09 | Builder | Starter templates (3 JSON files) | 1 | E4-08 |
| E4-10 | Builder | End-to-end QA, production deploy, README | 3 | E4-04, E4-09 |

---

## Epic 1 — Setup

**Goal:** The project runs locally and on Vercel. App shell, routes, and shared UI primitives are ready so component work can start.

| Story | Title | Description | Acceptance Criteria | Points | Depends on |
|-------|-------|-------------|---------------------|--------|------------|
| **E1-01** | Project init and dependencies | Create Vite + React + JS app. Install Tailwind, Redux Toolkit, React Router, Lucide, Zod, Monaco. Set up folder structure from ARCHITECTURE.md. | • `npm run dev` works<br>• All deps installed<br>• Folder structure matches ARCHITECTURE.md<br>• PR merged | 1 | — |
| **E1-02** | Vercel deploy and README | Connect repo to Vercel. Deploy main branch. Add README with clone, install, run, and deploy steps. | • App live on Vercel URL<br>• Auto-deploy on push to main<br>• README has setup steps<br>• PR merged | 1 | E1-01 |
| **E1-03** | App layout and header | Build `AppLayout.jsx` and `AppHeader.jsx` with nav links to Home, Gallery, Builder. | • Layout wraps all pages<br>• Header shows on every route<br>• Nav links visible<br>• PR merged | 1 | E1-01 |
| **E1-04** | Routes and placeholder pages | Wire React Router with all 4 routes. Add placeholder pages that render a page title. | • All 4 routes load without errors<br>• PR merged | 1 | E1-03 |
| **E1-05** | Home page | Build `HomePage` with product intro and buttons linking to Gallery and Builder. | • Home page explains the product<br>• CTAs link to Gallery and Builder<br>• PR merged | 1 | E1-04 |
| **E1-06** | Tailwind config and theme tokens | Set up `tailwind.config.js`, `index.css`, and CSS variables for colors, spacing, radius. | • Tailwind classes work<br>• CSS variables defined<br>• PR merged | 1 | E1-01 |
| **E1-07** | UI primitives and helpers | Build `Button`, `Container`, `Heading`, `Icon` (Lucide). Add `cn.js`, `stylesToClasses.js`, and Google Fonts. | • All 4 primitives render<br>• Fonts load<br>• Helpers work<br>• PR merged | 2 | E1-06 |

**Epic 1 done when:** App is deployed, all routes work, UI primitives are ready. No JSON rendering yet.

---

## Epic 2 — Components

**Goal:** All 37 variants are built as standalone React components. Each accepts `props` and `styles` and matches COMPONENTS.md reference images. Test each with hardcoded sample props — no registry or JSON pipeline yet.

| Story | Title | Description | Acceptance Criteria | Points | Depends on |
|-------|-------|-------------|---------------------|--------|------------|
| **E2-01** | Navbar (3 variants) | Build `ClassicSticky`, `TransparentHero`, `CenteredLogo` in `catalog/navbar/`. Export `defaultProps` per variant. | • 3 variants render with sample props<br>• Match reference images<br>• Mobile responsive<br>• PR merged | 1 | E1-07 |
| **E2-02** | Hero (4 variants) | Build all 4 hero variants in `catalog/hero/`. | • 4 variants render with sample props<br>• CTAs and images work<br>• PR merged | 2 | E1-07 |
| **E2-03** | Logo Cloud (3 variants) | Build all 3 logo-cloud variants. | • 3 variants render with sample props<br>• PR merged | 1 | E1-07 |
| **E2-04** | Features (3 variants) | Build all 3 features variants. Lucide icons from prop names. | • 3 variants render with sample props<br>• PR merged | 1 | E1-07 |
| **E2-05** | How It Works (3 variants) | Build all 3 how-it-works variants. | • 3 variants render with sample props<br>• PR merged | 1 | E1-07 |
| **E2-06** | Stats (3 variants) | Build all 3 stats variants. | • 3 variants render with sample props<br>• PR merged | 1 | E1-07 |
| **E2-07** | Pricing (3 variants) | Build all 3 pricing variants. Highlighted plan stands out. | • 3 variants render with sample props<br>• PR merged | 2 | E1-07 |
| **E2-08** | Testimonials (3 variants) | Build all 3 testimonials variants. Carousel uses CSS scroll. | • 3 variants render with sample props<br>• PR merged | 2 | E1-07 |
| **E2-09** | FAQ (3 variants) | Build all 3 FAQ variants. Accordion expand/collapse works. | • 3 variants render with sample props<br>• PR merged | 1 | E1-07 |
| **E2-10** | CTA (3 variants) | Build all 3 CTA variants. Newsletter is display-only. | • 3 variants render with sample props<br>• PR merged | 1 | E1-07 |
| **E2-11** | Team (3 variants) | Build all 3 team variants. | • 3 variants render with sample props<br>• PR merged | 1 | E1-07 |
| **E2-12** | Footer (3 variants) | Build all 3 footer variants. | • 3 variants render with sample props<br>• PR merged | 1 | E1-07 |

**Epic 2 done when:** All 37 variant files exist in `catalog/`. Up to 5 devs work in parallel — one component type each.

---

## Epic 3 — JSON Rendering

**Goal:** Wire all components into a registry. JSON config renders full pages. Validation, Redux, and localStorage are ready before builder work starts.

| Story | Title | Description | Acceptance Criteria | Points | Depends on |
|-------|-------|-------------|---------------------|--------|------------|
| **E3-01** | Registry and renderers | Create `registry.js`, `SectionRenderer.jsx`, `SiteRenderer.jsx`. Register one test component and prove JSON → render works. | • Registry lookup by type + variant works<br>• SectionRenderer renders from section JSON<br>• SiteRenderer loops sections<br>• PR merged | 2 | E1-07, E2-01 |
| **E3-02** | JSON utils and validation | Build `resolveSection.js`, `sectionToJson.js`, `validateConfig.js` (Zod). | • Theme + responsive merge works<br>• sectionToJson outputs valid section JSON<br>• validateConfig catches bad JSON with clear errors<br>• PR merged | 2 | E3-01 |
| **E3-03** | Register all components | Import all 12 types and 37 variants into `registry.js` with defaultProps and defaultStyles. | • All 37 variants registered<br>• Each renders via SectionRenderer from JSON<br>• PR merged | 2 | E3-01, E2-12 |
| **E3-04** | Redux store and localStorage | Set up `gallerySlice`, `builderSlice`, `uiSlice`. Persist builder draft to localStorage. | • Redux connected in App<br>• All 3 slices work<br>• Draft survives page reload<br>• PR merged | 2 | E3-02 |
| **E3-05** | Full-page JSON smoke test | Create a sample site JSON with 5+ sections. Render it on a test route or home page demo. Fix any wiring bugs. | • Sample site JSON renders full page<br>• All registered types render without crash<br>• PR merged | 1 | E3-03, E3-04 |

**Epic 3 done when:** Passing site JSON to SiteRenderer renders a full page with real catalog components.

---

## Epic 4 — Builder Phase

**Goal:** Gallery playground, website builder, starter templates, QA, and production deploy. User can play with components, copy JSON, paste into builder, and preview a full site.

### Gallery (browse + playground)

| Story | Title | Description | Acceptance Criteria | Points | Depends on |
|-------|-------|-------------|---------------------|--------|------------|
| **E4-01** | Gallery category and variation grid | Build `GalleryPage` with all 12 types and 37 variant cards. Click opens playground. | • All variants listed with thumbnails<br>• Navigation to playground works<br>• PR merged | 2 | E3-05 |
| **E4-02** | Playground layout and variant switcher | Build playground shell: preview area + controls panel. Variant tabs switch within same type. | • Playground loads for any variant<br>• Switcher updates preview instantly<br>• Connected to gallerySlice<br>• PR merged | 2 | E4-01 |
| **E4-03** | Style and content controls | Style inputs (colors, spacing) and content inputs (headline, buttons) from registry defaults. | • Controls update preview live<br>• PR merged | 2 | E4-02 |
| **E4-04** | Live JSON panel, copy, viewport | Read-only JSON panel, copy-to-clipboard, mobile/tablet/desktop toggle. | • JSON panel syncs with playground<br>• Copy button works<br>• Viewport toggle works<br>• PR merged | 1 | E4-03 |

### Website builder

| Story | Title | Description | Acceptance Criteria | Points | Depends on |
|-------|-------|-------------|---------------------|--------|------------|
| **E4-05** | Builder layout and JSON editor | Split-pane `BuilderPage` with Monaco editor wired to builderSlice. | • Editor has syntax highlighting<br>• rawJson updates in store<br>• PR merged | 2 | E3-05 |
| **E4-06** | Live preview panel | Preview pane using SiteRenderer. Debounced parse. Viewport from uiSlice. | • Preview updates on valid JSON<br>• Parse errors show clearly<br>• PR merged | 2 | E4-05 |
| **E4-07** | Validation and error panel | Show Zod errors with paths. Fallback UI for unknown type/variant. | • Validation errors listed<br>• App does not crash on bad JSON<br>• PR merged | 1 | E4-05 |
| **E4-08** | Toolbar — import, export, reset | Import/export JSON files, reset to blank, link to gallery. | • Import and export work<br>• Reset clears editor<br>• PR merged | 1 | E4-06 |

### Ship

| Story | Title | Description | Acceptance Criteria | Points | Depends on |
|-------|-------|-------------|---------------------|--------|------------|
| **E4-09** | Starter templates | Create 3 JSON templates and wire template picker in builder. | • SaaS, dev-tool, AI waitlist templates load<br>• Template picker works<br>• PR merged | 1 | E4-08 |
| **E4-10** | QA, production deploy, README | Full flow test: gallery → copy JSON → builder → full page. Fix bugs. Final Vercel deploy. Update README. | • Gallery and builder preview match for same JSON<br>• All 37 variants work in gallery<br>• Production URL live<br>• README complete<br>• PR merged | 3 | E4-04, E4-09 |

**Epic 4 done when:** Team can demo the full flow live on Vercel.

---

## Suggested day plan (5 devs)

| Days | Epic | What happens |
|------|------|--------------|
| **1** | E1 Setup | E1-01, E1-02 — init and deploy |
| **2** | E1 Setup | E1-03 → E1-07 in parallel — shell, routes, home, tailwind, primitives |
| **3–5** | E2 Components | **All 5 devs parallel** — E2-01 to E2-12, one type each |
| **6–7** | E3 JSON Rendering | E3-01 → E3-05 — registry, utils, register all, Redux, smoke test |
| **8–9** | E4 Builder | E4-01 → E4-04 gallery · E4-05 → E4-06 builder in parallel |
| **10** | E4 Builder | E4-07 → E4-09 — validation, toolbar, templates |
| **11–12** | E4 Builder | E4-10 — QA and ship |

---

## Dependency map

```
E1-01
 ├── E1-02
 ├── E1-03 → E1-04 → E1-05
 └── E1-06 → E1-07
              │
              └── E2-01 … E2-12  (all parallel, one type per dev)
                        │
              E1-07 + E2-01 ── E3-01 → E3-02
                        │              E3-03 (needs all E2 done)
                        │              E3-04
                        └── E3-05
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
              E4-01 → E4-04       E4-05 → E4-08 → E4-09
                    │                   │
                    └──────── E4-10 ────┘
```

---

## Definition of done (every story)

- PR opened, reviewed, and merged to `main`
- `npm run build` passes
- Acceptance criteria checked off in PR description
- Tested locally by reviewer

---

## Out of sprint scope

- User accounts / auth
- Backend / database
- Drag-and-drop editor
- Custom component upload
- Auto send-to-builder (copy-paste only)
