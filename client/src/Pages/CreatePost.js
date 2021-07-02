import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Styles/CreatePost.css";

function CreatePost() {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log(username, title, description);
  }, [username, title, description]);

  const submitPost = () => {
    Axios.post("http://localhost:3001/api/create", {
      username: username,
      title: title,
      description: description,
    });
  };

  return (
    <div className="createPostContainer">
      <form className="createPostForm">
        <div className="createPostForm-row">
          <label htmlFor="username" className="createPostForm-label">
            Username
          </label>
          <input
            type="text"
            className="CreateFormForm-input"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="createPostForm-row">
          <label htmlFor="title" className="createPostForm-label">
            Title
          </label>
          <input
            type="text"
            className="CreateFormForm-input"
            type="text"
            className="CreateFormForm-input"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="createPostForm-row">
          <label htmlFor="text" className="createPostForm-label">
            Description
          </label>
          <textarea
            className="CreateFormForm-textInput"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button className="CreateForm-button" onClick={submitPost} type="reset">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
