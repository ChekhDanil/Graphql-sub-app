/* const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = graphql;
const { PubSub } = require("apollo-server");

const pubsub = new PubSub();

const Users = require("../models/user");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) }
  })
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, { name }) {
        console.log(name);
        const user = new Users({
          name
        });
        return user.save();
      }
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Users.findByIdAndRemove(id);
      }
    }
  }
});
const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return Users.find({});
      }
    }
  }
});
const USER_ADDED = "USER_ADDED";
/* 
const Subscription = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    userAdded: {
      type:
      subscribe: () => pubsub.asyncIterator([USER_ADDED])
    }
  }
}); */
