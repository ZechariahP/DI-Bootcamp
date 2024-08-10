const {db} = require('../config/knexconnect.js')

const getAllUsers = () => {
    return db('users')
    .select('id', 'username', 'email', 'password', 'created_at', 'updated_at')
    .orderBy('username')
};

const insertUser = (username, email, password, created_at, updated_at) => {
    return db('users')
    .insert({username, email, password, created_at, updated_at})
    .returning(['id', 'username', 'email', 'password', 'created_at', 'updated_at'])
};

const updateUser = (id, username, email, password, updated_at) => {
    return db('users')
    .where({id})
    .update({username, email, password, updated_at})
    .returning(['id', 'username', 'email', 'password', 'updated_at'])
};

const deleteUser = (id) => {
    return db('users')
    .where({id})
    .del()
    .returning(['id', 'username', 'email', 'password', 'created_at', 'updated_at'])
};

module.exports = {
    getAllUsers,
    insertUser,
    updateUser,
    deleteUser
};
