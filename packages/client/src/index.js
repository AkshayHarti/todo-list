import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { TodoContextProvider } from "./todo-context";
import RouteApp from "./routes";

const GET_TODOS = gql`
  {
    getTodos {
      _id
      text
    }
  }
`;

const uri =
  process.env.NODE_ENV === "production"
    ? "https://todo-lean.herokuapp.com/graphql"
    : "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri,
});

const App = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <TodoContextProvider state={data.getTodos}>
      <RouteApp />
    </TodoContextProvider>
  );
};

const rootContainer = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootContainer
);
