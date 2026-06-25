export const defaultProps = {
    logos: [
      { image: "/assets/logos/stripe.svg", alt: "Stripe" },
      { image: "/assets/logos/vercel.svg", alt: "Vercel" },
      { image: "/assets/logos/linear.svg", alt: "Linear" },
      { image: "/assets/logos/loom.svg", alt: "Loom" },
      { image: "/assets/logos/figma.svg", alt: "Figma" },
    ],
    grayscale: true,
    logoFilter: null,
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
      {
        name: "logoFilter",
        type: "string",
        default: "null",
        allowedValues: "brightness(0) | invert(1) | opacity(0.3) | none",
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