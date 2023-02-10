import React, { useState, useEffect } from "react";
import FridgeItem from "./FridgeItem";

function FridgeShelf({ fridge, setFridge }) {
  const [foodToRemove, setFoodToRemove] = useState("");

  const today = new Date();
  useEffect(() => {
    setFridge(fridge.filter((food) => food._id !== foodToRemove));
  }, [foodToRemove]);

  return (
    <div className="container">
      {fridge?.map((food, index) => (
        <FridgeItem
        key={food._id}
        foodName={food.foodName}
        expirationDate={food.expirationDate}
        foodCategoryName={food.foodCategoryName}
        _id={food._id}
        sendRmvInfoToParent={setFoodToRemove}
      ></FridgeItem>
      ))}
    </div>
  );
}

export default FridgeShelf;
