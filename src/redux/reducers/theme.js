import { createSlice } from "@reduxjs/toolkit";

export const darkThemeReducer = createSlice({
  name: "theme",
  initialState: {
    theme: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light",
  },
  reducers: {
    setDarkTheme: (state) => {
      document.querySelector("body").setAttribute("app-theme", "dark");

      localStorage.setItem("theme", "dark");

      state.theme = localStorage.getItem("theme");
    },
    setLightTheme: (state) => {
      document.querySelector("body").setAttribute("app-theme", "light");

      localStorage.setItem("theme", "light");

      state.theme = localStorage.getItem("theme");
    },
  },
});

export const { setDarkTheme, setLightTheme } = darkThemeReducer.actions;
export default darkThemeReducer.reducer;
