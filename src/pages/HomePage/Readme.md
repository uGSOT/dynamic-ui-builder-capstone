Deployment Tree Architecture

src/
├── components/
│   └── layout/
│       └── AppHeader.jsx     <-- Updated branding group container
└── pages/
    ├── HomePage.jsx          <-- Strict prop-driven presentation layout
    └── homepage.test.js      <-- Vitest layout automated spec confirmation



<!-- --------------------------------------------------------------------------------------------- -->



# UI Builder Studio — Workspace Landing Page Architecture

This file serves as the official design system documentation for the **upGrad School of Technology UI Builder Studio Landing Page Engine**. It outlines the programmatic variables, custom styling parameters, and architectural principles guiding the workspace configuration layers.

---

## 1. Core Engineering Design Matrix

The implementation decouples the presentation nodes from hardcoded variables, allowing the layout to adapt dynamically via custom parameters passed into the component props.

### Layout Integration Rules
* **Structural Isolation:** All cross-route site navigation logic resides cleanly within `AppHeader.jsx`. The `HomePage.jsx` component focuses exclusively on parsing product schemas below the nav viewport boundary.
* **Typographical Normalization:** Custom CSS variable structures handle font loading across browser layout contexts, applying subpixel rendering parameters (`antialiased`) to preserve text readability across varying screen densities.

---

## 2. Global Design Tokens (The Style Schema)

The workspace layout is governed by advanced modern styling specifications:

### Perceptual OKLCH Color Modeling
The identity accent maps to the custom **upGrad Red** color profile:

$$\text{oklch}(0.577 \ \ 0.245 \ \ 27.325)$$

* **Contrast Balance:** Unlike legacy HSL or RGB color blocks, the OKLCH space scales brightness linearly along uniform color paths, preventing text display muddying when changing layout themes.
* **Dynamic Backdrop Blending:** Child elements utilize fractional opacity layers (`bg-[oklch(...)/0.08]`) to automatically calculate harmonic layout accents on light content backdrops.

---

## 3. Style Object Specification Schema (`styles`)

The table below catalogs every customization key accessible within the `defaultThemeConfig` style configuration manifest:

| Style Schema Key Path | Target Interface Element | Tailored Utility Class Rule Mapping | Functional Design Rationale |
| :--- | :--- | :--- | :--- |
| `typography.importUrl` | Global `<style>` injection | `@import url('https://fonts.googleapis...` | Resolves standard Montserrat web font stylesheet arrays remotely over HTTP. |
| `typography.cssVariables` | Inline Style Document | `:root { --primary-red: oklch(...); }` | Declares atomic brand variables inside the layout engine runtime. |
| `global.wrapperClass` | Root Presentation Canvas | `pt-14 min-h-screen bg-white text-slate-900` | Allocates vertical spacing padding to clear the fixed top navigation bar. |
| `hero.sectionClass` | Marketing Header Area | `relative pt-16 pb-16 px-6 text-center max-w-5xl` | Formats responsive layout text containment boxes. |
| `hero.badgeClass` | Inline Framework Pill | `inline-flex items-center gap-x-2 px-5 py-2.5 bg-slate-100` | Frames the real-time engine platform announcement badge. |
| `hero.badgePulseClass` | Real-time Heartbeat Dot | `w-2 h-2 rounded-full bg-[oklch(...)] animate-pulse` | Provides a subtle blinking brand cue that mirrors active builder status. |
| `hero.badgeLogoFrameClass`| Badge Brand Asset Frame | `h-8 sm:h-10 flex items-center shrink-0` | **Enlarged Logo Target:** Aligns and scales up inline badge logo height profiles. |
| `hero.badgeLogoImgClass` | Inline Logo Layout Item | `h-full w-auto object-contain` | Preserves source asset aspect ratio scaling parameters safely. |
| `hero.headingClass` | Main Conversions Title | `text-4xl sm:text-6xl font-black tracking-tight` | Aggressive font size presentation tracking a tight, balanced line height. |
| `hero.headingAccentClass` | Highlighted Value Term | `text-[oklch(0.577_0.245_27.325)]` | Isolates core keyword anchors with brand red parameters. |
| `hero.primaryCtaClass` | Editor Access Anchor | `w-full sm:w-auto px-8 py-4 text-white bg-slate-900`| High-contrast action trigger linking into the active Monaco editor layout. |
| `previewSandbox.*` | Sandbox Browser Wrapper | Multiple interconnected values | Builds an interactive layout simulation box representing schema builder preview data. |
| `pillars.*` | Infrastructure Matrix | Grid distributions | Spreads out core technical value points across a balanced 3-column mesh. |

---

## 4. Content Manifest Schema (`content`)

The code structure below details the text mapping manifest driving the data keys of the component template:

```json
{
  "hero": {
    "marketingLabelLeft": "Next-Generation Low Code Schema Editor from", // Text label inside badge element
    "logoImgSrc": "/assets/logos/ugsot.png",                            // Explicit deployment path for branding assets
    "logoAltText": "upGrad School of Technology",                       // Text alternative variable for accessibility screen readers
    "headlineMainLeft": "Create a Website",                             // Primary headline array part 1
    "headlineMainRight": "Without",                                     // Primary headline array part 2
    "headlineAccent": "Limits.",                                        // Highlighted focal point value string
    "supportingParagraph": "Build high-performance computing...",       // Explanatory body text introduction block
    "ctas": {
      "primary": { "text": "Start Building Instantly", "route": "/builder" }, // Destination mapping target for full workspace
      "secondary": { "text": "See What's Possible", "route": "/gallery" }     // Destination mapping target for component list
    }
  },
  "previewSandbox": {
    "sectionTitle": "One platform. Absolute design flexibility.",       // Title tracking sandbox mock container
    "fileName": "live-canvas-editor.json",                              // Variable label framing active editor views
    "engineStatusText": "● Connected to upGrad Engine"                   // Direct indicator mimic mapping layout safety
  },
  "featuresMatrix": [
    {
      "index": "01",
      "title": "Custom Infrastructure",                                 // Key feature tracking 1
      "description": "Configure breakpoints, colors, and global text..." 
    }
  ]
}



---------------------------------------------------------------------------------------------------


5. Educational Extension Tasks for Students
The dynamic architecture of this component serves as an effective learning platform for teaching database-driven layouts:

Lab A: Schema Theme Adaptation
Have students declare an external configuration constant called darkStudioTheme. Instruct them to change the style dictionary values (e.g., swapping canvas keys from bg-white and text-slate-900 to bg-slate-950 and text-slate-100). Pass this object directly into the <HomePage styles={darkStudioTheme} /> instance to demonstrate how theme configurations drive visual states globally without restructuring markup nodes.

Lab B: Internationalization Pipeline (i18n)
Instruct students to duplicate the defaultContentConfig manifest and translate all semantic text values into an alternate language. By passing this new content schema object to the content prop, students can observe how structured data feeds alter display text tracking dynamically across the web canvas.


---------------------------------------------------------------------------------------------------

---

## 6. Implementation Chronicle: Step-by-Step Breakdown

This section details how the landing page subsystem was engineered, integrated, and verified to meet the strict requirement constraints of task **E1-05**.

### Phase 1: Pure Data Extraction & Decoupling
* **The Problem:** Traditional codebases mix UI text, asset paths, and style properties inside JSX files, creating complex dependencies that are difficult for students to untangle.
* **The Solution:** We designed two separate configuration matrices (`defaultThemeConfig` and `defaultContentConfig`) that act as a strict layout configuration layer. Every functional Tailwind CSS class, pixel scale constraint, and text segment was converted into variable prop values before the markup was rendered.

### Phase 2: Building the Wix-Style Rendering Engine
The implementation separates structural configuration from the rendering method using a predictable three-step flow:

```text
1. Read Props Engine  ──>  2. Compile Dynamic CSS  ──>  3. Map Configuration Elements
 (styles, content)          (computedStyleNode)          (Canvases & Matrices)



 Style Inheritance Injection: The component reads template configurations from styles.typography and injects them directly into a reactive HTML <style> node at the root of the rendering process. This technique establishes uniform variables across the DOM tree without requiring external CSS files.

Branding Alignment Adjustments: Following visual analysis, the inline alert component badge was expanded to feature a custom logo image field alongside regular text parameters. The scaling box dimensions were increased to h-8 sm:h-10 to enhance visibility while keeping tracking aligned with inline elements.

Array Matrix Iteration: Instead of hardcoding layout grid cells, we utilized the safe optional navigation operator (content.featuresMatrix?.map()) to loops data fragments onto column meshes dynamically. This technique demonstrates robust coding principles to students by preventing unexpected crash states.



--------------------------------------------------------------------------------------------------



Phase 3: Component Isolation and Integration
To ensure complete structural freedom, all standard navigation panels were removed from the HomePage template.

AppHeader Alignment: The brand identity asset structure was added directly into the shared global header (AppHeader.jsx) positioned adjacent to the original purple icon and UI Builder text.

Composability Verification: The core workspace component acts as an isolated, standalone view block. It can be dropped cleanly below the fixed global navigation container in your application file structure without causing container property overlapping issues.


----------------------------------------------------------------------------------------------

