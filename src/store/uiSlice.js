import { createSlice } from "@reduxjs/toolkit";
import { readStorage, writeStorage } from "../utils/storage";
import { STORAGE_KEYS } from "../utils/constants";
import { DEFAULT_VIEWPORT, VIEWPORT_PRESETS } from "../utils/previewViewport";

const savedPreferences = readStorage(STORAGE_KEYS.PREFERENCES, {});

const initialViewport =
  savedPreferences.viewport && VIEWPORT_PRESETS[savedPreferences.viewport]
    ? savedPreferences.viewport
    : DEFAULT_VIEWPORT;

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    viewport: initialViewport,
  },
  reducers: {
    setViewport(state, action) {
      const next = VIEWPORT_PRESETS[action.payload] ? action.payload : DEFAULT_VIEWPORT;
      state.viewport = next;
      writeStorage(STORAGE_KEYS.PREFERENCES, { viewport: state.viewport });
    },
  },
});

export const { setViewport } = uiSlice.actions;
export default uiSlice.reducer;
