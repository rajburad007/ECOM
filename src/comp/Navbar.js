import React, { useEffect, useRef, useContext } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import search from "../icons/searchIcon.png";
import logo from "../icons/Logo.png";
import hambuger from "../icons/hamburger.png";
import { GlobalInfo } from "../App.js";
import cart from "../icons/cart.png";
import profile from "../icons/profile.png";
import wish from "../icons/wish.png";
const Home = () => {
  const { getData, data, category, getCategory, isLogin } =
    useContext(GlobalInfo);
  useEffect(() => {
    if (isLogin) {
      window.localStorage.setItem("isLogin", isLogin);
    }
  });

  function createNavCategory(nameLink, name) {
    return (
      <Link to={`/${nameLink}`}>
        <h4>{name}</h4>
      </Link>
    );
  }
  let nav = useRef();
  let navEle = useRef();
  let navbar = useRef();
  let toggleHam = useRef();
  let hamburger = useRef();
  let navEle2 = useRef();
  useEffect(() => {
    nav.current.style.height = navEle.current.offsetHeight + "px";
    toggleHam.current.style.top =
      nav.current.offsetHeight + navbar.current.offsetHeight + "px";
    toggleHam.current.style.height =
      window.innerHeight -
      (navbar.current.offsetHeight + nav.current.offsetHeight) +
      "px";

    toggleHam.current.style.left = -toggleHam.current.offsetWidth + "px";
    window.onscroll = function () {
      toggleHam.current.classList.remove("slideIn");

      if (window.scrollY >= nav.current.offsetHeight) {
        navbar.current.classList.add("fixed");
        toggleHam.current.classList.add("fixed2");
        toggleHam.current.style.top = navbar.current.offsetHeight + "px";
        toggleHam.current.style.height =
          window.innerHeight - navbar.current.offsetHeight + "px";
      } else {
        navbar.current.classList.remove("fixed");
        toggleHam.current.classList.remove("fixed2");
        toggleHam.current.style.top =
          nav.current.offsetHeight + navbar.current.offsetHeight + "px";
        toggleHam.current.style.height =
          window.innerHeight -
          (navbar.current.offsetHeight + nav.current.offsetHeight) +
          "px";
      }
    };
  });
  function toggleExt(e) {
    if (toggleHam.current.classList.contains("slideIn")) {
      toggleHam.current.classList.remove("slideIn");
    } else {
      toggleHam.current.classList.add("slideIn");
    }
  }

  return (
    <>
      <div className="nav" ref={nav}>
        <div className="navele" ref={navEle}>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="searchBar">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Serach..."
            />
            <a href="" className="search">
              <img src={search} alt="" />
            </a>
          </div>
          {isLogin ? (
            isLogin ? (
              <div className="bar3">
                <img width={"30px"} src={cart} alt="" />
                <img width={"30px"} src={wish} alt="" />
                <img width={"30px"} src={profile} alt="" />
              </div>
            ) : (
              <div className="loginSign">
                <Link to="/login" className="login">
                  LOGIN
                </Link>
                <Link to="/login" className="signin">
                  SIGNIN
                </Link>
              </div>
            )
          ) : window.localStorage.getItem("isLogin") ? (
            <div className="bar3">
              <Link to="/cart">
                <img width={"30px"} src={cart} alt="" />
              </Link>
              <img width={"30px"} src={wish} alt="" />
              <img width={"30px"} src={profile} alt="" />
            </div>
          ) : (
            <div className="loginSign">
              <Link to="/login" className="login">
                LOGIN
              </Link>
              <Link to="/login" className="signin">
                SIGNIN
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="navbar" ref={navbar}>
        <div className="navele2" ref={navEle2}>
          <img
            src={hambuger}
            ref={hamburger}
            className="hamburger"
            alt=""
            width="25px"
            onClick={toggleExt}
          />
          {createNavCategory("smartphones", "Smartphones")}
          {createNavCategory("laptops", "Laptops")}
          {createNavCategory("fragrances", "Fragrances")}
          {createNavCategory("groceries", "Groceries")}
          {createNavCategory("skincare", "Skincare")}
          {createNavCategory("home-decoration", "Home-decoration")}
        </div>
      </div>
      <div className="hamburgerExt" ref={toggleHam}>
        {createNavCategory("smartphones", "Smartphones")}
        {createNavCategory("laptops", "Laptops")}
        {createNavCategory("fragrances", "Fragrances")}
        {createNavCategory("groceries", "Groceries")}
        {createNavCategory("skincare", "Skincare")}
        {createNavCategory("home-decoration", "Home-decoration")}
      </div>
    </>
  );
};

export default Home;
