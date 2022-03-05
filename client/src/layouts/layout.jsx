import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
