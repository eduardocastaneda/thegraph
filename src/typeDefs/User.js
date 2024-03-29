const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    username: String!
    firstName: String!
    lastName: String!
    isActive: Boolean!
  }
`;
