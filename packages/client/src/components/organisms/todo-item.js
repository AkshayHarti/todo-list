import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../todo-context";
import { DeleteButton, SortableHandle, TextField } from "../atoms";

const StyledTodoItem = styled.div`
  display: flex;
`;

const TodoItem = ({ id, todoIndex, text }) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  const handleTextChange = value => {
    updateTodo({ id, todoIndex, newValue: value });
  };

  const handleDeleteClick = () => {
    deleteTodo({ id, todoIndex });
  };

  return (
    <StyledTodoItem>
      <SortableHandle />
      <TextField value={text} handleTextChange={handleTextChange} />
      <DeleteButton handleOnClick={handleDeleteClick} />
    </StyledTodoItem>
  );
};

export default TodoItem;
