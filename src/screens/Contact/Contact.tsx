import useHelmet from '@hooks/useHelmet';
import React, { useEffect, useState,useContext } from 'react';
import axios from "axios"
import   { useWorkoutsContext }    from "../../hooks/useWorkoutsContext";
import   { useLoggedInContext }    from "../../hooks/useLoggedInContext";

const Contact: React.FC<ContactProps> = (props) => 
{
    const [legend, setLegend] = useState("  here is useState original legend");
    const [legend2, setLegend2] = useState("  here is useState original legend pre fetch ");
    const [data, setData] = useState();
    const [datax, setDatax] = useState([]);
    const {workouts, dispatch} = useWorkoutsContext(); 
    const {loggedIn, setLoggedIn,loggedInName,setLoggedInName} = useLoggedInContext();
    //const {test1} = useLoggedInContext();
    console.log("Contact loggedIn = ",loggedIn);
    //console.log("Contact test1 = ",test1);
    const url ="";
    const helmet = useHelmet()
   //const useLoggedInCointextx :any = useLoggedInContext; 
   // console.log("Contact.tsx. loggedIn =",loggedIn);
  
   

    useEffect(() => {
        helmet.setTitle("Contact")
    }, [helmet])

    useEffect(() => {
        axios.get('/api/proxy1').then((response) => {         
        //console.log(" useEffect, response data = ",response.data)    
         setLegend(response.data);
                                                    }
                                      )        
        //axios.get('/rrr/doGetSecondExport').then((response) => {    // "/api"     
        //       //console.log(" useEffect, response data = ",response.data)    
        //       setLegend2(response.data);
        //                                                       }
        //         )                                         
                                        

                    }, [])     // end useEffect
                    
//function async getDataFromMongo() 
const getDataFromMongo = async () => 
  {    //axios.get(url)
   //   .then((res) => setData(res.data))
   //   .catch((err) => {console.error(err);
   //                   });   
   console.log("inside getDataFromMongo");    
   //console.log("in GetWorkouts/getAllWorkouts first line");
   //console.log("url = ",url);  

   await axios.get('/rrr/getMongo').then((response) => {    // "/api"     
    //console.log(" useEffect, response data = ",response.data)    
    if (response.status === 200)   // ie successful   
      {//setDatax(response.data);  
        dispatch({type: "SET_WORKOUTS", payload: response.data});
        //setDatax(response.data);
       console.log("response to getMongo datax = ",datax);
      }
                                                       }
                  )  

      
   //const response = await fetch(url);
   //const json = await response.json();
   //console.log("in getAllWorkouts, response = ",response);
   //if  (response.ok)
   // {//x setWorkouts(json);
   //  console.log("in GetWorkouts, before dispatch is invoked. json =",json);
   //   dispatch({type: "SET_WORKOUTS", payload: json});
   //    console.log("in getAllWorkouts, workouts = ",workouts);     
   // }   



  }   //   end const getDataFromMongo = async () => 




    return (
        <>
            <h4>Contact Page</h4>
            <p>{legend}</p>
            <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? "logged IN (toggle)" : "logged OUT (toggle)"}</button> 
            <p> legend2.....loggedIn = {loggedIn}</p>
              <h5>{loggedIn ? "logged IN " : "logged OUT"}</h5>   
            <div>
            {
             workouts && Object.values(workouts).map((dat:any) => (
                                    <div key={dat["_id"]}> 
                                       <h6>{dat['title']}    {dat['reps']}   {dat['load']}</h6>
                                     </div>                      
                                             )                                    
                                      )                                                                

            }
            </div> 
            
            
            <div>
            <img src="/images/b10.jpg" style={{width: "300px"}}/>
            </div>
                           




         
            <button onClick={() =>(getDataFromMongo())}>Access server using proxy</button>
        </>
    )
}   //   // end    const Contact: React.FC<ContactProps> = (props) => {


//onClick={()=>(setDoUpdate(true))}>
interface ContactProps 
{ [key: string]: any
}    

export default Contact




/*
from vr14
function App() {
    const [data, setData] = useState();
    const urlWithProxy = "/api/v1";
  
    function getDataFromServer() {
      axios
        .get(urlWithProxy)
        .then((res) => setData(res.data))
        .catch((err) => {
          console.error(err);
        });
    }
  
    return (
      <div className="App">
        <h4>    client    no.02       13:04     11/04/2024 </h4>
        <button onClick={getDataFromServer}>Access server using proxy</button>
        <p>data : {data}</p>
      </div>
    );
  }
  
  export default App;
*/  
