import React from "react";
import axios from "axios";
import "../../css/MyFridge.css";

function FridgeItem({ foodName, expirationDate, foodCategoryName, _id, sendRmvInfoToParent }) {
  const deleteFood = () => {
    sendRmvInfoToParent(_id);
    axios
      .delete("http://localhost:4000/foods/delete-fridge/" + _id)
      .then((res) => {
        if (res.status === 200) {
          console.log("Fridge successfully deleted");
          // window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  const updateFoodName = (e) => {
    if(e.target.value === foodName) {
        return;
    }


    // const newFoodName = e.target.value;
    const updatedFood = {
        foodName: e.target.value,
        expirationDate: expirationDate,
        foodCategoryName: foodCategoryName,
    };
    axios
        .put(
            "http://localhost:4000/foods/update-fridge/" + _id, updatedFood)
        .then((res) => {
            if (res.status === 200) {
                console.log("Fridge successfully updated");
                // window.location.reload();

            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
  };

  const updateFoodExpDate = (e) => {
    if(e.target.value === expirationDate) {
        return;
    }

    // const newFoodName = e.target.value;
    const updatedFood = {
        foodName: foodName,
        expirationDate: e.target.value,
        foodCategoryName: foodCategoryName,
    };
    axios
        .put(
            "http://localhost:4000/foods/update-fridge/" + _id, updatedFood)
        .then((res) => {
            if (res.status === 200) {
                console.log("Fridge successfully updated");
                // window.location.reload();

            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
  };


  // console.log(expirationDate)
  return (
    <div className="border row justify-content-start">
      <input
        type="text"
        defaultValue={foodName}
        className="fridge_input col-4 p-2"
        onBlur={updateFoodName}
      ></input>
      <input
        type="date"
        defaultValue={expirationDate}
        className="fridge_exp_date col-4 p-2"
        onBlur={updateFoodExpDate}
      ></input>
      {/* <input type="text" defaultValue={expirationDate} className="fridge_input col"></input> */}
      <button
        onClick={deleteFood}
        className="border col-1 rounded-circle ms-auto p-2"
      >
        X
      </button>
    </div>
  );
}

export default FridgeItem;
