const express = require('express');
const {_getAllUsers, _insertUser, _updateUser, _deleteUser} = require('../controllers/usersController.js');

const router = express.Router();

router.get('/all', _getAllUsers);
router.post('/create', _insertUser);
router.put('/update', _updateUser);
router.delete('/delete', _deleteUser);

module.exports = router;