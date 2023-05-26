import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Security from "../components/profile/Security";
import UserProfile from "../components/profile/UserProfile";

const Profile = () => {
  const navigate = useNavigate();

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
        <h4 className="text-2xl font-semibold">Profile</h4>
        <p className="text-lg font-thin">
          Manage your user profile and security settings
        </p>
      </div>
      <UserProfile />
      <Security />
    </div>
  );
};

export default Profile;
