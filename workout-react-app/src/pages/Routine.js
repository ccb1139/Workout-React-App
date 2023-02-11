import React from "react";
import MyFridge from "../components/FridgeCmp/MyFridge";
import NewFoodMenu from "../components/FoodMenuCmp/NewFoodMenu";
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from 'axios';
import FoodOffCanvasMenu from "../components/FoodMenuCmp/FoodOffCanvasMenu";

function Fridge() {
    const [fridge, setFridge] = useState([]);
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
        axios.get("http://localhost:4000/foods/").then(({ data }) => {
            setFridge(data);
            console.log(data);
        })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    return (
        <div className="container">
            <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center">
                <MyFridge fridge={fridge} setFridge={setFridge} foodCategories={foodCategories}></MyFridge>
                
                <FoodOffCanvasMenu foodCategories={foodCategories} setFoodCategories={setFoodCategories} fridge={fridge} setFridge={setFridge}></FoodOffCanvasMenu>
            </div>
        </div>
    );
}

export default Fridge;
