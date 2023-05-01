import { useQuery } from "@apollo/client";
import { TRANSACTION_TYPES } from "../../assets/schema";

const TransactionType = ({ setTypeData }) => {
  const { data, error } = useQuery(TRANSACTION_TYPES);

  if (data) {
    setTypeData(data.getTransactionType);
  }

  if (error) {
    console.log(`${error.message}`);
  }

  return null;
};

export default TransactionType;
