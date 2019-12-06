const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    name: String
  }
  type Query {
    Users: [User]
  }
`;
module.exports = {
  typeDefs
};
