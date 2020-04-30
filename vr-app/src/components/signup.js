import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as yup from "yup";
import "../index.css";

//variable states
const initialErrorState = {
  username: "",
  password: "",
};

//schema
const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must have at least 5 characters!")
    .required(),
  password: yup
    .string()
    .min(5, "Password must include 5 characters")
    .required("Password is required"),
});

//function
const SignUp = (props) => {
  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
  });

  //usestates
  const [errors, setErrors] = useState(initialErrorState);

  //handleChange
  const handleChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUp({ ...signUp });
    axiosWithAuth()
      .post("/auth/register", signUp)
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) =>
        console.log(err, "sorry, an error has occured while signing you up")
      );
  };

  //return
  return (
    <div className="signUpDiv">
      <h2 className="txt">Sign Up</h2>
      <h3 className="txt" >Join the Team!</h3>
      <form onSubmit={handleSubmit} id="signUpForm">
        <p className="errors">{errors.username}</p>
        <input
          label="Username"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <br />
        <p className="errors">{errors.password}</p>
        <input
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="submitBut">Sign Up</button>
        <br />
        <Link to="/home">
          <button className="homebut">Take Me Home</button>
        </Link>
      </form>
      <br />
      Have an account already? <Link to="/login">Log In</Link>
    </div>
  );
};

export default SignUp;
