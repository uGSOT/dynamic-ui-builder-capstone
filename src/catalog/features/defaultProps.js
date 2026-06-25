// ─── Shared sample features ───────────────────────────────────────────────────
// Used as default data across all three variants.
// Each variant picks what it needs.

export const SAMPLE_FEATURES = [
  {
    id: "f1",
    icon: "Zap",
    tag: "Performance",
    title: "Blazing fast by default",
    description:
      "Optimised for performance from day one. No bloat, no config, no compromise on speed.",
    bullets: ["Zero cold starts", "Edge-optimised delivery", "Automatic rollbacks"],
    image: null,
  },
  {
    id: "f2",
    icon: "Shield",
    tag: "Security",
    title: "Secure by default",
    description:
      "End-to-end encryption, role-based access control, and audit logs included on every plan.",
    bullets: ["SOC 2 Type II certified", "SAML & OIDC SSO", "Fine-grained permissions"],
    image: null,
  },
  {
    id: "f3",
    icon: "BarChart2",
    tag: "Observability",
    title: "See everything that matters",
    description:
      "Real-time traces, error tracking, and custom dashboards out of the box.",
    bullets: ["P99 latency tracking", "Custom alert rules", "One-click log tailing"],
    image: null,
  },
  {
    id: "f4",
    icon: "Plug",
    tag: "Integrations",
    title: "100+ integrations",
    description:
      "Connect to every tool your team already uses. One-click setup, no engineering required.",
    bullets: [],
    image: null,
  },
  {
    id: "f5",
    icon: "Globe",
    tag: "Infrastructure",
    title: "Global CDN",
    description:
      "Deploy to 30+ regions instantly. Sub-100ms latency for users anywhere on Earth.",
    bullets: [],
    image: null,
  },
  {
    id: "f6",
    icon: "Layers",
    tag: "Platform",
    title: "Composable APIs",
    description:
      "Mix and match building blocks to construct exactly the product your users need.",
    bullets: [],
    image: null,
  },
];

// ─── Bento-specific extras ────────────────────────────────────────────────────
// Bento needs slot + highlight fields on each feature.

export const SAMPLE_BENTO_FEATURES = [
  { ...SAMPLE_FEATURES[0], slot: "hero",   highlight: true  },
  { ...SAMPLE_FEATURES[1], slot: "medium", highlight: false },
  { ...SAMPLE_FEATURES[2], slot: "medium", highlight: false },
  { ...SAMPLE_FEATURES[3], slot: "small",  highlight: false },
  { ...SAMPLE_FEATURES[4], slot: "small",  highlight: false },
  { ...SAMPLE_FEATURES[5], slot: "small",  highlight: false },
  {
    id: "f7",
    icon: "RefreshCw",
    tag: "Reliability",
    title: "Auto rollbacks",
    description: "Bad deploy? Rolled back in seconds.",
    bullets: [],
    image: null,
    slot: "small",
    highlight: false,
  },
];
