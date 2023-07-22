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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos error
      voluptates laborum possimus iste tenetur eaque dolore numquam corporis
      optio quod impedit dolorum doloremque, ullam at quas eius autem vel
      aliquam beatae blanditiis animi id debitis. Velit, nisi. Quibusdam, ab!
      Minima modi atque est. Possimus quisquam dolorum labore accusamus ab et
      inventore doloremque qui debitis at, molestias, error incidunt
      exercitationem corporis velit! Eum incidunt, nostrum ratione nobis
      excepturi quibusdam! Ullam, nisi nesciunt eligendi quasi repellat itaque
      sed, voluptates a est cupiditate, dolorum deserunt saepe nobis optio eius
      quibusdam expedita. Dolores itaque nulla quae repellat doloremque iusto
      cupiditate asperiores consectetur? Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Nostrum laboriosam sit suscipit eum doloribus,
      exercitationem voluptatum totam ad! Unde reprehenderit omnis, sit nobis
      voluptas cum provident corrupti itaque eligendi modi obcaecati
      perspiciatis. Animi officiis suscipit sit inventore accusantium natus
      ipsa, dolorum ipsam possimus labore, cumque beatae eaque facere, saepe
      maxime harum est id soluta magni praesentium temporibus! Repellendus quos
      error quaerat nam. Explicabo fuga velit nobis provident molestiae, vitae
      nisi eum aspernatur temporibus id tempora quidem excepturi perferendis
      reiciendis adipisci, recusandae enim accusantium, at facere consectetur
      unde! Dolorum possimus ab eius ducimus ullam sapiente eveniet,
      reprehenderit laudantium similique earum officia doloremque eligendi,
      temporibus nesciunt rem aspernatur labore est sit nostrum! Aliquam, fuga
      cum odio blanditiis tempora non veniam modi quasi fugit accusantium in
      delectus repellat libero atque facere praesentium, adipisci quis commodi
      inventore optio assumenda maiores harum. Doloremque accusamus corrupti
      enim tempora ut, quisquam nam quos, suscipit nesciunt repudiandae
      repellendus ipsa laboriosam ratione minus cum debitis expedita reiciendis
      laudantium ducimus magnam rerum veniam odit. Rerum sint numquam aut!
      Perferendis et eveniet quasi laudantium sit doloremque nostrum sed sequi
      nulla asperiores, molestias ratione, nihil tenetur delectus corporis fugit
      alias maxime praesentium. Fugit voluptas minima beatae placeat rem sint
      ipsa, repellat maxime. Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Consequuntur, laudantium distinctio labore, ut ab quam nulla
      doloremque cupiditate illo dolorem eveniet maxime deleniti illum modi
      perspiciatis quae repudiandae sequi perferendis et dolorum assumenda,
      recusandae in fuga numquam. Labore hic dignissimos facilis aliquid est
      aspernatur voluptatum ratione fuga sint eum nostrum illum sapiente veniam
      a, asperiores odit atque quis deserunt dolore. Ad, possimus quod
      blanditiis beatae vero iste sunt repellat laboriosam rerum accusamus
      sapiente temporibus, dolore debitis eius obcaecati? Eaque vero repellat
      fuga omnis enim, voluptas tempore blanditiis eum recusandae velit alias
      ratione placeat? Hic corrupti minima totam in illo omnis. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Consectetur magni dicta
      repudiandae tenetur nostrum veritatis enim aliquam ullam doloremque totam
      architecto dignissimos, impedit blanditiis commodi error at voluptates
      eligendi quos.
    </>
  );
};

export default Home;
