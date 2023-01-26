import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import RoutineForm from '../components/RoutineForm';

function NewFood() {


    const onSubmit = (foodName, expirationDate) => {
        axios.post('http://127.0.0.1:4000/routines/create-routine', { foodName, expirationDate }).then((res) => {
            if (res.status === 200)
                alert('Student successfully created')
            else
                Promise.reject()
        }).catch(err => alert('Something went wrong'))
    }


    function _onSubmit(t1, t2) {
        console.log(t1, t2)
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <RoutineForm onSubmit={onSubmit} >New Food</RoutineForm>
        </div>
    )
}

export default NewFood