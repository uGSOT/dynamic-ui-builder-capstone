// src/pages/HomePage.jsx
import React from 'react';

// --- 1. ARCHITECTURAL STYLE CONFIGURATION SCHEMAS (PROP DATA) ---
const defaultThemeConfig = {
  typography: {
    importUrl: "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');",
    fontFamilyClass: "font-brand",
    cssVariables: `
      :root {
        --primary-red: oklch(0.577 0.245 27.325);
        --font-montserrat: 'Montserrat', sans-serif;
      }
      .font-brand { font-family: var(--font-montserrat); }
    `
  },
  global: {
    wrapperClass: "pt-14 min-h-screen bg-white text-slate-900 antialiased selection:bg-[oklch(0.577_0.245_27.325)] selection:text-white"
  },
  hero: {
    sectionClass: "relative pt-16 sm:pt-24 pb-16 px-6 text-center max-w-5xl mx-auto flex flex-col items-center",
    // Clean flex-row alignment items to vertically center text alongside the enlarged asset
    badgeClass: "inline-flex items-center flex-wrap justify-center gap-x-2 gap-y-3 px-5 py-2.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-8 tracking-wider uppercase",
    badgePulseClass: "w-2 h-2 rounded-full bg-[oklch(0.577_0.245_27.325)] shrink-0",
    // INCREASED LOGO SIZE: Scaled up to h-8 (desktop h-10) to optimize asset visibility
    badgeLogoFrameClass: "h-8 sm:h-10 flex items-center ml-1 shrink-0",
    badgeLogoImgClass: "h-full w-auto object-contain bg-transparent block",
    headingClass: "text-4xl sm:text-6xl lg:text-[72px] font-black tracking-tight text-slate-900 leading-[1.05] mb-8 max-w-4xl",
    headingAccentClass: "text-[oklch(0.577_0.245_27.325)]",
    textClass: "text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium",
    btnWrapperClass: "flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16",
    primaryCtaClass: "w-full sm:w-auto px-8 py-4 text-base font-bold text-white rounded-full bg-[oklch(0.577_0.245_27.325)] hover:opacity-95 shadow-lg shadow-[oklch(0.577_0.245_27.325)]/20 transition-all text-center tracking-wide",
    secondaryCtaClass: "w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-800 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all text-center"
  },
  previewSandbox: {
    sectionClass: "bg-slate-50 border-t border-b border-slate-100 py-16 px-4 sm:px-6 lg:px-12",
    layoutWrapperClass: "max-w-6xl mx-auto",
    headerWrapperClass: "text-center mb-12",
    headingClass: "text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4",
    textClass: "text-slate-500 text-sm sm:text-base max-w-xl mx-auto",
    mockBrowserClass: "bg-white rounded-2xl border border-slate-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] overflow-hidden aspect-[16/9] w-full relative group",
    browserTopBarClass: "bg-slate-900 text-slate-400 text-xs px-4 py-3 border-b border-slate-800 flex items-center justify-between font-mono",
    browserDotsWrapperClass: "flex items-center gap-2",
    dotRed: "w-2 h-2 rounded-full bg-red-500",
    dotYellow: "w-2 h-2 rounded-full bg-yellow-500",
    dotGreen: "w-2 h-2 rounded-full bg-green-500",
    fileNameTextClass: "ml-2 text-slate-500",
    engineBadgeClass: "bg-slate-800 px-3 py-1 rounded text-[11px] text-emerald-400 border border-slate-700/50",
    viewportCanvasClass: "absolute inset-0 top-11 bg-slate-950 flex items-center justify-center p-6 text-center",
    viewportInnerStackClass: "space-y-6 max-w-md",
    jsonTokenBoxClass: "w-16 h-16 rounded-2xl bg-[oklch(0.577_0.245_27.325)]/10 border border-[oklch(0.577_0.245_27.325)]/20 flex items-center justify-center text-[oklch(0.577_0.245_27.325)] mx-auto font-bold text-2xl",
    canvasHeadingClass: "text-white font-bold text-lg mb-2",
    canvasTextClass: "text-slate-400 text-xs leading-relaxed",
    canvasCtaClass: "inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase bg-[oklch(0.577_0.245_27.325)] text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition-all"
  },
  pillars: {
    sectionClass: "py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8",
    cardClass: "space-y-3",
    badgeIndexClass: "w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-800 text-lg",
    headingClass: "text-lg font-bold text-slate-900",
    textClass: "text-slate-500 text-sm leading-relaxed"
  },
  footer: {
    footerWrapperClass: "bg-slate-50 border-t border-slate-200/60 py-8 px-6 text-center text-xs text-slate-400 font-medium"
  }
};

// --- 2. ARCHITECTURAL CONTENT SCHEMAS (PROP DATA) ---
const defaultContentConfig = {
  hero: {
    marketingLabelLeft: "Next-Generation Low Code Schema Editor from",
    logoImgSrc: "/assets/logos/ugsot.png",
    logoAltText: "upGrad School of Technology",
    headlineMainLeft: "Create a Website",
    headlineMainRight: "Without",
    headlineAccent: "Limits.",
    supportingParagraph: "Build high-performance computing portfolios, landing pages, and production architectures driven directly by clean, standardized JSON schemas.",
    ctas: {
      primary: { text: "Start Building Instantly", route: "/builder" },
      secondary: { text: "See What's Possible", route: "/gallery" }
    }
  },
  previewSandbox: {
    sectionTitle: "One platform. Absolute design flexibility.",
    sectionSubtitle: "Bring complex vision onto a scalable playground interface that outputs production-ready JSON components safely.",
    fileName: "live-canvas-editor.json",
    engineStatusText: "● Connected to upGrad Engine",
    canvasBrandingToken: "{ }",
    canvasTitle: "Visual Mapping Workspace",
    canvasDescription: "Every section layout customized inside the Studio dynamically validates and serializes instantly. Open the Studio to test it live.",
    canvasCta: { text: "Open Canvas Interface", route: "/builder" }
  },
  featuresMatrix: [
    {
      index: "01",
      title: "Custom Infrastructure",
      description: "Configure breakpoints, colors, and global text stacks directly through JSON layout primitives. Complete styling safety without hardcoding."
    },
    {
      index: "02",
      title: "Zod Engine Protection",
      description: "Eliminate runtime broken components. Every property adjustment passes strict validation barriers before updating your production interfaces."
    },
    {
      index: "03",
      title: "No Backend Dependency",
      description: "Fully browser-isolated execution. Save iterations instantly to local safety slots, or export layout config files out with a single click."
    }
  ],
  footer: {
    copyrightClaims: "© 2026 upGrad School of Technology • Dynamic UI Studio Engine Framework"
  }
};

export default function HomePage({ 
  styles = defaultThemeConfig, 
  content = defaultContentConfig 
}) {
  
  const computedStyleNode = `
    ${styles.typography.importUrl}
    ${styles.typography.cssVariables}
  `;

  return (
    <div className={`${styles.global.wrapperClass} ${styles.typography.fontFamilyClass}`}>
      <style>{computedStyleNode}</style>

      {/* --- 1. HERO PRODUCT INTRODUCTION --- */}
      <section className={styles.hero.sectionClass}>
        
        {/* Dynamic Marketing Badge Container incorporating the Inline Brand Asset */}
        <div className={styles.hero.badgeClass}>
          <span className={styles.hero.badgePulseClass} />
          <span className="self-center">{content.hero.marketingLabelLeft}</span>
          <div className={styles.hero.badgeLogoFrameClass}>
            <img 
              src={content.hero.logoImgSrc} 
              alt={content.hero.logoAltText} 
              className={styles.hero.badgeLogoImgClass}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        <h1 className={styles.hero.headingClass}>
          {content.hero.headlineMainLeft} <br className="hidden sm:inline" />
          {content.hero.headlineMainRight} <span className={styles.hero.headingAccentClass}>{content.hero.headlineAccent}</span>
        </h1>

        <p className={styles.hero.textClass}>
          {content.hero.supportingParagraph}
        </p>

        {/* Action CTAs explicitly routing to /builder and /gallery */}
        <div className={styles.hero.btnWrapperClass}>
          <a href={content.hero.ctas.primary.route} className={styles.hero.primaryCtaClass}>
            {content.hero.ctas.primary.text}
          </a>
          <a href={content.hero.ctas.secondary.route} className={styles.hero.secondaryCtaClass}>
            {content.hero.ctas.secondary.text}
          </a>
        </div>
      </section>

      {/* --- 2. LIVE SANDBOX WIX-STYLE CANVAS PREVIEW --- */}
      <section className={styles.previewSandbox.sectionClass}>
        <div className={styles.previewSandbox.layoutWrapperClass}>
          
          <div className={styles.previewSandbox.headerWrapperClass}>
            <h2 className={styles.previewSandbox.headingClass}>
              {content.previewSandbox.sectionTitle}
            </h2>
            <p className={styles.previewSandbox.textClass}>
              {content.previewSandbox.sectionSubtitle}
            </p>
          </div>

          <div className={styles.previewSandbox.mockBrowserClass}>
            <div className={styles.previewSandbox.browserTopBarClass}>
              <div className={styles.previewSandbox.browserDotsWrapperClass}>
                <span className={styles.previewSandbox.dotRed} />
                <span className={styles.previewSandbox.dotYellow} />
                <span className={styles.previewSandbox.dotGreen} />
                <span className={styles.previewSandbox.fileNameTextClass}>
                  {content.previewSandbox.fileName}
                </span>
              </div>
              <div className={styles.previewSandbox.engineBadgeClass}>
                {content.previewSandbox.engineStatusText}
              </div>
            </div>

            <div className={styles.previewSandbox.viewportCanvasClass}>
              <div className={styles.previewSandbox.viewportInnerStackClass}>
                <div className={styles.previewSandbox.jsonTokenBoxClass}>
                  {content.previewSandbox.canvasBrandingToken}
                </div>
                <div>
                  <h4 className={styles.previewSandbox.canvasHeadingClass}>
                    {content.previewSandbox.canvasTitle}
                  </h4>
                  <p className={styles.previewSandbox.canvasTextClass}>
                    {content.previewSandbox.canvasText}
                  </p>
                </div>
                <div>
                  <a href={content.previewSandbox.canvasCta.route} className={styles.previewSandbox.canvasCtaClass}>
                    {content.previewSandbox.canvasCta.text}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

     {/* --- 3. PLATFORM CORE VALUE PILLARS --- */}
      <section className={styles.pillars.sectionClass}>
        {content.featuresMatrix?.map((pillar, idx) => (
          <div key={idx} className={styles.pillars.cardClass}>
            <div className={styles.pillars.badgeIndexClass}>
              {pillar.index}
            </div>
            <h3 className={styles.pillars.headingClass}>
              {pillar.title}
            </h3>
            <p className={styles.pillars.textClass}>
              {pillar.description}
            </p>
          </div>
        ))}
      </section>

      {/* --- 4. ENGINE FOOTER --- */}
      <footer className={styles.footer.footerWrapperClass}>
        <p>{content.footer.copyrightClaims}</p>
      </footer>
    </div>
  );
}