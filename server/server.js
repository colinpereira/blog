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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
