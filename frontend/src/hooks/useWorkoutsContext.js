import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";
export const useWorkoutContext = ()=>{
    const context = useContext(WorkoutsContext)
    if(context===undefined)throw Error("fucking error!")
    return context
}