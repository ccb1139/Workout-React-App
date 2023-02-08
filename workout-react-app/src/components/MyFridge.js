import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { Table } from "react-bootstrap";
import FridgeItem from "./FridgeItem";
import '../css/MyFridge.css'


function MyFridge({foods, setFoods}) {
    const [foodToRemove, setFoodToRemove] = useState("");

    const today = new Date();

    useEffect(() => {
        // console.log(foodToRemove);
        setFoods(foods.filter(food => food._id !== foodToRemove));
    }, [foodToRemove])

    function sortFoods(event){
        const sortType = event.target.getAttribute("value");
        
        if (sortType === "1"){
            
            setFoods(foods.sort((a, b) => {
                console.log(a.expirationDate);
                const aDate = new Date(a.expirationDate);
                const bDate = new Date(b.expirationDate);
                if (aDate < today && bDate < today){
                    return aDate - bDate;
                }
                else if (aDate < today){
                    return -1;
                }
                else if (bDate < today){
                    return 1;
                }
                else{
                    return aDate - bDate;
                }
            }));
        }
        


    }

    return (
        <div className="col border d-flex justify-content-center align-items-center">
            <div className="col col-10">
                <Dropdown >
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Sort By
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item value="1" onClick={sortFoods}>Expiration Date</Dropdown.Item>
                        <Dropdown.Item value="2" onClick={sortFoods}>Food Name</Dropdown.Item>
                        <Dropdown.Item value="3" onClick={sortFoods}>Category</Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
                <p>Today's Date: {today.toISOString().substring(0, 10)}</p>
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