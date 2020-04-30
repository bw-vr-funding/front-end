import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const FormBorder = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px 0;
    font-size: 1.4rem;
  }

  input,
  select,
  textarea {
    width: 100%;
    margin: 5px 0 0;
    display: block;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 10px;
    font-size: 1.4rem;
    background-color: white;
  }

  input:focus {
    outline: none;
    border-color: black;
  }

  button {
    width: 300px;
    padding: 8px 11px;
    font-size: 1.4rem;
    text-transform: uppercase;
    border: 0;
    border-radius: 5px;
    letter-spacing: 2px;
    outline: none;
    background-color: #4dd0e1;
    color: aliceblue;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }

  button:hover {
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Form = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    img_url: "",
    category: "",
    funding_goal: 0,
    funding: 0,
    creator_id: localStorage.getItem("User Id"),
  });

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post("/projects", data)
      .then((res) => {
        console.log("///", res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FormBorder>
      <div className="formsubmit">
        <form onSubmit={submitForm}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={data.name}
              onChange={changeHandler}
            />
          </label>
          <label>
            Description:
            <input
              name="description"
              type="text"
              value={data.description}
              onChange={changeHandler}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="img_url"
              value={data.img_url}
              onChange={changeHandler}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={data.category}
              onChange={changeHandler}
            />
          </label>
          <label>
            Funding Goal:
            <input
              type="text"
              name="funding_goal"
              value={data.funding_goal}
              onChange={changeHandler}
            />
          </label>
          <label>
            Funding:
            <input
              type="text"
              name="funding"
              value={data.funding}
              onChange={changeHandler}
            />
          </label>
          <br />
          <button className="" type="submit">
            Add Project
          </button>
        </form>
      </div>
    </FormBorder>
  );
};

export default Form;
