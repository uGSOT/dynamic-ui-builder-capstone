export const SAMPLE_TEAM_MEMBERS = [
  {
    name: "Sarah Anderson",
    role: "Chief Executive Officer",
    bio: "10+ years in product leadership and scaling teams",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    links: [
      { type: "twitter", url: "https://twitter.com" },
      { type: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Expert in cloud infrastructure and system design",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    links: [
      { type: "twitter", url: "https://twitter.com" },
      { type: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Jessica Martinez",
    role: "VP of Design",
    bio: "Award-winning designer focused on user experience",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    links: [],
  },
  {
    name: "David Kumar",
    role: "VP of Sales",
    bio: "Veteran sales leader with enterprise expertise",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    links: [],
  },
];

export const GRID_SIMPLE_DEFAULT_PROPS = {
  heading: "",
  subheading: "",
  members: SAMPLE_TEAM_MEMBERS,
};

export const GRID_WITH_BIO_DEFAULT_PROPS = {
  heading: "Meet our team",
  subheading: "The talented people behind our product",
  members: SAMPLE_TEAM_MEMBERS,
};

export const COMPACT_ROW_DEFAULT_PROPS = {
  heading: "Our Leadership",
  subheading: "Leading the charge to transform how teams build and collaborate",
  members: SAMPLE_TEAM_MEMBERS.concat(SAMPLE_TEAM_MEMBERS).slice(0, 6),
};
