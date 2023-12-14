import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'

export default function WorkoutDetails({workout}) {
    const {dispatch} = useWorkoutContext()
    const handleDelete = async()=>{
        const response = await fetch('/api/workouts'+workout._id,{
            method:'DELETE'
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:'DELETE_WORKOUT',payload:json})
        }
    }
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>{workout.load}</strong></p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <button onClick={handleDelete}>X</button>
    </div>
  )
}
