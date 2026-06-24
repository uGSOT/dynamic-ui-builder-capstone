/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        foreground: {
          DEFAULT: "var(--color-text)",
          muted:   "var(--color-text-muted)",
        },
        border: "var(--color-border)",
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "ui-sans-serif", "sans-serif"],
        dm:      ['"DM Sans"', "ui-sans-serif", "sans-serif"],
        grotesk: ['"Space Grotesk"', "ui-sans-serif", "sans-serif"],
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "sans-serif"],
        body:    ["var(--font-body)", "Inter", "ui-sans-serif", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["var(--text-display-2xl)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl":  ["var(--text-display-xl)",  { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-lg":  ["var(--text-display-lg)",  { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "display-md":  ["var(--text-display-md)",  { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "display-sm":  ["var(--text-display-sm)",  { lineHeight: "1.3" }],
        "body-xl":     ["var(--text-body-xl)",     { lineHeight: "1.6" }],
        "body-lg":     ["var(--text-body-lg)",     { lineHeight: "1.6" }],
        "body-md":     ["var(--text-body-md)",     { lineHeight: "1.5" }],
        "body-sm":     ["var(--text-body-sm)",     { lineHeight: "1.5" }],
        "body-xs":     ["var(--text-body-xs)",     { lineHeight: "1.4" }],
      },
      spacing: {

        18:  "4.5rem",
        22:  "5.5rem",
        26:  "6.5rem",
        30:  "7.5rem",
        34:  "8.5rem",
        38:  "9.5rem",
        42:  "10.5rem",
        46:  "11.5rem",
        50:  "12.5rem",
        54:  "13.5rem",
        58:  "14.5rem",
        62:  "15.5rem",
        66:  "16.5rem",
        72:  "18rem",
        80:  "20rem",
        88:  "22rem",
        96:  "24rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },

     
      borderRadius: {
        none: "0px",
        sm:   "var(--radius-sm)",
        md:   "var(--radius-md)",
        lg:   "var(--radius-lg)",
        xl:   "var(--radius-xl)",
        "2xl":"var(--radius-2xl)",
        full: "9999px",
        
        card:   "var(--radius-card)",
        button: "var(--radius-button)",
        badge:  "var(--radius-badge)",
      },

      
      boxShadow: {
        sm:   "var(--shadow-sm)",
        md:   "var(--shadow-md)",
        lg:   "var(--shadow-lg)",
        xl:   "var(--shadow-xl)",
        card: "var(--shadow-card)",
       
        "glow-primary": "0 0 20px -4px var(--color-primary)",
        "glow-accent":  "0 0 20px -4px var(--color-accent)",
      },

      maxWidth: {
        "section": "var(--container-max-width)",
        "prose":   "72ch",
      },

      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-24px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up":       "fade-up 0.4s ease-out both",
        "fade-in":       "fade-in 0.3s ease-out both",
        "slide-in-left": "slide-in-left 0.4s ease-out both",
      },

      screens: {
        mobile:  "0px",
        tablet:  "768px",
        desktop: "1024px",
        wide:    "1280px",
        full:    "1440px",
      },
    },
  },
  plugins: [],
};