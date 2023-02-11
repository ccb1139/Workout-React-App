import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import "../../css/MyFridge.css";
import FridgeItem from "./FridgeItem";
import FridgeShelf from "./FridgeShelf";
import FridgeCategories from "./FridgeCategories";
import FridgeHeader from "./FridgeHeader";
import TableHead from "./TableHead";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function MyFridge({ fridge, setFridge, foodCategories }) {
  const [key, setKey] = useState("none");
  const [view, setView] = useState("1");
  const [Category, setCategory] = useState([]);


  return (
    <div className="col border d-flex justify-content-center align-items-center">
      <div className="col col-10">
        
        <FridgeHeader fridge={fridge} setFridge={setFridge} setView={setView}></FridgeHeader>
        <TableHead/>
        { view === "1" ? 
        <FridgeShelf fridge={fridge} setFridge={setFridge}></FridgeShelf> 
        : <FridgeCategories fridge={fridge} setFridge={setFridge} foodCategories={foodCategories} Category={Category} setCategory={setCategory}></FridgeCategories> }


        {/* <FridgeShelf fridge={fridge} setFridge={setFridge}></FridgeShelf> */}
        {/* <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className=""
          transition={false}
        >
          <Tab eventKey="none" title="No Sort">
            <FridgeShelf fridge={fridge} setFridge={setFridge}></FridgeShelf>
          </Tab>
          <Tab eventKey="category" title="Category">
            <FridgeCategories fridge={fridge} setFridge={setFridge} foodCategories={foodCategories} Category={Category} setCategory={setCategory}></FridgeCategories>
          </Tab>    
        </Tabs> */}
      </div>
    </div>
  );
}

export default MyFridge;
