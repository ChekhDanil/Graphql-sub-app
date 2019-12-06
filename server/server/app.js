const graphqlHTTP = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3005;
const Users = require("../models/user");
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("../typedefs/typedefs");
const { resolvers } = require("../resolvers/resolvers");

const server = new ApolloServer({ typeDefs, resolvers, schema });

mongoose.connect(
  "mongodb+srv://admin:1234@training1-tyy5m.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const dbConnection = mongoose.connection;
dbConnection.on("error", err => console.log(`Connection error: ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
