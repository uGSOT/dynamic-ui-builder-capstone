import { useCallback, useState } from "react";
import { LayoutGrid } from "lucide-react";
import GallerySidebar from "../../components/gallery/GallerySidebar";
import VariantList from "../../components/gallery/VariantList";
import ComponentPreview from "../../components/gallery/ComponentPreview";
import JsonEditorPanel from "../../components/gallery/JsonEditorPanel";
import PropsReferenceTable from "../../components/gallery/PropsReferenceTable";
import {
  buildSectionConfig,
  COMPONENT_REGISTRY,
  getVariantEntry,
} from "../../catalog/registry";

const DEFAULT_TYPE = "faq";
const DEFAULT_VARIANT = "accordion-single";

export default function GalleryPage() {
  const [selectedType, setSelectedType] = useState(DEFAULT_TYPE);
  const [selectedVariant, setSelectedVariant] = useState(DEFAULT_VARIANT);
  const [sectionConfig, setSectionConfig] = useState(() =>
    buildSectionConfig(DEFAULT_TYPE, DEFAULT_VARIANT)
  );

  const componentEntry = COMPONENT_REGISTRY[selectedType];
  const variantEntry = getVariantEntry(selectedType, selectedVariant);

  const handleSelectType = useCallback((type) => {
    const firstVariant = Object.keys(COMPONENT_REGISTRY[type].variants)[0];
    setSelectedType(type);
    setSelectedVariant(firstVariant);
    setSectionConfig(buildSectionConfig(type, firstVariant));
  }, []);

  const handleSelectVariant = useCallback(
    (variantId) => {
      setSelectedVariant(variantId);
      setSectionConfig(buildSectionConfig(selectedType, variantId));
    },
    [selectedType]
  );

  const handleConfigChange = useCallback((nextConfig) => {
    setSectionConfig(nextConfig);
    if (nextConfig.variant && nextConfig.variant !== selectedVariant) {
      setSelectedVariant(nextConfig.variant);
    }
    if (nextConfig.type && nextConfig.type !== selectedType) {
      setSelectedType(nextConfig.type);
    }
  }, [selectedType, selectedVariant]);

  return (
    <div className="bg-surface-muted pb-8 sm:pb-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="py-6 sm:py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-brand sm:h-10 sm:w-10">
              <LayoutGrid size={18} />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
                Component Gallery
              </h1>
              <p className="text-sm text-ink-muted">
                Select a component, pick a variant, and edit JSON in real time
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
          <div className="flex flex-col lg:flex-row">
            <GallerySidebar
              selectedType={selectedType}
              onSelectType={handleSelectType}
            />

            <div className="min-w-0 flex-1">
              {componentEntry && (
                <VariantList
                  variants={componentEntry.variants}
                  selectedVariant={selectedVariant}
                  onSelectVariant={handleSelectVariant}
                />
              )}

              <div className="flex flex-col">
                <ComponentPreview sectionConfig={sectionConfig} />
                <JsonEditorPanel
                  key={`${selectedType}-${selectedVariant}`}
                  sectionConfig={sectionConfig}
                  onConfigChange={handleConfigChange}
                />
                <PropsReferenceTable propSchema={variantEntry?.propSchema} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
