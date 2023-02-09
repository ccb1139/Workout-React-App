import React from 'react'
import { useState, useEffect } from "react";
import FoodCategory from './FoodMenuCmp/FoodCategory'
import SelectedFoods from './SelectedFoods'
import axios from 'axios';

function DebugMenu({selected}) {
    // For testing purposes
    const categoryPopulate = (foodName, expirationDate) => {
        const foodCat = {
            foodCategoryName: "Fruits",
            foods: [
                {
                    name: "Apple",
                    category: "Fruits",
                    _index: 0,
                    selected: false,
                },
                {
                    name: "Banana",
                    category: "Fruits",
                    _index: 1,
                    selected: false,
                },
                {
                    name: "Orange",
                    category: "Fruits",
                    _index: 2,
                    selected: false,
                },
            ]
        }
        const foodCat2 = {
            foodCategoryName: "Snacks",
            foods: [
                {
                    name: "Cheetos",
                    category: "Snacks",
                    _index: 0,
                    selected: false,
                },
                {
                    name: "Lays",
                    category: "Snacks",
                    _index: 1,
                    selected: false,
                },
                {
                    name: "Pretzels",
                    category: "Snacks",
                    _index: 2,
                    selected: false,
                },
            ]
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

    return (
        <div className='container fixed-bottom border m-20'>
            <h3>For Debug:</h3>
            <p>Selected arr:</p>
                {selected.map((item, index) => (
                    <div key={index}>{"name:" + item["name"] + "    category:" + item["category"] + "    _index:" + item["_index"]}</div>
                ))}
            <button onClick={categoryPopulate}>Populate categories (debug)</button>
        </div>
    )
}

export default DebugMenu