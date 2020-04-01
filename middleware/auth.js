const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");

  // Make sure accesstoken is correct
  if (!token) {
    res.status(401).json({ msg: "unauthorized token" });
  }

  // If correct token let's verify
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.name);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
