import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SignUp = props => {
  const [signUp, setSignUp] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSignUp({ ...signUp });
    axiosWithAuth()
      .post("/auth/register", signUp)
      .then(res => {
        props.history.push("/");
      })
      .catch(err =>
        console.log(err, "sorry, an error has occured while signing you up")
      );
  };

  return (
    <div>    
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          label="Username"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <br />
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
        <button>Sign Up</button>
      </form>
      <br />
      Have an account already? <Link to="/login">Log In</Link>
    </div>
  );
};

export default SignUp;
