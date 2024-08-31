import React, { useLayoutEffect,useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import requireAuth from "../../authRoutes";  
import { useNavigate } from 'react-router-dom';  
import { useLocation } from 'react-router-dom';  
import  Cookies  from "js-cookie"; 
import axios from "axios";   
import ExecutionEnvironment from "exenv";
import   { useLoggedInContext }    from "../../../hooks/useLoggedInContext";
//import bcrypt from 'bcrypt';
//import  jwt   from "jsonwebtoken";     // app.use(authRoutes);   ?   
//import { cookieParser } from "cookie-parser";   
//import   cookieParser  from "cookie-parser";  
//import cookieParser from "cookie-parser"; 
// import  requireAuth  from "../../../../server/middleware/authMiddleware";

import styles from './Layout.module.scss';
//import './Layout.css';
import './test1.css';

const Layout: React.FC<LayoutProps> = (props) => {
    const [password,setPassword] = useState("");   //   ("zxcvbn");
    const [email,setEmail] = useState("");         //   ("frank@yahoo.com");
    const navigate = useNavigate();
    const {loggedIn, setLoggedIn, loggedInName,setLoggedInName} = useLoggedInContext();

   //console.log("in Layout , props = ",props); 
   //const location = useLocation();  
   //console.log("in Layout , location = ",location); 
   //console.log("in Layout , location.pathname = ",location.pathname); 
   //if (location.pathname == "/contact") location.state = "qwerty";
   //console.log("in Layout , location = ",location);
    
   //if (jwt)  console.log("in Layout , jwt is true"); else  console.log("in Layout , jwt is false");   
   //if (token)  console.log("in Layout , token is true"); else  console.log("in Layout , token is false"); 
   //console.log("in Layout , jwt = ",jwt);
   //req.cookies.




const location = useLocation();
const lp = location.pathname;  // just to make it shorter
console.log("inside layout location = ",location); 
console.log("inside layout/lp lp = ",lp); 



const handleClickLogout2 = async () => //async (e:any) => 
    {setPassword("zxcvbn");
    setEmail("frank@yahoo.com");
    console.log("in handleClickLogout2, password = ",password);           
    console.log("in handleClickLogout2, email = ",email); 
    try{ //await axios.post('/rrr/logout2',{password,email})     //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
         await axios.post('/rrr/logout2',{})     //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        .then((response) =>     //  ie success                      
          {
            console.log(" success axios response 1 = ",response);    
           // show: login name /  logout,   hide login /sign in     
 
////XXX  with loggedIn, setLoggedIn used in useContext, the lines below are unnecessary  XXXXXXXXXXXXXXX
//const first_id_const : any = document.getElementById("first_id"); 
//const second_id_const : any = document.getElementById("second_id"); 
//console.log(" h4_2_id = ",pizza2); 
//console.log(" login_id = ",login_const); 
//console.log(" signup_id = ",signup_const); 
//login_const.className = "test4b";  //"toHide";  //  "test4b";   // toHide
//login_const.className = "toHide"; 
//signup_const.innerHTML= "<h4></h4>";
//first_id_const.setAttribute('class','toHide');
//second_id_const.setAttribute('class','toShow');

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

setLoggedIn(false);
navigate('/',{replace: true});                                          
          }  
             );   // end .then                                                            
    }catch(err:any)
    {console.log("in login, err =  ",err);                 
    const errors = err.response.data.errorsx;                                
    console.log("in login, errors  =  ",errors);                                  
    console.log("in login, errors.email =",errors.email);                     
    console.log("in login, errors.password =",errors.password);                    
    console.log("in login, err:   err.response  =  ",err.response);               
    };                        
    //const email = form.email;           
    }   //  end   const handleSubmitLogin2 = async (e:any) => 




   //  }//  be document.cookie.match(/^(.*;)? MyCookie=[^;]+(.*)?$/), notice 
   //             tch(/^(.*;)?\s*MyCookie\s*=\s*[^;]+(.*)?$/)



   //document.cookie.jwt;
   const theStyles =
    {color:'tomato',
     border: 'none'
    }

  
   //navigate('/signup',{replace: true});  // use redirect react-router-dom ?          
  

    return (
        <>
            <nav className={styles.navWrapper}>
             
          {/*ZZ 
            <div className={styles.div1}>  
           ZZ*/}

            {/*EE <div id= "div_id2">    EE*/}
                                          
              <ul className={styles.nav}>  

                <li>
                        <NavLink to={"/"}>Home</NavLink>
                </li>        
                <li >
                        <NavLink to={"about"}   >About</NavLink>
                </li>
                
     {/*GG*/} 

                

                    <li>
                        <NavLink to={"contact"} className={"nav_contact_inner"} >Contact</NavLink>
                    </li>
                    <li>
                        {/* <NavLink to={"extra"} style={{color: 'red' }} >Extra</NavLink>   */}  
                        <NavLink to={"extra"}>Extra</NavLink>          
                    </li>
                    <li>
                      {/*  <NavLink to={"auxiliary"} style={theStyles}>Auxiliary</NavLink>   */}
                        <NavLink to={"auxiliary"}>Auxiliary</NavLink>
                    </li>
                    <li>
                        <NavLink to={"landing"}>Landing</NavLink>
                     </li>  
 {/*GG*/}
                </ul>  
 
                {/* </div>   end     <div className={styles.div1}>    */}
{/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/} 
              
               <div   className={styles.div2} >      
                 {/*MM   */}
                  <div  id="first_id"  style={loggedIn ? { display: "block"} : {display: "none"} }  > 
                         
                    {/*}  <ul id ="first_ul" >  */}
                    <ul className={styles.nav}>

                         <li>
                           <p id="welcome_id"  className={styles.logout_class + "bkg2"}  >welcome, {loggedInName} {}</p>   
                        </li>     
                        <li>
                         <a  onClick={()=>(handleClickLogout2())}>Logout</a>   
                        </li> 
                     
                     </ul> 
                     
                  </div>
                 {/* MM  */}
               {/* YY  */}
                   <div id="second_id"  style={!loggedIn ? { display: "inline"} : {display: "none"} }  >
                     <ul   className={styles.nav}>   {/* className={styles.nowrap1}>  */}
                       <li>
                         <NavLink to={"login"} id="login_id">  Login</NavLink>
                       </li> 
                       <li>
                         <NavLink to={"signup"} id="signup_id" >Signup</NavLink>
                       </li>  
                     </ul> 
                   </div> 
                {/*  YY */}

      </div>          {/* end    <div   className={styles.div2} >     */}  
 
{/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/} 
            </nav>
                

            <Outlet />
        </>
    )
}

interface LayoutProps {
    [key: string]: any
}

export default Layout;