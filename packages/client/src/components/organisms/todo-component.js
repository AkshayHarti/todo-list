import React, { useContext } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { AddButton, SortableList, SortableItem } from "../atoms";
import TodoItem from "./todo-item";
import { TodoContext } from "../../todo-context";

const CREATE_TODO = gql`
  mutation AddTodo($text: String) {
    addTodo(text: $text) {
      _id
      text
    }
  }
`;

const MOVE_TODO = gql`
  mutation MoveTodo($oldIndex: Int!, $newIndex: Int!) {
    moveTodo(oldIndex: $oldIndex, newIndex: $newIndex)
  }
`;

const TodoItems = () => {
  const { todos, moveTodo } = useContext(TodoContext);
  const [moveTodoGQL] = useMutation(MOVE_TODO);
  if (todos.length === 0) {
    return null;
  }

  return (
    <SortableList
      useDragHandle={true}
      onSortEnd={async ({ oldIndex, newIndex }) => {
        await moveTodoGQL({
          variables: {
            oldIndex,
            newIndex,
          },
        });

        return moveTodo({ oldIndex, newIndex });
      }}
    >
      {todos.map((todo, index) => (
        <SortableItem key={todo._id} index={index}>
          <TodoItem _id={todo._id} todoIndex={index} text={todo.text} />
        </SortableItem>
      ))}
    </SortableList>
  );
};

const TodoComponent = () => {
  const { createTodo, todos } = useContext(TodoContext);
  const [addTodoGQL] = useMutation(CREATE_TODO);

  const handleOnClick = async () => {
    const {
      data: {
        addTodo: { _id, text },
      },
    } = await addTodoGQL({ variables: { text: "" } });
    createTodo({ _id, text, todos });
  };

  return (
    <>
      <TodoItems />
      <AddButton handleOnClick={handleOnClick} />
    </>
  );
};

export default TodoComponent;
