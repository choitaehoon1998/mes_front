import React, { useState } from "react";
import { DataGrid, IDataGrid } from "axui-datagrid";
import "../../../node_modules/axui-datagrid/style.css";

export default function InvenGrid() {
  const [width, setWidth] = useState(1600);
  const [height, setHeight] = useState(250);

  const columns = [
    { key: "0", width: 100, label: "NO", align: "center" },
    {
      key: "1",
      width: 110,
      label: "품목",
      align: "center",
    },
    { key: "2", label: "품목코드", align: "center", formatter: "number" },
    { key: "3", label: "수량", align: "center", formatter: "numder" },
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
    <DataGrid
      width={width}
      height={height}
      style={{ fontSize: "12px" }}
      columns={columns}
      data={data}
      dataLength={data.length}
    />
  );
}
