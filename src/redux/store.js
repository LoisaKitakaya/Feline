import toggleFilterReducer from "./reducers/filter";
import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./reducers/theme";
import drawerReducer from "./reducers/drawer";
import toastReducer from "./reducers/toast";
import authReducer from "./reducers/auth";

export default configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    drawer: drawerReducer,
    themes: darkThemeReducer,
    filter: toggleFilterReducer,
  },
});
