


import mongoose from 'mongoose';
// import { conn1 } from "../../server.ts";

import  { conn1 } from  "../db/dbm.js"; 

export var WorkoutModelDb:any;

const Schema = mongoose.Schema;
      
const workoutSchema= new mongoose.Schema({
title:{type: String,
      required: true
      },
reps: {type: Number,
         required: true
        },
load: {type: Number,
       required: true
      },
date:{type: Date,
      default: Date.now
     }                                         
}, {timestamps: true});


/* module.exports = mongoose.model('WorkoutModel', workoutSchema);  */


//export const WorkoutModelDb= mongoose.model("WorkoutModel",workoutSchema);


//export const WorkoutModelDb= mongoose.model("WorkoutModel",workoutSchema);  

//conn1.on('open',function (argument) {
//      console.log("connection established ");
//                                        }
//            );
//  conn1.on('error',function() {console.log("error: database connection failed");
//                              }
//          ); 
if (conn1) {console.log("in workoutDbModel conn1 exists");}
if (!conn1) {console.log("in workoutDbModel conn1 DOES NOT exist");}

try{ 
//export const WorkoutModelDb= conn1.model("WorkoutModel",workoutSchema);  
 WorkoutModelDb= conn1.model("WorkoutModel",workoutSchema);  
 console.log("in workoutDbModels, WorkoutModelDb passed. WorkoutModelDb = ",WorkoutModelDb);

   }catch{console.log("in workoutDbModels, WorkoutModelDb failed. WorkoutModelDb = ",WorkoutModelDb);
      
         };  
//const WorkoutModelDb= conn1.model("WorkoutModel",workoutSchema); 
// module.exports = WorkoutModelDb;   

export default WorkoutModelDb;

/* const db_model_User = mongoose.model('db_model_User',UserSchema); */
/* module.exports = db_model_User; */


