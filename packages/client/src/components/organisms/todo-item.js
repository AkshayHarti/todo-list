import React, { useContext } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { TodoContext } from "../../todo-context";
import { DeleteButton, SortableHandle, TextField } from "../atoms";

const UPDATE_TODO = gql`
  mutation UpdateTodo($_id: ID!, $text: String!) {
    updateTodo(_id: $_id, text: $text) {
      _id
      text
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($_id: ID!) {
    deleteTodo(_id: $_id)
  }
`;

const StyledTodoItem = styled.div`
  display: flex;
`;

const TodoItem = ({ _id, todoIndex, text }) => {
  const [updateTodoGQL] = useMutation(UPDATE_TODO);
  const [deleteTodoGQL] = useMutation(DELETE_TODO);
  const { updateTodo, deleteTodo, todos } = useContext(TodoContext);

  const handleTextChange = (value) => {
    updateTodo({ todoIndex, newValue: value, todos });
  };

  const handleDeleteClick = async () => {
    const {
      data: { deleteTodo: isDeleted },
    } = await deleteTodoGQL({ variables: { _id } });
    console.log({ isDeleted });

    if (isDeleted) {
      deleteTodo({ todoIndex, todos });
    }
  };

  const saveToDB = async () => {
    await updateTodoGQL({ variables: { _id, text } });
  };

  return (
    <StyledTodoItem>
      <SortableHandle />
      <TextField
        value={text}
        handleTextChange={handleTextChange}
        onBlur={saveToDB}
      />
      <DeleteButton handleOnClick={handleDeleteClick} />
    </StyledTodoItem>
  );
};

export default TodoItem;
