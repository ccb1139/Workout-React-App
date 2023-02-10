import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function FridgeHeader({ fridge, setFridge }) {
  const [refereceFridge, setReferenceFridge] = useState(...fridge);
  const [sortType, setSortType] = useState("0");
  const today = new Date();

  useEffect(() => {
    // setReferenceFridge([...fridge]);
  }, []);


  function sortFoods(event) {
    setSortType(event.target.getAttribute("value"));

    if (sortType === "1") {
      setFridge(
        [...fridge].sort((a, b) => {
          const aDate = new Date(a.expirationDate);
          const bDate = new Date(b.expirationDate);

          const diffA = Math.abs(today - aDate);
          const diffB = Math.abs(today - bDate);

          return diffA - diffB;
        })
      );
    } else if (sortType == "2") {
      setFridge(
        [...fridge].sort((a, b) => {
          const aName = a.foodName;
          const bName = b.foodName;
          return aName.localeCompare(bName);
        })
      );
    } else if (sortType == "3") {
      setFridge(
        [...fridge].sort((a, b) => {
          const aCategory = a.foodCategoryName;
          const bCategory = b.foodCategoryName;
          return aCategory.localeCompare(bCategory);
        })
      );
    } else {
      // setFridge(refereceFridge);
    }
  }

  return (
    <div className="row">
      <div className="col-6">
        <h2>My Fridge</h2>
        <p>Today's Date: {today.toISOString().substring(0, 10)}</p>
      </div>
      <div className="col-6 d-inline-flex justify-content-end">
        <div className="">
          <Dropdown className=" ">
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
              <Dropdown.Item value="0" onClick={sortFoods}>
                None
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p className="">Sort Type: {(sortType == "1") ? "Expiration Date" : (sortType == "2") ? "Food Name" : (sortType == "3") ? "Category" : "None"}</p>
        </div>
      </div>
    </div>
  );
}

export default FridgeHeader;
