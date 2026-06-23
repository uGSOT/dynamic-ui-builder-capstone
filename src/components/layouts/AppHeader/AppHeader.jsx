import { NavLink } from "react-router-dom";
import { Layers, LayoutGrid, Wrench } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home", icon: Layers, end: true },
  { to: "/gallery", label: "Gallery", icon: LayoutGrid },
  { to: "/builder", label: "Builder", icon: Wrench },
];

const baseNavClass =
  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all";
const activeClass = "bg-indigo-500/15 text-indigo-400";
const inactiveClass = "text-[#9898b0] hover:bg-[#1a1a24] hover:text-[#f1f1f5]";

export default function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-[#2a2a3a] bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500 group-hover:bg-indigo-400 transition-colors">
            <Layers size={15} className="text-white" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-[#f1f1f5]">
            UI Builder
          </span>
        </NavLink>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${baseNavClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              <Icon size={14} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}