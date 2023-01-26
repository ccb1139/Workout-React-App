import React from "react";
import MyFridge from "../components/MyFridge";
import NewFood from "../pages/NewFood";
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";




function Fridge() {
  const [routines, setRoutines] = useState();
  const [data, setData] = React.useState(null);


  const testrt = ["Chest flys", "Bench Press", "Pull Ups"]
  // setRoutines(["Chest flys", "Bench Press", "Pull Ups"]);

  return (
    <div className="container">
      <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center">
        <MyFridge></MyFridge>
        <NewFood></NewFood>
      </div>
    </div>
  );
}

export default Fridge;
