import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar.js";
import "../styles/Login.css";
import Footer from "./Footer.js";
import { GlobalInfo } from "../App.js";
import logo from "../icons/Logo.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const { getData, data, category, getCategory, isLogin, setLogin } =
    useContext(GlobalInfo);
  function isTrue() {
    setLogin(true);
  }
  

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <Link to="/">
            <button type="submit" onClick={isTrue}>
              Submit
            </button>
          </Link>
        </form>
        <p>
          Existing user? <Link to="/login">Login</Link>
        </p>
        <p>
          New user? <Link to="/login">Signup</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
