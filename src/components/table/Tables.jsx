import GlobalFilter from "./GlobalFilter";
import { useMemo } from "react";
import { matchSorter } from "match-sorter";
import IndeterminateCheckbox from "./Checkbox";
import DefaultColumnFilter from "./DefaultColumnFilter";
import {
  useTable,
  usePagination,
  useRowSelect,
  useFilters,
  useGlobalFilter,
} from "react-table";
import { useSelector } from "react-redux";

const fuzzyTextFilterFn = (rows, id, filterValue) => {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
};

fuzzyTextFilterFn.autoRemove = (val) => !val;

const Tables = ({ columns, data }) => {
  const showFilter = useSelector((state) => state.filter.showFilter);

  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const {
    page,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    gotoPage,
    nextPage,
    pageCount,
    canNextPage,
    pageOptions,
    setPageSize,
    headerGroups,
    previousPage,
    canPreviousPage,
    selectedFlatRows,
    prepareRow,
    getTableProps,
    getTableBodyProps,
    state: { pageIndex, pageSize },
  } = tableInstance;

  if (selectedFlatRows.length !== 0) {
    console.log(`${selectedFlatRows.map((d) => d.original.id)}`);
  }

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table {...getTableProps()} className="table-auto">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}{" "}
                    {showFilter ? (
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    ) : (
                      <></>
                    )}
                  </th>
                ))}
              </tr>
            ))}
            {showFilter ? (
              <tr>
                <th
                  colSpan={visibleColumns.length}
                  style={{
                    textAlign: "left",
                  }}
                >
                  <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
                </th>
              </tr>
            ) : (
              <></>
            )}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-start items-center">
          <button
            className="border rounded-md py-1 px-4"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <span className="text-lg">{"<<"}</span>
          </button>
          <div className="mx-2"></div>
          <button
            className="border rounded-md py-1 px-4"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <span className="text-lg">{"<"}</span>
          </button>
          <div className="mx-2"></div>
          <button
            className="border rounded-md py-1 px-4"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <span className="text-lg">{">"}</span>
          </button>
          <div className="mx-2"></div>
          <button
            className="border rounded-md py-1 px-4"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <span className="text-lg">{">>"}</span>
          </button>
          <div className="mx-2"></div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex items-center">
            <span>Go to page:</span>
            <div className="mx-2"></div>
            <input
              type="number"
              defaultValue={pageIndex + 1}
              className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </div>
          <div className="mx-2"></div>
          <div>
            <select
              value={pageSize}
              className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;
