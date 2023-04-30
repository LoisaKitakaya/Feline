import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal/Modal";
import NewBudget from "../components/budget/NewBudget";
import AllBudgets from "../components/budget/AllBudgets";

const Budgets = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const checkAuth = (isLoggedIn) => {
    if (isLoggedIn) {
      return;
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    checkAuth(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="page">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-semibold">Budgets</h4>
          <button
            className="rounded-md border py-2 px-4"
            onClick={() => setIsVisible(true)}
          >
            <i className="bi bi-plus-lg"></i> New Budget
          </button>
        </div>
        <p className="text-lg font-thin">
          A collection of all your budgets
        </p>
      </div>
      <AllBudgets />

      {/* modals */}
      <Modal
        visible={isVisible}
        setVisible={setIsVisible}
        title={"Create new Budget"}
        element={<NewBudget />}
      />
      {/* modals */}
    </div>
  );
};

export default Budgets;
