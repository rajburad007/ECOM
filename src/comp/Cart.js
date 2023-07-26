import React, { useContext } from "react";
import Navbar from "../comp/Navbar.js";
import Footer from "../comp/Footer.js";
import { GlobalInfo } from "../App.js";
import { Link, renderMatches } from "react-router-dom";
const Cart = () => {
  const { getData, data, category, getDataCatgeory, isLogin, arr } =
    useContext(GlobalInfo);
  let r = window.localStorage.getItem("arr");
  let cartFinalArr = r ? JSON.parse(r) : "";
  function clearCart() {
    window.localStorage.removeItem("arr");
    window.location.reload();
  }

  return (
    <>
      <Navbar />
      {cartFinalArr
        ? cartFinalArr.map((e, i) => {
            return (
              <>
                <Link to={`/${e.title}`}>
                  <div className="tile">
                    <div className="imgProduct">
                      <img src={e.thumbnail} alt="" />
                    </div>
                    <div className="title">{e.title}</div>
                    <div className="price">${e.price}</div>
                  </div>
                </Link>
                <button onClick={() => {}}>del</button>
              </>
            );
          })
        : "your cart is empty"}
      {JSON.parse(window.localStorage.getItem("arr")) ? (
        <Link to="/cart">
          <button onClick={clearCart}>checkOut</button>
        </Link>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default Cart;
