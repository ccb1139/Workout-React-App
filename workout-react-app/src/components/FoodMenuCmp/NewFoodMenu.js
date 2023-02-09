import React from 'react'
import { useState, useEffect } from "react";
import FoodCategory from './FoodCategory'
import SelectedFoods from '../SelectedFoods'
import axios from 'axios';
import DebugMenu from '../DebugMenu';


function NewFoodMenu({fridge, setFrigde}) {
    const [selected, setSelected] = useState([]);
    const [foodCategories, setFoodCategories] = useState([]);

    

    useEffect(() => {
        axios.get("http://localhost:4000/groceries/").then(({ data }) => {
            // console.log(selected)
            setFoodCategories(data);
            // console.log(data);
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

    function sendToFrigeServer(foodName, expirationDate, foodCategoryName) {
        axios.post('http://127.0.0.1:4000/foods/create-fridge', { foodName, expirationDate, foodCategoryName }).then((res) => {
            if (res.status === 200){
                // console.log(res.data); 
                setFrigde([...fridge, res.data])
            }
            else
                Promise.reject()
        }).catch(err => alert('Something went wrong'))
    }


    function addToFridge(foods){

        // For debugging
        const currentDate = new Date();
        const twoWeeksFromNow = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000);
        const randomTimestamp = currentDate.getTime() + Math.random() * (twoWeeksFromNow.getTime() - currentDate.getTime());
        const randomDate = new Date(randomTimestamp);
        const formattedRandomDate = randomDate.toISOString().substring(0, 10);
        console.log(formattedRandomDate)




        var convertedFoods = [];
        for (const food of foods) {
            // console.log("food", food)
            const tmp = {
                "foodName": food["name"],
                "expirationDate": formattedRandomDate,
                "foodCategoryName": food["category"]
            }
            convertedFoods.push(tmp);
        }
        // console.log("convertedFoods", convertedFoods)
        setFrigde([...fridge, ...convertedFoods])
        for (const food of convertedFoods) {
            sendToFrigeServer(food["foodName"], food["expirationDate"], food["foodCategoryName"]);
        }
    }


    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='col border '>
                <div className='d-flex flex-column px-3 py-1'>
                    {foodCategories.map((item, index) => (
                        <FoodCategory key={index} Name={item.foodCategoryName} Items={item.foods} selected={selected} setSelected={setSelected}></FoodCategory>
                    ))}
                </div>
                <SelectedFoods setFridge={addToFridge} selected={selected} setSelected={setSelected} foodCategories={foodCategories} setFoodCategories={setFoodCategories}></SelectedFoods>
                

                {/* <DebugMenu selected={selected} ></DebugMenu> */}
            </div>
        </div>
    )
}

export default NewFoodMenu