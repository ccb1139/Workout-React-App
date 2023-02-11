import React from "react";
import MyFridge from "../components/FridgeCmp/MyFridge";
import NewFoodMenu from "../components/FoodMenuCmp/NewFoodMenu";
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from 'axios';
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";




function Fridge() {
    const [fridge, setFridge] = useState([]);
    const [show, setShow] = useState(false);
    const [foodCategories, setFoodCategories] = useState([]);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    


    

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
                
                <Button variant="primary" onClick={handleShow}>
                Launch
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NewFoodMenu fridge={fridge} setFrigde={setFridge} foodCategories={foodCategories} setFoodCategories={setFoodCategories}></NewFoodMenu>
                </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    );
}

export default Fridge;
