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

  const deletePost = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`).then((response) => {
      setPostList(
        postList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  // const deleteEmployee = (id) => {
  //   Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
  //     setEmployeeList(
  //       employeeList.filter((val) => {
  //         return val.id != id;
  //       })
  //     );
  //   });
  // };

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
                <img
                  src={Bin}
                  onClick={() => {
                    deletePost(post.id);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
