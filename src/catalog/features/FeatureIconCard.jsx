import * as LucideIcons from "lucide-react";

export default function FeatureIconCard({
  icon,
  title,
  description,
  accent,
  className = "",
  highlight = false,
  tag = null,
  iconSize = 20,
  cardClass = "",
  cardStyle = {},
  titleClass = "text-base font-semibold text-gray-900",
  titleStyle = {},
  descClass = "text-sm text-gray-500",
  descStyle = {},
}) {
  const Icon = LucideIcons[icon] ?? LucideIcons.Star;

  const resolvedCardBg = highlight
    ? `${accent.iconBg} border ${accent.border}`
    : cardClass;

  return (
    <div
      className={`rounded-2xl p-6 flex flex-col ${resolvedCardBg} ${className}`}
      style={cardStyle}
    >
      {tag && (
        <span className={`mb-3 inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-medium ${accent.tagBg} ${accent.tagText}`}>
          {tag}
        </span>
      )}
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${accent.iconBg}`}>
        <Icon size={iconSize} className={accent.iconText} />
      </div>
      <p className={titleClass} style={titleStyle}>
        {title}
      </p>
      <p className={`mt-1.5 ${descClass}`} style={descStyle}>
        {description}
      </p>
    </div>
  );
}