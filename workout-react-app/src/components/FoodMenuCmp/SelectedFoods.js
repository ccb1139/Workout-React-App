import React from 'react'
import { useState, useEffect } from "react";
import FoodTile from './FoodTile'

function SelectedFoods({ selected, setSelected, foodCategories, setFoodCategories, setFridge }) {
    function onRemove(index, _category, name) {

        setSelected(selected.filter((item, i) => i !== index));
        //we need to remove the selected property from the foodCategories array
        for (let i = 0; i < foodCategories.length; i++) {
            if (foodCategories[i]["foodCategoryName"] === _category) {
                const index = foodCategories[i]["foods"].findIndex((food) => food["name"] === name);
                setFoodCategories([...foodCategories.slice(0, i), { ...foodCategories[i], foods: [...foodCategories[i]["foods"].slice(0, index), { ...foodCategories[i]["foods"][index], selected: false }, ...foodCategories[i]["foods"].slice(index + 1)] }, ...foodCategories.slice(i + 1)]);
                return;
            }
        }
    }

    
    function sendFood() {
        setFridge(selected);
        setSelected([]);
        let _foodCategories = [...foodCategories];
        foodCategories.forEach(category => {
            category.foods = category.foods.map(food => {
                food.selected = false;
                return food;
            });
        });



        // console.log(_foodCategories)
    }

    return (
        <div className='d-flex flex-column px-3 py-1 border mt-auto'>
            <h1>Selected Foods</h1>
            <div className='d-flex flex-wrap border'>
                {selected.map((item, index) => (
                    <FoodTile key={index} _id={index} onSelect={onRemove} curSelected={item["selected"]} category={item["category"]}>{item["name"]}</FoodTile>
                ))}

            </div>
            <button className='btn btn-primary' onClick={sendFood}>Submit</button>
        </div>
    )
}

export default SelectedFoods