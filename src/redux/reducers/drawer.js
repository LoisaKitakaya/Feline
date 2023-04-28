import { createSlice } from "@reduxjs/toolkit";

export const drawerReducer = createSlice({
  name: "drawer",
  initialState: {
    menuWidth: "0",
    menuDisplay: "none",
    mainContentWidth: "0",
  },
  reducers: {
    openDrawer: (state) => {
      state.menuWidth = "5%";
      state.menuDisplay = "block";
      state.mainContentWidth = "95%";
    },
    closeDrawer: (state) => {
      state.menuWidth = "0";
      state.menuDisplay = "none";
      state.mainContentWidth = "100%";
    },
  },
});

export const { openDrawer, closeDrawer } = drawerReducer.actions;
export default drawerReducer.reducer;
