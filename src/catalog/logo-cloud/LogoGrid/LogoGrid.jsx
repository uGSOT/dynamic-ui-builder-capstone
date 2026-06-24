export default function LogoGrid({ props = {}, styles = {} }) {
    const {
      label = defaultProps.label,
      heading = defaultProps.heading,
      subheading = defaultProps.subheading,
      logos = defaultProps.logos,
      grayscale = defaultProps.grayscale,
      columns = defaultProps.columns,
    } = props;
  
    const backgroundClass = {
      surface: "bg-surface",
      muted: "bg-surface-muted",
      navy: "bg-navy",
    }[styles.background] ?? "bg-surface";
  
    
    const paddingClass = {
      4: "py-4",
      6: "py-6",
      8: "py-8",
      10: "py-10",
      12: "py-12",
      16: "py-16",
    }[styles.paddingY] ?? "py-16";
  
    
    const gridClass = {
      3: "grid-cols-2 sm:grid-cols-3",
      4: "grid-cols-2 sm:grid-cols-4",
    }[columns] ?? "grid-cols-2 sm:grid-cols-3";
  
    return (
      <section className={`w-full ${backgroundClass} ${paddingClass}`}>
  
        <div className="max-w-5xl mx-auto px-6 text-center">
  
          
          {label && (
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-3">
              {label}
            </p>
          )}
  
          
          {heading && (
            <h2 className="text-2xl md:text-4xl font-bold text-ink mb-4">
              {heading}
            </h2>
          )}
  
          
          {subheading && (
            <p className="text-sm md:text-base text-ink-muted max-w-xl mx-auto mb-12">
              {subheading}
            </p>
          )}
  
          
          <div className={`grid ${gridClass} gap-4`}>
            {logos.map((logo, i) => (     
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 md:p-8 border border-border rounded-2xl bg-surface hover:bg-surface-muted transition-colors duration-150"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="h-8 md:h-10 w-auto object-contain mb-3"
                  style={{
                    filter: grayscale ? "grayscale(100%)" : "none",
                    opacity: grayscale ? 0.4 : 1,
                  }}
                />
  
               
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-subtle">
                  {logo.alt}
                </p>
  
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export const defaultProps = {
    label: "OUR STARTUP PARTNERS",
    heading: "Trusted by innovative startups",
    subheading: "We're proud to partner with forward-thinking startups building the future.",
    logos: [
      { image: "/assets/logos/Stripe.svg", alt: "Stripe" },
      { image: "/assets/logos/Vercel.svg", alt: "Vercel" },
      { image: "/assets/logos/Linear.svg", alt: "Linear" },
      { image: "/assets/logos/Notion.svg", alt: "Notion" },
      { image: "/assets/logos/Loom.svg", alt: "Loom" },
      { image: "/assets/logos/Figma.svg", alt: "Figma" },
    ],
    grayscale: false,
    columns: 3,
  };
  
  export const defaultStyles = {
    paddingY: 16,
    background: "surface",
  };
  
  export const propSchema = {
    props: [
      {
        name: "label",
        type: "string",
        default: '"OUR STARTUP PARTNERS"',
        allowedValues: "Any string",
      },
      {
        name: "heading",
        type: "string",
        default: '"Trusted by innovative startups"',
        allowedValues: "Any string",
      },
      {
        name: "subheading",
        type: "string",
        default: '"We\'re proud to partner..."',
        allowedValues: "Any string",
      },
      {
        name: "logos",
        type: "Array<{ image: string, alt: string }>",
        default: "[6 logos]",
        allowedValues: "Array of image/alt objects",
      },
      {
        name: "grayscale",
        type: "boolean",
        default: "false",
        allowedValues: "true | false",
      },
      {
        name: "columns",
        type: "number",
        default: "3",
        allowedValues: "3 | 4",
      },
    ],
    styles: [
      {
        name: "paddingY",
        type: "number",
        default: "16",
        allowedValues: "4 | 6 | 8 | 10 | 16",
      },
      {
        name: "background",
        type: "string",
        default: "surface",
        allowedValues: "surface | muted | navy",
      },
    ],
  };