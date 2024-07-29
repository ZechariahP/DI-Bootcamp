const express = require("express");

const { users } = require("../config/data.js");
const { getOneUser, getAllUsers } = require("../controllers/usersControllers.js");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);

module.exports = router;