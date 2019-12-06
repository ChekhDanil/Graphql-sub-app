const NEW_USER = "NEW_USER";
const Users = require("../models/user");

const resolvers = {
  Query: {
    users(parent, args, context, info) {
      return Users.find({});
    }
  },
  Mutation: {
    addUser: async (_, { name }) => {
      const user = new Users({ name });
      await user.save();
      return user;
    },
    deleteUser: async (_, { id }) => {
      const user = await Users.findByIdAndRemove(id);
      return user;
    }
  }
};

module.exports = {
  resolvers
};
