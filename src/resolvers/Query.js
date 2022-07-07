module.exports = {
  Query: {
    users(root, args, { models, user }) {
      if (!user) throw new Error('Not Authenticated');

      return models.User.findAll();
    },
    user(root, args, { models, user }) {
      if (!user) return null;

      return models.User.findOne({
        where: {
          username: user.username,
        },
      });
    },
    report(root, { year, month }, { models, user }) {
      if (!user) throw new Error('Not Authenticated');

      return models.Report.findOne({
        where: {
          year,
          month,
          UserId: user.id,
        },
      });
    },
  },
};
