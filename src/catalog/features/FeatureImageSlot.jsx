import * as LucideIcons from "lucide-react";

export default function FeatureImageSlot({
  src,
  alt,
  icon,
  accent,
  className = "",
}) {
  const Icon = LucideIcons[icon] ?? LucideIcons.Star;

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-2xl object-cover shadow-md ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full rounded-2xl flex items-center justify-center border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm ${className}`}
    >
      <Icon size={56} className={`${accent.iconText} opacity-30`} />
    </div>
  );
}
