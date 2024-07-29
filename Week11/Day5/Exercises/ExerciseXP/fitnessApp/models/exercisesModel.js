const {db} = require('../config/knexconnect.js')

const getAllExercises = () => {
    return db('exercises')
    .select('id', 'name', 'description', 'muscle_group', 'created_at', 'updated_at')
    .orderBy('name')
};

const insertExercise = (name, description, muscle_group, created_at, updated_at) => {
    return db('exercises')
    .insert({name, description, muscle_group, created_at, updated_at})
    .returning(['id', 'name', 'description', 'muscle_group', 'created_at', 'updated_at'])
};

const updateExercise = (id, name, description, muscle_group, updated_at) => {
    return db('exercises')
    .where({id})
    .update({name, description, muscle_group, updated_at})
    .returning(['id', 'name', 'description', 'muscle_group', 'updated_at'])
};

const deleteExercise = (id) => {
    return db('exercises')
    .where({id})
    .del()
    .returning(['id', 'name', 'description', 'muscle_group', 'created_at', 'updated_at'])
};

module.exports = {
    getAllExercises,
    insertExercise,
    updateExercise,
    deleteExercise
};
