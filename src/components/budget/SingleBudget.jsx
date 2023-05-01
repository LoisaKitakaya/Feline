import moment from "moment";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import UpdateBudget from "./UpdateBudget";
import DeleteBudget from "./DeleteBudget";
import { useParams } from "react-router-dom";
import { GET_BUDGET } from "../../assets/schema";
import ComponentSpinner from "../spinner/ComponentSpinner";
import { setNewNotification } from "../../redux/reducers/toast";

const SingleBudget = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [showUpdate, setShowUpdate] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { loading, data, error } = useQuery(GET_BUDGET, {
    variables: { id: id },
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
            <h4 className="text-2xl font-semibold">
              {data.getBudget.budget_name}
            </h4>
            <div className="flex justify-between items-center">
              <button
                className="rounded-md border py-2 px-4"
                onClick={() => setShowUpdate(true)}
              >
                <i className="bi bi-pencil"></i> Update Budget
              </button>
              <div className="mx-2"></div>
              <button
                className="rounded-md border py-2 px-4"
                onClick={() => setConfirmDelete(true)}
              >
                <i className="bi bi-trash"></i> Delete Budget
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center mb-4">
              <p className="text-lg">
                <span className="font-semibold">Status:</span>{" "}
                <span>
                  {data.getBudget.budget_is_active ? "active" : "inactive"}
                </span>
              </p>
              <div className="mx-4"></div>
              <p className="text-lg">
                <span className="font-semibold">Amount:</span>{" "}
                <span>{data.getBudget.budget_amount.toLocaleString()}</span>
              </p>
            </div>
            <div className="flex justify-start items-center mb-4">
              <p className="text-lg">
                <span className="font-semibold">Created:</span>{" "}
                <span>{moment.unix(data.getBudget.created_at).fromNow()}</span>
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between items-center">
            <p className="text-lg mb-4">
              <span className="font-semibold">Account:</span>{" "}
              <span>{data.getBudget.account.account_name}</span>
            </p>

            <div className="flex justify-start items-center mb-4">
              <p className="text-lg">
                <span className="font-semibold">Category:</span>{" "}
                <span>{data.getBudget.category.category_name}</span>
              </p>
              <div className="mx-4"></div>
              <p className="text-lg">
                <span className="font-semibold">Sub category:</span>{" "}
                <span>{data.getBudget.sub_category.category_name}</span>
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="mb-4">
            <p className="text-lg">{data.getBudget.budget_description}</p>
          </div>
          {/* charts */}
          {/* charts */}

          {/* modals */}
          <Modal
            visible={showUpdate}
            setVisible={setShowUpdate}
            title={"Update Account"}
            element={<UpdateBudget id={data.getBudget.id} />}
          />
          <Modal
            visible={confirmDelete}
            setVisible={setConfirmDelete}
            title={"Delete Account"}
            element={
              <DeleteBudget
                id={data.getBudget.id}
                budget_name={data.getBudget.budget_name}
              />
            }
          />
          {/* modals */}
        </>
      )}
    </>
  );
};

export default SingleBudget;
