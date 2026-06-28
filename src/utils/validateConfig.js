import { z } from "zod";
import { COMPONENT_REGISTRY, getVariantEntry } from "../catalog/registry";

const sectionSchema = z.object({
  id: z.string().min(1).optional(),
  type: z.string().min(1),
  variant: z.string().min(1),
  props: z.record(z.string(), z.unknown()).optional(),
  styles: z.record(z.string(), z.unknown()).optional(),
  responsive: z
    .record(
      z.string(),
      z.object({
        props: z.record(z.string(), z.unknown()).optional(),
        styles: z.record(z.string(), z.unknown()).optional(),
      })
    )
    .optional(),
});

const siteConfigSchema = z.object({
  meta: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
    })
    .optional(),
  theme: z
    .object({
      colors: z.record(z.string(), z.string()).optional(),
      typography: z
        .object({
          fontFamily: z.string().optional(),
          scale: z.number().optional(),
        })
        .optional(),
    })
    .optional(),
  pages: z
    .array(
      z.object({
        id: z.string().min(1),
        path: z.string().min(1),
        sections: z.array(sectionSchema),
      })
    )
    .min(1),
});

function getAllowedStyleKeys(type, variant) {
  const entry = getVariantEntry(type, variant);
  const styles = entry?.propSchema?.styles;
  if (!Array.isArray(styles)) return new Set();
  return new Set(styles.map((item) => item.name));
}

function validateSection(section, pageIndex, sectionIndex) {
  const errors = [];
  const warnings = [];
  const basePath = `pages[${pageIndex}].sections[${sectionIndex}]`;

  if (!section.type || !section.variant) {
    errors.push({
      path: basePath,
      message: "Section requires type and variant",
      severity: "error",
    });
    return { errors, warnings };
  }

  const component = COMPONENT_REGISTRY[section.type];
  if (!component) {
    errors.push({
      path: `${basePath}.type`,
      message: `Unknown component type "${section.type}"`,
      severity: "error",
    });
    return { errors, warnings };
  }

  const variantEntry = getVariantEntry(section.type, section.variant);
  if (!variantEntry) {
    errors.push({
      path: `${basePath}.variant`,
      message: `Unknown variant "${section.variant}" for type "${section.type}"`,
      severity: "error",
    });
    return { errors, warnings };
  }

  const allowedStyles = getAllowedStyleKeys(section.type, section.variant);
  for (const key of Object.keys(section.styles ?? {})) {
    if (!allowedStyles.has(key)) {
      warnings.push({
        path: `${basePath}.styles.${key}`,
        message: `Style key "${key}" is not documented for ${section.type}/${section.variant}`,
        severity: "warning",
      });
    }
  }

  for (const [breakpoint, override] of Object.entries(section.responsive ?? {})) {
    if (!["mobile", "tablet", "desktop"].includes(breakpoint)) {
      warnings.push({
        path: `${basePath}.responsive.${breakpoint}`,
        message: `Unknown breakpoint "${breakpoint}"`,
        severity: "warning",
      });
    }
    for (const key of Object.keys(override.styles ?? {})) {
      if (!allowedStyles.has(key)) {
        warnings.push({
          path: `${basePath}.responsive.${breakpoint}.styles.${key}`,
          message: `Style key "${key}" is not documented for ${section.type}/${section.variant}`,
          severity: "warning",
        });
      }
    }
  }

  return { errors, warnings };
}

export function validateConfig(config) {
  const parsed = siteConfigSchema.safeParse(config);
  if (!parsed.success) {
    return {
      valid: false,
      siteConfig: null,
      errors: parsed.error.issues.map((issue) => ({
        path: issue.path.join(".") || "root",
        message: issue.message,
        severity: "error",
      })),
      warnings: [],
    };
  }

  const siteConfig = parsed.data;
  const errors = [];
  const warnings = [];
  const sectionIds = new Set();
  const pagePaths = new Set();

  siteConfig.pages.forEach((page, pageIndex) => {
    if (pagePaths.has(page.path)) {
      errors.push({
        path: `pages[${pageIndex}].path`,
        message: `Duplicate page path "${page.path}"`,
        severity: "error",
      });
    }
    pagePaths.add(page.path);

    if (page.sections.length > 20) {
      warnings.push({
        path: `pages[${pageIndex}].sections`,
        message: `Page has ${page.sections.length} sections — consider splitting for performance`,
        severity: "warning",
      });
    }

    page.sections.forEach((section, sectionIndex) => {
      const sectionKey = section.id ?? `${section.type}-${sectionIndex}`;
      if (sectionIds.has(sectionKey)) {
        errors.push({
          path: `pages[${pageIndex}].sections[${sectionIndex}].id`,
          message: `Duplicate section id "${sectionKey}"`,
          severity: "error",
        });
      }
      sectionIds.add(sectionKey);

      const result = validateSection(section, pageIndex, sectionIndex);
      errors.push(...result.errors);
      warnings.push(...result.warnings);
    });
  });

  return {
    valid: errors.length === 0,
    siteConfig,
    errors,
    warnings,
  };
}

export function parseAndValidateJson(rawJson) {
  try {
    const parsed = JSON.parse(rawJson);
    const result = validateConfig(parsed);
    return { parseError: null, ...result };
  } catch {
    return {
      parseError: "Invalid JSON — fix syntax to update the preview",
      valid: false,
      siteConfig: null,
      errors: [],
      warnings: [],
    };
  }
}
