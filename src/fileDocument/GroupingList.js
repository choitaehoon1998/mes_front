import React, { FC, useState } from "react";
import { DataGrid, IDataGrid } from "axui-datagrid";

const GroupingList = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(800);

  const columns = [
    { key: "0", width: 60, label: "ID", align: "center" },
    {
      key: "1",
      width: 80,
      label: "Title",
      formatter: function (args) {
        // console.log(args);
        return " * " + args.value;
      },
    },
    { key: "2", label: "Writer", align: "center", formatter: "html" },
    { key: "3", label: "Date", align: "center", formatter: "date" },
    { key: "4", label: "Money", align: "right", formatter: "money" },
  ];

  const data = [
    { value: ["A01", "B01", "C"] },
    { value: ["A02", "B02", "C<b>a</b>"] },
    { value: ["A03", "B03", "C<b>a</b>"] },
    { value: ["A04", "B04", "C<b>a</b>"] },
    { value: ["A05", "B05", "C<b>a</b>"] },
    { value: ["A06", "B06", "C<b>a</b>"] },
    { value: ["A07", "B07", "C<b>a</b>"] },
    { value: ["A08", "B08", "C<b>a</b>"] },
    { value: ["A09", "B09", "C<b>a</b>"] },
    { value: ["A10", "B10", "C<b>a</b>"] },
    { value: ["A11", "B11", "C<b>a</b>"] },
  ];

  return (
    <div style={{ border: "1px solid #d9d9d9", width, height }}>
      <DataGrid
        width={width}
        height={height}
        style={{ fontSize: "12px" }}
        columns={columns}
        data={data}
        dataLength={data.length}
        options={{}}
      />
    </div>
  );
};

export default GroupingList;
