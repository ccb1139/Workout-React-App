import React from 'react'
import { useState, useEffect } from "react";
import FoodTile from './FoodTile'
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import NewFoodForm from './NewFoodForm';
import Collapse from 'react-bootstrap/Collapse';
import ConfModal from './ConfModal';
import axios from 'axios';

function FoodCategory({ Name, Items, addNewFoodInCat, selected, setSelected, ind, deleteCategoryFunc }) {
    const [canEdit, setCanEdit] = useState(false);
    const [deleteCat, setDeleteCat] = useState(false);

    const handleChangeEdit = (e) => {
        setCanEdit(!canEdit);
    }

    

    function handleDeleteCategory(e) {
        // console.log(e.target.outerText);
        const btnClicked = e.target.outerText;
        if (btnClicked === "Delete Category") {
            setDeleteCat(true);
            console.log("Delete Category")
        } else if (btnClicked === "Cancel") {
            console.log("Cancel Delete Category")
        } else if (btnClicked === "Confirm") {
            deleteCategoryFunc(Name, ind);
        }

        setDeleteCat(true);
    }

    

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          console.log('totally custom!'),
        );
      
        return (
          <button
            type="button"
            onClick={decoratedOnClick}
            className='btn border ms-auto'
          >
            {children}
          </button>
        );
      }

    function onSelect(index, _category, name) {
        const foodItm = {
            name: Items[index]["name"], category: Name, _index: index, selected: true,
        }

        var found = false;
        for (let i = 0; i < selected.length; i++) {
            if (selected[i]["category"] === Name && selected[i]["_index"] === index && selected[i]["name"] === Items[index]["name"]) {
                // console.log("ITS ALREADY IN HERE BOZO");
                setSelected(selected.filter(item => JSON.stringify(item) !== JSON.stringify(foodItm)));
                // myArray = myArray.filter(item => JSON.stringify(item) !== JSON.stringify(objectToRemove));
                found = true;
                break; 
            }
        }


        // setSelected([...selected, foodItm]);
        //Update the foodCategories array to set selected to true
        for(let i = 0; i < Items.length; i++){
            if(Items[i]["name"] === name){
                if (!found){
                    Items[i]["selected"] = true;
                } else {
                    Items[i]["selected"] = false;
                    return;
                }
                // Items[i]["selected"] = !Items[i]["selected"];
            }
        }

        setSelected([...selected, foodItm]);
    }

    

    

    // console.log(selected);
    return (
        <Card className='mb-2'>
            <Accordion defaultActiveKey="1">
                <Card.Header className='d-flex'>
                    <h2>{Name}</h2>
                    <CustomToggle eventKey="0">+</CustomToggle>
                    <Button variant={canEdit ? ' btn btn-outline-warning' : ' btn btn-outline-secondary'} className='border' onClick={handleChangeEdit}>Edit</Button>   
                    
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <NewFoodForm Items={Items} addNewFoodInCat={addNewFoodInCat} ind={ind} _category={Name}></NewFoodForm>
                </Accordion.Collapse>
                
            </Accordion>
            <Card.Body className='d-flex flex-wrap'>
                {Items?.map((item, index) => (
                    <FoodTile key={index} _id={item["_index"]} onSelect={onSelect} curSelected={item["selected"]} category={item["category"]} canEdit={canEdit}>{item["name"]}</FoodTile>
                ))}
                
            </Card.Body>
            {/* {canEdit ?
            <Collapse in={canEdit}>
                <Button>Delete Category</Button> 
            </Collapse>
            : null} */}
            <Collapse in={canEdit}>
                <div className='edit-cat-btn' onClick={handleDeleteCategory}  >Delete Category</div> 
                 
            </Collapse>
            <ConfModal show={deleteCat} handleShow={handleDeleteCategory} closeFunction={setDeleteCat}>Are you sure you want to delete the {Name} category?</ConfModal>
        </Card>

    )
}

export default FoodCategory