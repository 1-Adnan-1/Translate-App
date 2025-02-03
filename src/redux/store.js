import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./slices/languageSlice";
import translateReducer from "./slices/translateSlice";

export default configureStore({
  reducer: {
    language: LanguageReducer,
    translate: translateReducer,
  },
});
