import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: "",
  isFetching: false
};

const Login = props => {
  const [login, setLogin] = useState(initialState);

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLogin({ ...login, isFetching: true });
    axiosWithAuth()
      .post("/auth/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err, "cannot login");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <h4>Welcome back!</h4>
      <div>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
        Make an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
