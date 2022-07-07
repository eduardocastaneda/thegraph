const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  Mutation: {
    async createUser(root, { username, password, firstName, lastName }, { models, user }) {
      if (!user) throw new Error('Not Authenticated');

      const encryptedPassword = await bcrypt.hash(password, 10);

      return models.User.create({
        username,
        password: encryptedPassword,
        firstName,
        lastName,
        isActive: true,
      });
    },
    createReport(root, { input: { year, month, days } }, { models, user }) {
      if (!user) throw new Error('Not Authenticated');

      return models.Report.create({
        year,
        month,
        isLocked: false,
        days,
        UserId: 3,
      });
    },
    async updateReport(root, { input: { id, days } }, { models, user }) {
      if (!user) throw new Error('Not Authenticated');

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
    async login(root, { username, password }, { models }) {
      const user = await models.User.findOne({
        where: {
          username,
        },
      });
      if (!user) {
        throw new Error('Invalid Login, wrong password or username');
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Invalid Login, wrong username or password');
      }

      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: '30d',
        }
      );

      return {
        token,
      };
    },
  },
};
