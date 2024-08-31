


import mongoose from 'mongoose';   
const dbURI  ='mongodb+srv://userx:6j5pbHRxwLanqaq4@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority';                               
const dbURI2 ='mongodb+srv://userx:6j5pbHRxwLanqaq4@cluster0.t8319.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';           
//                   mongodb+srv://userx:<password>@cluster0.t8319.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
export var conn1:any;
export var conn2:any;
//let  conn3: any;
//var conn2:(<any>);
//mongoose.connect(dbURI, {
//    //const conn1 = mongoose.createConnection(dbURI,{    
//      //useNewUrlParser: true,        // apparently deprecated
//      //useUnifiedTopology: true,     // apparently deprecated      
//                            }      
//                    )    
//    
//    .then(() => {
//      console.log('Connected to MongoDB in dbm.js  ccccvvvvvvvvvvv');
//      //  mdb=mongoose.Connection; 
//                }
//         )    
//    
//    .catch((error) => {
//      console.error('Error connecting to MongoDB  bbbbnnnnnmmm', error)
//                      }
//          )


     console.log("in dbm.js conn1  pre createConnection");
     try{
     //export  const conn1 = await  mongoose.createConnection(dbURI).asPromise();     
    conn1 = await  mongoose.createConnection(dbURI).asPromise(); 
    console.log("in dbm, conn1 success in try catch ");
        }catch{   console.log("in dbm, conn1 error in try catch. conn1 = ",conn1);
              };
    console.log("in dbm.js  conn1   post createConnection");


    console.log("in dbm.js conn2  pre createConnection");
    try{
    //export  const conn1 = await  mongoose.createConnection(dbURI).asPromise();     
   conn2 = await  mongoose.createConnection(dbURI2).asPromise(); 
   console.log("in dbm, conn2 success in try catch ");
       }catch{   console.log("in dbm, conn2 error in try catch. conn2 = ",conn2);
             };
   console.log("in dbm.js  conn2   post createConnection");






    if (conn1) {console.log("in dbm, conn1  exists ");}
    if (!conn1) {console.log("in dbm, conn1  DOES NOT exist ");}
    if (conn2) {console.log("in dbm, conn2  exists ");}
    if (!conn2) {console.log("in dbm, conn2  DOES NOT exist ");}


/* 
//    try{console.log("in dbm.js in try");
//    conn1.on('open',function (argument:any) {
//        console.log("connection established ");
//                                          }
//              );
//    conn1.on('error',function() {console.log("error: database connection failed");
//                                }
//            ); 
//       }catch{console.log("in dbm.js in catch");
//             };
*/  


    export default { conn1, conn2, mongoose } ;




