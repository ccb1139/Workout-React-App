import { useState, useEffect } from "react";
import NewFoodMenu from "./NewFoodMenu";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Collapse from 'react-bootstrap/Collapse';
import EditCategoriesModal from "./EditCategoriesModal";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import "../../css/NewFoodMenu.css"

function FoodOffCanvasMenu({fridge, setFridge, foodCategories, setFoodCategories}) {
  const [show, setShow] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => setCanEdit(!canEdit);



  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
          Add Foods
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="static">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>FoodCategories</Offcanvas.Title>
              <div className="d-flex  justify-content-center align-items-center">
                  <Button className="mx-1 btn-sm" variant="outline-secondary" 
                  onClick={() => setOpenAddCategory(!openAddCategory)}>+</Button>
              </div>
              <div className="ms-auto"></div>
              {/* <ToggleButton variant="outline-primary" className="ms-auto" value={!canEdit} checked={canEdit} type="checkbox" onClick={handleEdit}>Edit Categories</ToggleButton> */}
              {/* <EditCategoriesModal canEdit={canEdit} setCanEdit={setCanEdit} foodCategories={foodCategories} setFoodCategories={setFoodCategories}></EditCategoriesModal> */}
              
            </Offcanvas.Header>
            <Collapse in={openAddCategory}>
              <div className="container">
                <div className="d-flex justify-content-center">
                    <label className="mx-1">Add Category:</label>
                    <input placeholder="Add Category"></input>
                </div>
      
              </div>
            </Collapse>
              
            <Offcanvas.Body>
                
                <NewFoodMenu fridge={fridge} setFrigde={setFridge} foodCategories={foodCategories} setFoodCategories={setFoodCategories}></NewFoodMenu>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default FoodOffCanvasMenu