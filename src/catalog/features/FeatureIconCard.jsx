import * as LucideIcons from "lucide-react";

export default function FeatureIconCard({
  icon,
  title,
  description,
  accent,
  highlight = false,
  tag = null,
  iconPixelSize = 18,
  iconContainerClass = "h-10 w-10 rounded-lg bg-[#fdecea]",
  cardClass = "",
  titleClass = "text-base font-semibold text-gray-900",
  descClass = "text-sm text-gray-500",
  className = "",
}) {
  const Icon = LucideIcons[icon] ?? LucideIcons.Star;

  const resolvedCard = highlight
    ? `${accent.tagBg} border ${accent.border}`
    : cardClass;

  return (
    <div className={`flex flex-col ${resolvedCard} ${className}`}>
      {tag && (
        <span className={`mb-3 inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-medium ${accent.tagBg} ${accent.tagText}`}>
          {tag}
        </span>
      )}
      <div className={`mb-4 flex items-center justify-center ${iconContainerClass}`}>
        <Icon size={iconPixelSize} className={accent.iconText} />
      </div>
      <p className={titleClass}>
        {title}
      </p>
      <p className={`mt-1.5 ${descClass}`}>
        {description}
      </p>
    </div>
  );
}