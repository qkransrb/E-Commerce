import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesWithUserChat from "./components/user/RoutesWithUserChat";
import ProtectedRoutes from "./components/ProtectedRoutes";

// Public Routes
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

// User Routes
import UserProfile from "./pages/user/UserProfile";
import UserOrders from "./pages/user/UserOrders";
import UserCartDetails from "./pages/user/UserCartDetails";
import UserOrderDetails from "./pages/user/UserOrderDetails";

// Admin Routes
import AdminUsers from "./pages/admin/AdminUsers";
import AdminEditUser from "./pages/admin/AdminEditUser";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCreateProduct from "./pages/admin/AdminCreateProduct";
import AdminEditProduct from "./pages/admin/AdminEditProduct";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminOrderDetails from "./pages/admin/AdminOrderDetails";
import AdminChats from "./pages/admin/AdminChats";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route element={<RoutesWithUserChat />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Route>

        {/* User Protected Routes */}
        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path="/user" element={<UserProfile />} />
          <Route path="/user/my-orders" element={<UserOrders />} />
          <Route path="/user/cart-details" element={<UserCartDetails />} />
          <Route path="/user/order-details" element={<UserOrderDetails />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/edit-user" element={<AdminEditUser />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProduct />}
          />
          <Route path="/admin/edit-product" element={<AdminEditProduct />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/order-details" element={<AdminOrderDetails />} />
          <Route path="/admin/chats" element={<AdminChats />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element="404 - Page not exists" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
