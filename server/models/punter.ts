



import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
// import   { isEmail }     from "validator";
//import * as   validator     from "validator";
import  { conn2 } from  "../db/dbm.js"; 

// below Punter/Member is singular of collection name punters/members but with capital
export  var Punter:any;   // export  var Member:any;

//https://dirask.com/posts/TypeScript-validate-email-with-regex-Dn40Ej  for weak email test
const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
// const emailx: string = 'john@gmail.com';  const result: boolean = expression.test(emailx);


//const Schema = mongoose.Schema;

//const workoutSchema= new mongoose.Schema({      
const punterSchema= new mongoose.Schema({    //  const memberSchema= new mongoose.Schema({
email: {type: String,
required:[true, 'please enter an email'],
unique:true,
lowercase:true,
//validate:[(val:any) => {}, 'please enter a valid email']     without using validator
validate:[(val:any) => {const result: boolean=expression.test(val); return result;}, 'please enter a valid email']    
//validate:[isEmail, 'please enter a valid email']
      },  
      
password: {type: String,
required:[true, 'please enter a password'],
minlength: [6, 'minimum password length is 6 characters']
         },    
date:{type: Date,
      default: Date.now
     }                                         
}, {timestamps: true});

// can be post/pre  save/remove etc
punterSchema.post('save', function (doc,next){console.log("inside Punter.ts, post save hook, new punter was created and saved. doc =  ",doc);
                                              next();              
                                             }             
                 );


punterSchema.pre('save', async function (next){const salt = await bcrypt.genSalt();
                                                this.password= await bcrypt.hash(this.password, salt);
                                               next();
                                              }
                );

// static method to login punter                
punterSchema.statics.login = async function(email,password)
{console.log("in punterSchema, submitted email,password = ",email,password);
 const punter = await this.findOne({email: email});    // where this is currenr schema
 console.log("in punterSchema, punter  = ",punter);
 if (punter) {const auth = await bcrypt.compare(password,punter.password);
              console.log("in punterSchema, auth  = ",auth);
              if (auth) {return punter;
                        }throw Error('incorrect password')
             }throw Error('incorrect email');     
 

}   //  end   punterSchema.statics.login = async function(email,login)



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
if (conn2) {console.log("in Punter.ts conn2 exists");}
if (!conn2) {console.log("in Punter.ts conn2 DOES NOT exist");}

try{ 
//export const WorkoutModelDb= conn1.model("WorkoutModel",workoutSchema); 

// below  "punter"/"member" is singular of collection name punters/members  
//WorkoutModelDb= conn1.model("WorkoutModel",workoutSchema);  
 Punter= conn2.model("punter",punterSchema);      //  Member= conn2.model("member",memberSchema);  
 console.log("in Punter.ts Punter passed. Punter = ",Punter);

   }catch{console.log("in Punter.ts, Punter failed. Punter = ",Punter);
         }; 
         
         
//const WorkoutModelDb= conn1.model("WorkoutModel",workoutSchema); 
// module.exports = WorkoutModelDb;   

export default { Punter };

/* const db_model_User = mongoose.model('db_model_User',UserSchema); */
/* module.exports = db_model_User; */








