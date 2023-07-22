import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../styles/landingpage.css";
import arrowL from "../icons/arrowL.png";
import arrowR from "../icons/arrowR.png";
import slider1 from "../icons/slider1.png";
import slider2 from "../icons/slider2.png";
import slider3 from "../icons/slider3.png";
import men from "../icons/men.png";
import women from "../icons/women.png";
import furniture from "../icons/furniture.png";
import electronics from "../icons/electronics.png";
import grocery from "../icons/grocery.png";
import skinCare from "../icons/skincare.png";
const Landingpage = () => {
  let [height, setHeight] = useState(0);
  let slider = useRef();
  let slider2 = useRef();
  function callBack(e) {
    setHeight(e);
  }
  let img = useRef();

  let [imgData, setimgData] = useState(1);
  useEffect(() => {});

  function leftSlide() {
    --imgData;

    if (imgData <= 0) {
      imgData = 3;
    }
    setimgData(imgData);
    console.log(imgData);
  }
  function rightSlide() {
    ++imgData;

    if (imgData >= 4) {
      imgData = 1;
    }
    setimgData(imgData);
    console.log(imgData);
  }

  function slideRight() {
    slider.current.scrollLeft += slider.current.offsetWidth;
  }
  function slideLeft() {
    slider.current.scrollLeft -= slider.current.offsetWidth;
  }
  function slideRight2() {
    slider2.current.scrollLeft += slider.current.offsetWidth;
  }
  function slideLeft2() {
    slider2.current.scrollLeft -= slider.current.offsetWidth;
  }
  return (
    <>
      <Navbar call={callBack} />
      {/* <div className="mainsliderSection">
        <img src={arrowL} className="leftArrow1" alt="" onClick={leftSlide} />

        <img
          src={require(`../icons/slider${imgData}.png`)}
          width={"1000px"}
          alt=""
          className="headerImg"
        />

        <img src={arrowR} alt="" className="rightArrow1" onClick={rightSlide} />
      </div> */}
      {/* <div className="todaysDeal">
        <div className="heading">
          <h2>Today's Deal</h2>
        </div>
        <div className="slider">
          <img src={arrowL} className="arrowL1" alt="" onClick={slideLeft} />
          <div className="sliding" ref={slider}>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
          </div>
          <img src={arrowR} className="arrowR1" alt="" onClick={slideRight} />
        </div>
      </div>
      <div className="categories">
        <h2>CATEGORY</h2>
        <div className="category">
          <div
            className="men"
            style={{
              backgroundImage: `url(${men})`,
            }}
          >
            Mens
          </div>
          <div
            className="women"
            style={{
              backgroundImage: `url(${women})`,
            }}
          >
            Women
          </div>
          <div
            className="furniture"
            style={{
              backgroundImage: `url(${furniture})`,
            }}
          >
            Furniture
          </div>
          <div
            className="groceries"
            style={{
              backgroundImage: `url(${grocery})`,
            }}
          >
            Groceries
          </div>
          <div
            className="skincare"
            style={{
              backgroundImage: `url(${skinCare})`,
            }}
          >
            Skincare
          </div>
          <div
            className="electronics"
            style={{
              backgroundImage: `url(${electronics})`,
            }}
          >
            Electronics
          </div>
        </div>
      </div>
      <div className="seasonSale">
        <div className="heading">
          <h2 className="heading">Season Sale</h2>
        </div>
        <div className="slider">
          <img src={arrowL} alt="" className="arrowL2" onClick={slideLeft2} />
          <div className="sliding" ref={slider2}>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
            <div>
              <img src={slider1} width="200px" height="200px" alt="" />
            </div>
          </div>
          <img src={arrowR} alt="" className="arrowR2" onClick={slideRight2} />
        </div>
      </div> */}
      {/* <Footer /> */}
    </>
  );
};

export default Landingpage;
