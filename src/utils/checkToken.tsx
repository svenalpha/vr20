
import  Cookies  from "js-cookie"; 
import axios from "axios";
//import { useNavigate } from 'react-router-dom';  
// const navigate = useNavigate();


var res2 : any;
var res3 : any;
async function  doCheck(token:any)
    {//const navigate = useNavigate();
      
      console.log("checkToken in doCheck");
        
     try{ 
      console.log("checkToken in doCheck, pre await axios.post    token = ",token);
      await axios.post('/rrr/doJwtVerify',{token})  
                   {console.log("checkToken  axios.post token found "); 
                    res2 = "verified"; 
                    console.log("inside async function doCheck POST doCheck token found , res2 = ",res2);
                    return res2;
                   }   
     //axios.post('/rrr/doJwtVerify',{token}).then(()=>  
     ////console.log("in About doCheck POST successful doJwtVerify"); 
     //              {console.log("axios.post token found "); 
     //               res2 = "verified"; 
     //               console.log("inside async function doCheck POST doCheck token found , res2 = ",res2);
     //               return res2;
     //              }                            )

                   
                   

        }catch(err:any){console.log("in checkToken token exists but is invalid.err.message = ",err.message); 
                        res2 = "unverified";  
                        console.log("inside useLayoutEffect checktoken CATCH, POST doCheck   res2 = ",res2); 
                        return res2;                                            
                       }  
     //console.log("inside useLayoutEffect checkToken post try/catch, POST doCheck   res2 = ",res2); 
      // if (res2 != "verified")  res2 = "anything";//navigate('/login',{replace: true});
     // return res2;
             //return res2;                                                       
    }  //   async function  doCheck(token:any)  

function  passResult(res3:any)
    {console.log("doCheckToken / passResult G  res3 = ",res3);
     return res3; 
    }


export const doCheckToken = async () =>
  { //const navigate = useNavigate();
    console.log("checkToken doCheckToken, start");
    const num = 63; 
    var var1 :any;
    //const check = doCheck
    const token:any = Cookies.get("jwt");   //Cookies.
      if (token) {var result = await doCheck(token);             
                  console.log("checkToken doCheckToken token exists var result = ",result);     
                   return result;               
    //if (token) { doCheck(token).then((res3)  => {console.log("checkToken doCheckToken token exists");   
    //                                             console.log("checkToken doCheckToken f token exists  res3 = ",res3);       
    //                                             var1=res3; 
    //                                             console.log("checkToken doCheckToken f token exists No.2  res3 = ",res3); 
    //                                              //return res3;// ="asdfghjk";//return passResult(res3);      // return res3;
    //                                            }).then(() => {console.log("checkToken doCheckToken G token exists in a later .then  res3, var1 = ",res3,var1);
    //                                                            //return var1; 
    //                                                          }).then(() => { return var1}
    //                                                            //return var1; 
    //                                                                 );
                                               
               } else 
               {res3 = "inexistant";//navigate('/login',{replace: true});
                console.log("checkToken  doCheckToken  token inexistant  res3 =",res3); 
                return res3;
               } 

   
  }

  export default doCheckToken;


