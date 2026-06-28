import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./builderSlice";
import galleryReducer from "./gallerySlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    builder: builderReducer,
    gallery: galleryReducer,
    ui: uiReducer,
  },
});

export default store;
