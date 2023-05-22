import moment from "moment";
import { useMemo } from "react";
import Tables from "../table/Tables";
import SliderColumnFilter from "../table/SliderColumnFilter";
import SelectColumnFilter from "../table/SelectColumnFilter";
import NumberRangeColumnFilter from "../table/NumberRangeColumnFilter";

const filterGreaterThan = (rows, id, filterValue) => {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
};

filterGreaterThan.autoRemove = (val) => typeof val !== "number";

const InventoryTable = ({ tableData, setSelectedRow }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Product name",
        accessor: "name",
        filter: "fuzzyText",
      },
      {
        Header: "Product description",
        accessor: "description",
        filter: "fuzzyText",
      },
      {
        Header: "Category",
        accessor: "product_category",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Sub-category",
        accessor: "product_sub_category",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Buying price",
        accessor: "buying_price",
        Filter: NumberRangeColumnFilter,
        filter: "between",
      },
      {
        Header: "Selling price",
        accessor: "selling_price",
        Filter: NumberRangeColumnFilter,
        filter: "between",
      },
      {
        Header: "Current stock level",
        accessor: "current_stock_level",
        Filter: SliderColumnFilter,
        filter: "equals",
      },
      {
        Header: "Units sold",
        accessor: "units_sold",
        Filter: SliderColumnFilter,
        filter: "equals",
      },
      {
        Header: "Reorder level",
        accessor: "reorder_level",
        Filter: SliderColumnFilter,
        filter: "equals",
      },
      {
        Header: "Profit generated",
        accessor: "profit_generated",
        Filter: NumberRangeColumnFilter,
        filter: "between",
      },
      {
        Header: "Supplier name",
        accessor: "supplier_name",
        filter: "fuzzyText",
      },
      {
        Header: "Supplier phone number",
        accessor: "supplier_phone_number",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Supplier email",
        accessor: "supplier_email",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Created on",
        accessor: "created_at",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Last modified",
        accessor: "updated_at",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      tableData.map((product) => {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          product_category: product.category.category_name,
          product_sub_category: product.sub_category.category_name,
          buying_price: product.buying_price,
          selling_price: product.selling_price,
          current_stock_level: product.current_stock_level,
          units_sold: product.units_sold,
          reorder_level: product.reorder_level,
          profit_generated: product.profit_generated,
          supplier_name: product.supplier_name,
          supplier_phone_number: product.supplier_phone_number,
          supplier_email: product.supplier_email,
          created_at: moment.unix(product.created_at).fromNow(),
          updated_at: moment.unix(product.updated_at).fromNow(),
        };
      }),
    [tableData]
  );

  return (
    <>
      {tableData.length !== 0 ? (
        <Tables columns={columns} data={data} setSelectedRow={setSelectedRow} />
      ) : (
        <>
          <div className="my-20 text-center">
            <h4 className="font-semibold text-2xl">
              You have not added any products to your inventory yet.
            </h4>
          </div>
        </>
      )}
    </>
  );
};

export default InventoryTable;
