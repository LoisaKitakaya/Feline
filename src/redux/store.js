import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import toastReducer from "./reducers/toast";
import securityReducer from "./reducers/2fa";
import drawerReducer from "./reducers/drawer";
import darkThemeReducer from "./reducers/theme";
import toggleFilterReducer from "./reducers/filter";

export default configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    drawer: drawerReducer,
    themes: darkThemeReducer,
    security: securityReducer,
    filter: toggleFilterReducer,
  },
});
