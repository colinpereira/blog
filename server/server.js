const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  db.query("SELECT * from posts", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

// Route to create post
app.post("/api/create", (req, res) => {
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
app.delete("/api/delete/:id", (req, res) => {
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
app.put("/api/update", (req, res) => {
  w;
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

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
