import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useLogin = ()=>{
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const {dispatch}=useAuthContext()
    const login = async(email,password)=>{
        setError(null)
        setLoading(true)
        const response = await fetch('/api/user/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            setLoading(false)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN',payload:json})
        setLoading(false)
        }
        
    }

    return {login,loading,error}
}