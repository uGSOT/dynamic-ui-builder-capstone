# Carousel Component

A responsive testimonial carousel built using React and Tailwind CSS.

Unlike CardGrid, this component displays only a configurable number of cards and allows users to navigate using previous/next controls or indicator dots.

---

## Import

```jsx
import Carousel from "./Carousel";
```

---

## Basic Usage

```jsx
<Carousel />
```

---

## Features

- Responsive testimonial carousel
- Configurable visible cards
- Previous / Next navigation
- Dot indicators
- Optional eyebrow
- Configurable heading
- Configurable typography
- Theme token support
- Hex/RGB color support
- Optional company logos
- Responsive layout

---

## Props

| Prop | Type | Description |
|------|------|-------------|
| eyebrow | string | Small heading above title |
| heading | string | Main heading |
| subheading | string | Supporting description |
| testimonials | Array | Testimonial data |
| accentColor | string | Quote icon color |
| headingColor | string | Heading color |
| quoteColor | string | Quote text color |
| nameColor | string | Name color |
| roleColor | string | Role color |

---

## Testimonial Object

```jsx
{
    quote: string,
    name: string,
    role: string,
    avatar: string,
    company: string,
    companyLogo: string
}
```

---

## Styles

```jsx
styles={{
    paddingY:16,
    sectionBackground:"surface-muted",
    headingAlign:"center",
    headingTag:"h2",
    cardBackground:"surface",
    cardBorderColor:"border",
    cardRadius:"xl",
    avatarSize:"md",
    logoHeight:"md",
    visibleCards:3,
    dotActiveColor:"brand",
    dotInactiveColor:"border"
}}
```

---

## Style Properties

| Property | Allowed Values |
|----------|----------------|
| paddingY | 8,10,12,16,20,24 |
| sectionBackground | surface, surface-muted, surface-subtle, navy, navy-elevated, navy-muted |
| headingAlign | left, center |
| headingTag | h2, h3 |
| cardBackground | surface, surface-muted, navy |
| cardBorderColor | border, border-dark, brand, none |
| cardRadius | none, sm, md, lg, xl, 2xl |
| avatarSize | sm, md, lg |
| logoHeight | sm, md, lg |
| visibleCards | 2,3,4 |
| dotActiveColor | brand, ink, ink-inverse |
| dotInactiveColor | border, border-dark, ink-subtle |

---

## Navigation

The carousel supports three navigation methods.

### Previous

Moves to the previous testimonial.

### Next

Moves to the next testimonial.

### Dot Indicators

Jump directly to a specific testimonial.

---

## Color Tokens

Supported tokens:

- ink
- ink-muted
- ink-subtle
- ink-inverse
- ink-inverse-muted
- brand
- brand-dark
- brand-light

You may also provide:

```jsx
headingColor="#2563EB"

quoteColor="rgb(0,0,0)"
```

---

## Example

```jsx
<Carousel
    heading="Customer Stories"
    accentColor="#2563EB"
    testimonials={testimonials}
    styles={{
        visibleCards:4,
        headingAlign:"left",
        dotActiveColor:"ink",
        cardRadius:"2xl"
    }}
/>
```

---

## Accessibility

- Semantic `<section>`
- Supports h2/h3 headings
- Accessible images with alt text
- Keyboard-accessible buttons
- Responsive layout

---

## Exports

```jsx
export default Carousel;

export {
    defaultProps,
    defaultStyles,
    propSchema
};
```