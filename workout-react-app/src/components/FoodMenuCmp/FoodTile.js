import React from 'react'
import { useState, useEffect } from "react";

function FoodTile({ children, _id, category, onSelect, curSelected, canEdit }) {  
    // const [selected, setSelected] = useState(false);

    // console.log(selected);
    function handleClick() {
        if(!canEdit){
            onSelect(_id, category, children);
        } else {
            // console.log("delete food");
            // console.log(children);
        }
    }


    return (
        <div className={'mx-2 my-1 p-1 border user-select-none ' + (curSelected ? "bg-secondary" : "bg-white")} onClick={handleClick}>
            {children}
            {canEdit && <button className="btn btn-outline-danger btn-sm mx-1 ft-btn" value={_id} onClick={handleClick}>X</button>}
        </div>
    )
}

export default FoodTile