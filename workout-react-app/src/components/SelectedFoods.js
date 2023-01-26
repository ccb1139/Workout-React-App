import React from 'react'
import { useState, useEffect } from "react";
import FoodTile from './FoodTile'

function SelectedFoods({ selected, setSelected }) {
    function onRemove(index) {
        
        console.log(index);
        setSelected(selected.filter((item, i) => i !== index));
    }

    return (
        <div className=''>
            <h1>Selected Foods</h1>
            <div className='d-flex'>
                {selected.map((item, index) => (
                    <FoodTile key={index} _id={index} onSelect={onRemove} curSelected={true}>{item["name"]}</FoodTile>
                ))}

            </div>

        </div>
    )
}

export default SelectedFoods