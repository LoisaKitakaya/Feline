import moment from "moment";
import { useState } from "react";
import Modal from "../modal/Modal";
import ReportList from "./ReportList";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { GET_ALL_ACCOUNTS } from "../../assets/schema";
import ComponentSpinner from "../spinner/ComponentSpinner";

const AccountReports = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const [accountId, setAccountId] = useState(null);

  const { loading, data, error } = useQuery(GET_ALL_ACCOUNTS);

  if (loading) return <ComponentSpinner />;

  if (error) {
    dispatch(
      setNewNotification({ type: "error", message: `${error.message}` })
    );
  }

  return (
    <div>
      {data.getAllAccounts.length !== 0 ? (
        <>
          {data.getAllAccounts.map((account, index) => {
            const accountElement = (
              <div
                key={account.id}
                className="mb-4 p-4 rounded-md border hover:cursor-pointer"
                onClick={() => {
                  setIsVisible(true);
                  setAccountId(account.id);
                }}
              >
                <h6 className="text-xl font-semibold mb-4">
                  {index + 1}. {account.account_name}
                </h6>
                <div className="flex justify-start items-center">
                  <span className="text-sm">
                    <span className="font-semibold">Type:</span>{" "}
                    {account.account_type}
                  </span>
                  <div className="mx-2"></div>
                  <span className="text-sm">
                    <span className="font-semibold">Currency:</span>{" "}
                    {account.currency_code}
                  </span>
                  <div className="mx-2"></div>
                  <span className="text-sm">
                    <span className="font-semibold">Balance:</span>{" "}
                    {account.account_balance.toLocaleString()}
                  </span>
                  <div className="mx-2"></div>
                  <span className="text-sm">
                    <span className="font-semibold">Created:</span>{" "}
                    {moment.unix(account.created_at).fromNow()}
                  </span>
                </div>
              </div>
            );

            return accountElement;
          })}

          {/* modals */}
          <Modal
            visible={isVisible}
            setVisible={setIsVisible}
            title={"Reports on this account"}
            element={<ReportList account_id={accountId} />}
          />
          {/* modals */}
        </>
      ) : (
        <>
          <div className="my-20 text-center">
            <h4 className="font-semibold text-2xl">
              You have not created any accounts yet.
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountReports;
