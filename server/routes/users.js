const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");

router.get("/fetchUsers", (req, res) => {
  db.query("SELECT * from users", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
    console.log(result);
  });
});

// Route to create user
router.post("/newUser", (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10).then((hashPassword) => {
    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hashPassword],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.json("User created");
        }
      }
    );
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = db.query(
    "SELECT * FROM users WHERE username=(?)",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //check to see if the user matches login credentials
        // if ((user = [])) res.json({ error: "User Doesn't Exist" });

        bcrypt.compare(password, result[0].password).then((match) => {
          if (!match) res.json({ error: "Wrong password" });
          else {
            res.json("Logged in");
          }
        });
      }
    }
  );
});

module.exports = router;
