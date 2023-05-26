import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { VERIFY_OTP } from "../assets/schema";
import { useNavigate } from "react-router-dom";
import {
  setNewNotification,
  clearOldNotification,
} from "../redux/reducers/toast";
import ButtonSpinner from "../components/spinner/ButtonSpinner";

const Confirm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [verifyOTP, { loading, data, error }] = useMutation(VERIFY_OTP);

  if (data) {
    dispatch(
      setNewNotification({ type: "success", message: "Login successful" })
    );
    navigate("/");
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

            verifyOTP({
              variables: {
                otp: e.target.otp.value,
              },
            });

            e.target.reset();
          }}
        >
          <p className="text-lg text-center mb-2">
            Confirm that it is you.
          </p>
          <div className="mb-4">
            <label className="block">
              <span>OTP code</span>
              <input
                type="text"
                name="otp"
                className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full rounded-md border py-2 px-4"
            >
              {loading ? <ButtonSpinner /> : <span>Submit</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Confirm;
