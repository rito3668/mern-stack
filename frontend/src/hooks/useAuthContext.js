import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const useAuthContext = ()=>{
    const context = useContext(AuthContext)
    if(context===undefined)throw Error("consumer must be inside an provider")


    return context;
}