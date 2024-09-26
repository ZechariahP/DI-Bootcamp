const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

const verifyJWT = (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = { verifyJWT };