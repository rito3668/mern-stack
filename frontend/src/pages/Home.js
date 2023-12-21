import { useEffect, useState } from "react"
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
export default function Home() {
    const {user} = useAuthContext()
    const {workouts,dispatch} = useWorkoutContext()
    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const response = await fetch('/api/workouts',{
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if(response.ok){
                dispatch({type:'SET_WORKOUTS',payload:json})
            }
        }
        if(user){
            fetchWorkouts()
        }
    },[dispatch,user])
  return (
    <div className="home">
        <div className="workouts">
            {workouts&&workouts.map((workout)=>(
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
        </div>
        <WorkoutForm/>
    </div>
  )
}
