import moment from "moment";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import UpdateAccount from "./UpdateAccount";
import DeleteAccount from "./DeleteAccount";
import { useParams } from "react-router-dom";
import { GET_ACCOUNT } from "../../assets/schema";
import ComponentSpinner from "../spinner/ComponentSpinner";
import { setNewNotification } from "../../redux/reducers/toast";

const SingleAccount = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [showUpdate, setShowUpdate] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { loading, data, error } = useQuery(GET_ACCOUNT, {
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
              {data.getAccount.account_name}
            </h4>
            <div className="flex justify-between items-center">
              <button
                className="rounded-md border py-2 px-4"
                onClick={() => setShowUpdate(true)}
              >
                <i className="bi bi-pencil"></i> Update Account
              </button>
              <div className="mx-2"></div>
              <button
                className="rounded-md border py-2 px-4"
                onClick={() => setConfirmDelete(true)}
              >
                <i className="bi bi-trash"></i> Delete Account
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-end items-center mb-4">
              <p className="text-lg">
                <span className="font-semibold">Currency code:</span>{" "}
                <span>{data.getAccount.currency_code}</span>
              </p>
              <div className="mx-4"></div>
              <p className="text-lg">
                <span className="font-semibold">Account balance:</span>{" "}
                <span>{data.getAccount.account_balance.toLocaleString()}</span>
              </p>
            </div>
            <div className="flex justify-start items-center mb-4">
              <p className="text-lg">
                <span className="font-semibold">Account type:</span>{" "}
                <span>{data.getAccount.account_type}</span>
              </p>
              <div className="mx-4"></div>
              <p className="text-lg">
                <span className="font-semibold">Created:</span>{" "}
                <span>{moment.unix(data.getAccount.created_at).fromNow()}</span>
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          {/* transactions */}
          {/* transactions */}

          {/* modals */}
          <Modal
            visible={showUpdate}
            setVisible={setShowUpdate}
            title={"Update Account"}
            element={<UpdateAccount />}
          />
          <Modal
            visible={confirmDelete}
            setVisible={setConfirmDelete}
            title={"Delete Account"}
            element={<DeleteAccount />}
          />
          {/* modals */}
        </>
      )}
    </>
  );
};

export default SingleAccount;
