import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  let year = new Date();

  return (
    <>
      <div className="about">
        <div className="aboutus">
          <h3>About us</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam
          ab maiores, aperiam quos cupiditate ad aut deserunt repellendus
          itaque. Beatae minima facere accusamus. Explicabo, molestiae
          perspiciatis vitae neque magnam eos illo culpa aut eveniet voluptatum
          itaque molestias expedita ab repudiandae fugit incidunt odio enim
          ratione, autem nihil hic? Expedita magnam quos possimus. Asperiores
          ipsam necessitatibus dolorum, perspiciatis quam at consequatur, dicta
          cupiditate, autem quas inventore nemo tempora aspernatur earum?
        </div>
        <div className="foot">© theStored {year.getFullYear()}</div>
      </div>
    </>
  );
};

export default Footer;
