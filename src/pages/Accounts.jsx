import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AllAccounts from "../components/accounts/AllAccounts";

const Accounts = () => {
  const navigate = useNavigate();

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
          <h4 className="text-2xl font-semibold">Accounts</h4>
          <button className="rounded-md border py-2 px-4">
            <i className="bi bi-plus-lg"></i> New Account
          </button>
        </div>
        <p className="text-lg font-thin">
          A collection of all your accounts / businesses
        </p>
      </div>
      <AllAccounts />
    </div>
  );
};

export default Accounts;
