const express = require('express');

const router = express.Router();

router.get('/profile', (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;