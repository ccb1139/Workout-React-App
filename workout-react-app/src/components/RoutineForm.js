import React from 'react'
import { useState } from 'react';
import { Form, FormLabel, FormGroup, FormControl, Button } from "react-bootstrap";

function RoutineForm({children, onSubmit }) {
    const [foodName, setFoodName] = useState("");
    const [expirationDate, setExpirationDate] = useState("");

    return (
        <div className='new-rt-form d-flex flex-column col-6 justify-content-center align-items-center border'>
            <h1>{children}</h1>
            <Form>
                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Food Name</FormLabel>
                    <FormControl type="text" placeholder="Enter Food Name" value={foodName} onChange={(event) => {setFoodName(event.target.value)}}/>
                    <FormLabel>Expiration date</FormLabel>
                    <FormControl type="date" placeholder="Enter expiration date" value={expirationDate} onChange={(event) => {setExpirationDate(event.target.value)}}/>
                </FormGroup>
                <Button variant="primary" type="submit" onClick={(event) => {event.preventDefault(); onSubmit(foodName, expirationDate)}}>
                    Submit
                </Button>
            </Form>


        </div>
    )
}

export default RoutineForm