import { React, useState } from "react";
import { Button } from "react-bootstrap";
import ConfirmModal from "../components/ConfirmModal";
import EditModal from "../components/EditModal";
export default function ButtonForm() {
  const [showSmallModal, setShowSmallModal] = useState(false);
  const [showBigModal, setShowBigModal] = useState(false);

  const handleClose1 = () => setShowBigModal(false);
  const handleOpen1 = () => setShowBigModal(true);

  const handleClose = () => setShowSmallModal(false);
  const handleOpen = () => setShowSmallModal(true);

  return (
    <div className="ant-card ant-card-bordered">
      <div className="ant-card-body" style={{ textAlign: "right" }}>
        <Button
          variant="primary"
          onClick={() => {
            handleOpen1();
          }}
        >
          등록
        </Button>
        <Button
          variant="primary"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            handleOpen1();
          }}
        >
          수정
        </Button>
        <EditModal show={showBigModal} handleClose={handleClose1}></EditModal>

        <Button
          variant="primary"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            handleOpen();
          }}
        >
          삭제
        </Button>
        <ConfirmModal show={showSmallModal} handleClose={handleClose} />
      </div>
    </div>
  );
}
