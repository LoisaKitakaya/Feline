import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_REPORT } from "../../assets/schema";
import ComponentSpinner from "../spinner/ComponentSpinner";
import { setNewNotification } from "../../redux/reducers/toast";

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
            <button className="rounded-md border py-2 px-4">
              <i className="bi bi-download"></i> Download
            </button>
          </div>
          {data.getReport.map((statement, index) => {
            const records = (
              <div className="py-4 border-b" key={statement.id}>
                <p>
                  {index + 1} . Activity: {statement.item.name} | Total cost:{" "}
                  {statement.item.is_income
                    ? statement.amount
                    : `-${statement.amount}`}
                </p>
              </div>
            );

            return records;
          })}
        </>
      )}
    </>
  );
};

export default SingleReport;
