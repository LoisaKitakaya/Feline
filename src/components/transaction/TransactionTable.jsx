import moment from "moment";
import { useMemo } from "react";
import Tables from "../table/Tables";
import SelectColumnFilter from "../table/SelectColumnFilter";
import NumberRangeColumnFilter from "../table/NumberRangeColumnFilter";

const filterGreaterThan = (rows, id, filterValue) => {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
};

filterGreaterThan.autoRemove = (val) => typeof val !== "number";

const TransactionTable = ({ tableData, setSelectedRow }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Transaction date",
        accessor: "transaction_date",
        filter: "fuzzyText",
      },
      {
        Header: "Transaction type",
        accessor: "transaction_type",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Transaction amount",
        accessor: "transaction_amount",
        Filter: NumberRangeColumnFilter,
        filter: "between",
      },
      {
        Header: "Currency",
        accessor: "currency_code",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Description",
        accessor: "description",
        filter: "fuzzyText",
      },
      {
        Header: "Category",
        accessor: "transaction_category",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Sub-category",
        accessor: "transaction_sub_category",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Created on",
        accessor: "created_at",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Last modified",
        accessor: "updated_at",
        Filter: SelectColumnFilter,
        filter: "includes",
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
          transaction_amount: transaction.transaction_amount,
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
      {tableData.length !== 0 ? (
        <Tables columns={columns} data={data} setSelectedRow={setSelectedRow} />
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
