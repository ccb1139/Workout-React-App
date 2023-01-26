import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { Form, FormLabel, FormGroup, FormControl, Button } from "react-bootstrap";


function FridgeItem({ foodName, expirationDate, _id, _editFoods }) {

    const deleteFood = () => {
        axios
            .delete(
                "http://localhost:4000/foods/delete-fridge/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Student successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };


    return (
        <div className='border d-flex justify-content-between' >
            {/* <p className='border ' contentEditable={_editFoods}>{foodName}</p> */}
            <input type="text" defaultValue={foodName} disabled={!_editFoods}></input>
            <p className='border ' >{expirationDate}</p>
            <button onClick={deleteFood} className='border' >Delete</button>
        </div>
    )
}

export default FridgeItem