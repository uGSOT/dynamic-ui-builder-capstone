import { createSlice } from "@reduxjs/toolkit";
import { BLANK_TEMPLATE } from "../templates";
import { parseAndValidateJson } from "../utils/validateConfig";
import { readStorage, writeStorage } from "../utils/storage";
import { STORAGE_KEYS } from "../utils/constants";

function configToRawJson(config) {
  return JSON.stringify(config, null, 2);
}

function loadInitialRawJson() {
  const saved = readStorage(STORAGE_KEYS.DRAFT);
  if (saved?.rawJson && typeof saved.rawJson === "string") {
    return saved.rawJson;
  }
  return configToRawJson(BLANK_TEMPLATE);
}

const initialRawJson = loadInitialRawJson();
const initialValidation = parseAndValidateJson(initialRawJson);

const builderSlice = createSlice({
  name: "builder",
  initialState: {
    rawJson: initialRawJson,
    siteConfig: initialValidation.siteConfig,
    parseError: initialValidation.parseError,
    validationErrors: initialValidation.errors,
    validationWarnings: initialValidation.warnings,
    isValid: initialValidation.valid && !initialValidation.parseError,
  },
  reducers: {
    setRawJson(state, action) {
      const rawJson = action.payload;
      state.rawJson = rawJson;

      const result = parseAndValidateJson(rawJson);
      state.parseError = result.parseError;
      state.siteConfig = result.siteConfig;
      state.validationErrors = result.errors;
      state.validationWarnings = result.warnings;
      state.isValid = result.valid && !result.parseError;

      writeStorage(STORAGE_KEYS.DRAFT, { rawJson });
    },
    loadTemplate(state, action) {
      const config = action.payload;
      const rawJson = configToRawJson(config);
      state.rawJson = rawJson;

      const result = parseAndValidateJson(rawJson);
      state.parseError = result.parseError;
      state.siteConfig = result.siteConfig;
      state.validationErrors = result.errors;
      state.validationWarnings = result.warnings;
      state.isValid = result.valid && !result.parseError;

      writeStorage(STORAGE_KEYS.DRAFT, { rawJson });
    },
    resetBuilder(state) {
      const rawJson = configToRawJson(BLANK_TEMPLATE);
      state.rawJson = rawJson;

      const result = parseAndValidateJson(rawJson);
      state.parseError = result.parseError;
      state.siteConfig = result.siteConfig;
      state.validationErrors = result.errors;
      state.validationWarnings = result.warnings;
      state.isValid = result.valid && !result.parseError;

      writeStorage(STORAGE_KEYS.DRAFT, { rawJson });
    },
    clearDraft(state) {
      const rawJson = configToRawJson(BLANK_TEMPLATE);
      state.rawJson = rawJson;
      state.siteConfig = BLANK_TEMPLATE;
      state.parseError = null;
      state.validationErrors = [];
      state.validationWarnings = [];
      state.isValid = true;

      writeStorage(STORAGE_KEYS.DRAFT, { rawJson });
    },
  },
});

export const { setRawJson, loadTemplate, resetBuilder, clearDraft } =
  builderSlice.actions;
export default builderSlice.reducer;
