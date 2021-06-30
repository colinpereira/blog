import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Importing components
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={(props) => <Home />} />
        <Route
          path="/CreatePost/:id"
          exact
          render={(props) => <CreatePost />}
        />
      </Router>
    </div>
  );
}

export default App;
