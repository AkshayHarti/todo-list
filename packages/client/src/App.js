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
    <div
      className="App"
      style={{
        width: "300px",
        border: "1px solid grey",
        borderRadius: "10px",
        boxShadow: "4px 5px 10px -1px rgba(0,0,0,0.24)"
      }}
    >
      <ul>
        {todos.map((value, index) => (
          <li key={index}>{value.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
