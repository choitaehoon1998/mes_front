import React from "react";
import { DataGrid, IDataGrid } from "axui-datagrid";
import "../../../node_modules/axui-datagrid/style.css";

export default function InvenGrid() {
  const columns = [
    {
      align: "center",
      columns: [
        { key: "0", width: 100, label: "프로젝트 넘버", align: "center" },
        {
          key: "1",
          width: 110,
          label: "프로젝트명(호선)",
        },
        { key: "2", label: "품번", align: "center", formatter: "html" },
        { key: "3", label: "수량", align: "center", formatter: "date" },
        { key: "4", label: "단가", align: "center", formatter: "money" },
        { key: "5", label: "판가", align: "center", formatter: "money" },
      ],
    },
  ];

  const data = [];

  return (
    <DataGrid
      width={{ width: "100%" }}
      height={{ height: "300px" }}
      style={{ fontSize: "12px" }}
      columns={columns}
      data={data}
      dataLength={data.length}
      options={{ frozenColumnIndex: 6 }}
    />
  );
}
