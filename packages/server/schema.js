const { gql } = require("apollo-server-express");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Todos {
    _id: ID
    text: String
    timestamp: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    getTodos: [Todos]
  }

  type Mutation {
    addTodo(text: String): Todos
    updateTodo(_id: ID!, text: String!): Todos
    deleteTodo(_id: ID!): Boolean
    moveTodo(oldIndex: Int!, newIndex: Int!): Boolean
  }
`;

module.exports = typeDefs;
