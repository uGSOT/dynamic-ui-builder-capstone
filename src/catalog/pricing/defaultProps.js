export const DEFAULT_PLANS = [
  {
    name: "Basic Plan",
    price: "$9",
    period: "/mo",
    description: "Essential tools for freelancers and small projects.",
    features: [
      "Up to 3 active projects",
      "Basic analytics dashboard",
      "Community support access",
      "10GB secure cloud storage",
    ],
    cta: { label: "Get Started", href: "#" },
    highlighted: false,
  },
  {
    name: "Pro Plan",
    price: "$29",
    period: "/mo",
    description: "Advanced capabilities for growing product teams.",
    features: [
      "Unlimited active projects",
      "Real-time team collaboration",
      "Advanced usage reports",
      "100GB secure cloud storage",
      "24/7 dedicated email support",
    ],
    cta: { label: "Try Pro Free", href: "#" },
    highlighted: true,
  },
  {
    name: "Enterprise Plan",
    price: "$99",
    period: "/mo",
    description: "Custom security and compliance for large organizations.",
    features: [
      "Everything in Pro Plan",
      "Custom domain support",
      "Dedicated account manager",
      "SAML SSO & identity management",
      "Custom SLA & onboarding assistance",
    ],
    cta: { label: "Contact Sales", href: "#" },
    highlighted: false,
  },
];

export const DEFAULT_TWO_TIER_PLANS = [
  {
    name: "Standard Plan",
    price: "$19",
    period: "/mo",
    description: "Great features for startups and growing businesses.",
    features: [
      "Up to 10 active projects",
      "Advanced analytics dashboard",
      "Priority email support",
      "50GB secure cloud storage",
      "API access",
    ],
    cta: { label: "Get Started", href: "#" },
    highlighted: false,
  },
  {
    name: "Growth Plan",
    price: "$49",
    period: "/mo",
    description: "Perfect for scaling organizations needing advanced security.",
    features: [
      "Unlimited active projects",
      "Real-time team collaboration",
      "Custom domain support",
      "200GB secure cloud storage",
      "24/7 priority support",
      "Dedicated success coach",
    ],
    cta: { label: "Start Free Trial", href: "#" },
    highlighted: true,
  },
];

export const DEFAULT_SINGLE_PLAN = [
  {
    name: "Pro Professional",
    price: "$29",
    period: "/mo",
    description: "All-in-one professional package containing all capabilities.",
    features: [
      "Unlimited projects",
      "Full analytics suite",
      "Priority email & chat support",
      "100GB secure cloud storage",
      "Team seats sharing",
      "Custom integrations and webhooks",
      "Automated backups & monitoring",
      "Dedicated staging environment",
    ],
    cta: { label: "Get Access Now", href: "#" },
    highlighted: true,
  },
];

export const DEFAULT_PRICING_PROPS = {
  heading: "Simple, transparent pricing",
  subheading: "Choose the perfect plan for your team. All plans include a 14-day free trial.",
  plans: DEFAULT_PLANS,
  billingToggle: {
    enabled: true,
    annualLabel: "Annually (Save 20%)",
    monthlyLabel: "Monthly",
  },
};
