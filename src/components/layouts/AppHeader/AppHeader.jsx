// src/components/layout/AppHeader.jsx
import React from 'react';
import { NavLink } from "react-router-dom";
import { Layers, LayoutGrid, Wrench } from "lucide-react";

// --- 1. ARCHITECTURAL STYLE CONFIGURATION SCHEMA (PROP DATA) ---
const defaultThemeConfig = {
  header: {
    wrapperClass: "fixed top-0 left-0 right-0 z-50 h-14 border-b border-gray-200 bg-white/80 backdrop-blur-md",
    containerClass: "mx-auto flex h-full max-w-7xl items-center justify-between px-6"
  },
  branding: {
    groupAnchorClass: "flex items-center gap-4 select-none group",
    logoFrameClass: "h-10 sm:h-11 flex items-center",
    logoImageClass: "h-full w-auto object-contain bg-transparent block group-hover:opacity-90 transition-opacity",
    dividerClass: "h-5 w-px bg-gray-200 hidden sm:block",
    uiBuilderWrapperClass: "flex items-center gap-2",
    iconBoxClass: "flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500 group-hover:bg-indigo-600 transition-colors",
    iconClass: "text-white",
    titleClass: "text-sm font-semibold tracking-tight text-gray-900"
  },
  navigation: {
    navWrapperClass: "flex items-center gap-1",
    baseNavClass: "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all",
    activeClass: "bg-indigo-100 text-indigo-600",
    inactiveClass: "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
  }
};

// --- 2. ARCHITECTURAL CONTENT SCHEMA (PROP DATA) ---
const defaultContentConfig = {
  logo: {
    imgSrc: "/assets/logos/ugsot.png",
    altText: "upGrad School of Technology"
  },
  uiBuilderTitle: "UI Builder",
  navLinks: [
    { to: "/", label: "Home", icon: Layers, end: true },
    { to: "/gallery", label: "Gallery", icon: LayoutGrid },
    { to: "/builder", label: "Builder", icon: Wrench }
  ]
};

/* --- MAIN DYNAMIC SYSTEM APP HEADER --- */
export default function AppHeader({
  styles = defaultThemeConfig,
  content = defaultContentConfig
}) {
  return (
    <header className={styles.header.wrapperClass}>
      <div className={styles.header.containerClass}>
        
        {/* Brand Group Container */}
        <NavLink to="/" className={styles.branding.groupAnchorClass}>
          
          {/* 1. Scale-Optimized Logo Asset Component Container */}
          <div className={styles.branding.logoFrameClass}>
            <img 
              src={content.logo.imgSrc} 
              alt={content.logo.altText}
              className={styles.branding.logoImageClass}
              onError={(e) => {
                // Graceful hide trigger if the image is missing
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Vertical Schema UI Divider */}
          <div className={styles.branding.dividerClass} />

          {/* 2. Standard UI Builder Label Array block */}
          <div className={styles.branding.uiBuilderWrapperClass}>
            <div className={styles.branding.iconBoxClass}>
              <Layers size={15} className={styles.branding.iconClass} />
            </div>

            <span className={styles.branding.titleClass}>
              {content.uiBuilderTitle}
            </span>
          </div>
        </NavLink>

        {/* Structural Navigation Engine Matrix mapping links array */}
        <nav className={styles.navigation.navWrapperClass}>
          {content.navLinks.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${styles.navigation.baseNavClass} ${
                  isActive ? styles.navigation.activeClass : styles.navigation.inactiveClass
                }`
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