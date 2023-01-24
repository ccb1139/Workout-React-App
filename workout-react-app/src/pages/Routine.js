import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import RoutineCard from "../components/RoutineCard";



function Routine() {
  const [routines, setRoutines] = useState();

  const testrt = ["Chest flys", "Bench Press", "Pull Ups"]
  setRoutines(["Chest flys", "Bench Press", "Pull Ups"]);

  return (
    <div className="container">
      <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center">
        <RoutineCard Title={"Chest Day"} Actvities={testrt} />
        <RoutineCard Title={"Back Day"} Actvities={["Chest flys", "Bench Press", "Pull Ups"]} />
      </div>
    </div>
  );
}

export default Routine;
