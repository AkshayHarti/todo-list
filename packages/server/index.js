const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("./config");
const resolvers = require("./resolvers");
const { Todos } = require("./model");
const typeDefs = require("./schema");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (expressContext) => {
    return {
      db: { Todos },
    };
  },
});

const app = express();
server.applyMiddleware({ app });
const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello World!"));

// The `listen` method launches a web server.
app.listen(port, () =>
  console.log(
    `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);

// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
