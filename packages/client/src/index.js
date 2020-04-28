import React from "react";
import ReactDOM from "react-dom";
import reactime from "reactime";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { TodoContextProvider } from "./todo-context";
import { Query } from "react-apollo";
import RouteApp from "./routes";

const GET_TODOS = gql`
  {
    getTodos {
      _id
      text
    }
  }
`;

const client = new ApolloClient({
  uri: "https://todo-lean.herokuapp.com/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <Query query={GET_TODOS}>
      {({ error, loading, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <TodoContextProvider state={data.getTodos}>
            <RouteApp />
          </TodoContextProvider>
        );
      }}
    </Query>
  </ApolloProvider>
);

const rootContainer = document.getElementById("root");
ReactDOM.render(<App />, rootContainer);

reactime(rootContainer);
