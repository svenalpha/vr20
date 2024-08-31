
import { LoggedInContext3 } from "../context/LoggedInContext.jsx";
import { useContext } from "react";

export const useLoggedInContext = ()=>
{ console.log("useLoggedInContext ");
    const context3 =useContext(LoggedInContext3);
  console.log("useLoggedInContext  context3 = ",context3);  
    if (!context3) {throw Error("aaa use context only in designated components");}  

    return context3;
}    


export default useLoggedInContext;
