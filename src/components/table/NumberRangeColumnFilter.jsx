import { useMemo } from "react";

const NumberRangeColumnFilter = ({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) => {
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <div className="flex justify-center items-center">
      <input
        value={filterValue[0] || ""}
        className="block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type="number"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            val ? parseInt(val, 10) : undefined,
            old[1],
          ]);
        }}
        placeholder={`Min (${min})`}
        style={{
          minWidth: "120px",
          marginRight: "0.5rem",
        }}
      />
      <input
        value={filterValue[1] || ""}
        className="block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type="number"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            old[0],
            val ? parseInt(val, 10) : undefined,
          ]);
        }}
        placeholder={`Max (${max})`}
        style={{
          minWidth: "120px",
          marginLeft: "0.5rem",
        }}
      />
    </div>
  );
};

export default NumberRangeColumnFilter;
