import moment from "moment";
import { useMemo } from "react";
import Tables from "../table/Tables";

const TransactionTable = ({ tableData }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Transaction date",
        accessor: "transaction_date",
      },
      {
        Header: "Transaction type",
        accessor: "transaction_type",
      },
      {
        Header: "Transaction amount",
        accessor: "transaction_amount",
      },
      {
        Header: "Currency",
        accessor: "currency_code",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Category",
        accessor: "transaction_category",
      },
      {
        Header: "Sub category",
        accessor: "transaction_sub_category",
      },
      {
        Header: "Created",
        accessor: "created_at",
      },
      {
        Header: "Last modified",
        accessor: "updated_at",
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      tableData.map((transaction) => {
        return {
          id: transaction.id,
          transaction_type: transaction.transaction_type,
          transaction_amount: transaction.transaction_amount.toLocaleString(),
          currency_code: transaction.currency_code,
          description: transaction.description,
          transaction_date: moment
            .unix(transaction.transaction_date)
            .format("MMMM Do YYYY, h:mm:ss a"),
          transaction_category: transaction.category.category_name,
          transaction_sub_category: transaction.sub_category.category_name,
          created_at: moment.unix(transaction.created_at).fromNow(),
          updated_at: moment.unix(transaction.updated_at).fromNow(),
        };
      }),
    [tableData]
  );

  return (
    <>
      {tableData !== 0 ? (
        <Tables columns={columns} data={data} />
      ) : (
        <>
          <div className="my-20 text-center">
            <h4 className="font-semibold text-2xl">
              You have not added any transactions yet.
            </h4>
          </div>
        </>
      )}
    </>
  );
};

export default TransactionTable;
