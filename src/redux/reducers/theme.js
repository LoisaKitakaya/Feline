import { createSlice } from "@reduxjs/toolkit";

export const darkThemeReducer = createSlice({
  name: "theme",
  initialState: {
    theme: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light",
    isDark: localStorage.getItem("isDark")
      ? localStorage.getItem("isDark")
      : false,
  },
  reducers: {
    setDarkTheme: (state) => {
      document.querySelector("body").setAttribute("app-theme", "dark");
      document.querySelector("nav").setAttribute("app-theme", "dark");

      const tooltip = document.getElementsByClassName("tooltip-text");

      for (let i = 0; i < tooltip.length; i++) {
        let element = tooltip[i];
        element.setAttribute("app-theme", "light");
      }

      localStorage.setItem("theme", "dark");
      localStorage.setItem("isDark", true);

      state.theme = localStorage.getItem("theme");
      state.isDark = localStorage.getItem("isDark");
    },
    setLightTheme: (state) => {
      document.querySelector("body").setAttribute("app-theme", "light");
      document.querySelector("nav").setAttribute("app-theme", "light");

      const tooltip = document.getElementsByClassName("tooltip-text");

      for (let i = 0; i < tooltip.length; i++) {
        let element = tooltip[i];
        element.setAttribute("app-theme", "dark");
      }

      localStorage.setItem("theme", "light");
      localStorage.setItem("isDark", false);

      state.theme = localStorage.getItem("theme");
      state.isDark = localStorage.getItem("isDark");
    },
  },
});

export const { setDarkTheme, setLightTheme } = darkThemeReducer.actions;
export default darkThemeReducer.reducer;
