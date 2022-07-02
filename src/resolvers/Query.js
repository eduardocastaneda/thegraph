module.exports = {
  Query: {
    users(root, args, { models }) {
      return models.User.findAll();
    },
    report(root, { year, month }, { models }) {
      return models.Report.findOne({
        where: {
          year,
          month,
          UserId: 3,
        },
      });
    },
  },
};
