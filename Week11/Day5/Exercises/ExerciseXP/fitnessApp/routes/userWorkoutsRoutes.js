const express = require('express');
const {_getAllUserWorkouts, _insertUserWorkout, _updateUserWorkout, _deleteUserWorkout} = require('../controllers/userWorkoutsController.js');

const router = express.Router();

router.get('/all', _getAllUserWorkouts);
router.post('/create', _insertUserWorkout);
router.put('/update', _updateUserWorkout);
router.delete('/delete', _deleteUserWorkout);

module.exports = router;