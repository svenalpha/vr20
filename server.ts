import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
//import mongoose from 'mongoose';
import mongoose from "./server/db/dbm";
//import 'dotenv/config';
import api from './server/app.js';
import   cookieParser from "cookie-parser";
//import   cookieParser from "cookie-parser";

//import {WorkoutModelDb , workoutSchema} from "./server/models/workoutDbModel";
//import   users    from "./server/db/users.js";

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
const isTest = process.env.VITEST;
const isProd = process.env.NODE_ENV === 'production'
const root: string = process.cwd();

const resolve = (_path: string) => path.resolve(__dirname, _path);

const indexProd: string = isProd
    ? fs.readFileSync(resolve('client/index.html'), 'utf-8')
    : ''
//const pp = people;
//    console.log("xxxxxxxxxxxxxxxxxx  inside server.ts  XXXXXXXXXXXXXXXXXX",pp);







const createServer = async () => {

    const app = express();  

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



//app.use(function (req,res,next)
//  {console.log("in app.use(function  etc req.path =",req.path);
//   next(); 
//  } 
//       );

    app.get("/rrr/v9",(req,res) => {
        res.send("using /rrr  : hello world !!!!");
                                    }
            );

 //app.get("/about",(req,res) => {
 //         res.send("using /about  : hello world !!!!");
 //                              }
 //       );

   
     app.get("/api/proxy1",(req,res) => {            
        res.send("using proxy1  : successfully fetched using axios : hello world 2!!!!");           
                                    }                    
            );                         
        
 
///////////////////////////////////////////////////////////////
//app.use(express.static('dist')); // see https://www.youtube.com/watch?v=N4yUiQiTvwU  React Proxy | Easiest Fix to Cors Errors    
////////////////////////////////////////////////////////////////




    let vite: any;

    if (!isProd) {
        vite = await (await import('vite')).createServer({
            root,
            logLevel: isTest ? 'error' : 'info',
            server: {
                middlewareMode: true,
                watch: {
                    usePolling: true,
                    interval: 100
                }
            },
            appType: "custom"
        })

        app.use(vite.middlewares)
    }

    if (isProd) {
        app.use((await import('compression')).default())

        app.use(
            (await import('serve-static')).default(resolve('./client'), {
                index: false
            })
        )
    }

    // api routes
    app.use('/rrr', api.router)




    
 //   app.get('/about', (req, res) => {
 //           res.send("Welcomeeee I! about  ")
//
//            console.log("inside server.ts, /about  req.path = ",req.path);
//            //next(req);  
//            //app.get('/about', (req:any, res:any));                             
//                                     }
//           )  


    app.use('*', async (req, res) => {
        try {

         console.log("in app.use('*') req.method, req.path = ",req.method, req.path);

            const url = req.originalUrl;

            let template, render;

            if (!isProd) {
                template = fs.readFileSync(resolve('index.html'), 'utf8')
                template = await vite.transformIndexHtml(url, template)

                render = (await vite.ssrLoadModule('/src/entry-server.tsx')).default.render;
            }

            if (isProd) {
                template = indexProd;

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                render = (await import('../entry/entry-server.js')).default.render;
            }

            const context: any = {};
            const appHtml = await render(req)
            const { helmet } = appHtml;
            
            if (context.url) return res.redirect(301, context.url);

            let html = template.replace('<!--app-html-->', appHtml.html)
            
            const helmetData = `
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                ${helmet.style.toString()}
            `
            
            html = html.replace('<!--app-head-->', helmetData)
            html = html.replace('<!--app-scripts-->', helmet.script.toString())

            res.status(200).set({ "Content-Type": "text/html" }).end(html)

        } catch (e: any) {
            !isProd && vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    })




    return { app, vite }
}

//   original createServer, ie before introduction of mongoose  
//
//if (!isTest) {
//    createServer().then(({ app }) => {
//
//        app.listen(process.env.PORT || 3000, () => {
//            console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
//        })
//    })
//}




///////////////////////// im ported from vr08_1 /////
//mongoose.connect("mongodb+srv://userx:6j5pbHRxwLanqaq4@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority")
const dbURI='mongodb+srv://userx:6j5pbHRxwLanqaq4@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority'; 
if (!isTest) 
 {createServer().then(({ app }) =>
    app.listen((process.env.PORT || 3000), () =>        
    {console.log('connection established on http://localhost:3000');
////////////////////////////////////////////////////////////////////////////////////////////////
// see https://mongoosejs.com/docs/connections.html#multiple_connections
//conn1 = mongoose.createConnection(dbURI);  
//console.log('conn1 = ',conn1);
//conn1.model("WorkoutModel",mongoose.Schema(workoutSchema));
//const db = conn1.model("WorkoutModel",workoutSchema);
// await removed below
//const workouts =  WorkoutModelDb.find({}).sort({createdAt: -1});
//const workouts =  db.find({}).sort({createdAt: -1});
//const resp = json(workouts); 

//console.log("db workouts = ",workouts.data);
//console.log(" workouts = ",workouts);

//////////    previous 1 db connection, working model   ////////////////////////////////////////
//mongoose.connect(dbURI, {
////const conn1 = mongoose.createConnection(dbURI,{    
//  //useNewUrlParser: true,        // apparently deprecated
//  //useUnifiedTopology: true,     // apparently deprecated      
//                        }      
//                )    
//
//.then(() => {
//  console.log('Connected to MongoDB ccccccccccvvvvvvvvvvv');
//  //  mdb=mongoose.Connection; 
//            }
//     )    
//
//.catch((error) => {
//  console.error('Error connecting to MongoDB  bbbbnnnnnmmm', error)
//                  }
//      )
//////////////////  end    previous 1 db connection, working model   /////////////////////////

    }         ),   /// end app.listen            
                     )     // end createServer.then
 }   ///  end    if (!isTest)
/////////////////////////  end  imported from vr08_1 /////




// database name = node-auth         collection name = members/punters   (this name must be plural see 
// TNN_Node Auth #1)
// mongodb+srv://userx:<password>@cluster0.t8319.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0















