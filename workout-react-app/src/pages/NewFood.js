import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import RoutineForm from '../components/NewFoodForm';

function NewFood() {


    const onSubmit = (foodName, expirationDate) => {
        axios.post('http://127.0.0.1:4000/foods/create-fridge', { foodName, expirationDate }).then((res) => {
            if (res.status === 200)
                console.log(res.data); 
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