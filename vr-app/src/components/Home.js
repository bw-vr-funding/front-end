import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "../index.css";

function Home() {
  return (
    <div>
      <div id="welcomeDiv">
        <h1>Welcome to VR-Funding</h1>
        <h2>
          Will you help <span id="change">change the world?</span>
        </h2>
        <p>Create your own unique ideas, or fund fellow entrepeneurs!</p>
        
          <button className="About">
            <a href="https://bw-vr-funding.github.io/UI/">About Us</a>
          </button>
        
        <br />
        <br />
        Have an account already? <Link to="/login">Log In</Link>
      </div>
      <div id="homecar">
        <div className="card">
          <h3>Create</h3>
          <p>Post your ideas, Change the world with fellow entrepeneurs</p>
        </div>
        <div className="card">
          <h3>Explore</h3>
          <p>Explore what the community has to offer</p>
        </div>
        <div className="card">
          <h3>Fund</h3>
          <p>Fund fellow projects, help pave the way of the future</p>
        </div>
        <div className="card">
          <h3>Imagine</h3>
          <p>Imagine a world, where ideas gained traction like no-other</p>
        </div>
      </div>
      <footer id="footer">Copyright 2020 Privacy Legal Feedback</footer>
    </div>
  );
}
export default Home;
