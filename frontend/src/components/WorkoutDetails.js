import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import del from '../assets/delete.svg'
import { useAuthContext } from '../hooks/useAuthContext'
export default function WorkoutDetails({workout}) {
    const {dispatch} = useWorkoutContext()
    const {user} = useAuthContext()
    const handleDelete = async()=>{
        if(!user){
            return 
        }
        const response = await fetch('/api/workouts/'+workout._id,{
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${user.token}`
            }
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
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <img src={del} alt='delete' className='trash_can' onClick={handleDelete} />
    </div>
  )
}
