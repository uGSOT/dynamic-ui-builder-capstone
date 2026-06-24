export default function SimpleRow({ props = {}, styles = {} }) {

    const {
      logos = defaultProps.logos,
      grayscale = defaultProps.grayscale,
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
    }[styles.paddingY] ?? "py-10"; // fallback
  
    return (
      
      <section className={`w-full border-y border-border ${backgroundClass} ${paddingClass}`}>
  
       
        <div className="max-w-6xl mx-auto px-6">
  
         
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
  
           
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.image}
                alt={logo.alt}
                className="h-6 md:h-8 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
                style={{
                  
                  filter: grayscale ? "grayscale(100%)" : "none",
                  opacity: grayscale ? 0.5 : 1,
                }}
              />
            ))}
  
          </div>
        </div>
      </section>
    );
  }
  
 
  export const defaultProps = {
    logos: [
      { image: "/assets/logos/Stripe.svg", alt: "Stripe" },
      { image: "/assets/logos/Vercel.svg", alt: "Vercel" },
      { image: "/assets/logos/Linear.svg", alt: "Linear" },
      { image: "/assets/logos/Loom.svg", alt: "Loom" },
      { image: "/assets/logos/Figma.svg", alt: "Figma" },
    ],
    grayscale: true,
  };
  
 
  export const defaultStyles = {
    paddingY: 10,
    background: "surface",
  };
  
 
  export const propSchema = {
    props: [
      {
        name: "logos",
        type: "Array<{ image: string, alt: string }>",
        default: "[5 logos]",
        allowedValues: "Array of image/alt objects",
      },
      {
        name: "grayscale",
        type: "boolean",
        default: "true",
        allowedValues: "true | false",
      },
    ],
    styles: [
      {
        name: "paddingY",
        type: "number",
        default: "10",
        allowedValues: "4 | 6 | 8 | 10 | 12",
      },
      {
        name: "background",
        type: "string",
        default: "surface",
        allowedValues: "surface | muted | navy",
      },
    ],
  };