import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
