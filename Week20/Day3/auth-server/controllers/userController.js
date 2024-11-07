const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  registerUser: async (req, res) => {
    const { password, email } = req.body;
    // const userinfo = { password, email };

    try {
      const user = await userModel.createUser({ password, email });
      res.status(201).json({
        message: "User registerd successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      if (error.code == 23505) {
        return res.status(400).json({ message: "Email already exists" });
      }
      res.status(500).json({ message: "internal server error" });
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userModel.getUserByEmail(email);

      if (!user) {
        return res.status(404).json({ message: "user not found....." });
      }

      const passwordMatch = await bcrypt.compare(password + "", user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Authentication failed" });
      }
/** generate token */
      const accessToken = jwt.sign(
        { userid: user.id, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "60s" }
      );

      /** set token in httpOnly cookie */
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 60 * 1000,
      });

      res.json({
        message: "Login successfuly",
        user: { userid: user.id, email: user.email },
        accessToken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },
  getUsers: async (req, res) => {
    console.log(req);
    try {
      const users = await userModel.getUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },
  verifyAuth: (req, res) => {
    /** generate token */
    const accessToken = jwt.sign(
      { userid: req.userid, email: req.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );

    /** set token in httpOnly cookie */
    res.cookie("token", accessToken, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });

    res.json({
      message: "Auth successfuly",
      user: { userid: req.userid, email: req.email },
      accessToken,
    });
  },
  logoutUser: (req, res) => {
    res.clearCookie("token");
    res.sendStatus(200);
  },
};