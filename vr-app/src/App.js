import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
//Style Imports
import "./App.css";
//Special Imports
import * as yup from "yup";
import axios from "axios";
//Page Imports
import Login from "./components/login";
import SignUp from "./components/signup";

//Values
const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

//Schema for Validation
const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must have at least 3 characters!")
    .required("Username is required!"),
  password: yup
    .string()
    .min(5, "Password must be 5 characters long")
    .required("Password is required"),
});

function App() {
  //states
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  return (
    <div className="App">
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>

      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
