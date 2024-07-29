const {db} = require('../config/knexconnect.js');

const getAllUserWorkouts = () => {
    return db('user_workouts')
    .select('user_id', 'workout_id')
    .orderBy('user_id')
};

const insertUserWorkout = (user_id, workout_id) => {
    return db('user_workouts')
    .insert({user_id, workout_id})
    .returning([user_id, workout_id])
};

const updateUserWorkout = (user_id, workout_id) => {
    return db('user_workouts')
    .where({user_id})
    .update({workout_id})
    .returning([user_id, workout_id])
};

const deleteUserWorkout = (user_id) => {
    return db('user_workouts')
    .where({user_id})
    .del()
    .returning([user_id, workout_id])
};

module.exports = {
    getAllUserWorkouts,
    insertUserWorkout,
    updateUserWorkout,
    deleteUserWorkout
};
