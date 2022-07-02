const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    async createUser(root, { username, password, firstName, lastName }, { models }) {
      const encryptedPassword = await bcrypt.hash(password, 10);

      return models.User.create({
        username,
        password: encryptedPassword,
        firstName,
        lastName,
        isActive: true,
      });
    },
    createReport(root, { input: { year, month, days } }, { models }) {
      return models.Report.create({
        year,
        month,
        isLocked: false,
        days,
        UserId: 3,
      });
    },
    async updateReport(root, { input: { id, days } }, { models }) {
      const returnValue = await models.Report.update(
        {
          days: days,
        },
        {
          where: {
            id,
            UserId: 3,
          },
          returning: true,
          plain: true,
        }
      );

      return returnValue[1].dataValues;
    },
  },
};
