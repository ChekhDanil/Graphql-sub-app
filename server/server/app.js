const mongoose = require("mongoose");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { PubSub } = require("apollo-server-express");
const http = require("http");

const { typeDefs } = require("../typedefs/typedefs");
const { resolvers } = require("../resolvers/resolvers");

const app = express();
const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, pubsub })
});

server.applyMiddleware({ app });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

mongoose.connect(
  "mongodb+srv://admin:1234@training1-tyy5m.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const dbConnection = mongoose.connection;
dbConnection.on("error", err => console.log(`Connection error: ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

const PORT = 3005;

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );
});
