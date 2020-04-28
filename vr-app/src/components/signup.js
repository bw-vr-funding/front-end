import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as yup from "yup";
import "../index.css";

const initialState = {
  name: "",
  password: "",
  isFetching: false,
};
const initialErrorState = {
  name: "",
  password: "",
};

//schema
const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, "Username must have at least 5 characters!")
    .required(),
  password: yup
    .string()
    .min(5, "Password must include 5 characters and 10 symbols")
    .required("Password is required"),
});

const SignUp = (props) => {

  const [signUp, setSignUp] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState(initialErrorState);

  const handleChange = (event) => {
    setSignUp({ ...signUp, [event.target.name]: event.target.value });

    const name = event.target.name;
    const value = event.target.value;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setSignUp({ ...signUp });
    axiosWithAuth()
      .post("/auth/register", signUp) // NEEDS FINAL API
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err, "could not submit"));
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form id="signupForm" onSubmit={handleSubmit}>
        <p className="errors">{errors.name}</p>
        <br />
        <label>
          Username:
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Input Username"
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <p className="errors">{errors.password}</p>
        <br />
        <label>
          Password:
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Input Password"
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <button type="submit" className="submitbut">Submit</button>
        <br />
        <Link to="/home"><button className="homebut" >Take Me Home</button></Link>
      </form>
    </div>
  );
};
export default SignUp;
