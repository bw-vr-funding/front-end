import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const YourProjects = () => {
  const id = localStorage.getItem("User Id");
  useEffect(() => {
    axiosWithAuth()
      .get(`/projects/creator/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <></>;
};

export default YourProjects;
