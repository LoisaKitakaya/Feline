import moment from "moment";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { GET_ALL_REPORTS } from "../../assets/schema";
import ComponentSpinner from "../spinner/ComponentSpinner";
import { Link } from "react-router-dom";

const ReportList = ({ account_id }) => {
  const dispatch = useDispatch();

  const { loading, data, error } = useQuery(GET_ALL_REPORTS, {
    variables: { account_id: account_id },
  });

  if (loading) return <ComponentSpinner />;

  if (error) {
    dispatch(
      setNewNotification({ type: "error", message: `${error.message}` })
    );
  }

  return (
    <>
      {data.getAllReports.length !== 0 ? (
        <>
          {data.getAllReports.map((statement) => {
            const accountStatement = (
              <Link
                to={`/report/${statement.statement_uid}`}
                key={statement.id}
              >
                <div className="border rounded-md p-4 mb-4">
                  <span>Statement UID: {statement.statement_uid}</span>
                  <hr />
                  <br />
                  <span>
                    Reports for dates between:
                    <br />
                    <br />
                    {moment
                      .unix(statement.begin_date)
                      .format("MMMM Do YYYY, h:mm:ss a")}{" "}
                    &{" "}
                    {moment
                      .unix(statement.end_date)
                      .format("MMMM Do YYYY, h:mm:ss a")}
                  </span>
                </div>
              </Link>
            );

            return accountStatement;
          })}
        </>
      ) : (
        <>
          <div className="my-8 text-center">
            <h4 className="font-semibold text-2xl">
              You have not generated any reports on this account yet.
            </h4>
          </div>
        </>
      )}
    </>
  );
};

export default ReportList;
