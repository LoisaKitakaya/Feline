const PayablesVsReceivablesTotals = ({
  totalReceivables,
  totalPayables,
  totalBalance,
}) => {
  return (
    <div
      className="border rounded-md p-4"
      style={{
        width: "100%",
      }}
    >
      <div className="flex items-center flex-col pt-56">
        <span className="font-semibold text-2xl mb-2">
          Total Account Balance: {totalBalance}
        </span>
        <br />
        <span className=" text-xl mb-2">
          Total Receivable: {totalReceivables}{" "}
          <i className="bi bi-caret-up-fill text-green-600 text-lg"></i>
        </span>
        <span className=" text-xl">
          Total Payable: {totalPayables}{" "}
          <i className="bi bi-caret-down-fill text-red-600 text-lg"></i>
        </span>
      </div>
    </div>
  );
};

export default PayablesVsReceivablesTotals;
