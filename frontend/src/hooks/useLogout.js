import { useAuthContext } from "./useAuthContext"

export const useLogout = ()=>{
    const {dispatch} = useAuthContext()

    const logout = ()=>{
        //remove token from local storage
        localStorage.removeItem('user')
        //updating the global context
        dispatch({type:'LOGOUT'})
    }


    return {logout}
}