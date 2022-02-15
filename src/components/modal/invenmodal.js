import React, { useState } from "react";
import InventoryModalPop from "./invenmodalpop";
import InventoryInput from "./inventoryinput";
// import axios from "axios";

function InventoryModal(props) {
  const [modalOpen, setModalOpen] = useState(false); //모달오픈
  // const [detailInfo, setDetailInfo] = useState([]); //axios 로그조회

  // 모달 열고 닫기할때 로그 불러오기
  const openModal = async () => {
    // await axios
    // .get(API_URL + "/log/" + props.state.id)
    // .then((response) => {
    //   setDetailInfo(response.data);
    // })
    // .catch();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <React.Fragment>
        {/* {detailInfo && ( */}
        <button className="btn-shape btn-color" onClick={openModal}>
          등록
        </button>
        {/* )} */}
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
