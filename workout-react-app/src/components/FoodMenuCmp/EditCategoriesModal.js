import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import ModalCategories from "./ModalCategories";

function EditCategoriesModal({canEdit, setCanEdit, foodCategories, setFoodCategories} ) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(foodCategories)
  
  


  return (
    <>
      <Button variant="outline-primary" className="ms-auto" onClick={handleShow}>Edit Categories</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Categoies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalCategories canEdit={canEdit} setCanEdit={setCanEdit} foodCategories={foodCategories} setFoodCategories={setFoodCategories}></ModalCategories>

              
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCategoriesModal;
