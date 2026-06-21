# Product Requirements Document (PRD)

## Dynamic UI Builder Studio

---

## 1. Executive Summary

Dynamic UI Builder Studio is a frontend-only web application that lets users design and preview complete startup websites by writing a JSON configuration. The product has two primary experiences:

1. **Component Gallery** — A real-time playground where users browse predefined variations, swap between variants, tweak styles and content, and watch the component update instantly. When satisfied, they copy or export the ready-made **component JSON** for use in the builder.
2. **Website Builder** — Compose full pages by pasting gallery-generated JSON into the site config and editing further; every change reflects in the live preview side by side.

The gallery and builder are connected by design: **play in the gallery → get JSON → drop into the builder**. Users never need to write component JSON from scratch.

The component catalog is purpose-built for **startup marketing sites**: landing pages, SaaS homepages, product launches, and early-stage company sites. Every section type commonly found on sites like Stripe, Linear, Vercel, or Notion-style marketing pages is represented with at least three layout variations.

Customization is intentionally bounded: users may freely adjust basic styles (colors, spacing, typography, etc.) and choose from predefined component variations and responsive layouts. They cannot invent new component types or structural patterns outside the catalog.

There is no backend. All rendering happens in the browser. Session data may be stored in `localStorage`; there is no database or server-side persistence.

---

## 2. Problem Statement

Building a consistent, responsive startup website typically requires design decisions, component libraries, and developer time. Founders and marketers lack a single place to explore vetted UI patterns and translate choices into a working site. Developers repeating similar landing pages waste time re-implementing the same hero, pricing, and social-proof sections.

This product solves that by offering a **curated startup component catalog** plus a **declarative JSON config** that renders a full site instantly—no deploy step, no CMS, no backend.

---

## 3. Goals

| Goal | Description |
|------|-------------|
| **Discoverability** | Users can explore every component variation and style option in a visual gallery before committing to a config. |
| **Gallery-to-builder handoff** | Every component configured in the gallery produces copy-ready JSON that can be pasted directly into the website builder. |
| **Startup completeness** | A user can assemble a full startup landing page using only catalog components—navbar through footer. |
| **Speed to preview** | Changes to JSON reflect in the builder preview within one render cycle (target: < 100ms for typical configs). |
| **Consistency** | All sites use the same design tokens and component API; output is predictable and on-brand. |
| **Bounded flexibility** | Unlimited basic style tweaks within token ranges; component structure limited to catalog variations. |
| **Zero infrastructure** | Pure static frontend; works offline after initial load; no auth or server required. |

---

## 4. Non-Goals (Out of Scope)

- User accounts, authentication, or cloud save/sync
- Backend API, database, or file hosting
- Custom component authoring (users cannot upload or define new component types)
- Drag-and-drop visual editor (JSON is the source of truth)
- CMS integrations, form submission backends, or e-commerce checkout
- Multi-tenant publishing or custom domains
- Blog, docs, or dashboard app shells (marketing/landing pages only)

---

## 5. Target Users

### 5.1 Primary — Config Author

A developer, designer, or technical founder who:

- Plays with component variations in the gallery—swaps variants, adjusts styles, edits content—and copies the resulting JSON
- Pastes gallery JSON into the website builder and assembles full pages
- Uses live preview in both gallery and builder to iterate quickly

### 5.2 Secondary — Evaluator / Stakeholder

A non-technical co-founder or investor who:

- Uses the gallery to approve visual direction
- Views the builder preview to sign off on layout before launch

---

## 6. User Flows

### 6.1 Gallery Playground Flow

The gallery is an interactive studio, not a static showcase. Users experiment with components in real time before moving to the builder.

```
Landing → Component Gallery → Select category (e.g. Hero)
        → View all variations (cards with live preview)
        → Open variation playground
              → Swap between variants (e.g. centered ↔ split-image-right) — preview updates instantly
              → Adjust style controls (color, spacing, typography, radius, shadow)
              → Edit content props (headline, button labels, images)
              → Toggle viewport (mobile / tablet / desktop) — responsive overrides reflect live
        → Live JSON panel updates in sync with every change
        → Copy component JSON
        → (Optional) Save to favorites in localStorage
```

**Acceptance criteria:**

- Every catalog component is reachable from the gallery within 3 clicks
- Switching variant, style, content, or viewport updates the preview in real time (< 100ms)
- The JSON panel always reflects the current playground state—not a static sample
- Users can copy a complete, valid section JSON object with one click
- Copied JSON is directly pasteable into `pages[].sections[]` in the website builder without modification
- Each section JSON includes `type`, `variant`, `props`, `styles`, and `responsive` (when set)

### 6.2 Gallery → Builder Handoff

```
Gallery playground → User copies component JSON
                 → Navigate to Website Builder
                 → Paste JSON into pages[].sections[] array
                 → Section appears in live preview immediately
                 → Repeat for each section (navbar, hero, features, …)
                 → Adjust site-level theme and page order in builder JSON
```

**Acceptance criteria:**

- JSON copied from the gallery renders identically when pasted into the builder
- Builder accepts multiple gallery sections pasted sequentially to assemble a full page
- No manual field renaming or schema translation required between gallery and builder

### 6.3 Builder Flow

```
Gallery (with copied JSON) or Home → Website Builder
                                  → Load starter template OR restore from localStorage
                                  → Paste gallery component JSON into sections[] array
                                  → Edit JSON in editor pane (add more sections, tweak theme)
                                  → Preview pane updates in real time
                                  → Toggle viewport: mobile / tablet / desktop
                                  → Export / import JSON file
```

**Acceptance criteria:**

- Invalid JSON shows a clear parse error without crashing the app
- Schema/validation errors surface with field-level messages when possible
- Preview matches gallery rendering for the same config
- Responsive preview respects breakpoints defined in the design system

### 6.4 Session Recovery Flow

```
User returns to site → App checks localStorage for last session
                     → Prompt: "Restore previous draft?" → Yes / No
                     → Restore builder JSON + gallery favorites
```

---

## 7. Product Surfaces

### 7.1 Home

- Value proposition and CTA to Gallery and Builder
- Showcase 2–3 example startup sites rendered from sample JSON (SaaS, dev tool, AI product)

### 7.2 Component Gallery (Real-Time Playground)

The gallery is where users **design individual sections** before assembling the full site in the builder.

| Area | Requirements |
|------|----------------|
| **Category nav** | All 12 component types (see §8) |
| **Variation grid** | Thumbnail + name + short description per variant; click to open playground |
| **Playground view** | Split or stacked layout: live preview + controls + live JSON panel |
| **Variant switcher** | Tabs or dropdown to swap variants within the same component type; preview re-renders instantly |
| **Style controls** | Mapped to design tokens: primary color, background, font scale, border radius, spacing scale, shadow level; every change reflects in preview and JSON |
| **Content controls** | Editable fields for component props (headline, subtext, button labels, list items, etc.) |
| **Responsive toggle** | Mobile / tablet / desktop preview; responsive overrides editable per breakpoint |
| **Live JSON panel** | Read-only JSON that updates in real time as user plays with controls; always valid and builder-ready |
| **Copy JSON** | One-click copy of the current section object for pasting into the website builder |
| **Search / filter** | By category, tag (e.g. "saas", "minimal", "social-proof"), or keyword |

**Gallery JSON output shape** (what users copy and paste into the builder):

```json
{
  "id": "hero-1",
  "type": "hero",
  "variant": "split-image-right",
  "props": {
    "headline": "Build your startup site in minutes",
    "subtext": "Pick components, write JSON, preview instantly.",
    "primaryAction": { "label": "Get started", "href": "#" },
    "image": "/assets/hero-mockup.png"
  },
  "styles": {
    "paddingY": 8,
    "background": "surface"
  },
  "responsive": {
    "mobile": { "styles": { "paddingY": 4 } }
  }
}
```

Users collect one JSON block per section in the gallery, then paste each into `pages[].sections[]` in the builder to compose the full site.

### 7.3 Website Builder

| Area | Requirements |
|------|----------------|
| **JSON editor** | Syntax highlighting; line numbers; format/beautify |
| **Live preview** | Full-page render from parsed config |
| **Toolbar** | Viewport switcher, reset, import/export JSON, clear, link to gallery, paste section |
| **Section assembly** | Users build pages by pasting gallery-generated section JSON into the `sections[]` array |
| **Validation panel** | List of errors/warnings from schema validator |
| **Templates** | Starter JSON for SaaS landing, dev-tool launch, AI product waitlist |

---

## 8. Component Catalog

The catalog ships with **12 component types** and **39 total variations** (minimum 3 per type). Together they cover the standard anatomy of a startup marketing website.

### 8.1 Component Model

Each catalog entry defines:

- **`type`** — Stable identifier (e.g. `hero`, `pricing`)
- **`variant`** — Predefined layout/style preset (e.g. `centered`, `split-image-right`)
- **`props`** — Content allowed for that variant (headline, subtext, buttons, images, lists)
- **`styles`** — Token-based overrides scoped to the component
- **`responsive`** — Optional per-breakpoint overrides (see §9)

Users **must** pick `type` + `variant` from the catalog. They **may** override `props`, `styles`, and allowed responsive keys.

### 8.2 Full Component Catalog

#### 1. Navbar (`navbar`)

Top navigation present on virtually every startup site. Controls brand identity, primary nav links, and the main CTA.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Classic Sticky | `classic-sticky` | Logo left, links center/right, CTA button, solid background, sticks on scroll | Default SaaS homepage |
| Transparent Hero | `transparent-hero` | Transparent background over hero, becomes solid on scroll | Product launch pages with full-bleed hero |
| Centered Logo | `centered-logo` | Logo centered, links split left/right, CTA on far right | Minimal, design-forward brands |

**Props:** logo (text or image), navLinks[], ctaButton, sticky (boolean)

---

#### 2. Hero (`hero`)

Above-the-fold section—the highest-impact block on any startup site.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Centered | `centered` | Headline, subtext, and dual CTAs centered; optional background gradient | Early-stage landing pages |
| Split Image Right | `split-image-right` | Copy left, product screenshot/mockup right | SaaS product demos |
| Split Image Left | `split-image-left` | Image left, copy right | Mobile apps, hardware products |
| With Social Proof | `with-social-proof` | Centered hero plus avatar stack or "trusted by X teams" badge below CTAs | Post-launch traction pages |

**Props:** headline, subtext, primaryAction, secondaryAction, image, badge (optional)

---

#### 3. Logo Cloud (`logo-cloud`)

"Trusted by" or "Used by teams at" social proof—standard on B2B startup sites.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Simple Row | `simple-row` | Grayscale logos in a horizontal row, no heading | Below hero, subtle proof |
| With Heading | `with-heading` | Short heading above logo row | Dedicated social proof band |
| Logo Grid | `logo-grid` | Logos in a 3×2 or 4×2 grid with equal spacing | Many partner logos |

**Props:** heading (optional), logos[] (image + alt), grayscale (boolean)

---

#### 4. Features (`features`)

Product benefits and capabilities—the core "what we do" section.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Icon Grid | `icon-grid` | 3 or 6 features in equal columns with icon, title, description | Standard feature overview |
| Alternating Rows | `alternating-rows` | Feature rows alternating image left/right with copy | Deep-dive on 3–4 key features |
| Bento Grid | `bento-grid` | Asymmetric card grid with varied cell sizes | Modern dev-tool / AI product pages |

**Props:** heading, subheading (optional), features[] (icon, title, description, image optional)

---

#### 5. How It Works (`how-it-works`)

Step-by-step explanation of product flow—common on onboarding-focused startups.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Numbered Steps Horizontal | `steps-horizontal` | 3–4 steps in a row with number, title, description | Simple 3-step products |
| Numbered Steps Vertical | `steps-vertical` | Steps stacked with connecting line/timeline | More detailed workflows |
| Icon Cards | `icon-cards` | Steps as elevated cards with icon, no numbers | Friendly consumer products |

**Props:** heading, subheading (optional), steps[] (number optional, icon, title, description)

---

#### 6. Stats / Metrics (`stats`)

Big numbers that convey traction—"10K+ users", "99.9% uptime", etc.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Inline Row | `inline-row` | 3–4 stats in a single horizontal band | Below hero or features |
| Stat Cards | `stat-cards` | Each stat in its own card with label and optional icon | Highlighted metrics section |
| Split With Copy | `split-with-copy` | Stats on one side, supporting paragraph on the other | Storytelling + proof combined |

**Props:** heading (optional), stats[] (value, label, suffix optional), body (optional, split variant only)

---

#### 7. Pricing (`pricing`)

Pricing tables—essential for SaaS and subscription startups.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Three Tier Cards | `three-tier` | Free / Pro / Enterprise cards side by side | Standard SaaS pricing |
| Two Tier Highlight | `two-tier-highlight` | Two plans with one visually emphasized (most popular) | Early-stage with one main plan |
| Single Plan Focus | `single-plan-focus` | One plan centered with feature checklist | Simple product, one price |

**Props:** heading, subheading (optional), plans[] (name, price, period, description, features[], cta, highlighted boolean), billingToggle (optional, display-only)

---

#### 8. Testimonials (`testimonials`)

Customer quotes and social proof from real users.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Card Grid | `card-grid` | 3 testimonial cards with quote, name, role, avatar | Multiple short quotes |
| Featured Single | `featured-single` | One large quote with photo, name, company logo | Hero testimonial / case study teaser |
| Carousel | `carousel` | Horizontally scrollable testimonial cards | Many testimonials, limited space |

**Props:** heading (optional), testimonials[] (quote, name, role, company, avatar, logo optional)

---

#### 9. FAQ (`faq`)

Frequently asked questions—reduces support load and handles objections.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Accordion Single Column | `accordion-single` | Expand/collapse Q&A list, one column | Standard FAQ section |
| Accordion Two Column | `accordion-two-column` | Questions split across two columns | Long FAQ lists |
| Grouped By Category | `grouped-category` | FAQs organized under category headings (Pricing, Product, Security) | Enterprise / compliance-heavy products |

**Props:** heading, subheading (optional), items[] (question, answer) or categories[] (name, items[])

---

#### 10. CTA Banner (`cta`)

Final conversion push before the footer—"Start free trial", "Book a demo", etc.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Full Width Centered | `full-width-centered` | Headline, subtext, single CTA on colored/gradient background | Standard bottom CTA |
| Split With Image | `split-with-image` | Copy and CTA on one side, illustration/image on the other | Visual product reminder |
| Newsletter Signup | `newsletter-signup` | Email input + submit button (display-only, no backend) | Waitlist / newsletter capture |

**Props:** headline, subtext (optional), primaryAction, image (optional), placeholder (newsletter variant)

---

#### 11. Team (`team`)

Founders and team section—common on About pages and early-stage sites building trust.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Grid Simple | `grid-simple` | Photo, name, role in a 3–4 column grid | Small teams |
| Grid With Bio | `grid-with-bio` | Photo, name, role, short bio, social links | About page detail |
| Compact Row | `compact-row` | Smaller avatars in a row with name/role below | "Built by" section on landing page |

**Props:** heading, subheading (optional), members[] (name, role, bio optional, avatar, links[] optional)

---

#### 12. Footer (`footer`)

Site footer with links, legal, and optional newsletter—closes every page.

| Variant | ID | Description | Typical use |
|---------|-----|-------------|-------------|
| Multi Column | `multi-column` | Logo + tagline, 3–4 link columns, social icons, copyright | Full SaaS footer |
| Minimal Centered | `minimal-centered` | Logo, single row of links, copyright centered | Clean startup aesthetic |
| With Newsletter | `with-newsletter` | Multi-column links plus email signup row (display-only) | Growth-focused products |

**Props:** logo, tagline (optional), columns[] (title, links[]), socialLinks[], copyright, newsletter (optional)

---

### 8.3 Catalog Summary

| # | Type | Variants | Total |
|---|------|----------|-------|
| 1 | navbar | classic-sticky, transparent-hero, centered-logo | 3 |
| 2 | hero | centered, split-image-right, split-image-left, with-social-proof | 4 |
| 3 | logo-cloud | simple-row, with-heading, logo-grid | 3 |
| 4 | features | icon-grid, alternating-rows, bento-grid | 3 |
| 5 | how-it-works | steps-horizontal, steps-vertical, icon-cards | 3 |
| 6 | stats | inline-row, stat-cards, split-with-copy | 3 |
| 7 | pricing | three-tier, two-tier-highlight, single-plan-focus | 3 |
| 8 | testimonials | card-grid, featured-single, carousel | 3 |
| 9 | faq | accordion-single, accordion-two-column, grouped-category | 3 |
| 10 | cta | full-width-centered, split-with-image, newsletter-signup | 3 |
| 11 | team | grid-simple, grid-with-bio, compact-row | 3 |
| 12 | footer | multi-column, minimal-centered, with-newsletter | 3 |
| | **Total** | | **39 variants across 12 types** |

### 8.4 Typical Startup Page Assembly

A complete SaaS landing page using catalog components only:

```
navbar → hero → logo-cloud → features → how-it-works → stats
       → pricing → testimonials → faq → cta → footer
```

Optional additions: `team` on About pages, second `cta` mid-page, duplicate `features` for use-case sections.

### 8.5 Content Props (Global Rules)

- Text: plain strings (no HTML)
- Links: `href`, `label`, optional `target`
- Images: URL string or static asset path from project `public/`
- Buttons: variant enum (`primary`, `secondary`, `ghost`), size enum (`sm`, `md`, `lg`)
- Lists: arrays of objects with stable inner schema per component
- Forms (newsletter, waitlist): display-only UI; no submission backend

---

## 9. Styling & Responsiveness

### 9.1 Design Tokens (Global)

Exposed to users via JSON under `theme` or per-component `styles`:

- Colors: primary, secondary, accent, background, surface, text, muted
- Typography: font family (from allowed set), scale multiplier, heading weight
- Spacing: scale index (0–8 mapped to rem)
- Radius: none | sm | md | lg | full
- Shadow: none | sm | md | lg

Tokens validate against allowlists; unknown keys are rejected with a warning.

### 9.2 Component-Level Styles

Each component documents which style keys it accepts. Examples:

- Hero: `background`, `textAlign`, `paddingY`, `minHeight`
- Navbar: `background`, `height`, `blur` (transparent variant)
- Pricing: `cardBackground`, `highlightColor`, `paddingY`

### 9.3 Responsiveness Model

Breakpoints:

| Name | Min width |
|------|-----------|
| `mobile` | 0 |
| `tablet` | 768px |
| `desktop` | 1024px |

JSON shape for responsive overrides:

```json
{
  "type": "hero",
  "variant": "split-image-right",
  "props": { "headline": "Ship faster" },
  "responsive": {
    "mobile": {
      "styles": { "paddingY": 4 },
      "props": { "imagePosition": "bottom" }
    },
    "desktop": {
      "styles": { "paddingY": 8 }
    }
  }
}
```

Only documented `props` and `styles` keys may appear under `responsive.*`. Layout changes that require a different structure use a **different variant**, not ad-hoc responsive props.

---

## 10. JSON Configuration Specification

### 10.1 Site Config Root

```json
{
  "meta": {
    "title": "Acme — Ship faster",
    "description": "The platform for modern teams"
  },
  "theme": {
    "colors": {
      "primary": "#0066cc",
      "background": "#ffffff",
      "text": "#0f172a"
    },
    "typography": {
      "fontFamily": "inter",
      "scale": 1
    }
  },
  "pages": [
    {
      "id": "home",
      "path": "/",
      "sections": []
    }
  ]
}
```

### 10.2 Section Entry

```json
{
  "id": "hero-1",
  "type": "hero",
  "variant": "split-image-right",
  "props": {
    "headline": "Build your startup site in minutes",
    "subtext": "Pick components, write JSON, preview instantly.",
    "primaryAction": { "label": "Get started", "href": "#" },
    "secondaryAction": { "label": "View gallery", "href": "/gallery" },
    "image": "/assets/hero-mockup.png"
  },
  "styles": {
    "paddingY": 8,
    "background": "surface"
  },
  "responsive": {}
}
```

### 10.3 Validation Rules

- Required: `type`, `variant` on every section
- `variant` must exist for given `type` in the registry
- `props` validated per component schema
- `styles` keys must be in component allowlist
- Unique `id` per section within a page
- `pages[].path` must be unique
- Soft warning when page exceeds 20 sections

---

## 11. Local Storage & Session

| Key | Purpose |
|-----|---------|
| `uibuilder:draft` | Current builder JSON |
| `uibuilder:gallery-favorites` | Saved variation IDs |
| `uibuilder:editor-preferences` | Panel layout, last viewport |

- No PII required
- Clear-all control in builder toolbar
- Import/export JSON as `.json` file for manual backup

---

## 12. Starter Templates

Three ready-made configs ship with the product:

| Template | Components used | Target |
|----------|-----------------|--------|
| **SaaS Landing** | navbar, hero (split), logo-cloud, features (icon-grid), how-it-works, pricing (three-tier), testimonials, faq, cta, footer | B2B SaaS homepage |
| **Dev Tool Launch** | navbar (transparent), hero (with-social-proof), features (bento-grid), stats, testimonials (featured), pricing (two-tier), cta, footer | Developer product |
| **AI Product Waitlist** | navbar, hero (centered), features (alternating), stats, testimonials (carousel), cta (newsletter), faq, footer (minimal) | Pre-launch / waitlist |

---

## 13. UX & Quality Requirements

| Requirement | Target |
|-------------|--------|
| First contentful paint | < 2s on mid-tier mobile |
| Preview update latency | < 100ms after valid JSON change |
| Accessibility | Semantic HTML, focus states, WCAG 2.1 AA on all 12 component types |
| Browser support | Last 2 versions of Chrome, Firefox, Safari, Edge |
| Error handling | Graceful fallback UI for unknown type/variant with actionable message |
| Gallery coverage | 100% of 39 variants previewable in gallery |

---

## 14. Success Criteria

The product is complete when:

1. All **12 component types** and **39 variants** are implemented and playable in the gallery
2. Users can configure any component in the gallery playground and copy valid JSON with one click
3. JSON copied from the gallery pastes into the builder and renders identically
4. A user can build a full startup landing page by collecting section JSON from the gallery and assembling it in the builder
5. Gallery preview and builder preview render identically for the same section config
6. One-click copy JSON from the gallery works end-to-end
7. All three starter templates load and render without errors
8. JSON import/export and localStorage draft recovery work end-to-end
9. Responsive preview works at mobile, tablet, and desktop breakpoints

---

## 15. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| JSON too intimidating for non-devs | Gallery-first flow; copy-paste snippets; starter templates |
| Config/schema drift | Single registry source of truth; shared schemas per component |
| Performance with long pages | Memoize section renders; soft warning at 20 sections |
| Carousel/testimonial UX without backend | CSS-only scroll snap; no autoplay requiring JS timers in v1 |

---

## 16. Glossary

| Term | Definition |
|------|------------|
| **Variant** | A predefined layout/visual preset for a component type |
| **Registry** | In-app map of all component types, variants, schemas, and renderers |
| **Token** | Named design value (color, spacing, etc.) from the design system |
| **Section** | One instance of a component on a page |
| **Config** | Full site JSON document consumed by the renderer |
