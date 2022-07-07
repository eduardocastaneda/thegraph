const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const models = require('./models');

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

models.sequelize.authenticate();
models.sequelize.sync();

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
