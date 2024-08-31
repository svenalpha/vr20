

import express, {Request, Response} from "express"; 
import useHelmet from '@hooks/useHelmet';
import React, { useContext, useEffect , useState} from 'react'; 
import axios from "axios";
//import  { WorkoutForm } from "../../components/WorkoutForm";
import  { WorkoutDetails } from "../../components/WorkoutDetails";
import  { WorkoutForm } from "../../components/WorkoutForm";
import  { UpdateWorkoutForm } from "../../components/UpdateWorkoutForm";
import   { useWorkoutsContext }    from "../../hooks/useWorkoutsContext";
//import   * as  useWorkoutsContext     from "../../hooks/useWorkoutsContext";

// import   dispatch  from "../../hooks/useWorkoutsContext";
//import workouts from "../../hooks/useWorkoutsContext";
//  import  dispatch  from "../../hooks/useWorkoutsContext";

const Extra: React.FC<ExtraProps> = (props) => 
{//const [datax,setDatax] = useState(); 
 //const [users,setUsers] = useState([]);  
 //const [legend,setLegend] = useState();  
 //const [folksArray,setFolksArray] = useState([]); 
 //const [usersArray,setUsersArray] = useState([]);
 //const url = "/rrr/peopleapi";  

 const helmet = useHelmet();
// const [workouts,setWorkouts]=useState(null); // using context NN
const {workouts, dispatch} = useWorkoutsContext();  //  const {workouts, dispatch} = useWorkoutsContext();
console.log("in extra, workouts = ",workouts);
console.log("in extra, dispatch = ",dispatch);
//const {workouts} = useWorkoutsContext();
//const  dispatch  = useWorkoutsContext();

//const dispatch= ()=> {console.log("hhhh")};
//let aaa = this.dispatch();
//dispatch(null);


const [str1,setStr1] = useState("abcdefghijklmnop"); 

 
 // async function fetchWorkouts()  
 const fetchWorkouts = async () =>
  {//const response =   await axios.get('/rrr/getMongoWorkouts');
   //const json = await response.json();
   //if (response.ok)
   // {  setWorkouts(json);
   // }
  
   
   await axios.get('/rrr/getMongo').then((response) =>{    // "/api"    
    //console.log(" useEffect, response data = ",response.data)  
    if (response.status === 200)   // ie successful               
      {//setWorkouts(response.data);   //   using context NN
       
       //const disp = dispatch; 
       
       dispatch({type: "SET_WORKOUTS", payload: response.data});        
       console.log(" 200  response to getMongo, workouts = ",workouts);  
       console.log("  200  response = ",response); 
      }                                       
                                                      }                
                  )  //  end   await axios.get
  }    //  end  const fetchWorkouts = async () => 
useEffect(() =>{fetchWorkouts();},[dispatch])


// async function  handleTestClick  (e:any)  
// { console.log("inside handleTestClick");
  //const workout = {title,load,reps};  
  //await axios.post('/rrr/postMongo',workout)
  //.then((response) => 
  //  {if (response.status != 200)
  //    {  console.log("post failed with response.status != 200 ");
  //    }  else 
  //    { console.log("post succeeded with response.status == 200. response.status = ",response.status);
  //      console.log("post succeeded with response.status == 200. response.data = ",response.data);
  //      console.log("post succeeded with response.status == 200. response = ",response);
  //    }  //  end  if (response.status != 200)   
  //  }                    
  //     );   /// end   .then
//}
    
useEffect(() => 
  {helmet.setTitle("Extra")
  },[helmet])

return (<>
  <h1>Extra</h1>
     


  <div className= "home">
    <div className= "workouts">    

    {workouts && Object.values(workouts).map((workout:any) => (  
                                    <div key={workout["_id"]}>                         
                                       <h6>{workout['title']}  {workout['reps']}   hhhh uuuuu </h6>        
                                    </div>                                                            
                                                              )                                  
                                            )                    
    }
   <span> pre workoutDetails    </span>
    { workouts && Object.values(workouts).map((workout:any) => (      
                      <WorkoutDetails key ={workout["_id"]}   {...workout} /> //workout = { workout } />  /// {...workout}
                                                               )     
                                             )                  
    }

    </div>
  </div>
  <span> pre WorkoutForm</span>
  <WorkoutForm />  
            
           <p>qwwwertyuiogggggghhjhhjjkkll</p>   

    </>)       // end return()
}     //   end   const Extra: React.FC<ExtraProps> = (props) => 

interface ExtraProps 
{ [key: string]: any
}

export default Extra;




