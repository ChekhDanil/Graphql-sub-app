const { gql } = require("apollo-server-express");
const Users = require("../models/user");

const typeDefs = gql`
  type Query {
    users: [User]
  }
  type User {
    id: ID!
    name: String
  }
  type Mutation {
    addUser(name: String!): User
    deleteUser(id: ID!): User
  }
`;

module.exports = {
  typeDefs
};
