import React, { createContext, useContext, useEffect } from "react";
import { GlobalInfo } from "../App.js";
import { Link } from "react-router-dom";
import "../styles/ProductTile.css";
const ProductTile = (props) => {
  const { getDataP, data } = useContext(GlobalInfo);

  return (
    <>
      <Link to={`/${props.name}`}>
        <div className="tile">
          <div className="imgProduct">
            <img
              src={
                props.dataInfo ? props.dataInfo[props.val].images[0] : "loading"
              }
              alt=""
            />
          </div>
          <div className="title">
            {props.dataInfo ? props.dataInfo[props.val].title : "loading"}
          </div>
          <div className="price">
            ${props.dataInfo ? props.dataInfo[props.val].price : "loading"}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductTile;
