import React, { useEffect, useState } from 'react';
import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import { useLoaderData } from 'react-router-dom';
import useHelmet from '@hooks/useHelmet';
import axios from "axios"
import styles from './Home.module.scss'
import   { useLoggedInContext }    from "../../hooks/useLoggedInContext";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: React.FC<HomeProps> = (_props) => {
    const [legend, setLegend] = useState("  here is useState original legend");
    const [legend1, setLegend1] = useState(" proxy1 didn't work. legend1  here is useState original legend1 ");
    const [count, setCount] = useState(0)
    //const [loggedIn, setLoggedIn] = useState(false); 
    const {loggedIn, setLoggedIn, loggedInName,setLoggedInName} = useLoggedInContext();
    //  const {test1} = useLoggedInContext();
    console.log("Home.tsx loggedIn = ",loggedIn);
    
    const data = useLoaderData()

    const helmet = useHelmet()

    useEffect(() => {
        helmet.setTitle(`Home Page - Vite SSR + React`)
    }, [helmet])

    useEffect(() => {
        axios.get('/rrr/tsmessage').then((response) => {    // "/api"     
        //console.log(" useEffect, response data = ",response.data)    
         setLegend(response.data);
                                                      }
                                        )               
                    }, [])
  function doEmail(){
// string for validating email, below     
//https://dirask.com/posts/TypeScript-validate-email-with-regex-Dn40Ej
const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
//const emailx: string = 'john@gmail.com';
const emailx: string = 'john@gmail.com';


console.log("pre email check");
const result: boolean = expression.test(emailx);
if (result) console.log("result is POSITIVE. result = ",result);
      else console.log("result is NEGATIVE. result = ",result);
//var email_result;

                    }    //  end  function doEmail(){


    return (
        <>
            <div>
                <h4 className={styles.testStyle} >........vr20..........no.01..........15:25.........09/08/2024..........</h4>
                <p>{legend}</p>
                <p>{legend1}     loggedIn = {loggedIn}</p>


                {/*
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className={styles.logo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={styles.react} alt="React logo" />
                </a>
                 */}
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => doEmail()}>check email</button>
                <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? "logged IN (toggle)" : "logged OUT (toggle)"}</button>                    

                <p>

                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

interface HomeProps {
    [key: string]: any
}

export default Home;