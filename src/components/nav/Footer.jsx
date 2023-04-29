import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer, closeDrawer } from "../../redux/reducers/drawer";

import android from "./img/googleplay.webp";
import apple from "./img/applestore.webp";

const Footer = () => {
  const width = useSelector((state) => state.drawer.mainContentWidth);

  const dispatch = useDispatch();

  const checkDrawer = () => {
    if (localStorage.getItem("mainContentWidth")) {
      if (localStorage.getItem("mainContentWidth") === "95%") {
        dispatch(openDrawer());
      } else if (localStorage.getItem("mainContentWidth") === "100%") {
        dispatch(closeDrawer());
      }
    } else {
      dispatch(openDrawer());
    }
  };

  useEffect(() => {
    checkDrawer();
  });

  return (
    <footer
      className="flex justify-between items-center p-4 border-t fixed bottom-0 w-full"
      style={{
        width: width,
      }}
    >
      <div className="flex justify-start items-center">
        <a href="">
          <img src={android} alt="app stickers" />
        </a>
        <div className="mx-2"></div>
        <a href="">
          <img src={apple} alt="app stickers" />
        </a>
      </div>
      <div className="flex justify-end items-center">
        <p>&copy; 2023 Finance Fluent. All rights reserver.</p>
        <i className="bi bi-dot mx-2"></i>
        <a href="">T&C</a>
        <i className="bi bi-dot mx-2"></i>
        <a href="">Blog</a>
        <i className="bi bi-dot mx-2"></i>
        <a href="">Site Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
