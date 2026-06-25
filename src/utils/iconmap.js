import * as LucideIcons from "lucide-react";

export function DynamicIcon({ name, className, size = 20 }) {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) return <LucideIcons.HelpCircle className={className} size={size} />;
  return <IconComponent className={className} size={size} />;
}