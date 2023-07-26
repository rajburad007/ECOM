import "./App.css";
import "./styles/landingpage.css";
import Footer from "./comp/Footer.js";
import Navbar from "./comp/Navbar.js";
import Landingpage from "./comp/Landingpage.js";
import Product from "./comp/Product.js";
import Signup from "./comp/Signup";
import Cart from "./comp/Cart.js";
import { useEffect, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecCategory from "./comp/SpecCategory";

export const GlobalInfo = createContext();
function App() {
  let arr = [];
  var [isLogin, setLogin] = useState();
  const [data, setData] = useState();
  let [category, setCategory] = useState();
  const url = `https://dummyjson.com/products`;
  const options = {
    method: "GET",
  };

  async function getData() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      let products = JSON.parse(result);
      setData(products.products);
    } catch (error) {
      console.error(error);
    }
  }
  const urlCategory = `https://dummyjson.com/products/categories`;
  const optionsCatgeory = {
    method: "GET",
  };

  async function getDataCatgeory() {
    try {
      const response = await fetch(urlCategory, optionsCatgeory);
      const result = await response.text();
      let products = JSON.parse(result);
      setCategory(products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
    getDataCatgeory();
  }, []);

  return (
    <>
      <GlobalInfo.Provider
        value={{
          getData: getData,
          data: data,
          category: category,
          getDataCatgeory: getDataCatgeory,
          isLogin: isLogin,
          setLogin: setLogin,
          arr: arr,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Landingpage />
                  <Footer />
                </>
              }
            />
            {category
              ? category.map((e, i) => {
                  return (
                    <Route element={<SpecCategory cat={e} />} path={`/${e}`} />
                  );
                })
              : ""}

            {data
              ? data.map((e, i) => {
                  return (
                    <Route
                      path={`/${e.title}`}
                      element={<Product product={e} />}
                    />
                  );
                })
              : ""}
            <Route path="/login" element={<Signup />} />
            {window.localStorage.getItem("isLogin") ? (
              <Route path="/cart" element={<Cart />} />
            ) : (
              ""
            )}
          </Routes>
        </BrowserRouter>
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
