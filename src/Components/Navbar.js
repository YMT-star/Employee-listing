import React from "react";
import "../Components/Navbar.css";
const Navbar = () => {
  return (
    <header>
      <div className="left">
        <h2>
          <a href="/">Employee-Listing</a>
        </h2>
      </div>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
