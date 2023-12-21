import  { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
export default function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup,error,loading} = useSignup()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await signup(email,password)
    }
  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h3>Sign up:</h3>
        <label>Email:</label>
        <input  
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
        />
        <label>Password:</label>
        <input  
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
        />
        {!loading&&<button>Sign Up</button>}
        {loading&&<button disabled>loading...</button>}
        {error&&<p className='error'>{error}</p>}
    </form>
  )
}
