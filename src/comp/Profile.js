import React, { useEffect, useRef, useContext } from "react";
import Navbar from "./Navbar.js";
import "../styles/Profile.css";
import Footer from "./Footer.js";
import { GlobalInfo } from "../App.js";
import { Link } from "react-router-dom";
const Profile = () => {
  let address = useRef();
  useEffect(() => {
    address.current.value = window.localStorage.getItem("address");
  });
  const {
    getData,
    data,
    category,
    getDataCatgeory,
    isLogin,
    setLogin,
    arr,
    setCartLen,
    setWishLen,
    trackOrder,
  } = useContext(GlobalInfo);
  return (
    <>
      <Navbar />
      <div className="profileSection">
        <div className="personalDetail">
          <h2>Personal Detail</h2>
          <div className="name">
            <h3>Name</h3>:<p>{window.localStorage.getItem("userName")}</p>
          </div>
          <div className="email">
            <h3>Email</h3>:<p> {window.localStorage.getItem("email")}</p>
          </div>
          <div className="address">
            <h3>Address</h3> :
            <textarea
              className="adddressArea"
              name=""
              id=""
              cols="20"
              rows="3"
              ref={address}
              onChange={() => {
                window.localStorage.setItem("address", address.current.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="trackOrder">
          <h3>Track Order</h3>
          {window.localStorage.getItem("trackOrder")
            ? JSON.parse(window.localStorage.getItem("trackOrder")).map((e) => {
                return (
                  <div>
                    {e.title} <br />
                  </div>
                );
              })
            : "no order to track"}
        </div>
        <div className="logOut">
          <Link to="/">
            <button
              onClick={() => {
                trackOrder.splice(0, trackOrder.length);
                setLogin(false);
                localStorage.clear();
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
