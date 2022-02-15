import * as React from "react";
import "../components/css/invenstyle.css";

import InventoryModal from "../components/modal/invenmodal";

export default function Inventory() {
  return (
    <div className="page-layout">
      <div className="inven-content">
        <div className="page-header">
          <h3 className="header-title">자원관리</h3>
        </div>
        <main className="main-contet">
          <div className="ant-card content-box">
            <div className="content-seach"></div>
          </div>
          <div className="ant-card content-box">
            <div className="button-sec">
              <InventoryModal />
            </div>
            <div className="data-sec"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
