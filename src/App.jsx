import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer, closeDrawer } from "./redux/reducers/drawer";

import Drawer from "./components/nav/Drawer";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";

import Accounts from "./pages/Accounts";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const App = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.drawer.mainContentWidth);

  const notification = useSelector((state) => state.toast);

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

  const successToast = (message) => {
    toast.success(message);
  };

  const errorToast = (message) => {
    toast.error(message);
  };

  const checkNotification = (notification) => {
    if (notification.type && notification.message) {
      if (notification.type === "success") {
        successToast(notification.message);
      } else if (notification.type === "error") {
        errorToast(notification.message);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    checkDrawer();
    checkNotification(notification);
  }, [notification]);

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>

        <Footer />
      </div>
      <Drawer />

      <Toaster />
    </div>
  );
};

export default App;
