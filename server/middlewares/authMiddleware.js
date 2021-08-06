const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "user not logged in" });

  try {
    const validToken = verify(accessToken, "secretToken");
    req.user = validToken;
    if (validToken) {
      console.log(req.user);
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
