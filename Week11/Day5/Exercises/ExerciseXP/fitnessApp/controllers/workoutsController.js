const {getAllWorkouts, insertWorkout, updateWorkout, deleteWorkout} = require('../models/workoutsModel.js');

const _getAllWorkouts = async (req, res) => {
    try {
        const result = await getAllWorkouts();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};
const _insertWorkout = async (req, res) => {
    const {title, description, created_by, created_at, updated_at} = req.body;
    try {
        const result = await insertWorkout(title, description, created_by, created_at, updated_at);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _updateWorkout = async (req, res) => {
    const {id, title, description, created_by, updated_at} = req.body;
    try {
        const result = await updateWorkout(id, title, description, created_by, updated_at);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _deleteWorkout = async (req, res) => {
    const {id} = req.body;
    try {
        const result = await deleteWorkout(id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

module.exports = {
    _getAllWorkouts, _insertWorkout, _updateWorkout, _deleteWorkout
};