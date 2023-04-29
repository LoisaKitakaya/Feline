import AppTheme from "../themes/AppTheme";
import { useEffect, useState } from "react";
import { signOut } from "../../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer, closeDrawer } from "../../redux/reducers/drawer";

const Navbar = () => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const width = useSelector((state) => state.drawer.mainContentWidth);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleToggleDrawer = () => {
    setExpanded(!expanded);

    expanded ? dispatch(openDrawer()) : dispatch(closeDrawer());
  };

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
    <nav
      className="flex justify-between items-center p-4 border-b fixed top-0 w-full"
      style={{
        width: width,
      }}
    >
      <a href="" className="text-2xl font-semibold">
        Finance Fluent
      </a>
      <div className="flex justify-end items-center">
        <AppTheme />
        <div className="mx-2"></div>
        {isLoggedIn ? (
          <>
            <button
              className="border py-2 px-4 rounded-md"
              onClick={() => dispatch(signOut())}
            >
              Log out
            </button>
            <div className="mx-2"></div>
          </>
        ) : (
          <></>
        )}
        <button
          className="border py-2 px-4 rounded-md"
          onClick={handleToggleDrawer}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
