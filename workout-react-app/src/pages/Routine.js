import React from "react";
import MyFridge from "../components/FridgeCmp/MyFridge";
import NewFoodMenu from "../components/FoodMenuCmp/NewFoodMenu";
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from 'axios';





function Fridge() {
    const [fridge, setFridge] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/foods/").then(({ data }) => {
            setFridge(data);
            console.log(data);
        })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function sortFoods(sortType){
        console.log(sortType);
        
    }

    return (
        <div className="container">
            <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center">
                <MyFridge foods={fridge} setFoods={setFridge}></MyFridge>
                <NewFoodMenu fridge={fridge} setFrigde={setFridge}></NewFoodMenu>
            </div>
        </div>
    );
}

export default Fridge;
