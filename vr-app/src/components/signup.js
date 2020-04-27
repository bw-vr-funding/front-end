import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
//special imports

const SignUp = props => {
    const [signUp, setSignUp] = useState({
        username: "",
        password: "",
    });

    const handleChange = event => {
        setSignUp({...signUp, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        setSignUp({...signUp});
        axiosWithAuth()
        .post("/auth/register", signUp)  // NEEDS FINAL API
        .then(res => {window.location.reload();})
        .catch(err => console.log(err, "could not submit"));
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form id="signup" onSubmit={handleSubmit}>
            <label>Username: 
                <input      
                id="name"          
                name="name"
                type="text"
                placeholder="Input Username"
                onChange={handleChange}
                ></input>
            </label>
            <br />
            <label>Password: 
                <input   
                id="password"             
                name="password"
                type="password"
                placeholder="Input Password"
                onChange={handleChange}
                ></input>
            </label>
            <br />
                <button
                type="submit">Submit
                </button>
            </form>
        </div>
    );
};
export default SignUp;