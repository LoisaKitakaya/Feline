import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./reducers/theme";

export default configureStore({
  reducer: {
    themes: darkThemeReducer,
  },
});
