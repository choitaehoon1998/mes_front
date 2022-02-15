import { React } from "react";
import SearchForm from "../components/SearchForm";
import ContentForm from "../components/ContentForm";
import "../style/theme.css";

export default function FinanceManage() {
  return (
    <div className="app-content">
      <div className="app-page-header">
        <h3 className="mb-0 mr-3 font-weight-semibold">재무관리</h3>
      </div>
      <main className={"ant-layout-content"}>
        <SearchForm></SearchForm>
        <ContentForm></ContentForm>
      </main>
    </div>
  );
}
