import React from 'react'
import { useState, useEffect } from "react";
import FoodCategory from './FoodMenuCmp/FoodCategory'
import SelectedFoods from './FoodMenuCmp/SelectedFoods'
import axios from 'axios';


function DebugMenu({fridge, setFridge, selected, setSelected}) {
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
        const foodCat3 = {
            foodCategoryName: "Staples",
            foods: [
                {
                    name: "Flour",
                    category: "Staples", 
                    _index: 0,
                    selected: false,
                },
                {
                    name: "Sugar",
                    category: "Staples",
                    _index: 1,
                    selected: false,
                },
                {
                    name: "Salt",
                    category: "Staples",
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
        axios.post('http://127.0.0.1:4000/groceries/create-grocery-category', foodCat3).then((res) => {
            if (res.status === 200)
                console.log(res.data);
            else
                Promise.reject()
        }).catch(err => alert('Something went wrong'))
    }
    const clearFridge = () => {
        setFridge([]);
        for(let i = 0; i < fridge.length; i++){
            // console.log(fridge[i])
            axios
                .delete("http://localhost:4000/foods/delete-fridge/" + fridge[i]._id)
                .then((res) => {
                    if (res.status === 200) {
                    console.log("Fridge successfully deleted");
                    // window.location.reload();
                    } else Promise.reject();
                })
                .catch((err) => alert("Something went wrong"));
        }
        // window.location.reload();

    }

    return (
        <div className='container fixed-bottom border m-20 bg-light d-flex'>
            <p className='m-1'>For Debug:</p>

            <button onClick={categoryPopulate}>Populate categories</button>
            <button onClick={clearFridge}>Clear Fridge</button>
        </div>
    )
}

export default DebugMenu