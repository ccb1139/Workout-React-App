import React from 'react'
import { useState, useEffect } from "react";
import FoodCategory from './FoodCategory'
import SelectedFoods from './SelectedFoods'
import axios from 'axios';
import DebugMenu from './DebugMenu';


function NewFoodMenu({fridge, setFrigde}) {
    const [selected, setSelected] = useState([]);
    const [foodCategories, setFoodCategories] = useState([]);

    

    useEffect(() => {
        axios.get("http://localhost:4000/groceries/").then(({ data }) => {
            console.log(selected)
            setFoodCategories(data);
            console.log(data);
        })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        //Iterate through selected
        for (const item of selected) {
            for (const catItm of foodCategories) {
                if ((catItm["foodCategoryName"] == item["category"])) {
                    catItm.foods[item["_index"]].selected = true;
                }

            }
        }

    }, [selected]);

    function addToFridge(foods){
        console.log("fridge", fridge)
        console.log("foods", foods)
        var convertedFoods = {};
        // 

        setFrigde([...fridge, ...foods])
    }


    return (
        <div className='col border'>
            <div className='d-flex flex-column px-3 py-1'>
                {foodCategories.map((item, index) => (
                    <FoodCategory key={index} Name={item.foodCategoryName} Items={item.foods} selected={selected} setSelected={setSelected}></FoodCategory>
                ))}
            </div>
            <SelectedFoods setFridge={addToFridge} selected={selected} setSelected={setSelected} foodCategories={foodCategories} setFoodCategories={setFoodCategories}></SelectedFoods>
            

            <DebugMenu selected={selected}></DebugMenu>
        </div>
    )
}

export default NewFoodMenu