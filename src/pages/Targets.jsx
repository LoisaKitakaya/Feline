import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal/Modal";
import NewTarget from "../components/target/NewTarget";
import AllTargets from "../components/target/AllTargets";

const Targets = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const checkAuth = () => {
    if (isLoggedIn) {
      return;
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    checkAuth();
  }, [isLoggedIn]);

  return (
    <div className="page">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-semibold">Targets</h4>
          <button
            className="rounded-md border py-2 px-4"
            onClick={() => setIsVisible(true)}
          >
            <i className="bi bi-plus-lg"></i> New Target
          </button>
        </div>
        <p className="text-lg font-thin">A collection of all your targets</p>
      </div>
      <AllTargets />

      {/* modals */}
      <Modal
        visible={isVisible}
        setVisible={setIsVisible}
        title={"Create new Target"}
        element={<NewTarget />}
      />
      {/* modals */}
    </div>
  );
};

export default Targets;
