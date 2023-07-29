import React, { useContext, useState } from "react";
import Navbar from "../comp/Navbar.js";
import Footer from "../comp/Footer.js";
import { GlobalInfo } from "../App.js";
import Bin from "../icons/bin.png";
import "../styles/Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const { arr, setLen, trackOrder, setTrackOrder } = useContext(GlobalInfo);
  let [r, setr] = useState(window.localStorage.getItem("arr"));

  let cartFinalArr = r ? JSON.parse(r) : "";
  function checkOut() {
    trackOrder.push(...arr);
    // setTrackOrder(trackOrder.push(...arr));
    window.localStorage.setItem("trackOrder", JSON.stringify(trackOrder));
    arr.splice(0, arr.length);
    window.localStorage.setItem("arr", JSON.stringify(arr));
    setr(window.localStorage.getItem("arr"));
    setLen(arr.length);
  }
  function delEle(index) {
    arr.splice(index, 1);
    setLen(arr.length);
    window.localStorage.setItem("arr", JSON.stringify(arr));
    setr(window.localStorage.getItem("arr"));
  }

  let totalPrice = 0;
  return (
    <>
      <Navbar />
      <div className="cartSection">
        <h1>Cart</h1>
        {cartFinalArr.length != 0
          ? cartFinalArr.map((e, i) => {
              return (
                <>
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
                    <button
                      className="bin"
                      onClick={() => {
                        delEle(i);
                      }}
                    >
                      <img src={Bin} alt="" />
                    </button>
                  </div>
                </>
              );
            })
          : "your cart is empty"}
        {cartFinalArr.length != 0
          ? cartFinalArr.map((e, i) => {
              totalPrice += e.price;
            })
          : ""}

        {cartFinalArr.length !== 0 ? (
          <h1 className="totalPrice">
            {cartFinalArr.length != 0 ? `Total: $${totalPrice}` : ""}
          </h1>
        ) : (
          ""
        )}

        {/* frequency */}
        {cartFinalArr.length !== 0 ? (
          <Link to="/cart">
            <button onClick={checkOut} className="checkOut">
              Checkout
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
