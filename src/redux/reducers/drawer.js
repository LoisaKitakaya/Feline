import { createSlice } from "@reduxjs/toolkit";

export const drawerReducer = createSlice({
  name: "drawer",
  initialState: {
    menuWidth: localStorage.getItem("menuWidth")
      ? localStorage.getItem("menuWidth")
      : "0",
    menuDisplay: localStorage.getItem("menuDisplay")
      ? localStorage.getItem("menuDisplay")
      : "none",
    mainContentWidth: localStorage.getItem("mainContentWidth")
      ? localStorage.getItem("mainContentWidth")
      : "0",
  },
  reducers: {
    openDrawer: (state) => {
      localStorage.setItem("menuWidth", "5%");
      localStorage.setItem("menuDisplay", "block");
      localStorage.setItem("mainContentWidth", "95%");

      state.menuWidth = localStorage.getItem("menuWidth");
      state.menuDisplay = localStorage.getItem("menuDisplay");
      state.mainContentWidth = localStorage.getItem("mainContentWidth");
    },
    closeDrawer: (state) => {
      localStorage.setItem("menuWidth", "0");
      localStorage.setItem("menuDisplay", "none");
      localStorage.setItem("mainContentWidth", "100%");

      state.menuWidth = localStorage.getItem("menuWidth");
      state.menuDisplay = localStorage.getItem("menuDisplay");
      state.mainContentWidth = localStorage.getItem("mainContentWidth");
    },
  },
});

export const { openDrawer, closeDrawer } = drawerReducer.actions;
export default drawerReducer.reducer;
