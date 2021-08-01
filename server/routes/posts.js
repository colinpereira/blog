const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/api/get", (req, res) => {
  db.query("SELECT * from posts", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

// Route to create post
router.post("/api/create", (req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;

  console.log(username + title + description);

  db.query(
    "INSERT INTO posts (title, description, user) VALUES (?,?,?)",
    [title, description, username],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// Route to delete post
router.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM posts WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Route to update post
router.put("/api/update", (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const title = req.body.title;
  const username = req.body.user;
  const description = req.body.description;
  db.query(
    "UPDATE posts SET title = ?, description = ?, user = ? WHERE id = ?;",
    [title, description, username, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
