import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import CustomRemoveBtn from "./CustomRemoveBtn";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
      className='btn border ms-auto'
    >
      {children}
    </button>
  );
}


function ModalCategories({canEdit, setCanEdit, foodCategories, setFoodCategories}) {
  const removeCategory = (e) => {
    console.log("remove category");
    console.log(e.target.value);
  }

  const removeFood = (e) => {
    console.log("remove food");
    console.log(e.target.value);
  }


  return (

  <Accordion defaultActiveKey="0">
    {foodCategories.map((category, index) => (
      <Card key={category["_id"]}>
        <Card.Header className="d-inline-flex">
          {category["foodCategoryName"]}
          <CustomToggle as={Button} variant="link" eventKey={index + 1}>
            edit  
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={index + 1}>
          <Card.Body className="d-flex flex-wrap">
            {category["foods"].map((food, index) => (
              <div className="mx-2 my-1 p-1 border user-select-none">{food["name"]} </div>
            ))}
            {/* <div>Delete Category</div> */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}

  </Accordion>


  )
}

export default ModalCategories