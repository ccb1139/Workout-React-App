import React from 'react'
import { useState, useEffect } from "react";
import FoodCategory from './FoodCategory'
import SelectedFoods from './SelectedFoods'
import axios from 'axios';

function NewFoodMenu({ _onSubmit }) {
    const [selected, setSelected] = useState([]);
    const [foodCategories, setFoodCategories] = useState([]);
    
    // For testing purposes
    const categoryPopulate = (foodName, expirationDate) => {
        const foodCat = {
            foodCategoryName: "Fruits",
            foods: ["Apple", "Banana", "Orange"]
        }
        const foodCat2 = {
            foodCategoryName: "Snacks",
            foods: ["Cheetos", "Lays", "Pretzels"]
        }
        axios.post('http://127.0.0.1:4000/groceries/create-grocery-category', foodCat).then((res) => {
            if (res.status === 200)
                console.log(res.data); 
            else
                Promise.reject()
        }).catch(err => alert('Something went wrong'))

        axios.post('http://127.0.0.1:4000/groceries/create-grocery-category', foodCat2).then((res) => {
            if (res.status === 200)
                console.log(res.data); 
            else
                Promise.reject()
        }).catch(err => alert('Something went wrong'))
    }

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

    // console.log(foodCategories)
    return (
        <div className='col border'>


            <div className='d-flex flex-column'>
                {foodCategories.map((item, index) => (
                    <FoodCategory key={index} Name={item.foodCategoryName} Items={item.foods} selected={selected} setSelected={setSelected}></FoodCategory>
                ))}
            </div>
            <SelectedFoods selected={selected} setSelected={setSelected}></SelectedFoods>
            {/* {selected.map((item, index) => (
                <div key={index}>{item["name"]}</div>
            ))} */}

            <div className='container fixed-bottom border m-20'>
                <h3>For Debug:</h3>
                <p>Selected arr:</p>
                {selected.map((item, index) => (
                    <div key={index}>{"name:" + item["name"] + "    category:" + item["category"]+ "    _index:" +item["_index"]}</div>
                ))}
                <button onClick={categoryPopulate}>Populate categories (debug)</button>
            </div>
        </div>
    )
}

export default NewFoodMenu