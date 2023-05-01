import moment from "moment";
import { useState } from "react";
import { useTable } from "react-table";

const Tables = ({ tableData }) => {
  const columns = [
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
      Header: "Transaction date",
      accessor: "transaction_date",
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
      Header: "Created on",
      accessor: "created_at",
    },
    {
      Header: "Last modified",
      accessor: "updated_at",
    },
  ];

  return (
    <>
      {tableData.length !== 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </>
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

export default Tables;
