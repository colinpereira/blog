import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Styles/Home.css";
import Bin from "./Styles/Images/bin.png";

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
              <h1 className="postTitle">{post.title}</h1>
              <h3 className="postUser">
                <b>Posted By:</b> {post.user}
              </h3>
              <p className="postDescription">{post.description}</p>
              <div className="postActionContainer">
                <p>Update Post</p>
                <img src={Bin} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
