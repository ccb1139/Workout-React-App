import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table } from "react-bootstrap";
import FridgeItem from "./FridgeItem";


function MyFridge() {
    const [foods, setFoods] = useState([]);
    const [editFoods, setEditFoods] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:4000/foods/").then(({ data }) => {
            setFoods(data);
            console.log(data);
        })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //write code to invert the editFoods state when the edit button is clicked
    const editFood = () => {
        setEditFoods(!editFoods);
        console.log(editFoods);
    }



    return (
        <div className="col border d-flex justify-content-center align-items-center">
            <div className="col col-8">
                {foods.map((food, index) => (
                    <div className="row" key={food._id+"oDiv"}>
                        <FridgeItem key={food._id} foodName={food.foodName} expirationDate={food.expirationDate} _id={food._id} _editFoods={editFoods}></FridgeItem>
                    </div> 
                ))}
                <button className="btn btn-primary" onClick={editFood}>Edit Food</button>
                <div>{editFoods ? "on" : "off"}</div>
                    
            </div>
        </div>
    )
}

export default MyFridge