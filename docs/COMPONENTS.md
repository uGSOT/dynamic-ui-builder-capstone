# Component Catalog

Complete reference for all startup website components in Dynamic UI Builder Studio.

**12 component types · 37 variants**

Reference images live at `public/assets/references/<type>/<variant-id>.png` and are used as visual targets for implementation and gallery thumbnails.

---

## Catalog Summary

| # | Type | ID | Variants | Count |
|---|------|----|----------|-------|
| 1 | Navbar | `navbar` | classic-sticky, transparent-hero, centered-logo | 3 |
| 2 | Hero | `hero` | centered, split-image-right, split-image-left, with-social-proof | 4 |
| 3 | Logo Cloud | `logo-cloud` | simple-row, with-heading, logo-grid | 3 |
| 4 | Features | `features` | icon-grid, alternating-rows, bento-grid | 3 |
| 5 | How It Works | `how-it-works` | steps-horizontal, steps-vertical, icon-cards | 3 |
| 6 | Stats | `stats` | inline-row, stat-cards, split-with-copy | 3 |
| 7 | Pricing | `pricing` | three-tier, two-tier-highlight, single-plan-focus | 3 |
| 8 | Testimonials | `testimonials` | card-grid, featured-single, carousel | 3 |
| 9 | FAQ | `faq` | accordion-single, accordion-two-column, grouped-category | 3 |
| 10 | CTA Banner | `cta` | full-width-centered, split-with-image, newsletter-signup | 3 |
| 11 | Team | `team` | grid-simple, grid-with-bio, compact-row | 3 |
| 12 | Footer | `footer` | multi-column, minimal-centered, with-newsletter | 3 |

### Typical page assembly

```
navbar → hero → logo-cloud → features → how-it-works → stats
       → pricing → testimonials → faq → cta → footer
```

Optional: `team` on About pages, second `cta` mid-page, duplicate `features` for use-case sections.

---

## Component Model

Each catalog entry uses:

| Field | Description |
|-------|-------------|
| `type` | Stable identifier (e.g. `hero`, `pricing`) |
| `variant` | Predefined layout preset (e.g. `centered`, `split-image-right`) |
| `props` | Content for that variant (headline, buttons, images, lists) |
| `styles` | Token-based style overrides scoped to the component |
| `responsive` | Optional per-breakpoint overrides (`mobile`, `tablet`, `desktop`) |

### Global content rules

- Text: plain strings (no HTML)
- Links: `href`, `label`, optional `target`
- Images: URL string or static asset path from `public/`
- Buttons: variant (`primary`, `secondary`, `ghost`), size (`sm`, `md`, `lg`)
- Lists: arrays of objects with stable inner schema per component
- Forms (newsletter, waitlist): display-only; no submission backend

---

## 1. Navbar

**Type:** `navbar`

Top navigation on every startup site. Controls brand identity, primary nav links, and the main CTA.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Classic Sticky | `classic-sticky` | Logo left, links center/right, CTA button, solid background, sticks on scroll | Default SaaS homepage | ![classic-sticky](../public/assets/references/navbar/classic-sticky.png) |
| Transparent Hero | `transparent-hero` | Transparent background over hero, becomes solid on scroll | Product launch pages with full-bleed hero | ![transparent-hero](../public/assets/references/navbar/transparent-hero.png) |
| Centered Logo | `centered-logo` | Logo centered, links split left/right, CTA on far right | Minimal, design-forward brands | ![centered-logo](../public/assets/references/navbar/centered-logo.png) |

**Props:** `logo` (text or image), `navLinks[]`, `ctaButton`, `sticky` (boolean)

---

## 2. Hero

**Type:** `hero`

Above-the-fold section—the highest-impact block on any startup site.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Centered | `centered` | Headline, subtext, and dual CTAs centered; optional background gradient | Early-stage landing pages | ![centered](../public/assets/references/hero/centered.png) |
| Split Image Right | `split-image-right` | Copy left, product screenshot/mockup right | SaaS product demos | ![split-image-right](../public/assets/references/hero/split-image-right.png) |
| Split Image Left | `split-image-left` | Image left, copy right | Mobile apps, hardware products | ![split-image-left](../public/assets/references/hero/split-image-left.png) |
| With Social Proof | `with-social-proof` | Centered hero plus avatar stack or "trusted by X teams" badge below CTAs | Post-launch traction pages | ![with-social-proof](../public/assets/references/hero/with-social-proof.png) |

**Props:** `headline`, `subtext`, `primaryAction`, `secondaryAction`, `image`, `badge` (optional)

---

## 3. Logo Cloud

**Type:** `logo-cloud`

"Trusted by" or "Used by teams at" social proof—standard on B2B startup sites.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Simple Row | `simple-row` | Grayscale logos in a horizontal row, no heading | Below hero, subtle proof | ![simple-row](../public/assets/references/logo-cloud/simple-row.png) |
| With Heading | `with-heading` | Short heading above logo row | Dedicated social proof band | ![with-heading](../public/assets/references/logo-cloud/with-heading.png) |
| Logo Grid | `logo-grid` | Logos in a 3×2 or 4×2 grid with equal spacing | Many partner logos | ![logo-grid](../public/assets/references/logo-cloud/logo-grid.png) |

**Props:** `heading` (optional), `logos[]` (image + alt), `grayscale` (boolean)

---

## 4. Features

**Type:** `features`

Product benefits and capabilities—the core "what we do" section.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Icon Grid | `icon-grid` | 3 or 6 features in equal columns with icon, title, description | Standard feature overview | ![icon-grid](../public/assets/references/features/icon-grid.png) |
| Alternating Rows | `alternating-rows` | Feature rows alternating image left/right with copy | Deep-dive on 3–4 key features | ![alternating-rows](../public/assets/references/features/alternating-rows.png) |
| Bento Grid | `bento-grid` | Asymmetric card grid with varied cell sizes | Modern dev-tool / AI product pages | ![bento-grid](../public/assets/references/features/bento-grid.png) |

**Props:** `heading`, `subheading` (optional), `features[]` (icon, title, description, image optional)

---

## 5. How It Works

**Type:** `how-it-works`

Step-by-step explanation of product flow—common on onboarding-focused startups.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Numbered Steps Horizontal | `steps-horizontal` | 3–4 steps in a row with number, title, description | Simple 3-step products | ![steps-horizontal](../public/assets/references/how-it-works/steps-horizontal.png) |
| Numbered Steps Vertical | `steps-vertical` | Steps stacked with connecting line/timeline | More detailed workflows | ![steps-vertical](../public/assets/references/how-it-works/steps-vertical.png) |
| Icon Cards | `icon-cards` | Steps as elevated cards with icon, no numbers | Friendly consumer products | ![icon-cards](../public/assets/references/how-it-works/icon-cards.png) |

**Props:** `heading`, `subheading` (optional), `steps[]` (number optional, icon, title, description)

---

## 6. Stats

**Type:** `stats`

Big numbers that convey traction—"10K+ users", "99.9% uptime", etc.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Inline Row | `inline-row` | 3–4 stats in a single horizontal band | Below hero or features | ![inline-row](../public/assets/references/stats/inline-row.png) |
| Stat Cards | `stat-cards` | Each stat in its own card with label and optional icon | Highlighted metrics section | ![stat-cards](../public/assets/references/stats/stat-cards.png) |
| Split With Copy | `split-with-copy` | Stats on one side, supporting paragraph on the other | Storytelling + proof combined | ![split-with-copy](../public/assets/references/stats/split-with-copy.png) |

**Props:** `heading` (optional), `stats[]` (value, label, suffix optional), `body` (optional, split variant only)

---

## 7. Pricing

**Type:** `pricing`

Pricing tables—essential for SaaS and subscription startups.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Three Tier Cards | `three-tier` | Free / Pro / Enterprise cards side by side | Standard SaaS pricing | ![three-tier](../public/assets/references/pricing/three-tier.png) |
| Two Tier Highlight | `two-tier-highlight` | Two plans with one visually emphasized (most popular) | Early-stage with one main plan | ![two-tier-highlight](../public/assets/references/pricing/two-tier-highlight.png) |
| Single Plan Focus | `single-plan-focus` | One plan centered with feature checklist | Simple product, one price | ![single-plan-focus](../public/assets/references/pricing/single-plan-focus.png) |

**Props:** `heading`, `subheading` (optional), `plans[]` (name, price, period, description, features[], cta, highlighted boolean), `billingToggle` (optional, display-only)

---

## 8. Testimonials

**Type:** `testimonials`

Customer quotes and social proof from real users.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Card Grid | `card-grid` | 3 testimonial cards with quote, name, role, avatar | Multiple short quotes | ![card-grid](../public/assets/references/testimonials/card-grid.png) |
| Featured Single | `featured-single` | One large quote with photo, name, company logo | Hero testimonial / case study teaser | ![featured-single](../public/assets/references/testimonials/featured-single.png) |
| Carousel | `carousel` | Horizontally scrollable testimonial cards | Many testimonials, limited space | ![carousel](../public/assets/references/testimonials/carousel.png) |

**Props:** `heading` (optional), `testimonials[]` (quote, name, role, company, avatar, logo optional)

---

## 9. FAQ

**Type:** `faq`

Frequently asked questions—reduces support load and handles objections.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Accordion Single Column | `accordion-single` | Expand/collapse Q&A list, one column | Standard FAQ section | ![accordion-single](../public/assets/references/faq/accordion-single.png) |
| Accordion Two Column | `accordion-two-column` | Questions split across two columns | Long FAQ lists | ![accordion-two-column](../public/assets/references/faq/accordion-two-column.png) |
| Grouped By Category | `grouped-category` | FAQs organized under category headings (Pricing, Product, Security) | Enterprise / compliance-heavy products | ![grouped-category](../public/assets/references/faq/grouped-category.png) |

**Props:** `heading`, `subheading` (optional), `items[]` (question, answer) or `categories[]` (name, items[])

---

## 10. CTA Banner

**Type:** `cta`

Final conversion push before the footer—"Start free trial", "Book a demo", etc.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Full Width Centered | `full-width-centered` | Headline, subtext, single CTA on colored/gradient background | Standard bottom CTA | ![full-width-centered](../public/assets/references/cta/full-width-centered.png) |
| Split With Image | `split-with-image` | Copy and CTA on one side, illustration/image on the other | Visual product reminder | ![split-with-image](../public/assets/references/cta/split-with-image.png) |
| Newsletter Signup | `newsletter-signup` | Email input + submit button (display-only, no backend) | Waitlist / newsletter capture | ![newsletter-signup](../public/assets/references/cta/newsletter-signup.png) |

**Props:** `headline`, `subtext` (optional), `primaryAction`, `image` (optional), `placeholder` (newsletter variant)

---

## 11. Team

**Type:** `team`

Founders and team section—common on About pages and early-stage sites building trust.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Grid Simple | `grid-simple` | Photo, name, role in a 3–4 column grid | Small teams | ![grid-simple](../public/assets/references/team/grid-simple.png) |
| Grid With Bio | `grid-with-bio` | Photo, name, role, short bio, social links | About page detail | ![grid-with-bio](../public/assets/references/team/grid-with-bio.png) |
| Compact Row | `compact-row` | Smaller avatars in a row with name/role below | "Built by" section on landing page | ![compact-row](../public/assets/references/team/compact-row.png) |

**Props:** `heading`, `subheading` (optional), `members[]` (name, role, bio optional, avatar, links[] optional)

---

## 12. Footer

**Type:** `footer`

Site footer with links, legal, and optional newsletter—closes every page.

| Name | ID | Description | Typical use | Reference |
|------|----|-------------|-------------|-----------|
| Multi Column | `multi-column` | Logo + tagline, 3–4 link columns, social icons, copyright | Full SaaS footer | ![multi-column](../public/assets/references/footer/multi-column.png) |
| Minimal Centered | `minimal-centered` | Logo, single row of links, copyright centered | Clean startup aesthetic | ![minimal-centered](../public/assets/references/footer/minimal-centered.png) |
| With Newsletter | `with-newsletter` | Multi-column links plus email signup row (display-only) | Growth-focused products | ![with-newsletter](../public/assets/references/footer/with-newsletter.png) |

**Props:** `logo`, `tagline` (optional), `columns[]` (title, links[]), `socialLinks[]`, `copyright`, `newsletter` (optional)
