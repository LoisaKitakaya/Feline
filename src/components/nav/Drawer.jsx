import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer, closeDrawer } from "../../redux/reducers/drawer";

const Drawer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.drawer.menuWidth);
  const display = useSelector((state) => state.drawer.menuDisplay);

  const checkDrawer = () => {
    if (
      localStorage.getItem("menuWidth") &&
      localStorage.getItem("menuDisplay")
    ) {
      if (
        localStorage.getItem("menuWidth") === "5%" &&
        localStorage.getItem("menuDisplay") === "block"
      ) {
        dispatch(openDrawer());
      } else if (
        localStorage.getItem("menuWidth") === "0" &&
        localStorage.getItem("menuDisplay") === "none"
      ) {
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
    <div
      className="py-4 border-l drawer"
      style={{
        width: width,
        display: display,
        position: "fixed",
        right: "0px",
        height: "100%",
      }}
    >
      <div
        style={{
          marginTop: "0.75rem",
        }}
      ></div>
      <p className="text-center">Menu</p>
      <div className="mb-10"></div>
      <ul className="flex flex-col justify-center items-center">
        <li className="my-2"></li>
        <li>
          <Link to="/" className="tooltip">
            <i className="p-4 text-3xl bi bi-safe"></i>
            <span className="tooltip-text">Accounts</span>
          </Link>
        </li>
        <li className="my-2"></li>
        <li>
          <Link to="/budgets" className="tooltip">
            <i className="p-4 text-3xl bi bi-coin"></i>
            <span className="tooltip-text">Budgets</span>
          </Link>
        </li>
        <li className="my-2"></li>
        <li>
          <Link to="/targets" className="tooltip">
            <i className="p-4 text-3xl bi bi-cash-coin"></i>
            <span className="tooltip-text">Targets</span>
          </Link>
        </li>
        <li className="my-2"></li>
        <li>
          <Link to="/inventory" className="tooltip">
            <i className="p-4 text-3xl bi bi-box-seam"></i>
            <span className="tooltip-text">Inventory</span>
          </Link>
        </li>
        <li className="my-2"></li>
        <li>
          <Link to="/employees" className="tooltip">
            <i className="p-4 text-3xl bi bi-people"></i>
            <span className="tooltip-text">Employees</span>
          </Link>
        </li>
        <li className="my-2"></li>
        <li>
          <Link to="/reports" className="tooltip">
            <i className="p-4 text-3xl bi bi-heart-pulse"></i>
            <span className="tooltip-text">Reports</span>
          </Link>
        </li>
        <li className="my-2"></li>
        <li>
          <Link to="/assistant" className="tooltip">
            <i className="p-4 text-3xl bi bi-robot"></i>
            <span className="tooltip-text">Assistant</span>
          </Link>
        </li>
        <li className="my-2"></li>
        <li>
          <Link to="/profile" className="tooltip">
            <i className="p-4 text-3xl bi bi-wrench-adjustable-circle"></i>
            <span className="tooltip-text">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;