const { db } = require("../config/db.js");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (userinfo) => {
    const { password, email } = userinfo;

    const trx = await db.transaction();

    try {
      /** hash the password */
      const hashPassword = await bcrypt.hash(password + "", 10);

      const [user] = await trx("authusers").insert(
        { email, password: hashPassword },
        ["email", "id"]
      );

      await trx.commit();

      return user;
    } catch (error) {
      await trx.rollback();
      console.log(error);
      throw error;
    }
  },
  getUserByEmail: async (email = "") => {
    try {
      return await db("authusers")
        .select("id", "email", "password")
        .where({ email })
        .first();

      // return user;
    } catch (error) {
      throw error;
    }
  },
};