import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ConfModal({ children, show, handleShow, closeFunction }) {
  //   const [show, setShow] = useState(false);

  const handleClose = () => {
    closeFunction(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Wait!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" value="cancel" onClick={(e) => {
            handleShow(e);
            handleClose();
        }}>
          Cancel
        </Button>
        <Button variant="primary" value="confirm" onClick={(e) => {
            handleShow(e);
            handleClose();
        }}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfModal;
