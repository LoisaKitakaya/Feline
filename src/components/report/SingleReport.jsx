import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReportDocument from "./ReportDocument";
import { GET_REPORT } from "../../assets/schema";
import ButtonSpinner from "../spinner/ButtonSpinner";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ComponentSpinner from "../spinner/ComponentSpinner";
import { setNewNotification } from "../../redux/reducers/toast";
import ReportTicker from "./ReportTicker";

const SingleReport = () => {
  const { statement_uid } = useParams();

  const dispatch = useDispatch();

  const { loading, data, error } = useQuery(GET_REPORT, {
    variables: { statement_uid: statement_uid },
  });

  if (loading) return <ComponentSpinner />;

  if (error) {
    dispatch(
      setNewNotification({ type: "error", message: `${error.message}` })
    );
  }

  return (
    <>
      {data && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold mr-4">
              Statement UID: {statement_uid}
            </h4>
            <PDFDownloadLink
              className="rounded-md border py-2 px-4"
              document={<ReportDocument reportData={data.getReport} />}
              fileName="cash flow summary report"
            >
              {({ loading }) =>
                loading ? (
                  <>
                    <ButtonSpinner />
                  </>
                ) : (
                  <>
                    <i className="bi bi-download"></i> Download
                  </>
                )
              }
            </PDFDownloadLink>
          </div>
          <ReportDocument reportData={data.getReport} />
          <ReportTicker reportData={data.getReport} />
        </>
      )}
    </>
  );
};

export default SingleReport;
