import { useEffect, useState } from "react";
import NavbarDemoHero from "../../catalog/navbar/NavbarDemoHero";

export default function NavbarGalleryPreview({
  PreviewComponent,
  componentProps,
  variant,
  componentKey,
}) {
  const navLinks = componentProps.navLinks ?? [];
  const firstLabel = navLinks[0]?.label ?? "Home";
  const [activeLabel, setActiveLabel] = useState(firstLabel);

  useEffect(() => {
    setActiveLabel(firstLabel);
  }, [firstLabel]);

  const isTransparent = variant === "transparent-hero";
  const isCentered = variant === "centered-logo";
  const previewProps = {
    ...componentProps,
    onNavigate: setActiveLabel,
    activeLabel,
    preventNavigation: true,
    ...(isTransparent ? { heroTone: "light" } : {}),
  };

  const hero = (
    <NavbarDemoHero
      activeLabel={activeLabel}
      overlay={isTransparent}
      background={isCentered ? "white" : "muted"}
    />
  );

  if (isTransparent) {
    return (
      <div className="relative overflow-hidden">
        {hero}
        <div className="absolute inset-x-0 top-0 z-50">
          <PreviewComponent key={componentKey} {...previewProps} />
        </div>
      </div>
    );
  }

  return (
    <>
      <PreviewComponent key={componentKey} {...previewProps} />
      {hero}
    </>
  );
}
