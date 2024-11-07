const jwt = require("jsonwebtoken");
require("dotenv").config();

const { ACCESS_TOKEN_SECRET } = process.env;

const verifyAccessToken = (req, res, next) => {
  const token = req.cookies['accessToken'] || req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden", error: err.message});
    }

    const { userid, email } = decoded;
    /** validation -> */

    req.userid = userid;
    req.email = email;
    next();
  });
}

module.exports = {verifyAccessToken};