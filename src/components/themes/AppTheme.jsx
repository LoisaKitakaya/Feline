import Toggle from "react-toggle";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "../../redux/reducers/theme";

const AppTheme = () => {
  const dispatch = useDispatch();

  const isDark = useSelector((state) => state.themes.isDark);

  const toggleTheme = (value) => {
    if (value === true) {
      dispatch(setDarkTheme());
    } else if (value === false) {
      dispatch(setLightTheme());
    }
  };

  const checkTheme = () => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        dispatch(setDarkTheme());
      } else if (localStorage.getItem("theme") === "light") {
        dispatch(setLightTheme());
      }
    } else {
      dispatch(setLightTheme());
    }
  };

  useEffect(() => {
    checkTheme();
  });

  return (
    <>
      <Toggle
        defaultChecked={isDark}
        onChange={(e) => toggleTheme(e.target.checked)}
      />
    </>
  );
};

export default AppTheme;
