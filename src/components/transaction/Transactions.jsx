import Tables from "./Tables";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import ComponentSpinner from "../spinner/ComponentSpinner";
import { setNewNotification } from "../../redux/reducers/toast";
import { GET_ALL_ACCOUNT_TRANSACTIONS } from "../../assets/schema";

const Transactions = ({ account_id }) => {
  const dispatch = useDispatch();

  const { loading, data, error } = useQuery(GET_ALL_ACCOUNT_TRANSACTIONS, {
    variables: {
      account_id: account_id,
    },
  });

  if (loading) return <ComponentSpinner />;

  if (error) {
    dispatch(
      setNewNotification({ type: "error", message: `${error.message}` })
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold">Account transactions</h4>
        <div className="flex justify-end items-center">
          <button className="rounded-md border py-2 px-4" onClick={() => {}}>
            <i className="bi bi-plus-lg"></i> New Transaction
          </button>
          <div className="mx-2"></div>
          <button className="rounded-md border py-2 px-4" onClick={() => {}}>
            <i className="bi bi-pencil"></i> Update Transaction
          </button>
          <div className="mx-2"></div>
          <button className="rounded-md border py-2 px-4" onClick={() => {}}>
            <i className="bi bi-trash"></i> Delete Transaction
          </button>
        </div>
      </div>
      <Tables tableData={data.getAllTransactions} />
    </>
  );
};

export default Transactions;
