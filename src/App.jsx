import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer, closeDrawer } from "./redux/reducers/drawer";

import Drawer from "./components/nav/Drawer";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";
import Accounts from "./pages/Accounts";

const App = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.drawer.mainContentWidth);

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
    <div className="App flex flex-row">
      <div
        style={{
          width: width,
          position: "absolute",
          left: "0px",
          height: "100%",
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Accounts />} />
        </Routes>

        <Footer />
      </div>
      <Drawer />
    </div>
  );
};

export default App;
