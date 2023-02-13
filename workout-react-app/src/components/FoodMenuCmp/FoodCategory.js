import React from 'react'
import { useState, useEffect } from "react";
import FoodTile from './FoodTile'
import Button from "react-bootstrap/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import NewFoodForm from './NewFoodForm';


function FoodCategory({ Name, Items, addNewFoodInCat, selected, setSelected, ind }) {

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
        <Card>
            <Accordion defaultActiveKey="1">
                <Card.Header className='d-flex'>
                    <h2>{Name}</h2>
                    <CustomToggle eventKey="0">+</CustomToggle>    
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <NewFoodForm Items={Items} addNewFoodInCat={addNewFoodInCat} ind={ind}></NewFoodForm>
                </Accordion.Collapse>
                
            </Accordion>
            <Card.Body className='d-flex'>
                {Items?.map((item, index) => (
                    <FoodTile key={index} _id={item["_index"]} onSelect={onSelect} curSelected={item["selected"]} category={item["category"]}>{item["name"]}</FoodTile>
                ))}
            </Card.Body>
        </Card>

    )
}

export default FoodCategory