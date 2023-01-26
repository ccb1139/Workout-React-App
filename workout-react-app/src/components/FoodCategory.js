import React from 'react'
import { useState, useEffect } from "react";
import FoodTile from './FoodTile'

function FoodCategory({ Name, Items, selected, setSelected }) {

    function onSelect(index) {
        console.log(index);
        console.log(Items[index]);
        const foodItm = {
            name: Items[index],
            category: Name,
            _index: index
        }
        //we need to check if the food is already selected
        //if it is, we need to remove it from the selected array
        //if it isn't, we need to add it to the selected array
        //we can do this by checking if the food is already in the selected array
        //if it is, we can remove it
        //if it isn't, we can add it
        console.log(selected)
        for (let i = 0; i < selected.length; i++) {
            if (selected[i]["category"] === Name && selected[i]["_index"] === index && selected[i]["name"] === Items[index]) {
                setSelected(selected.filter((item, i) => i !== index));
                return;
            }
        }
        setSelected([...selected, foodItm]);

        // if (selected.includes(foodItm)) {
        //     setSelected(selected.filter((foodItm, i) => i !== index));
        // }
        // else{
            
        // }
        // setSelected([...selected, foodItm]);
    }

    function checkCurSelected(){
        
        for (let i = 0; i < selected.length; i++) {
            if (selected[i]["category"] === Name) {
                return true;
            }
        }
        return false;
    }

    // console.log(selected);
    return (
        <div className='border'>
            <h1>{Name}</h1>
            <div className='d-flex'>
                {Items?.map((item, index) => (
                    <FoodTile key={index} _id={index} onSelect={onSelect} curSelected={checkCurSelected}>{item}</FoodTile>
                ))}

            </div>


        </div>
    )
}

export default FoodCategory