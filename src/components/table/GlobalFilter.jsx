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
    <div className="flex justify-start items-center">
      <span>Search:</span>
      <div className="mx-2"></div>
      <input
        value={value || ""}
        className="block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-4"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
        }}
      />
    </div>
  );
};

export default GlobalFilter;
