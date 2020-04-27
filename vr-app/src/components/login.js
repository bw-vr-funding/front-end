import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
    username: "",
    password: "",
    isFetching: false
}

const Login = props => {
    const [login, setLogin] = useState(initialState);

    const handleChange = event => {
        setLogin({...login, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setLogin({...login, isFetching: true })
        .post("/auth/login", login) //CHECK API
        .then(res => {
            localStorage.setItem("token", res.data.message) //CHECK RES
        })
        .catch(err => { console.log(err, "cannot login");
    });
    };

    return (
        <div>
                 <h2>Login</h2>
                <h4>Welcome back</h4>
            <form id="loginform" onSubmit={handleSubmit}>
                <label>Username: 
                    <input   
                    id="name"             
                    placeholder="Input Username"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    ></input>
                </label>
                <br />
                <label>Password: 
                    <input    
                    id="password"            
                    placeholder="Input Password"
                    name="password"
                    type="password"
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
}
export default Login;