import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Styles/Home.css";

function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setPostList(response.data);
      console.log(postList);
    });
  }, []);

  return (
    <div className="home">
      <header className="homeHeader">Welcome to my blog!</header>
      <div className="postContainer">
        {postList.map((post, key) => {
          return (
            <div className="post">
              <h1>{post.title}</h1>
              <h3>{post.user}</h3>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
