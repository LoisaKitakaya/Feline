import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./reducers/theme";
import drawerReducer from "./reducers/drawer";
import authReducer from "./reducers/auth";

export default configureStore({
  reducer: {
    auth: authReducer,
    drawer: drawerReducer,
    themes: darkThemeReducer,
  },
});
