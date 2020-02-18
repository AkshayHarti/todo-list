import React, { useContext } from "react";
import { TodoContext } from "./todo-context";

const TodoApp = () => {
  const { todos } = useContext(TodoContext);

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
};

export default TodoApp;
