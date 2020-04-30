import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as yup from "yup";
import "../index.css";

//variable states
const initialState = {
  username: "",
  password: "",
  isFetching: false
};

const initialErrorState = {
  username: "",
  password: "",
};

//schema
const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Please Enter The Correct Username")
    .required(),
  password: yup
    .string()
    .min(5, "Please Enter The Correct Password")
    .required("Password is required"),
});

//function
const Login = props => {
  //usestates
  const [login, setLogin] = useState(initialState);
  const [errors, setErrors] = useState(initialErrorState);

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });

    //variables for the rules
    const name = e.target.name;
    const value = e.target.value;

    //yup
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

  //handleSubmit
  const handleSubmit = event => {
    event.preventDefault();
    setLogin({ ...login, isFetching: true });
    axiosWithAuth()
      .post("/auth/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("User Id", res.data.id);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err, "cannot login");
      });
  };

  //return
  return (
    <div className="loginDiv">
      <h2 className="txt" >Login</h2>
      <h4 className="txt" >Welcome back!</h4>
      <div>
        <form onSubmit={handleSubmit} id="loginForm">
        <p className="errors">{errors.username}</p>
          <input
            id="name"
            label="Username"
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            value={login.username}
          />
          <br />
          <p className="errors">{errors.password}</p>
          <input
            id="password"
            label="Password"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={login.password}
          />
          <br />
          <button type="submit" className="submitBut">Submit</button>
          <br />
         <Link to="/home"><button className="homebut" >Take Me Home</button></Link>
        </form>
        Make an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
