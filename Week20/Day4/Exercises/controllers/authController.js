const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET, JWT_EXPIRATION, REFRESH_TOKEN_EXPIRATION } = require('../config/keys');

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    const refreshToken = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION });
    res.cookie('token', token, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(400).json({ message: 'Error logging in', error });
  }
};

const refreshToken = (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    return res.status(403).json({ message: 'No refresh token provided' });
  }
  jwt.verify(refreshToken, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Error verifying refresh token:', err);
      return res.status(401).json({ message: 'Failed to authenticate refresh token' });
    }
    const token = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Token refreshed' });
  });
};

const logout = (req, res) => {
  res.clearCookie('token');
  res.clearCookie('refreshToken');
  res.json({ message: 'Logout successful' });
};

module.exports = { register, login, refreshToken, logout };