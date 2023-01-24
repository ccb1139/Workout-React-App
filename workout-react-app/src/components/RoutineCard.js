import React from 'react'
// import the css file for this component in the adjacent folder
import { Container, Row, Col } from 'react-bootstrap';
import '../css/RoutineCard.css'

function RoutineCard({Title}) {
  return (
    <div className="routine-card col border text-center p-2 m-2 col-6">
        <div className="routine-card-header border-bottom ">
            <h3>{Title}</h3>
        </div>
        <div class="routine-card-body">
            <p>Card Body</p>
        </div>
    </div>
  )
}

export default RoutineCard