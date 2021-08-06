import React, { useState, useContext } from "react";
import "./Styles/Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Helpers/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);
  let history = useHistory();

  const onSubmit = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        setAuthState(true);
        history.push("/");
      }
      setUsername("");
      setPassword("");
    });
  };

  return (
    <div className="loginContainer">
      <div className="login">
        <h1>Login</h1>
        <label>Username:</label>
        <input
          value={username}
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          value={password}
          autoComplete="off"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button onClick={onSubmit}>Login </button>
      </div>
    </div>
  );
}

export default Login;
