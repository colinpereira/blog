import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Importing components
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";

import { AuthContext } from "./Helpers/AuthContext";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/validateUser", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  });
  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={CreatePost} />
            <Route path="/login" exact component={Login} />
            <Route path="/registration" exact component={Registration} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
