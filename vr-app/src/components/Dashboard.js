import React, { useEffect } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

export default function Dashboard () {
    useEffect( () => {
        axiosWithAuth()
            .get("/projects")
            .then(res => console.log("projects", res))
    } ,[])
    return (
        <div>
        </div>
    )
}