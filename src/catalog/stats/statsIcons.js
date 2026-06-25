import { Headphones, ShieldCheck, Star, Users } from "lucide-react";

const ICON_MAP = {
  users: Users,
  uptime: ShieldCheck,
  rating: Star,
  support: Headphones,
};

export function resolveStatIcon(name) {
  if (!name) return null;
  return ICON_MAP[name.toLowerCase()] ?? null;
}
