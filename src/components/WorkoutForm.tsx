import {useState} from "react";
import axios from "axios";
import api from '../../server/app';
import   { useWorkoutsContext }    from "../hooks/useWorkoutsContext";
import "./WorkoutForm.css";

// POST
export const WorkoutForm = ({...workout})=>
  {const {dispatch} = useWorkoutsContext();
   const [title,setTitle] = useState('');
   const [reps,setReps] = useState('');
   const [load,setLoad] = useState('');  
   const [error1,setError1] = useState("no error error1");  
   //const [error2,setError2] = useState("no error error2");
   const [error2,setError2] = useState(null);
   const [emptyFields,setEmptyFields] = useState([] as any);





      //  POST
   const handleSubmitCreate = async (e:any)=>                     
    {e.preventDefault();    
     
     const workout = {title,load,reps};  
     //const response1 = await fetch("/api/workout");
              
     //const response = await fetch("http://localhost:5173/api/workout",{
    // const response = await fetch("/api/workout",{     
    //   method:"POST",                                                                
    //   body: JSON.stringify(workout),                       
    //       headers: {"Content-Type": "application/json"
    //                }                            }              
    //                             );    
    //
    
    
     // const response = await fetch("/rrr/postMongo",{     
     //   method:"POST",                                                                
     //   body: JSON.stringify(workout),                       
     //   headers: {"Content-Type": "application/json"
     //            }                                }                            
     //                             );  
    
     var test1,test2;
    // ie POST new entry
    console.log("WorkoutForm  pre axios.post, workout = ", workout);  
    await axios.post('/rrr/postMongo',workout)
     .then((response) =>     //  ie success
       {console.log(" axios response = ",response);
      setEmptyFields([]);setError2(null);setTitle(""); setLoad(""); setReps("");   
       //dispatch({type:"CREATE_WORKOUT",payload: json});
       dispatch({type:"CREATE_WORKOUT",payload: response.data});
       }
          )     /////      .then((response) =>            
     .catch((error) => 
       {test1= error.response.data.error;
        console.log("axios create error: error.response.data.emptyfields   test1 = ",test1);
        console.log("6 axios error.response.data.error  = ",error.response.data.error);
        console.log("6 axios error.response.data.emptyfields  = ",error.response.data.emptyfields,(1))
        console.log("7 axios error.response  = ",error.response);
        console.log("8 axios error.response.data.emptyfields  = ",error.response.data.emptyfields,(2))
        console.log("10 axios error.response.data.error.emptyFields,{emptyFields}) = ",error.response.data.error.emptyFields,{emptyFields});
        console.log("11 axios error.response.data.emptyFields,{emptyFields,Array} = ",error.response.data.emptyFields,{emptyFields,Array});
        console.log("12 axios error.response.data.emptyFields  = ",error.response.data.emptyFields,{emptyFields,Array});
        console.log("13 axios error.response.data.emptyFields  = ",error.response.data.emptyFields,{emptyFields,Array});
        test2=error.response.data.emptyFields,{emptyFields,Array};
        setEmptyFields(test2);
        console.log("test2 = ",test2);
        console.log("test2[1] = ",test2[1]);
        setError2(test1);
       }           
           ); //  end catch
                                                         
                                                                                   
     console.log("affffter response");                                    
     //const json = await response.json();      
     //console.log("const json = ",json);

     //if (!response.ok) {setError(json.error);  
     //                   console.log(" CreateWorkoutForm  json = ",json);
     //                   setEmptyFields(json.emptyFields);
     //                   console.log("CreateWorkoutForm json.emptyFields = ",json.emptyFields); 
     //                   console.log("CreateWorkoutForm  emptyFields = ",emptyFields); 
     //                   console.log("CreateWorkoutForm error in adding entry, CreateWorkoutForm ",error);              
     //                  }else
     //                  {setEmptyFields([]);setError(null);setTitle(""); setLoad(""); setReps("");   
     //                  // // dispatch({type:"CREATE_WORKOUT",payload: json});             
     //                   console.log("in WorkoutForm, new entry added. json =",json);
     //                  }         
    }  ///   end  const handleSubmit = async (e:any)=>      
       




    return(<>

                                           
      <form className="create" onSubmit={handleSubmitCreate}>      
      <h3>add a new entry</h3> 
    


      <label> Exercise title</label>   
      <input
      type="text"
      onChange = {(e)=>setTitle(e.target.value)}
      value ={title}
      className={emptyFields.includes("title") ? "error" : " "}
      />  
    

<label> Load in kg: </label>   
<input
type="number"
onChange = {(e)=>setLoad(e.target.value)}
value ={load}
className={emptyFields.includes("load") ? "error" : " "}
/>  


    
<label> Reps </label>   
      <input
      type="number"
      onChange = {(e)=>setReps(e.target.value)}
      value ={reps}
      className={emptyFields.includes("reps") ? "error" : " "}
      />  


      <button type='submit' className='btn' onClick={handleSubmitCreate}>submit form</button>
      {error2 && <div className="error">{error2}</div> }  
    </form>   
    

 

          
       </>)   // end return
           
  }  // end const WorkoutForm = ()=>


export default WorkoutForm;  


  