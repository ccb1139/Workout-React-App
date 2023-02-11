import React, { useState, useEffect } from "react";
import axios from "axios";
import CloseButton from 'react-bootstrap/CloseButton';
import "../../css/MyFridge.css";

function FridgeItem({ _className, foodName, expirationDate, foodCategoryName, _id, sendRmvInfoToParent }) {
  const [closeToExpBorder , setCloseToExpBorder] = useState("border border-3 border-danger");
  const [daysTillExp, setDaysTillExp] = useState("0");

  useEffect(() => {
    const today = new Date();
    const expDate = new Date(expirationDate);
    const diff = Math.abs(today - expDate);
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if(today - expDate >= 0) {
      setDaysTillExp("EXPIRED");
      setCloseToExpBorder("border border-danger text-danger");
    } else {
      setDaysTillExp(String(diffDays));
      if (diffDays <= 1) {
        setCloseToExpBorder("border border-danger text-danger");
      } else if (diffDays <= 3) {
        setCloseToExpBorder("border border-warning");
      } else {
        setCloseToExpBorder("");
      }
    }
    
    
  }, []);

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
    <div className={"border row m-1 " + _className + " " + closeToExpBorder}>
      <input
        type="text"
        defaultValue={foodName}
        className="fridge_input col-3 p-2"
        onBlur={updateFoodName}
      ></input>
      <input
        type="date"
        defaultValue={expirationDate}
        className="fridge_exp_date col-3 p-2"
        onBlur={updateFoodExpDate}
      ></input>
      <div className="col-1"></div>
      <p className={"col-4" }>{daysTillExp}</p>
      {/* <input type="text" defaultValue={expirationDate} className="fridge_input col"></input> */}
      <CloseButton onClick={deleteFood}  className="border col-1 ms-auto p-2 mt-1 mx-1" />
    </div>
  );
}

export default FridgeItem;
