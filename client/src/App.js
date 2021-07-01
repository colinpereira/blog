import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Importing components
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
