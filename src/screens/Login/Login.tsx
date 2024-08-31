


import useHelmet from '@hooks/useHelmet';
//npimport { Helmet } from "react-helmet";
import React, { useEffect , useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';  
//import styles from './Login.module.scss';  
import "./Login.css";
import stylesx from './Login.module.scss';
//import ""
import styles from '../../core/components/Layout/Layout.module.scss';
//import "../../core/components/Layout/Layout.css";
import   { useLoggedInContext }    from "../../hooks/useLoggedInContext";


const Login: React.FC<LoginProps> = (props) => 
{
console.log("in Login, props = ",props);   
const navigate = useNavigate();
const [password,setPassword] = useState();
const [email,setEmail] = useState();
const [welcome,setWelcome] = useState('');
const {loggedIn, setLoggedIn, loggedInName,setLoggedInName} = useLoggedInContext();
// 2 lines below: moved to useEffect for quick fix to "document is not defined" error
//const emailError:any = document.querySelector('.email.error');
//const passwordError:any = document.querySelector('.password.error');
var  emailError:any;
var passwordError:any;

const helmet = useHelmet();

//<Helmet><style type="text/css">
//{`._navWrapper_nssbc_1{display: none}`}
//</style>//</Helmet>    
useEffect(() => {emailError = document.querySelector('.email.error');
  passwordError = document.querySelector('.password.error');      
});    


const handleSubmit = async (e:any) => 
 {e.preventDefault(); 
console.log("in handleSubmit, e = ",e); 
//const aaa=e.value.password;
console.log("in handlesubmit, password = ",password);           
console.log("in handlesubmit, email = ",email); 
try{await axios.post('/rrr/login',{password,email})     //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    .then((response) =>     //  ie success                      
     {console.log(" success axios  login response 2 = ",response); 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// with loggedIn setLoggedIn useContext much of css below is now redundant
var str:any = email;
var newStr;
const pos = str.indexOf("@");
if (pos !== -1) {newStr=str.substring(0,pos);}
else newStr= email;  
setLoggedIn(true);  setLoggedInName(newStr);
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 console.log(" pre pizza "); 
const pizza1 : any = document.getElementById("h4_1_id");  
//pizza.styles.className += 'none1';   //style.background-color: blue;
console.log(" post pizza ");  
const pizza2 : any = document.getElementById("h4_2_id"); 
const pizza3 : any = document.getElementById("h4_3_id"); 

//pizza2.innerHTML=  `<h4 className={styles.test1} >alternative text</h4>`; 
//pizza3.className -= "test4a" ;     pizza3.className = "test4b";  // display: inline;  is default 
pizza3.className = "test4";
//   id="login_id"   id="signup_id" 
const login_const : any = document.getElementById("login_id"); 
const signup_const : any = document.getElementById("signup_id"); 
const first_id_const : any = document.getElementById("first_id"); 
const second_id_const : any = document.getElementById("second_id"); 
console.log(" h4_2_id = ",pizza2); 
console.log(" login_id = ",login_const); 
console.log(" signup_id = ",signup_const); 
//login_const.className = "test4b";  //"toHide";  //  "test4b";   // toHide
//login_const.className = "toHide"; 
//signup_const.innerHTML= "<h4></h4>";
setWelcome("welcome, "+email);
first_id_const.setAttribute('class','toShow');
second_id_const.setAttribute('class','toHide');



pizza1.innerHTML= "<h4>alternative text</h4>"
//pizza2.styles.className = {{styles.test2}};    
//pizza2.styles.test2a.setProperty('blue');
///pizza2.styles.setProperty("test2a", "blue");
//pizza2.innerHTML=  "<h4>alternative text</h4>";   //document.getElementById("h4_2_id")//(h4_2_id).innerHTML=//<h4></h4>;                     
const ans = getComputedStyle(pizza2).getPropertyValue('test2');
console.log(" ans = ",ans); 

//console.log(" pre pizza "); 
//const pizza : any = document.getElementById("h41_id");   
////console.log("  pizza = ",pizza);  
//pizza.style.className += 'none1';   //style.background-color: blue;
//console.log(" post pizza ");  


 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
      navigate('/',{replace: true});                                          
      //setEmptyFields([]);setError2(null);setTitle(""); setLoad(""); setReps("");                 
      //dispatch({type:"CREATE_WORKOUT",payload: json});                          
      // dispatch({type:"CREATE_WORKOUT",payload: response.data});               
     }   );                                                            
   }catch(err:any)
   {console.log("in login, err =  ",err);                 
    const errors = err.response.data.errorsx;                                
    console.log("in login, errors  =  ",errors);                                  
    console.log("in login, errors.email =",errors.email);                     
    console.log("in login, errors.password =",errors.password);                    
    console.log("in login, err:   err.response  =  ",err.response);               
                                                                  
    emailError.textContent = errors.email;                      
    passwordError.textContent = errors.password;                                   
   };                        
  //const email = form.email;           
 }     //  end   const handleSubmit = async (e:any) =>  
    
    useEffect(() => {
        helmet.setTitle("Login")  
    },[helmet])   
    
                  
    return (<>
      {/* <style type="text/css">{`._navWrapper_nssbc_1{display: none}`}</style> */}          
       
        
      <h1>Login</h1>
       <h4 id="h4_1_id"  className={styles.test1} >inside of an h4</h4>
       <h4 id="h4_2_id" className= {styles.test2a}>inside of an another h4</h4>
       <h4 id="h4_3_id"   className = "test4a : any"   >h4_3_id </h4>
   <form className="form" onSubmit={handleSubmit}>
     <h2>Log in</h2>
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
     <button type="submit">Log in</button>
   </form>     {/* see TNN_Auth for form css*   see 1-controlled-inputsjs for react forms */}


   <p>empty page </p>
   
   <div><button>asdfgghjkjkll;l;mmnnbbvvcx</button></div>  
     


       </>)         
}   

interface LoginProps {
    [key: string]: any
}

export default Login;




