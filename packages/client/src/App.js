import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_TODOS = gql`
  {
    getTodos {
      _id
      text
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const todos = data.getTodos;

  return (
    <div className="App">
      <ul>
        {todos.map((value, index) => (
          <li key={index}>{value.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
