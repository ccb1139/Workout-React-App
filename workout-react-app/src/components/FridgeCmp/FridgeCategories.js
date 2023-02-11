import React, { useState, useEffect } from "react";
import FridgeShelf from "./FridgeShelf";
import FridgeItem from "./FridgeItem";
import Accordion from "react-bootstrap/Accordion";

function FridgeCategories({ fridge, setFridge, foodCategories, Category, setCategory }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [foodToRemove, setFoodToRemove] = useState("");

  const today = new Date();
  useEffect(() => {
    setFridge(fridge.filter((food) => food._id !== foodToRemove));
  }, [foodToRemove]);



  useEffect(() => {
    // console.log(foodCategories);
    setCategory([]);
    for (let i = 0; i < foodCategories.length; i++) {
      setCategory((prev) => [...prev, foodCategories[i].foodCategoryName]);
    }
  }, [foodCategories]);


  return (
    <div className="container">
      {/* <FridgeShelf fridge={fridge} setFridge={setFridge}></FridgeShelf> */}
      {Category?.map((foodCategory, index) => (
        <Accordion defaultActiveKey={[index]} alwaysOpen key={index}>
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{foodCategory}</Accordion.Header>
            <Accordion.Body>
              {fridge?.map((food, index) => (
                ((foodCategory === food.foodCategoryName) ? 
                <FridgeItem
                key={food._id}
                foodName={food.foodName}
                expirationDate={food.expirationDate}
                foodCategoryName={food.foodCategoryName}
                _id={food._id}
                sendRmvInfoToParent={setFoodToRemove}
              ></FridgeItem>
              : null )
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}


    </div>
  );
}

export default FridgeCategories;
