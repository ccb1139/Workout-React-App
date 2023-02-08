import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Form, FormLabel, FormGroup, FormControl, Button } from "react-bootstrap";
import '../css/MyFridge.css'


function FridgeItem({ foodName, expirationDate, _id, sendRmvInfoToParent }) {


    const deleteFood = () => {
        sendRmvInfoToParent(_id)
        axios
            .delete(
                "http://localhost:4000/foods/delete-fridge/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Fridge successfully deleted");
                    // window.location.reload();
                    
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    
    // console.log(expirationDate)
    return (
        <div className='border row justify-content-start' >
            <input type="text" defaultValue={foodName} className="fridge_input col-4 p-2"></input>
            <input type="date" 
            defaultValue ={expirationDate}
            className='fridge_exp_date col-4 p-2' ></input>
            {/* <input type="text" defaultValue={expirationDate} className="fridge_input col"></input> */}
            <button onClick={deleteFood} className='border col-1 rounded-circle ms-auto p-2' >X</button>
        </div>
    )
}

export default FridgeItem