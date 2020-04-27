import React from 'react';
import { Link } from "react-router-dom";
//special imports


function Login(){
    return (
        <div>
            <form id="loginform">
                <h2>Login</h2>
                <h4>Welcome back</h4>
                <label>Username: 
                    <input                
                    placeholder="Input Username"
                    name="name"
                    type="text"></input>
                </label>
                <br />
                <label>Password: 
                    <input                
                    placeholder="Input Password"
                    name="password"
                    type="password"></input>
                </label>
            
                
            </form>

        </div>
    );
}
export default Login;