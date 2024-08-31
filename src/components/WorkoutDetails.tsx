import {useState} from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";   
import { UpdateWorkoutForm } from "./UpdateWorkoutForm";
import axios from "axios";
import { formatDistanceToNow }  from "date-fns/formatDistanceToNow";

export const WorkoutDetails = ({...workout})=>
  {const [title,setTitle] = useState("title in WorkoutDetails");
   const [doUpdate,setDoUpdate] = useState(false); 
   const {dispatch} = useWorkoutsContext();


   const handleClickDelete = async ()=>
    {console.log("workout._id = ",workout._id);
    // const response = await fetch("/rrr/deleteMongo/" + workout._id,{method:"DELETE"});
    // console.log("handleclickdelete, after fetch");
    // const json = await response.json();
    // if (response.ok)     
    //   {console.log("handle click delete ok");
    //    //dispatch({type: "DELETE_WORKOUT",payload: json});
    //   } 
  try{     
      await axios.delete("/rrr/deleteMongo/" + workout._id)
          .then(response => {dispatch({type: "DELETE_WORKOUT",payload: response.data});
                             console.log(" .then axios delete response.   response = ",response);
                            }                                         
                        )                                  
     }  catch{    
             console.log("axios.delete failed.   ");
             }
    }     //  end  const handleClickDelete = async ()=>

  //  console.log("WorkoutForm  pre axios.post, workout = ", workout);  
  //  await axios.post('/rrr/postMongo',workout)
  //   .then((response) =>     //  ie success
  //     {console.log(" axios response = ",response);
//
  //     dispatch({type:"CREATE_WORKOUT",payload: response.data});
  //     }
  //        )     /////  end    .then((response) =>            
  //   .catch((error) => 
  //     {
  //     }           
  //         ); //  end catch
    return(<>
           <div className= "workout-details">
             <p>zzzzzzz {title}  xxxxxxxx</p>   
             <h4>{workout["title"]}</h4>   
             <p><strong>Load (kg): </strong>  {workout["load"]}</p>
             <p><strong>Reps: </strong>  {workout["reps"]}</p>  
             {/* <p>{workout["createdAt"]}</p>  */}
             <p>{formatDistanceToNow(new Date(workout["createdAt"]),{addSuffix: true})}</p>

             {/* <button onClick={handleClickDelete}>delete</button>  */}
             <button className="material-symbols-outlined" onClick={handleClickDelete}>Delete Sweep </button>
             <button onClick={()=>(setDoUpdate(true))}>setDoUpdate</button>
            {/* {doUpdate && <UpdateWorkoutForm key={workout._id} workout ={workout}  doUpdate={doUpdate} setDoUpdate={setDoUpdate} />}  */}    {/* ie if setDoUpdate clicked, doUpdate =1, so <UpdateWorkoutForm /> fires   */}
             {doUpdate && <UpdateWorkoutForm key={workout._id}  doUpdate  setDoUpdate={setDoUpdate} {...workout} />}                                                                                                                                                                                                                                
   <h4>inside end WorkoutDisplayDetails.js</h4>


           </div>    
       </>)   // end return
           
  }  // end const WorkoutDeails = ()=>


export default WorkoutDetails;  


  