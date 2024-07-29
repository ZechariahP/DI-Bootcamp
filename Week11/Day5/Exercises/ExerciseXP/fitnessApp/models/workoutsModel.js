const {db} = require('../config/knexconnect.js');

const getAllWorkouts = () => {
    return db('workouts')
    .select('title', 'description', 'created_by', 'created_at', 'updated_at')
    .orderBy('title')
};

const insertWorkout = (title, description, created_by, created_at, updated_at) => {
    return db('workouts')
    .insert({title, description, created_by, created_at, updated_at})
    .returning([title, description, created_by, created_at, updated_at])
};

const updateWorkout = (title, description, created_by, created_at, updated_at) => {
    return db('workouts')
    .where({title})
    .update({description, created_by, created_at, updated_at})
    .returning([title, description, created_by, created_at, updated_at])
}

const deleteWorkout = (title) => {
    return db('workouts')
    .where({title})
    .del()
    .returning([title, description, created_by, created_at, updated_at])
};

module.exports = {
    getAllWorkouts,
    insertWorkout,
    updateWorkout,
    deleteWorkout
};
