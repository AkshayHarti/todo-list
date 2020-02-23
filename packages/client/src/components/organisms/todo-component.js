import React, { useContext } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { AddButton, SortableList, SortableItem } from "../atoms";
import { TodoItem } from "../organisms";
import { TodoContext } from "../../todo-context";

const TodoItems = () => {
  const { todos, moveTodo } = useContext(TodoContext);
  if (todos.length === 0) {
    return null;
  }
  console.log("todos = ", todos);

  return (
    <SortableList
      useDragHandle={true}
      onSortEnd={({ oldIndex, newIndex }) => moveTodo({ oldIndex, newIndex })}
    >
      {todos.map((todo, index) => (
        <SortableItem key={todo.id} index={index}>
          <TodoItem id={todo._id} todoIndex={index} text={todo.text} />
        </SortableItem>
      ))}
    </SortableList>
  );
};

const TodoComponent = () => {
  const { createTodo } = useContext(TodoContext);

  const handleOnClick = async () => {
    createTodo();
  };

  return (
    <>
      <TodoItems />
      <AddButton handleOnClick={handleOnClick} />
    </>
  );
};

export default TodoComponent;
