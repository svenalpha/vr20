
import React, { useState } from "react";
import { createContext } from "react";
import   { useLoggedInContext }    from "../hooks/useLoggedInContext";

//type LoggedInContextType3 ={loggedIn: any,  setLoggedIn: any };//(loggedIn:any) => {void:any} };   // setLoggedIn:(any:any) => {any:any} }; 
type LoggedInContextType3 ={loggedIn: any,  setLoggedIn: any , loggedInName:any,setLoggedInName:any};
export const LoggedInContext3 = createContext<LoggedInContextType3>({} as LoggedInContextType3);   

//type LoggedInContextType ={loggedIn: any,  setLoggedIn:(any:any)=>{any:any} }; 
//type LoggedInContextType ={test1: any;}; 
//type log = {loggedin:any };

//interface LoggedInContextTypexx {loggedInxx: any}
//let loggedInx: LoggedInContextTypexx;
//let setLoggedInxx: any;
//const [loggedInxx,setLoggedInxx] =useState({loggedInxx: false});

//export const LoggedInContext = createContext<LoggedInContextType>({} as LoggedInContextType);
export const LoggedInContext1 = React.createContext({});
//export const LoggedInContext = React.createContext({})
type LoggedInContextType2 ={test1: any}; 
export const LoggedInContext2 = createContext<LoggedInContextType2>({} as LoggedInContextType2);


//type WorkoutsContextType ={workouts: string, dispatch:(workouts:any) => {null:any} }; 
//export const WorkoutsContext = createContext<WorkoutsContextType>({} as WorkoutsContextType);
//export const LoggedInContext = createContext<LoggedInContextType>({} as LoggedInContextType);

//export const LoggedInContext = React.createContext({})


//export const workoutsReducer = (state:any,action:any)=>
  
//export const LoggedInContextProvider = (loggedIn: any,setLoggedIn : any)=>      

//export const LoggedInContextProvider = ({ ...children  })=>  
export const LoggedInContextProvider =   (props : any) =>  //({ ...children })=> //(props : any) =>  //  ({ ...children }) =>// (props : any) =>   //(props : any) =>
{ //const loggedIn :boolean=
  const [loggedIn ,setLoggedIn] = useState(false);
  const [loggedInName, setLoggedInName] = useState("");
  const test1:string ='pineapple';
  console.log("LoggedInContext, test1 = ",test1);
  //const [loggedIn,setLoggedIn] = useContext(false);
  //const {loggedIn :any, setLoggedIn:any} = useLoggedInContext();



   //  { Object.values(children)  }    {props.children}      {{test1}}>     // {{loggedIn , setLoggedIn}}> 
      //     {props.children}     //(string : any) =>{null : any}}}>   //  {{  [loggedIn, setLoggedIn:()] }}>   
     // { Object.values(children)  }    replaced by { props.children } [couldn't use comment]    
    return(
        <LoggedInContext3.Provider  value =  {{loggedIn, setLoggedIn, loggedInName, setLoggedInName}}>    
               {props.children}     
        </LoggedInContext3.Provider>  
          )    

}    //  end export const LoggedInProvider = (props: any) =>    



//export default { WorkoutsContextProvider, workoutsReducer };
export default { LoggedInContextProvider };

