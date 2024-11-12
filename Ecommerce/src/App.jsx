/* eslint-disable no-unused-vars */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Correct import for v6
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";

import customeTheme from "./Theme/customeTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Home/Product/Product";
import ProductDetails from "./customer/pages/Home/Page Details/ProductDetails";
import Review from "./customer/pages/Review/Review";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Account from "./customer/pages/Account/Account";
import OrderDetails from "./customer/pages/Account/OrderDetails";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Account /> */}
        {/* <OrderDetails /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
