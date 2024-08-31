
//  import { useNavigate } from "react-router-dom";
// import express, { Router } from 'express';
//import  Express from "express";
// import express, { Router } from 'express'; 
import mongoose from 'mongoose';
import WorkoutModelDb from "../models/workoutDbModel.js";
//import {useParams} from "react-router-dom";


export const getEnv =  (req:any,res:any)=>{  
    /* console.log("inside workoutController.js  getEnv");  */ 
    /*const navigate = useNavigate;                      
    return(navigate("/Error404"))       
*/    res.json({mssg: "inside Env in workoutController.js"});     
                                          }                            

//  GET all entries

// export const getAllWorkoutEntries = async  (req,res)=>{  
    export const getAllWorkoutEntries = async  (req:any, res:any)=>{     
    console.log("inside workoutController.js getAllWorkoutEntries ");  
    console.log("inside workoutController.js getAllWorkoutEntries  req.body = ",req.body);           
    const workouts = await WorkoutModelDb.find({}).sort({createdAt: -1});  // ie find all, sorted in descending order       
                                    // ....find({reps:20}).... finds all entries where reps=20
    return res.status(200).json(workouts);                              
                                                          }
    //return res.json({mssg: "GET all entries"}); 
    //return;


  //  update  (ie PATCH) an entry 
export const updateWorkoutEntry = async  (req:any,res:any)=>{
  console.log("inside controllers/workoutController.js    updateWorkoutEntry");
  console.log("in controllers  update('/:id'...");
  console.log("in controllers  update req.body = ",req.body);
  const {id} = req.params;
  console.log("in controllers  update  req.params = ",req.params); 
  console.log("in controllers update id = ",id);   
  if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
       return res.status(404).json({error: "not a valid id"});  
  const workout = await WorkoutModelDb.findOneAndUpdate({_id : id} ,{...req.body}, {returnDocument: "after" });     
  console.log("workout returned following findOneAndUpdate= ",workout);                                                             
  if (!workout) {return res.status(400).json({error: "no such entry"});}           
     return res.status(200).json(workout);  

//export const updateWorkoutEntry = async (req,res)=>{   ,{ returnNewDocument: true}
//  console.log("ssssshhhhhkjkkk");      
//  const {id} = req.params;   
//  console.log("req.params = ",req.params);                                   
//zz  if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
//zz    return res.status(404).json({error: "not a valid id"});                 
//zz                                                                            
//zz  const workout = await WorkoutModelDb.findOneAndUpdate({_id : id},{...req.body});         
//zz  if (!workout) {return res.status(400).json({error: "no such entry"});}           
//zz    return res.status(200).json(workout);      
//zz                                                   }   // end   export const updateWorkoutEntry      
//zz  
 }     //   end    export const updateWorkoutEntry = async  (req:any,res:any)=>                                           



//router.delete("/:id",async (req,res)=>{
//export const createWorkoutEntry = async (req:any,res:any)=>


export const deleteWorkoutEntry = async (req:any,res:any)=>
  {
console.log("in workoutRoutes.js  router.delete('/:id'...");
const {id} = req.params;
console.log("in deleteWorkoutEntry  req.params = ",req.params); 
console.log("in deleteWorkoutEntry  id = ",id);                   
if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
return res.status(404).json({error: "not a valid id"});
                                                  
const workout = await WorkoutModelDb.findOneAndDelete({_id : id});   
if (!workout) {return res.status(400).json({error: "no such entry"});}
return res.status(200).json(workout);                                      
  }      

//         );   // end  router.delete("/:id",async (req,res)=>{                         











//  GET single entry

// Create (ie POST) new entry
export const createWorkoutEntry = async (req:any,res:any)=>
  { console.log("inside controllers/workoutController.js    createWorkoutEntry");
   //console.log("inside controllers/workoutController.js  createWorkoutEntry req.body = ",req.body);
    //console.log("inside controllers/workoutController.js  createWorkoutEntry req = ",req);
   
    //console.log("req.body  = ",req.body);
    //console.log("req.params = ",req.params);
    //console.log("req.path = ",req.path);
    //console.log("req.headers.origin = ",req.headers.origin);
    //console.log("req  = ",req);

    
    const {title, reps, load} = req.body;   
    // console.log("in createWorkoutEntry   title , reps, load = ",title, reps , load);
    

    let emptyFields = []; 
    if (!title) {emptyFields.push("title");}
    if (!load) {emptyFields.push("load");}
    if (!reps) {emptyFields.push("reps");}    
    if (emptyFields.length > 0)    // ie there is at least 1 empty field
       {console.log("in createWorkoutEntry emptyFields.length >0 ");
        //return res.status(400).send({erorNo: emptyFields, error: "please complete all fields"})
        //return res.status(400).send({ error: "please complete all fields",emptyFields,extra: "asdfghjkl"})
        return res.status(400).send({ error: "please complete all fields",emptyFields,extra: "asdfghjkl"})
        //return  res.status(400).json({"asdccvvbbnnnm"},{"zzzzzzzzzzzzzzzzzzzzzzz"});
       }    
    try{const wo = await WorkoutModelDb.create({title,reps,load});
         console.log("returning res.status(200).json(wo);");
        return res.status(200).json(wo);
       }catch (error:any)
       { console.log("return res.status(400).json({error: error.message}; error.message =", error.message);
        return res.status(400).json({error: error.message});
       } 
    //res.json({mssg: "POST new entry"});
  }     //   end   export const createWorkoutEntry = async (req:any,res:any)=>                                      


  
// UPDATE entry
//export const updateWorkoutEntry = async (req,res)=>{
//  console.log("ssssshhhhhkjkkk");      
//  const {id} = req.params;   
//  console.log("req.params = ",req.params);                                   
//zz  if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
//zz    return res.status(404).json({error: "not a valid id"});                 
//zz                                                                            
//zz  const workout = await WorkoutModelDb.findOneAndUpdate({_id : id},{...req.body});         
//zz  if (!workout) {return res.status(400).json({error: "no such entry"});}           
//zz    return res.status(200).json(workout);      
//zz                                                   }   // end   export const updateWorkoutEntry      
//zz      


                               
export default { getAllWorkoutEntries ,  createWorkoutEntry , deleteWorkoutEntry, updateWorkoutEntry}; 
//export default getEnv;                                           
//module.exports = getAllWorkoutEntries;                                                      
                                             
//                                       
                                      