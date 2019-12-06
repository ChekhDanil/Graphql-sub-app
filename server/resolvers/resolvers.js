const NEW_USER = "NEW_USER";
const Users = require("../models/user");

const resolvers = {
  Query: {
    users(parent, args, context, info) {
      return Users.find({});
    }
  }
};

module.exports = {
  resolvers
};
