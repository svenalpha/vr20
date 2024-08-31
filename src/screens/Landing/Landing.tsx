


import useHelmet from '@hooks/useHelmet';
//npimport { Helmet } from "react-helmet";
import React, { useEffect , useState} from 'react';
//import styles from './Landing.module.scss';  
import "./Landing.css";
import { getAllWorkoutEntries } from 'server/controllers/workoutController';





const Landing: React.FC<LandingProps> = (props) => 
{
console.log("in Landing, props = ",props);   

const helmet = useHelmet();

//<Helmet><style type="text/css">
//{`._navWrapper_nssbc_1{display: none}`}
//</style>//</Helmet>

    
    useEffect(() => {
        helmet.setTitle("Landing")
    },[helmet])

    return (<>
  <style type="text/css">{`._navWrapper_nssbc_1{display: none}`}</style>     
       



            <h1>Landing</h1>
            <h4>inside of an h4</h4>
            
           <p>empty page </p>
       
       </>)         
}   

interface LandingProps {
    [key: string]: any
}

export default Landing;




