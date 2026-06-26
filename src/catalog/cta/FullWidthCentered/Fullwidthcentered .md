# Full Width Centered

A full-width centered CTA (call-to-action) section with a headline, supporting text, and up to two action buttons. Ideal for conversion-focused sections at the bottom of a page or between major content blocks.

## When to use

- End-of-page conversion prompts ("Get started", "Request a demo")
- Mid-page upsell or upgrade nudges
- Announcement banners with a single clear next action

## Usage

```jsx
import FullWidthCentered from "@/catalog/cta/FullWidthCentered";

<FullWidthCentered
  heading="Ready to scale your UI creation workflow?"
  subheading="Join over 2,000 teams building faster layout configurations without structural technical debt."
  primaryAction={{ label: "Get started for free", href: "#" }}
  secondaryAction={{ label: "Schedule a demo", href: "#" }}
  styles={{ paddingY: 16, background: "navy" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Ready to scale your UI creation workflow?"` | No | Main promotional title text |
| `subheading` | `string` | `"Join over 2,000 teams building faster..."` | No | Supporting description paragraph. Pass `""` to hide |
| `primaryAction` | `{ label: string, href: string }` | `{ label: "Get started for free", href: "#" }` | No | Primary CTA button. Omit or leave `label` empty to hide |
| `secondaryAction` | `{ label: string, href: string }` | `{ label: "Schedule a demo", href: "#" }` | No | Secondary CTA button. Omit or leave `label` empty to hide |
| `styles` | `object` | `{ paddingY: 16, background: "navy" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `background` | `string` | `"navy"` | `"surface"`, `"muted"`, `"navy"` | Section background token. Also controls button color variants |
| `paddingY` | `number` | `16` | `8`, `12`, `16`, `20` | Vertical section padding scale |
| `headingColor` | `string` | `"text-white"` | Any text color token | Color applied to the main heading |
| `headingSize` | `string` | `"text-4xl"` | `"text-3xl"`, `"text-4xl"`, `"text-5xl"` | Font size of the main heading |
| `headingWeight` | `string` | `"font-extrabold"` | `"font-bold"`, `"font-extrabold"` | Font weight of the main heading |
| `subheadingColor` | `string` | `"text-white/80"` | Any text color token | Color applied to the subheading |
| `subheadingSize` | `string` | `"text-lg"` | `"text-base"`, `"text-lg"`, `"text-xl"` | Font size of the subheading |

> **Note:** Button styles adapt automatically based on the `background` token. On `"navy"`, the primary button uses brand color and the secondary uses a white outline. On `"surface"` or `"muted"`, both buttons shift to light-mode variants.

## JSON example

```json
{
  "id": "cta-1",
  "type": "cta",
  "variant": "full-width-centered",
  "props": {
    "heading": "Ready to scale your UI creation workflow?",
    "subheading": "Join over 2,000 teams building faster layout configurations without structural technical debt.",
    "primaryAction": { "label": "Get started for free", "href": "#" },
    "secondaryAction": { "label": "Schedule a demo", "href": "#" }
  },
  "styles": {
    "paddingY": 16,
    "background": "navy"
  }
}
```