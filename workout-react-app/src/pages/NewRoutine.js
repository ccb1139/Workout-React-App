import React from 'react'
import RoutineForm from '../components/RoutineForm'

function NewRoutine() {
    function onSubmit() {
        console.log('submitted')
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <RoutineForm onSubmit={onSubmit}>New Routine</RoutineForm>
        </div>
    )
}

export default NewRoutine