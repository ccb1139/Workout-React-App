import { useState, useEffect } from "react";
import NewFoodMenu from "./NewFoodMenu";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function FoodOffCanvasMenu({fridge, setFridge, foodCategories, setFoodCategories}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
          Add Foods
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <NewFoodMenu fridge={fridge} setFrigde={setFridge} foodCategories={foodCategories} setFoodCategories={setFoodCategories}></NewFoodMenu>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default FoodOffCanvasMenu