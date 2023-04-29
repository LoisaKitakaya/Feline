import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="page">
      <div
        className="mx-auto border rounded-md p-4"
        style={{
          width: "40%",
        }}
      >
        <form className="px-8">
          <p className="text-lg text-center mb-2">Sign in to your account</p>
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
          <div className="mb-8">
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
            <button
              type="submit"
              className="w-full rounded-md border py-2 px-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p>
          Don't yet have an account? <Link to="/signup">Sign up here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Signin;
