import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../assets/schema";
import { Link, useNavigate } from "react-router-dom";
import {
  setNewNotification,
  clearOldNotification,
} from "../redux/reducers/toast";

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [createUser, { loading, data, error }] = useMutation(CREATE_USER);

  if (data) {
    dispatch(
      setNewNotification({
        type: "success",
        message: "User created successfully",
      })
    );
    navigate("/signin");
  }

  if (error) {
    dispatch(
      setNewNotification({ type: "error", message: `${error.message}` })
    );
  }

  return (
    <div className="page">
      <div
        className="mx-auto border rounded-md p-4"
        style={{
          width: "40%",
        }}
      >
        <form
          className="px-8"
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(clearOldNotification());

            createUser({
              variables: {
                email: e.target.email.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                workspace_name: e.target.workspace_name.value,
                password: e.target.password.value,
                password2: e.target.password2.value,
              },
            });

            e.target.reset;
          }}
        >
          <p className="text-lg text-center mb-2">Create a new account</p>
          <div className="mb-4">
            <label className="block">
              <span>Email</span>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              <span>First name</span>
              <input
                type="text"
                name="first_name"
                className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              <span>Last name</span>
              <input
                type="text"
                name="last_name"
                className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              <span>Workspace name</span>
              <input
                type="text"
                name="workspace_name"
                className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              <span>Password</span>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              <span>Confirm password</span>
              <input
                type="password"
                name="password2"
                className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                required
                type="checkbox"
                name="t&c"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="mx-1"></span>
              <span>
                I accept the <a href="">terms & conditions</a>
              </span>
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full rounded-md border py-2 px-4"
            >
              {loading ? (
                <div className="flex justify-start items-center mx-auto w-fit">
                  <div className="spinner"></div>
                  <div className="mx-1"></div>
                  <span className="font-extra-thin">Processing...</span>
                </div>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p>
          Already have an account? <Link to="/signin">Sign in here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
