import React, { useContext } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { AddButton, SortableList, SortableItem } from "../atoms";
import { TodoItem } from "../organisms";
import { TodoContext } from "../../todo-context";

const CREATE_TODO = gql`
  mutation AddTodo($text: String) {
    addTodo(text: $text) {
      _id
      text
    }
  }
`;

const TodoItems = () => {
  const { todos, moveTodo } = useContext(TodoContext);

  return (
    <SortableList
      useDragHandle={true}
      onSortEnd={({ oldIndex, newIndex }) => moveTodo({ oldIndex, newIndex })}
    >
      {todos.map((todo, index) => (
        <SortableItem key={todo._id} index={index}>
          <TodoItem text={todo.text} />
        </SortableItem>
      ))}
    </SortableList>
  );
};

const TodoComponent = () => {
  const [addTodo] = useMutation(CREATE_TODO);
  const { setTodos } = useContext(TodoContext);

  const handleOnClick = async () => {
    addTodo("").then(data => {
      setTodos({ todos: data.addTodo });
    });
    // console.log({ data });
  };

  return (
    <>
      <TodoItems />
      <AddButton handleOnClick={handleOnClick} />
    </>
  );
};

export default TodoComponent;
