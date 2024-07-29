const {users} = require("../config/data.js");

const getAllUsers = (req, res) => {
    res.json(users);
}

const getOneUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((item) => item.id === Number(id));
    res.json(user);
}

module.exports = {
    getAllUsers,
    getOneUser,
}