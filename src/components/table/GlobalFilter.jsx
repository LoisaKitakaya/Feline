import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import regeneratorRuntime from "regenerator-runtime";

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
};

export default GlobalFilter;
