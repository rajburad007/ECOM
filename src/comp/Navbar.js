import React, { useEffect, useRef } from "react";
import "../styles/Navbar.css";
import search from "../icons/searchIcon.png";
import logo from "../icons/Logo.png";
import hambuger from "../icons/hamburger.png";
const Home = (props) => {
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
    props.call(navbar.current.offsetHeight);
    toggleHam.current.style.left = -toggleHam.current.offsetWidth + "px";
  });
  function toggleExt(e) {
    if (toggleHam.current.classList.contains("slideIn")) {
      toggleHam.current.classList.remove("slideIn");
    } else {
      toggleHam.current.classList.add("slideIn");
    }
  }
  window.onscroll = function () {
    toggleHam.current.classList.remove("slideIn");
    // console.log(toggleHam.current.offsetWidth);
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

  return (
    <>
      <div className="nav" ref={nav}>
        <div className="navele" ref={navEle}>
          <div className="logo">
            <a href="">
              <img src={logo} alt="" />
            </a>
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
          <div className="loginSign">
            <a href="" className="login">
              LOGIN
            </a>
            <a href="" className="signin">
              SIGNIN
            </a>
          </div>
        </div>
      </div>
      <div className="navbar" ref={navbar}>
        <div className="navele2" ref={navEle2}>
          <img
            src={hambuger}
            ref={hamburger}
            alt=""
            width="25px"
            onClick={toggleExt}
          />
          <h5>Best Seller</h5>
          <h5>Deal of the Day</h5>
          <h5>All time Sale</h5>
          <h5>Season Sale</h5>
          <h5>Track Order</h5>
        </div>
      </div>
      <div className="hamburgerExt" ref={toggleHam}>
        <a href="">
          <h4>Smartphones</h4>
        </a>
        <a href="">
          <h4>Laptops</h4>
        </a>
        <a href="">
          <h4>Fragrance</h4>
        </a>
        <a href="">
          <h4>Skincare</h4>
        </a>
        <a href="">
          <h4>Groceries</h4>
        </a>

        <a href="">
          <h4>Furniture</h4>
        </a>
        <a href="">
          <h4>Womens</h4>
        </a>
        <a href="">
          <h4>Mens</h4>
        </a>
      </div>
    </>
  );
};

export default Home;
