export default function NavbarDemoHero({
  activeLabel = "Home",
  overlay = false,
  background = "muted",
}) {
  const paddingTop = overlay ? "pt-24 sm:pt-28" : "";
  const solidBg = background === "white" ? "bg-surface" : "bg-surface-muted";

  if (overlay) {
    return (
      <section
        className={`relative flex min-h-[220px] items-center justify-center overflow-hidden px-6 py-16 sm:min-h-[240px] ${paddingTop}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-muted via-surface to-surface"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-brand-light/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Section
          </p>
          <h1 className="mt-1.5 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {activeLabel}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`flex min-h-[200px] items-center justify-center px-6 py-16 sm:min-h-[220px] ${solidBg}`}
    >
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-muted">
          Section
        </p>
        <h1 className="mt-1.5 text-sm font-semibold tracking-tight text-ink sm:text-md">
          {activeLabel}
        </h1>
      </div>
    </section>
  );
}
