module.exports = {
  Query: {
    async books(root, args, { models }) {
      return models.Book.findAll();
    },
  },
};
