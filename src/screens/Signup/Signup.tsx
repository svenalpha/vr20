


import useHelmet from '@hooks/useHelmet';
//npimport { Helmet } from "react-helmet";
import React, { useEffect , useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';  
import   { useLoggedInContext }    from "../../hooks/useLoggedInContext";

//import styles from './Signup.module.scss';  
import "./Signup.css";


const Signup: React.FC<SignupProps> = (props) => 
{
console.log("in Signup, props = ",props);   
const navigate = useNavigate();
const [password,setPassword] = useState();
const [email,setEmail] = useState();
const {loggedIn, setLoggedIn,loggedInName,setLoggedInName} = useLoggedInContext();
const emailError:any = document.querySelector('.email.error');
const passwordError:any = document.querySelector('.password.error');

const helmet = useHelmet();
useEffect(() => {
    helmet.setTitle("Signup")
},[helmet])


const handleSubmit = async (e:any) => 
  {e.preventDefault(); 
   console.log("in handleSubmit, e = ",e);
   emailError.textContent = "";
   passwordError.textContent = ""; 
   //const aaa=e.value.password;
   console.log("in handlesubmit, password = ",password); 
   console.log("in handlesubmit, email = ",email); 
   try{ await axios.post('/rrr/signup',{password,email})
       .then((response) =>     //  ie success
        {console.log(" axios response = ",response);
         console.log("in signup,  successful   response  =  ",response);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// with loggedIn setLoggedIn useContext much of css below is now redundant
var str:any = email;
var newStr;
const pos = str.indexOf("@");
if (pos !== -1)  {newStr=str.substring(0,pos);}
else newStr= email;  
setLoggedIn(true);  setLoggedInName(newStr);
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const first_id_const : any = document.getElementById("first_id"); 
const second_id_const : any = document.getElementById("second_id"); 
first_id_const.setAttribute('class','toShow');
second_id_const.setAttribute('class','toHide');
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
         navigate('/',{replace: true});
         //setEmptyFields([]);setError2(null);setTitle(""); setLoad(""); setReps("");   
         //dispatch({type:"CREATE_WORKOUT",payload: json});
         // dispatch({type:"CREATE_WORKOUT",payload: response.data});
        }    )     // end .then
      }catch(err:any) {const errors = err.response.data.errorsx;
                       console.log("in signup, errors  =  ",errors);   
                       console.log("in signup, errors.email =",errors.email);
                       console.log("in signup, errors.password =",errors.password);
                       console.log("in signup, err:   err.response  =  ",err.response);
                       emailError.textContent = errors.email;
                       passwordError.textContent = errors.password;
                      };  //   end try...catch
  }   //   end  const handleSubmit = async (e:any) => 

  
  function goHome(){console.log("inside go home",);
                    //<NavLink to={"/About"}>Home</NavLink>  
                    // navigate('/About',{replace: true});
                     navigate('/',{replace: true});
                    //<a href="/about"></a>
                   }



    return (<>

   
  {/*  <style type="text/css">{`._navWrapper_nssbc_1{display: none}`}</style> */}               
  <h1>Signup</h1>
   <h4>inside of an h4</h4>
   <form className="form" onSubmit={handleSubmit}>
     <h2>Sign up</h2>
     <div className="form-control">
       <label htmlFor ="email">Email</label>       
       <input type= "text"  name="email" defaultValue ={email}       
                               onChange={(e:any) => setEmail(e.target.value)}  required />      
       <div className="email error"></div>   
     </div>

     <div className="form-control">
       <label htmlFor="password">Password</label>
       <input type="password"  id="password" name="password" defaultValue ={password}  
                     onChange={(e:any) => setPassword(e.target.value)}  required/>                 
       <div className="password error"></div> 
     </div>
     <button type="submit">Sign up</button>
   </form>     {/* see TNN_Auth for form css*   see 1-controlled-inputsjs for react forms */}

   {/* <NavLink to={"/About"}>Home</NavLink>    */}  
           <p>empty page </p>   
           <div><button onClick={() => goHome()}>goHome</button></div>  
  
       </>)         
}   //   const Signup: React.FC<SignupProps> = (props) => 



interface SignupProps {              
    [key: string]: any               
                      }           

export default Signup;




