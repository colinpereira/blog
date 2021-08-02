import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Styles/Home.css";
import Bin from "./Styles/Images/bin.png";
import Modal from "../Components/Modal";
import Like from "./Styles/Images/like.svg";

function Home() {
  const [postList, setPostList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currValues, setCurrValues] = useState({});
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/posts/api/get").then((response) => {
      setPostList(response.data);
      console.log(typeof response.data);
    });
  }, []);

  const deletePost = (id) => {
    Axios.delete(`http://localhost:3001/posts/api/delete/${id}`).then(
      (response) => {
        setPostList(
          postList.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };

  const incrementLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="home">
      <header className="homeHeader">Welcome to my blog!</header>

      <div className="postContainer">
        {postList &&
          postList.map((post, key = key) => {
            return (
              <div className="post">
                <h1 className="postTitle">{post.title}</h1>
                <h3 className="postUser">
                  <b>Posted By:</b> {post.user}
                </h3>
                <p className="postDescription">{post.description}</p>
                <div className="postActionContainer">
                  <div className="likeIcon">
                    <img src={Like} onClick={incrementLike} />
                    <div className="likeAmt">
                      {likes > 0 && <h3>{likes}</h3>}
                    </div>
                  </div>
                  <div className="postActionContainer-right">
                    <p
                      onClick={() => {
                        setOpenModal(true);
                        setCurrValues(post);
                        console.log(openModal);
                      }}
                    >
                      Update Post
                    </p>
                    <img
                      src={Bin}
                      className="binIcon"
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          currValues={{
            id: currValues.id,
            title: currValues.title,
            user: currValues.user,
            description: currValues.description,
          }}
          setPostList={setPostList}
          postList={postList}
        />
      )}
    </div>
  );
}

export default Home;
