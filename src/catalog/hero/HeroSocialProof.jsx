export default function HeroSocialProof({ socialProof, inverted = false }) {
  if (!socialProof?.label && !socialProof?.avatars?.length) return null;

  const labelClass = inverted ? "text-ink-inverse-muted" : "text-ink-muted";

  return (
    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      {socialProof.avatars?.length > 0 && (
        <div className="flex -space-x-2">
          {socialProof.avatars.map((avatar, index) => (
            <span
              key={`${avatar.initials}-${index}`}
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface text-xs font-semibold text-ink-inverse ${avatar.color ?? "bg-brand"}`}
              title={avatar.alt ?? avatar.initials}
            >
              {avatar.initials}
            </span>
          ))}
        </div>
      )}
      {socialProof.label && (
        <p className={`text-sm font-medium ${labelClass}`}>
          {socialProof.label}
        </p>
      )}
    </div>
  );
}
