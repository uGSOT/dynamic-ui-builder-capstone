# Compact Row

A compact team layout that displays members in a single responsive row with circular avatars, names, and roles. Ideal for showcasing small teams or contributors without taking up much vertical space.

## When to use

- Meet the Team sections
- Contributors or advisors
- Startup landing pages
- Company footer or About page

## Usage

```jsx
import CompactRow from "@/catalog/team/CompactRow";

<CompactRow
  heading="Our Team"
  subheading="Meet the people behind our success."
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
      role: "Designer",
      avatar: "/images/team/emily.jpg",
    },
    {
      name: "Alex Brown",
      role: "Engineer",
      avatar: "/images/team/alex.jpg",
    }
  ]}
  styles={{ paddingY: 8, background: "surface" }}
/>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `heading` | `string` | `"Our Team"` | No | Optional section heading |
| `subheading` | `string` | `"Meet the people behind our success."` | No | Supporting text below the heading |
| `members` | `Array<{ name: string, role: string, avatar: string, bio?: string, links?: Array<{ type: string, url: string }> }>` | Sample members array | No | Team members displayed in a compact row (6 members recommended) |
| `styles` | `object` | `{ paddingY: 8, background: "surface" }` | No | Style tokens controlling spacing and colors |

## Styles

| Key | Type | Default | Possible values | Description |
|-----|------|---------|-----------------|-------------|
| `paddingY` | `number` | `8` | `4`, `6`, `8`, `10` | Vertical section padding |
| `background` | `string` | `"surface"` | `"surface"`, `"muted"`, `"navy"` | Section background token |

## JSON example

```json
{
  "id": "team-compact-row",
  "type": "team",
  "variant": "compact-row",
  "props": {
    "heading": "Our Team",
    "subheading": "Meet the people behind our success.",
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
        "role": "Designer",
        "avatar": "/images/team/emily.jpg"
      },
      {
        "name": "Alex Brown",
        "role": "Engineer",
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