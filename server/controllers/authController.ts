



import mongoose from 'mongoose';
import { useNavigate } from 'react-router-dom'; 

import jwt from "jsonwebtoken";
import { Punter } from "../models/punter.js"


export const jwtVerify =  (req:any, res:any)=>
 {
  //const navigate = useNavigate();
  console.log("inside controllers/authControllers    getSecondExport  req.body = ",req.body);
  const {token} = req.body;
  console.log("inside controllers/authControllers    getSecondExport  token = ",token);
    jwt.verify(token,'the_secret_here', (err:any,decodedToken:any) =>  // replace httpOnly in wewb token
                   {if (err) 
                     {console.log(" in jwtVerify, token invalid, err.message = ",err.message);
                      return res.status(401).json("unverified"); 
                     } else
                     {console.log("inside authController/jwt.verify");  
                      return res.status(200).json("verified"); 
                     } 
                   }


                   //{console.log("inside authController/jwt.verify");  
                   //  return res.status(200).json("verified"); 
                   // if (err) {console.log(" in jwtVerify, token invalid, err.message = ",err.message);
                   //           return res.status(401).json("unverified"); 
                   //          }
                   //}     

              )     //  end  jwt.verify(token,'the_se
  //res.send("-- fetched--  authController via app.ts /rrr/getSecondExport ")
  }    //  end   export const jwtVerify =  (req:any, res:any)=>



export const signup_get = async  (req:any,res:any)=>
 {
    
   console.log("inside controllers/authControllers    signup_get");
//    console.log("in controllers  update('/:id'...");
//    console.log("in controllers  update req.body = ",req.body);
//    const {id} = req.params;
//    console.log("in controllers  update  req.params = ",req.params); 
//    console.log("in controllers update id = ",id);   
//    if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
//         return res.status(404).json({error: "not a valid id"});  
//    const workout = await WorkoutModelDb.findOneAndUpdate({_id : id} ,{...req.body}, {returnDocument: "after" });     
//    console.log("workout returned following findOneAndUpdate= ",workout);                                                             
//    if (!workout) {return res.status(400).json({error: "no such entry"});}           
//       return res.status(200).json(workout);  

//res.json({mssg: "inside Env in workoutController.js"}); 
}     //   end    export const updateWorkoutEntry = async  (req:any,res:any)=>                                           

//import cookieParser from "cookieParser";
//app.use(cookieParser());


//   create new entry


export const jwt_auth_postx = async  (req:any,res:any)=>
  {//const navigate = useNavigate();
   //const {token} = req.body;  
  // console.log("in authController jwt_auth_postx     token (ie req.body) = ",token.body); 
   //  jwt.verify(token,'the_secret_here', (err:any,decodedToken:any) =>  // replace httpOnly in wewb token
   //                 {if (err) {console.log(err.message);
   //                            navigate('/login',{replace: true});
   //                           }else {}
   //                 }
   //            )

  }      //  end  export const jwt_auth_post = async  (req:any,res:any)=>

//const maxAgeSecs= 60*60*24*3;    // 3 days.  this maxAge uses seconds not milliseconds
const maxAgeSecs= 60*15;    // 10 minutes.  this maxAge uses seconds not milliseconds
export const signup_post = async  (req:any,res:any)=>
{const {email, password} = req.body;  

 console.log("pre mongo create, req.body = ",req.body);  
 try{
     const punterx = await Punter.create({email,password});  //const punter = await Member.create({email,password});
     console.log("response from mongo, returning res.status(201) punterx = ",punterx);

     let punter_id :any = punterx._id; 
     const token = jwt.sign({punter_id},'the_secret_here',{expiresIn: maxAgeSecs});  
     res.cookie('jwt',token,{httpOnly: true, maxAge: maxAgeSecs*1000}); // secure: true only sent with 
     //   https //  see TNN_Node Auth #9 9:35 // htttpOnly  so the cookie(jwt) cannot be modified in the 
     // front end) thus eg  {httpOnly: true,maxAge: maxAgeSecs*1000, secure: true}

      return  res.status(201).json({punterx: punterx._id});
     //return res.status(201).json(punterx);
    }catch (error:any){console.log("do error: error.code = ",error.code);
                       let errorsx:any = {email:'',password:''};
                       if (error.code === 11000)  // this error does not receive an error message, so treated independantly
                           {errorsx.email ="email aready registered"; 
                            errorsx.password =""; 
                            //let xx :any = errorsx.email;
                            
                            console.log("already used email message. errorsx.email =",errorsx.email);
                            return res.status(400).json({errorsx});
                           }             
                       //console.log("negative response from mongo. return res.status(400).json({error: error.message}; error.message =", error,error.message,error.code);
                       //Object.values(error.errors).forEach((error:any) =>{console.log("error.properties",error.properties.message);});
                       //Object.values(error.errors).forEach(({properties}) =>{console.log("properties = ",properties);});   
                       let array2 :any[] =  Object.values(error.errors);
                      
                       //array2.forEach((properties.message)     );
                       //let array3 :any[] = array2;array3.forEach((properties) =>   {console.log("array3.forEach properties = ",properties);}       );
                       //let array3 :any[] = array2;
                       array2.forEach(({properties}) =>
                           {console.log("array2.forEach properties = ",properties);  
                            errorsx[properties.path]  = properties.message;
                            console.log(" last console.log before error. errorsx = ",errorsx);  
                           }                       
                                     );                  
                       return res.status(400).json({errorsx});
                       //array1.forEach(({properties}) =>{console.log("properties = ");}); 
                       //console.log("Object.values(error.errors) = ",Object.values(error.errors).forEach(error =>{console.log(errors.properties);}) );
                        //({error: error.message});
                      };
 


console.log("in auth",);
}    

export const about_get = async  (req:any,res:any,next:any)=>
  {console.log("in authController, about_get");
    next();
  }


export const login_get = async  (req:any,res:any)=>
{
}

//   logout2     
export const logout2_post = async  (req:any,res:any)=>
  {//const {email, password} = req.body;  
   console.log("in authController, logout2_post"); 
  try{//const punter = await Punter.login(email,password);
      //console.log("in logout2_post, post try, punter = ",punter); 
      //var punter_id = punter._id;
      //const token = jwt.sign({punter_id},'the_secret_here',{expiresIn: maxAgeSecs});  
      // res.cookie('jwt',token,{httpOnly: true, maxAge: maxAgeSecs*1000}); // secure: true only sent with 
      // const result =res.cookie('jwt',token,{maxAge: maxAgeSecs*1000}); // secure: true only sent with 
      const token1='';
      //const result =res.cookie('jwt',token1,{maxAge: ((maxAgeSecs*1000)/3)}); // secure: true only sent with 
      const result =res.cookie('jwt',token1,{maxAge: 1000 });  // ie  1000ms = 1 sec //{maxAge: (60*5*1000)}); // secure: true only sent with 
      //console.log("in authController, logout2 post try, result  = ",result); 
  
      return res.status(200).json("logged out");
     }catch(error:any){console.log("authController logout2    1");
                       const xx = error.message; 
                       console.log("authController logou2    xx",xx);
                       console.log("authController logout2   error.message = ",error.message);
                       console.log("authController logout2   2");
                       return res.status(400).json("log out failed");
                      };   ///   end try catch    
  }     //     export const logout2_post = async  (req:any,res:any)=>


  


//   log in    
export const login_post = async  (req:any,res:any)=>
{const {email, password} = req.body;  
 console.log("in login_post email,password = ",email,password); 
try{
    const punter = await Punter.login(email,password);
    console.log("in login_post, post try, punter = ",punter); 
    var punter_id = punter._id;
    const token = jwt.sign({punter_id},'the_secret_here',{expiresIn: maxAgeSecs});  
    // res.cookie('jwt',token,{httpOnly: true, maxAge: maxAgeSecs*1000}); // secure: true only sent with 
     const result =res.cookie('jwt',token,{maxAge: maxAgeSecs*1000}); // secure: true only sent with 
     //console.log("in login_post, post try, result  = ",result); 

    return res.status(200).json({punter: punter._id});
   }catch(error:any)//{console.log("in login_post, catch err"); 
                  // return res.status(400).json({});
                  //}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
{console.log("authController authController 1");
 let errorsx:any = {email:'',password:''};   
 let errorsy:any = {email:'',password:''};
 //console.log("authController in error  = ",error);
 const xx = error.message; 
 
 console.log("authController xx",xx);
 console.log("authController error.message = ",error.message);
 if (error.message === "incorrect email") errorsx.email= "that email is not registered";    
 if (error.message === "incorrect password") errorsx.password= "that password is not registered"; 
 console.log("errorsx = ",errorsx);
 //const xy = Object.values(error);
 //console.log("authController xy",xy);
 console.log("authController authController 2");
 //console.log("do error: error =",error);
 //console.log("error.Error = ",error.Error);
 
 //if (error === "Error: incorrect email ") errorsx.email= "that 1email is not registered";
 //if (error === " Error: incorrect email ") errorsx.email= "that 2email is not registered";
 //if (error === "Error:  incorrect email") errorsx.email= "that 3email is not registered";
 //if (error === " Error:  incorrect email ") errorsx.email= "that 4email is not registered";
 //if (error === " incorrect email ") errorsx.email= "that 1email is not registered";
 //if (error === " incorrect email ") errorsx.email= "that 2email is not registered";
 //if (error === " incorrect email") errorsx.email= "that 3email is not registered";
 //if (error === "  incorrect email ") errorsx.email= "that 4email is not registered";
 
 //console.log("in authController, error.response.data = ",error.response.data);
/*
 console.log("error.properties = ",error.properties);
 console.log("Object.values(error) = ",Object.values(error));
 console.log("Object.values(error.email) = ",Object.values(error));
 errorsx.password=  error.error ; //"what the fuck is going on";
 errorsx.email = Object.values(error);
 ///if (error === " Error: incorrect password") errorsx.password= "that password is not registered";
 console.log("errorsx = ",errorsx);
*/
 ////if (error.code === 11000)  // this error does not receive an error message, so treated independantly
 ////     {errorsx.email ="email aready registered"; 
 ////      errorsx.password =""; 
 ////      //let xx :any = errorsx.email;
 ////      
 ////      console.log("already used email message. errorsx.email =",errorsx.email);
 ////      return res.status(400).json({errorsx});
 ////     }             
  //console.log("negative response from mongo. return res.status(400).json({error: error.message}; error.message =", error,error.message,error.code);
  //Object.values(error.errors).forEach((error:any) =>{console.log("error.properties",error.properties.message);});
  //Object.values(error.errors).forEach(({properties}) =>{console.log("properties = ",properties);});   
  
  ////let array2 :any[] =  Object.values(error.errors);
 
  //array2.forEach((properties.message)     );
  //let array3 :any[] = array2;array3.forEach((properties) =>   {console.log("array3.forEach properties = ",properties);}       );
  //let array3 :any[] = array2;
  ////array2.forEach(({properties}) =>
  ////    {console.log("array2.forEach properties = ",properties);  
  ////     errorsx[properties.path]  = properties.message;
  ////     console.log(" last console.log before error. errorsx = ",errorsx);  
  ////    }     
  ////              );                  
  return res.status(400).json({errorsx});
  //array1.forEach(({properties}) =>{console.log("properties = ");}); 
  //console.log("Object.values(error.errors) = ",Object.values(error.errors).forEach(error =>{console.log(errors.properties);}) );
   //({error: error.message});
 };


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


}



export default { signup_get, signup_post, login_get,
                 login_post,  jwt_auth_postx, jwtVerify, 
                 logout2_post  
                };








