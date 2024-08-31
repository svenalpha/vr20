
import {useState} from "react";     
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";    
import axios from "axios";   
//import "../app.css";                         

   
//export const UpdateWorkoutForm = ({ doUpdatefunction, setDoUpdate, ...workout })=>{  
//export function  UpdateWorkoutForm  ({ doUpdate:any, setDoUpdate, ...workout }){   
// export const UpdateWorkoutForm = ({ (props.doUpdate), setDoUpdate, ...workout })=>{    
export const UpdateWorkoutForm = ({...props}) =>{
console.log("props in UpdateWorkoutForm = ",props);
const doUpdate = props.doUpdate;
console.log("props.doUpdatex in UpdateWorkoutForm = ",props.doUpdate);
const setDoUpdate = props.setDoUpdate;
console.log("props.setDoUpdate in UpdateWorkoutForm = ",props.setDoUpdate);
const workout = props.workout;    

console.log("in UpdateWorkoutForm  workout = ",workout);  
console.log("in UpdateWorkoutForm  props.workout = ",props.workout);        
console.log("in UpdateWorkoutForm  props._id = ",props._id);     
 //const {dispatch} = useWorkoutsContext();          
     
// original   const [woutx,setWoutx] = useState([...workout]);        

console.log("in UpdateWorkoutForm  props.title = ",props.title);     
//console.log("in UpdateWorkoutForm  workout.title = ",workout.title);  
console.log("in UpdateWorkoutForm  pre useState(workout)");          
// const [wout,setWout] = useState(workout); 
const [wout,setWout] = useState();
const [title,setTitle] = useState(props.title);  
const [reps,setReps] = useState(props.reps);             
const [load,setLoad] = useState(props.load);            
const [idxx,setIdxx] =  useState(props._id);    

const [error,setError] = useState(null);  
const [emptyFields,setEmptyFields] = useState([]); 

//const {workouts, dispatch} = useWorkoutsContext(); 
const {dispatch} = useWorkoutsContext();

const [titleText,setTitleText] = useState([title] as never);
const [loadText,setLoadText] = useState([load] as never);
const [repsText,setRepsText] = useState([reps] as never);

const handleSubmitUpdate = async (e:any)=>                     
 {e.preventDefault();    
  // line below essential. perhaps problem with useState? component of 
  //component? string encoding? needs an original workout object?
  //setWout([ wout.title = title, wout.load =load , wout.reps =reps]);
  console.log("wout pre = ",wout);
  //setWout([ wout[title] = title, wout[load] =load , wout[reps] =reps]); 
  console.log("wout post = ",wout);
  console.log("title , load , reps =",title,load,reps);

  //try{ axios.patch("/rrr/updateMongo/" + workout._id,{
  try{ await axios.patch("/rrr/updateMongo/" + idxx,{
       load : load,                                                   
       reps :reps 
      }
                       )
        .then(response => {//console.log(" .then axios. XXXXXXXXXXXXX  response succeeded.  response = ",response);
                           
                           //console.log(" .then axios.   response succeeded.  response = ",response.data);
                           dispatch({type: "UPDATE_WORKOUT",payload: response.data });
                           console.log("UpdateWorkoutForm  response.ok  response.data = ",response.data); 
                            
                           setEmptyFields([]);setError(null);setTitle(""); setLoad(""); setReps("");   
                           //dispatch({type:"UPDATE_WORKOUT",payload: response.data});             
                           //console.log("in UpdateWorkoutForm, patched, possibly. json =",json);
                           setDoUpdate(false);
                           console.log(" CreateWorkoutForm  response.data = ",response.data);
                           //dispatch({type:"UPDATE_WORKOUT",payload: response.data});  
                          }                                         
                      )                                  
     }  catch{    
                console.log("axios.patch failed.   ");
                //setEmptyFields(response.data.emptyfields);  //setEmptyFields(json.emptyFields);
                //console.log("CreateWorkoutForm json.emptyFields = ",response.data.emptyFields); 
                console.log("CreateWorkoutForm  emptyFields = ",emptyFields); 
                console.log("CreateWorkoutForm error in adding entry, CreateWorkoutForm ",error);              
             



             }
  
  
  // const response = await fetch("/rrr/updateMongo/" + idxx,{               
  //  method:"PATCH",                                           
  //  //body: JSON.stringify(workout),                           
  //  body: JSON.stringify({title: title, load: load, reps: reps}),                  
  //  headers: {"Content-Type": "application/json"                        
  //           }                                         }                                                      
  //                             );                                            
  //console.log("affffter response. response.data = ",response.data);                                    
  //const json = await response.json();      
  //console.log("const json = ",json);     
  //if (!response.ok) {setError(json.error);  
  //                   console.log(" CreateWorkoutForm  json = ",json);
  //                   setEmptyFields(json.emptyFields);
  //                   console.log("CreateWorkoutForm json.emptyFields = ",json.emptyFields); 
  //                   console.log("CreateWorkoutForm  emptyFields = ",emptyFields); 
  //                   console.log("CreateWorkoutForm error in adding entry, CreateWorkoutForm ",error);              
  //  
  //                  }else
  // 
  //                  {
  //                   console.log("UpdateWorkoutForm  response.ok"); 
  //                   setEmptyFields([]);setError(null);setTitle(""); setLoad(""); setReps("");   
  //                   dispatch({type:"UPDATE_WORKOUT",payload: json});             
  //                   console.log("in UpdateWorkoutForm, patched, possibly. json =",json);
  //                   setDoUpdate(false);
  //                  }         
 }      //    end  const handleSubmitUpdate = async (e:any)=>  
                
return(<>                      
                                            
<form className="create">      
  <h3>update an entry</h3> 

  <label> Exercise title</label>   
  <input
  type="text"
  onChange = {(e)=>setTitle(e.target.value)}
  value ={title}
  className={emptyFields.includes(titleText) ? "error" : " "}
  />  


 {/*  before typescript was : className={emptyFields.includes("load") ? "error" : " "}  */}
 <label> Load in kg: </label>   
  <input
  type="number"
  onChange = {(e)=>setLoad(e.target.value)}
  value ={load}
  className={emptyFields.includes(loadText) ? "error" : " "}
  />  

 <label> Reps </label>   
  <input
  type="number"
  onChange = {(e)=>setReps(e.target.value)}
  value ={reps}
  className={emptyFields.includes(repsText) ? "error" : " "}
  />  
  <button type='submit' className='btn' onClick={handleSubmitUpdate}>submit form</button>
  {error && <div className="error">{error}</div> }  
</form>           
   </>)                     
                                                      
}                      

export default UpdateWorkoutForm;  















