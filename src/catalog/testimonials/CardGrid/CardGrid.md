# CardGrid Component

A reusable testimonial card grid component built with **React** and **Tailwind CSS**.

The component displays a section containing:

- Optional eyebrow text
- Heading
- Subheading
- Responsive testimonial cards
- Avatar
- Company logo (optional)

---

## Import

```jsx
import CardGrid from "./CardGrid";
```

---

# Basic Usage

```jsx
<CardGrid />
```

---

# Custom Usage

```jsx
<CardGrid
  heading="What Our Customers Say"
  subheading="Thousands of businesses trust our platform."
  headingColor="#1E293B"
  accentColor="#2563EB"
  testimonials={[
    {
      quote: "Fantastic product!",
      name: "John Doe",
      role: "Frontend Developer",
      avatar: "/images/john.jpg",
      company: "Acme Inc",
      companyLogo: "/logos/acme.svg",
    },
  ]}
/>
```

---

# Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| eyebrow | string | "Testimonials" | Small label shown above heading |
| eyebrowColor | string | brand | Token name or hex color |
| eyebrowWeight | string | bold | normal, medium, semibold, bold |
| heading | string | Trusted by startup teams | Main heading |
| headingColor | string | ink | Token or hex color |
| headingWeight | string | bold | Font weight |
| headingSize | string | 3xl | xl,2xl,3xl,4xl |
| subheading | string | Default text | Supporting text |
| subheadingColor | string | ink-muted | Token or hex |
| subheadingWeight | string | normal | Font weight |
| quoteColor | string | ink | Quote text color |
| quoteWeight | string | normal | Font weight |
| quoteSize | string | sm | sm, base, lg |
| nameColor | string | ink | Name color |
| nameWeight | string | semibold | Font weight |
| roleColor | string | ink-muted | Role color |
| roleWeight | string | normal | Font weight |
| accentColor | string | brand | Color of quotation mark |
| testimonials | Array | Default testimonials | Array of testimonial objects |

---

# Testimonial Object

```ts
{
    quote: string;
    name: string;
    role: string;
    avatar: string;
    company?: string;
    companyLogo?: string;
}
```

Example

```jsx
const testimonials = [
  {
    quote: "Amazing product!",
    name: "John Doe",
    role: "Software Engineer",
    avatar: "/avatars/john.jpg",
    company: "Acme",
    companyLogo: "/logos/acme.svg",
  },
];
```

---

# Styles Configuration

The component accepts a `styles` object for layout customization.

```jsx
<CardGrid
  styles={{
    paddingY: 20,
    sectionBackground: "surface-muted",
    headingAlign: "left",
    headingTag: "h3",
    cardBackground: "surface",
    cardBorderColor: "brand",
    cardRadius: "2xl",
    avatarSize: "lg",
    logoHeight: "lg",
    columns: 4,
  }}
/>
```

---

## Style Properties

| Property | Allowed Values | Default |
|----------|----------------|---------|
| paddingY | 8,10,12,16,20,24 | 16 |
| sectionBackground | surface, surface-muted, surface-subtle, navy, navy-elevated, navy-muted | surface |
| headingAlign | center, left | center |
| headingTag | h2, h3 | h2 |
| cardBackground | surface, surface-muted, surface-subtle, navy, navy-elevated, navy-muted | surface |
| cardBorderColor | border, border-dark, brand, none | border |
| cardRadius | none, sm, md, lg, xl, 2xl | xl |
| avatarSize | sm, md, lg | md |
| logoHeight | sm, md, lg | md |
| columns | 2, 3, 4 | 3 |

---

# Supported Color Tokens

The component resolves design tokens automatically.

| Token | CSS Variable |
|--------|--------------|
| ink | --color-ink |
| ink-muted | --color-ink-muted |
| ink-subtle | --color-ink-subtle |
| ink-inverse | --color-ink-inverse |
| ink-inverse-muted | --color-ink-inverse-muted |
| brand | --color-brand |
| brand-dark | --color-brand-dark |
| brand-light | --color-brand-light |

You can also provide any valid CSS color:

```jsx
headingColor="#2563EB"

quoteColor="rgb(0,0,0)"

accentColor="#FF5733"
```

---

# Responsive Layout

The component automatically renders:

- 1 column on mobile
- Configurable columns on medium screens and above

Example:

```jsx
styles={{
    columns: 4
}}
```

produces

```
grid-cols-1 md:grid-cols-4
```

---

# Features

- Responsive layout
- Dynamic testimonials
- Configurable heading
- Configurable typography
- Optional eyebrow
- Optional company logos
- Theme token support
- Hex/RGB color support
- Configurable spacing
- Configurable card radius
- Configurable avatar size
- Configurable logo size

---

# Default Values

The component exports:

```jsx
defaultProps
defaultStyles
propSchema
```

which can be imported if required.

```jsx
import {
    defaultProps,
    defaultStyles,
    propSchema
} from "./CardGrid";
```

---

# Example

```jsx
<CardGrid
    heading="Customer Stories"
    subheading="See why teams love our product."
    accentColor="#3B82F6"
    styles={{
        columns: 3,
        headingAlign: "center",
        cardRadius: "xl",
        paddingY: 24,
    }}
/>
```

---

# Accessibility

- Uses semantic `<section>` element.
- Supports `h2` or `h3` headings.
- Avatar images include `alt` text.
- Company logos include `alt` text.
- Responsive on all screen sizes.

---

# Exports

```jsx
export default CardGrid;

export {
    defaultProps,
    defaultStyles,
    propSchema,
};
```