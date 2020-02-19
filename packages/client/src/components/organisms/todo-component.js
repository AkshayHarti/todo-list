import React, { useContext } from "react";
import { SortableList, SortableItem, SortableHandle } from "../atoms";
import { TodoContext } from "../../todo-context";

const TodoComponent = () => {
  const { todos, moveTodo } = useContext(TodoContext);

  return (
    <SortableList
      useDragHandle={true}
      onSortEnd={({ oldIndex, newIndex }) => moveTodo({ oldIndex, newIndex })}
    >
      {todos.map((todo, index) => (
        <SortableItem key={todo._id} index={index}>
          <SortableHandle />
          {todo.text}
        </SortableItem>
      ))}
    </SortableList>
  );
};

export default TodoComponent;
