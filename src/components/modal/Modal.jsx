import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLightTheme, setDarkTheme } from "../../redux/reducers/theme";

const Modal = ({ visible, setVisible, title, element }) => {
  const dispatch = useDispatch();

  const checkTheme = () => {
    if (localStorage.getItem("isDark") && localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        dispatch(setDarkTheme());
      } else if (localStorage.getItem("theme") === "light") {
        dispatch(setLightTheme());
      }
    } else {
      dispatch(setLightTheme());
    }
  };

  useEffect(() => checkTheme());

  return (
    <>
      {visible && (
        <div className="modal-backdrop">
          <div
            className="rounded-md border modal px-4 pb-4"
            style={{
              overflowY: "auto",
            }}
          >
            <div className="flex justify-between items-center mb-2 sticky top-0 modal-header">
              <p className="text-lg text-center">{title}</p>
              <button className="p-2" onClick={() => setVisible(false)}>
                <i className="bi bi-x-lg text-xl"></i>
              </button>
            </div>
            {element}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
