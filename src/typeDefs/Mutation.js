const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    addBook(title: String!, author: String!): Book!
  }
`;
