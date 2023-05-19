import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Shelf from "../components/inventory/Shelf";

const Inventory = () => {
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
      <Shelf />
    </div>
  );
};

export default Inventory;
