const {getAllUserWorkouts, insertUserWorkout, updateUserWorkout, deleteUserWorkout} = require('../models/userWorkoutsModel.js');

const _getAllUserWorkouts = async (req, res) => {
    try {
        const result = await getAllUserWorkouts();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};
const _insertUserWorkout = async (req, res) => {
    const {user_id, workout_id} = req.body;
    try {
        const result = await insertUserWorkout(user_id, workout_id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _updateUserWorkout = async (req, res) => {
    const {user_id, workout_id} = req.body;
    try {
        const result = await updateUserWorkout(user_id, workout_id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
}

const _deleteUserWorkout = async (req, res) => {
    const {user_id, workout_id} = req.body;
    try {
        const result = await deleteUserWorkout(user_id, workout_id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
}

module.exports = {
    _getAllUserWorkouts, _insertUserWorkout, _updateUserWorkout, _deleteUserWorkout
};