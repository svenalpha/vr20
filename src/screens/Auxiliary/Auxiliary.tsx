


import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState, useLayoutEffect} from 'react';
import { useNavigate } from 'react-router-dom';  
import axios from "axios";
//import requireAuth from "../../core/authRoutes";
import  Cookies  from "js-cookie"; 


const Auxiliary: React.FC<AuxiliaryProps> = (props) => {
  //console.log("in Auxiliary , props = ",props); 
  const navigate = useNavigate();
  const helmet = useHelmet();
  

  var  res2 : any;
  async function  doCheck(token:any)
    {try{await axios.post('/rrr/doJwtVerify',{token})  
          {res2 = "verified"; 
          }                 
        }catch(err:any){console.log("token exists but is invalid.err.message = ",err.message); 
                        res2 = "unverified";  
                       }  
     if (res2 != "verified") navigate('/login',{replace: true});
    }  //   end async function  doCheck(token:any)  

  
        

    useEffect(() => {
        helmet.setTitle("Auxiliary")
    },[helmet])

    return (
        <>
            <h1>Auxiliary</h1>
            
           <p>empty page </p>
        </>
    )
}

interface AuxiliaryProps {
    [key: string]: any
}

export default Auxiliary;




