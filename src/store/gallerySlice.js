import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    type: null,
    variant: null,
    sectionId: null,
    props: {},
    styles: {},
    responsive: {},
  },
  reducers: {
    initPlayground(state, action) {
      const { type, variant, sectionId, props, styles, responsive } =
        action.payload;
      state.type = type;
      state.variant = variant;
      state.sectionId = sectionId;
      state.props = props ?? {};
      state.styles = styles ?? {};
      state.responsive = responsive ?? {};
    },
    setVariant(state, action) {
      state.variant = action.payload;
    },
    updateProps(state, action) {
      state.props = { ...state.props, ...action.payload };
    },
    updateStyles(state, action) {
      state.styles = { ...state.styles, ...action.payload };
    },
  },
});

export const { initPlayground, setVariant, updateProps, updateStyles } =
  gallerySlice.actions;
export default gallerySlice.reducer;
