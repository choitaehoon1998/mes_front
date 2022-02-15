import { React } from "react";
import SearchForm from "../modules/SearchForm";
import ContentForm from "../modules/ContentForm";
import ButtonForm from "../modules/ButtonForm";

import "bootstrap/dist/css/bootstrap.min.css";

export default function FinanceManage() {
  return (
    <div className="app-content" style={{ margin: "10px" }}>
      <div className="app-page-header" style={{ marginTop: "10px" }}>
        <h3 style={{ textAlign: "left" }}>재무관리</h3>
      </div>
      <main className={"ant-layout-content"}>
        <SearchForm></SearchForm>
        <ButtonForm></ButtonForm>
        <ContentForm></ContentForm>
      </main>
    </div>
  );
}
