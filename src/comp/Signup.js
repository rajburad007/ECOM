import React, { useContext, useEffect, useRef } from "react";
import Navbar from "./Navbar.js";
import "../styles/Login.css";
import Footer from "./Footer.js";
import { GlobalInfo } from "../App.js";
import logo from "../icons/Logo.png";
import { Link } from "react-router-dom";
const Signup = () => {
  let userName = useRef();
  let email = useRef();
  let password = useRef();
  const { getData, data, category, getCategory, isLogin, setLogin } =
    useContext(GlobalInfo);
  function isTrue() {
    setLogin(true);
  }

  return (
    <>
      <Navbar />
      <div className="loginSec">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form action="">
          <input
            required
            type="text"
            placeholder="Name"
            onChange={function () {
              window.localStorage.setItem(
                "userName",
                userName.current.value.trim()
              );
            }}
            ref={userName}
          />
          <input
            required
            type="email"
            placeholder="Email"
            onChange={function () {
              window.localStorage.setItem("email", email.current.value.trim());
            }}
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={function () {
              window.localStorage.setItem(
                "password",
                password.current.value.trim()
              );
            }}
            ref={password}
          />

          <Link to="/">
            <button className="submitBtn" type="submit" onClick={isTrue}>
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
