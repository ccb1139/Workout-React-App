import React from 'react'
import { useState, useEffect } from "react";

function FoodTile({ children, _id, category, onSelect, curSelected,  }) {  
    // const [selected, setSelected] = useState(false);

    // console.log(selected);
    function handleClick() {
        onSelect(_id, category, children);

    }


    return (
        <div className={'mx-2 my-1 p-1 border user-select-none ' + (curSelected ? "bg-secondary" : "bg-white")} onClick={handleClick}>
            {children}
        </div>
    )
}

export default FoodTile