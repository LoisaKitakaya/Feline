import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "../components/modal/Modal";
import { useNavigate } from "react-router-dom";
import GenerateReport from "../components/report/GenerateReport";
import AccountReports from "../components/report/AccountReports";

const Reports = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const checkAuth = (isLoggedIn) => {
    if (isLoggedIn) {
      return;
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    checkAuth(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="page">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-semibold">Reports</h4>
          <button
            className="rounded-md border py-2 px-4"
            onClick={() => setIsVisible(true)}
          >
            <i className="bi bi-plus-lg"></i> Generate Report
          </button>
        </div>
        <p className="text-lg font-thin">
          A collection of all your Cash Flow Statements (CFS) -{" "}
          <span className="italic">Grouped by available accounts</span>
        </p>
      </div>
      <AccountReports />

      {/* modals */}
      <Modal
        visible={isVisible}
        setVisible={setIsVisible}
        title={"Generate report"}
        element={<GenerateReport />}
      />
      {/* modals */}
    </div>
  );
};

export default Reports;
