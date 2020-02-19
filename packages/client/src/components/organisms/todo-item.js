import React from "react";
import styled from "styled-components";
import { DeleteButton, SortableHandle, TextField } from "../atoms";

const StyledTodoItem = styled.div`
  display: flex;
`;

const TodoItem = ({ text }) => {
  return (
    <StyledTodoItem>
      <SortableHandle />
      <TextField value={text} />
      <DeleteButton />
    </StyledTodoItem>
  );
};

export default TodoItem;
