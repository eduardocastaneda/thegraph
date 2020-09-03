module.exports = {
  Mutation: {
    async addBook(root, { title, author }, { models }) {
      return models.Book.create({
        title,
        author,
      });
    },
  },
};
