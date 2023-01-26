import React from 'react'
import { useState, useEffect } from "react";

function FoodTile({ children, _id, onSelect, curSelected, }) {  
    // const [selected, setSelected] = useState(false);

    // console.log(selected);
    function handleClick() {
        onSelect(_id);

    }


    return (
        <div className={'mx-2 my-1 p-1 border ' + (curSelected ? "bg-secondary" : "bg-white")} onClick={handleClick}>
            {children}
        </div>
    )
}

export default FoodTile