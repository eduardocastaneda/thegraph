const { gql } = require('apollo-server');

module.exports = gql`
  type Login {
    token: String
  }
`;
