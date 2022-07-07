const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const models = require('./models');
const jwt = require('jsonwebtoken');

const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, process.env.TOKEN_SECRET);
    }
    return null;
  } catch (err) {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const user = getUser(token);

    return { models, user };
  },
  introspection: true,
  playground: true,
});

models.sequelize.authenticate();
models.sequelize.sync();

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
