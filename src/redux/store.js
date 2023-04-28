import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./reducers/theme";
import drawerReducer from "./reducers/drawer";

export default configureStore({
  reducer: {
    themes: darkThemeReducer,
    drawer: drawerReducer,
  },
});
