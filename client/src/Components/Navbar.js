import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>my.blog</h1>
        </Link>
      </div>
      <div className="navRight">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="navLink">Home</h3>
        </Link>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <h3 className="navLink">New Post</h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
