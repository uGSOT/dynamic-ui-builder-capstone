import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Copy,
  Eye,
  LayoutGrid,
  Layers,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Explore the Gallery",
    description:
      "Browse 37 component variants across 12 section types. Swap layouts, tweak styles, and edit content in real time.",
    icon: LayoutGrid,
  },
  {
    step: "02",
    title: "Copy component JSON",
    description:
      "Every change syncs to a live JSON panel. One click copies a builder-ready section you can paste anywhere.",
    icon: Copy,
  },
  {
    step: "03",
    title: "Assemble in the Builder",
    description:
      "Paste sections into your site config, preview the full page, and export when you're ready to ship.",
    icon: Wrench,
  },
];

const EXAMPLE_SITES = [
  {
    id: "saas",
    label: "SaaS Landing",
    tagline: "B2B platform homepage",
    description:
      "Navbar, split hero, logo cloud, feature grid, pricing tiers, testimonials, FAQ, and CTA — a complete SaaS story.",
    gradient: "from-blue-600/20 via-brand/10 to-violet-600/20",
    accent: "bg-blue-500",
    components: ["Hero", "Features", "Pricing", "FAQ"],
  },
  {
    id: "devtools",
    label: "Dev Tool Launch",
    tagline: "Developer product site",
    description:
      "Transparent navbar, social-proof hero, bento features, stats bar, and two-tier pricing for technical audiences.",
    gradient: "from-emerald-600/20 via-brand/10 to-cyan-600/20",
    accent: "bg-emerald-500",
    components: ["Stats", "Features", "Testimonials", "CTA"],
  },
  {
    id: "ai-waitlist",
    label: "AI Product Waitlist",
    tagline: "Pre-launch capture page",
    description:
      "Centered hero, alternating features, carousel testimonials, newsletter CTA, and minimal footer for early access.",
    gradient: "from-violet-600/20 via-brand/10 to-fuchsia-600/20",
    accent: "bg-violet-500",
    components: ["Hero", "Features", "CTA", "Footer"],
  },
];

const FEATURES = [
  {
    icon: Zap,
    title: "Instant preview",
    description: "Changes reflect in under 100ms. No deploy step, no waiting.",
  },
  {
    icon: Layers,
    title: "37 curated variants",
    description: "Every section type startups need — hero through footer.",
  },
  {
    icon: Code2,
    title: "JSON as source of truth",
    description: "Declarative configs you own. Import, export, version in git.",
  },
  {
    icon: Eye,
    title: "Responsive by design",
    description: "Preview at mobile, tablet, and desktop breakpoints.",
  },
];

const STATS = [
  { value: "12", label: "Component types" },
  { value: "37", label: "Layout variants" },
  { value: "3", label: "Starter templates" },
  { value: "0", label: "Backend required" },
];

function MiniSitePreview({ site }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${site.gradient} p-4`}
    >
      <div className="rounded-lg border border-white/10 bg-navy-elevated/90 p-3 shadow-card backdrop-blur-sm">
        <div className="mb-3 flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded bg-white/15" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className={`mt-3 h-6 w-20 rounded ${site.accent} opacity-80`} />
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-8 rounded bg-white/8" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Announcement bar — uGSoT-style top banner */}
      <div className="bg-primary px-4 py-2.5 text-center text-sm font-medium text-ink-inverse">
        <span className="inline-flex items-center gap-2">
          <Sparkles size={14} className="shrink-0" />
          Dynamic UI Builder Studio — design startup sites with JSON, no backend
          required
        </span>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary px-6 pb-24 pt-16 text-ink-inverse sm:pb-32 sm:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        >
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-light/30 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-dark bg-navy-muted/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-light">
            <Layers size={12} />
            JSON-powered site builder
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Build startup websites{" "}
            <span className="bg-gradient-to-r from-brand-light to-brand bg-clip-text text-transparent">
              in minutes
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-inverse-muted sm:text-xl">
            Play with components in the gallery, copy ready-made JSON, and
            assemble full landing pages in the builder — all in your browser.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-ink-inverse shadow-glow transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              <LayoutGrid size={18} />
              Open Component Gallery
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/builder"
              className="inline-flex items-center gap-2 rounded-lg border border-border-dark bg-navy-muted/50 px-6 py-3.5 text-sm font-semibold text-ink-inverse transition-all hover:border-primary/50 hover:bg-navy-muted"
            >
              <Wrench size={18} />
              Launch Website Builder
            </Link>
          </div>

          <p className="mt-6 text-sm text-ink-inverse-muted">
            No accounts · No deploy · Works offline after first load
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-muted px-6 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-extrabold text-primary sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-sm font-medium text-ink-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Gallery → JSON → Builder
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              A connected workflow so you never write component JSON from scratch.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {STEPS.map(({ step, title, description, icon: Icon }) => (
              <div
                key={step}
                className="group relative rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Step {step}
                </span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-muted text-primary transition-colors group-hover:bg-primary group-hover:text-ink-inverse">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example sites */}
      <section className="bg-secondary px-6 py-20 text-ink-inverse sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Starter templates included
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-inverse-muted">
              Three ready-made configs for common startup scenarios — load in the
              builder and customize from there.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {EXAMPLE_SITES.map((site) => (
              <article
                key={site.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border-dark bg-navy-elevated transition-transform hover:-translate-y-1"
              >
                <MiniSitePreview site={site} />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-light">
                    {site.tagline}
                  </p>
                  <h3 className="mt-1 text-lg font-bold">{site.label}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-inverse-muted">
                    {site.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {site.components.map((c) => (
                      <span
                        key={c}
                        className="rounded-md bg-navy-muted px-2 py-0.5 text-xs font-medium text-ink-inverse-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/builder"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-light transition-colors hover:text-ink-inverse"
            >
              Load a template in the Builder
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Built for speed and consistency
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              Every site shares the same design tokens and component API — output
              is predictable and on-brand.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-text">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-ink-inverse sm:px-16 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            aria-hidden
          >
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to design your startup site?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-inverse/90">
              Start in the gallery to explore components, or jump straight into
              the builder with a starter template.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-lg bg-ink-inverse px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-muted"
              >
                <LayoutGrid size={18} />
                Explore Gallery
              </Link>
              <Link
                to="/builder"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-ink-inverse/30 px-6 py-3.5 text-sm font-semibold text-ink-inverse transition-colors hover:border-ink-inverse hover:bg-ink-inverse/10"
              >
                <Wrench size={18} />
                Open Builder
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
