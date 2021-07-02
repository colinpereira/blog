import React, { useState } from "react";
import "./Modal.css";
import Axios from "axios";

function Modal({
  closeModal,
  currValues,
  submitUpdate,
  setPostList,
  postList,
}) {
  const [newTitle, setNewTitle] = useState(currValues.title);
  const [newUser, setNewUser] = useState(currValues.user);
  const [newDescription, setNewDescription] = useState(currValues.description);

  const updatePost = () => {
    Axios.put("http://localhost:3001/api/update", {
      id: currValues.id,
      title: newTitle,
      user: newUser,
      description: newDescription,
    }).then(() => {
      closeModal(false);
      window.location.reload();
    });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeButton">
          <button
            className="modalClose"
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <h1>UPDATE A POST</h1>
        <div className="modalRow">
          <h3>Update Title</h3>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
        </div>
        <div className="modalRow">
          <h3>Update Username</h3>
          <input
            value={newUser}
            onChange={(e) => {
              setNewUser(e.target.value);
            }}
          />
        </div>
        <div className="modalRow">
          <h3>Update Description</h3>
          <textarea
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />
        </div>
        <div className="buttonContainer">
          <button className="modalSubmit" onClick={updatePost}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
