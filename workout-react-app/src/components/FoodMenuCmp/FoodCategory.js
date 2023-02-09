import React from 'react'
import { useState, useEffect } from "react";
import FoodTile from './FoodTile'

function FoodCategory({ Name, Items, selected, setSelected }) {

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
        <div className='border'>
            <h1>{Name}</h1>
            <div className='d-flex'>
                {Items?.map((item, index) => (
                    <FoodTile key={index} _id={item["_index"]} onSelect={onSelect} curSelected={item["selected"]} category={item["category"]}>{item["name"]}</FoodTile>
                ))}

            </div>


        </div>
    )
}

export default FoodCategory