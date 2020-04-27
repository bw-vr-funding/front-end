import React from 'react';
import { Link } from "react-router-dom";
//special imports


function SignUp() {
    return (
        <div>
            <form id="signup">
            <h2>Sign Up</h2>
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
            <br />
                <button
                type="submit">Submit
                </button>
            </form>
        </div>
    );
}
export default SignUp;