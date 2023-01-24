import React from 'react'
import { Form, FormLabel, FormGroup, FormControl, Button } from "react-bootstrap";

function RoutineForm(props) {


    return (
        <div className='new-rt-form d-flex flex-column col-6 justify-content-center align-items-center border'>
            <h1>{props.children}</h1>
            <Form>
                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Routine Name</FormLabel>
                    <FormControl type="text" placeholder="Enter Routine Name" />
                </FormGroup>
                <Button variant="primary" type="submit" onClick={(event) => {event.preventDefault(); props.onSubmit()}}>
                    Submit
                </Button>
            </Form>


        </div>
    )
}

export default RoutineForm