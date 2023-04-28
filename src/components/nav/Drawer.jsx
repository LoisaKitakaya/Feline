import { useEffect } from "react";
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
      className="border-l drawer py-4"
      style={{
        width: width,
        display: display,
        position: "fixed",
        right: "0px",
        height: "100%",
      }}
    >
      <div className="mb-2"></div>
      <i class="bi bi-columns-gap text-3xl p-4"></i>
      <div className="mb-10"></div>
      <ul className="flex flex-col justify-center items-center">
        <li></li>
        <li className="my-2"></li>
        <li>
          <a href="">
            <i class="bi bi-android2 text-3xl p-4"></i>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="">
            <i class="bi bi-android2 text-3xl p-4"></i>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="">
            <i class="bi bi-android2 text-3xl p-4"></i>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="">
            <i class="bi bi-android2 text-3xl p-4"></i>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="">
            <i class="bi bi-android2 text-3xl p-4"></i>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="">
            <i class="bi bi-android2 text-3xl p-4"></i>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="">
            <i class="bi bi-android2 text-3xl p-4"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
