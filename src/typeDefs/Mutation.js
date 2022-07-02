const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    createUser(username: String!, password: String!, firstName: String!, lastName: String!): User!
    createReport(input: CreateReportInput!): Report!
    updateReport(input: UpdateReportInput!): Report!
  }
`;
