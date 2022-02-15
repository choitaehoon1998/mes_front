import * as React from "react";
import "../components/css/invenstyle.css";

import InventoryModal from "../components/modal/invenmodal";
import InvenGrid from "../components/dataGrid/invenGrid";
import SearchForm from "../components/SearchForm";

export default function Inventory() {
  return (
    <div className="page-layout">
      <div className="inven-content">
        <div className="page-header">
          <h3 className="header-title">자원관리</h3>
        </div>
        <main className="main-contet">
          <div className="card content-box">
            <div className="content-seach">
              <SearchForm btnname="검색" title="통합검색 :"></SearchForm>
            </div>
          </div>
          <div className="card content-box">
            <div className="button-sec">
              <InventoryModal></InventoryModal>
            </div>
            <div className="data-sec">
              <InvenGrid></InvenGrid>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
