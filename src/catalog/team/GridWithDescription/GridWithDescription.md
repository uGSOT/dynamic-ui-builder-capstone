# Grid With Bio

A responsive team grid that showcases members with their profile photo, name, role, biography, and optional social links. Perfect for About Us, Leadership, or Meet the Team pages where more context about each member is helpful.

## When to use

- About Us pages
- Leadership sections
- Meet the Team pages
- Company or startup websites

## Usage

```jsx
import GridWithBio from "@/catalog/team/GridWithBio";

<GridWithBio
  heading="Meet our leadership"
  subheading="Experienced professionals building the future together."
  members={[
    {
      name: "Jane Doe",
      role: "CEO",
      avatar: "/images/team/jane.jpg",
      bio: "Leads company vision and strategy with over 12 years of experience.",
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/janedoe" },
        { type: "twitter", url: "https://twitter.com/janedoe" }
      ]
    },
    {
      name: "John Smith",
      role: "CTO",
      avatar: "/images/team/john.jpg",
      bio: "Architects scalable systems and leads the engineering team.",
      links: [
        { type: "github", url: "https://github.com/johnsmith" }
      ]
    }
  ]}
  styles={{ paddingY: 8, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Meet our leadership"` | No | Section heading |
| `subheading` | `string` | `"Experienced professionals building the future together."` | No | Supporting text below the heading |
| `members` | `Array<{ name: string, role: string, avatar: string, bio?: string, links?: Array<{ type: string, url: string }> }>` | Sample members array | No | Team members with biography and optional social links |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Style tokens controlling spacing and colors |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "team-grid-with-bio",
  "type": "team",
  "variant": "grid-with-bio",
  "props": {
    "heading": "Meet our leadership",
    "subheading": "Experienced professionals building the future together.",
    "members": [
      {
        "name": "Jane Doe",
        "role": "CEO",
        "avatar": "/images/team/jane.jpg",
        "bio": "Leads company vision and strategy with over 12 years of experience.",
        "links": [
          {
            "type": "linkedin",
            "url": "https://linkedin.com/in/janedoe"
          }
        ]
      },
      {
        "name": "John Smith",
        "role": "CTO",
        "avatar": "/images/team/john.jpg",
        "bio": "Architects scalable systems and leads the engineering team.",
        "links": [
          {
            "type": "github",
            "url": "https://github.com/johnsmith"
          }
        ]
      }
    ]
  },
  "styles": {
    "paddingY": 8,
    "background": "surface"
  }
}
```