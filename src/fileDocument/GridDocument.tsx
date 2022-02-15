import React, { FC, useState } from "react";
import { DataGrid, IDataGrid } from "axui-datagrid";

const DatagridExample = () => {
  const [width, setWidth] = useState(1320);
  const [height, setHeight] = useState(800);

  const columns = [
    {
      key: "0",
      width: 60,
      label: "확장자",
      align: "center",
      formatter: function (args: any) {
        // console.log(args);
        return " * " + args.value;
      },
    },
    {
      key: "1",
      width: 500,
      label: "문서제목",
      align: "center",
      formatter: "html",
    },
    { key: "2", label: "리비전", align: "center", formatter: "text" },
    { key: "3", label: "등록자", align: "center", formatter: "text" },
    { key: "4", label: "등록일", align: "center", formatter: "date" },
    { key: "5", label: "수정자", align: "center", formatter: "text" },
    { key: "6", label: "수정일", align: "center", formatter: "date" },
    { key: "7", label: "다운로드", align: "center", formatter: "text" },
    { key: "8", label: "상세정보", align: "center", formatter: "text" },
  ];

  const data = [
    {
      value: [
        "JPG",
        "sample.JPG",
        "1",
        "시스템 관리자",
        "2022-02-05",
        "시스템 관리자",
        "2022-02-05",
      ],
    },
    {
      value: [
        "EXCEL",
        "sample.EXCEL",
        "2",
        "시스템 관리자",
        "2022-02-05",
        "시스템 관리자",
        "2022-02-05",
      ],
    },
    {
      value: [
        "TXT",
        "sample.TXT",
        "1",
        "시스템 관리자",
        "2022-02-05",
        "시스템 관리자",
        "2022-02-05",
      ],
    },
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

export default DatagridExample;
