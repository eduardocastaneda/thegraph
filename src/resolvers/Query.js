module.exports = {
  Query: {
    async users(root, args, { models }) {
      return models.User.findAll();
    },
  },
};
