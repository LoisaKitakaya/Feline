import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import ButtonSpinner from "../spinner/ButtonSpinner";
import { CREATE_BUDGET, GET_ALL_BUDGETS } from "../../assets/schema";
import {
  setNewNotification,
  clearOldNotification,
} from "../../redux/reducers/toast";

const NewBudget = () => {
  const dispatch = useDispatch();

  const [createBudget, { loading, data, error }] = useMutation(CREATE_BUDGET, {
    refetchQueries: [{ query: GET_ALL_BUDGETS }],
  });

  if (data) {
    dispatch(
      setNewNotification({
        type: "success",
        message: "Account created successfully",
      })
    );
  }

  if (error) {
    dispatch(
      setNewNotification({ type: "error", message: `${error.message}` })
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(clearOldNotification());

        createBudget({
          variables: {
            account_id: e.target.account_id.value,
            budget_name: e.target.budget_name.value,
            budget_description: e.target.budget_description.value,
            budget_amount: parseFloat(e.target.budget_amount.value),
            category: e.target.category.value,
            sub_category: e.target.sub_category.value,
          },
        });

        e.target.reset();
      }}
    >
      <div className="mb-4">
        <label className="block">
          <span>Account</span>
          <select
            name="account_id"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value=""></option>
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          <span>Budget title</span>
          <input
            type="text"
            name="budget_name"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          <span>Budget description</span>
          <textarea
            cols="30"
            rows="10"
            name="budget_description"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          <span>Budget amount</span>
          <input
            type="text"
            name="budget_amount"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          <span>Category</span>
          <select
            name="currency_code"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value=""></option>
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          <span>Sub category</span>
          <select
            name="sub_category"
            className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value=""></option>
          </select>
        </label>
      </div>
      <div className="mt-8 mb-4">
        <button type="submit" className="w-full rounded-md border py-2 px-4">
          {loading ? <ButtonSpinner /> : <span>Submit</span>}
        </button>
      </div>
      <hr className="mb-4" />
      <p className="mb-4">Tips to consider:</p>
      <ul>
        <li className="mb-2">
          <i className="bi bi-arrow-right-short"></i> Lorem ipsum dolor sit
          amet.
        </li>
        <li className="mb-2">
          <i className="bi bi-arrow-right-short"></i> Lorem ipsum dolor sit
          amet.
        </li>
        <li className="mb-2">
          <i className="bi bi-arrow-right-short"></i> Lorem ipsum dolor sit
          amet.
        </li>
        <li className="mb-2">
          <i className="bi bi-arrow-right-short"></i> Lorem ipsum dolor sit
          amet.
        </li>
      </ul>
    </form>
  );
};

export default NewBudget;
