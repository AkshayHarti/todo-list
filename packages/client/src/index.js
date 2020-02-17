import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { TodoContextProvider } from "./todo-context/todo-context";
import { Query } from "react";

import App from "./routes";

const GET_TODOS = gql`
  {
    getTodos {
      _id
      text
    }
  }
`;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={GET_TODOS}>
      {({ error, loading, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <TodoContextProvider state={data}>
            <App />
          </TodoContextProvider>
        );
      }}
    </Query>
  </ApolloProvider>,
  document.getElementById("root")
);
