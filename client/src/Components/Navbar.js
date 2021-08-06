import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Helpers/AuthContext";

function Navbar() {
  const { authState, setAuthState } = useContext(AuthContext);
  let history = useHistory();

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setAuthState(false);
    history.push("/");
  };
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
        {!authState ? (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <h3 className="navLink">Login</h3>
            </Link>
            <Link to="/registration" style={{ textDecoration: "none" }}>
              <h3 className="navLink">Sign Up</h3>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <h3 className="navLink" onClick={logOut}>
                Logout
              </h3>
            </Link>
          </>
        )}
      </div>
      <div className="navRight-user">
        <h3 className="navLink-username">Username</h3>
        <div className="navRight-userInitials">U</div>
      </div>
    </nav>
  );
}

export default Navbar;
