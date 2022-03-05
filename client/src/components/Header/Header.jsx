import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="navbar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/activities">
          <li>Activities</li>
        </Link>
        <Link to="/stats">
          <li>Stats</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
