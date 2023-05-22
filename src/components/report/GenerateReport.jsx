import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import ButtonSpinner from "../spinner/ButtonSpinner";
import { GENERATE_REPORT, GET_ALL_REPORTS } from "../../assets/schema";
import {
  setNewNotification,
  clearOldNotification,
} from "../../redux/reducers/toast";
import { useState } from "react";
import AccountList2 from "../recurring/AccountList2";

const GenerateReport = () => {
  const dispatch = useDispatch();

  const [accountId, setAccountId] = useState(null);

  const [generateReport, { loading, data, error }] = useMutation(
    GENERATE_REPORT,
    {
      refetchQueries: [
        { query: GET_ALL_REPORTS, variables: { account_id: accountId } },
      ],
    }
  );

  if (data) {
    dispatch(
      setNewNotification({
        type: "success",
        message: "Report created successfully",
      })
    );
  }

  if (error) {
    dispatch(
      setNewNotification({ type: "error", message: `${error.message}` })
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(clearOldNotification());

        generateReport({
          variables: {
            account_id: e.target.account_id.value,
            begin_date: e.target.begin_date.value,
            end_date: e.target.end_date.value,
          },
        });

        e.target.reset();
      }}
    >
      <AccountList2 setAccountId={setAccountId} />
      <div className="mb-4">
        <label className="block">
          <span>Begin date</span>
          <input
            type="datetime-local"
            name="begin_date"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          <span>End date</span>
          <input
            type="datetime-local"
            name="end_date"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div className="mt-8 mb-4">
        <button type="submit" className="w-full rounded-md border py-2 px-4">
          {loading ? <ButtonSpinner /> : <span>Submit</span>}
        </button>
      </div>
    </form>
  );
};

export default GenerateReport;
