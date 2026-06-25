# FeaturedSingle Component

A reusable testimonial component that displays a single featured customer quote with author information and company branding.

---

## Import

```jsx
import FeaturedSingle from "./FeaturedSingle";
```

---

## Basic Usage

```jsx
<FeaturedSingle />
```

---

## Custom Usage

```jsx
<FeaturedSingle
    quote="This platform transformed our workflow."
    name="John Doe"
    role="Founder"
    avatar="/avatars/john.jpg"
    company="Acme"
    companyLogo="/logos/acme.svg"
    accentColor="#2563EB"
/>
```

---

# Features

- Featured testimonial layout
- Decorative quote icon
- Configurable typography
- Configurable colors
- Responsive layout
- Optional company logo
- Theme token support
- Hex/RGB color support
- Configurable spacing
- Configurable alignment

---

# Props

| Prop | Type | Description |
|------|------|-------------|
| quote | string | Testimonial text |
| quoteColor | string | Quote color |
| quoteWeight | string | Quote font weight |
| quoteSize | string | Quote font size |
| name | string | Author name |
| nameColor | string | Author color |
| nameWeight | string | Author font weight |
| role | string | Author role |
| roleColor | string | Role color |
| roleWeight | string | Role font weight |
| avatar | string | Avatar image path |
| company | string | Company name |
| companyLogo | string \| null | Company logo |
| accentColor | string | Decorative quote color |

---

# Styles

```jsx
styles={{
    paddingY:20,
    sectionBackground:"surface-muted",
    align:"center",
    maxWidth:"lg",
    avatarSize:"md",
    logoHeight:"md"
}}
```

---

# Style Properties

| Property | Allowed Values |
|----------|----------------|
| paddingY | 8,10,12,16,20,24 |
| sectionBackground | surface, surface-muted, surface-subtle, navy, navy-elevated, navy-muted |
| align | center, left |
| maxWidth | sm, md, lg, xl |
| avatarSize | sm, md, lg |
| logoHeight | sm, md, lg |

---

# Color Tokens

Supported tokens:

- ink
- ink-muted
- ink-subtle
- ink-inverse
- ink-inverse-muted
- brand
- brand-dark
- brand-light

You may also pass:

```jsx
quoteColor="#2563EB"

accentColor="rgb(0,0,0)"
```

---

# Example

```jsx
<FeaturedSingle
    quote="The best investment we've made."
    name="Jessica Park"
    role="Head of Operations"
    accentColor="#3B82F6"
    styles={{
        align:"left",
        maxWidth:"xl",
        avatarSize:"lg",
        logoHeight:"lg"
    }}
/>
```

---

# Accessibility

- Uses semantic `<section>`
- Uses `<blockquote>` for testimonial content
- Avatar includes descriptive alt text
- Company logo includes descriptive alt text
- Responsive layout

---

# Exports

```jsx
export default FeaturedSingle;

export {
    defaultProps,
    defaultStyles,
    propSchema
};
```