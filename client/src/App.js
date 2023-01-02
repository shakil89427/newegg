import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Activity from "./Components/Activity/Activity";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import PaymentDetails from "./Pages/PaymentDetails";
import MyOrders from "./Pages/MyOrders";
import AllOrders from "./Components/MyOrders/AllOrders";
import OrderDetails from "./Components/MyOrders/OrderDetails";
import Latest from "./Pages/Latest";
import Trending from "./Pages/Trending";
import Popular from "./Pages/Popular";
import AuthRoutes from "./Components/AuthRoutes/AuthRoutes";
import Profile from "./Pages/Profile";

const App = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="min-h-screen">
        <Activity />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoutes>
                <Home />
              </AuthRoutes>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthRoutes>
                <Profile />
              </AuthRoutes>
            }
          />
          <Route
            path="/latest"
            element={
              <AuthRoutes>
                <Latest />
              </AuthRoutes>
            }
          />
          <Route
            path="/trending"
            element={
              <AuthRoutes>
                <Trending />
              </AuthRoutes>
            }
          />
          <Route
            path="/popular"
            element={
              <AuthRoutes>
                <Popular />
              </AuthRoutes>
            }
          />
          <Route
            path="/details/:_id"
            element={
              <AuthRoutes>
                <ProductDetails />
              </AuthRoutes>
            }
          />
          <Route
            path="/cart"
            element={
              <AuthRoutes>
                <Cart />
              </AuthRoutes>
            }
          />
          <Route
            path="/paymentdetails"
            element={
              <AuthRoutes>
                <PaymentDetails />
              </AuthRoutes>
            }
          />
          <Route
            path="/myorders"
            element={
              <AuthRoutes>
                <MyOrders />
              </AuthRoutes>
            }
          >
            <Route
              index
              element={
                <AuthRoutes>
                  <AllOrders />
                </AuthRoutes>
              }
            />
            <Route
              path=":id"
              element={
                <AuthRoutes>
                  <OrderDetails />
                </AuthRoutes>
              }
            />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
