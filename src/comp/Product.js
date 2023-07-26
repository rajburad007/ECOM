import React, { useContext, useEffect } from "react";
import Navbar from "../comp/Navbar.js";
import Footer from "../comp/Footer.js";
import "../styles/Product.css";
import { Link } from "react-router-dom";
import star from "../icons/star.png";
import { GlobalInfo } from "../App.js";
const Product = (props) => {
  const { getData, data, category, getDataCatgeory, isLogin, arr } =
    useContext(GlobalInfo);

  function addToCart() {
    arr.push(props.product);
    window.localStorage.setItem("arr", JSON.stringify(arr));
  }

  return (
    <>
      <Navbar />
      <div className="productSection">
        <div className="productImg">
          <img
            src={props.product ? props.product.images[2] : "loading"}
            alt=""
          />
        </div>
        <div className="productDesc">
          <h2>{data ? props.product.title : "loading"}</h2>
          <h4>${data ? props.product.price : "loading"}</h4>
          <p>{data ? props.product.description : "loading"}</p>
          <div className="rating">
            <img src={star} alt="" />
            {data ? props.product.rating : "loading"}
          </div>
          <p>stock : {data ? props.product.stock : "loading"}</p>
          <p>
            Discount : {data ? props.product.discountPercentage : "loading"}%
          </p>
        </div>
        <div className="btns">
          {window.localStorage.getItem("isLogin") ? (
            <button className="cartBtn" onClick={addToCart}>
              Add to cart
            </button>
          ) : (
            <Link to="/login">
              <button className="cartBtn">Add to cart</button>
            </Link>
          )}
          <button className="wishBtn">Add to wishlist</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
