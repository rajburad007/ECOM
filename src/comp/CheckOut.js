import React, { useContext, useState, useRef } from "react";
import Navbar from "../comp/Navbar.js";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../styles/checkout.css";
import Bin from "../icons/bin.png";
import gpay from "../icons/gpay.png";
import razorpay from "../icons/razorpay.png";
import COD from "../icons/COD.png";
import Cart from "./Cart.js";
import { GlobalInfo } from "../App.js";
const CheckOut = () => {
  function delEle(index) {
    arr.splice(index, 1);
    setLen(arr.length);
    window.localStorage.setItem("arr", JSON.stringify(arr));
    setr(window.localStorage.getItem("arr"));
  }
  let [add, setAdd] = useState(window.localStorage.getItem("address"));
  let [pnum, setPnum] = useState(window.localStorage.getItem("phoneNumber"));
  let address = useRef();
  let phoneNumber = useRef();
  const { arr, setLen, trackOrder, setTrackOrder } = useContext(GlobalInfo);
  let date = new Date();
  let [r, setr] = useState(window.localStorage.getItem("arr"));
  function checkOut() {
    if (
      window.localStorage.getItem("phoneNumber") &&
      window.localStorage.getItem("address")
    ) {
      trackOrder.push(
        ...arr,
        `${date.getDate()}/ ${date.getMonth()}/ ${date.getFullYear()} `
      );

      window.localStorage.setItem("trackOrder", JSON.stringify(trackOrder));
      arr.splice(0, arr.length);
      window.localStorage.setItem("arr", JSON.stringify(arr));
      setr(window.localStorage.getItem("arr"));
      setLen(arr.length);
    } else {
      alert("");
    }
  }
  let totalPrice = 0;
  return (
    <>
      <Navbar />

      <div className="checkOutSection">
        <form action="">
          Address:{" "}
          <textarea
            ref={address}
            name=""
            id=""
            cols="30"
            rows="10"
            value={window.localStorage.getItem("address")}
            required
            placeholder="enter your address"
            onChange={function () {
              setAdd(address.current.value.trim());
              window.localStorage.setItem(
                "address",
                address.current.value.trim()
              );
            }}
          ></textarea>
          Phone Number:{" "}
          <input
            placeholder="Phone number"
            type="number"
            name="number"
            ref={phoneNumber}
            value={window.localStorage.getItem("phoneNumber")}
            id="number"
            reuired
            onChange={function () {
              setPnum(phoneNumber.current.value.trim());
              window.localStorage.setItem(
                "phoneNumber",
                phoneNumber.current.value.trim()
              );
            }}
          />
          <div className="pay">
            <input type="radio" name="payment" id="gpay" required />
            <label htmlFor="gpay">
              <img width="50px" src={gpay} alt="" /> gpay
            </label>
          </div>
          <div className="pay">
            <input type="radio" name="payment" id="rozarpay" required />
            <label htmlFor="rozarpay">
              <img width="50px" src={razorpay} alt="" />
              rozarpay
            </label>
          </div>
          <div className="pay">
            <input type="radio" name="payment" id="COD" required />

            <label htmlFor="COD">
              <img width="70px" src={COD} alt="" />
              COD
            </label>
          </div>
        </form>
        <div className="checkoutProducts">
          <h2>Final Order</h2>
          {arr.map((e, i) => {
            return (
              <div className="productCart">
                <Link to={`/${e.title}`}>
                  <div className="tile">
                    <div className="imgProduct">
                      <img src={e.thumbnail} alt="" />
                    </div>
                    <div className="title">{e.title}</div>
                    <div className="price">${e.price}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {arr.length != 0
          ? arr.map((e, i) => {
              totalPrice += e.price;
            })
          : ""}
        {arr.length !== 0 ? (
          <h1 className="totalPrice">
            {arr.length != 0 ? `Total: $${totalPrice}` : ""}
          </h1>
        ) : (
          ""
        )}
        {pnum && add ? (
          <Link to="/cart">
            <input
              className="checkoutBtn"
              onClick={checkOut}
              type="submit"
              value="Place order !"
            />
          </Link>
        ) : (
          <Link to="/checkout">
            <input
              className="checkoutBtn"
              onClick={checkOut}
              type="submit"
              value="Place order !"
            />
          </Link>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
