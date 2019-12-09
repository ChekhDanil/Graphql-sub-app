const Users = require("../models/user");
const NEW_USER = "NEW_USER";
const resolvers = {
  Query: {
    users(parent, args, context, info) {
      return Users.find({});
    }
  },
  Mutation: {
    addUser: async (_, { name }, { pubsub }) => {
      const user = new Users({ name });
      pubsub.publish(NEW_USER, {
        newUser: user
      });
      await user.save();
      return user;
    },
    deleteUser: async (_, { id }) => {
      const user = await Users.findByIdAndRemove(id);
      return user;
    }
  },
  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_USER)
    }
  }
};

module.exports = {
  resolvers
};
