import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as yup from "yup";
import "../index.css";

const initialState = {
    name: "",
    password: "",
    isFetching: false
}
const initialErrorState = {
    name: "",
    password: "",
}

//schema
const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(5, 'Please enter the correct username')
      .required(),
    password: yup
      .string()
      .min(3, 'Please enter the correct password')
      .required('Password is required'),
  })

const Login = props => {
    const [login, setLogin] = useState(initialState);
    const [errors, setErrors] = useState(initialErrorState);

    

    const handleChange = event => {

        const name = event.target.name
        const value = event.target.value

        setLogin({...login, [event.target.name]: value });

        //yup
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
        setErrors({
            ...errors, [name]: '',
        })
        })
        .catch(err => {
        setErrors({
            ...errors, [name]: err.errors[0]
        })
        
        })
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
            <form id="loginForm" onSubmit={handleSubmit}>
            <p className="errors" >{errors.name}</p> <br />
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
                <p className="errors">{errors.password}</p>
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