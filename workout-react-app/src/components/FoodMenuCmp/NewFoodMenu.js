import React from 'react'
import { useState, useEffect } from "react";
import FoodCategory from './FoodCategory'
import SelectedFoods from '../SelectedFoods'
import axios from 'axios';
import DebugMenu from '../DebugMenu';



function NewFoodMenu({fridge, setFrigde, foodCategories, setFoodCategories}) {
    const [selected, setSelected] = useState([]);
    

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

    useEffect(() => {
        console.log("FoodCategories: ", foodCategories);
        
    }, [foodCategories]);

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

        function generateRandomString() {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < 24; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          }


        // For debugging
        const currentDate = new Date();
        const twoWeeksFromNow = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000);
        const randomTimestamp = currentDate.getTime() + Math.random() * (twoWeeksFromNow.getTime() - currentDate.getTime());
        const randomDate = new Date(randomTimestamp);
        const formattedRandomDate = randomDate.toISOString().substring(0, 10);
        console.log(formattedRandomDate)




        var convertedFoods = [];
        for (const food of foods) {
            
            
            var tmpId = generateRandomString();
            const tmp = {
                "foodName": food["name"],
                "expirationDate": formattedRandomDate,
                "foodCategoryName": food["category"],
                "_id": {tmpId},
            }
            convertedFoods.push(tmp);
            // setFrigde([...fridge, tmp])
        }
        // console.log("convertedFoods", convertedFoods)
        var tmpWholeFridge = [...fridge, ...convertedFoods];
        setFrigde([...fridge, ...convertedFoods])
        for (const food of convertedFoods) {
            sendToFrigeServer(food["foodName"], food["expirationDate"], food["foodCategoryName"]);
        }
    }

    function addNewFoodInCat(food, category){
        console.log(food);
        console.log(category);
        // console.log([foodCategories.slice(category)]);
        var tmp = foodCategories[category];
        tmp.foods.push(food)
        console.log(tmp);
        setFoodCategories([...foodCategories.splice(category, 1, tmp), ...foodCategories.slice(category + 1)])
        sendNewGrocCategory(tmp, tmp._id);

    }

    function sendNewGrocCategory(newCat, _id) {
        axios.put("http://localhost:4000/groceries//update-grocery-category/" + _id, newCat)
        .then((res) => {
            if (res.status === 200) {
                console.log("Grocery successfully updated");
                // window.location.reload();

            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
        
    }
    


    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='col border '>
                <div className='d-flex flex-column px-3 py-1'>
                    {foodCategories.map((item, index) => (
                        <FoodCategory key={index} Name={item.foodCategoryName} Items={item.foods} addNewFoodInCat={addNewFoodInCat} ind={index} selected={selected} setSelected={setSelected}></FoodCategory>
                    ))}
                </div>
                <SelectedFoods setFridge={addToFridge} selected={selected} setSelected={setSelected} foodCategories={foodCategories} setFoodCategories={setFoodCategories}></SelectedFoods>
                

                {/* <DebugMenu selected={selected} ></DebugMenu> */}
            </div>
        </div>
    )
}

export default NewFoodMenu