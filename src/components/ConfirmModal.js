import { Button, Modal } from "react-bootstrap";
import { React } from "react";

export default function ConfirmModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>삭제확인</Modal.Title>
      </Modal.Header>
      <Modal.Body>정말로 삭제하시겠습니까?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          확인
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
