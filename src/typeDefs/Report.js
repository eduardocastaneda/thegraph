const { gql } = require('apollo-server');

module.exports = gql`
  type Report {
    id: ID!
    year: Int!
    month: Int!
    isLocked: Boolean!
    days: [Day]
  }

  input CreateReportInput {
    year: Int!
    month: Int!
    days: [DayInput]
  }

  input UpdateReportInput {
    id: ID!
    days: [DayInput]
  }

  input DayInput {
    day: Int!
    value: Int
  }

  type Day {
    day: Int!
    value: Int
  }
`;
