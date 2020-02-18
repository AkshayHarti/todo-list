import React, { useContext } from "react";
import { SortableList, SortableItem } from "../atoms";
import { TodoContext } from "../../todo-context";

const TodoComponent = () => {
  const { todos, moveTodo } = useContext(TodoContext);

  return (
    <SortableList
      onSortEnd={({ oldIndex, newIndex }) => {
        console.log({ oldIndex, newIndex });

        return moveTodo({ oldIndex, newIndex });
      }}
    >
      {todos.map((todo, index) => (
        <SortableItem key={index} value={todo.text} />
      ))}
    </SortableList>
  );
};

export default TodoComponent;
