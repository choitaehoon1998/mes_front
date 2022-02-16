import React, { useState } from "react";
import InventoryModalPop from "./invenmodalpop";
import InventoryInput from "./inventoryinput";

function InventoryModal(props) {
  const [modalOpen, setModalOpen] = useState(false); //모달오픈

  // 모달 열고 닫기할때 로그 불러오기
  const openModal = async () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <React.Fragment>
        <button className="btn-shape btn-color" onClick={openModal}>
          등록
        </button>
        <button className="btn-shape btn-color-1">삭제</button>

        <InventoryModalPop
          open={modalOpen}
          close={closeModal}
          header="재고등록"
          main={
            <div className="modal-content">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>품목</label>
                    </td>
                    <td>
                      <InventoryInput />
                    </td>
                    <td>
                      <label>품목코드</label>
                    </td>
                    <td>
                      <InventoryInput />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>수량</label>
                    </td>
                    <td>
                      <InventoryInput />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        ></InventoryModalPop>
      </React.Fragment>
    </>
  );
}

export default InventoryModal;
