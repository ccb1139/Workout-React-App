import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import RoutineCard from "../components/RoutineCard";

function Routine() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        <RoutineCard Title={"Chest Day"} />
        <RoutineCard Title={"Back Day"} />
      </div>
    </div>
  );
}

export default Routine;
