import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SingleReport from "../components/report/SingleReport";

const Report = () => {
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
      <SingleReport />
    </div>
  );
};

export default Report;
