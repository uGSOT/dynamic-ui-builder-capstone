# Newsletter Signup

A compact inline signup strip with a heading, supporting text, email input, and subscribe button. Designed as a display-only layout component — form submission is handled externally.

## When to use

- Footer or mid-page email capture sections
- Product update or changelog subscription prompts
- Any context where a low-friction signup strip fits alongside other content

## Usage

```jsx
import NewsletterSignup from "@/catalog/newsletter/NewsletterSignup";

<NewsletterSignup
  heading="Stay ahead of the curve"
  subheading="Get curated system update insights, design token workflows, and product updates monthly."
  buttonLabel="Subscribe"
  placeholderText="Enter your email address"
  styles={{ paddingY: 12, background: "muted" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Stay ahead of the curve"` | No | Section heading displayed above the subheading |
| `subheading` | `string` | `"Get curated system update insights..."` | No | Supporting description line. Pass `""` to hide |
| `buttonLabel` | `string` | `"Subscribe"` | No | Label text for the submit button |
| `placeholderText` | `string` | `"Enter your email address"` | No | Placeholder copy inside the email input field |
| `styles` | `object` | `{ paddingY: 12, background: "muted" }` | No | Token-based style overrides (see Styles) |

> **Note:** The input and button are rendered in a display-only state (`disabled`). Wire up form submission logic in the parent component or page layer.

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `background` | `string` | `"muted"` | `"surface"`, `"muted"`, `"navy"` | Outer section background token |
| `paddingY` | `number` | `12` | `8`, `12`, `16`, `20` | Vertical section padding scale |
| `headingColor` | `string` | `"text-ink"` | Any text color token | Color applied to the heading |
| `headingSize` | `string` | `"text-2xl"` | Any text size token | Font size of the heading |
| `headingWeight` | `string` | `"font-bold"` | Any font weight token | Font weight of the heading |
| `subheadingColor` | `string` | `"text-ink-muted"` | Any text color token | Color applied to the subheading |
| `subheadingSize` | `string` | `"text-sm"` | Any text size token | Font size of the subheading |

## JSON example

```json
{
  "id": "newsletter-1",
  "type": "newsletter",
  "variant": "newsletter-signup",
  "props": {
    "heading": "Stay ahead of the curve",
    "subheading": "Get curated system update insights, design token workflows, and product updates monthly.",
    "buttonLabel": "Subscribe",
    "placeholderText": "Enter your email address"
  },
  "styles": {
    "paddingY": 12,
    "background": "muted"
  }
}
```