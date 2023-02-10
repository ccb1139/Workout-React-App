import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import "../../css/MyFridge.css";
import FridgeItem from "./FridgeItem";
import FridgeShelf from "./FridgeShelf";
import FridgeHeader from "./FridgeHeader";


function MyFridge({ fridge, setFridge }) {
  

  


  return (
    <div className="col border d-flex justify-content-center align-items-center">
      <div className="col col-10">
        <FridgeHeader fridge={fridge} setFridge={setFridge}></FridgeHeader>
        <FridgeShelf fridge={fridge} setFridge={setFridge}></FridgeShelf>
      </div>
    </div>
  );
}

export default MyFridge;
