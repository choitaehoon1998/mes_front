import { React, useState } from "react";
import { DataGrid, IDataGrid } from "axui-datagrid";
import "../../node_modules/axui-datagrid/style.css";
export default function ContentForm() {
  const [width, setWidth] = useState(2500);
  const [height, setHeight] = useState(250);

  const columns = [
    {
      label: "프로젝트 정보",
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
    {
      label: "원가정보",
      align: "center",
      columns: [
        { key: "6", label: "원재료", align: "center", formatter: "money" },
        { key: "7", label: "부자재", align: "center", formatter: "money" },
        { key: "8", label: "외주가공", align: "center", formatter: "money" },
        { key: "9", label: "목금형", align: "center", formatter: "money" },
        { key: "10", label: "사급품", align: "center", formatter: "money" },
        { key: "11", label: "비용", align: "center", formatter: "money" },
        { key: "12", label: "합", align: "center", formatter: "money" },
        { key: "13", label: "%", align: "center", formatter: "money" },
      ],
    },
    {
      label: "협력사",
      align: "center",
      columns: [
        { key: "14", label: "경성정밀", align: "center", formatter: "money" },
        { key: "15", label: "JK정밀", align: "center", formatter: "money" },
        { key: "16", label: "SJ엠텍", align: "center", formatter: "money" },
        { key: "17", label: "성원테크", align: "center", formatter: "money" },
        { key: "18", label: "성문테크", align: "center", formatter: "money" },
        { key: "19", label: "서우산업", align: "center", formatter: "money" },
        { key: "20", label: "성실도장", align: "center", formatter: "money" },
        { key: "21", label: "합", align: "center", formatter: "money" },
        { key: "22", label: "%", align: "center", formatter: "money" },
      ],
    },

    { key: "23", label: "원가합", align: "center", formatter: "money" },
    { key: "24", label: "손익", align: "center", formatter: "money" },
    { key: "25", label: "%", align: "center", formatter: "money" },
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
    <div className="ant-card ant-card-bordered">
      <DataGrid
        width={width}
        height={height}
        style={{ fontSize: "12px" }}
        columns={columns}
        data={data}
        dataLength={data.length}
        options={{ frozenColumnIndex: 6 }}
      />
    </div>
  );
}
