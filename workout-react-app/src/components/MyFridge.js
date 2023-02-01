import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table } from "react-bootstrap";
import FridgeItem from "./FridgeItem";
import '../css/MyFridge.css'


function MyFridge({foods, setFoods}) {
    const [foodToRemove, setFoodToRemove] = useState("");

    useEffect(() => {
        console.log(foodToRemove);
        setFoods(foods.filter(food => food._id !== foodToRemove));
    }, [foodToRemove])

    useEffect(() => {
        //Map through the foods array and return a fridge item for each food
        // console.log(foods);
    }, [foods])



    return (
        <div className="col border d-flex justify-content-center align-items-center">
            <div className="col col-8">
                {foods?.map((food, index) => (
                    <div className="row" key={food._id+"oDiv"}>
                        <FridgeItem key={food._id} foodName={food.foodName} expirationDate={food.expirationDate} _id={food._id} sendRmvInfoToParent={setFoodToRemove} ></FridgeItem>
                    </div> 
                ))}
                    
            </div>
        </div>
    )
}

export default MyFridge