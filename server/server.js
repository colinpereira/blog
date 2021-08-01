const express = require("express");
const app = express();
const cors = require("cors");

const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");

const PORT = 3001;

app.use(cors());
app.use(express.json());

// Import routers
app.use("/posts", postsRoute);
app.use("/auth", usersRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
