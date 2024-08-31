/* eslint-disable react-refresh/only-export-components */
import type { RouteObject } from "react-router-dom";
import loadable from '@loadable/component'

import Layout from "@core/components/Layout/Layout";
import Home from "@screens/Home/Home";
import homeLoader from "@loaders/homeLoader";
import About from "@screens/About/About";
import Extra from "@screens/Extra/Extra";
import Auxiliary from "@screens/Auxiliary/Auxiliary";
import Landing from "@screens/Landing/Landing";
import Login from "@screens/Login/Login";  
//import LogOut from "@screens/LogOut/LogOut";  
import Signup from "@screens/Signup/Signup";        
//import requireAuth from "./authRoutes";
//import protectedRoutes from "./protectedRoutes";

const Contact = loadable(() => import("@screens/Contact/Contact"), { fallback: <div>Loading...</div> });

const routes: RouteObject[] = [      
    {  
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader
            }, {
                path: "about",
               // <requireAuth exact path ="/about" element ={About} />,
               element : <About />, 
            },
            {
                path: "contact",
                element : <Contact /> ,    
            },
            {
                path: "extra",
                element: <Extra />  
            },

            {path: "auxiliary", element: <Auxiliary /> },
            {  path: "landing", element: <Landing /> },
            {
                path: "login",
                element: <Login />  
            },
    //        {
    //            path: "logout",
    //            element: <Home />  
    //        },
            {
                path: "signup",
                element: <Signup />  
            }
        ]
    }
]

export default routes;







