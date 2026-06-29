# Split With Image

A two-column split section with a text block on one side and an image panel on the other. Supports left or right image positioning. Ideal for feature highlights, product showcases, and about sections.

## When to use

- Hero alternatives with a supporting visual
- Feature detail sections pairing copy with a screenshot or photo
- "About" or "How it works" blocks where an image adds context

## Usage

```jsx
import SplitWithImage from "@/catalog/split/SplitWithImage";

<SplitWithImage
  heading="Designed for modern software teams"
  subheading="Deploy fast with a clean interface that translates component design states instantly into code properties."
  primaryAction={{ label: "Get started", href: "#" }}
  imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  styles={{ paddingY: 16, background: "surface", imagePosition: "right" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Designed for modern software teams"` | No | Main headline text |
| `subheading` | `string` | `"Deploy fast with a clean interface..."` | No | Supporting copy below the heading. Pass `""` to hide |
| `primaryAction` | `{ label: string, href: string }` | `{ label: "Get started", href: "#" }` | No | CTA link button. Omit or leave `label` empty to hide |
| `imageUrl` | `string` | Unsplash placeholder URL | No | URL of the image displayed in the right or left panel. Omit to hide the image column |
| `styles` | `object` | `{ paddingY: 16, background: "surface", imagePosition: "right" }` | No | Token-based style overrides (see Styles) |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |
| `paddingY` | `number` | `16` | `8`, `12`, `16`, `20` | Vertical section padding scale |
| `headingColor` | `string` | `"text-text"` | Any text color token | Color applied to the heading |
| `headingSize` | `string` | `"text-3xl"` | `"text-2xl"`, `"text-3xl"`, `"text-4xl"` | Font size of the heading |
| `headingWeight` | `string` | `"font-bold"` | Any font weight token | Font weight of the heading |
| `subheadingColor` | `string` | `"text-ink-muted"` | Any text color token | Color applied to the subheading |
| `subheadingSize` | `string` | `"text-base"` | Any text size token | Font size of the subheading |
| `imagePosition` | `string` | `"right"` | `"left"`, `"right"` | Which side the image panel appears on. Flips text column order accordingly |

## JSON example

```json
{
  "id": "split-1",
  "type": "split",
  "variant": "split-with-image",
  "props": {
    "heading": "Designed for modern software teams",
    "subheading": "Deploy fast with a clean interface that translates component design states instantly into code properties.",
    "primaryAction": { "label": "Get started", "href": "#" },
    "imageUrl": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  },
  "styles": {
    "paddingY": 16,
    "background": "surface",
    "imagePosition": "right"
  }
}
```