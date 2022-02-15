import React, { useState } from "react";
import "../components/css/invenstyle.css";

import InventoryModal from "../components/modal/invenmodal";
import InvenGrid from "../components/dataGrid/invenGrid";
import SearchForm from "../components/SearchForm";

export default function Inventory() {
  const [modalOpen, setModalOpen] = useState(false); //모달오픈
  const openModal = async () => {
    setModalOpen(true);
  };

  return (
    <div className="page-layout">
      <div className="inven-content">
        <div className="page-header">
          <h3 className="header-title">자원관리</h3>
        </div>
        <main className="main-contet">
          <div className="card content-box">
            <div className="content-seach">
              <SearchForm title="통합검색 :"></SearchForm>
              <SearchForm title="등록일 :"></SearchForm>
              <button className="btn-shape btn-color">검색</button>
            </div>
          </div>
          <div className="card content-box">
            <div className="button-sec">
              <InventoryModal open={modalOpen}></InventoryModal>
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
