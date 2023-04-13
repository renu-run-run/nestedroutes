import { useContext } from "react";
import { myContext } from "./Context";
import { Navigate } from "react-router-dom";

function Protect({children}){
    const { isloggedin} = useContext(myContext);
    if(isloggedin){
        return children;
    }else{
        return <Navigate to ="/"/>;
    }
}

export default Protect;