import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Home(){
    return (
        <div>
            <h1>Welcome to VR-Funding</h1>
            <h2>Will you help change the world?</h2>
            <p>Create your own unique ideas, or fund fellow entrepeneurs!</p>
            <Link><button className="About">About Us</button></Link>

        </div>
    )
}
export default Home;