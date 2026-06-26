# Grid Simple

A clean, responsive team grid that showcases members with their profile photo, name, and role. Ideal for About Us, Leadership, or Meet the Team sections.

## When to use

- About Us pages
- Meet the Team sections
- Leadership showcases
- Startup landing pages

## Usage

```jsx
import GridSimple from "@/catalog/team/GridSimple";

<GridSimple
  heading="Meet our team"
  subheading="The people building great products every day."
  members={[
    {
      name: "Jane Doe",
      role: "CEO",
      avatar: "/images/team/jane.jpg",
    },
    {
      name: "John Smith",
      role: "CTO",
      avatar: "/images/team/john.jpg",
    },
    {
      name: "Emily Chen",
      role: "Product Designer",
      avatar: "/images/team/emily.jpg",
    },
    {
      name: "Alex Brown",
      role: "Software Engineer",
      avatar: "/images/team/alex.jpg",
    },
  ]}
  styles={{ paddingY: 8, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Meet our team"` | No | Optional section heading |
| `subheading` | `string` | `"The people behind our success."` | No | Optional supporting text |
| `members` | `Array<{ name: string, role: string, avatar: string, bio?: string, links?: Array<{ type: string, url: string }> }>` | Sample members array | No | Team members displayed in the grid |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Style tokens controlling spacing and colors |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "team-grid-simple",
  "type": "team",
  "variant": "grid-simple",
  "props": {
    "heading": "Meet our team",
    "subheading": "The people behind our success.",
    "members": [
      {
        "name": "Jane Doe",
        "role": "CEO",
        "avatar": "/images/team/jane.jpg"
      },
      {
        "name": "John Smith",
        "role": "CTO",
        "avatar": "/images/team/john.jpg"
      },
      {
        "name": "Emily Chen",
        "role": "Product Designer",
        "avatar": "/images/team/emily.jpg"
      },
      {
        "name": "Alex Brown",
        "role": "Software Engineer",
        "avatar": "/images/team/alex.jpg"
      }
    ]
  },
  "styles": {
    "paddingY": 8,
    "background": "surface"
  }
}
```