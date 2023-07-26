import React, { useContext, useEffect, createContext, useState } from "react";
import { GlobalInfo } from "../App.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../styles/speccategory.css";
import ProductTile from "../comp/ProductTile.js";
import star from "../icons/star.png";
const SpecCategory = (props) => {
  const { getData, data } = useContext(GlobalInfo);

  let categoryMap = data
    ? data
        .map((e) => {
          return e;
        })
        .filter((e) => {
          return e.category === props.cat;
        })
    : "";

  return (
    <>
      <Navbar />
      <div className="filters"></div>

      <div className="productShow">
        <h1>{props.cat}</h1>
        <div className="productTiles">
          {categoryMap
            ? categoryMap.map((ele, i) => {
                return (
                  <ProductTile
                    val={i}
                    dataInfo={categoryMap}
                    name={ele.title}
                  />
                );
              })
            : ""}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SpecCategory;
