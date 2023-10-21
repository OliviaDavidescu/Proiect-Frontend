import React from 'react';
import "./SignIn.css";
import Axios from 'axios';
import {useState,setState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Calendar from "./Calendar.js";

function SignIn() {
    let navigate = useNavigate();
    const navigateToContacts = () => {
        navigate('/calendar');
    };


	const [emailReg, setEmailReg] = useState("");
	const [passwordReg, setPasswordReg] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

	const login = () => {
        Axios.post("http://localhost:3001/signin", {
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
           if (!response.data.message) {
              setLoginStatus( response.data.message);
           } else {
              setLoginStatus (response.data[0].message);
           }
        });
        };

    

    return (
        <>
        <div>
        <div className="login">
           <h1>Login</h1>
           <input 
            type="text" 
            placeholder='email'
            onChange={(e) => {setEmailReg(e.target.value)}}/>
            <br/>
           <input type="password" placeholder="Password" 
            onChange={(e) => {setPasswordReg(e.target.value)}}/>
           <br/>
           <button className='loginbtn' onClick={() => {
										login();
										navigateToContacts();
        		}}>Login</button>
        </div>
        <h1> {loginStatus}</h1>
        </div>
        </>
    )
}

export default SignIn;