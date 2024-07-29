const {getAllUsers, insertUser, updateUser, deleteUser} = require('../models/usersModel.js');

const _getAllUsers = async (req, res) => {
    try {
        const result = await getAllUsers();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};
const _insertUser = async (req, res) => {
    const {username, email, password, created_at, updated_at} = req.body;
    try {
        const result = await insertUser(username, email, password, created_at, updated_at);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
};

const _updateUser = async (req, res) => {
    const {id, username, email, password, updated_at} = req.body;
    try {
        const result = await updateUser(id, username, email, password, updated_at);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
}

const _deleteUser = async (req, res) => {
    const {id} = req.body;
    try {
        const result = await deleteUser(id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json({error: 'something went wrong'});
    }
}

module.exports = {
    _getAllUsers, _insertUser, _updateUser, _deleteUser
};