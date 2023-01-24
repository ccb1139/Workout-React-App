import React from 'react'
// import the css file for this component in the adjacent folder
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../css/RoutineCard.css'

function RoutineCard({Title, Activities}) {  
  // const [activities, setActivities] = useState(Activities);

  // useEffect(() => {
  //   setActivities(Activities);
  // }, [Activities]);
  console.log(Activities);

  return (
    <div className="routine-card col border text-center p-2 m-2 col-md-6 col-12 ">
        <div className="routine-card-header border-bottom ">
            <h3>{Title}</h3>
        </div>
        <div className="routine-card-body">
          <ul>
            {Activities?.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default RoutineCard