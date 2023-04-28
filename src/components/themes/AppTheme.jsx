import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "../../redux/reducers/theme";

import moon from "./img/icons8-full-moon-96.png";
import sun from "./img/icons8-sun-96.png";

const AppTheme = () => {
  const dispatch = useDispatch();

  const appTheme = useSelector((state) => state.themes.theme);

  const [isDarkTheme, setIsDarkTheme] = useState();

  const setTheme = (appTheme) => {
    if (appTheme == "dark") {
      setIsDarkTheme(true);
    } else if (appTheme == "light") {
      setIsDarkTheme(false);
    }
  };

  useEffect(() => {
    setTheme(appTheme);
  }, [appTheme]);

  return (
    <>
      {isDarkTheme ? (
        <button className="" onClick={() => dispatch(setLightTheme())}>
          <img src={sun} style={{ width: "40%" }} alt="sun icon" />
        </button>
      ) : (
        <button className="" onClick={() => dispatch(setDarkTheme())}>
          <img src={moon} style={{ width: "40%" }} alt="moon icon" />
        </button>
      )}
    </>
  );
};

export default AppTheme;
