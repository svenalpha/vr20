import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import { useLocation } from 'react-router-dom'; 
import axios from "axios";
import  Cookies  from "js-cookie";   
import { doCheckToken } from "../../utils/checkToken";
import { useLoggedInContext }    from "../../hooks/useLoggedInContext";
import  jwt   from "jsonwebtoken"; 

const About: React.FC<AboutProps> = (props) => {
    const [datax,setDatax] = useState(); 
    const [users,setUsers] = useState([]); 
    const [result,setResult] = useState("");  
    const [legend,setLegend] = useState();  
    const [folksArray,setFolksArray] = useState([]); 
    const [usersArray,setUsersArray] = useState([]);
    const [legend2,setLegend2] = useState("undecided");
    const {loggedIn, setLoggedIn,loggedInName,setLoggedInName} = useLoggedInContext();

    const navigate = useNavigate();
    //const url = "/rrr/peopleapi";  


/*AA*/   
var  res2 : any;
var  res3 : any;
var res4 : any
var res9 : any;
var resA : any;



   const theReturn =  async () =>
        { console.log("About.tsx theReturn");  //const navigate = useNavigate();
          console.log("About.tsx theReturn, PRE doCheckToken, res4 = ",res4); 
          res4   =   await doCheckToken();
          setLegend2(res4);    
          console.log("About.tsx theReturn, POST doCheckToken, res4 = ",res4); 
          if (res4 !== "verified")  // ie fake or expired    
           {setLoggedIn(false);  
            navigate('/login',{replace: true});
           }   
          //return res7;
        } 

    useLayoutEffect(() =>
        {console.log("in About / useLayoutEffect ");   
         if (!loggedIn)   navigate('/login',{replace: true}); // do not check token if not logged in   
         else theReturn();  
         //console.log("in About / useLayoutEffect  res5 =",res5);  
        },[]        );  //   end  useLayoutEffect(() =>                                                

        
    const helmet = useHelmet();

    async function  doGetDatax()
        {//axios.get('/rrr/peopleapi').then((response) => {    // "/api"     
         //console.log(" useEffect, response data = ",response.data)    
         // setUsers(response.data);
         // console.log("users = ",users);
         //                                              }
         //                                )               
            
        axios.get('/rrr/users').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setUsersArray(response.data);
            console.log("userArray = ",usersArray);
                                                   }
                                    )          

        axios.get('/rrr/folks').then((response) => {    // "/api"     
            console.log(" useEffect, response data = ",response.data)    
            setFolksArray(response.data);
            console.log("folksArray = ",folksArray);
                                                   }
                                    )          
            axios.get('/rrr/tsmessage').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setLegend(response.data);
                                                            }
                                            )     
        }   //       async function  doGetDatax()
        useEffect(() => {doGetDatax()},[]);

    
    useEffect(() => {
        helmet.setTitle("About")
        
    },[helmet])

    return (
        <>
            <h1>About Us</h1>
            <p>legend = {legend}</p>
            <p>legend2 = {legend2}</p>

            <div>
            {
            folksArray.map(folk => (
                                    <div key={folk["id"]}> 
                                       <h6>{folk['name']}      {folk['star']}</h6>
                                     </div>  
                                   )         
                          )                 

              }
         </div> 

         <div>
            {
            usersArray.map(user => (
                                    <div key={user["id"]}> 
                                       <h6>{user['username']}      {user['city']}</h6>
                                     </div>  
                              )         
                      )                 

              }
         </div> 

            <p>qwwwertyuiogggggghhjhhjjkkll</p>
        </>
    )
}

interface AboutProps {
    [key: string]: any
}

export default About;