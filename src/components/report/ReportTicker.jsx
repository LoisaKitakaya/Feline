import { useMemo } from "react";

const ReportTicker = ({ reportData }) => {
  const calculateSums = (data) => {
    let incomeSum = 0;
    let nonIncomeSum = 0;

    data.forEach((entry) => {
      if (entry.item.is_income) {
        incomeSum += entry.amount;
      } else {
        nonIncomeSum += entry.amount;
      }
    });

    return [
      {
        amount: incomeSum,
        item: {
          is_income: true,
        },
      },
      {
        amount: nonIncomeSum,
        item: {
          is_income: false,
        },
      },
    ];
  };

  const cashFlowSums = useMemo(() => calculateSums(reportData), [reportData]);

  return (
    <div className="flex justify-center items-center my-8">
      {cashFlowSums.map((flow, index) => {
        const cashFlow = (
          <span key={index} className="mx-2 font-semibold">
            {flow.item.is_income ? "Total inflows:" : "Total outflows:"}{" "}
            {flow.amount}{" "}
            {flow.item.is_income ? (
              <i className="bi bi-caret-up-fill text-green-600 text-lg"></i>
            ) : (
              <i className="bi bi-caret-down-fill text-red-600 text-lg"></i>
            )}
          </span>
        );

        return cashFlow;
      })}
    </div>
  );
};

export default ReportTicker;
