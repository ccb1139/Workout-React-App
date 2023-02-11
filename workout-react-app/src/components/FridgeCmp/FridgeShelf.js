import React, { useState, useEffect } from "react";
import FridgeItem from "./FridgeItem";
import "../../css/MyFridge.css";

function FridgeShelf({ fridge, setFridge, sortType }) {
  const [foodToRemove, setFoodToRemove] = useState("");

  const today = new Date();
  useEffect(() => {
    setFridge(fridge.filter((food) => food._id !== foodToRemove));
  }, [foodToRemove]);

  // useEffect(() => {
  //   if (sortType === "expirationDate") {
  //     setFridge(
  //       [...fridge].sort((a, b) => {
  //         const aDate = new Date(a.expirationDate);
  //         const bDate = new Date(b.expirationDate);

  //         // const diffA = Math.abs(today - aDate);
  //         // const diffB = Math.abs(today - bDate);

  //         const diffA = (today - aDate);
  //         const diffB = (today - bDate);
  //         console.log(a.foodName, b.foodName)
  //         console.log(diffA, diffB);

  //         return diffA - diffB;
  //       })
  //     );
  //   }
  // }, [sortType]);





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
