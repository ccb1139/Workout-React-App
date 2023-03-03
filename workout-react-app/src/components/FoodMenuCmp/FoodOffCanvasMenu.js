import { useState, useEffect } from "react";
import NewFoodMenu from "./NewFoodMenu";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Collapse from 'react-bootstrap/Collapse';
import EditCategoriesModal from "./EditCategoriesModal";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import "../../css/NewFoodMenu.css"

function FoodOffCanvasMenu({fridge, setFridge, foodCategories, setFoodCategories}) {
  const [show, setShow] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => setCanEdit(!canEdit);

  const handleInputChange = (event) => {
    event.preventDefault();
    setNewCatName(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    sendNewCatTOBackend(newCatName);
  }

  function generateRandomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 24; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function sendNewCatTOBackend() {
    
    const newCatObj = {foodCategoriesName: newCatName, foods:[]}
    console.log("Add Category: ", newCatName);


    axios.post('http://localhost:4000/groceries//create-grocery-category', {foodCategoryName: newCatName, foods:[], }).then((res) => {
      console.log(res.data._id);
      setFoodCategories([...foodCategories, {foodCategoryName: newCatName, foods:[], _id: res.data._id}]);

    }).catch((err) => {
      console.log(err);
    })

    
  }

  


  return (
    <div>
        {/* <Button variant="primary" onClick={handleShow}>
          Add Foods
        </Button> */}
        <div onClick={handleShow}  className="NewFoodDivBtn">
          <p>+</p>
        </div>
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
                <div className="px-4 justify-content-center">
                  <Form className="my-2">
                    <Form.Group as={Row} className="mb-3 row" controlId="exampleForm.ControlInput1">
                      <Form.Label column  sm="4">Category Name: </Form.Label>
                      <Col sm="6">
                        <Form.Control type="text" placeholder="Category Name" value={newCatName} onChange={handleInputChange}/>
                      </Col>
                      <Col sm="2">
                        <Button variant="outline-secondary" onClick={handleClick}  >Add</Button>
                      </Col>
                    </Form.Group>
                    
                  </Form>
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