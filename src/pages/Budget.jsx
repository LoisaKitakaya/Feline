import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SingleBudget from "../components/budget/SingleBudget";

const Budget = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const canProceed = useSelector((state) => state.security.canProceed);

  const twoFactorAuthentication = useSelector(
    (state) => state.security.twoFactorAuthentication
  );

  const oneTimePassword = useSelector(
    (state) => state.security.oneTimePassword
  );

  const checkAuth = () => {
    if (isLoggedIn) {
      return;
    } else {
      navigate("/signin");
    }
  };

  const checkAuth2 = () => {
    if (isLoggedIn && canProceed) {
      return;
    } else {
      navigate("/signin");
    }
  };

  const handleAuth = () => {
    if (twoFactorAuthentication && oneTimePassword) {
      checkAuth2();
    } else {
      checkAuth();
    }
  };

  useEffect(() => {
    handleAuth();
  }, [isLoggedIn]);

  return (
    <div className="page">
      <SingleBudget />
    </div>
  );
};

export default Budget;
