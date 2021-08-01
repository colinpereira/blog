import React, { useState, useContext } from "react";
import "./Styles/Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  return (
    <div className="loginContainer">
      <div className="login">
        <h1>Login</h1>
        <label>Username:</label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          autoComplete="off"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button> Login </button>
      </div>
    </div>
  );
}

export default Login;
