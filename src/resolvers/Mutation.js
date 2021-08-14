const bcrypt = require("bcrypt");

module.exports = {
  Mutation: {
    async createUser(root, { username, password, firstName, lastName }, { models }) {
      const encryptedPassword = await bcrypt.hash(password, 10);

      return models.User.create({
        username,
        password: encryptedPassword,
        firstName,
        lastName,
        isActive: true
      });
    },
  },
};
