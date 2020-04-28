import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    img_url: "",
    category: "",
    funding_goal: 0,
    funding: 0,
    creator_id: 1
  });

  const changeHandler = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    axiosWithAuth()
    .post("/projects", data)
    .then( res => {console.log("///", res)})
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <form onSubmit={submitForm}>
      <label>Name:
      <input
        name="name"
        type="text"
        value={data.name}
        onChange={changeHandler}
      />
       </label>
      <label>Description:
      <input
        name="description"
        type="text"
        value={data.description}
        onChange={changeHandler}
      />
      </label>
      <label>Image:
      <input
        type="text"
        name="img_url"
        value={data.img_url}
        onChange={changeHandler}
      />
      </label>
      <label>Category:
      <input
        type="text"
        name="category"
        value={data.category}
        onChange={changeHandler}
      />
      </label>
      <label>Funding Goal:
      <input
        type="text"
        name="funding_goal"
        value={data.funding_goal}
        onChange={changeHandler}
      />
      </label>
      <label>Funding:
      <input
        type="text"
        name="funding"
        value={data.funding}
        onChange={changeHandler}
      />
      </label>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default Form;