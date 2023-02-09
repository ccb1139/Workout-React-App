import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import "../../css/MyFridge.css";
import FridgeItem from "./FridgeItem";


function MyFridge({ foods: fridge, setFoods: setFridge }) {
  const [foodToRemove, setFoodToRemove] = useState("");
  const [refereceFridge, setReferenceFridge] = useState(...fridge);
  const [sortType, setSortType] = useState("1");

  const today = new Date();
  // console.log(fridge);
  useEffect(() => {
    // console.log(foodToRemove);
    setFridge(fridge.filter((food) => food._id !== foodToRemove));
  }, [foodToRemove]);

  function sortFoods(event) {
    setSortType(event.target.getAttribute("value"));
    
    if (sortType === "1") {
      setFridge( [...fridge].sort((a, b) => {
          const aDate = new Date(a.expirationDate);
          const bDate = new Date(b.expirationDate);
          return aDate - bDate;
        })
      );
    } else if (sortType == "2") {
      setFridge( [...fridge].sort((a, b) => {
          const aName = a.foodName;
          const bName = b.foodName;
          return aName.localeCompare(bName);
        })
      );
    } else if (sortType == "3") {
      setFridge( [...fridge].sort((a, b) => {
          const aCategory = a.foodCategoryName;
          const bCategory = b.foodCategoryName;
          return aCategory.localeCompare(bCategory);
        })
      );
    }
  }


  return (
    <div className="col border d-flex justify-content-center align-items-center">
      <div className="col col-10">
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item value="1" onClick={sortFoods}>
              Expiration Date
            </Dropdown.Item>
            <Dropdown.Item value="2" onClick={sortFoods}>
              Food Name
            </Dropdown.Item>
            <Dropdown.Item value="3" onClick={sortFoods}>
              Category
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <p>Today's Date: {today.toISOString().substring(0, 10)}</p>
        {fridge?.map((food, index) => (
          <div className="row" key={food._id + "oDiv"}>
            <FridgeItem
              key={food._id}
              foodName={food.foodName}
              expirationDate={food.expirationDate}
              foodCategoryName={food.foodCategoryName}
              _id={food._id}
              sendRmvInfoToParent={setFoodToRemove}
            ></FridgeItem>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFridge;
