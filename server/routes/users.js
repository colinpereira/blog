const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/authMiddleware");

const { sign } = require("jsonwebtoken");

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

  db.query(
    "SELECT * FROM users WHERE username=?",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //check to see if the user matches login credentials
        if (result.length === 0) {
          res.json({ error: "User Doesn't Exist" });
        } else {
          console.log(result);
          bcrypt.compare(password, result[0].password).then((match) => {
            if (!match) res.json({ error: "Wrong password" });
            else {
              const accessToken = sign(
                {
                  username: result[0].username,
                  id: result[0].id,
                },
                "secretToken"
              );
              res.json(accessToken);
            }
          });
        }
      }
    }
  );
});

router.get("/validateUser", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
