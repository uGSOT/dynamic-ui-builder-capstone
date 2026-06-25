import * as LucideIcons from "lucide-react";

export default function FeatureIconCard({
  icon,
  title,
  description,
  accent,
  inverted = false,
  className = "",
  highlight = false,
  tag = null,
  iconSize = 20,
}) {
  const Icon = LucideIcons[icon] ?? LucideIcons.Star;

  const cardBg = highlight
    ? `${accent.iconBg} border ${accent.border}`
    : inverted
    ? "bg-gray-800 border border-gray-700"
    : "bg-white border border-gray-100 shadow-sm";

  const titleColor  = inverted || highlight ? "text-gray-900" : "text-gray-900";
  const descColor   = inverted || highlight ? "text-gray-600" : "text-gray-500";

  return (
    <div className={`rounded-2xl p-6 flex flex-col ${cardBg} ${className}`}>
      {/* Tag */}
      {tag && (
        <span
          className={`mb-3 inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-medium ${accent.tagBg} ${accent.tagText}`}
        >
          {tag}
        </span>
      )}

      {/* Icon wrapper */}
      <div
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${accent.iconBg}`}
      >
        <Icon size={iconSize} className={accent.iconText} />
      </div>

      {/* Text */}
      <p className={`text-base font-semibold ${titleColor}`}>{title}</p>
      <p className={`mt-1.5 text-sm leading-relaxed ${descColor}`}>{description}</p>
    </div>
  );
}
